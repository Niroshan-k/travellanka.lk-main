const main = {};

fetch('leophard.json')
.then(Response => Response.json())
.then(data => {

  main.head1 = data.head1;
  main.head2 = data.head2;
  main.head3 = data.head3;
  main.head4 = data.head4;
  main.head5 = data.head5;
  main.head6 = data.head6;
  main.head7 = data.head7;
  main.head8 = data.head8;
  main.head9 = data.head9;
  main.head10 = data.head10;
  main.head11 = data.head11;
  main.head12 = data.head12;
  main.p1 = data.p1;
  main.p2 = data.p2;
  main.p3 = data.p3;
  main.p4 = data.p4;
  main.p5 = data.p5;
  main.p6= data.p6;
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
  main.l1 = data.l1;
  main.l2 = data.l2;
  main.l3 = data.l3;
  main.yala = data.yala;
  main.wilpattu = data.wilpattu;
  main.horton = data.horton;
  main.threats = data.threats;
  main.b1 = data.b1;
  main.b2 = data.b2;
  main.b3 = data.b3;
  main.b4 = data.b4;
  main.b5 = data.b5;
  main.b6 = data.b6;
  main.b7 = data.b7;
  main.b8 = data.b8;
  main.threats2 = data.threats2;

  /*localStorage.setItem("leo-head1",data.head1);
  localStorage.setItem("leo-head2",data.head2);
  localStorage.setItem("leo-head3",data.head3);
  localStorage.setItem("leo-head4",data.head4);
  localStorage.setItem("leo-head5",data.head5);
  localStorage.setItem("leo-head6",data.head6);
  localStorage.setItem("leo-head7",data.head7);
  localStorage.setItem("leo-head8",data.head8);
  localStorage.setItem("leo-head9",data.head9);
  localStorage.setItem("leo-head10",data.head10);
  localStorage.setItem("leo-head11",data.head11);
  localStorage.setItem("leo-head12",data.head12);
  localStorage.setItem("leo-p1",data.p1);
  localStorage.setItem("leo-p2",data.p2);
  localStorage.setItem("leo-p3",data.p3);
  localStorage.setItem("leo-p4",data.p4);
  localStorage.setItem("leo-p5",data.p5);
  localStorage.setItem("leo-p6",data.p6);
  localStorage.setItem("leo-p7",data.p7);
  localStorage.setItem("leo-p8",data.p8);
  localStorage.setItem("leo-p9",data.p9);
  localStorage.setItem("leo-p10",data.p10);
  localStorage.setItem("leo-p11",data.p11);
  localStorage.setItem("leo-p12",data.p12);
  localStorage.setItem("leo-p13",data.p13);
  localStorage.setItem("leo-p14",data.p14);
  localStorage.setItem("leo-p15",data.p15);
  localStorage.setItem("leo-p16",data.p16);
  localStorage.setItem("leo-l1",data.l1);
  localStorage.setItem("leo-l2",data.l2);
  localStorage.setItem("leo-l3",data.l3);
  localStorage.setItem("leo-yala",data.yala);
  localStorage.setItem("leo-wilpattu",data.wilpattu);
  localStorage.setItem("leo-horton",data.horton);
  localStorage.setItem("leo-threats",data.threats);
  localStorage.setItem("leo-threats2",data.threats2);
  localStorage.setItem("leo-b1",data.b1);
  localStorage.setItem("leo-b2",data.b2);
  localStorage.setItem("leo-b3",data.b3);
  localStorage.setItem("leo-b4",data.b4);
  localStorage.setItem("leo-b5",data.b5);
  localStorage.setItem("leo-b6",data.b6);
  localStorage.setItem("leo-b7",data.b7);
  localStorage.setItem("leo-b8",data.b8);*/

  const hidearea = document.getElementById("hide");
  const editbtn = document.getElementById("show");
  const submit = document.getElementById("submit");
  const editarea = document.getElementById("edit");
  const editarea1 = document.getElementById("edit1");
  const editarea2 = document.getElementById("edit2");
  const editarea3 = document.getElementById("edit3");
  const editarea4 = document.getElementById("edit4");
  const editarea5 = document.getElementById("edit5");
  const editarea6 = document.getElementById("edit6");
  const editarea7 = document.getElementById("edit7");
  const editarea8 = document.getElementById("edit8");
  const editarea9 = document.getElementById("edit9");
  const editarea10 = document.getElementById("edit10");
  const editarea11 = document.getElementById("edit11");
  const editarea12 = document.getElementById("edit12");
  const editarea13 = document.getElementById("edit13");
  const editarea14 = document.getElementById("edit14");
  const editarea15 = document.getElementById("edit15");
  const editarea16 = document.getElementById("edit16");
  const editarea17 = document.getElementById("edit17");
  const editarea18 = document.getElementById("edit18");
  const editarea19 = document.getElementById("edit19");

  const p1 = document.getElementById("p1");
  const p3 = document.getElementById("p3");
  const p4 = document.getElementById("p4");
  const p5 = document.getElementById("p5");
  const p6 = document.getElementById("p6");
  const p7 = document.getElementById("p7");
  const p8 = document.getElementById("p8");
  const p9 = document.getElementById("p9");
  const p10= document.getElementById("p10");
  const p11 = document.getElementById("p11");
  const p12 = document.getElementById("p12");
  const p13 = document.getElementById("p13");
  const p14 = document.getElementById("p14");
  const p15 = document.getElementById("p15");
  const p16 = document.getElementById("p16");
  const listyala = document.getElementById("yala")

  editbtn.addEventListener("click",show);
  submit.addEventListener("click",save);

  function show() {
    hidearea.classList.add("edit-visible");
    editbtn.innerText = "Close";
    let btn = document.getElementById("show");
    btn.addEventListener("click",hide);
    function hide(){
      hidearea.classList.remove("edit-visible");
      editbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    }

    editarea.value = data.p1;
    let itemsyala = data.yala;
    let itemswilpattu = data.wilpattu;
    let itemshorton = data.horton;
    let threats = data.threats;
    let threats2 = data.threats2;

    editarea1.value = '';
    editarea2.value = '';
    editarea3.value = '';
    editarea4.value = '';

    for (let i =0; i < itemsyala.length; i++){
      editarea1.value += data.yala[i] + "\n";
    }
    for (let i =0; i < itemswilpattu.length; i++){
      editarea2.value += data.wilpattu[i] + "\n";
    }
    for (let i =0; i < itemshorton.length; i++){
      editarea3.value += data.horton[i] + "\n";
    }
    for (let i =0; i < threats.length; i++){
      editarea4.value += data.threats[i] + "\n";
    }

    editarea5.value = data.p3;
    editarea6.value = data.p4;
    editarea7.value = data.p5;
    editarea8.value = data.p6;
    editarea9.value = data.p7;
    editarea10.value = data.p8;
    editarea11.value = data.p9;
    editarea12.value = '';
    for (let i =0; i < threats2.length; i++){
      editarea12.value += data.threats2[i] + "\n";
    }
    editarea13.value = data.p10;
    editarea14.value = data.p11;
    editarea15.value = data.p12;
    editarea16.value = data.p13;
    editarea17.value = data.p14;
    editarea18.value = data.p15;
    editarea19.value = data.p16;
    
  }

  function save() {
    hidearea.classList.remove("edit-visible");
    editbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    p1.innerText = editarea.value;
    p3.innerText = editarea5.value;
    p4.innerText = editarea6.value;
    p5.innerText = editarea7.value;
    p6.innerText = editarea8.value;
    p7.innerText = editarea9.value;
    p8.innerText = editarea10.value;
    p9.innerText = editarea11.value;

    const listItems = editarea1.value.split('\n').map(item => `<li>${item}</li>`).join('');
      document.getElementById("yala").innerHTML = `<ul>${listItems}</ul>`;

    const listItems1 = editarea2.value.split('\n').map(item => `<li>${item}</li>`).join('');

    document.getElementById("wilpattu").innerHTML = `<ul>${listItems1}</ul>`;

    const listItems2 = editarea3.value.split('\n').map(item => `<li>${item}</li>`).join('');

    document.getElementById("horton").innerHTML = `<ul>${listItems2}</ul>`;
    const listItems3 = editarea4.value.split('\n').map(item => `<li>${item}</li>`).join('');
    document.getElementById("threats").innerHTML = `<ul>${listItems3}</ul>`;

    const listItems4 = editarea12.value.split('\n').map(item => `<li>${item}</li>`).join('');
    document.getElementById("threats2").innerHTML = `<ul>${listItems4}</ul>`;
  
  
  }
})