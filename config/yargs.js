const argv = require('yargs')
                .option('b',{
                    alitas: 'base',
                    type:'number',
                    demandOption: true,
                    describe:'Es la base de tabla de multiplicar'
                })
                .option('h',{
                    alitas: 'hasta',
                    type:'number',
                    default: 10,
                    describe:'Es el numero hasta donde quieres la tabla'
                })
                .option('l',{
                    alitas: 'listar',
                    type:'boolean',
                    default:false,
                    describe: 'Muestra la tabla en consola'
                })
                .check((argv,options)=>{
                    console.log('yargs', argv)
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                })
                 .argv;


module.exports=argv;
