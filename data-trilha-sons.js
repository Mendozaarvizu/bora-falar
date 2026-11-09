/* Trilha de sons: lições de pronúncia (Brasil primeiro; cada unidade fecha com uma lição "Em Portugal").
   Lição do Brasil:
     { id, e, t, sym, ex: [linhas md], cats: [{ k, label, hint, words }], pairs: [[a, b]], ipa: [[palavra, AFI]], say: [palavras ou frases] }
   Lição de Portugal (pt: true):
     { id, e, t, sym, pt: true, ex, where: [[palavra, AFI Brasil, AFI Portugal]], say }
   Nos textos, [[palavra]] vira um botão de ouvir. */
window.PT = window.PT || {};

PT.SOUND_UNITS = [
  {
    id: "sv", e: "👄", c: "#C2410C", t: "As sete vogais",
    d: "O espanhol tem cinco vogais. O português tem sete: o E e o O têm, cada um, um som aberto e um fechado.",
    lessons: [
      {
        id: "sn-v1", e: "☕", t: "é aberto × ê fechado", sym: "[ɛ] × [e]",
        ex: [
          "A letra **e** tem dois sons na sílaba forte. O **ê fechado** [e] é o **e** do espanhol: [[você]], [[mesa]], [[medo]].",
          "O **é aberto** [ɛ] não existe no espanhol. Abra mais a boca, como num sorriso grande, e deixe a língua descer: [[café]], [[pé]], [[ela]].",
          "Compare: [[seu]] (fechado) × [[céu]] (aberto). [[meu]] × [[mel]]. Só a abertura da boca muda, e a palavra é outra.",
          "**Como saber pela escrita?** O acento agudo (**é**) é sempre aberto. O circunflexo (**ê**) é sempre fechado. Sem acento, pode ser um ou outro: é preciso ouvir e guardar cada palavra.",
          "**Truque:** diga o **e** do espanhol e desça o queixo um dedo, sem mexer a língua para trás. Esse é o [ɛ]."
        ],
        cats: [
          { k: "ɛ", label: "[ɛ] aberto", hint: "como em café", words: ["café", "pé", "ela", "céu", "festa", "dez", "sete", "mulher", "janela", "médico", "velho", "mel"] },
          { k: "e", label: "[e] fechado", hint: "como em você", words: ["você", "mesa", "medo", "ele", "seu", "três", "cedo", "verde", "mês", "dedo", "meu", "português"] }
        ],
        pairs: [["seu", "céu"], ["meu", "mel"], ["pê", "pé"]],
        ipa: [["café", "kaˈfɛ"], ["você", "voˈse"], ["céu", "ˈsɛw"], ["seu", "ˈsew"], ["mesa", "ˈmezɐ"], ["festa", "ˈfɛstɐ"], ["ela", "ˈɛlɐ"], ["medo", "ˈmedu"]],
        say: ["café", "céu", "você", "Ela quer mel no café."]
      },
      {
        id: "sn-v2", e: "👵", t: "ó aberto × ô fechado", sym: "[ɔ] × [o]",
        ex: [
          "Com a letra **o** acontece a mesma coisa. O **ô fechado** [o] é o **o** do espanhol: [[avô]], [[ovo]], [[todo]].",
          "O **ó aberto** [ɔ] é novo. Faça um círculo grande com os lábios e desça o queixo: [[avó]], [[pó]], [[bola]].",
          "Aqui a diferença muda a família: [[avô]] é homem, [[avó]] é mulher. E também: [[sou]] × [[sol]], [[pôde]] (ontem) × [[pode]] (hoje).",
          "**Pela escrita:** **ó** é sempre aberto e **ô** é sempre fechado. Sem acento, é preciso ouvir.",
          "**Uma pista útil:** muitas palavras fecham no masculino e abrem no feminino e no plural: [[novo]] [o], mas [[nova]] e [[novos]] [ɔ]. [[ovo]] [o], mas [[ovos]] [ɔ]."
        ],
        cats: [
          { k: "ɔ", label: "[ɔ] aberto", hint: "como em avó", words: ["avó", "pó", "bola", "sol", "nós", "hora", "porta", "escola", "ótimo", "loja", "agora", "história"] },
          { k: "o", label: "[o] fechado", hint: "como em avô", words: ["avô", "ovo", "todo", "bolo", "novo", "sou", "hoje", "dois", "boca", "nome", "amor", "senhor"] }
        ],
        pairs: [["avô", "avó"], ["vovô", "vovó"], ["sou", "sol"], ["pôde", "pode"]],
        ipa: [["avó", "aˈvɔ"], ["avô", "aˈvo"], ["bola", "ˈbɔlɐ"], ["bolo", "ˈbolu"], ["sol", "ˈsɔw"], ["sou", "ˈsow"], ["hora", "ˈɔɾɐ"], ["ovo", "ˈovu"]],
        say: ["avó", "avô", "sol", "A vovó e o vovô moram na escola."]
      },
      {
        id: "sn-v3", e: "🎯", t: "As sete juntas", sym: "[i e ɛ a ɔ o u]",
        ex: [
          "Agora as sete vogais fortes do português, da boca mais fechada na frente até a mais fechada atrás:",
          "[[vi]] [i] · [[vê]] [e] · [[fé]] [ɛ] · [[lá]] [a] · [[pó]] [ɔ] · [[avô]] [o] · [[tu]] [u]",
          "As três das pontas, [i], [a] e [u], são iguais às do espanhol. O trabalho está no meio: **dois sons de E** e **dois sons de O**.",
          "Pense numa escada: de [i] para [e] para [ɛ] para [a], a boca abre um degrau de cada vez. Diga a sequência devagar e sinta o queixo descer.",
          "Nesta lição, os quatro sons do meio aparecem misturados. Vá com calma e ouça cada palavra mais de uma vez."
        ],
        cats: [
          { k: "ɛ", label: "[ɛ] é aberto", hint: "como em café", words: ["pé", "festa", "dez", "sete", "janela", "céu", "velho", "ela"] },
          { k: "e", label: "[e] ê fechado", hint: "como em você", words: ["mesa", "medo", "três", "cedo", "verde", "mês", "dedo", "ele"] },
          { k: "ɔ", label: "[ɔ] ó aberto", hint: "como em avó", words: ["bola", "sol", "nós", "hora", "porta", "escola", "loja", "agora"] },
          { k: "o", label: "[o] ô fechado", hint: "como em avô", words: ["ovo", "todo", "bolo", "hoje", "dois", "boca", "nome", "amor"] }
        ],
        pairs: [["seu", "céu"], ["avô", "avó"], ["meu", "mel"], ["sou", "sol"], ["pôde", "pode"]],
        ipa: [["vi", "ˈvi"], ["pé", "ˈpɛ"], ["lá", "ˈla"], ["pó", "ˈpɔ"], ["tu", "ˈtu"], ["dedo", "ˈdedu"], ["porta", "ˈpɔhtɐ"], ["boca", "ˈbokɐ"], ["janela", "ʒaˈnɛlɐ"], ["hoje", "ˈoʒi"]],
        say: ["sete", "três", "porta", "Hoje ela come dois ovos."]
      },
      {
        id: "sn-v4", e: "🇵🇹", t: "Em Portugal: o a fechado", sym: "[ɐ] · [ɐj]", pt: true,
        ex: [
          "As sete vogais fortes existem também em Portugal: [[café]], [[avó]] e [[avô]] soam com a mesma abertura. O que muda é o que acontece **em volta** delas.",
          "**1. O a fechado [ɐ] aparece mais.** No Brasil, o **a** antes da sílaba forte é aberto: café [kaˈfɛ]. Em Portugal, fecha: [kɐˈfɛ]. O mesmo em falar: 🇧🇷 [faˈlah] · 🇵🇹 [fɐˈlaɾ].",
          "**2. Antes de m e n, o a forte é fechado, mas não nasal.** cama: 🇧🇷 [ˈkɐ̃mɐ] · 🇵🇹 [ˈkɐmɐ]. Por isso Portugal separa **falamos** [fɐˈlɐmuʃ] (hoje) de **falámos** [fɐˈlamuʃ] (ontem). No Brasil, as duas soam iguais.",
          "**3. EI soa [ɐj].** leite: 🇧🇷 [ˈlejtʃi] · 🇵🇹 [ˈlɐjtɨ]. primeiro: 🇧🇷 [pɾiˈmejɾu] · 🇵🇹 [pɾiˈmɐjɾu].",
          "As vogais sem força, que em Portugal quase somem, ficam para outra unidade."
        ],
        where: [
          ["café", "kaˈfɛ", "kɐˈfɛ"], ["cama", "ˈkɐ̃mɐ", "ˈkɐmɐ"], ["leite", "ˈlejtʃi", "ˈlɐjtɨ"], ["peixe", "ˈpejʃi", "ˈpɐjʃɨ"],
          ["banana", "bɐˈnɐ̃nɐ", "bɐˈnɐnɐ"], ["primeiro", "pɾiˈmejɾu", "pɾiˈmɐjɾu"], ["falar", "faˈlah", "fɐˈlaɾ"], ["avó", "aˈvɔ", "ɐˈvɔ"],
          ["janeiro", "ʒaˈnejɾu", "ʒɐˈnɐjɾu"], ["amor", "aˈmoh", "ɐˈmoɾ"]
        ],
        say: ["café", "cama", "leite", "O primeiro café de janeiro."]
      }
    ]
  },
  {
    id: "sn", e: "👃", c: "#0F766E", t: "Sons nasais",
    d: "No português, o ar também sai pelo nariz. É o som de pão, mãe e bem, e não existe no espanhol.",
    lessons: [
      {
        id: "sn-n1", e: "🐑", t: "A vogal nasal", sym: "[ɐ̃ ẽ ĩ õ ũ]",
        ex: [
          "Numa vogal nasal, o ar sai pela boca **e** pelo nariz ao mesmo tempo. Compare: [[lá]] (oral) × [[lã]] (nasal). [[vi]] × [[vim]]. [[mudo]] × [[mundo]].",
          "**Teste:** tampe o nariz com os dedos e diga [[lá]]. Nada muda. Agora diga [[lã]]: a voz fica presa. Se ficou presa, você acertou o som nasal.",
          "**Pela escrita:** o til (**ã**, **õ**) marca a vogal nasal. E um **m** ou **n** no fim da sílaba também: [[campo]], [[tempo]], [[sim]], [[bom]], [[um]].",
          "**O erro mais comum de quem fala espanhol:** dizer o **m** ou o **n**. Em [[bom]], a boca **não fecha** no final. Em [[canto]], a língua não para no **n**: a vogal já sai nasal e vai direto para o **t**.",
          "São cinco vogais nasais: [ɐ̃] [[lã]], [ẽ] [[tempo]], [ĩ] [[sim]], [õ] [[bom]], [ũ] [[um]]."
        ],
        cats: [
          { k: "n", label: "Nasal", hint: "o ar sai também pelo nariz", words: ["lã", "campo", "samba", "tempo", "dente", "sim", "cinco", "bom", "onde", "um", "mundo", "irmã"] },
          { k: "o", label: "Oral", hint: "o ar sai só pela boca", words: ["lá", "casa", "mesa", "vida", "bolo", "tudo", "pato", "café", "mudo", "vi", "tapa", "lido"] }
        ],
        pairs: [["lá", "lã"], ["vi", "vim"], ["mudo", "mundo"], ["mato", "manto"], ["tapa", "tampa"], ["lido", "lindo"]],
        ipa: [["lã", "ˈlɐ̃"], ["lá", "ˈla"], ["campo", "ˈkɐ̃pu"], ["sim", "ˈsĩ"], ["bom", "ˈbõ"], ["um", "ˈũ"], ["tempo", "ˈtẽpu"], ["mundo", "ˈmũdu"], ["mudo", "ˈmudu"], ["cinco", "ˈsĩku"]],
        say: ["lã", "bom", "sim", "Um bom samba no campo."]
      },
      {
        id: "sn-n2", e: "🥖", t: "O ão", sym: "[ɐ̃w̃]",
        ex: [
          "O **ão** é o som mais famoso do português. É um ditongo nasal: começa num **a** fechado e nasal [ɐ̃] e desliza para um **u** curto, também nasal.",
          "Compare: [[pau]] (oral) × [[pão]] (nasal). [[mau]] × [[mão]]. [[sal]] × [[são]].",
          "**Como fazer:** diga “au” como em [[pau]]. Agora repita deixando o ar sair pelo nariz desde o começo, com a boca menos aberta. Os lábios arredondam no final, mas **não fecham**: não é “pan” nem “paum”.",
          "**Atenção ao -am:** no fim dos verbos, **-am** sem força soa igual a **ão**, só que fraco: [[falam]] [ˈfalɐ̃w̃], [[moram]] [ˈmɔɾɐ̃w̃].",
          "Por isso a sílaba forte muda o tempo do verbo: **falaram** (ontem, força no **la**) × **falarão** (amanhã, força no **rão**)."
        ],
        cats: [
          { k: "n", label: "[ɐ̃w̃] nasal", hint: "como em pão", words: ["pão", "mão", "não", "são", "cão", "limão", "coração", "irmão", "avião", "falam", "moram", "verão"] },
          { k: "o", label: "[aw] oral", hint: "como em pau", words: ["pau", "mau", "sal", "tal", "qual", "mal", "jornal", "Natal", "animal", "final", "legal", "sinal"] }
        ],
        pairs: [["pau", "pão"], ["mau", "mão"], ["sal", "são"], ["cal", "cão"], ["fala", "falam"]],
        ipa: [["pão", "ˈpɐ̃w̃"], ["pau", "ˈpaw"], ["não", "ˈnɐ̃w̃"], ["mão", "ˈmɐ̃w̃"], ["mau", "ˈmaw"], ["limão", "liˈmɐ̃w̃"], ["falam", "ˈfalɐ̃w̃"], ["irmão", "ihˈmɐ̃w̃"], ["sal", "ˈsaw"]],
        say: ["pão", "não", "limão", "Meu irmão não come pão."]
      },
      {
        id: "sn-n3", e: "🤱", t: "ãe, õe e -em", sym: "[ɐ̃j̃ õj̃ ẽj̃]",
        ex: [
          "Mais três ditongos nasais. Todos terminam num **i** curto e nasal.",
          "**ãe** [ɐ̃j̃]: [[mãe]], [[pães]], [[cães]]. Compare: [[pais]] (oral) × [[pães]] (nasal). [[mais]] × [[mães]].",
          "**õe** [õj̃]: [[põe]], [[limões]], [[corações]]. É o plural de quase todas as palavras em **ão**: limão → limões, lição → lições.",
          "**-em** [ẽj̃]: no fim da palavra, **em** não soa “en” como no espanhol. É um **e** nasal que desliza para um **i**: [[bem]], [[também]], [[quem]], [[trem]]. Compare: [[sei]] (oral) × [[sem]] (nasal).",
          "E uma palavra especial: [[muito]] tem um ditongo nasal sem til nenhum: [ˈmũj̃tu]."
        ],
        cats: [
          { k: "a", label: "[ɐ̃j̃]", hint: "como em mãe", words: ["mãe", "pães", "cães", "alemães", "mães", "capitães"] },
          { k: "o", label: "[õj̃]", hint: "como em põe", words: ["põe", "limões", "corações", "lições", "botões", "aviões", "canções", "milhões"] },
          { k: "e", label: "[ẽj̃]", hint: "como em bem", words: ["bem", "também", "tem", "quem", "trem", "homem", "ontem", "viagem", "sem", "ninguém"] }
        ],
        pairs: [["pais", "pães"], ["mais", "mães"], ["sei", "sem"], ["cais", "cães"]],
        ipa: [["mãe", "ˈmɐ̃j̃"], ["põe", "ˈpõj̃"], ["bem", "ˈbẽj̃"], ["pães", "ˈpɐ̃j̃s"], ["pais", "ˈpajs"], ["limões", "liˈmõj̃s"], ["também", "tɐ̃ˈbẽj̃"], ["sem", "ˈsẽj̃"], ["sei", "ˈsej"], ["muito", "ˈmũj̃tu"]],
        say: ["mãe", "bem", "limões", "Minha mãe também tem muitos pães."]
      },
      {
        id: "sn-n4", e: "🇵🇹", t: "Em Portugal: bem rima com mãe", sym: "[ɐ̃j̃] · [ɐ]", pt: true,
        ex: [
          "O **ão**, o **ãe** e o **õe** são iguais nos dois países: [[pão]], [[mãe]] e [[limões]] soam do mesmo jeito. Três coisas mudam.",
          "**1. -em soa [ɐ̃j̃].** Em Lisboa, **bem** rima com **mãe**: 🇧🇷 [ˈbẽj̃] · 🇵🇹 [ˈbɐ̃j̃]. O mesmo em também, tem, quem, homem, viagem.",
          "**2. Antes de m, n e nh, a vogal forte não fica nasal.** No Brasil, ela pega o nariz da consoante que vem depois: cama [ˈkɐ̃mɐ], ano [ˈɐ̃nu], nome [ˈnõmi]. Em Portugal, fica oral: [ˈkɐmɐ], [ˈɐnu], [ˈnomɨ].",
          "**3. O nh é completo.** No Brasil, o **nh** muitas vezes é só um [j] nasal, sem a língua encostar: banho [ˈbɐ̃ȷ̃u]. Em Portugal, a língua encosta no céu da boca: [ˈbɐɲu].",
          "Resumo: Portugal tem as mesmas vogais nasais, mas usa o nariz em menos lugares."
        ],
        where: [
          ["bem", "ˈbẽj̃", "ˈbɐ̃j̃"], ["também", "tɐ̃ˈbẽj̃", "tɐ̃ˈbɐ̃j̃"], ["tem", "ˈtẽj̃", "ˈtɐ̃j̃"], ["quem", "ˈkẽj̃", "ˈkɐ̃j̃"],
          ["cama", "ˈkɐ̃mɐ", "ˈkɐmɐ"], ["ano", "ˈɐ̃nu", "ˈɐnu"], ["banho", "ˈbɐ̃ȷ̃u", "ˈbɐɲu"], ["nome", "ˈnõmi", "ˈnomɨ"],
          ["ontem", "ˈõtẽj̃", "ˈõtɐ̃j̃"], ["homem", "ˈõmẽj̃", "ˈɔmɐ̃j̃"]
        ],
        say: ["bem", "também", "cama", "Quem tem um bom nome?"]
      }
    ]
  }
];

/* O que vem depois (ainda não construído): só o nome aparece na trilha. */
PT.SOUND_SOON = [
  ["🫥", "Vogais sem força"], ["🚗", "Os sons do R"], ["🐝", "S, Z, X e CH"], ["🍵", "T, D e o L final"], ["👶", "LH e NH"], ["🥁", "Sílaba forte e ritmo"]
];
