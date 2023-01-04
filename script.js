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
const modalPopup = document.querySelector('#block-popup');
function Display() {
  modalPopup.style.display = 'block';
}
function closePopup() {
  modalPopup.style.display = 'none';
}
