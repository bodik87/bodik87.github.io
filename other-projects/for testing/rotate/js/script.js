const box = document.querySelector("#mybox");
const btn = document.querySelector("#btn");

(function(){
  var count=0;
document.querySelector('#btn').addEventListener('click',function(){  
  if(count==0) {
    box.style.transform = "rotate(70deg)";
    count++
} else
  if(count==1) {
    box.style.transform = "rotate(140deg)";
  count++
} else
  if(count==2) {
  box.style.transform = "rotate(270deg)";
count++
} else
  if(count==3) {
    box.style.transform = "rotate(1deg)";
    count=0}
})})();
