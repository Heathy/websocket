const WebSocket = require('ws');
// console.log(new WebSocket.Server())
const Wss = new WebSocket.Server({
  port: 6000,
  host: 122,
  path: "sdadadada",
  handleProtocols: WebSocket,
})
console.log(Wss)
Wss.on('connection', client => {
  console.log("socket正在连接")
  client.on('message', msg => {
    console.log('客户端发送数据给服务端了: ' + msg)
    client.send('hello socket from backend')
  })
}) 
