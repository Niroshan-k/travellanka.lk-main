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
   
  })