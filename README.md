# gms-test

# **Projeto de Automação Web - Golden Movie Studio**

Este repositório contém testes automatizados para o site **Golden Movie Studio**, uma plataforma de busca e recomendações de filmes, além de funcionalidades de cadastro de usuários. Os testes foram desenvolvidos utilizando o framework **Cypress**.

---

## **Pré-requisitos**

Antes de começar, certifique-se de que você possui os seguintes itens instalados em sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Docker** (opcional, para execução de serviços dependentes)
- **Cypress** (instalado como dependência do projeto)

---

## **Configuração do Projeto**

### **Instalação**
1. Clone este repositório:
   ```bash
   git clone https://github.com/BadenHecne/gms-test.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd gms-test
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

---

## **Configuração do Cypress**

O arquivo de configuração principal do Cypress é o cypress.config.js. Aqui estão os principais parâmetros configurados:

- **`baseUrl`**: Define a URL base para os testes.
  - Ambiente local: `http://127.0.0.1:8081`
  - Ambiente de produção (comentado): `https://golden-movie-studio.vercel.app/`
- **`reporter`**: Utiliza o **JUnit** para gerar relatórios de execução.
- **`reporterOptions`**:
  - Gera relatórios no formato XML no diretório reports.
  - Exibe os resultados no console.
- **`video`**: Habilita a gravação de vídeos durante a execução dos testes.
- **`chromeWebSecurity`**: Desabilitado para evitar restrições de segurança do navegador.
- **`modifyObstructiveCode`**: Evita modificações em códigos obstrutivos.

---

## **Como Executar os Testes**

### **Executar em Modo Headless**
Para rodar os testes no modo headless (sem abrir o navegador):
```bash
npm test
```

### **Executar em Modo Interativo**
Para abrir o Cypress no modo interativo:
```bash
npx cypress open
```

### **Executar em um Navegador Específico**
Para rodar os testes em um navegador específico (exemplo: Chrome):
```bash
npx cypress run --browser chrome
```

---

## **Estrutura do Projeto**

- **e2e**: Contém os arquivos de teste.
  - **`busca.cy.js`**: Testes relacionados à funcionalidade de busca de filmes.
  - **`cadastro.cy.js`**: Testes relacionados ao cadastro de usuários.
- **fixtures**: Contém arquivos JSON com dados de teste.
- **reports**: Diretório onde os relatórios de execução são gerados.
- **videos**: Diretório onde os vídeos das execuções são armazenados.

---

## **Funcionalidades Testadas**

### **1. Busca de Filmes**
- Verifica se a busca por filmes retorna os resultados esperados.
- Testa a busca com diferentes palavras-chave e listas de filmes.

### **2. Cadastro de Usuários**
- Valida o cadastro de novos usuários com campos obrigatórios.
- Testa cenários positivos e negativos, como validação de e-mails e senhas.

---

## **Relatórios de Teste**

Os relatórios de teste são gerados no formato **JUnit XML** e podem ser encontrados no diretório reports. Eles estão integrados a ferramentas de CI/CD para análise automatizada.

---

## **Personalização**

Se necessário, você pode alterar as configurações no arquivo cypress.config.js para ajustar o comportamento dos testes, como:
- Alterar a URL base (`baseUrl`).
- Habilitar/desabilitar gravação de vídeos (`video`).
- Configurar outro formato de relatório.

---

## **Contribuição**

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:
1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie suas alterações:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---
## **CI/CD**

O arquivo test.yml configura um workflow de GitHub Actions para executar testes automatizados de ponta a ponta (end-to-end) utilizando o Cypress. Aqui estão os principais pontos:

Nome do Workflow: End-to-end tests.
Gatilho: O workflow é acionado automaticamente em cada push para o repositório.

## **Ambiente de Execução:**

Atualmente configurado para rodar no sistema operacional windows-latest.
Outras opções comentadas incluem ubuntu-24.04, macos-latest e ubuntu-latest.

Etapas do Workflow:
Checkout do Código:

Usa a ação actions/checkout@v4 para clonar o repositório.

Instalação de Dependências:
Executa npm ci para instalar as dependências do projeto.

Criação do Diretório de Relatórios:
Garante que o diretório reports exista para armazenar os relatórios de teste.

Execução dos Testes com Cypress:

Usa a ação oficial cypress-io/github-action@v6 para executar os testes no navegador Chrome.

Conversão de Relatórios JUnit para HTML:
Instala o junit-viewer globalmente.
Converte os relatórios JUnit XML gerados pelo Cypress em um relatório HTML.

Exibição do Relatório HTML:
Exibe o conteúdo do relatório HTML gerado.

## **Objetivo**

Este workflow automatiza a execução dos testes Cypress em um ambiente CI/CD, garantindo que os testes sejam executados e os relatórios sejam gerados automaticamente em cada alteração no repositório.

## **Licença**

Este projeto está licenciado sob a licença **ISC**. Consulte o arquivo `LICENSE` para mais detalhes.

---

Se precisar de mais informações ou ajustes, é só avisar!