/* Laboratório de sons: fonética do português com o AFI.
   Pronúncia de referência: Brasil = padrão mais comum do Sudeste; Portugal = Lisboa. */
window.PT = window.PT || {};

/* Onde o som é feito (pontos no desenho da boca) */
PT.PLACES = {
  lab: { t: "os dois lábios", x: 53, y: 109 },
  labdent: { t: "lábio de baixo + dentes de cima", x: 60, y: 111 },
  dent: { t: "ponta da língua nos dentes de cima", x: 66, y: 104 },
  alv: { t: "atrás dos dentes (alvéolos)", x: 77, y: 98 },
  postalv: { t: "logo atrás dos alvéolos, no começo do céu da boca", x: 93, y: 90 },
  pal: { t: "céu da boca duro (palato)", x: 116, y: 85 },
  vel: { t: "céu da boca mole (véu palatino)", x: 152, y: 90 },
  uv: { t: "úvula, a “campainha” no fundo da boca", x: 171, y: 107 },
  glot: { t: "garganta (glote)", x: 181, y: 186 }
};

/* Vogais orais. x, y = posição no quadro das vogais */
PT.VOWELS = [
  { s: "i", n: "i", x: 128, y: 42, tongue: "alta · na frente", lips: "esticados",
    ex: [["vi", "ˈvi"], ["dia", "ˈdʒiɐ"], ["leite", "ˈlejtʃi"]],
    how: "Sorria de leve. A língua sobe e vai para a frente, quase tocando o céu da boca.",
    note: "No Brasil, o **e** sem força no final também soa [i]: leite [ˈlejtʃi]." },
  { s: "e", n: "ê fechado", x: 154, y: 90, tongue: "meio alta · na frente", lips: "esticados",
    ex: [["você", "voˈse"], ["medo", "ˈmedu"], ["mesa", "ˈmezɐ"]],
    how: "Abra a boca um pouco mais que no [i]. Um sorriso pequeno, com a língua na frente.",
    note: "Escrito **ê** ou **e**. Compare: sede (vontade de beber) [ˈsedʒi] × sede (lugar central) [ˈsɛdʒi]." },
  { s: "ɛ", n: "é aberto", x: 184, y: 150, tongue: "meio baixa · na frente", lips: "abertos",
    ex: [["café", "kaˈfɛ"], ["pé", "ˈpɛ"], ["ela", "ˈɛlɐ"]],
    how: "Abra mais a boca, como num sorriso grande. A língua desce um pouco.",
    note: "Escrito **é** ou **e**. O acento agudo (´) sempre marca uma vogal aberta." },
  { s: "a", n: "a aberto", x: 262, y: 198, tongue: "baixa · no centro", lips: "bem abertos",
    ex: [["pá", "ˈpa"], ["gato", "ˈgatu"], ["lá", "ˈla"]],
    how: "Abra bem a boca, como no médico. A língua fica baixa e relaxada.",
    note: "Na sílaba forte antes de **m**, **n** ou **nh**, o Brasil fecha e nasaliza: cama [ˈkɐ̃mɐ]." },
  { s: "ɐ", n: "a fechado", x: 238, y: 164, tongue: "média · no centro", lips: "relaxados",
    ex: [["casa", "ˈkazɐ"], ["mesa", "ˈmezɐ"], ["cama", "ˈkɐ̃mɐ"]],
    how: "Boca meio aberta e tudo relaxado. É o som de um **a** sem força.",
    note: "Nos dois países, o **a** sem força no final soa [ɐ]. 🇵🇹 Em Portugal ele aparece também antes da sílaba forte: café [kɐˈfɛ]." },
  { s: "ɔ", n: "ó aberto", x: 318, y: 150, tongue: "meio baixa · atrás", lips: "redondos e abertos", round: true,
    ex: [["avó", "aˈvɔ"], ["pó", "ˈpɔ"], ["bola", "ˈbɔlɐ"]],
    how: "Faça um círculo grande com os lábios. A língua fica atrás e baixa.",
    note: "Escrito **ó** ou **o**. avó [aˈvɔ] é mulher; avô [aˈvo] é homem." },
  { s: "o", n: "ô fechado", x: 318, y: 90, tongue: "meio alta · atrás", lips: "redondos e mais fechados", round: true,
    ex: [["avô", "aˈvo"], ["ovo", "ˈovu"], ["todo", "ˈtodu"]],
    how: "Lábios redondos, mais fechados que no [ɔ], como um beijo pequeno.",
    note: "Escrito **ô** ou **o**. No plural, às vezes abre: ovo [ˈovu] → ovos [ˈɔvus]." },
  { s: "u", n: "u", x: 318, y: 42, tongue: "alta · atrás", lips: "redondos e para a frente", round: true,
    ex: [["tu", "ˈtu"], ["uva", "ˈuvɐ"], ["gato", "ˈgatu"]],
    how: "Lábios bem redondos e para a frente, como para assobiar. A língua sobe lá atrás.",
    note: "Nos dois países, o **o** sem força no final soa [u]: gato [ˈgatu]." },
  { s: "ɨ", n: "e “mudo” de Portugal", x: 222, y: 42, tongue: "alta · no centro", lips: "relaxados", ptOnly: true,
    ex: [["pequeno", "pɨˈkenu"], ["de", "dɨ"], ["noite", "ˈnojtɨ"]],
    how: "Como um [i], mas com a língua mais para trás e os lábios relaxados. É muito curto e às vezes quase some.",
    note: "🇵🇹 Só existe em Portugal. No Brasil, essas vogais soam [e] ou [i]: pequeno [peˈkenu], de [dʒi]." }
];

