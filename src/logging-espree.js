import * as escodegen from "escodegen";
import * as espree from "espree";
import * as estraverse from "estraverse";
import * as fs from "fs/promises";

export async function transpile(inputFile, outputFile) {
  let input = await fs.readFile(inputFile, 'utf-8')
  const code = addLogging(input);
  if (outputFile === undefined) {
    console.log(code);
    return;
  }
  await fs.writeFile(outputFile, code)
  console.log('Output written to', outputFile);
}

export function addLogging(code) {
  const ast = espree.parse(code, {ecmaVersion:6, loc: true});
  estraverse.traverse(ast, {
    enter: function(node, parent) {
      if (node.type === 'FunctionDeclaration' ||
        node.type === 'FunctionExpression' ||
        node.type === 'ArrowFunctionExpression') {
        addBeforeCode(node);
      }
    }
  });
  return escodegen.generate(ast);
}

function addBeforeCode(node) {
  const name = node.id ? node.id.name : '<anonymous function>';
  const args = node.params.map( p => "${ "+ p.name +" }" );
  const line = node.loc.start.line;
  const beforeCode = "console.log(`Entering " + 
    name + "(" + args.join(', ') + ") at line " + line +"`);";
  const beforeNodes = espree.parse(beforeCode, {ecmaVersion:6}).body;
  node.body.body = beforeNodes.concat(node.body.body);
}
