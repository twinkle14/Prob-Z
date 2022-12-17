function Stack() {
  this.stac = new Array();
  this.pop = function() {
    return this.stac.pop();
  }
  this.push = function(item) {
    this.stac.push(item);
  }
}
var postindex = 0;

function search(inn, data, n) {
  let i = 0;
  for (i = 0; i < n; i++) {
    if (inn[i] === data) {
      return i;
    }
  }
  return i;
}

function prin(inn, post, st, end, stack, n) {
  if (st > end) {
    return;
  }
  let val = post[postindex];
  let index = search(inn, val, n);
  postindex--;

  prin(inn, post, index + 1, end, stack, n);
  prin(inn, post, st, index - 1, stack, n);
  stack.push(val);
}

module.exports.convert = function(ino, pre) {

  let inor = ino.split(",").map(Number);
  let preo = pre.split(",").map(Number);
  let n = inor.length;
  let m = preo.length;
  if (n != m) {
    return "Invalid Input";
  } else {
    postindex = n - 1;
    var stack = new Stack();
    prin(inor, preo, 0, n - 1, stack, n);
    let out = [];
    for (let i = 0; i < n; i++) {
      out.push(stack.pop());
    }
    return out;
  }
}
