function findWaitingTime(processes, n, bt, wt) {
  wt[0] = 0;
  for (let i = 1; i < n; i++) {
    wt[i] = bt[i - 1] + wt[i - 1];
  }
}
function findTurnAroundTime(processes, n, bt, wt, tat) {
  for (let i = 0; i < n; i++) {
    tat[i] = bt[i] + wt[i];
  }
}
function findavgTime(processes, n, bt) {
  let wt = new Array(n),
    tat = new Array(n);
  for (let i = 0; i < n; i++) {
    wt[i] = 0;
    tat[i] = 0;
  }
  let total_wt = 0,
    total_tat = 0;
  findWaitingTime(processes, n, bt, wt);
  findTurnAroundTime(processes, n, bt, wt, tat);
  // document.write("Processes Burst time Waiting" +
  //   " time Turn around time<br>");

  let out=[];
//  out.push(["P. Name","Burst Time","Wait Time","TAT"])
  for (let i = 0; i < n; i++) {
    total_wt = total_wt + wt[i];
    total_tat = total_tat + tat[i];
  //  out.push([i+1,bt[i],wt[i],tat[i]]);
  }
  let s = total_wt / n;
  let t = Math.floor(total_tat / n);
  out.push((s).toFixed(2));
  out.push((t).toFixed(2));
//  out.push(["Average waiting time",s]);
//  out.push(["Average turn around time = ",t]);
  return out;
}

let pro="1,2,3";
let bt="10,5,8";

module.exports.fcfss = function(pro,bt){
  let processes=pro.split(",").map(Number);
  let burst_time=bt.split(",").map(Number);
  let n = processes.length;

  return findavgTime(processes, n, burst_time);
}
