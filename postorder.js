
var preindex=0;
function search(arr,st,en,data){
  let i=0;
  for(i=st;i<en;i++){
    if(arr[i]===data){
      return i;
    }
  }
  return i;
}
let out=[];
function prin(arr,pre,st,en)
{
  if(st>en){
    return;
  }
  let index=search(arr,st,en,pre[preindex++]);
  prin(arr,pre,st,index-1);
  prin(arr,pre,index+1,en);
  out.push(arr[index]);
}

module.exports.convert=function(ino,pre)
{
  out=[];
  let inor=ino.split(",").map(Number);
  let preo=pre.split(",").map(Number);
  let n=inor.length;
  let m=preo.length;
  if(n!=m){
    return "Invalid Input";
  }else{
    preindex=0;
    prin(inor,preo,0,n-1);
    return out;
  }
}
