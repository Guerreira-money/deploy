# **Sistema de Ensino Ânima Educação** 

## **Sistema de Gerenciamento de Usuários e criação de tarefas** 

## **Disciplina: Sistemas Distribuídos - A3**
 

---

### **Equipe**  
- **Renato Comarú Matos**  
  - RA: 1292314966  
- **Fabiano Figueredo Chaves**  
  - RA: 324118586  
- **Viviane da Costa Ferreira**  
  - RA: 1262429956  
- **Livia Silva Lima**  
  - RA: 824157723  

 ---

## **Descrição do Projeto**

 Esta Api foi criada com a finalidade de servir uma aplicação em Flutter para que os usuários pudessem ter a liberdade de escolher como gerenciar suas atividades.
 O projeto ApiTaskify tem como objetivo desenvolver um sistema para gerenciamento de usuários e suas criações de tarefas, utilizando Firebase Authentication e o banco de dados não relacional Firestore para armazenamento e manipulação de dados. A Api permite funcionalidades como registro, login, redefinição de senha e atualização de dados do usuário autenticado, incluindo email e senha. 
 Neste sistema o usuário tem a possibilidade de criar tarefas, alterá-las ou excluí-las.
 Contudo priorizou-se pela criação de uma solução distribuída, segura e eficiente, utilizando boas práticas de desenvolvimento e arquitetura.

---

## **Estrutura do Projeto**  

### **1. Raiz do Projeto**  
- **`server.js`**: Arquivo principal para inicializar o servidor Express.  
- **`package.json`**: Gerenciamento de dependências do projeto.  
- **`/documentation`**: Pasta com a documentação detalhada da API.  
  - **`controllers/`**: Controladores relacionados à documentação.  
  - **`routes/`**: Rotas específicas para a documentação.  
  - Arquivos Markdown:  
    - **`introduction.md`**: Introdução à API.  
    - **`configuration.md`**: Configuração do sistema.  
    - **`dependencies.md`**: Dependências do projeto.  
    - **`architecture.md`**: Descrição da arquitetura do sistema.  

---

### **2. Pasta `src/`**  
Contém toda a lógica e estruturação principal da aplicação:  
- **`controllers/`**: Controladores das rotas da API, incluindo lógica de autenticação e gerenciamento de usuários.  
- **`routes/`**: Define todas as rotas da aplicação, como autenticação e alterações de dados.  
- **`services/`**: Contém as regras de negócio, como integração com o Firebase.  
- **`models/`**: Define a estrutura dos dados usados pela aplicação.  
- **`middlewares/`**: Inclui middlewares, como autenticação com Firebase.  
- **`utils/`**: Funções utilitárias reutilizáveis no projeto.  
- **`configs/`**: Configurações do Firebase e outras dependências externas.  

---

## **Funcionalidades**

### **Autenticação**
- Login e registro de usuários utilizando Firebase Authentication.
- Validação de tokens JWT via middleware personalizado.
- Proteção de rotas com base na autenticação do usuário.

### **Gerenciamento de Conta**
- Atualização de email e/ou senha do usuário autenticado.
- Sincronização de dados entre Firebase Authentication e Firestore.

### **Banco de Dados**
- Uso do Firestore para armazenar informações complementares dos usuários, como email e outros detalhes.
- Atualização automática do banco de dados ao alterar dados de autenticação.

---

## **Tecnologias Utilizadas**

- **Backend**: Node.js com Express.js
- **Firebase**:  
  - Authentication  
  - Firestore  
  - Firebase Admin SDK
- **Postman**: Testes e validação das rotas
- **Gerenciamento de Versionamento**: Git e GitHub

---

## **Instalação e Configuração**

### **Pré-requisitos**
- Node.js (versão 22)
- Firebase CLI configurado no projeto
- Conta e projeto configurados no Firebase Console

### **Passos para Instalação**
1. Clone o repositório:
   ```bash
   git clone https://github.com/Guerreira/deploy.git
