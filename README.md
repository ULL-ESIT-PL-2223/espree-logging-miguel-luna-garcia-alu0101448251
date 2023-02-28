[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10315187)
# Práctica Espree logging

## Resumen de lo aprendido

Al ejecutar la función addLogging podemos observar que añade un console.log() que muestra el nombre de la función que se está llamando. Esto lo consigue de la siguiente manera:
1. Se genera un AST del código fuente de la función que se le pasa como parámetro.
2. Se recorre el AST en busca de nodos de tipo `FunctionDeclaration` y `FunctionExpression`.
3. Se llama a la función `addBeforeCode()`, a la que se le pasa por parámetros el nodo con la llamada a la función.
4. La función `addBeforeCode()` genera el código del console.log(), lo parsea y lo añade al nodo que se le pasa por parámetros.

## Indicar los valores de los argumentos

Se ha modificado el código de `logging-espree.js` para que el log también indique los valores de los argumentos que se pasaron a la función. 
Ejemplo:

```javascript
function foo(a, b) {
  var x = 'blah';
  var y = (function (z) {
    return z+3;
  })(2);
}
foo(1, 'wut', 3);
```

```javascript
function foo(a, b) {
    console.log(`Entering foo(${ a }, ${ b })`);
    var x = 'blah';
    var y = function (z) {
        console.log(`Entering <anonymous function>(${ z })`);
        return z + 3;
    }(2);
}
foo(1, 'wut', 3);
```

## CLI con [Commander.js](https://www.npmjs.com/package/commander)

...

## Reto 1: Soportar funciones flecha

...

## Reto 2: Añadir el número de línea

...

## Tests and Covering

...