/* eslint-disable no-unused-vars */
// -----------------Storing information in Js object --------------------------------

const projects = [
  {
    ctaId: 1,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: ['./images/desktop/tonic-project-desktop.png', 'images/Snapshoot Portfolio.png'],
    technologies: ['html', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  },
  {
    ctaId: 2,
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: ['./images/desktop/multi-post-stories-project.png', './images/prof-art-project.png'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  },
  {
    ctaId: 3,
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: ['./images/desktop/facebook-360-project.png', './images/pop-mobile.png'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  },
  {
    ctaId: 4,
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: ['./images/desktop/uber-navigation-project.png', './images/multi-post-project.png'],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: 'https://ridabensalem.github.io/',
    source: 'https://github.com/ridabensalem/ridabensalem.github.io',
  },
];

// dynamic// dynamic
const workTitles = document.getElementsByClassName('works__card__title');
const workDesc = document.getElementsByClassName('works__card__dsc');
const workTech = document.getElementsByClassName('works__card__topics__text');
const workImages = document.getElementsByClassName('card_image');

// popup
const popTitles = document.getElementsByClassName('popup-title');
const popDesc = document.getElementsByClassName('popup-description');
const popImg = document.getElementsByClassName('pop-image');

for (let i = 0; i < projects.length; i += 1) {
  workTitles[i].innerHTML = projects[i].name;
  workDesc[i].innerHTML = projects[i].description;
  workTech[i].innerHTML = projects[i].technologies.join(', ');
  workImages[i].setAttribute('src', projects[i].image[0]);
  popTitles[i].innerHTML = projects[i].name;
  popDesc[i].innerHTML = projects[i].description;
  popImg[i].setAttribute('src', projects[i].image[1]);
}

//  -----------------Handiling the pop up functionality----------------------------
const modalPopup = document.querySelector('.block-popup');
const Background = document.querySelector('.works');
function Display() {
  modalPopup.style.display = 'block';
  Background.style.opacity = '0.6';
  Background.style.backgroundColor = '#C1C7D0';
  Background.style.backdropFilter = 'blur(10px)';
  Background.style.mixBlendMode = 'multiply';
}
function closePopup() {
  modalPopup.style.display = 'none';
  Background.style.opacity = '1';
  Background.style.backgroundColor = '#E5E5E5';
  Background.style.backdropFilter = 'none';
  Background.style.mixBlendMode = 'normal';
}
