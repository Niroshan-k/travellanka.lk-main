const yala = {
 yalah1 : "",
 yalap1 : "",
 yalah2 : "",
 yalap2 : "",
 yalah3 : "",
 yalap3 : "",
 yalah4 : "",
 yalap4 : ""
};

fetch('yala.json')
  .then(Response => Response.json())
  .then(data => {
   yala.yalah1 = data.yalah1;
   yala.yalap1 = data.yalap1;
   yala.yalah2 = data.yalah2;
   yala.yalap2 = data.yalap2;
   yala.yalah3 = data.yalah3;
   yala.yalap3 = data.yalap3;
   yala.yalah4 = data.yalah4;
   yala.yalap4 = data.yalap4;

   localStorage.setItem("yala-page",JSON.stringify(data));

   const showbtn = document.getElementById("show");
   const submitbtn = document.getElementById("submit");
   const clear = document.getElementById("erase");
   const divshow = document.getElementById("unhide");
   const textarea = document.getElementById("edit1");
   const textarea2 = document.getElementById("edit2");
   const textarea3 = document.getElementById("edit3");
   const textarea4 = document.getElementById("edit4");
   
   

   const p1 = document.getElementById("p1");
   const p2 = document.getElementById("p2");
   const p3 = document.getElementById("p3");
   const p4 = document.getElementById("p4");
   

   showbtn.addEventListener("click",show);
   submitbtn.addEventListener("click",save);
   clear.addEventListener("click",clearedit);

   function show() {
    divshow.classList.add("edit-visible");
    textarea.value = data.yalap1;
    textarea2.value = data.yalap2;
    textarea3.value = data.yalap3;
    textarea4.value = data.yalap4;
    textarea5.value = data.yalap5;
   }

   function save() {
    divshow.classList.remove("edit-visible");
    p1.innerText = textarea.value;
    p2.innerText = textarea2.value;
    p3.innerText = textarea3.value;
    p4.innerText = textarea4.value;
   }

   function clearedit() {
    divshow.classList.remove("edit-visible");
    p1.innerText = data.yalap1;
    p2.innerText = data.yalap2;
    p3.innerText = data.yalap3;
    p4.innerText = data.yalap4;
   }
  })