// Este archivo no está transpilado, así que debemos usar CommonJS y ES6

// Registrar Babel
require('babel-register')();

//Inhabilitar features de webpack que babel no entiende
require.extensions['.css'] = function() {};
