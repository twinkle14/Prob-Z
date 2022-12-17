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
  for(let i=l-1;i>=0;i--){
    if(operator(str[i])){
      let op1=s.pop();
      let op2=s.pop();

      let temp=op1+op2+str[i];
      s.push(temp);
    }
    else{
      let x="";
      x+=str[i];
      s.push(x);
    }
  }

  return s.pop();
}
