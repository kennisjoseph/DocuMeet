
const mongoose = require('mongoose')

const Document = require('./DocumentDocument')

mongoose.connect('CONNECTION STRING',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

const io = require('socket.io')(3001,{
    cors:{
        origin: "http://localhost:5173",
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket)=>{
    console.log(socket + "connected")

    socket.on('get-document',async documentId=>{
        const document = await findOrCreateDocument(documentId);
        socket.join(documentId)
        socket.emit('load-document', document.data)
    })

    socket.on('disconnect', ()=>{console.log("Client Disconnected")})
})

async function findOrCreateDocument(documentId){
    if (id == null) return

    const document = await Document.findById(id)
    if (document) return document
    return await Document.create({
        _id:id,
        data: defValue
    })
}