
const dgram = require('dgram')
const common = require("./common")

const server = dgram.createSocket('udp4');
const port = 41234
const multicastAddr = '225.0.0.100';

const broadcast = () => {
    server.send(common.getIP(),port,multicastAddr);
};

const start = ()=>{
    server.on('close',()=>{
        console.log(`Server closed`);
    })

    server.on('error', (err) => {
      console.log(`server error:\n${err.stack}`);
      server.close();
    });

    server.on('message', (msg, rinfo) => {
      // if(common.getIP()!=rinfo.address){
        console.log(`server got: ${msg}..............from ${rinfo.address}:${rinfo.port}`);
      // }
    });

    server.on('listening', () => {
      server.setBroadcast(true);
      server.setTTL(255);
      server.addMembership(multicastAddr);
      const address = server.address();
      console.log(`server listening ${address.address}:${address.port}`);
      setInterval(()=>{
        broadcast()
      },1000)
    });
    server.bind(port);
    console.log(`Server start`);

}

const close = ()=>{
  server.close()
}


module.exports =  {
    broadcast,
    start,
    close,
}