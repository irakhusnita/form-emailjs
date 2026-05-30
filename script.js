emailjs.init("iH3wDjwTfSZiUmsSu");

function cekStatusAdmin(){
  const jam = new Date().getHours();
  const status = document.getElementById("statusAdmin");

  if(jam >= 7 && jam < 14){
    status.innerHTML = "🟢 Admin Online";
    status.style.color = "#27ae60";
  }else{
    status.innerHTML = "🔴 Admin Offline";
    status.style.color = "#e74c3c";
  }
}

cekStatusAdmin();

document.getElementById("formKontak").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("service_l0zgukg", "template_pc6assg", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(function(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("formKontak").reset();
  })
  .catch(function(error){
    console.log("ERROR:", error);
    alert("Gagal mengirim pesan. Cek Service ID, Template ID, atau Public Key.");
  });
});

function closePopup(){
  document.getElementById("popup").style.display = "none";
}