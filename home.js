const head = {
  headword : "",
  headp : ""
};
const main = {
  galleryhead : "",
  fliphead1 : "",
  flip1 : "",
  link1 : "",
  fliphead2 : "",
  flip2 : "",
  link2 : "",
  fliphead3 : "",
  flip3 : "",
  link3 : "",
  fliphead4 : "",
  flip4 : "",
  link4 : "",
  fliphead5 : "",
  flip5 : "",
  link5 : "",
  fliphead6 : "",
  flip6 : "",
  link6 : "",
  gallerylink : "",
  heading1 : "",
  heading2 : "",
  animal1 : "",
  animal2 : "",
  subheadI : "",
  subheadII : "",
  subheadIII : "",
  subheadIV : "",
  sebsecI : "",
  sebsecII : "",
  sebsecIII : "",
  sebsecIV : "",
  parks : "",
  li1 : "",
  li2 : "",
  li3 : "",
  li4 : "",
  li5 : "",
  li6 : "",
  li7 : "",
  li8 : "",
  li9 : "",
  li10 : "",
  li11 : "",
  li12 : "",
  li13 : "",
  li14 : "",
  li15 : "",
  li16 : "",
  li17 : "",
  animals7 : "",
  animallist : []
}
const section = {
  subhead1 : "",
  subsec1 : "",
  subhead2 : "",
  subsec2 : "",
  subhead3 : "",
  subsec3 : ""
}

