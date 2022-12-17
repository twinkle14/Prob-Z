var preindex = 0;
class node
{
    constructor(data)
    {
        this.data = data;
    }
}
function constructTreeUtil(pre, post, l, h, size)
{
   if (preindex >= size || l > h)
    {
        return null;
    }
   var root = new node(pre[preindex]);
    preindex++;
   if (l == h || preindex >= size)
    {
        return root;
    }
    var i;
   for (i = l; i <= h; i++)
    {
        if (post[i] == pre[preindex])
        {
            break;
        }
    }
  if (i <= h)
    {
        root.left = constructTreeUtil(pre, post,  l, i, size);
        root.right = constructTreeUtil(pre, post,i + 1, h-1, size);
    }
    return root;
}
function constructTree(pre, post, size)
{
    preindex = 0;
    return constructTreeUtil(pre, post, 0, size - 1, size);
}
var out=[];
function printInorder(root)
{
    if (root == null)
    {
        return;
    }
    printInorder(root.left);
    out.push(root.data);
    printInorder(root.right);
}

// let pre="1,2,4,8,9,5,3,6,7";
// let post="8,9,4,5,2,6,7,3,1";
module.exports.convert=function(pr,po)
{
  let pre=pr.split(",").map(Number);
  let post=po.split(",").map(Number);
  let n=pre.length;
  let m=post.length;
  if(n!=m){
    return "Invalid Input";
  }else{
    out=[];
    var root = constructTree(pre, post,n);
    printInorder(root);
    return out;
  }
}
