const path = require("path");
const express = require("express");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.ano = new Date().getFullYear();
  next();
});

app.use(routes);

app.use((req, res) => {
  res.status(404).render("erro", {
    titulo: "Página não encontrada - Fast Aid",
    status: 404,
    tituloErro: "Página não encontrada",
    mensagem: "O endereço que você tentou acessar não existe ou foi movido.",
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).render("erro", {
    titulo: "Erro - Fast Aid",
    status,
    tituloErro: status === 400 ? "Requisição inválida" : "Algo deu errado",
    mensagem:
      status === 400
        ? "Verifique os dados enviados e tente novamente."
        : "Não foi possível concluir sua solicitação. Tente novamente.",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Fast Aid rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;
