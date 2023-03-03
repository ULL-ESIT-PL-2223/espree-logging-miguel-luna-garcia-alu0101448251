## Functions

<dl>
<dt><a href="#transpile">transpile(inputFile, outputFile)</a></dt>
<dd><p>Transpile the input file and write the output to the output file.</p>
</dd>
<dt><a href="#addLogging">addLogging(code)</a> ⇒ <code>string</code></dt>
<dd><p>Add logging to the input code.</p>
</dd>
<dt><a href="#addBeforeCode">addBeforeCode(node)</a> ⇒ <code>object</code></dt>
<dd><p>Add code to the beginning of a function.</p>
</dd>
</dl>

<a name="transpile"></a>

## transpile(inputFile, outputFile)
Transpile the input file and write the output to the output file.

**Kind**: global function  

| Param | Type |
| --- | --- |
| inputFile | <code>string</code> | 
| outputFile | <code>string</code> | 

<a name="addLogging"></a>

## addLogging(code) ⇒ <code>string</code>
Add logging to the input code.

**Kind**: global function  
**Returns**: <code>string</code> - The code with logging added.  

| Param | Type |
| --- | --- |
| code | <code>string</code> | 

<a name="addBeforeCode"></a>

## addBeforeCode(node) ⇒ <code>object</code>
Add code to the beginning of a function.

**Kind**: global function  
**Returns**: <code>object</code> - The node with code added.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | The function node. |

