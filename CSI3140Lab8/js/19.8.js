function submitForm() {
    const email = document.getElementById('email').value;
    fetch('../php/19.8.php', {
        method: 'POST',
        body: new URLSearchParams('email=' + email),
    }).then(r => r.text()).then(data => {
        document.getElementById('result').innerHTML = data;
        if (data === 'Email is valid') {
            document.getElementById('result').style.color = 'green';
        }
        else {
            document.getElementById('result').style.color = 'red';
        }
    });
}

document.getElementById('emailForm').onsubmit = function(event) {
    event.preventDefault();
    submitForm();
};

document.getElementById('valid').onclick = function() {
    document.getElementById('email').value = 'valid@example.com';
    submitForm();
};

document.getElementById('invalid').onclick = function() {
    document.getElementById('email').value = 'invalid@example';
    submitForm();
}