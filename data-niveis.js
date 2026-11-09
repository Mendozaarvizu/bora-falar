/* Níveis do Quadro Europeu Comum de Referência (QECR). A trilha é organizada por nível;
   "u" lista as unidades na ordem em que aparecem. Níveis sem unidades aparecem como "em breve". */
window.PT = window.PT || {};

PT.LEVELS = [
  {
    id: "A1", t: "Iniciante", c: "#15803D",
    d: "Os primeiros passos: se apresentar e se virar no dia a dia.",
    can: [
      "Se apresentar e falar de você: nome, idade, origem, profissão.",
      "Falar da família, dos amigos, da casa e da rotina.",
      "Usar números, preços, horas e datas.",
      "Pedir comida, fazer compras e perguntar o caminho.",
      "Dizer como você se sente e o que dói.",
      "Falar de planos e contar o que fez, com frases simples.",
      "Pedir ajuda quando não entende."
    ],
    u: ["u11", "u1", "u2", "u12", "u6", "u3", "u13", "u14", "u7", "u4", "u5"]
  },
  {
    id: "A2", t: "Básico", c: "#0E7490",
    d: "Contar o passado, resolver a vida no dia a dia e dar a sua opinião.",
    can: [
      "Contar a história da sua vida e o que aconteceu, com os dois passados.",
      "Falar do seu trabalho, dos estudos, da sua casa e do seu bairro.",
      "Resolver o dia a dia: banco, compras, trocas, médico, hotel e viagens.",
      "Fazer e atender ligações, deixar recado e escrever e-mails simples.",
      "Entender avisos, placas, receitas e mensagens curtas.",
      "Comparar coisas, dar opinião e conselhos, e pedir desculpas."
    ],
    u: ["u15", "u8", "u16", "u17", "u9", "u10", "u18", "u19", "u20", "u21"]
  },
  {
    id: "B1", t: "Intermediário", c: "#1D4ED8",
    d: "Se virar sozinho, contar experiências e defender ideias.",
    can: [
      "Se virar na maioria das situações de viagem.",
      "Contar experiências, sonhos, desejos e planos.",
      "Explicar e justificar a sua opinião.",
      "Entender o essencial de séries, notícias e conversas sobre temas conhecidos."
    ],
    u: []
  },
  {
    id: "B2", t: "Intermediário superior", c: "#6D28D9",
    d: "Conversar com fluência e naturalidade com brasileiros.",
    can: [
      "Conversar com brasileiros com fluência, sem esforço dos dois lados.",
      "Entender textos e debates mais complexos.",
      "Defender um ponto de vista, com vantagens e desvantagens."
    ],
    u: []
  },
  {
    id: "C1", t: "Avançado", c: "#BE185D",
    d: "Usar a língua com flexibilidade na vida social e no trabalho.",
    can: [
      "Entender textos longos e sentidos implícitos.",
      "Falar de forma fluente e espontânea, sem procurar palavras.",
      "Usar a língua com flexibilidade no trabalho e nos estudos."
    ],
    u: []
  },
  {
    id: "C2", t: "Proficiente", c: "#9A3412",
    d: "Entender praticamente tudo e se expressar com precisão.",
    can: [
      "Entender praticamente tudo o que ouve ou lê.",
      "Se expressar com precisão e nuances, mesmo em situações complexas."
    ],
    u: []
  }
];

// Põe as unidades na ordem dos níveis e marca o nível de cada uma.
(function () {
  const byId = Object.fromEntries(PT.UNITS.map((u) => [u.id, u]));
  const used = new Set();
  for (const L of PT.LEVELS) {
    L.units = L.u.filter((id) => byId[id] && !used.has(id)).map((id) => { used.add(id); byId[id].lvl = L.id; return byId[id]; });
  }
  // Unidade nova que ainda não foi posta num nível: vai para o fim do último nível com unidades.
  const last = PT.LEVELS.filter((L) => L.units.length).pop();
  for (const u of PT.UNITS) if (!used.has(u.id)) { u.lvl = last.id; last.units.push(u); }
  PT.UNITS = PT.LEVELS.flatMap((L) => L.units);
})();
