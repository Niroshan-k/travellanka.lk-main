const wilpattu = {
 wilpattuheading1 : "",
 wilpattuheading2 : "",
 wilpattuheading3 : "",
 wilpattuheading4 : "",
 wilpattuheading5 : "",
 wilpattup1 : "",
 wilpattup2  : "",
 wilpattup3 : "",
 wilpattup4 : "",
 wilpattup5 : ""
};

fetch('wilpattu.json')
  .then(Response => Response.json())
  .then(data => {
   wilpattu.wilpattuheading1 = data.wilpattuheading1;
   wilpattu.wilpattuheading2 = data.wilpattuheading2;
   wilpattu.wilpattuheading3 = data.wilpattuheading3;
   wilpattu.wilpattuheading4 = data.wilpattuheading4;
   wilpattu.wilpattuheading5 = data.wilpattuheading5;
   wilpattu.wilpattup1 = data.wilpattup1;
   wilpattu.wilpattup2 = data.wilpattup2;
   wilpattu.wilpattup3 = data.wilpattup3;
   wilpattu.wilpattup4 = data.wilpattup4;
   wilpattu.wilpattup5 = data.wilpattup5;

   localStorage.setItem("wilpattu-page",JSON.stringify(data));
   
   const showbtn = document.getElementById("show");
   const submitbtn = document.getElementById("submit");
   const clear = document.getElementById("erase");
   const divshow = document.getElementById("unhide");
   const textarea = document.getElementById("edit1");
   const textarea2 = document.getElementById("edit2");
   const textarea3 = document.getElementById("edit3");
   const textarea4 = document.getElementById("edit4");
   const textarea5 = document.getElementById("edit5");
   

   const p1 = document.getElementById("p1");
   const p2 = document.getElementById("p2");
   const p3 = document.getElementById("p3");
   const p4 = document.getElementById("p4");
   const p5 = document.getElementById("p5");

   showbtn.addEventListener("click",show);
   submitbtn.addEventListener("click",save);
   clear.addEventListener("click",clearedit);

   function show() {
    divshow.classList.add("edit-visible");
    textarea.value = data.wilpattup1;
    textarea2.value = data.wilpattup2;
    textarea3.value = data.wilpattup3;
    textarea4.value = data.wilpattup4;
    textarea5.value = data.wilpattup5;
   }

   function save() {
    divshow.classList.remove("edit-visible");
    p1.innerText = textarea.value;
    p2.innerText = textarea2.value;
    p3.innerText = textarea3.value;
    p4.innerText = textarea4.value;
    p5.innerText = textarea5.value;
   }

   function clearedit() {
    p1.innerText = data.wilpattup1;
    p2.innerText = data.wilpattup2;
    p3.innerText = data.wilpattup3;
    p4.innerText = data.wilpattup4;
    p5.innerText = data.wilpattup5;
   }
  })