/* Vogais sem força: [tema, palavra, Brasil, Portugal] */
PT.REDUCTION = [
  ["e no final", "leite", "ˈlejtʃi", "ˈlɐjtɨ"],
  ["o no final", "gato", "ˈgatu", "ˈgatu"],
  ["a no final", "casa", "ˈkazɐ", "ˈkazɐ"],
  ["e antes da sílaba forte", "pequeno", "peˈkenu", "pɨˈkenu"],
  ["o antes da sílaba forte", "morango", "moˈɾɐ̃gu", "muˈɾɐ̃gu"],
  ["tudo junto", "telefone", "teleˈfõni", "tɨlɨˈfɔnɨ"]
];

/* Vogais e ditongos nasais */
PT.NASALS = [
  { s: "ɐ̃", n: "a nasal", ex: ["lã", "campo", "samba"], how: "Boca meio aberta, língua relaxada, e o ar sai também pelo nariz." },
  { s: "ẽ", n: "e nasal", ex: ["tempo", "dente", "lenço"], how: "Posição do [e], com o ar saindo pelo nariz." },
  { s: "ĩ", n: "i nasal", ex: ["sim", "fim", "cinco"], how: "Posição do [i], com o ar saindo pelo nariz." },
  { s: "õ", n: "o nasal", ex: ["bom", "som", "onde"], how: "Lábios redondos do [o], com o ar saindo pelo nariz. Não feche a boca no final." },
  { s: "ũ", n: "u nasal", ex: ["um", "mundo", "atum"], how: "Lábios do [u], com o ar saindo pelo nariz." },
  { s: "ɐ̃w̃", n: "ão", ex: ["pão", "mão", "falam"], how: "Comece em [ɐ̃] e arredonde os lábios para um [u] nasal curto. A boca não fecha." },
  { s: "ɐ̃j̃", n: "ãe", ex: ["mãe", "pães", "cães"], how: "Comece em [ɐ̃] e deslize para um [i] nasal curto." },
  { s: "ẽj̃", n: "em", ex: ["bem", "também", "trem"], how: "Comece em [ẽ] e deslize para um [i] nasal curto.", pt: "Em Portugal soa [ɐ̃j̃], igual a mãe: bem [ˈbɐ̃j̃]." },
  { s: "õj̃", n: "õe", ex: ["põe", "limões", "corações"], how: "Comece em [õ] e deslize para um [i] nasal curto." }
];

