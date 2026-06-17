# Projeto Pokédex

## 1 - Descrição do Projeto

Este projeto foi desenvolvido como parte das atividades do curso DevQuest, utilizando a PokeAPI como fonte de dados.

O objetivo da aplicação é permitir que os usuários consultem informações sobre diferentes Pokémon de forma dinâmica, aplicando conceitos de React, consumo de APIs, componentização, gerenciamento de rotas e testes de componentes.

## 2 - Funcionamento

- Buscar informações de Pokémon através da PokeAPI.
- Visualizar nome, imagem e características do Pokémon.
- Navegar entre diferentes Pokémon.
- Alternância entre tema claro e escuro.
- Filtragem por tipo.

## 3 - Tecnologias Utilizadas

| Tecnologia            | Motivo                                                 |
| --------------------- | ------------------------------------------------------ |
| HTML5                 | Estrutura da aplicação                                 |
| CSS3                  | Estilização e responsividade                           |
| JavaScript            | Consumo da API e implementação da lógica da aplicação. |
| React                 | Biblioteca JavaScript                                  |
| React Router DOM      | Biblioteca de gerenciamento de rotas                   |
| React Testing Library | Testador de componentes React                          |
| Vitest                | framework de testes unitários para JavaScript.         |
| PokeAPI               | Fonte dos dados dos Pokémon                            |
| Git                   | Controle de versão                                     |
| GitHub                | Hospedagem do código                                   |

O HTML5 utilizado como estrutura base para aplicação no react.

O CSS3 como estilizador externo em todo projeto.

O JavaScript foi utilizado para realizar requisições assíncronas à PokeAPI e atualizar dinamicamente os elementos da interface.

O React foi utilizado para a construção da interface por meio de componentes reutilizáveis, facilitando a organização, manutenção e escalabilidade da aplicação.

O React Router DOM foi utilizado para gerenciar a navegação entre as páginas da aplicação de forma dinâmica, sem a necessidade de recarregar a página.

A React Testing Library foi utilizada para testar os componentes React e validar seus comportamentos.

O Vitest utilizado com testes unitários no projeto para a linguagem de JavaScript.

A PokeAPI foi utilizada como fonte de dados da aplicação, disponibilizando informações detalhadas sobre os Pokémon.

O Git foi utilizado para controle de versão, permitindo acompanhar alterações realizadas durante o desenvolvimento do projeto.

O GitHub foi utilizado para hospedagem e compartilhamento do código-fonte.

## 4 - Decisões, planejamento e desenvolvimento

### Consumo da API

Foi utilizada a Fetch API nativa do JavaScript para realizar as requisições à PokeAPI, evitando dependências externas e proporcionando maior entendimento sobre requisições HTTP.

### Organização do código

A lógica de consumo da API foi separada dos componentes de interface, facilitando a manutenção, reutilização e futuras melhorias da aplicação.

### Responsividade

O layout foi desenvolvido considerando diferentes tamanhos de tela para proporcionar melhor experiência ao usuário em dispositivos móveis e desktops.

### Componentização

A aplicação foi desenvolvida utilizando componentes reutilizáveis do React, permitindo melhor organização do código, reaproveitamento de funcionalidades e maior facilidade de manutenção.

## 5 - Possíveis atualizações

- Sistema de busca por nome.

## 6 - Execute o projeto

### Clone o repositório

> git clone https://github.com/ArthurCastro99/pokedex.git

### Entre na pasta

> cd pokedex

### Instale as dependências

> npm install

### Rode o projeto

> npm run dev

### Para rodar os testes

> npm run test

## 7 - Estrutura do Projeto

```
pokedex/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   ├── js/
│   ├── pages/
│   ├── tests/
│   ├── theme/
│   └── utils/
├── App.jsx
├── index.css
└── main.jsx
```
