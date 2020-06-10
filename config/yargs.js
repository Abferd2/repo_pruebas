const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'impr multiplicarr', opt)
    .command('crear', 'crear arch multiplicarr', opt)
    .help().argv;

module.exports = {
    argv
}