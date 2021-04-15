// Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli
// in pagina all'interno di una lista.
function init() {
  for (var i = 0; i <= 10; i++) {
    $.ajax ({
     url: "https://flynn.boolean.careers/exercises/api/random/mail",
     method: "GET",
     success: function(data){
       console.log(data);
       printMail(data.response);
     },
     error: function(error){
       console.log(error);
     }
    })
  }
}
function printMail(mail){
  document.querySelector("#app ul").innerHTML += "<li>" + mail + "</li>";
  }
document.addEventListener("DOMContentLoaded", init)