/* Consoantes. g = grupo, p = lugar (PT.PLACES), v = vozeado (a garganta vibra), nasal = ar pelo nariz */
PT.CONS_GROUPS = [
  ["plo", "Explosivas (oclusivas)", "O ar para por um instante e sai de uma vez."],
  ["afr", "Africadas", "Uma explosão seguida de um chiado, tudo junto."],
  ["fri", "Fricativas", "O ar passa apertado e faz barulho, sem parar."],
  ["nas", "Nasais", "A boca fecha num ponto e o ar sai pelo nariz."],
  ["liq", "L, R e companhia", "Sons líquidos: a língua toca, vibra ou se curva."]
];
PT.CONSONANTS = [
  { s: "p", n: "P", g: "plo", p: "lab", v: false, l: "p", ex: ["pai", "sopa", "pé"],
    how: "Feche os lábios, segure o ar e solte de uma vez. A garganta não vibra." },
  { s: "b", n: "B", g: "plo", p: "lab", v: true, l: "b", ex: ["bola", "abacaxi", "bebê"],
    how: "Igual ao [p], mas com a garganta vibrando.",
    pt: "Entre vogais, os lábios quase não se fecham: sábado [ˈsaβɐðu]." },
  { s: "t", n: "T", g: "plo", p: "dent", v: false, l: "t", ex: ["tu", "gato", "pato"],
    how: "Encoste a ponta da língua atrás dos dentes de cima e solte o ar. Sem vibrar e sem sopro extra.",
    br: "Antes do som [i], vira [tʃ]: tia [ˈtʃiɐ]." },
  { s: "d", n: "D", g: "plo", p: "dent", v: true, l: "d", ex: ["dou", "nada", "dado"],
    how: "Igual ao [t], com a garganta vibrando.",
    br: "Antes do som [i], vira [dʒ]: dia [ˈdʒiɐ].",
    pt: "Entre vogais fica suave, com a língua sem fechar: nada [ˈnaðɐ]." },
  { s: "k", n: "C / QU", g: "plo", p: "vel", v: false, l: "c (antes de a, o, u), qu, k", ex: ["casa", "quero", "saco"],
    how: "Levante a parte de trás da língua até o céu da boca mole e solte o ar." },
  { s: "g", n: "G", g: "plo", p: "vel", v: true, l: "g (antes de a, o, u), gu", ex: ["gato", "guerra", "lago"],
    how: "Igual ao [k], com a garganta vibrando.",
    pt: "Entre vogais fica suave: lago [ˈlaɣu]." },
  { s: "tʃ", n: "TCH do Brasil", g: "afr", p: "postalv", v: false, l: "t antes do som [i]", ex: ["tia", "leite", "noite"], brOnly: true,
    how: "Comece com a língua como no [t] e solte o ar como um [ʃ]: t + ch, tudo junto.",
    pt: "Não existe em Portugal: tia [ˈtiɐ], noite [ˈnojtɨ]." },
  { s: "dʒ", n: "DJ do Brasil", g: "afr", p: "postalv", v: true, l: "d antes do som [i]", ex: ["dia", "tarde", "cidade"], brOnly: true,
    how: "Igual ao [tʃ], com a garganta vibrando: d + j, tudo junto.",
    pt: "Não existe em Portugal: dia [ˈdiɐ], cidade [siˈðaðɨ]." },
  { s: "f", n: "F", g: "fri", p: "labdent", v: false, l: "f", ex: ["faca", "café", "fim"],
    how: "Encoste o lábio de baixo nos dentes de cima e sopre." },
  { s: "v", n: "V", g: "fri", p: "labdent", v: true, l: "v", ex: ["vovó", "uva", "vida"],
    how: "Igual ao [f], com a garganta vibrando." },
  { s: "s", n: "S", g: "fri", p: "alv", v: false, l: "s, ss, c (antes de e, i), ç", ex: ["sol", "massa", "açaí"],
    how: "A ponta da língua chega perto dos alvéolos, sem encostar. O ar passa assobiando, como uma cobra.",
    br: "No fim da sílaba, a maior parte do Brasil fala [s]: festa [ˈfɛstɐ]. No Rio, [ʃ].",
    pt: "No fim da sílaba chia: festa [ˈfɛʃtɐ]." },
  { s: "z", n: "Z", g: "fri", p: "alv", v: true, l: "z, s entre vogais", ex: ["zero", "casa", "mesa"],
    how: "Igual ao [s], com a garganta vibrando. Soa como uma abelha." },
  { s: "ʃ", n: "CH / X", g: "fri", p: "postalv", v: false, l: "ch, x", ex: ["chá", "xícara", "peixe"],
    how: "Lábios um pouco para a frente e a língua mais para trás que no [s]. É o som de pedir silêncio: shhh." },
  { s: "ʒ", n: "J", g: "fri", p: "postalv", v: true, l: "j, g (antes de e, i)", ex: ["já", "gente", "hoje"],
    how: "Igual ao [ʃ], com a garganta vibrando." },
  { s: "h", g: "fri", p: "glot", v: false, l: "r no começo da palavra, rr", ex: ["rua", "carro", "Rio"], brOnly: true, n: "R forte do Brasil",
    how: "Sopre o ar da garganta, como quando você embaça um espelho. A ponta da língua não trabalha.",
    br: "Varia: [h] na garganta ou [x] no céu da boca mole. No Rio, às vezes [χ], mais raspado.",
    pt: "Em Portugal é [ʁ], na úvula." },
  { s: "ʁ", g: "fri", p: "uv", v: true, l: "r no começo da palavra, rr", ex: ["rua", "carro", "rato"], ptOnly: true, n: "R forte de Portugal",
    how: "Levante a parte de trás da língua perto da úvula e deixe o ar raspar, como num gargarejo leve." },
  { s: "m", n: "M", g: "nas", p: "lab", v: true, nasal: true, l: "m", ex: ["mãe", "cama", "mimo"],
    how: "Feche os lábios e deixe o ar sair pelo nariz." },
  { s: "n", n: "N", g: "nas", p: "alv", v: true, nasal: true, l: "n", ex: ["não", "cana", "nome"],
    how: "A ponta da língua encosta nos alvéolos e o ar sai pelo nariz." },
  { s: "ɲ", n: "NH", g: "nas", p: "pal", v: true, nasal: true, l: "nh", ex: ["banho", "sonho", "vinho"],
    how: "O meio da língua encosta no céu da boca duro e o ar sai pelo nariz.",
    br: "Muitas vezes a língua nem encosta: soa como um [j] nasal. banho [ˈbɐ̃ȷ̃u].",
    pt: "Um [ɲ] completo, com a língua encostada: banho [ˈbɐɲu]." },
  { s: "l", n: "L", g: "liq", p: "alv", v: true, l: "l (no começo da sílaba)", ex: ["lua", "bola", "lado"],
    how: "A ponta da língua encosta nos alvéolos e o ar passa pelos lados da língua." },
  { s: "ʎ", n: "LH", g: "liq", p: "pal", v: true, l: "lh", ex: ["filho", "mulher", "olho"],
    how: "O meio da língua encosta no céu da boca duro, e o ar passa pelos lados. Não é [l] + [i]!" },
  { s: "ɾ", g: "liq", p: "alv", v: true, l: "r entre vogais, r depois de consoante", ex: ["caro", "para", "prato"], n: "R fraco",
    how: "Um toque só, muito rápido, da ponta da língua nos alvéolos.",
    br: "Igual nos dois países. Cuidado: caro [ˈkaɾu] × carro [ˈkahu]." },
  { s: "ɻ", g: "liq", p: "postalv", v: true, l: "r no fim da sílaba (em algumas regiões)", ex: ["porta", "mar", "carne"], brOnly: true, n: "R caipira",
    how: "Curve a ponta da língua para trás, sem encostar no céu da boca.",
    br: "Comum no interior de São Paulo, em Minas, Goiás, Mato Grosso e no Paraná." },
  { s: "w", g: "liq", p: "lab", v: true, l: "l no fim da sílaba", ex: ["Brasil", "sol", "mal"], brOnly: true, n: "L final do Brasil",
    how: "A língua não encosta: arredonde os lábios como num [u] curto. Por isso mal e mau soam iguais.",
    pt: "Em Portugal é [ɫ], um l “escuro”." },
  { s: "ɫ", g: "liq", p: "vel", v: true, l: "l no fim da sílaba", ex: ["Portugal", "sol", "mal"], ptOnly: true, n: "L escuro de Portugal",
    how: "A ponta da língua fica nos alvéolos, como no [l], e a parte de trás sobe para o céu da boca mole. O som fica mais grave." }
];

