const mySkillsData = {
    // Ferramentas que você domina
    hardSkills: [
        { name: 'Python', icon: 'assets/image/Icons/Languages/Group 484874.png' },
        { name: 'Java', icon: 'assets/image/Icons/Languages/Group 484863.png' },
        { name: 'JavaScript', icon: 'assets/image/Icons/Languages/Group 484865.png' },
        { name: 'HTML5', icon: 'assets/image/Icons/Languages/Group 484862.png' },
        { name: 'CSS3', icon: 'assets/image/Icons/Languages/Subtract.png' },
        { name: 'Git', icon: 'assets/image/Icons/Languages/Group 484867.png' },
        { name: 'GitHub', icon: 'assets/image/Icons/iconmonstr-github-1 1.svg' },
        { name: 'PostgreSQL', icon: 'assets/image/Icons/Languages/Group 484870.png' }
    ],
    // Habilidades Pessoais
    softSkills: [
        'Comunicação Eficiente',
        'Trabalho em Equipe',
        'Resolução de Problemas',
        'Proatividade',
        'Pensamento Crítico',
        'Adaptabilidade'
    ],
    // Aprendizado
    learning: [
        { name: 'TypeScript', icon: './assets/image/Icons/Languages/Aprendendo/Group 484860.png' },
        { name: 'Angular', icon: './assets/image/Icons/Languages/Aprendendo/Group 484842.png' },
        { name: 'React', icon: './assets/image/Icons/Languages/Aprendendo/Group 484840.png' },
        { name: 'AWS', icon: './assets/image/Icons/Languages/Aprendendo/Group 484854.png' },
        { name: 'Machine Learning', icon: './assets/image/Icons/Languages/Aprendendo/20Jun_badge_machinelearning-1%202.png' }
    ],
    // Formação Acadêmica
    education: [
        {
            title: 'Análise e Desenvolvimento de Sistemas',
            period: 'Graduação em Andamento'
        }
    ],
    // Idiomas
    languages: ['Português (BR)']
};

function updateHardSkills() {
    const container = document.getElementById('profile.skills.hardSkills');
    if (!container) return;
    container.innerHTML = mySkillsData.hardSkills.map(skill => `
        <li>
            <img src="${skill.icon}" alt="${skill.name}" title="${skill.name}">
            <span>${skill.name}</span>
        </li>
    `).join('');
}

function updateSoftSkills() {
    const container = document.getElementById('profile.skills.softSkills');
    if (!container) return;
    container.innerHTML = mySkillsData.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateLearning() {
    const container = document.getElementById('profile.skills.learning');
    if (!container) return;

    container.innerHTML = mySkillsData.learning.map(item => `
        <li>
            <img src="${item.icon}" alt="${item.name}" title="${item.name}" onerror="console.error('Erro ao carregar imagem:', this.src)">
            <span>${item.name}</span>
        </li>
    `).join('');
}

function updateEducation() {
    const container = document.getElementById('profile.education');
    if (!container) return;
    container.innerHTML = mySkillsData.education.map(item => `
        <li>
            <h3 class="title">${item.title}</h3>
            <p class="period">${item.period}</p>
        </li>
    `).join('');
}

function updateLanguages() {
    const container = document.getElementById('profile.languages');
    if (!container) return;
    container.innerHTML = mySkillsData.languages.map(lang => `<li>${lang}</li>`).join('');
}

async function updateGitHubSections() {
    const portfolioContainer = document.getElementById('profile.portfolio');
    const experienceContainer = document.getElementById('profile.professionalExperience');

    if (typeof fetchGitHubRepos !== 'function') return;

    const repos = await fetchGitHubRepos();
    if (!repos || repos.length === 0) return;

    const experienceRepos = repos.filter(repo => 
        repo.topics && (repo.topics.includes('experience') || repo.topics.includes('experiencia'))
    );

    const portfolioRepos = repos.filter(repo => !experienceRepos.includes(repo));

    if (portfolioContainer) {
        portfolioContainer.innerHTML = portfolioRepos.map(repo => `
            <li>
                <h3 class="github">${repo.name}</h3>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.html_url}</a>
            </li>
        `).join('');
    }

    if (experienceContainer) {
        const listToRender = experienceRepos.length > 0 ? experienceRepos : repos.slice(0, 3);
        experienceContainer.innerHTML = listToRender.map(repo => `
            <li>
                <h3 class="title">${repo.name}</h3>
                <p class="period">${repo.description || 'Projeto/Experiência desenvolvida no GitHub'}</p>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </li>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateHardSkills();
    updateSoftSkills();
    updateLearning();
    updateEducation();
    updateLanguages();
    updateGitHubSections();
});