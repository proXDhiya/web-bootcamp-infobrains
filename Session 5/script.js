const submitButton = document.querySelector('#submit-form');
const inputEmail = document.querySelector('#email');

submitButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const email = inputEmail.value;

    if (email === '') {
        inputEmail.classList.add('input-error');
        inputEmail.placeholder = 'Please enter your email';
        return;
    }

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            service_id: 'service_p8d64um',
            template_id: 'template_g3sbcva',
            user_id: 'SxrMHQKjPv0FbNKgi',
            template_params: {
                user_email: email,
                reply_to: 'admin@dhiya.me'
            }
        })
    });

    inputEmail.value = '';
});
