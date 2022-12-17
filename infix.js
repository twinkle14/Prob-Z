function prec(c) {
    if(c === '^')
        return 3;
    else if(c === '/' || c==='*')
        return 2;
    else if(c === '+' || c === '-')
        return 1;
    else
        return -1;
}

module.exports.convert = function(str) {
  let st=new Array();
  let result="";
  for(let i=0;i<str.length;i++){
    let c=str[i];
    if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){
      result+=c;
    }

    else if(c==='('){
      st.push('(');
    }

    else if(c===')'){
      let top = st[st.length-1];
      while(top!=='('){
        result+=st.pop();
        top=st[st.length-1];
      }
      top=st.pop();
    }

    else{
      let top = st[st.length-1];
      while(st.length && prec(str[i]) <= prec(top)){
        result+=st.pop();
        top = st[st.length-1];
      }
      st.push(c);
    }
  }
  while(st.length){
    result+=st.pop();
  }
  return result;
}
