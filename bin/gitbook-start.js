#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');
var fs2 = require('fs');
//var iaas = require('/Users/casiano/local/src/ruby/STW/alus/1617/nueva-funcionalidad-para-el-paquete-npm-plugins-aitor-joshua-samuel/node_modules/gitbook-start-iaas-ull-es-aitor-joshua-samuel/index.js');
var iaas = require('gitbook-start-iaas-ull-es-aitor-joshua-samuel');
console.log(iaas);


if (argv.n) {
    var second_path = path.resolve(__dirname, "../template")
    fs.copyDir(second_path, "./" + argv.n, function(err) {
        if (err)
            console.error(err)
    });

} else if (argv.d) {

  iaas.initialize();

} else {
    console.log("Añada un comando correcto");
    console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}
