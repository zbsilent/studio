// 文件操作 读取io

var fs = require('fs');
//function openSync(path: fs.PathLike, flags: fs.OpenMode, mode?: fs.Mode): number

// var fd = fs.openSync('./1.txt',"w");
// var str = Buffer.from("hello world")
// console.log(fd)
// fs.writeSync(fd,str);
// fs.appendFileSync('./1.txt',"ceshi",'utf-8')
// fs.closeSync(fd)


// fs.open("./21.txt2","r",(err,fd)=>{
//     if(!err){
//         console.log(fd)
//     }else{
//         console.log(err.message)
//     }
   
// });
// fs.readFile("/21x.txt",(err,data)=>{
//     if(!err){
//         console.log(data)
//     }else{
//         console.log(err.message)
//     }
// })

//创建一个可写流 
var ws = fs.createWriteStream('./1.txt');
//绑定一个一次行事件 创建一次后自动失效 
ws.once("open",()=>{
    console.log("open")
})
ws.write("通过可写流写入文件内容",(error)=>{
    if(error) console.log(error); 
})
//流式需要end关闭
ws.end()
ws.once("close",()=>{
    console.log("close")
})
