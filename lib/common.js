const os = require('os')
const getIP =()=>{
  iptable={},
  ip='',
  ifaces=os.networkInterfaces();
  for (var dev in ifaces) {
    ifaces[dev].forEach(function(details,alias){
      if (details.family=='IPv4') {
        // console.log(details.address)
        if(details.address != '127.0.0.1'){
          ip = details.address;
        }
        // iptable[dev+(alias?':'+alias:'')]=details.address;
      }
    });
  }
  return ip
}

module.exports = {
    getIP
}