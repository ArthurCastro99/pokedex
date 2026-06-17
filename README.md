# Projeto Pokédex

## 1 - Descrição do projeto

Esse projeto e referênte a atividade do curso DevQuest, utilizando a PokeApi como fonte de dados e praticando tudo que aprendemos durante o curso. Com objetivo de permitir que o usuário consiga consultar informações de diferentes pokemons, atráves de requisições nas pontas dos dedos.

## 2 - Funcionamento

- Buscar informações de Pokémon através da PokeAPI.
- Visualizar nome, imagem e características do Pokémon.
- Navegar entre diferentes Pokémon.

## 3 - Tecnologias Utilizadas

| Tecnologia            | Motivo                              |
| --------------------- | ----------------------------------- |
| HTML5                 | Estrutura da aplicação              |
| CSS3                  | Estilização e responsividade        |
| JavaScript            | Manipulação do DOM e consumo da API |
| React                 | Biblioteca JavaScript               |
| React Router DOM      | Biblioteca de gerencimanto de rotas |
| React Testing Library | Testador de componentes React       |
| PokeAPI               | Fonte dos dados dos Pokémon         |
| Git                   | Controle de versão                  |
| GitHub                | Hospedagem do código                |

O HTML5 utulizado como estrutura base para aplicação no react.

O CSS3 como estilizador externo em todo projeto.

O JavaScript foi utilizado para realizar requisições assíncronas à PokeAPI e atualizar dinamicamente os elementos da interface.

O React utilizado em todo o projeto sendo o ponto de ligação entre códigos, desde a interface até as funções do javascript toda.

React router dom para acessar páginas internas e exclusivas, além de fazer a tranferencias de navegação dentro do projeto.

React testing library testador automatizado para correções e apontamentos de erros dentro dos componentes e funções.

PokeAPI a api utilizada como base do projeto. Tendo todos os recursos disponiveis para utilizar no site.

Git me mantem atento nas versões do projeto e além disso ele me ajudar na postagem no github.

GitHub a hospedagem abrangente de código, muito utilizado por desenvolvedores.

## 4 - Decisões, planejamento e desenvolvimento

### Consumo da API

Dado como referência a PokeAPI utilizando Fetch API, evitando dependências externas e permitindo melhor entendimento na utilização.

### Organização do código

A lógica de consumo da API foi separada da manipulação da interface para facilitar manutenção e futuras melhorias.

### Responsividade

O layout foi desenvolvido considerando diferentes tamanhos de tela para proporcionar melhor experiência ao usuário em dispositivos móveis e desktops.

## 5 - Possiveis atualizações

- Sistema de busca por nome.

## 6 - Execute o projeto

### Clone o repositório

> git clone https://github.com/seuusuario/pokedex.git

### Entre na pasta

Vá pelo terminal, ou acesse a pasta do projeto manualmente.

> cd pokedex

Se estiver via terminal e utiliza o VS code:

> code .

# Abra o arquivo index.html

## 7 - Estrutura do Projeto

> pokedex/
> <br> │
> <br> ├── src/
> <br> │ ├── assets/
> <br> │ ├── components/
> <br> │ ├── css/
> <br> │ ├── js/
> <br> │ ├── pages/
> <br> │ ├── tests/
> <br> │ ├── theme/
> <br> │ └── utils/
> <br> ├── App.jsx
> <br> ├── index.css
> <br> ├── main.jsx
