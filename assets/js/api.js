async function fetchGitHubRepos() {
    const username = 'Otavio0009';
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error('Erro ao buscar repositórios');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}