/* Brasil × Portugal: [tema, palavra, Brasil, Portugal, explicação] */
PT.BRPT = [
  ["T e D antes de i", "tia", "ˈtʃiɐ", "ˈtiɐ", "No Brasil, **t** e **d** antes do som [i] viram [tʃ] e [dʒ]. Em Portugal, continuam [t] e [d]."],
  ["E no final", "noite", "ˈnojtʃi", "ˈnojtɨ", "No Brasil, o **e** final soa [i] (e o **t** vira [tʃ]). Em Portugal, vira [ɨ] ou some."],
  ["Vogais sem força", "telefone", "teleˈfõni", "tɨlɨˈfɔnɨ", "O Brasil pronuncia todas as vogais. Portugal quase engole as vogais sem força."],
  ["L no final", "Brasil", "bɾaˈziw", "bɾɐˈziɫ", "No Brasil, o **l** final vira [w]. Em Portugal, é um **l** escuro [ɫ]."],
  ["S no final", "festa", "ˈfɛstɐ", "ˈfɛʃtɐ", "Em Portugal (e no Rio de Janeiro), o **s** no fim da sílaba chia: [ʃ]."],
  ["R forte", "rua", "ˈhuɐ", "ˈʁuɐ", "Brasil: um sopro na garganta [h]. Portugal: um gargarejo leve na úvula [ʁ]."],
  ["R no final", "mar", "ˈmah", "ˈmaɾ", "No Brasil varia muito: [h], [ɾ] ou o [ɻ] caipira. Nos verbos, muitas vezes some: falar [faˈla]."],
  ["B, D, G entre vogais", "cada", "ˈkadɐ", "ˈkaðɐ", "Em Portugal ficam suaves, sem fechar totalmente: [β], [ð], [ɣ]."],
  ["EI", "peixe", "ˈpejʃi", "ˈpɐjʃɨ", "Em Lisboa, **ei** soa [ɐj]. No Brasil, [ej], e às vezes só [e]: [ˈpeʃi]."],
  ["EM nasal", "bem", "ˈbẽj̃", "ˈbɐ̃j̃", "Em Portugal, **-em** soa como em **mãe**."],
  ["Vogal extra", "advogado", "adʒivoˈgadu", "ɐðvuˈɣaðu", "O Brasil coloca um [i] entre consoantes que ficam juntas: pneu [piˈnew]."],
  ["NH", "banho", "ˈbɐ̃ȷ̃u", "ˈbɐɲu", "No Brasil, o **nh** muitas vezes é um [j] nasal, sem a língua encostar."]
];

