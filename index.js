import  express  from "express";
import crypto from "crypto";

let todoList = [];
const app = express();

app.get('',(req, res) => {
    res.send({
        message: 'kết nối server'
    })
})
app.get('/api/v1/todo-list',(req,res)=>{
    res.send({
        data: todoList,
        message:'Thành công',
        success: true,
    });
})

app.get('/api/v1/todo-list/remove-duplicate',(req,res) => {
    const mapFilter = todoList.filter((item,index)=>{
        return todoList.findIndex((td)=>td.nameTodo === item.nameTodo) === index;
    });
    todoList=mapFilter;
    res.send({
        data: todoList,
        message:'Thành công',
        success: true,
    });

})
app.get('/api/v1/todo-list/add',(req,res)=> {
    const newTodo = {
        id: crypto.randomUUID,
        nameTodo: 'TT',
        createAt: new Date()
    };
    todoList.push(newTodo);
    res.send({
        data: {},
        message:'thêm thành công',
        success: true,
})
});
app.listen(5001,()=> {
    console.log('This server is runnning on');
})