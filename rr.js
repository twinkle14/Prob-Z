const findWaitingTime = (processes, n, bt, wt, quantum) => {
  let rem_bt = new Array(n).fill(0);
  for (let i = 0; i < n; i++)
    rem_bt[i] = bt[i];

  let t = 0; // Current time
  while (1) {
    let done = true;
    for (let i = 0; i < n; i++) {
      if (rem_bt[i] > 0) {
        done = false; // There is a pending process
        if (rem_bt[i] > quantum) {
          t += quantum;
          rem_bt[i] -= quantum;
        } else {
          t = t + rem_bt[i];
          wt[i] = t - bt[i];
          rem_bt[i] = 0;
        }
      }
    }
    if (done == true)
      break;
  }
}
const findTurnAroundTime = (processes, n, bt, wt, tat) => {
  for (let i = 0; i < n; i++)
    tat[i] = bt[i] + wt[i];
}
const findavgTime = (processes, n, bt, quantum) => {
  let wt = new Array(n).fill(0),
    tat = new Array(n).fill(0);
  let total_wt = 0,
    total_tat = 0;
  findWaitingTime(processes, n, bt, wt, quantum);
  findTurnAroundTime(processes, n, bt, wt, tat);

  out=[];
  // out.push(["P. Name","Burst Time","Wait Time","TAT"])
  // document.write(`Processes Burst time Waiting time Turn around time<br/>`);
  for (let i = 0; i < n; i++) {
    total_wt = total_wt + wt[i];
    total_tat = total_tat + tat[i];
  //  out.push([i+1,bt[i],wt[i],tat[i]]);
    // document.write(`${i + 1} ${bt[i]} ${wt[i]} ${tat[i]}<br/>`);
  }
  out.push(total_wt / n);
  out.push(total_tat / n);
//  out.push(["Average waiting time",total_wt / n]);
  //out.push(["Average turn around time = ",total_tat / n]);
  // document.write(`Average waiting time = ${total_wt / n}`);
  // document.write(`<br/>Average turn around time = ${total_tat / n}`);
  return out;
}


let pro = "1,2,3";
let bt = "10,5,8";
let qt = 2;
module.exports.rrr = function(pro, bt, qt) {
  let processes = pro.split(",").map(Number);
  let burst_time = bt.split(",").map(Number);
  let quantum = Number(qt);
  let n = processes.length;
  return findavgTime(processes, n, burst_time, quantum);
}
