
const colors = require('colors');
const fs= require('fs');

 const crearArchivo=async(base = 5, listar = false, hasta =10)=>{

 try{ 

      
    
        
        let salida='';
        
        
        for(let i=1; i<=hasta; i++){
        salida += `${base}x${('x'.green)} ${i}${'='.green}${base*i}\n`;
        }
        if(listar){
            console.log('==================='.green);
            console.log(' Tabla del '.green, colors.blue(base));
            console.log('==================='.green);
            console.log(salida);
            }
   
        
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
       return `tabla-${base}.txt`;
        
        
    }catch(err){
        return '....'
    }

 }
module.exports = {
    crearArchivo
}