Architeture

A API foi construída utilizando o padrão RESTful, onde cada endpoint representa uma entidade específica, no entanto considerando que para o modelo de dados, não foi considerada estrutura rígida devido ao uso do Firebase Firestore. As operações seguem os métodos HTTP padrão: GET, POST, PUT e DELETE.


- Frontend: Consumindo a API usando Flutter/Dart.
- Backend: Servido por um servidor Node.js, utilizando o framework Express.
- Banco de Dados: Utiliza Firestore para armazenar dados dos usuários e a criação das tarefas.
