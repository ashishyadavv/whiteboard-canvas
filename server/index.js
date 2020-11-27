const express= require('express')
const app= express()

const http=require('http')
const server=http.createServer(app);

const socket=require('socket.io')
const io=socket(server)

io.on('connection',onConnection)

function onConnection(socket){
    socket.on('drawing',(data)=> {
        socket.broadcast.emit('drawing',data)
    })
}

app.get('/',(req,res)=>{
    res.send('welcome to server')
})

server.listen(4000,()=>{
    console.log('server is up at http://localhost:4000')
})