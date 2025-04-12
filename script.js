const input = document.querySelector(".input");
const btns = document.querySelectorAll(".btn");
const clrBtn = document.querySelector(".clrBtn");
const equalBtn = document.getElementById("equal");
const delBtn = document.getElementById("del")

// for(let i=0;i<btns.length;i++){
//     btns[i].addEventListener("click", function () {
//         input.value += btns[i].textContent;
//     })
// }

btns.forEach(btn => {
    btn.addEventListener("click", () => {
      let val = btn.innerText.trim();
      input.value += val;
    });
  });
  

equalBtn.addEventListener("click", ()=>{
 input.value = eval(input.value)
})

clrBtn.addEventListener("click",function (){
    input.value="";
})

delBtn.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
  });