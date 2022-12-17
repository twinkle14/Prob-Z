const express = require("express");
const bp = require("body-parser");
const ip6to4=require(__dirname+"/ip6to4.js");
const ip4to6=require(__dirname+"/ip4to6.js");
const ipd=require(__dirname+"/ipdetail.js")

const rr=require(__dirname+"/rr.js")
const sjf=require(__dirname+"/sjf.js")
const fcfs=require(__dirname+"/fcfs.js")

const postorder=require(__dirname+"/postorder.js")
const preorder=require(__dirname+"/preorder.js")
const inorder=require(__dirname+"/inorder.js")
const posttopre=require(__dirname+"/posttopre.js");
const pretopost=require(__dirname+"/pretopost.js")
const infix=require(__dirname+"/infix.js")
const knapsack=require(__dirname+"/knapsack.js")
const job=require(__dirname+"/jobseq.js")
const activity=require(__dirname+"/activity.js")
const app = express();
app.use(express.static("public"));
app.use(bp.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');



app.post("/ip6Toip4",function(req,res){
  if(req.body.code==="ip6Toip4"){
    var inp=req.body.ip;
    var out=ip6to4.convert(inp);
      res.render("result",{heading:"Ip6 to Ip4 conversion is:", value:out})
  }
  else{
    res.redirect("/ip6Toip4");
  }
});
app.post("/ip4Toip6",function(req,res){

  if(req.body.code==="ip4Toip6"){
    var inp=req.body.ip;
    var out=ip4to6.convert(inp);
    res.render("result",{heading:"Ip4 to Ip6 conversion is:", value:out})
  }
  else{
    res.redirect("/ip4Toip6");
  }
});
app.post("/ipdetail",function(req,res){

  if(req.body.code==="ipdetail"){
    var inp=req.body.ip;
    var sub=req.body.subnet;
    var out=ipd.detail(inp,sub);
     res.render("result1",{output:out});
  }
  else{
    res.redirect("/ipDetails");
  }
});
app.post("/sjf",function(req,res){
  if(req.body.code==="sjf"){
    var pro=req.body.pro;
    var bur=req.body.bur;
    var arr=req.body.arr;
    var out=sjf.sjff(pro,bur,arr);
    res.send(out.join(','));
    res.render("result",{heading:"Average Waiting Time and Average Turn Around Time are Respectively:", value:out.toFixed(2)})
  }
  else{
    res.redirect("/sjf");
  }
});
app.post("/rr",function(req,res){
  if(req.body.code==="rr"){
    var pro=req.body.pro;
    var bt=req.body.burst;
    var qt=req.body.qt;
    var out=rr.rrr(pro,bt,qt);
    res.render("result",{heading:"Average Waiting Time and Average Turn Around Time are Respectively:", value:out.toFixed(2)})

  }
  else{
    res.redirect("/round");
  }
});
app.post("/fcfs",function(req,res){
  if(req.body.code==="fcfs"){
    var pro=req.body.pro;
    var bt=req.body.bt;
    var out=fcfs.fcfss(pro,bt);
    res.render("result",{heading:"Average Waiting Time and Average Turn Around Time are Respectively:", value:out})

  }
  else{
    res.redirect("/fcfs");
  }
});

app.post("/postorder",function(req,res){

  if(req.body.code==="postorder"){
    var ino=req.body.in;
    var pre=req.body.pre;
    var out=postorder.convert(ino,pre);
    res.render("result",{heading:"Postorder is:", value:out})
  }
  else{
    res.redirect("/postorder");
  }
});
app.post("/preorder",function(req,res){

  if(req.body.code==="preorder"){
    var ino=req.body.in;
    var post=req.body.post;
    var out=preorder.convert(ino,post);
    res.render("result",{heading:"Preorder is:", value:out})
  }
  else{
    res.redirect("/preorder");
  }
});
app.post("/inorder",function(req,res){

  if(req.body.code==="inorder"){

    var pre=req.body.pre;
    var post=req.body.post;
    var out=inorder.convert(pre,post);
    console.log(out);
    res.render("result",{heading:"Inorder is:", value:out})
  }
  else{
    res.redirect("/inorder");
  }
});
app.post("/posttopre",function(req,res){

  if(req.body.code==="posttopre"){
    var ino=req.body.str;
    var out=posttopre.convert(ino);
    res.render("result",{heading:"Prefix is:", value:out})
  }
  else{
    res.redirect("/posttopre");
  }
});
app.post("/pretopost",function(req,res){

  if(req.body.code==="pretopost"){
    var ino=req.body.str;
    var out=pretopost.convert(ino);
    res.render("result",{heading:"Postfix  is:", value:out})
  }
  else{
    console.log("123");
    res.redirect("/pretopost");
  }
});
app.post("/infix",function(req,res){

  if(req.body.code==="infix"){
    var ino=req.body.str;
    var out=infix.convert(ino);
    res.render("result",{heading:"Infix is:", value:out})
  }
  else{
    res.redirect("/infix");
  }
});
app.post("/knapsack",function(req,res){

  if(req.body.code==="knapsack"){
    var tar=req.body.tar;
    var wt=req.body.wt;
    var val=req.body.val;
    var out=knapsack.convert(val,wt,tar);
    out=out+"";
    console.log(out);
    res.render("result",{heading:"Maximum Profit is :", value:out});
  }
  else{
    res.redirect("/knapsack");
  }
});
app.post("/job",function(req,res){

  if(req.body.code==="job"){
    var nm=req.body.nm;
    var pr=req.body.pr;
    var dd=req.body.dd;
    var out=job.convert(nm, pr, dd);
    console.log(out);
    res.render("result",{heading:"Sequence of Jobs are:", value:out.join(',')});
  }
  else{
    res.redirect("/job");
  }
});
app.post("/activity",function(req,res){

  if(req.body.code==="activity"){

    var st=req.body.st;
    var ft=req.body.ft;
    var out=activity.convert(st,ft);
    console.log(out);
    let o="";
    for(let i=0;i<out.length;i++){
      o+="(" + out[i].join(",") +")  ";
    }
    res.render("result",{heading:"Selected Activities are :", value:o});
  }
  else{
    res.redirect("/activity");
  }
});



app.listen(process.env.PORT || 3000, function() {
  console.log("server started on port 3000");
});
app.get("/", function(req, res) {
  res.render('index', {});
});
app.get("/activity", function(req, res) {
  res.render('activity', {});
});
app.get("/deadlock", function(req, res) {
  res.render('deadlock', {});
});
app.get("/fcfs", function(req, res) {
  res.render('fcfs', {});
});
app.get("/greedy", function(req, res) {
  res.render('greedy', {});
});
app.get("/infix", function(req, res) {
  res.render('infix', {});
});
app.get("/inorder", function(req, res) {
  res.render('inorder', {});
});
app.get("/ip4Toip6", function(req, res) {
  res.render('ip4Toip6', {});
});
app.get("/ip6Toip4", function(req, res) {
  res.render('ip6Toip4', {});
});
app.get("/ipDetails", function(req, res) {
  res.render('ipDetails', {});
});
app.get("/job", function(req, res) {
  res.render('job', {});
});
app.get("/knapsack", function(req, res) {
  res.render('knapsack', {});
});
app.get("/page", function(req, res) {
  res.render('page', {});
});
app.get("/postfix", function(req, res) {
  res.render('postfix', {});
});
app.get("/postorder", function(req, res) {
  res.render('postorder', {});
});
app.get("/prefix", function(req, res) {
  res.render('prefix', {});
});
app.get("/preorder", function(req, res) {
  res.render('preorder', {});
});
app.get("/round", function(req, res) {
  res.render('round', {});
});
app.get("/sjf", function(req, res) {
  res.render('sjf', {});
});
app.get("/stack", function(req, res) {
  res.render('stack', {});
});
app.get("/tree", function(req, res) {
  res.render('tree', {});
});
