<div align="center">
  <img src="https://img.icons8.com/color/96/000000/nodejs.png" width="50"/>
  <img src="https://img.icons8.com/color/96/000000/postgreesql.png" width="50"/>
</div>

<p>Este projeto implementa uma API RESTful simples para gerenciamento de usuários (CRUD - Create, Read, Update, Delete) utilizando <strong>Node.js</strong> com o framework <strong>Fastify</strong> e um banco de dados <strong>PostgreSQL</strong>. Ele serve como um exemplo básico de como construir uma API robusta e escalável para operações de dados de usuários.</p>

<h2>📌 Funcionalidades</h2>
<ul>
  <li><strong>Criação de Usuário (Create):</strong> Adiciona novos usuários ao banco de dados.</li>
  <li><strong>Listagem de Usuários (Read):</strong> Recupera todos os usuários ou filtra por termos de busca.</li>
  <li><strong>Atualização de Usuário (Update):</strong> Modifica os dados de um usuário existente.</li>
  <li><strong>Exclusão de Usuário (Delete):</strong> Remove um usuário do banco de dados.</li>
  <li><strong>Persistência de Dados:</strong> Utiliza PostgreSQL para armazenar os dados de forma durável.</li>
</ul>

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Node.js:</strong> Ambiente de execução JavaScript no lado do servidor.</li>
  <li><strong>Fastify:</strong> Framework web rápido e de baixo overhead para Node.js.</li>
  <li><strong>PostgreSQL:</strong> Sistema de gerenciamento de banco de dados relacional.</li>
  <li><strong>postgres:</strong> Cliente PostgreSQL para Node.js.</li>
  <li><strong>dotenv:</strong> Para carregar variáveis de ambiente de um arquivo <code>.env</code>.</li>
</ul>

<h2>⚙️ Configuração do Projeto</h2>
<h3>✅ Pré-requisitos</h3>
<p>Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:</p>
<ul>
  <li>Node.js (versão 14 ou superior)</li>
  <li>npm (gerenciador de pacotes do Node.js)</li>
  <li>PostgreSQL (servidor de banco de dados)</li>
</ul>

<h3>📦 Instalação</h3>
<ol>
  <li><strong>Clone o repositório:</strong><br><code>git clone &lt;URL-do-repositório&gt;</code></li>
  <li><strong>Instale as dependências:</strong><br><code>npm install</code></li>
  <li><strong>Configuração do Banco de Dados:</strong> Crie um banco de dados PostgreSQL para o projeto. Configure as variáveis de ambiente criando um arquivo <code>.env</code> na raiz do projeto:
    <pre>
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
    </pre>
  </li>
  <li><strong>Crie a Tabela de Usuários:</strong> Execute o script <code>create-table.js</code> para criar a tabela <code>users</code> no banco de dados.</li>
</ol>

<h2>🚀 Executando a API</h2>
<p>Para iniciar o servidor da API:</p>
<ul>
  <li><strong>Modo de Desenvolvimento:</strong> <code>npm run dev</code></li>
  <li><strong>Modo de Produção:</strong> <code>npm start</code></li>
</ul>
<p>A API estará rodando em <a href="http://localhost:3333">http://localhost:3333</a>.</p>

<h2>📡 Endpoints da API</h2>
<h3>POST /user</h3>
<ul>
  <li><strong>Método:</strong> POST</li>
  <li><strong>URL:</strong> http://localhost:3333/user</li>
  <li><strong>Corpo da Requisição (JSON):</strong>
    <pre>
{
  "name": "João Vitor",
  "email": "joao@example.com",
  "gender": "Masculino"
}
    </pre>
  </li>
  <li><strong>Resposta:</strong> Status 201 Created</li>
</ul>

<h3>GET /user</h3>
<ul>
  <li><strong>Método:</strong> GET</li>
  <li><strong>URL:</strong> http://localhost:3333/user</li>
  <li><strong>Parâmetros de Query:</strong> <code>search</code> (opcional)<br>Exemplo: <code>?search=joao</code></li>
  <li><strong>Resposta:</strong> Status 200 OK</li>
</ul>

<h3>PUT /user/:id</h3>
<ul>
  <li><strong>Método:</strong> PUT</li>
  <li><strong>URL:</strong> http://localhost:3333/user/:id</li>
  <li><strong>Corpo da Requisição (JSON):</strong>
    <pre>
{
  "name": "João Vitor Souza",
  "email": "joao.novo@example.com",
  "gender": "Masculino"
}
    </pre>
  </li>
  <li><strong>Resposta:</strong> Status 204 No Content</li>
</ul>

<h3>DELETE /user/:id</h3>
<ul>
  <li><strong>Método:</strong> DELETE</li>
  <li><strong>URL:</strong> http://localhost:3333/user/:id</li>
  <li><strong>Resposta:</strong> Status 204 No Content</li>
</ul>

<h2>📁 Estrutura do Projeto</h2>
<pre>
user-crud-node-api/
├── create-table.js         # Script para criar a tabela de usuários
├── database-flash.js       # (Opcional) Banco de dados em memória
├── database-postgres.js    # Lógica de CRUD para PostgreSQL
├── db.js                   # Conexão com PostgreSQL
├── package-lock.json       # Bloqueio de dependências
├── package.json            # Metadados do projeto
├── routes.http             # Exemplo de requisições HTTP
└── server.js               # Servidor Fastify e rotas da API
</pre>