/* Palavras para o desafio: [palavra, Brasil, Portugal] */
PT.IPA_WORDS = [
  ["tia", "ˈtʃiɐ", "ˈtiɐ"], ["dia", "ˈdʒiɐ", "ˈdiɐ"], ["leite", "ˈlejtʃi", "ˈlɐjtɨ"], ["cidade", "siˈdadʒi", "siˈðaðɨ"],
  ["Brasil", "bɾaˈziw", "bɾɐˈziɫ"], ["festa", "ˈfɛstɐ", "ˈfɛʃtɐ"], ["rua", "ˈhuɐ", "ˈʁuɐ"], ["carro", "ˈkahu", "ˈkaʁu"],
  ["caro", "ˈkaɾu", "ˈkaɾu"], ["bem", "ˈbẽj̃", "ˈbɐ̃j̃"], ["telefone", "teleˈfõni", "tɨlɨˈfɔnɨ"], ["pão", "ˈpɐ̃w̃", "ˈpɐ̃w̃"],
  ["mãe", "ˈmɐ̃j̃", "ˈmɐ̃j̃"], ["filho", "ˈfiʎu", "ˈfiʎu"], ["banho", "ˈbɐ̃ȷ̃u", "ˈbɐɲu"], ["chá", "ˈʃa", "ˈʃa"],
  ["avó", "aˈvɔ", "ɐˈvɔ"], ["avô", "aˈvo", "ɐˈvo"], ["cada", "ˈkadɐ", "ˈkaðɐ"], ["peixe", "ˈpejʃi", "ˈpɐjʃɨ"],
  ["mar", "ˈmah", "ˈmaɾ"], ["sol", "ˈsɔw", "ˈsɔɫ"], ["noite", "ˈnojtʃi", "ˈnojtɨ"], ["pequeno", "peˈkenu", "pɨˈkenu"],
  ["café", "kaˈfɛ", "kɐˈfɛ"], ["casa", "ˈkazɐ", "ˈkazɐ"], ["gente", "ˈʒẽtʃi", "ˈʒẽtɨ"], ["mesmo", "ˈmezmu", "ˈmeʒmu"]
];
