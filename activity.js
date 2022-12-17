
function MaxActivities(arr, n){
    let selected = [];
    Activity = Activity.sort(function(a,b) {
    return a[1] - b[1];
    });
    let i = 0
    selected.push(arr[i]);
    for(let j=1;j<n;j++){
      if( arr[j][0] >= arr[i][1]){
          selected.push(arr[j]);
          i = j;
      }
    }
    return selected;
}
// 
// let ss="1,3,0,5,8,5";
// let ff="2,4,6,7,9,9";
module.exports.convert = function(ss,ff){
  let s=ss.split(",").map(Number);
  let f=ff.split(",").map(Number);
  let n = s.length;
  Activity = [];
  for(let i=0;i<n;i++){
    Activity.push([s[i],f[i]]);
  }
  let out=MaxActivities(Activity, n);
  return out;
}
