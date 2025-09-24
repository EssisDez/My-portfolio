// HEADER TEXT ANIMATION
const headerText = document.querySelector('.typed-text');
const text = "Hello, I'm Desiree ESSIS 👋";
let index = 0;

function typeWriter() {
  if(index < text.length){
    headerText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// SMOOTH SCROLL FOR NAV
const links = document.querySelectorAll('nav a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// PROJECTS ARRAY
const projects = [
  {name:"Marketing Analysis", img:"monthly_salesforcast.png", description:"Segmentation & Forecast for retail business.", link:"https://github.com/YOUR_GITHUB_USERNAME/project1"},
  {name:"AI Model", img:"customer_clusters.png", description:"Customer churn prediction using ML models.", link:"https://github.com/YOUR_GITHUB_USERNAME/project2"},
  {name:"Sales Dashboard", img:"daily_salesForcast.png", description:"Interactive Tableau dashboard for sales insights.", link:"https://github.com/YOUR_GITHUB_USERNAME/project3"}
];

// DISPLAY PROJECT CARDS
const projectContainer = document.querySelector('.projects-container');
projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<img src="${proj.img}" alt="${proj.name}">
                    <a href="${proj.link}" target="_blank">${proj.name}</a>
                    <p>${proj.description}</p>`;
  projectContainer.appendChild(card);
});

// FADE-IN ON SCROLL
const faders = document.querySelectorAll('.fade-section');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
