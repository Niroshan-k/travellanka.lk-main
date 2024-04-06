const main = {}
const footer = {}
const footerbottom = {}

fetch('animal.json')
.then(Response => Response.json())
.then(data => {
 main.head1 = data.head1;
 main.head2 = data.head2;
 main.headp1 = data.headp1;
 main.headp2 = data.headp2;
 main.head3 = data.head3;
 main.p1 = data.p1;
 main.p2 = data.p2;
 main.p3 = data.p3;
 main.p4 = data.p4;
 main.p5 = data.p5;
 main.p6 = data.p6;
 main.p7 = data.p7;
 main.p8 = data.p8;
 main.p9 = data.p9;
 main.p10 = data.p10;
 main.p11 = data.p11;
 main.p12 = data.p12;
 main.p13 = data.p13;
 main.p14 = data.p14;
 main.p15 = data.p15;
 main.p16 = data.p16;
 main.p17 = data.p17;
 main.p18 = data.p18;
 main.p19 = data.p19;
 main.p20 = data.p20;
 main.h1 = data.h1;
 main.h2 = data.h2;
 main.h3 = data.h3;
 main.h4 = data.h4;
 main.h5 = data.h5;
 main.h6 = data.h6;
 main.h7 = data.h7;
 main.h8 = data.h8;
 main.h9 = data.h9;
 main.h10 = data.h10;
 main.h11 = data.h11;
 main.h12 = data.h12;
 main.h13 = data.h13;
 main.h14 = data.h14;
 main.h15 = data.h15;
 main.h16 = data.h16;
 main.h17 = data.h17;
 main.h18 = data.h18;
 main.h19 = data.h19;
 main.h20 = data.h20;
 footer.footer1 = data.footer1;
 footer.footer2 = data.footer2;
 footer.footer3 = data.footer3;
 footer.footer4 = data.footer4;
 footerbottom.footer5 = data.footer5;

 localStorage.setItem("animal-page",JSON.stringify(data));

 const editbtn = document.getElementById("edit-btn");
 const editarea1 = document.getElementById("edit-wilpattu");
 const editarea2 = document.getElementById("edit-yala");
 const showedit = document.getElementById("unhide");
 const submit = document.getElementById("editsave"); 

 const headp1 = document.getElementById("headp1");
 const headp2 = document.getElementById("headp2");

 editbtn.addEventListener("click",showeditarea);
 submit.addEventListener("click",saveedit);

 function showeditarea() {
  showedit.classList.add("edit-visible");
  editbtn.innerText = "Close";

  editbtn.addEventListener("click",closex);
  function closex() {
   showedit.classList.remove("edit-visible");
   editbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  }

  editarea1.value = data.headp1;
  editarea2.value = data.headp2;
 }
 function saveedit() {
  headp1.innerText = editarea1.value;
  headp2.innerText = editarea2.value;
  showedit.classList.remove("edit-visible");

  if(editarea1.value !== data.headp1 || editarea2.value !== data.headp2 ){
   let email = localStorage.getItem("email");
   localStorage.setItem(email+"-animal_headp1",editarea1.value);
   localStorage.setItem(email+"-animal_headp2",editarea2.value);
  }
 }


 const animaleditbtn = document.getElementById("edit-animals");
 const showanimaledit = document.getElementById("unhide-animal");
 const submitanimals = document.getElementById("editsaveanimals");

 const animaleditarea1 = document.getElementById("edit-p1");
 const animaleditarea2 = document.getElementById("edit-p2");
 const animaleditarea3 = document.getElementById("edit-p3");
 const animaleditarea4 = document.getElementById("edit-p4");
 const animaleditarea5 = document.getElementById("edit-p5");
 const animaleditarea6 = document.getElementById("edit-p6");
 const animaleditarea7 = document.getElementById("edit-p7");
 const animaleditarea8 = document.getElementById("edit-p8");
 const animaleditarea9 = document.getElementById("edit-p9");
 const animaleditarea10 = document.getElementById("edit-p10");
 const animaleditarea11 = document.getElementById("edit-p11");
 const animaleditarea12 = document.getElementById("edit-p12");
 const animaleditarea13 = document.getElementById("edit-p13");
 const animaleditarea14 = document.getElementById("edit-p14");
 const animaleditarea15 = document.getElementById("edit-p15");

 const p1 = document.getElementById("p1");
 const p2 = document.getElementById("p2");
 const p3 = document.getElementById("p3");
 const p4 = document.getElementById("p4");
 const p5 = document.getElementById("p5");
 const p6 = document.getElementById("p6");
 const p7 = document.getElementById("p7");
 const p8 = document.getElementById("p8");
 const p9 = document.getElementById("p9");
 const p10 = document.getElementById("p10");
 const p11 = document.getElementById("p11");
 const p12 = document.getElementById("p12");
 const p13 = document.getElementById("p13");
 const p14 = document.getElementById("p14");
 const p15 = document.getElementById("p15");

 animaleditbtn.addEventListener("click",showalledit);
 submitanimals.addEventListener("click",submitanimaledit);

 function showalledit() {
  showanimaledit.classList.add("edit-visible");
  animaleditbtn.innerText = "Close";

  animaleditbtn.addEventListener("click",close);
  function close() {
   showanimaledit.classList.remove("edit-visible");
   animaleditbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
   animaleditbtn.addEventListener("click",showalleditx);
   function showalleditx(){
    showanimaledit.classList.add("edit-visible");
    animaleditbtn.innerText = "Close";
   }
  }
  animaleditarea1.value = data.p1;
  animaleditarea2.value = data.p2;
  animaleditarea3.value = data.p3;
  animaleditarea4.value = data.p4;
  animaleditarea5.value = data.p5;
  animaleditarea6.value = data.p6;
  animaleditarea7.value = data.p7;
  animaleditarea8.value = data.p8;
  animaleditarea9.value = data.p9;
  animaleditarea10.value = data.p10;
  animaleditarea11.value = data.p11;
  animaleditarea12.value = data.p12;
  animaleditarea13.value = data.p13;
  animaleditarea14.value = data.p14;
  animaleditarea15.value = data.p15;
 }

 function submitanimaledit() {
  showanimaledit.classList.remove("edit-visible");
  animaleditbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  p1.innerText = animaleditarea1.value;
  p2.innerText = animaleditarea2.value;
  p3.innerText = animaleditarea3.value;
  p4.innerText = animaleditarea4.value;
  p5.innerText = animaleditarea5.value;
  p6.innerText = animaleditarea6.value;
  p7.innerText = animaleditarea7.value;
  p8.innerText = animaleditarea8.value;
  p9.innerText = animaleditarea9.value;
  p10.innerText = animaleditarea10.value;
  p11.innerText = animaleditarea11.value;
  p12.innerText = animaleditarea12.value;
  p13.innerText = animaleditarea13.value;
  p14.innerText = animaleditarea14.value;
  p15.innerText = animaleditarea15.value;
  

 }
});