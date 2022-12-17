// const ipadr = '130.45.34.36';
// const subnet = '255.255.240.0';
// const ipadrs = ipadr.split('.').map(Number);
// const subnets = subnet.split('.').map(Number);
// var ip=('ip:',ipadr);
// var subnet=('subnet',subnet);
// var class=('class:', getclass(ipadrs[0])) ;
// var wild=('wildcard: ', wildcard.join('.'));
// var net = ('netaddress: ',networks.join('.') ); // netaddress:  130.45.32.0
// var broad = ('broadcast address: ', broadcasts.join('.')); // broadcast address:  130.45.47.255


function getclass(ip) {
  if (ip >= 1 && ip <= 126)
    return 'A';
  else if (ip >= 128 && ip <= 191)
    return 'B';
  else if (ip >= 192 && ip <= 223)
    return 'C';
  else if (ip >= 224 && ip <= 239)
    return 'D';
  else
    return 'E';
}
function host(wild){
    if(wild[3]<255){
    return wild[3]+1; }
    else{
        let count=8;
        for(let i=2;i>=0;i--){
            if(wild[i]!==0){
             count+=Math.floor(Math.log2(wild[i]+1));
            }
            else{
                break;
            }
        }
        return Math.pow(2,count);
    }
}
function getnet(ipadrs,subnets){
  let networks = [];
  for (let i in ipadrs) {
    networks[i] = ipadrs[i] & subnets[i];
  }
  return networks;
}
function getbroad(networks,subnets){
  let broadcasts = [];
  for (let i in networks) {
    broadcasts[i] = networks[i] | ~subnets[i] + 256;
  }
  return (broadcasts);
}
function getwild(subnets){
  let wildcard=[];
  for (let i in subnets) {
    let ss=255;
    wildcard[i] = ss^subnets[i];
  }
  return wildcard;
}

module.exports.detail = function(ipadr,subnet) {
  const ipadrs = ipadr.split('.').map(Number);
  const subnets = subnet.split('.').map(Number);
  var networks=getnet(ipadrs,subnets);
  var broad=getbroad(networks,subnets);
  var clas=getclass(ipadrs[0]);
  var wild=getwild(subnets);
  var hosts=host(wild);

  let out=[];
  out.push(['IP-Addess',ipadrs.join('.')]);
  out.push(['Subnet',subnets.join('.')]);
  out.push(['Network',networks.join('.')]);
  out.push(['Broadcast',broad.join('.')]);
  out.push(['Total number of hosts',hosts]);
  out.push(['Number of usable hosts',hosts-2]);
  out.push(['Class',clas]);
  out.push(['WildCard',wild.join('.')]);
  return out;
}
