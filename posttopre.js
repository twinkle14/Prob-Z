function operator(x) {
  switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
      return true;
      break;

    default:
      return false;
  }
}

module.exports.convert = function(str) {
  var s=new Array();
  let l=str.length;
  for(let i=0;i<l;i++){
    if(operator(str[i])){
      let op1=s.pop();
      let op2=s.pop();

      let temp=str[i]+ op2+op1;
      s.push(temp);
    }
    else{
      let x="";
      x+=str[i];
      s.push(x);
    }
  }
  let out="";
  while(s.length>0){
    out+=s.pop();
  }
  return out;
}
