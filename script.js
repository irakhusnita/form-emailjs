// PUBLIC KEY EMAILJS
emailjs.init("iH3wDjwTfSZiUmsSu");

// STATUS ADMIN
function cekStatusAdmin() {
    const jam = new Date().getHours();
    const status = document.getElementById("statusAdmin");

    if (jam >= 7 && jam < 14) {
        status.innerHTML = "🟢 Admin Online";
        status.style.color = "#27ae60";
    } else {
        status.innerHTML = "🔴 Admin Offline";
        status.style.color = "#e74c3c";
    }
}

cekStatusAdmin();

// KIRIM FORM
document.getElementById("formKontak").addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.send(
        "service_l0zgukg",
        "GANTI_DENGAN_TEMPLATE_ID_KAMU",
        {
            nama: document.getElementById("nama").value,
            email: document.getElementById("email").value,
            pesan: document.getElementById("pesan").value
        }
    )

    .then(function () {

        document.getElementById("popup").style.display = "block";

        document.getElementById("formKontak").reset();

    })

    .catch(function (error) {

        console.log("ERROR:", error);

        alert(
            "Gagal mengirim pesan.\n\n" +
            "Kemungkinan:\n" +
            "- Template ID salah\n" +
            "- Service ID salah\n" +
            "- EmailJS belum aktif"
        );

    });

});

// TUTUP POPUP
function closePopup() {
    document.getElementById("popup").style.display = "none";
}