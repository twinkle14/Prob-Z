
class Process
{
   constructor(pid,bt,art)
   {
       this.pid = pid;    // Process ID
       this.bt = bt;    // Burst Time
       this.art = art;    // Arrival Time
   }
}
function findWaitingTime( proc,n,wt)
{
   let rt = new Array(n);
       for (let i = 0; i < n; i++)
           rt[i] = proc[i].bt;
       let complete = 0, t = 0, minm = Number.MAX_VALUE;
       let shortest = 0, finish_time;
       let check = false;
       while (complete != n) {
           for (let j = 0; j < n; j++)
           {
               if ((proc[j].art <= t) &&
                 (rt[j] < minm) && rt[j] > 0) {
                   minm = rt[j];
                   shortest = j;
                   check = true;
               }
           }
           if (check == false) {
               t++;
               continue;
           }
           rt[shortest]--;
           minm = rt[shortest];
           if (minm == 0)
               minm = Number.MAX_VALUE;
           if (rt[shortest] == 0) {
               complete++;
               check = false;
               finish_time = t + 1;
               wt[shortest] = finish_time -
                            proc[shortest].bt -
                            proc[shortest].art;

               if (wt[shortest] < 0)
                   wt[shortest] = 0;
           }
           t++;
       }
}
function findTurnAroundTime(proc,n,wt,tat)
{
       for (let i = 0; i < n; i++)
           tat[i] = proc[i].bt + wt[i];
}
function findavgTime(proc,n)
{
   let wt = new Array(n), tat = new Array(n);
       let  total_wt = 0, total_tat = 0;
       findWaitingTime(proc, n, wt);
       findTurnAroundTime(proc, n, wt, tat);
       out=[];
       // document.write("Processes " +" Burst time " +  " Waiting time " +  " Turn around time<br>");
       for (let i = 0; i < n; i++) {
           total_wt = total_wt + wt[i];
           total_tat = total_tat + tat[i];
        //   out.push([proc[i].pid,proc[i].bt,wt[i],tat[i]]);
           // document.write(" " + proc[i].pid +" "+ proc[i].bt + " " + wt[i]+ "" + tat[i]+"<br>");
       }
       out.push((total_wt / n).toFixed(2));
  out.push((total_tat / n).toFixed(2));
      // out.push(["Average waiting time",total_wt / n]);
       //out.push(["Average turn around time = ",total_tat / n]);
       // document.write("Average waiting time = " +total_wt / n+"<br>");
       // document.write("Average turn around time = " +total_tat / n+"<br>");
      return out;
}
let pro="1,2,3,4";
let bur="6,8,7,3";
let arr="1,1,2,3";
module.exports.sjff = function(pro,bur,arr) {
  let processes = pro.split(",").map(Number);
  let burst_time = bur.split(",").map(Number);
  let arrival = arr.split(",").map(Number);
  let n = processes.length;
  let proc=[];
  for(let i=0;i<n;i++){
    proc.push(new Process(processes[i],burst_time[i],arrival[i]));
  }
  return findavgTime(proc, proc.length);
}
