import { WebSocketServer } from 'ws';

const services = () =>{
  //variables and constantes from websocket
  var port = 2424 
  const ws = new WebSocketServer({port});
  
  ws.on('connection', (ws) => {
      ws.on('message', (data) =>{
        console.log('recbiendo mensaje del cliente :' + data);
      })
      
      ws.send('klk te habla el servidor! 👌');
  })

}

export default services;