// 기범 ㅋ딩
// const mainslider = documnet.getElementById("main_slider")
// const arry = ["imgbox1","imgbox2","imgbox3","imgbox4"];
// function slide(e) {
//   for (i = 0; i < arry.length; i++)
//   arry.eq(i).offset().left
//     e.preventDefault;
  

// }
// setInterval(slide, 5000);





// 구글 차용
// const mainslide = document.querySelector("#main_slider");
// const rw = window.getBoundingClientRect().width;
// function move(){

//     let curIndex = 0;

//     setInterval(function(){
//       mainslide.style.transition = "5s";
//       mainslide.style.transform = "translate3d(-"+rw*(curIndex+1)+"px, 0px, 0px)";

//         curIndex++;

//         if(curIndex === 4){
//             curIndex = -1;
//         }

//     },1000);
// }

// document.addEventListener("DOMContentLoaded", move);

///////  푸터 화살표 클릭이벤트  ///////////////



const btn = document.querySelector(".select");
const list = document.querySelector(".select_list")
const trans = document.querySelector("div.arrow");

function onclick() {
  list.classList.toggle("block");
  trans.classList.toggle("trans");

}
btn.addEventListener("click", onclick);
