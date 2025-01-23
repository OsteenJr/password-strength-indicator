
var pass = document.getElementById("password");
var msg = document.querySelector(".input-msg");
var str = document.querySelector(".strength");


pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = 'block';
    }
    else {
        msg.style.display = 'none';
    }

    if (pass.value.length < 4 ) {
        str.innerHTML = "weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    }

    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "rgb(239, 239, 84)";
        msg.style.color = "rgb(239, 239, 84)";
    } 
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }



})

    
