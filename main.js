function checkGmail() {
    var email = document.getElementById("emailInput").value;
    if (email.endsWith('@gmail.com')) {
        alert("Địa chỉ gmail đã được xác nhận!");
    }
    else
    {
        alert("Địa chỉ gmail không nhận dạng");
    }
}