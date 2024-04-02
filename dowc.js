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
})