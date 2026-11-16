const aulas = [
  {
    id: "introducao",
    titulo: "Introdução aos Primeiros Socorros",
    descricao:
      "Conceitos básicos, avaliação da cena e como agir com segurança antes de ajudar.",
    rota: "/#como-funciona",
    duracao: "10 min",
    nivel: "Básico",
  },
  {
    id: "rcp",
    titulo: "RCP — Reanimação Cardiopulmonar",
    descricao:
      "Como identificar a parada cardiorrespiratória e iniciar as compressões torácicas.",
    rota: "/rcp",
    duracao: "15 min",
    nivel: "Essencial",
  },
  {
    id: "convulsao",
    titulo: "Convulsão",
    descricao:
      "O que fazer durante e após uma crise convulsiva, com cronômetro de duração.",
    rota: "/convulsao",
    duracao: "12 min",
    nivel: "Essencial",
  },
  {
    id: "queimaduras",
    titulo: "Queimaduras",
    descricao:
      "Resfriamento correto, o que nunca aplicar e quando procurar atendimento.",
    rota: "/queimaduras",
    duracao: "12 min",
    nivel: "Ferimentos",
  },
  {
    id: "traumas",
    titulo: "Traumas, Quedas e Fraturas",
    descricao:
      "Imobilização segura e cuidados com vítimas de acidentes e quedas.",
    rota: "/traumas",
    duracao: "14 min",
    nivel: "Traumas",
  },
  {
    id: "cortes",
    titulo: "Cortes e Sangramentos",
    descricao:
      "Compressão direta, controle de hemorragias e cuidados com objetos encravados.",
    rota: "/cortes",
    duracao: "12 min",
    nivel: "Ferimentos",
  },
  {
    id: "choque",
    titulo: "Choque Elétrico",
    descricao:
      "Como interromper a corrente com segurança e quando iniciar a RCP.",
    rota: "/choque",
    duracao: "12 min",
    nivel: "Outros",
  },
  {
    id: "afogamento",
    titulo: "Afogamento",
    descricao:
      "Resgate seguro, verificação da respiração e manobras de reanimação.",
    rota: "/afogamento",
    duracao: "13 min",
    nivel: "Respiração",
  },
  {
    id: "desmaio",
    titulo: "Desmaio (Síncope)",
    descricao:
      "Como amparar a queda, elevar as pernas e reconhecer sinais de alerta.",
    rota: "/desmaio",
    duracao: "10 min",
    nivel: "Outros",
  },
];

function listar() {
  return aulas;
}

module.exports = { listar };
