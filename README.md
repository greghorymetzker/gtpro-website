# GTPro Website

Este repositório contém o código-fonte do **GTPro Website**, uma aplicação moderna desenvolvida com tecnologias atuais para entrega de conteúdo web eficiente.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Remix, JavaScript/React
- **Backend**: Node.js
- **Banco de Dados**: Prisma (MySQL/PostgreSQL)
- **Outras Ferramentas**: Docker, ESLint, Prettier

## 📂 Estrutura do Projeto

```
gtpro-website/
├── app/                # Código principal do projeto
├── prisma/             # Configuração do Prisma e migrações
├── public/             # Arquivos estáticos (imagens, ícones, etc.)
├── Dockerfile          # Configuração para containerização
├── package.json        # Dependências e scripts npm
├── README.md           # Documentação do projeto
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de que você tenha as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MySQL/PostgreSQL](https://www.mysql.com/ ou https://www.postgresql.org/)

### Passo a Passo

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/greghorymetzker/gtpro-website.git
   cd gtpro-website
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**

   - Edite o arquivo `prisma/.env` com as credenciais do seu banco de dados.
   - Execute as migrações para criar o esquema do banco de dados:

     ```bash
     npx prisma migrate dev
     ```

4. **Inicie a Aplicação com Docker**

   - Execute o comando abaixo para construir e iniciar os containers:

     ```bash
     docker-compose up
     ```

   - Ou, inicie manualmente:

     ```bash
     npm run dev
     ```

5. **Acesse a Aplicação**

   Abra seu navegador e acesse:

   ```
   http://localhost:3000
   ```

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:

   ```bash
   git checkout -b minha-feature
   ```

3. Envie suas alterações:

   ```bash
   git commit -m "Descrição da minha feature"
   git push origin minha-feature
   ```

4. Abra um pull request no repositório principal.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
