const main = {
  headword : "",
  headtext : "",
  p1 : "",
  p2 : "",
  p3 : "",
  p4 : "",
  p5 : "",
  p6 : "",
  p7 : "",
  p8 : "",
  p9 : "",
  p10 : "",
  head1 : "",
  head2 : "",
  head3 : "",
  protect : [],
  head4 : "",
  head5 : "",
  head6 : "",
  subhead1 : "",
  location : ""
}

fetch('dowc.json')
.then(Response => Response.json())
.then(data => {
  main.headword = data.headword;
  main.headtext = data.headtext;
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
  main.head1 = data.head1;
  main.head2 = data.head2;
  main.head3 = data.head3;
  main.head4 = data.head4;
  main.subhead1 = data.subhead1;
  main.protect = data.protect;
  main.head5 = data.head5;
  main.head6 = data.head6;
  main.location = data.location;


  /*localStorage.setItem("dowc-headword",data.headword);
  localStorage.setItem("dowc-headtext",data.headtext);
  localStorage.setItem("dowc-p1",data.p1);
  localStorage.setItem("dowc-p2",data.p2);
  localStorage.setItem("dowc-p3",data.p3);
  localStorage.setItem("dowc-p4",data.p4);
  localStorage.setItem("dowc-p5",data.p5);
  localStorage.setItem("dowc-p6",data.p6);
  localStorage.setItem("dowc-p7",data.p7);
  localStorage.setItem("dowc-p8",data.p8);
  localStorage.setItem("dowc-p9",data.p9);
  localStorage.setItem("dowc-p10",data.p10);
  localStorage.setItem("dowc-head1",data.head1);
  localStorage.setItem("dowc-head2",data.head2);
  localStorage.setItem("dowc-head3",data.head3);
  localStorage.setItem("dowc-head4",data.head4);
  localStorage.setItem("dowc-head5",data.head5);
  localStorage.setItem("dowc-head6",data.head6);
  localStorage.setItem("dowc-subhead",data.subhead1);
  localStorage.setItem("dowc-location",data.location);
  localStorage.setItem("dowc-protect",data.protect); */

  const area = document.getElementById("unhide");
  const areax = document.getElementById("unhidex");
  const showbtn = document.getElementById("show-p");
  const txtarea1 = document.getElementById("edit-p1");
  const txtarea2 = document.getElementById("edit-p2");
  const txtarea3 = document.getElementById("edit-p3");
  const txtarea4 = document.getElementById("edit-p4");
  const txtarea5 = document.getElementById("edit-p5");
  const txtarea6 = document.getElementById("edit-p6");
  const txtarea7 = document.getElementById("edit-p7");
  const txtarea8 = document.getElementById("edit-p8");
  const txtarea9 = document.getElementById("edit-p9");
  const txtarea10 = document.getElementById("edit-p10");
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
  const submit = document.getElementById("editsave");
  const clear = document.getElementById("erase");

  showbtn.addEventListener("click",showfunction);
  submit.addEventListener("click",saveeditfunction);
  clear.addEventListener("click",cleartextedit);

  function cleartextedit() {
    p1.innerText = data.p1;
    p2.innerText = data.p2;
    p3.innerText = data.p3;
    p4.innerText = data.p4;
    p5.innerText = data.p5;
    p6.innerText = data.p6;
    p7.innerText = data.p7;
    p8.innerText = data.p8;
    p9.innerText = data.p9;
    p10.innerText = data.p10;
    area.classList.remove("edit-visible");
    areax.classList.remove("edit-visible");
  }

  function showfunction() {
    area.classList.add("edit-visible");
    areax.classList.add("edit-visible");
    txtarea1.value = data.p1;
    txtarea2.value = data.p2;
    txtarea3.value = data.p3;
    txtarea4.value = data.p4;
    txtarea5.value = data.p5;
    txtarea6.value = data.p6;
    txtarea7.value = data.p7;
    txtarea8.value = data.p8;
    txtarea9.value = data.p9;
    txtarea10.value = data.p10;
    p1.innerText = "";
    p2.innerText = "";
    p3.innerText = "";
    p4.innerText = "";
    p5.innerText = "";
    p6.innerText = "";
    p7.innerText = "";
    p8.innerText = "";
    p9.innerText = "";
    p10.innerText = "";
  }

  function saveeditfunction() {
    p1.innerText = txtarea1.value;
    p1.innerText = txtarea2.value;
    p3.innerText = txtarea3.value;
    p4.innerText = txtarea4.value;
    p5.innerText = txtarea5.value;
    p6.innerText = txtarea6.value;
    p7.innerText = txtarea7.value;
    p8.innerText = txtarea8.value;
    p9.innerText = txtarea9.value;
    p10.innerText = txtarea10.value;
    area.classList.remove("edit-visible");
    areax.classList.remove("edit-visible");
    let email = localStorage.getItem("email");

    if(!txtarea1.value == data.p1){
      localStorage.setItem(email +"-DOWC_p1",txtarea1.value);
    }
    else if(!txtarea2.value == data.p2){
      localStorage.setItem(email +"-DOWC_p2",txtarea2.value);
    }
    else if(!txtarea3.value == data.p3){
      localStorage.setItem(email +"-DOWC_p3",txtarea3.value);
    }
    else if(!txtarea4.value == data.p4){
      localStorage.setItem(email +"-DOWC_p4",txtarea4.value);
    }
    else if(!txtarea5.value == data.p5){
      localStorage.setItem(email +"-DOWC_p5",txtarea5.value);
    }
    else if(!txtarea6.value == data.p6){
      localStorage.setItem(email +"-DOWC_p6",txtarea6.value);
    }
    else if(!txtarea7.value == data.p7){
      localStorage.setItem(email +"-DOWC_p7",txtarea7.value);
    }
    else if(!txtarea8.value == data.p8){
      localStorage.setItem(email +"-DOWC_p8",txtarea8.value);
    }
    else if(!txtarea9.value == data.p9){
      localStorage.setItem(email +"-DOWC_p9",txtarea9.value);
    }
    

  }
});