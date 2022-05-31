

var it=0;
const content=document.querySelector(".Content");
const items = document.querySelectorAll("#timeline li");
setTimeout(()=>{
  document.querySelector("img").style.width="100px"
},50)
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWhith || document.documentElement.clientWidth)
  );
};
let i=0;
function run (){

  const item=items[i];
    if (isInViewport(item)) {
    
     item.style.display="block";
    
      item.classList.add("show");
      i++;
    }
}
const dot=document.querySelectorAll(".dotted");
dot[3].style.top="333px";
console.log(dot)
let k=0;
console.log(dot);
dot.forEach(item=>{
  item.addEventListener("mouseover",()=>{
   const cont= item.querySelector(".Content");
   cont.style.backgroundColor="#011f4b"
   cont.style.color="white";
  }
  )
})

dot.forEach(item=>{

  item.addEventListener("mouseout",()=>{
    const cont= item.querySelector(".Content");
    cont.style.backgroundColor="transparent" ;
    cont.style.color="transparent";
  }
  )
})
window.addEventListener("load", run);
window.addEventListener("scroll", ()=>{
  const {
    scrollTop,
    scrollHeight,
    clientHeight
} = document.documentElement;
let set;
let time;
  if(clientHeight + scrollTop >= scrollHeight - 5){
  dot[it].style.display="block";
  it++;
     // dot[it].style.transition="1s ease-in";
    run();
    run();
  }
});