## _Desafio FullStack_ - BACKEND

### - **Explicando a Aplicação**

<br>
<p style="text-align: justify;">A aplicação foi desenvolvido para registro de clientes e contatos com um sistema que permite realizar operações de criação, consulta, atualização e exclusão de informações de clientes e seus respectivos contatos. Além das operações básicas de CRUD, a API também oferece um recurso para geração de relatórios contendo os dados dos clientes e seus respectivos contatos. A documentação da API contém informações detalhadas sobre os endpoints disponíveis, as estruturas de dados utilizadas, exemplos de uso e instruções para configuração do ambiente.</p>
<br>
<p style="text-align: justify;">O objetivo dessa API é proporcionar uma solução simples e eficiente para o gerenciamento de clientes e contatos.</p>
<br>

### - **Tecnologias**

Tecnologias que foram utilizadas:

- [Node.js](https://nodejs.org/en/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Zod](https://github.com/colinhacks/zod)

HOST: https://localhost:3000/

### - **Instalações Necessárias:**

##### - **NodeJS**

<p>Npm ou yarn:</p>
<p><u>npm install (dependência)</u></p>
<p><u>yarn add (dependência)</u></p>

##### - **Banco de dados PostgreSQL**

<p>Clone o projeto em sua máquina e instale as dependências com o comando:</p>

<p>Em seguida, crie um arquivo .env, copiando o formato do arquivo .env.example:</p>

<p>env.example -> .env</p>

<p>Configure as variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.</p>

**Execute as migrations com o comando:**

```
yarn typeorm migration:run -d src/data-source.ts
ou
npx typeorm migration:run -c src/data-source.ts
```

**Para rodar o servidor localmente:**

```
yarn dev ou npm run dev
```

### - **Endpoints**

##### - **CREATE CLIENT**

##### /client

**Sem Token**

### Todos os campos são obrigatórios

##### - **Request:**

- clientName: STRING
- email: STRING, EMAIL
- clientPhoto: STRING
- clientCity: STRING
- gender: STRING ("male", "female", "no binary", "no say")
- password: STRING
- phone: STRING

##### - **Response:**

**STATUS 201**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "clientName": "teste",
  "clientPhoto": "figure.png",
  "gender": "male",
  "password": "senhaHasheada",
  "clientCity": "São Paulo",
  "email": "teste@mail.com",
  "phone": "7199954124",
  "dateRegister": "2023-05-31"
}
```

##### - **LOGIN**

#### /login

**Sem Token**

### Todos os campos são obrigatórios

##### - **Request:**

- email: STRING, EMAIL
- password: STRING

##### - **Response:**

STATUS 200

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdWdsYXNwYXRoQGdtYWlsLmNvbSIsImlhdCI6MTY4NDk4NDY1NiwiZXhwIjoxNjg1MDcxMDU2LCJzdWIiOiI4MTkyMTFhMy00NThjLTQ3NjktOTcxOS0xMmM2NTdhYTNkMzQifQ.VC4dYCkPL2b3Lxjvd-VK8gd9bcP7pUcdA113Ejmk_Kc",
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f"
}
```

##### - **UPDATE CLIENT**

#### /client/:id

**Precisa de TOKEN**

### Qualquer campo é modificável, menos (dateRegister e id):

##### - **Request:**

```json
{
  "clientName": "testando"
}
```

##### - **Response:**

**STATUS 200**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "clientName": "testando",
  "clientPhoto": "figure.png",
  "gender": "male",
  "password": "senhaHasheada",
  "clientCity": "São Paulo",
  "email": "teste@mail.com",
  "phone": "7199954124",
  "dateRegister": "2023-05-31"
}
```

---

##### - **Delete Client**

#### /client/:id

**Precisa de TOKEN**

##### - **Response:**

**STATUS 204**

---

##### - **CREATE CONTACT**

#### /contact

**Precisa de TOKEN**

##### - **Request:**

- contactName: STRING
- email: STRING, EMAIL
- contactCity: STRING
- gender: STRING ("male", "female", "no binary", "uniformed")
- phone: STRING

##### - **Response:**

**STATUS 201**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "contactName": "testeContato",
  "gender": "male",
  "contactCity": "São Paulo",
  "email": "teste2@mail.com",
  "phone": "7188454157",
  "dateRegister": "2023-06-01"
}
```

---

##### - **READ ALL CONTACTS**

#### /contact

**Precisa de TOKEN**

##### - **Response:**

**STATUS 200**

```json

	{
		    "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
            "contactName": "testeContato",
            "gender": "male",
            "contactCity": "São Paulo",
            "email": "teste2@mail.com",
            "phone": "7188454157",
            "dateRegister": "2023-06-01",
	},
	{
		    "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
            "contactName": "testeContato2",
            "gender": "female",
            "contactCity": "São Paulo",
            "email": "teste3@mail.com",
            "phone": "718434123",
            "dateRegister": "2023-06-01",
	}
```

---

##### - **READ ONE CONTACT**

### `/contact/id`

**Precisa de TOKEN**

Retorna um único contato do usuário passado na URL

##### - **Response:**

**STATUS 200**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "contactName": "testeContato",
  "gender": "male",
  "contactCity": "São Paulo",
  "email": "teste2@mail.com",
  "phone": "7188454157",
  "dateRegister": "2023-06-01",
  "client": {
    "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
    "clientName": "testando",
    "clientPhoto": "figure.png",
    "gender": "male",
    "password": "senhaHasheada",
    "clientCity": "São Paulo",
    "email": "teste@mail.com",
    "phone": "7199954124",
    "dateRegister": "2023-05-31"
  }
}
```

---

##### - **UPDATE ONE CONTACT**

#### /contact/id

**Precisa de TOKEN**

Atualiza o contato passado pelo ID específico

##### - **Request:**

### Qualquer campo é modificável, menos (dateRegister e id):

```json
{
  "contactName": "testandoContact"
}
```

##### - **Response:**

**STATUS 200**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "contactName": "testandoContact",
  "gender": "male",
  "contactCity": "São Paulo",
  "email": "teste2@mail.com",
  "phone": "7188454157",
  "dateRegister": "2023-06-01"
}
```

---

##### - **DELETE CONTACT**

#### /contact/id

**Precisa de TOKEN**

Deleta o contato passado pelo ID específico

##### - **Response:**

**STATUS 204**
