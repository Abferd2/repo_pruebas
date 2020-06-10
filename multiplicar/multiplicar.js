//require
const fs = require('fs');
var colors = require('colors');

let crearTabla = (base, limit = 10) => {

    return new Promise((res, rej) => {

        if (!Number(base) || !Number(limit)) {
            rej(base + ' o ' + limit + ' -uno de los parametros no es numerico');
            return;
        }

        let dataText = '';

        for (let i = 1; i <= limit; i++) {
            dataText += (`${base} * ${i} = ${base*i} \n`);
        }

        const data = new Uint8Array(Buffer.from(dataText));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rej(err)
            res(`tabla-${base}.txt`);
        });
    });
}

let crearTableLimt = (base, limit = 10) => {

    return new Promise((res, rej) => {

        if (!Number(base) || !Number(limit)) {
            rej(base + ' o ' + limit + ' -uno de los parametros no es numerico');
            return;
        }

        let dataText = '';
        console.log(colors.rainbow(`#################################`));
        for (let i = 1; i <= limit; i++) {
            console.log(colors.bgBlue(`${base} * ${i} = ${base*i}`));

            dataText += (`${base} * ${i} = ${base*i} \n`);
        }
        console.log(colors.rainbow(`#################################`));

        const data = new Uint8Array(Buffer.from(dataText));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rej(err)
            res(`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    crearTabla,
    crearTableLimt
}