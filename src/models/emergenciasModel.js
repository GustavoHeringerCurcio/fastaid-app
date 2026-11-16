const emergencias = [
  {
    id: "rcp",
    nome: "RCP",
    titulo: "RCP – Reanimação Cardiopulmonar",
    icone: "/images/rcp.png",
    categoria: "Respiração",
    passos: [
      {
        imagem: "/images/rcp1.png",
        alt: "Verificar consciência",
        titulo: "1. Verifique a consciência",
        texto:
          'Bata levemente nos ombros da pessoa e pergunte em voz alta: "Você está bem?".',
      },
      {
        imagem: "/images/rcp2.png",
        alt: "Chamar ajuda",
        titulo: "2. Acione ajuda imediatamente",
        texto:
          "Ligue 192 (botão vermelho abaixo) ou peça para alguém ligar e buscar um desfibrilador (DEA).",
      },
      {
        imagem: "/images/rcp3.png",
        alt: "Abrir vias aéreas",
        titulo: "3. Abra as vias aéreas e cheque a respiração",
        texto:
          "Incline a cabeça para trás e levante o queixo delicadamente. Observe se o peito sobe por no máximo 10 segundos.",
      },
      {
        imagem: "/images/rcp4.png",
        alt: "Começar compressões",
        titulo: "4. Inicie as compressões torácicas",
        texto:
          "Coloque as mãos entrelaçadas no centro do peito e faça <strong>100 a 120 compressões por minuto</strong>, afundando 5 a 6 cm.",
      },
      {
        imagem: "/images/rcp5.png",
        alt: "Alternar com respirações",
        titulo: "5. Mantenha o ciclo",
        texto:
          "Se tiver treinamento, alterne 30 compressões e 2 ventilações. Caso contrário, faça compressões contínuas sem parar até o socorro chegar.",
      },
      {
        imagem: "/images/rcp6.png",
        alt: "Uso de DEA",
        titulo: "6. Use o DEA assim que chegar",
        texto:
          "Ligue o aparelho, cole as pás no peito desnudo da vítima e siga as instruções em áudio do equipamento.",
      },
    ],
  },

  {
    id: "convulsao",
    nome: "Convulsão",
    titulo: "Convulsão",
    icone: "/images/convulsao.png",
    categoria: "Outros",
    passos: [
      {
        imagem: "/images/convulsao1.png",
        alt: "Mantenha a calma",
        titulo: "1. Mantenha a calma e marque o tempo",
        texto:
          "Fique tranquilo e acione o cronômetro acima. A maioria das crises dura menos de 2 a 3 minutos.",
      },
      {
        imagem: "/images/convulsao2.png",
        alt: "Proteja a pessoa",
        titulo: "2. Proteja a pessoa",
        texto:
          "Afaste móveis e objetos ao redor para evitar que a pessoa se machuque durante os abalos.",
      },
      {
        imagem: "/images/convulsao3.png",
        alt: "Apoie a cabeça",
        titulo: "3. Apoie a cabeça",
        texto:
          "Coloque algo macio (casaco dobrado, mochila ou travesseiro) sob a cabeça para evitar impactos no chão.",
      },
      {
        imagem: "/images/convulsao4.png",
        alt: "Não segure a pessoa",
        titulo: "4. Não segure a pessoa",
        texto:
          "Não tente conter ou imobilizar os membros à força. Isso pode causar fraturas ou luxações.",
      },
      {
        imagem: "/images/convulsao5.png",
        alt: "Não coloque nada na boca",
        titulo: "5. Não coloque nada na boca",
        texto:
          "Nunca introduza dedos, panos ou objetos na boca da vítima, nem ofereça água enquanto ela estiver inconsciente.",
      },
      {
        imagem: "/images/convulsao6.png",
        alt: "Posição lateral",
        titulo: "6. Vire a pessoa de lado",
        texto:
          "Assim que os movimentos pararem, coloque a pessoa de lado (posição lateral de segurança) para que a saliva escorra e não bloqueie a respiração.",
      },
      {
        imagem: "/images/convulsao7.png",
        alt: "Chame ajuda",
        titulo: "7. Chame o 192 se necessário",
        texto:
          "Acione o SAMU imediatamente se a crise passar de <strong>5 minutos</strong>, se for a primeira convulsão da pessoa ou se ela não recobrar a consciência.",
      },
    ],
  },

  {
    id: "queimaduras",
    nome: "Queimaduras",
    titulo: "Queimaduras",
    icone: "/images/queimadura.png",
    categoria: "Ferimentos",
    alerta:
      "NUNCA passe pasta de dente, manteiga, café, óleo ou gelo na queimadura. Não estoure as bolhas.",
    passos: [
      {
        imagem: "/images/queimadura.png",
        alt: "Passo 1",
        titulo: "1. Afaste a fonte de calor",
        texto:
          "Interrompa imediatamente o contato da vítima com o fogo, líquido fervente, vapor ou objeto quente. Se as roupas estiverem em chamas, faça a pessoa rolar no chão ou abafe com um cobertor.",
      },
      {
        imagem: "/images/queimadura.png",
        alt: "Passo 2",
        titulo: "2. Resfrie com água corrente (10 a 15 min)",
        texto:
          "Coloque a área queimada sob água corrente em temperatura ambiente (fria, mas não gelada) por 10 a 15 minutos para interromper o avanço do calor nas camadas da pele.",
      },
      {
        imagem: "/images/queimadura.png",
        alt: "Passo 3",
        titulo: "3. Retire acessórios com cuidado",
        texto:
          "Remova anéis, relógios, pulseiras e roupas que NÃO estejam grudadas na pele antes que o local comece a inchar. Se o tecido estiver colado na ferida, não puxe.",
      },
      {
        imagem: "/images/queimadura.png",
        alt: "Passo 4",
        titulo: "4. Proteja com pano limpo e úmido",
        texto:
          "Cubra a queimadura frouxamente com uma compressa de gaze estéril ou um pano limpo umedecido com soro fisiológico ou água limpa.",
      },
      {
        imagem: "/images/queimadura.png",
        alt: "Passo 5",
        titulo: "5. Avalie a gravidade e chame socorro",
        texto:
          "Ligue 192 ou 193 imediatamente se a queimadura atingir rosto, mãos, pés, genitais, vias aéreas (inalação de fumaça) ou for extensa/profunda.",
      },
    ],
  },

  {
    id: "traumas",
    nome: "Traumas",
    titulo: "Traumas, Quedas e Fraturas",
    icone: "/images/traumas.png",
    categoria: "Traumas",
    alerta:
      "NUNCA tente colocar um osso quebrado ou articulação deslocada de volta no lugar e NÃO mova vítimas de quedas graves ou acidentes de trânsito.",
    passos: [
      {
        imagem: "/images/traumas.png",
        alt: "Passo 1",
        titulo: "1. Garanta a segurança e não mova a vítima",
        texto:
          "Em quedas de altura, atropelamentos ou colisões, suspeite sempre de lesão na coluna cervical. Mantenha a vítima imóvel no chão até o resgate chegar.",
      },
      {
        imagem: "/images/traumas.png",
        alt: "Passo 2",
        titulo: "2. Estabilize a cabeça e o pescoço",
        texto:
          "Peça para a pessoa não mexer o pescoço. Se necessário, apoie as mãos suavemente nas laterais da cabeça dela para evitar que ela gire para os lados.",
      },
      {
        imagem: "/images/traumas.png",
        alt: "Passo 3",
        titulo: "3. Imobilize o membro na posição encontrada",
        texto:
          "Se houver suspeita de fratura em braço ou perna (dor intensa, inchaço ou deformidade), apoie o membro com almofadas ou talas improvisadas sem forçar o alinhamento.",
      },
      {
        imagem: "/images/traumas.png",
        alt: "Passo 4",
        titulo: "4. Proteja fraturas expostas",
        texto:
          "Se o osso perfurou a pele, NÃO tente empurrá-lo para dentro. Cubra o ferimento com um pano muito limpo ou gaze estéril e controle o sangramento ao redor com pressão suave.",
      },
      {
        imagem: "/images/traumas.png",
        alt: "Passo 5",
        titulo: "5. Aplique frio local (apenas em traumas leves)",
        texto:
          "Em pancadas ou entorses fechados sem ferida aberta, aplique uma bolsa de gelo envolvida em um pano por até 15 minutos para reduzir o inchaço e acione o 192/193.",
      },
    ],
  },

  {
    id: "cortes",
    nome: "Cortes e Sangramentos",
    titulo: "Cortes e Sangramentos",
    icone: "/images/cortesesangramentos.png",
    categoria: "Ferimentos",
    alerta:
      "NUNCA retire objetos encravados (facas, cacos de vidro, ferragens) do ferimento, pois eles funcionam como um tampão contendo uma hemorragia maior.",
    passos: [
      {
        imagem: "/images/cortesesangramentos.png",
        alt: "Passo 1",
        titulo: "1. Faça compressão direta imediata",
        texto:
          "Pegue um pano limpo, toalha ou pacotes de gaze e pressione com firmeza diretamente sobre o corte que está sangrando. Mantenha a pressão contínua por pelo menos 5 a 10 minutos.",
      },
      {
        imagem: "/images/cortesesangramentos.png",
        alt: "Passo 2",
        titulo: "2. Não troque o pano encharcado",
        texto:
          "Se o sangue atravessar o primeiro pano, NÃO o retire (para não arrancar o coágulo que está se formando). Coloque outro pano limpo por cima do primeiro e continue pressionando.",
      },
      {
        imagem: "/images/cortesesangramentos.png",
        alt: "Passo 3",
        titulo: "3. Lave apenas cortes superficiais",
        texto:
          "Se for um corte pequeno e o sangramento já tiver parado, lave com água corrente e sabão neutro, mantendo protegido com curativo limpo.",
      },
      {
        imagem: "/images/cortesesangramentos.png",
        alt: "Passo 4",
        titulo: "4. Objeto encravado? Estabilize ao redor",
        texto:
          "Caso haja vidro ou metal fincado no corte, faça pressão apenas nas bordas ao redor do objeto e crie um apoio com panos para que ele não se mova.",
      },
      {
        imagem: "/images/cortesesangramentos.png",
        alt: "Passo 5",
        titulo: "5. Previna o estado de choque e ligue 192",
        texto:
          "Se o sangramento for em jato, muito intenso ou não parar com a pressão, ligue 192 imediatamente, deite a vítima e mantenha-a aquecida.",
      },
    ],
  },

  {
    id: "choque",
    nome: "Choque Elétrico",
    titulo: "Choque Elétrico",
    icone: "/images/choqueeletrico.png",
    categoria: "Outros",
    alerta:
      "NUNCA toque na vítima com as mãos nuas enquanto ela ainda estiver em contato com a rede elétrica ou fio energizado!",
    passos: [
      {
        imagem: "/images/choqueeletrico.png",
        alt: "Passo 1",
        titulo: "1. Desligue a fonte de energia primeiro",
        texto:
          "Antes de se aproximar, desligue a chave geral/disjuntor ou tire o aparelho da tomada. Se for fio de alta tensão na rua, afaste todos e ligue 193 (Bombeiros).",
      },
      {
        imagem: "/images/choqueeletrico.png",
        alt: "Passo 2",
        titulo: "2. Afaste a vítima com material isolante seco",
        texto:
          "Se não puder desligar a energia imediatamente, suba em algo seco (borracha ou madeira) e use um cabo de vassoura de madeira seco ou plástico para afastar o fio da vítima. Nunca use objetos metálicos ou úmidos.",
      },
      {
        imagem: "/images/choqueeletrico.png",
        alt: "Passo 3",
        titulo: "3. Verifique resposta e respiração",
        texto:
          "Assim que a vítima estiver livre da corrente elétrica e em local seguro, verifique se ela responde e se o peito se move (respiração).",
      },
      {
        imagem: "/images/choqueeletrico.png",
        alt: "Passo 4",
        titulo: "4. Inicie RCP se não houver respiração",
        texto:
          "O choque elétrico causa parada cardiorrespiratória com frequência. Se a vítima estiver inconsciente e não respirar, inicie imediatamente as compressões no peito (veja o guia de RCP).",
      },
      {
        imagem: "/images/choqueeletrico.png",
        alt: "Passo 5",
        titulo: "5. Cuide das queimaduras elétricas",
        texto:
          "Se a vítima estiver respirando, procure pelas queimaduras de entrada e saída da corrente elétrica, cubra com pano limpo e seco e aguarde o SAMU (192).",
      },
    ],
  },

  {
    id: "afogamento",
    nome: "Afogamento",
    titulo: "Afogamento",
    icone: "/images/afogamento.png",
    categoria: "Respiração",
    alerta:
      "NUNCA entre na água para tentar salvar alguém se você não tiver treinamento de guarda-vidas. Jogue algo que flutue!",
    passos: [
      {
        imagem: "/images/afogamento.png",
        alt: "Passo 1",
        titulo: "1. Tire a vítima da água com segurança",
        texto:
          "Forneça um objeto flutuante (boia, garrafa PET vazia fechada, prancha, isopor) ou estenda um cabo/galho comprido a partir da margem segura, sem entrar na correnteza.",
      },
      {
        imagem: "/images/afogamento.png",
        alt: "Passo 2",
        titulo: "2. Posicione em local plano e peça ajuda",
        texto:
          "Assim que retirar a vítima da água, deite-a de barriga para cima em local seguro e peça para alguém ligar imediatamente para o 193 (Bombeiros) ou 192 (SAMU).",
      },
      {
        imagem: "/images/afogamento.png",
        alt: "Passo 3",
        titulo: "3. Verifique a respiração (não aperte a barriga)",
        texto:
          "Abra as vias aéreas inclinando levemente a cabeça e ouça a respiração por até 10 segundos. NUNCA tente comprimir o estômago para tirar água engolida.",
      },
      {
        imagem: "/images/afogamento.png",
        alt: "Passo 4",
        titulo: "4. Faça 5 ventilações e inicie RCP se não respirar",
        texto:
          "No afogamento, a parada é por falta de oxigênio. Se souber fazer respiração boca a boca, inicie com 5 ventilações de resgate seguidas de 30 compressões torácicas e 2 ventilações.",
      },
      {
        imagem: "/images/afogamento.png",
        alt: "Passo 5",
        titulo: "5. Se estiver respirando, coloque de lado e aqueça",
        texto:
          "Caso a pessoa esteja tossindo ou respirando sozinha, vire-a de lado (posição lateral de segurança), retire roupas molhadas se possível e cubra-a com toalha ou cobertor seco para evitar hipotermia.",
      },
    ],
  },

  {
    id: "desmaio",
    nome: "Desmaio",
    titulo: "Desmaio (Síncope)",
    icone: "/images/desmaio.png",
    categoria: "Outros",
    alerta:
      "NUNCA jogue água fria no rosto, não dê álcool/amônia para cheirar e não tente dar água ou comida enquanto a pessoa estiver desacordada.",
    passos: [
      {
        imagem: "/images/desmaio.png",
        alt: "Passo 1",
        titulo: "1. Amorteça a queda e deite a pessoa",
        texto:
          "Se perceber que alguém está prestes a desmaiar (suor frio, palidez, tontura), ampare a pessoa e coloque-a deitada de costas no chão imediatamente.",
      },
      {
        imagem: "/images/desmaio.png",
        alt: "Passo 2",
        titulo: "2. Verifique se ela está respirando",
        texto:
          "Observe se o peito sobe e desce normalmente. Se a pessoa não responder e NÃO estiver respirando, não é um simples desmaio: ligue 192 e inicie a RCP imediatamente.",
      },
      {
        imagem: "/images/desmaio.png",
        alt: "Passo 3",
        titulo: "3. Eleve as pernas (cerca de 30 cm)",
        texto:
          "Se a pessoa estiver respirando normalmente e sem traumas na cabeça, levante as pernas dela apoiando os pés sobre uma mochila, cadeira ou suas próprias pernas para ajudar o sangue a retornar ao cérebro.",
      },
      {
        imagem: "/images/desmaio.png",
        alt: "Passo 4",
        titulo: "4. Afrouxe roupas apertadas e ventile o local",
        texto:
          "Solte botões de camisa, gravatas, cintos e afaste os curiosos ao redor para permitir a circulação de ar fresco.",
      },
      {
        imagem: "/images/desmaio.png",
        alt: "Passo 5",
        titulo: "5. Aguarde a recuperação gradual",
        texto:
          "Quando a pessoa acordar, não deixe que ela se levante de uma vez. Mantenha-a deitada por alguns minutos, depois sentada devagar. Ligue 192 se ela não acordar em 2 minutos, se for idosa, gestante ou diabética.",
      },
    ],
  },
];


function listar() {
  return emergencias.map((e) => ({
    nome: e.nome,
    icone: e.icone,
    categoria: e.categoria,
    rota: e.passos.length > 0 ? `/${e.id}` : "#",
  }));
}


function obterPorSlug(slug) {
  const emergencia = emergencias.find((e) => e.id === slug);

  return emergencia && emergencia.passos.length > 0
    ? emergencia
    : null;
}


module.exports = {
  listar,
  obterPorSlug,
};
