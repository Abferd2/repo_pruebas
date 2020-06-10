//``

const { argv } = require('./config/yargs');
var colors = require('colors');

//const multiplicar = require('./multiplicar/multiplicar.js');
const { crearTabla, crearTableLimt } = require('./multiplicar/multiplicar.js');

console.log(`base: ${argv.base} `.rainbow);
console.log(`limite:  ${argv.limit}`.rainbow);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        crearTableLimt(argv.base, argv.limit)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch((err) => console.log(err));
        break;
    case 'crear':
        crearTabla(argv.base, argv.limit)
            .then(archivo => console.log(colors.yellow(`archivo creado:`), colors.bgWhite(colors.green(` ${archivo}`))))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('comand no reconocido');

}

/*
let parametro = argv[2];

let base = parametro.split("=")[1];
console.log(base);

crearTabla(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch((err) => console.log(err));
*/