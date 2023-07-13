import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageText = document.querySelector('textarea[name="message"]');

form.addEventListener(
  'input',
  throttle(function () {
    const formData = { email: emailInput.value, message: messageText.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

const savedForm = localStorage.getItem('feedback-form-state');

if (savedForm) {
  const formData = JSON.parse(savedForm);
  emailInput.value = formData.email;
  messageText.value = formData.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (emailInput.value === '' || messageText.value === '') {
    return alert('Por favor completa todos los datos!');
  }
  console.log({ email: emailInput.value, message: messageText.value });

  form.reset();
  localStorage.removeItem('feedback-form-state');
});
