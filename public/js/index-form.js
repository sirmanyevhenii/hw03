document.querySelector('.contact-form input[type=submit]')
    .addEventListener('click', sendForm);
    
function sendForm(e) {
    const form = document.querySelector('.contact-form');
    if (form.checkValidity()) { 
        e.preventDefault();
        fetch('form', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('.contact-form input[name=name]').value,
                email: document.querySelector('.contact-form input[name=email]').value,
                message: document.querySelector('.contact-form textarea[name=message]').value,
            })
        })
        .then( response => {
            form.reset();
        } );
    }
}












