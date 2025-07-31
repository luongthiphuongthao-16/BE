function register(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerData = {
        userName,
        email,
        password,
        confirmPassword,      
    };

    const isCorrect = validatePassword(password);

    if(!isCorrect){
        alert('password khoong dung format')
        return;
    }

    fetch({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
    });
        then((response) => response.json())
        .then ((data) => {
           console.log(data);
           alert(data.messager, data.user.email);
        })
        .catch((error) => alert("Đăng kí thất bại!"));
}

const formRegister = document.getElementById("register-from");
if(formRegister) {
    formRegister.addEventListener("submit", register);
}

function validatePassword(password){
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regularExpression.test(password)){
        return true
    }

    return false;
}