
module.exports.convert=function(x)
{
  let ipV4 = x;
  let address = ipV4.split('/');
  let classValues = [];

  if(address.length){
    classValues = address[0].split('.');
  }
  if(classValues.length){
    let str = classValues.reduce((acc, val, ind)=>{
      let mod = +val >= 16 ? +val%16 : +val;
      let divider = +val >= 16 ? (val-mod)/16 : 0;
      const hexaCode = (hexaVal)=>{
        switch(hexaVal){
        case 10:
          hexaVal = 'A';
          break;
        case 11:
          hexaVal = 'B';
          break;
        case 12:
          hexaVal = 'C';
          break;
        case 13:
          hexaVal = 'D';
          break;
        case 14:
          hexaVal = 'E';
          break;
        case 15:
          hexaVal = 'F';
          break;
        default:
          hexaVal = hexaVal;
          break;
      }
        return hexaVal;
      }
      mod = hexaCode(mod);
      divider = hexaCode(divider);
      return ind === 1 ? `${acc}${divider}${mod}:`:`${acc}${divider}${mod}`
    },'')
    return `2002:${str}::/${address[1]}`;
  }
    return "Invalid Address";
}
