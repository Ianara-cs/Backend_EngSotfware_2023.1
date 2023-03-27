# Backend_EngSotfware_2023.1

Esse repositório tem como propósito fazer testes para deploy.

# API de Filmes

### Informações:

- API Em andamento.
- A API terá como objetivo buscar informações de um determinado filme.
- Link: https://api-filmes-epa3.onrender.com/

## Tecnologias

- Typescript
- Express

## Funcionalidades

- Obter filme por nome.
- Obter todos os filmes.
- Cadastrar filme.

## Rotas

### Obter filme por nome.

- Link

  - Get

  - https://api-filmes-epa3.onrender.com/movies/name

- Body

  - "name" : "Megan"

- Resposta:
  - {"id":"ffefeorn1", "name":"Megan", "description":"M3GAN é uma maravilha da inteligência artificial, uma boneca realista programada para ser a melhor amiga de uma criança.", "ulr_image":"http://cms.cm-ourique.pt//upload_files/client_id_1/website_id_1/788313.jpeg", "gere":"Terror", "year":2023}

### Obter todos os filmes.

- Link

  - Get

  - https://api-filmes-epa3.onrender.com/movies

- Body

  -

- Resposta:
  - [
    {"id":"ffefeorn1", "name":"Megan", "description":"M3GAN é uma maravilha da inteligência artificial, uma boneca realista programada para ser a melhor amiga de uma criança.", "ulr_image":"http://cms.cm-ourique.pt//upload_files/client_id_1/website_id_1/788313.jpeg", "gere":"Terror", "year":2023},
    {"id":"ffefeorn2","name":"Garota do Século 20", "description":"Em 1999, uma adolescente monitora atentamente o garoto pelo qual a melhor amiga está apaixonada.", "ulr_image":"https://www.papodecinema.com.br/wp-content/uploads/2022/10/20221020-garota-do-seculo-20-papo-de-cinema-cartaz.png", "gere":"Drama", "year":2022}
    ]

### Cadastrar filme

- Link

  - Post

  - https://api-filmes-epa3.onrender.com/movies/

- Body

  - {
    "name": "Sorria",
    "description": "Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma.",
    "url_image": "https://static.wixstatic.com/media/5801fd_24dea3db3d8840bbaf1b685332a48e6c~mv2.jpg/v1/fill/w_360,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5801fd_24dea3db3d8840bbaf1b685332a48e6c~mv2.jpg",
    "gere": "Terror",
    "year": 2022
    }

- Resposta:
  - {
    "id": "a0c99a9c-c1ce-489b-9a15-eb059a6a71f0",
    "name": "Sorria",
    "description": "Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma.",
    "gere": "Terror",
    "year": 2022
    }
