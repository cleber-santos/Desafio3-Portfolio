<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
  Modulo 3 - Iniciando no back-end
</h2>
<h3 align="center">
  Refatorar o desafio 2 - portfolio, introduzindo o back-end
<br>

<p align="center">

  <a href="https://github.com/cleber-santos">
    <img alt="Made by Cleber" src="https://img.shields.io/badge/Made%20by-Cleber-orange">
  </a>

</p>

## ✍ Desafio 3

### Refatorando o Portfólio

Neste desafio foi criado meu primeiro servidor usando node e adicionado o nunjucks como template engine. 

##### Desafio 3-1 - Primeiro servidor

- [x] Criar o servidor com node e express.
- [x] Usar o nodemon para re-iniciação automatica do servidor.
- [x] Alterar os arquivos `.html` para `.njk`
- [x] Criar as paginas deste modo:
  - `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.
  - `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.
  - `layout.njk`: Arquivo referente à base comum entre as páginas.
  - `not-found.njk`: Arquivo referente à pagina de erro 404 deve ter:
    - Layout.njk como base
    - Ter um texto infortivo sobre o erro

##### Desafio 3-2

- [x] Neste desafio, atualizei os arquivos com informações de cursos e descrições de forma dinâmica.

##### Desafio 3-3

- [x] Neste desafio foi removido o modal do desafio anterior, e adicionado um iframe, ao clicar nos cards deve ser chamada a pagina do curso.
  - foi incluido uma rota no servidor, deste modo:  
  
    ```js
    server.get("/courses/:id", function(req, res) {
      const id = req.params.id;

      return res.render(`O id fornecido na rota`);
    });
    ```

## :gear: Como usar
```bash
# Clone este repositorio
$ git clone https://github.com/cleber-santos/Desafio3-Portfolio

# Va até o repositorio
$ cd Desafio3-Portfolio

# Instale as depedencias do projeto
$ npm install

# Rode o servidor
$ npm start

```

## :film_strip: Demonstração

![gif]()

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito por Cleber Santos | [linkedin](https://www.linkedin.com/in/cleber-rodrigo-santos/) - com a [Rocketseat](https://rocketseat.com.br) :rocket: | [Entre na comunidade da rocketseat!](https://discordapp.com/invite/gCRAFhc) :purple_heart:
