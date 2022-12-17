function printJobScheduling(arr, t) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - 1 - i); j++) {
      if (arr[j][2] < arr[j + 1][2]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let result = [];

  let job = [];
  for (let i = 0; i < t; i++) {
    job[i] = '-1';
    result[i] = false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = (t - 1, arr[i][1] - 1); j >= 0; j--) {
      if (result[j] == false) {
        result[j] = true;
        job[j] = arr[i][0];
        break;
      }
    }
  }
  return job;
}


// nm="a,b,c,d,e";
// pr="100,19,27,25,15";
// dd="2,1,2,1,3";
module.exports.convert = function(nm, pr, dd) {
  let names = nm.split(",");
  let profit = pr.split(",").map(Number);
  let deadline = dd.split(",").map(Number);
  let l=names.length;
  var a=[];
  for(let i=0;i<l;i++){
    a.push([names[i],deadline[i],profit[i]]);
  }
  out=printJobScheduling(a, 3);
  return out;
}
