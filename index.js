const  readline = require( 'readline-sync' ) ; 
const chalk = require('chalk');

const yellow = chalk.yellow;
const white = chalk.underline.bold.black.bgWhite;
const green = chalk.green;
const blue = chalk.blue;
const ciano = chalk.cyan;
const array = []
let item = ''

console.log(white(`\n\nLista de Propriedades do CSS, ajude adicionando alguns itens na lista:\n Para ver a lista, digite "ver lista"\n`))

while( item.toLowerCase() != 'sair'){
    
    item = readline.question(yellow(`Digite as propriedades do ${ciano("CSS")}:`))
    if( item.toLowerCase() != 'sair' && item.toLowerCase() != 'ver lista' ){

        array.push(item.toLowerCase())
    }
    else if( item.toLowerCase() === 'ver lista'){
        console.log(`\n\n ${blue("Lista de propriedades CSS Ordenada de A-Z:")} \n\n` + green(array.sort().join('\n')))
    }
    else{
        console.log(`\n\n ${blue("Lista de propriedades CSS Ordenada de A-Z:")} \n\n` + green(array.sort().join('\n')))
    }
}


