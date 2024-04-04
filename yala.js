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
  })