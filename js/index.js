let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    // validate email "@" and "."
    let index = email.indexOf('@');
    if (index < 1 || email.index0f('.', index) < 1) {
        alert('Email khong hop le.');
        return;
    }

    //validate phone
    if (phone.length < 10) {
        alert('So dien thoai khong hop le.');
        return;
    }

    // submit form
    alert('Submitted');   
});