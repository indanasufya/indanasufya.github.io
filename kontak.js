function validasi(){
    nama = form.nama.value;
    email = form.email.value;
    message = form.message.value;

    if(nama == "" || email == "" || message == ""){
        alert("Kolom tidak boleh kosong");
    } else {
        alert("Pesan telah terkirim");
        location.replace("Contact.html");
    }
}

function alarm() {
    alert('Pesan berhasil terkirim')
}