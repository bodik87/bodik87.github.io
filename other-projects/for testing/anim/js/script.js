const box = document.querySelector("#mybox");
const btn = document.querySelector("#btn");

(function(){
  var count=0;
document.querySelector('#btn').addEventListener('click',function(){  
  if(count==0) {
    box.style.transform = "translate(50px)";
    count++
} else
  if(count==1) {
    box.style.transform = "translate(100px)";
  count++
} else
  if(count==2) {
  box.style.transform = "translate(50px)";
count++
} else
  if(count==3) {
    box.style.transform = "translate(0px)";
    count=0}
})})();
