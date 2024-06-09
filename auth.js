const handleLogin = (event) => {
    event.preventDefault();
    
    const username = document.getElementById('exampleFormControlInput3').value;
    const password = document.getElementById('exampleFormControlInput33').value;

    fetch('https://kkr-backend.onrender.com/login/', {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({ username, password })
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.token && data.user_id) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
            window.location = "/index.html";
            console.log('working');
        } else {
            alert("Incorrect Username or password");
        }
    });
};


const handleReg = (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const first_name = document.getElementById('firstName').value;
    const last_name = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirmPassword').value;

    const info = {
        username,
        email,
        first_name,
        last_name,
        password,
        confirm_password
    };

    console.log(JSON.stringify(info));

    if (password === confirm_password) {
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            fetch("https://kkr-backend.onrender.com/register/", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info)
            })
            .then((res) => res.json())
            .then((data) => alert('Check email for confirmation'));
        } else {
            alert("Password must contain a minimum of eight characters, at least one letter, one number, and one special character.");
        }
    } else {
        alert('Password and confirm password do not match');
    }
};


