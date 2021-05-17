//підключаємо модуль express
var express=require('express');
var fs=require('fs');
//створюємо проект
var app=express();
//папка для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname));
//опрацювання кореневого шляху -віддати клієнту index.html
app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');
})
app.get('/getUsers',function(req,res){
  fs.readFile('data.json','utf-8',function(err,data){
    // console.log(data);
    res.send(data);
  })
})
//порт прослуховування для сервера
//автоматичний підбір для віддаленого сервера,
//або 7080 для localhost
app.listen(process.env.PORT||7080);
//повідомлення про запуск сервера
console.log('Run server!');
