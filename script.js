// 1️⃣ Animation texte d'accueil
const headerText = document.querySelector('header h1');
const text = "Hello, I'm [Your Name] 👋";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        headerText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// 2️⃣ Smooth scroll pour les liens
const links = document.querySelectorAll('nav a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 3️⃣ Remplir dynamiquement la liste des projets
const projects = [
    { name: "Project 1", url: "https://github.com/YOUR_GITHUB_USERNAME/project1", description: "Predicting customer churn" },
    { name: "Project 2", url: "https://github.com/YOUR_GITHUB_USERNAME/project2", description: "Sales forecast dashboard" },
];

const projectList = document.querySelector('#projects ul');
projects.forEach(proj => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${proj.url}" target="_blank">${proj.name}</a> - ${proj.description}`;
    projectList.appendChild(li);
});
