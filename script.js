// -----------------Storing information in Js object --------------------------------
const project = {
  name: 'portfolio',
  description:
    'Personal portfolio that contains project information, skills, and contact',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  liveVersion: 'https://ridabensalem.github.io/',
  sourceCode: 'https://github.com/ridabensalem/ridabensalem.github.io',
};
//  -----------------Handiling the pop up functionality----------------------------
const buttonPopup = document.querySelector('button');
const modalPopup = document.querySelector('.block-popup');
function Display() {
  modalPopup.style.display = 'block';
}
function closePopup() {
  modalPopup.style.display = 'none';
}
// ---------------------------Contact form validation---------------------

function validateEmail() {
  const email = document.getElementById('email').value;
  const error = document.getElementById('errorMessage');
  if (email.toLowerCase() !== email) {
    error.innerHTML = 'Please enter your email in lowercase';
    return false;
  }
  document.getElementById('errorMessage').innerHTML = '';
  return true;
}