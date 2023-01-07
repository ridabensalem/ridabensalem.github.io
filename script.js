// // -----------------Storing information in Js object --------------------------------
// const project = {
//   name: 'portfolio',
//   description:
//     'Personal portfolio that contains project information, skills, and contact',
//   technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
//   liveVersion: 'https://ridabensalem.github.io/',
//   sourceCode: 'https://github.com/ridabensalem/ridabensalem.github.io',
// };
//  -----------------Handiling the pop up functionality----------------------------
const buttonPopup = document.querySelector('#pop-btn');
const modalPopup = document.querySelector('.block-popup');
const closeButton = document.querySelector('#close-btn');
function Display() {
  modalPopup.style.display = 'block';
}
function closePopup() {
  modalPopup.style.display = 'none';
}
buttonPopup.addEventListener('click', Display);
closeButton.addEventListener('click', closePopup);
// ---------------------------Contact form validation---------------------
const formContact = document.getElementById('form');

function validateEmail() {
  const email = document.getElementById('email').value;
  const error = document.getElementById('errorMessage');
  if (email.toLowerCase() !== email) {
    error.innerHTML = 'Please enter your email in lowercase';
    error.style.display = 'block';
    error.style.color = '#FFFF';
    error.style.fontSize = 'larger';
    return false;
  }
  document.getElementById('errorMessage').innerHTML = '';
  return true;
}

formContact.addEventListener('submit', validateEmail);

// -----------------------Local storage --------------------
window.onload = function storage() {
  const fullName = document.getElementById('fullname');
  const email = document.getElementById('email');
  const textMessage = document.getElementById('message');

  // retrieve data from local storage
  fullName.value = localStorage.getItem('fullName');
  email.value = localStorage.getItem('Email');
  textMessage.value = localStorage.getItem('textMessage');

  function saveToLocalStorage() {
    // store data when user enters a new data
    localStorage.setItem('fullName', fullName.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('textMessage', textMessage.value);
  }

  // store data when user changes an existing data
  fullName.addEventListener('input', saveToLocalStorage);
  email.addEventListener('input', saveToLocalStorage);
  textMessage.addEventListener('input', saveToLocalStorage);
};

// -------------------------store the data collected in an object in the local storage-----
window.onload = function objectStorage() {
  const fullName = document.getElementById('fullname');
  const email = document.getElementById('email');
  const textMessage = document.getElementById('message');

  // Create an object to store the data
  let data = {
    fullName: '',
    email: '',
    textMessage: '',
  };

  // Retrieve data from local storage
  data = JSON.parse(localStorage.getItem('formData')) || data;

  // Set the values of the form elements to the retrieved data
  fullName.value = data.fullName;
  email.value = data.email;
  textMessage.value = data.textMessage;

  function saveToLocalStorage() {
  // Update the data object with the values from the form elements
    data.fullName = fullName.value;
    data.email = email.value;
    data.textMessage = textMessage.value;
    // Save the data object to local storage
    localStorage.setItem('formData', JSON.stringify(data));
  }

  // Store data when user changes an existing data
  fullName.addEventListener('input', saveToLocalStorage);
  email.addEventListener('input', saveToLocalStorage);
  textMessage.addEventListener('input', saveToLocalStorage);
};
