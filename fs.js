const fs=require('fs');


// **** Code will write file ****

// fs.writeFile('message.txt','Hello world',(err)=>{
//   if(err) throw err;
//   console.log('File has been written');  
// })

// **** Code will read file data ****

fs.readFile('message.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);    
})