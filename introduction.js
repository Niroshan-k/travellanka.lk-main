const main = {
  introhead : "",
  introhead1 : "",
  introhead2 : "",
  introhead3 : "",
  introp : "",
  introp1 : "",
  introp2 : "",
  introp3 : "",
  introp4 : "",
  heading1 : "",
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
  subhead : "",
  tablehead : [],
  hthree1 : "",
  hthree2 : "",
  hthree3 : "",
  hthree4 : "",
  hthree5 : "",
  hthree6 : "",
  hthree7 : "",
  hthree8 : "",
  hthree9 : "",
  hthree10 : "",
};

fetch('introduction.json')
  .then(Response => Response.json())
  .then(data => {

    main.introhead = data.introhead;
    main.introhead1 = data.introhead1;
    main.introhead2 = data.introhead2;
    main.introhead3 = data.introhead3;
    main.introp = data.introp;
    main.introp1 = data.introp1;
    main.introp2 = data.introp2;
    main.introp3 = data.introp3;
    main.introp4 = data.introp4;
    main.heading1 = data.heading1;
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
    main.subhead = data.subhead;
    main.tablehead = data.tablehead;
    main.hthree1 = data.hthree1;
    main.hthree2 = data.hthree2;
    main.hthree3 = data.hthree3;
    main.hthree4 = data.hthree4;
    main.hthree5 = data.hthree5;
    main.hthree6 = data.hthree6;
    main.hthree7 = data.hthree7;
    main.hthree8 = data.hthree8;
    main.hthree9 = data.hthree9;
    main.hthree10 = data.hthree10;

    /*localStorage.setItem("intro-head",data.introhead);
    localStorage.setItem("intro-head1",data.introhead1);
    localStorage.setItem("intro-head2",data.introhead2);
    localStorage.setItem("intro-head3",data.introhead3);
    localStorage.setItem("intro_p",data.introp);
    localStorage.setItem("intro_p1",data.introp1);
    localStorage.setItem("intro_p2",data.introp2);
    localStorage.setItem("intro_p3",data.introp3);
    localStorage.setItem("intro_p4",data.introp4);
    localStorage.setItem("intro-heading",data.heading1);
    localStorage.setItem("intro-p1",data.p1);
    localStorage.setItem("intro-p2",data.p2);
    localStorage.setItem("intro-p3",data.p3);
    localStorage.setItem("intro-p4",data.p4);
    localStorage.setItem("intro-p5",data.p5);
    localStorage.setItem("intro-p6",data.p6);
    localStorage.setItem("intro-p7",data.p7);
    localStorage.setItem("intro-p8",data.p8);
    localStorage.setItem("intro-p9",data.p9);
    localStorage.setItem("intro-p10",data.p10);
    localStorage.setItem("subhead-intro",data.subhead);
    localStorage.setItem("table-head",data.tablehead);
    localStorage.setItem("subheading-intro1",data.hthree1);
    localStorage.setItem("subheading-intro2",data.hthree2);
    localStorage.setItem("subheading-intro3",data.hthree3);
    localStorage.setItem("subheading-intro4",data.hthree4);
    localStorage.setItem("subheading-intro5",data.hthree5);
    localStorage.setItem("subheading-intro6",data.hthree6);
    localStorage.setItem("subheading-intro7",data.hthree7);
    localStorage.setItem("subheading-intro8",data.hthree8);
    localStorage.setItem("subheading-intro9",data.hthree9);
    localStorage.setItem("subheading-intro10",data.hthree10);
    //localStorage.setItem("",data.); */

    // Retrieve DOM elements for the first section
    const button = document.getElementById("submit");
    const userClick = document.getElementById("show-input-field");
    const input = document.getElementById("edit-input");
    const edit = document.getElementById("intro-p");
    const hide = document.getElementById("hide");
    const cut = document.getElementById("erase");

    userClick.addEventListener("click",showInput);
    cut.addEventListener("click",cutInfo);
    button.addEventListener("click",saveValue);

    // Retrieve DOM elements for the first section
    const button1 = document.getElementById("submit1");
    const userClick1 = document.getElementById("show-input-field1");
    const input1 = document.getElementById("edit-input1");
    const edit1 = document.getElementById("intro-p1");
    const hide1 = document.getElementById("hide1");
    const cut1 = document.getElementById("erase1");

    userClick1.addEventListener("click",showInput1);
    cut1.addEventListener("click",cutInfo1);
    button1.addEventListener("click",saveValue1);

    // Retrieve DOM elements for the first section
    const button2 = document.getElementById("submit2");
    const userClick2 = document.getElementById("show-input-field2");
    const input2 = document.getElementById("edit-input2");
    const edit2 = document.getElementById("intro-p2");
    const hide2 = document.getElementById("hide2");
    const cut2 = document.getElementById("erase2");

    userClick2.addEventListener("click",showInput2);
    cut2.addEventListener("click",cutInfo2);
    button2.addEventListener("click",saveValue2);

    // Retrieve DOM elements for the first section
    const button3 = document.getElementById("submit3");
    const userClick3 = document.getElementById("show-input-field3");
    const input3 = document.getElementById("edit-input3");
    const edit3 = document.getElementById("intro-p3");
    const hide3 = document.getElementById("hide3");
    const cut3 = document.getElementById("erase3");

    userClick3.addEventListener("click",showInput3);
    cut3.addEventListener("click",cutInfo3);
    button3.addEventListener("click",saveValue3);

    // Retrieve DOM elements for the first section
    const button4 = document.getElementById("submit4");
    const userClick4 = document.getElementById("show-input-field4");
    const input4 = document.getElementById("edit-input4");
    const edit4 = document.getElementById("p1");
    const hide4 = document.getElementById("hide4");
    const cut4 = document.getElementById("erase4");

    userClick4.addEventListener("click",showInput4);
    cut4.addEventListener("click",cutInfo4);
    button4.addEventListener("click",saveValue4);

    // Retrieve DOM elements for the first section
    const button5 = document.getElementById("submit5");
    const userClick5 = document.getElementById("show-input-field5");
    const input5 = document.getElementById("edit-input5");
    const edit5 = document.getElementById("p2");
    const hide5 = document.getElementById("hide5");
    const cut5 = document.getElementById("erase5");

    userClick5.addEventListener("click",showInput5);
    cut5.addEventListener("click",cutInfo5);
    button5.addEventListener("click",saveValue5);

    // Retrieve DOM elements for the first section
    const button6 = document.getElementById("submit6");
    const userClick6 = document.getElementById("show-input-field6");
    const input6 = document.getElementById("edit-input6");
    const edit6 = document.getElementById("p3");
    const hide6 = document.getElementById("hide6");
    const cut6 = document.getElementById("erase6");

    userClick6.addEventListener("click",showInput6);
    cut6.addEventListener("click",cutInfo6);
    button6.addEventListener("click",saveValue6);

    // Retrieve DOM elements for the first section
    const button7 = document.getElementById("submit7");
    const userClick7 = document.getElementById("show-input-field7");
    const input7 = document.getElementById("edit-input7");
    const edit7 = document.getElementById("p4");
    const hide7 = document.getElementById("hide7");
    const cut7 = document.getElementById("erase7");

    userClick7.addEventListener("click",showInput7);
    cut7.addEventListener("click",cutInfo7);
    button7.addEventListener("click",saveValue7);

    // Retrieve DOM elements for the first section
    const button8 = document.getElementById("submit8");
    const userClick8 = document.getElementById("show-input-field8");
    const input8 = document.getElementById("edit-input8");
    const edit8 = document.getElementById("p5");
    const hide8 = document.getElementById("hide8");
    const cut8 = document.getElementById("erase8");

    userClick8.addEventListener("click",showInput8);
    cut8.addEventListener("click",cutInfo8);
    button8.addEventListener("click",saveValue8);

    // Retrieve DOM elements for the first section
    const button9 = document.getElementById("submit9");
    const userClick9 = document.getElementById("show-input-field9");
    const input9 = document.getElementById("edit-input9");
    const edit9 = document.getElementById("p6");
    const hide9 = document.getElementById("hide9");
    const cut9 = document.getElementById("erase9");

    userClick9.addEventListener("click",showInput9);
    cut9.addEventListener("click",cutInfo9);
    button9.addEventListener("click",saveValue9);

    // Retrieve DOM elements for the first section
    const button10 = document.getElementById("submit10");
    const userClick10 = document.getElementById("show-input-field10");
    const input10 = document.getElementById("edit-input10");
    const edit10 = document.getElementById("p7");
    const hide10 = document.getElementById("hide10");
    const cut10 = document.getElementById("erase10");

    userClick10.addEventListener("click",showInput10);
    cut10.addEventListener("click",cutInfo10);
    button10.addEventListener("click",saveValue10);

    // Retrieve DOM elements for the first section
    const button11 = document.getElementById("submit11");
    const userClick11 = document.getElementById("show-input-field11");
    const input11 = document.getElementById("edit-input11");
    const edit11 = document.getElementById("p8");
    const hide11 = document.getElementById("hide11");
    const cut11 = document.getElementById("erase11");

    userClick11.addEventListener("click",showInput11);
    cut11.addEventListener("click",cutInfo11);
    button11.addEventListener("click",saveValue11);

    // Retrieve DOM elements for the first section
    const button12 = document.getElementById("submit12");
    const userClick12 = document.getElementById("show-input-field12");
    const input12 = document.getElementById("edit-input12");
    const edit12 = document.getElementById("p9");
    const hide12 = document.getElementById("hide12");
    const cut12 = document.getElementById("erase12");

    userClick12.addEventListener("click",showInput12);
    cut12.addEventListener("click",cutInfo12);
    button12.addEventListener("click",saveValue12);

    // Retrieve DOM elements for the first section
    const button13 = document.getElementById("submit13");
    const userClick13 = document.getElementById("show-input-field13");
    const input13 = document.getElementById("edit-input13");
    const edit13 = document.getElementById("p10");
    const hide13 = document.getElementById("hide13");
    const cut13 = document.getElementById("erase13");

    userClick13.addEventListener("click",showInput13);
    cut13.addEventListener("click",cutInfo13);
    button13.addEventListener("click",saveValue13);

    // Function to show input field and populate it with content for both sections
    function showInput() {
      hide.classList.add("edit-visible");
      edit.innerText = "";
      input.value = data.introp;
    }
    // Function to clear stored information for both sections
    function cutInfo() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit.innerText = data.introp;
      input.value = "";
      hide.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue() {
      const newValue = input.value.trim();
      if (data.introp !== newValue) {
        const user = localStorage.getItem("email") + "-introP";
        localStorage.setItem(user, newValue);
        edit.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput1() {
      hide1.classList.add("edit-visible");
      edit1.innerText = "";
      input1.value = data.introp1;
    }
    // Function to clear stored information for both sections
    function cutInfo1() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit1.innerText = data.introp1;
      input1.value = "";
      hide1.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue1() {
      const newValue = input1.value.trim();
      if (data.introp1 !== newValue) {
        const user = localStorage.getItem("email") + "-introP1";
        localStorage.setItem(user, newValue);
        edit1.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput2() {
      hide2.classList.add("edit-visible");
      edit2.innerText = "";
      input2.value = data.introp2;
    }
    // Function to clear stored information for both sections
    function cutInfo2() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit2.innerText = data.introp2;
      input2.value = "";
      hide2.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue2() {
      const newValue = input2.value.trim();
      if (data.introp2 !== newValue) {
        const user = localStorage.getItem("email") + "-introP2";
        localStorage.setItem(user, newValue);
        edit2.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput3() {
      hide3.classList.add("edit-visible");
      edit3.innerText = "";
      input3.value = data.introp3;
    }
    // Function to clear stored information for both sections
    function cutInfo3() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit3.innerText = data.introp3;
      input3.value = "";
      hide3.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue3() {
      const newValue = input3.value.trim();
      if (data.introp3 !== newValue) {
        const user = localStorage.getItem("email") + "-introP3";
        localStorage.setItem(user, newValue);
        edit3.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput4() {
      hide4.classList.add("edit-visible");
      edit4.innerText = "";
      input4.value = data.p1;
    }
    // Function to clear stored information for both sections
    function cutInfo4() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit4.innerText = data.p1;
      input4.value = "";
      hide4.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue4() {
      const newValue = input4.value.trim();
      if (data.p1 !== newValue) {
        const user = localStorage.getItem("email") + "-P1";
        localStorage.setItem(user, newValue);
        edit4.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput5() {
      hide5.classList.add("edit-visible");
      edit5.innerText = "";
      input5.value = data.p2;
    }
    // Function to clear stored information for both sections
    function cutInfo5() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit5.innerText = data.p2;
      input5.value = "";
      hide5.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue5() {
      const newValue = input5.value.trim();
      if (data.p2 !== newValue) {
        const user = localStorage.getItem("email") + "-P2";
        localStorage.setItem(user, newValue);
        edit5.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput6() {
      hide6.classList.add("edit-visible");
      edit6.innerText = "";
      input6.value = data.p3;
    }
    // Function to clear stored information for both sections
    function cutInfo6() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit6.innerText = data.p3;
      input6.value = "";
      hide6.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue6() {
      const newValue = input6.value.trim();
      if (data.p3 !== newValue) {
        const user = localStorage.getItem("email") + "-P3";
        localStorage.setItem(user, newValue);
        edit6.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput7() {
      hide7.classList.add("edit-visible");
      edit7.innerText = "";
      input7.value = data.p4;
    }
    // Function to clear stored information for both sections
    function cutInfo7() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit7.innerText = data.p4;
      input7.value = "";
      hide7.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue7() {
      const newValue = input7.value.trim();
      if (data.p4 !== newValue) {
        const user = localStorage.getItem("email") + "-P4";
        localStorage.setItem(user, newValue);
        edit7.innerText = newValue; 
      }
    }
    // Function to show input field and populate it with content for both sections
    function showInput8() {
      hide8.classList.add("edit-visible");
      edit8.innerText = "";
      input8.value = data.p5;
    }
    // Function to clear stored information for both sections
    function cutInfo8() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit8.innerText = data.p5;
      input8.value = "";
      hide8.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue8() {
      const newValue = input8.value.trim();
      if (data.p5 !== newValue) {
        const user = localStorage.getItem("email") + "-P5";
        localStorage.setItem(user, newValue);
        edit8.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput9() {
      hide9.classList.add("edit-visible");
      edit9.innerText = "";
      input9.value = data.p6;
    }
    // Function to clear stored information for both sections
    function cutInfo9() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit9.innerText = data.p6;
      input9.value = "";
      hide9.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue9() {
      const newValue = input9.value.trim();
      if (data.p6 !== newValue) {
        const user = localStorage.getItem("email") + "-P6";
        localStorage.setItem(user, newValue);
        edit9.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput10() {
      hide10.classList.add("edit-visible");
      edit10.innerText = "";
      input10.value = data.p7;
    }
    // Function to clear stored information for both sections
    function cutInfo10() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit10.innerText = data.p7;
      input10.value = "";
      hide10.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue10() {
      const newValue = input10.value.trim();
      if (data.p7 !== newValue) {
        const user = localStorage.getItem("email") + "-P7";
        localStorage.setItem(user, newValue);
        edit10.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput11() {
      hide11.classList.add("edit-visible");
      edit11.innerText = "";
      input11.value = data.p8;
    }
    // Function to clear stored information for both sections
    function cutInfo11() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit11.innerText = data.p8;
      input11.value = "";
      hide11.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue11() {
      const newValue = input11.value.trim();
      if (data.p8 !== newValue) {
        const user = localStorage.getItem("email") + "-P8";
        localStorage.setItem(user, newValue);
        edit11.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput12() {
      hide12.classList.add("edit-visible");
      edit12.innerText = "";
      input12.value = data.p9;
    }
    // Function to clear stored information for both sections
    function cutInfo12() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit12.innerText = data.p9;
      input12.value = "";
      hide12.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue12() {
      const newValue = input12.value.trim();
      if (data.p9 !== newValue) {
        const user = localStorage.getItem("email") + "-P9";
        localStorage.setItem(user, newValue);
        edit12.innerText = newValue; 
      }
    }

    // Function to show input field and populate it with content for both sections
    function showInput13() {
      hide13.classList.add("edit-visible");
      edit13.innerText = "";
      input13.value = data.p10;
    }
    // Function to clear stored information for both sections
    function cutInfo13() {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit13.innerText = data.p10;
      input13.value = "";
      hide13.classList.remove("edit-visible");
    }
    // Function to save edited content for both sections
    function saveValue13() {
      const newValue = input13.value.trim();
      if (data.p10 !== newValue) {
        const user = localStorage.getItem("email") + "-P10";
        localStorage.setItem(user, newValue);
        edit13.innerText = newValue; 
      }
    }
  })