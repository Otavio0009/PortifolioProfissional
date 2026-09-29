# 🚀 Portfólio Web - Otávio

Este é um projeto de portfólio pessoal e interativo desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS). O objetivo principal é centralizar informações profissionais, habilidades técnicas e pessoais, além de consumir dinamicamente a **API do GitHub** para exibir os repositórios e projetos mais recentes.

---

## 🛠️ Tecnologias Utilizadas

### **Front-end & Estilização**
- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Modularizado por componentes (`global`, `header`, `acordeon`, `skills`, `languages`, `portfolio`, `experience`, `footer`).
- **JavaScript (ES6+):** Renderização dinâmica e manipulação do DOM.

### **Integrações**
- **GitHub REST API:** Consumo dos dados públicos e repositórios para preenchimento dinâmico do Portfólio.
- **Google Fonts & Normalize.css:** Tipografia e normalização de estilos padrão dos navegadores.

---

## 📂 Estrutura do Projeto

```text
.
├── assets/
│   ├── css/
│   │   ├── acordeon.css
│   │   ├── experience.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── languages.css
│   │   ├── portfolio.css
│   │   └── skills.css
│   ├── image/
│   │   ├── Icons/
│   │   │   └── Languages/   # Ícones de linguagens e tecnologias
│   │   └── Otavio.jpeg      # Foto de perfil
│   └── js/
│       ├── acordeon.js       # Lógica para abrir/fechar seçõesSan
│       ├── api.js            # Requisições para a API do GitHub
│       └── main.js           # População de dados e renderização no DOM
├── index.html                # Estrutura principal
└── README.md                 # Documentação do projeto