fetch('home.json')
  .then(Response => Response.json())
  .then(data => {
    head.headword = data.headword;
    head.headp = data.headp;
    main.galleryhead = data.galleryhead;
    main.fliphead1 = data.fliphead1;
    main.flip1 = data.flip1;
    main.link1 = data.link;
    main.fliphead2 = data.fliphead2;
    main.flip2 = data.flip2;
    main.link2 = data.link;
    main.fliphead3 = data.fliphead3;
    main.flip3 = data.flip3;
    main.link3 = data.link;
    main.fliphead4 = data.fliphead4;
    main.flip4 = data.flip4;
    main.link4 = data.link;
    main.fliphead5 = data.fliphead5;
    main.flip5 = data.flip5;
    main.link5 = data.link;
    main.fliphead6 = data.fliphead6;
    main.flip6 = data.flip6;
    main.link6 = data.link;
    main.gallerylink = data.gallerylink;
    main.heading1 = data.heading1;
    main.heading2 = data.heading2;
    section.subhead1 = data.subhead1;
    section.subhead2 = data.subhead2;
    section.subhead3 = data.subhead3;
    section.subsec1 = data.subsec1;
    section.subsec2 = data.subsec2;
    section.subsec3 = data.subsec3;
    main.animal1 = data.animal1;
    main.animal2 = data.animal2;
    main.subheadI = data.subheadI;
    main.subheadII = data.subheadII;
    main.subheadIII = data.subheadIII;
    main.subheadIV = data.subheadIV;
    main.subsecI = data.subsecI;
    main.subsecII = data.subsecII;
    main.subsecIII = data.subsecIII;
    main.subsecIV = data.subsecIV;
    main.parks = data.parks;
    main.li1 = data.li1;
    main.li2 = data.li2;
    main.li3 = data.li3;
    main.li4 = data.li4;
    main.li5 = data.li5;
    main.li6 = data.li6;
    main.li7 = data.li7;
    main.li8 = data.li8;
    main.li9 = data.li9;
    main.li10 = data.li10;
    main.li11 = data.li11;
    main.li12 = data.li12;
    main.li13 = data.li13;
    main.li14 = data.li14;
    main.li15 = data.li15;
    main.li16 = data.li16;
    main.li17 = data.li17;
    main.animals7 = data.animals7;
    main.animallist = data.animallist;

    /*localStorage.setItem('home-parks',data.parks);
    localStorage.setItem('home-headword',data.headword);
    localStorage.setItem('home-headp',data.headp);
    localStorage.setItem("home-galleryhead",data.galleryhead);
    localStorage.setItem("home-fliphead1",data.fliphead1);
    localStorage.setItem("home-fliphead2",data.fliphead2);
    localStorage.setItem("home-fliphead3",data.fliphead3);
    localStorage.setItem("home-fliphead4",data.fliphead4);
    localStorage.setItem("home-fliphead5",data.fliphead5);
    localStorage.setItem("home-fliphead6",data.fliphead6);
    localStorage.setItem("home-flip1",data.flip1);
    localStorage.setItem("home-flip2",data.flip2);
    localStorage.setItem("home-flip3",data.flip3);
    localStorage.setItem("home-flip4",data.flip4);
    localStorage.setItem("home-flip5",data.flip5);
    localStorage.setItem("home-flip6",data.flip6);
    localStorage.setItem("home-link1",data.link);
    localStorage.setItem("home-link2",data.link);
    localStorage.setItem("home-link3",data.link);
    localStorage.setItem("home-link4",data.link);
    localStorage.setItem("home-link5",data.link);
    localStorage.setItem("home-link6",data.link);
    localStorage.setItem("home-gallerylink",data.gallerylink);
    localStorage.setItem("home-heading1",data.heading1);
    localStorage.setItem("home-heading2",data.heading2);
    localStorage.setItem("home-subhead1",data.subhead1);
    localStorage.setItem("home-subhead2",data.subhead2);
    localStorage.setItem("home-subhead3",data.subhead3);
    localStorage.setItem("home-animal1",data.animal1);
    localStorage.setItem("home-animal2",data.animal2);
    localStorage.setItem("home-subheadI",data.subheadI);
    localStorage.setItem("home-subheadII",data.subheadII);
    localStorage.setItem("home-subheadIII",data.subheadIII);
    localStorage.setItem("home-subheadIV",data.subheadIV);
    localStorage.setItem("home-subsecI",data.subsecI);
    localStorage.setItem("home-subsecII",data.subsecII);
    localStorage.setItem("home-subsecIII",data.subsecIII);
    localStorage.setItem("home-subsecIV",data.subsecIV);
    localStorage.setItem("home-li1",data.li1);
    localStorage.setItem("home-li2",data.li2);
    localStorage.setItem("home-li3",data.li3);
    localStorage.setItem("home-li4",data.li4);
    localStorage.setItem("home-li5",data.li5);
    localStorage.setItem("home-li6",data.li6);
    localStorage.setItem("home-li7",data.li7);
    localStorage.setItem("home-li8",data.li8);
    localStorage.setItem("home-li9",data.li9);
    localStorage.setItem("home-li10",data.li10);
    localStorage.setItem("home-li11",data.li11);
    localStorage.setItem("home-li12",data.li12);
    localStorage.setItem("home-li13",data.li13);
    localStorage.setItem("home-li14",data.li14);
    localStorage.setItem("home-li15",data.li15);
    localStorage.setItem("home-li16",data.li16);
    localStorage.setItem("home-li17",data.li17);
    localStorage.setItem("home-animal7",data.animals7);
    localStorage.setItem("home-animallist",data.animallist);
    //localStorage.setItem("",data.); */
/*
    let button = document.getElementById("edit-button");
    let userClick = document.getElementById("show-input-field");
    let input = document.getElementById("edit-input");
    let edit = document.getElementById("subsecI");
    let hide = document.getElementById("hide");
    let cut = document.getElementById("erase");
    let content = data.subsecI;

    button.addEventListener("click",editvalue);
    userClick.addEventListener("click",showInput);
    cut.addEventListener("click",cutInfo);

    function showInput() {
      hide.classList.add("edit-visible");
      edit.innerText = "";
      input.value = content;
    }

    function editvalue() {

      if (main.subsecI != input.value){
        let new_input = localStorage.getItem("email");
        localStorage.setItem(new_input,input.value);
        main.subsecI = input.value;
        edit.innerText = main.subsecI;

      }//else if(input.value == null){
        //localStorage.removeItem(user);
        //edit.innerText = main.subsecI
      //}
      else {
        main.subsecI = input.value;
        edit.innerText = main.subsecI;
      }
    }
    function cutInfo(){
      //hide.style.visibility = "hidden";
      let user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit.innerText = content;
      input.value = "";
    }
*/ 

    const btn = document.getElementById("section-edit");
    const area = document.getElementById("edit-area");
    const edit = document.getElementById("edit");
    const btnclear = document.getElementById("section-clear");
    const submit = document.getElementById("submit");
    const content = document.getElementById("sub-sec1");

    btn.addEventListener("click",show);
    btnclear.addEventListener("click",clear);
    submit.addEventListener("click",editcontent);

    const btnI = document.getElementById("section-editI");
    const areaI = document.getElementById("edit-areaI");
    const editI = document.getElementById("editI");
    const btnclearI = document.getElementById("section-clearI");
    const submitI = document.getElementById("submitI");
    const contentI = document.getElementById("sub-sec2");

    btnI.addEventListener("click",show1);
    btnclearI.addEventListener("click",clear1);
    submitI.addEventListener("click",editcontent1);

    const btnII = document.getElementById("section-editII");
    const areaII = document.getElementById("edit-areaII");
    const editII = document.getElementById("editII");
    const btnclearII = document.getElementById("section-clearII");
    const submitII = document.getElementById("submitII");
    const contentII = document.getElementById("sub-sec3");

    btnII.addEventListener("click",show2);
    btnclearII.addEventListener("click",clear2);
    submitII.addEventListener("click",editcontent2);

    function show() {
      area.value = data.subsec1;
      edit.classList.add("show");
    }
    function clear() {
      edit.classList.remove("show");
    }
    function editcontent() {
      let newuser = area.value;
      section.subsec1 = newuser;
      content.innerText = newuser;
      let user = localStorage.getItem("email") + "-subsec1";
      if(data.subsec1 != newuser ){
        localStorage.setItem(user,newuser);
      }
    }

    function show1() {
      areaI.value = data.subsec2;
      editI.classList.add("show");
    }
    function clear1() {
      editI.classList.remove("show");
    }
    function editcontent1() {
      let newuser = areaI.value;
      section.subsec2 = newuser;
      contentI.innerText = newuser;
      let user = localStorage.getItem("email") + "-subsec2";
      if(data.subsec2 != newuser ){
        localStorage.setItem(user,newuser);
      }
    }

    function show2() {
      areaII.value = data.subsec3;
      editII.classList.add("show");
    }
    function clear2() {
      editII.classList.remove("show");
    }
    function editcontent2() {
      let newuser = areaII.value;
      section.subsec3 = newuser;
      contentII.innerText = newuser;
      let user = localStorage.getItem("email") + "-subsec3";
      if(data.subsec3 != newuser ){
        localStorage.setItem(user,newuser);
      }
    }
    
    // Retrieve DOM elements for the first section
    const button1 = document.getElementById("edit-button1");
    const userClick1 = document.getElementById("show-input-field1");
    const input1 = document.getElementById("edit-input1");
    const edit1 = document.getElementById("subsecI");
    const hide1 = document.getElementById("hide1");
    const cut1 = document.getElementById("erase1");

    // Retrieve DOM elements for the second section
    const button2 = document.getElementById("edit-button2");
    const userClick2 = document.getElementById("show-input-field2");
    const input2 = document.getElementById("edit-input2");
    const edit2 = document.getElementById("subsecII");
    const hide2 = document.getElementById("hide2");
    const cut2 = document.getElementById("erase2");

    // Retrieve DOM elements for the second section
    const button3 = document.getElementById("edit-button3");
    const userClick3 = document.getElementById("show-input-field3");
    const input3 = document.getElementById("edit-input3");
    const edit3 = document.getElementById("subsecIII");
    const hide3 = document.getElementById("hide3");
    const cut3 = document.getElementById("erase3");

    // Retrieve DOM elements for the second section
    const button4 = document.getElementById("edit-button4");
    const userClick4 = document.getElementById("show-input-field4");
    const input4 = document.getElementById("edit-input4");
    const edit4 = document.getElementById("subsecIV");
    const hide4 = document.getElementById("hide4");
    const cut4 = document.getElementById("erase4");

    // Retrieve initial content for both sections from data
    let content1 = data.subsecI;
    let content2 = data.subsecII;
    let content3 = data.subsecIII;
    let content4 = data.subsecIV;

    // Add event listeners for the first section
    button1.addEventListener("click", () => editValue(input1, edit1,content1));
    userClick1.addEventListener("click", () => showInput(input1, edit1, content1, hide1));
    cut1.addEventListener("click", () => cutInfo(edit1, input1, content1, hide1));

    // Add event listeners for the second section
    button2.addEventListener("click", () => editValue(input2, edit2));
    userClick2.addEventListener("click", () => showInput(input2, edit2, content2, hide2));
    cut2.addEventListener("click", () => cutInfo(edit2, input2, content2, hide2));

    // Add event listeners for the second section
    button3.addEventListener("click", () => editValue(input3, edit3));
    userClick3.addEventListener("click", () => showInput(input3, edit3, content3, hide3));
    cut3.addEventListener("click", () => cutInfo(edit3, input3, content3, hide3));

    // Add event listeners for the second section
    button4.addEventListener("click", () => editValue(input4, edit4));
    userClick4.addEventListener("click", () => showInput(input4, edit4, content4, hide4));
    cut4.addEventListener("click", () => cutInfo(edit4, input4, content4, hide4));


    // Function to show input field and populate it with content for both sections
    function showInput(input, edit, content, hide) {
      hide.classList.add("edit-visible");
      edit.innerText = "";
      input.value = content;
    }

    // Function to save edited content for both sections
    function editValue(input, edit,content) {
      const newValue = input.value.trim();
      if (content !== newValue) {
        const user = localStorage.getItem("email");
        localStorage.setItem(user, newValue);
        edit.innerText = newValue; 
      }
    }

    // Function to clear stored information for both sections
    function cutInfo(edit, input, content, hide) {
      const user = localStorage.getItem("email");
      localStorage.removeItem(user);
      edit.innerText = content;
      input.value = "";
      hide.classList.remove("edit-visible");
    }
  })
  
  