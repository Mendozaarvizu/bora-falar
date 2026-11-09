/* Trilha de sons: lições de pronúncia (Brasil primeiro; cada unidade fecha com uma lição "Em Portugal").
   Lição do Brasil:
     { id, e, t, sym, q? (pergunta do exercício de classificar), hide? (classificar só de ouvido), ex: [linhas md], cats: [{ k, label, hint, words }], pairs: [[a, b]], ipa: [[palavra, AFI]], say: [palavras ou frases] }
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
  },
  {
    id: "sr", e: "🫥", c: "#7C3AED", t: "Vogais sem força",
    d: "Fora da sílaba forte, as vogais mudam de som. No Brasil, o E final vira “i” e o O final vira “u”.",
    lessons: [
      {
        id: "sn-r1", e: "🥛", t: "O -e final soa “i”", sym: "-e → [i]", q: "Como soa o E do final?",
        ex: [
          "No Brasil, o **e** sem força no fim da palavra soa **[i]**: [[leite]], [[nome]], [[doce]], [[fome]]. Quem fala espanhol tende a dizer “leitê”. Diga “leiti”.",
          "Vale também para as palavras pequenas: **e** soa [i], **de** soa “dji”, **que** soa “qui”, **me**, **te** e **se** soam “mi”, “tchi” e “si”.",
          "Mas o **e** com força no final continua **e**: [[você]], [[café]], [[bebê]]. O acento mostra que a força está ali.",
          "Por isso estas duas são palavras diferentes: [[bebe]] (ele bebe água) × [[bebê]] (a criança). [[pele]] × [[Pelé]].",
          "Com **t** e **d** antes, aparece o chiado: [[noite]] soa “noitchi” e [[tarde]] soa “tardji”. Isso tem uma unidade própria mais à frente."
        ],
        cats: [
          { k: "i", label: "[i]", hint: "e sem força, como em leite", words: ["leite", "nome", "noite", "tarde", "grande", "fome", "doce", "verde", "cidade", "ponte"] },
          { k: "e", label: "[e] ou [ɛ]", hint: "e com força, como em você", words: ["você", "café", "bebê", "pé", "jacaré", "purê", "até", "Pelé"] }
        ],
        pairs: [["bebe", "bebê"], ["pele", "Pelé"], ["come", "comi"], ["cante", "cantei"]],
        ipa: [["leite", "ˈlejtʃi"], ["nome", "ˈnõmi"], ["doce", "ˈdosi"], ["fome", "ˈfõmi"], ["grande", "ˈgɾɐ̃dʒi"], ["você", "voˈse"], ["bebê", "beˈbe"], ["bebe", "ˈbɛbi"], ["verde", "ˈvehdʒi"]],
        say: ["leite", "nome", "doce", "O nome dele é Felipe."]
      },
      {
        id: "sn-r2", e: "🐈", t: "O -o final soa “u”", sym: "-o → [u]", q: "Como soa o O do final?",
        ex: [
          "O **o** sem força no fim da palavra soa **[u]**: [[gato]], [[livro]], [[amigo]], [[obrigado]]. Diga “gatu”, “livru”, “amigu”.",
          "Os artigos também: **o** soa [u] e **os** soa “us”. **do**, **no** e **como** terminam em [u].",
          "O **o** com força no final continua **o**: [[avô]], [[metrô]], [[avó]], [[paletó]].",
          "Compare: [[coco]] (a fruta) × [[cocô]]. [[metro]] (a medida) × [[metrô]] (o trem). [[falo]] (eu, hoje) × [[falou]] (ele, ontem).",
          "Esta regra vale nos dois países: em Portugal, [[gato]] também termina em [u]."
        ],
        cats: [
          { k: "u", label: "[u]", hint: "o sem força, como em gato", words: ["gato", "livro", "amigo", "carro", "bolo", "menino", "obrigado", "tudo", "pato", "dedo"] },
          { k: "o", label: "[o] ou [ɔ]", hint: "o com força, como em avô", words: ["avô", "avó", "metrô", "cocô", "vovó", "robô", "paletó", "dominó"] }
        ],
        pairs: [["coco", "cocô"], ["metro", "metrô"], ["falo", "falou"], ["moro", "morou"]],
        ipa: [["gato", "ˈgatu"], ["livro", "ˈlivɾu"], ["amigo", "aˈmigu"], ["coco", "ˈkoku"], ["cocô", "koˈko"], ["metrô", "meˈtɾo"], ["obrigado", "obɾiˈgadu"], ["bolo", "ˈbolu"], ["menino", "meˈninu"]],
        say: ["gato", "amigo", "obrigado", "O menino comeu todo o bolo."]
      },
      {
        id: "sn-r3", e: "🏠", t: "O -a final e as vogais do meio", sym: "-a → [ɐ]", q: "Como soa o A do final?",
        ex: [
          "O **a** sem força no fim da palavra fica curto e fechado, **[ɐ]**: [[casa]], [[mesa]], [[porta]]. A boca quase não abre.",
          "O **a** com força no final é aberto e longo: [[sofá]], [[está]], [[guaraná]].",
          "Compare: [[esta]] (esta casa) × [[está]] (ela está). [[sabia]] (eu sabia) × [[sabiá]] (o pássaro).",
          "**E antes da sílaba forte?** No Brasil, todas as vogais aparecem, claras e sem pressa: [[telefone]] tem quatro sílabas, [[chocolate]] também. Não engula nenhuma.",
          "Resumo do Brasil: no fim da palavra, **-e** soa [i], **-o** soa [u] e **-a** soa [ɐ]. No meio, as vogais ficam como estão escritas."
        ],
        cats: [
          { k: "ɐ", label: "[ɐ]", hint: "a sem força, como em casa", words: ["casa", "mesa", "porta", "bola", "festa", "escola", "janela", "banana", "esta", "sabia"] },
          { k: "a", label: "[a]", hint: "a com força, como em sofá", words: ["sofá", "está", "lá", "guaraná", "maracujá", "já", "sabiá", "Pará"] }
        ],
        pairs: [["esta", "está"], ["sabia", "sabiá"], ["para", "Pará"]],
        ipa: [["casa", "ˈkazɐ"], ["sofá", "soˈfa"], ["está", "isˈta"], ["esta", "ˈɛstɐ"], ["sabiá", "sabiˈa"], ["sabia", "saˈbiɐ"], ["telefone", "teleˈfõni"], ["chocolate", "ʃokoˈlatʃi"], ["banana", "bɐˈnɐ̃nɐ"]],
        say: ["casa", "sofá", "telefone", "Esta casa está toda bonita."]
      },
      {
        id: "sn-r4", e: "🇵🇹", t: "Em Portugal: as vogais que somem", sym: "[ɨ] · [u] · [ɐ]", pt: true,
        ex: [
          "Esta é a maior diferença entre os dois países. No Brasil, cada vogal aparece. Em Portugal, as vogais sem força ficam tão curtas que quase somem.",
          "**1. O e sem força vira [ɨ].** É um som curto, com a boca quase fechada, e muitas vezes desaparece. leite: 🇧🇷 [ˈlejtʃi] · 🇵🇹 [ˈlɐjtɨ]. pequeno: 🇧🇷 [peˈkenu] · 🇵🇹 [pɨˈkenu].",
          "**2. O o sem força vira [u] em qualquer lugar,** não só no fim. bonito: 🇧🇷 [boˈnitu] · 🇵🇹 [buˈnitu]. morango: 🇧🇷 [moˈɾɐ̃gu] · 🇵🇹 [muˈɾɐ̃gu].",
          "**3. O a sem força vira [ɐ] em qualquer lugar.** falar: 🇧🇷 [faˈlah] · 🇵🇹 [fɐˈlaɾ].",
          "Tudo junto: telefone no Brasil é [teleˈfõni], com quatro sílabas claras. Em Portugal é [tɨlɨˈfɔnɨ], e numa conversa rápida pode soar “tlfón”."
        ],
        where: [
          ["leite", "ˈlejtʃi", "ˈlɐjtɨ"], ["nome", "ˈnõmi", "ˈnomɨ"], ["noite", "ˈnojtʃi", "ˈnojtɨ"], ["telefone", "teleˈfõni", "tɨlɨˈfɔnɨ"],
          ["pequeno", "peˈkenu", "pɨˈkenu"], ["morango", "moˈɾɐ̃gu", "muˈɾɐ̃gu"], ["bonito", "boˈnitu", "buˈnitu"], ["cidade", "siˈdadʒi", "siˈðaðɨ"],
          ["menino", "meˈninu", "mɨˈninu"], ["chocolate", "ʃokoˈlatʃi", "ʃukuˈlatɨ"], ["verde", "ˈvehdʒi", "ˈveɾðɨ"], ["obrigado", "obɾiˈgadu", "ɔbɾiˈɣaðu"]
        ],
        say: ["leite", "pequeno", "telefone", "O menino pequeno bebe leite."]
      }
    ]
  },
  {
    id: "rr", e: "🚗", c: "#B91C1C", t: "Os sons do R",
    d: "O R do português tem dois sons. O forte, de rua e carro, não é o “rr” vibrante do espanhol: é um sopro na garganta.",
    lessons: [
      {
        id: "sn-rr1", e: "🐀", t: "R forte: rua, carro, Rio", sym: "[h] × [ɾ]", q: "O R desta palavra é fraco ou forte?",
        ex: [
          "O **R fraco** [ɾ] você já sabe: é o **r** simples do espanhol, um toque rápido da língua. Aparece entre vogais e depois de consoante: [[caro]], [[para]], [[prato]], [[três]].",
          "O **R forte** [h] é diferente do espanhol. A língua **não vibra**. É um sopro na garganta, parecido com a jota suave do Caribe ou o **h** do inglês: [[rua]], [[Rio]], [[carro]], [[terra]].",
          "**Quando é forte?** No começo da palavra (**r**ua, **R**io, **r**ato) e sempre que se escreve **rr** (ca**rr**o, te**rr**a, cacho**rr**o).",
          "A diferença muda a palavra: [[caro]] (custa muito) × [[carro]] (o automóvel). [[era]] × [[erra]]. [[muro]] × [[murro]].",
          "**Como fazer:** sopre como quem embaça um espelho, “hhh”, e junte a vogal: “hhua”, “hhio”. A ponta da língua fica parada, embaixo."
        ],
        cats: [
          { k: "ɾ", label: "[ɾ] fraco", hint: "um toque da língua, como em caro", words: ["caro", "para", "hora", "agora", "Brasil", "prato", "três", "amarelo", "barato", "obrigado"] },
          { k: "h", label: "[h] forte", hint: "um sopro na garganta, como em carro", words: ["rua", "Rio", "rato", "carro", "terra", "correr", "roupa", "rei", "cachorro", "arroz"] }
        ],
        pairs: [["caro", "carro"], ["era", "erra"], ["muro", "murro"], ["coro", "corro"], ["fera", "ferra"]],
        ipa: [["caro", "ˈkaɾu"], ["carro", "ˈkahu"], ["rua", "ˈhuɐ"], ["Rio", "ˈhiu"], ["rato", "ˈhatu"], ["terra", "ˈtɛhɐ"], ["hora", "ˈɔɾɐ"], ["prato", "ˈpɾatu"], ["arroz", "aˈhos"], ["roupa", "ˈhowpɐ"]],
        say: ["rua", "carro", "Rio", "O rato roeu a roupa do rei de Roma."]
      },
      {
        id: "sn-rr2", e: "🚪", t: "R no fim da sílaba: porta, mar", sym: "[h]", q: "Onde está o R desta palavra?",
        ex: [
          "No fim da sílaba, o **r** também é um sopro na maior parte do Brasil: [[porta]], [[carne]], [[verde]], [[mar]], [[amor]].",
          "Não vibre a língua como no espanhol. Em [[porta]], sopre de leve entre o **o** e o **t**: “póhta”.",
          "No fim da palavra, o sopro é bem fraco, e nos verbos muitas vezes **some**: [[falar]] soa quase “falá”, [[comer]] soa quase “comê”.",
          "Mas ele faz diferença: [[mar]] × [[má]]. [[par]] × [[pá]]. [[dar]] × [[dá]].",
          "**Sotaques:** este R muda muito pelo Brasil. No Rio é um sopro forte. Em São Paulo, muita gente faz um toque [ɾ]. No interior, é o R “caipira”, com a língua curvada para trás. Todos estão certos: escolha um e mantenha."
        ],
        cats: [
          { k: "h", label: "No fim da sílaba", hint: "soa [h], um sopro, como em porta", words: ["porta", "mar", "carne", "verde", "amor", "calor", "tarde", "perto", "forte", "dormir"] },
          { k: "ɾ", label: "Entre vogais ou depois de consoante", hint: "soa [ɾ], um toque, como em caro", words: ["caro", "para", "hora", "prato", "três", "Brasil", "grande", "livro", "praia", "agora"] }
        ],
        pairs: [["mar", "má"], ["par", "pá"], ["lar", "lá"], ["dar", "dá"]],
        ipa: [["porta", "ˈpɔhtɐ"], ["mar", "ˈmah"], ["amor", "aˈmoh"], ["carne", "ˈkahni"], ["verde", "ˈvehdʒi"], ["tarde", "ˈtahdʒi"], ["falar", "faˈlah"], ["perto", "ˈpɛhtu"], ["calor", "kaˈloh"], ["forte", "ˈfɔhtʃi"]],
        say: ["porta", "amor", "verde", "Por favor, abra a porta."]
      },
      {
        id: "sn-rr3", e: "🏁", t: "Todos os R juntos", sym: "[ɾ] · [h]", q: "O R desta palavra é fraco ou forte?",
        ex: [
          "Agora os dois sons misturados. A regra completa cabe em quatro linhas:",
          "**Forte [h]:** no começo da palavra ([[rua]]), com **rr** ([[carro]]) e no fim da sílaba ([[porta]], [[mar]]).",
          "**Fraco [ɾ]:** entre vogais com um **r** só ([[caro]]) e depois de consoante na mesma sílaba ([[prato]], [[Brasil]]).",
          "Uma palavra pode ter os dois: [[correr]] tem dois sopros. [[primeiro]] tem dois toques. Em [[verdadeiro]], o primeiro é sopro e o segundo é toque.",
          "Ouça bem antes de responder: o erro mais comum é vibrar a língua onde o português só sopra."
        ],
        cats: [
          { k: "ɾ", label: "[ɾ] fraco", hint: "um toque da língua", words: ["caro", "para", "agora", "prato", "três", "Brasil", "barato", "amarelo", "livro", "hora"] },
          { k: "h", label: "[h] forte", hint: "um sopro na garganta", words: ["rua", "carro", "porta", "mar", "Rio", "terra", "amor", "verde", "roupa", "cachorro"] }
        ],
        pairs: [["caro", "carro"], ["era", "erra"], ["muro", "murro"], ["mar", "má"], ["coro", "corro"]],
        ipa: [["carro", "ˈkahu"], ["caro", "ˈkaɾu"], ["porta", "ˈpɔhtɐ"], ["rua", "ˈhuɐ"], ["prato", "ˈpɾatu"], ["amor", "aˈmoh"], ["terra", "ˈtɛhɐ"], ["agora", "aˈgɔɾɐ"], ["correr", "koˈheh"], ["Brasil", "bɾaˈziw"]],
        say: ["caro", "carro", "correr", "O carro do Ricardo é caro."]
      },
      {
        id: "sn-rr4", e: "🇵🇹", t: "Em Portugal: o R da garganta e o R final", sym: "[ʁ] · [ɾ]", pt: true,
        ex: [
          "Portugal também tem um R fraco e um R forte, e o fraco é igual: [[caro]], [[prato]]. Duas coisas mudam.",
          "**1. O R forte é [ʁ].** É feito mais atrás, na úvula, como um gargarejo leve, parecido com o R do francês. rua: 🇧🇷 [ˈhuɐ] · 🇵🇹 [ˈʁuɐ]. carro: 🇧🇷 [ˈkahu] · 🇵🇹 [ˈkaʁu].",
          "**2. No fim da sílaba, o R é um toque [ɾ], não um sopro.** Aqui Portugal fica mais perto do espanhol. mar: 🇧🇷 [ˈmah] · 🇵🇹 [ˈmaɾ]. porta: 🇧🇷 [ˈpɔhtɐ] · 🇵🇹 [ˈpɔɾtɐ].",
          "Por isso, em Portugal o R do infinitivo nunca some: [[falar]] termina com um toque bem claro.",
          "Em algumas regiões de Portugal, o R forte ainda é vibrado na ponta da língua, como o “rr” do espanhol."
        ],
        where: [
          ["rua", "ˈhuɐ", "ˈʁuɐ"], ["carro", "ˈkahu", "ˈkaʁu"], ["mar", "ˈmah", "ˈmaɾ"], ["porta", "ˈpɔhtɐ", "ˈpɔɾtɐ"],
          ["amor", "aˈmoh", "ɐˈmoɾ"], ["Rio", "ˈhiu", "ˈʁiu"], ["terra", "ˈtɛhɐ", "ˈtɛʁɐ"], ["rato", "ˈhatu", "ˈʁatu"],
          ["perto", "ˈpɛhtu", "ˈpɛɾtu"], ["calor", "kaˈloh", "kɐˈloɾ"], ["falar", "faˈlah", "fɐˈlaɾ"], ["carne", "ˈkahni", "ˈkaɾnɨ"]
        ],
        say: ["rua", "mar", "porta", "O carro está perto do rio."]
      }
    ]
  },
  {
    id: "sz", e: "🐝", c: "#B45309", t: "S, Z, X e CH",
    d: "O som de Z, de abelha, não existe no espanhol. E o CH e o J do português não são os do espanhol.",
    lessons: [
      {
        id: "sn-z1", e: "🏡", t: "S × Z: casa não é caça", sym: "[z] × [s]", q: "Que som tem esta palavra?",
        ex: [
          "O **[s]** é o do espanhol: um assobio de cobra, sem voz. [[sol]], [[massa]], [[cedo]].",
          "O **[z]** é o mesmo gesto com a **garganta vibrando**, como uma abelha: “zzzz”. Ponha a mão no pescoço e sinta. [[zero]], [[casa]], [[mesa]].",
          "**Pela escrita:** a letra **z** soa [z]. E um **s** sozinho **entre duas vogais** também soa [z]: ca**s**a, me**s**a, ro**s**a, mú**s**ica. Este é o erro número um de quem fala espanhol.",
          "Para manter o som [s] entre vogais, o português escreve **ss**, **ç** ou **c**: ma**ss**a, ca**ç**a, do**c**e.",
          "A diferença muda a palavra: [[casa]] (onde você mora) × [[caça]] (caçar animais). [[doze]] (12) × [[doce]] (açúcar). [[asa]] × [[assa]]."
        ],
        cats: [
          { k: "z", label: "[z]", hint: "a garganta vibra, como em casa", words: ["casa", "mesa", "rosa", "zero", "fazer", "doze", "azul", "presente", "música", "coisa"] },
          { k: "s", label: "[s]", hint: "a garganta não vibra, como em massa", words: ["sol", "massa", "caça", "cedo", "poço", "passo", "açúcar", "pessoa", "doce", "cinco"] }
        ],
        pairs: [["casa", "caça"], ["doze", "doce"], ["asa", "assa"], ["rosa", "roça"], ["zelo", "selo"]],
        ipa: [["casa", "ˈkazɐ"], ["caça", "ˈkasɐ"], ["zero", "ˈzɛɾu"], ["doze", "ˈdozi"], ["doce", "ˈdosi"], ["rosa", "ˈhɔzɐ"], ["mesa", "ˈmezɐ"], ["azul", "aˈzuw"], ["pessoa", "peˈsoɐ"], ["música", "ˈmuzikɐ"]],
        say: ["casa", "zero", "doze", "A casa da Rosa é azul."]
      },
      {
        id: "sn-z2", e: "🍵", t: "CH e J: chá e já", sym: "[ʃ] × [ʒ]", q: "Que som tem esta palavra?",
        ex: [
          "O **ch** do português **não** é o “ch” do espanhol. Não tem o “t” na frente: é só o som de pedir silêncio, **[ʃ]**, “shhh”. [[chá]], [[chuva]], [[chave]]. O **x** muitas vezes tem o mesmo som: [[peixe]], [[caixa]].",
          "O **j** do português **não** é a jota do espanhol. É o [ʃ] com a **garganta vibrando**: **[ʒ]**. [[já]], [[janela]], [[hoje]].",
          "O **g** antes de **e** e **i** tem esse mesmo som [ʒ]: [[gente]], [[gelo]], [[viagem]].",
          "Compare: [[chá]] (a bebida) × [[já]] (agora). [[chato]] × [[jato]]. [[queixo]] (parte do rosto) × [[queijo]] (de comer).",
          "**Como fazer o [ʒ]:** diga “shhh” e ligue a voz sem mexer a boca. Se a mão no pescoço sente vibrar, é o som certo."
        ],
        cats: [
          { k: "ʃ", label: "[ʃ]", hint: "sem voz, como em chá", words: ["chá", "chuva", "chave", "peixe", "caixa", "xícara", "baixo", "lixo", "chocolate", "cheio"] },
          { k: "ʒ", label: "[ʒ]", hint: "com voz, como em já", words: ["já", "gente", "hoje", "janela", "jogo", "viagem", "laranja", "queijo", "gelo", "longe"] }
        ],
        pairs: [["chá", "já"], ["chato", "jato"], ["queixo", "queijo"]],
        ipa: [["chá", "ˈʃa"], ["já", "ˈʒa"], ["chuva", "ˈʃuvɐ"], ["gente", "ˈʒẽtʃi"], ["hoje", "ˈoʒi"], ["peixe", "ˈpejʃi"], ["queijo", "ˈkejʒu"], ["queixo", "ˈkejʃu"], ["jogo", "ˈʒogu"], ["caixa", "ˈkajʃɐ"]],
        say: ["chá", "já", "gente", "Hoje a gente joga na chuva."]
      },
      {
        id: "sn-z3", e: "❌", t: "Os quatro sons do X", sym: "[ʃ] · [ks] · [z] · [s]", q: "Que som tem o X desta palavra?",
        ex: [
          "A letra **x** é a mais difícil de ler em português: tem quatro sons, e a escrita nem sempre ajuda. Algumas pistas:",
          "**[ʃ]** no começo da palavra e depois de ditongo: [[xícara]], [[peixe]], [[caixa]], [[baixo]]. É o som mais comum.",
          "**[z]** em **ex** + vogal, no começo da palavra: [[exame]], [[exemplo]], [[exato]], [[existir]].",
          "**[s]** antes de consoante e em algumas palavras que é preciso guardar: [[texto]], [[explicar]], [[sexta]], [[próximo]], [[máximo]].",
          "**[ks]** em palavras mais “técnicas” e no fim da palavra: [[táxi]], [[fixo]], [[boxe]], [[tórax]]."
        ],
        cats: [
          { k: "ʃ", label: "[ʃ]", hint: "como em peixe", words: ["xícara", "peixe", "caixa", "lixo", "baixo", "México", "xadrez"] },
          { k: "ks", label: "[ks]", hint: "como em táxi", words: ["táxi", "fixo", "tórax", "boxe", "anexo", "oxigênio"] },
          { k: "z", label: "[z]", hint: "como em exame", words: ["exame", "exemplo", "exato", "existir", "exercício", "êxito"] },
          { k: "s", label: "[s]", hint: "como em próximo", words: ["próximo", "máximo", "texto", "explicar", "sexta", "auxílio"] }
        ],
        pairs: [["chá", "já"], ["casa", "caça"], ["doze", "doce"], ["queixo", "queijo"]],
        ipa: [["táxi", "ˈtaksi"], ["exame", "eˈzɐ̃mi"], ["próximo", "ˈpɾɔsimu"], ["xícara", "ˈʃikaɾɐ"], ["texto", "ˈtestu"], ["exemplo", "eˈzẽplu"], ["fixo", "ˈfiksu"], ["lixo", "ˈliʃu"], ["máximo", "ˈmasimu"]],
        say: ["táxi", "exemplo", "próximo", "O próximo exame é na sexta."]
      },
      {
        id: "sn-z4", e: "🇵🇹", t: "Em Portugal: o S que chia", sym: "[ʃ] · [ʒ]", pt: true,
        ex: [
          "No começo da sílaba, tudo igual: [[sol]], [[casa]], [[chá]] e [[já]] soam do mesmo jeito nos dois países. A diferença está no **s do fim da sílaba**.",
          "**Em Portugal, o s no fim da sílaba chia: soa [ʃ].** festa: 🇧🇷 [ˈfɛstɐ] · 🇵🇹 [ˈfɛʃtɐ]. dois: 🇧🇷 [ˈdojs] · 🇵🇹 [ˈdojʃ].",
          "**Antes de uma consoante com voz, vira [ʒ].** mesmo: 🇧🇷 [ˈmezmu] · 🇵🇹 [ˈmeʒmu].",
          "**O es- do começo perde a vogal.** escola: 🇧🇷 [isˈkɔlɐ] · 🇵🇹 [ʃˈkɔlɐ]. estar: 🇧🇷 [isˈtah] · 🇵🇹 [ʃˈtaɾ].",
          "No Brasil, o Rio de Janeiro também chia o s final, como em Portugal. É uma marca do sotaque carioca."
        ],
        where: [
          ["festa", "ˈfɛstɐ", "ˈfɛʃtɐ"], ["dois", "ˈdojs", "ˈdojʃ"], ["mesmo", "ˈmezmu", "ˈmeʒmu"], ["escola", "isˈkɔlɐ", "ʃˈkɔlɐ"],
          ["três", "ˈtɾes", "ˈtɾeʃ"], ["gosto", "ˈgostu", "ˈgoʃtu"], ["pasta", "ˈpastɐ", "ˈpaʃtɐ"], ["lápis", "ˈlapis", "ˈlapiʃ"],
          ["estar", "isˈtah", "ʃˈtaɾ"], ["livros", "ˈlivɾus", "ˈlivɾuʃ"], ["mês", "ˈmes", "ˈmeʃ"], ["português", "pohtuˈges", "puɾtuˈɣeʃ"]
        ],
        say: ["festa", "dois", "escola", "Os meus amigos estão na festa."]
      }
    ]
  },
  {
    id: "td", e: "⚽", c: "#1D4ED8", t: "T, D e o L final",
    d: "Três marcas do sotaque brasileiro: “tchi” e “dji”, o L final que vira “u” e a vogal extra entre consoantes.",
    lessons: [
      {
        id: "sn-t1", e: "👩", t: "TI e DI: tia e dia", sym: "[tʃ] · [dʒ]", q: "O T ou o D desta palavra tem chiado?",
        ex: [
          "No Brasil, o **t** antes do som [i] ganha um chiado: soa **[tʃ]**, igual ao “ch” do espanhol. [[tia]] soa “tchia”. [[time]] soa “tchimi”.",
          "O **d** antes do som [i] faz o mesmo, com voz: **[dʒ]**. [[dia]] soa “djia”. [[dinheiro]] soa “djinheiro”.",
          "**Atenção ao -te e -de finais.** Como o **e** final soa [i], o chiado aparece também: [[noite]] “noitchi”, [[leite]] “leitchi”, [[cidade]] “cidadji”, [[tarde]] “tardji”. E a palavra **de** soa “dji”.",
          "Antes das outras vogais, nada muda: [[tudo]], [[data]], [[dedo]] têm o t e o d normais.",
          "Compare o final: [[bate]] (ele bate, com chiado) × [[bata]] (sem chiado). [[pode]] × [[poda]]."
        ],
        cats: [
          { k: "c", label: "Com chiado", hint: "[tʃ] ou [dʒ], antes do som [i]", words: ["tia", "time", "noite", "leite", "dia", "cidade", "tarde", "gente", "dinheiro", "difícil"] },
          { k: "n", label: "Sem chiado", hint: "[t] ou [d] normal", words: ["tudo", "data", "tatu", "dado", "tempo", "dedo", "todo", "dor", "toca", "duro"] }
        ],
        pairs: [["bate", "bata"], ["late", "lata"], ["pode", "poda"], ["conte", "conta"]],
        ipa: [["tia", "ˈtʃiɐ"], ["dia", "ˈdʒiɐ"], ["noite", "ˈnojtʃi"], ["cidade", "siˈdadʒi"], ["tarde", "ˈtahdʒi"], ["leite", "ˈlejtʃi"], ["tudo", "ˈtudu"], ["time", "ˈtʃimi"], ["gente", "ˈʒẽtʃi"], ["dedo", "ˈdedu"]],
        say: ["tia", "dia", "cidade", "De tarde, a tia toma leite quente."]
      },
      {
        id: "sn-t2", e: "☀️", t: "L final: Brasil, sol, mal", sym: "[w]", q: "Como soa o L desta palavra?",
        ex: [
          "No Brasil, o **l** no fim da sílaba **não** é um L: a língua não encosta em nada. Ele vira um **u** curto, [w]. [[Brasil]] soa “Braziu”. [[sol]] soa “sóu”. [[papel]] soa “papéu”.",
          "No meio da palavra também: [[alto]] soa “auto”, [[calma]] soa “cauma”, [[volta]] soa “vóuta”.",
          "Por isso, estas palavras soam **iguais** no Brasil: **mal** e **mau**. **alto** e **auto**.",
          "No começo da sílaba, o L é normal, como no espanhol: [[lua]], [[bola]], [[falar]].",
          "O L final faz diferença: [[sol]] × [[só]]. [[alto]] × [[ato]]. [[volta]] × [[vota]]."
        ],
        cats: [
          { k: "w", label: "[w]", hint: "no fim da sílaba, soa como um u curto", words: ["Brasil", "sol", "papel", "hotel", "fácil", "azul", "calma", "volta", "alto", "último"] },
          { k: "l", label: "[l]", hint: "no começo da sílaba, a língua encosta", words: ["lua", "bola", "lado", "leite", "falar", "colo", "mala", "livro", "cabelo", "janela"] }
        ],
        pairs: [["sol", "só"], ["alto", "ato"], ["volta", "vota"], ["calda", "cada"]],
        ipa: [["Brasil", "bɾaˈziw"], ["sol", "ˈsɔw"], ["papel", "paˈpɛw"], ["hotel", "oˈtɛw"], ["azul", "aˈzuw"], ["alto", "ˈawtu"], ["fácil", "ˈfasiw"], ["volta", "ˈvɔwtɐ"], ["bola", "ˈbɔlɐ"], ["mal", "ˈmaw"]],
        say: ["Brasil", "papel", "azul", "No Brasil, o sol é alto e o céu é azul."]
      },
      {
        id: "sn-t3", e: "⚖️", t: "A vogal extra: advogado, futebol", sym: "+[i]", q: "O que acontece nesta palavra?",
        ex: [
          "O português do Brasil não gosta de duas consoantes “secas” juntas. Quando uma sílaba termina em consoante que não seja **s**, **r**, **l**, **m** ou **n**, o brasileiro põe um **[i]** depois dela.",
          "[[pneu]] soa “pineu”. [[psicólogo]] soa “pissicólogo”. [[objeto]] soa “obijeto”. [[opção]] soa “opição”.",
          "Se a consoante é **t** ou **d**, o [i] novo traz o chiado: [[advogado]] soa “adjivogado”. [[ritmo]] soa “ritchimo”. [[futebol]] soa “futchibóu”.",
          "Vale para palavras de outras línguas: [[internet]] soa “internétchi”, [[Facebook]] soa “feicibúqui”, [[hot dog]] soa “hótchi dógui”.",
          "Esta lição mistura as três marcas da unidade: o chiado de **ti** e **di**, o **l** que vira [w] e a vogal extra."
        ],
        cats: [
          { k: "c", label: "T ou D com chiado", hint: "[tʃ] ou [dʒ]", words: ["tia", "noite", "cidade", "tarde", "dia", "leite", "ritmo", "advogado"] },
          { k: "w", label: "L que soa [w]", hint: "no fim da sílaba", words: ["sol", "papel", "azul", "hotel", "alto", "calma", "fácil", "sal"] },
          { k: "n", label: "Nenhum dos dois", hint: "t, d e l normais", words: ["tudo", "dado", "lua", "bola", "tempo", "lado", "data", "dedo"] }
        ],
        pairs: [["bate", "bata"], ["sol", "só"], ["volta", "vota"], ["pode", "poda"]],
        ipa: [["advogado", "adʒivoˈgadu"], ["pneu", "piˈnew"], ["ritmo", "ˈhitʃimu"], ["futebol", "futʃiˈbɔw"], ["internet", "ĩtehˈnɛtʃi"], ["objeto", "obiˈʒɛtu"], ["psicólogo", "pisiˈkɔlogu"], ["opção", "opiˈsɐ̃w̃"], ["Facebook", "fejsiˈbuki"]],
        say: ["advogado", "futebol", "internet", "O advogado gosta de futebol e de internet."]
      },
      {
        id: "sn-t4", e: "🇵🇹", t: "Em Portugal: sem chiado e com L escuro", sym: "[t d] · [ɫ]", pt: true,
        ex: [
          "As três marcas desta unidade são do Brasil. Em Portugal, nenhuma delas acontece.",
          "**1. T e D não chiam.** tia: 🇧🇷 [ˈtʃiɐ] · 🇵🇹 [ˈtiɐ]. dia: 🇧🇷 [ˈdʒiɐ] · 🇵🇹 [ˈdiɐ]. E como o **e** final quase some, noite é [ˈnojtɨ].",
          "**2. O L final é um L de verdade, mas “escuro”: [ɫ].** A ponta da língua encosta, e a parte de trás sobe. Brasil: 🇧🇷 [bɾaˈziw] · 🇵🇹 [bɾɐˈziɫ]. Em Portugal, **mal** e **mau** são diferentes.",
          "**3. Não tem vogal extra.** As consoantes ficam juntas: advogado: 🇧🇷 [adʒivoˈgadu] · 🇵🇹 [ɐdvuˈɣaðu]. pneu: 🇧🇷 [piˈnew] · 🇵🇹 [ˈpnew].",
          "Um detalhe a mais: entre vogais, o **d** de Portugal fica suave, [ð], como o **d** de “nada” no espanhol: cidade [siˈðaðɨ]."
        ],
        where: [
          ["tia", "ˈtʃiɐ", "ˈtiɐ"], ["dia", "ˈdʒiɐ", "ˈdiɐ"], ["noite", "ˈnojtʃi", "ˈnojtɨ"], ["cidade", "siˈdadʒi", "siˈðaðɨ"],
          ["Brasil", "bɾaˈziw", "bɾɐˈziɫ"], ["sol", "ˈsɔw", "ˈsɔɫ"], ["papel", "paˈpɛw", "pɐˈpɛɫ"], ["alto", "ˈawtu", "ˈaɫtu"],
          ["tarde", "ˈtahdʒi", "ˈtaɾðɨ"], ["advogado", "adʒivoˈgadu", "ɐdvuˈɣaðu"], ["pneu", "piˈnew", "ˈpnew"], ["futebol", "futʃiˈbɔw", "futɨˈbɔɫ"]
        ],
        say: ["tia", "dia", "Brasil", "Boa noite! O sol de Portugal é alto."]
      }
    ]
  },
  {
    id: "ln", e: "👶", c: "#BE185D", t: "LH e NH",
    d: "Dois sons escritos com duas letras. O NH é o “ñ” do espanhol. O LH é o “ll” antigo, que muita gente já não faz.",
    lessons: [
      {
        id: "sn-l1", e: "👦", t: "LH: filho não é fio", sym: "[ʎ] × [l]", q: "Que som tem esta palavra?",
        ex: [
          "O **lh** [ʎ] é o som do “ll” do espanhol **tradicional**, o de quem diferencia “pollo” de “poyo”. Se você diz os dois iguais, este som é novo para você.",
          "**Como fazer:** encoste o **meio** da língua no céu da boca, não a ponta, e deixe o ar sair pelos lados. [[filho]], [[mulher]], [[olho]], [[trabalho]].",
          "**Não é “y”:** [[filho]] não soa “fiyo”. **E não é “li”:** [[família]] tem [li], duas letras e dois sons; [[filha]] tem [ʎ], um som só.",
          "A diferença muda a palavra: [[fio]] × [[filho]]. [[vela]] × [[velha]]. [[mala]] × [[malha]]. [[galo]] × [[galho]].",
          "**Truque:** diga “li” bem rápido antes da vogal, “fi-lio”, e vá juntando até virar um som só."
        ],
        cats: [
          { k: "ʎ", label: "[ʎ] LH", hint: "o meio da língua no céu da boca, como em filho", words: ["filho", "mulher", "olho", "trabalho", "velho", "melhor", "folha", "ilha", "alho", "joelho"] },
          { k: "l", label: "[l] L", hint: "a ponta da língua, como em fila", words: ["fila", "mola", "vela", "mala", "bola", "falar", "galo", "tela", "cabelo", "pulo"] }
        ],
        pairs: [["fio", "filho"], ["vela", "velha"], ["mala", "malha"], ["galo", "galho"], ["bola", "bolha"], ["tela", "telha"]],
        ipa: [["filho", "ˈfiʎu"], ["fio", "ˈfiu"], ["velha", "ˈvɛʎɐ"], ["vela", "ˈvɛlɐ"], ["olho", "ˈoʎu"], ["mulher", "muˈʎɛh"], ["trabalho", "tɾaˈbaʎu"], ["melhor", "meˈʎɔh"], ["folha", "ˈfoʎɐ"], ["ilha", "ˈiʎɐ"]],
        say: ["filho", "mulher", "trabalho", "A mulher do meu filho trabalha na ilha."]
      },
      {
        id: "sn-l2", e: "😴", t: "NH: sonho não é sono", sym: "[ɲ] × [n]", q: "Que som tem esta palavra?",
        ex: [
          "O **nh** é o **ñ** do espanhol: [[sonho]], [[banho]], [[vinho]], [[amanhã]]. Este som você já tem.",
          "No Brasil, ele costuma ser mais **suave**: a língua quase não encosta, e a vogal de antes fica nasal. [[banho]] soa quase “bãiu”. Nas transcrições usamos [ɲ] para os dois jeitos.",
          "**Cuidado com a escrita:** o português nunca usa **ñ**. E **nh** nunca soa “n” + “h”.",
          "A diferença muda a palavra: [[sono]] (vontade de dormir) × [[sonho]] (o que você vê dormindo). [[mina]] × [[minha]]. [[tina]] × [[tinha]].",
          "O diminutivo usa muito este som: [[cafezinho]], [[pouquinho]], [[bonitinho]]."
        ],
        cats: [
          { k: "ɲ", label: "[ɲ] NH", hint: "como em sonho", words: ["sonho", "banho", "vinho", "minha", "amanhã", "dinheiro", "senhor", "cozinha", "tenho", "manhã"] },
          { k: "n", label: "[n] N", hint: "como em sono", words: ["sono", "mina", "cana", "nome", "banana", "menino", "pano", "lona", "caneta", "novo"] }
        ],
        pairs: [["sono", "sonho"], ["mina", "minha"], ["tina", "tinha"], ["una", "unha"], ["sena", "senha"]],
        ipa: [["sonho", "ˈsõɲu"], ["sono", "ˈsõnu"], ["banho", "ˈbɐ̃ɲu"], ["vinho", "ˈvĩɲu"], ["minha", "ˈmĩɲɐ"], ["amanhã", "amɐ̃ˈɲɐ̃"], ["senhor", "seˈɲoh"], ["cozinha", "koˈzĩɲɐ"], ["tenho", "ˈtẽɲu"], ["mina", "ˈmĩnɐ"]],
        say: ["sonho", "vinho", "amanhã", "Amanhã a minha vizinha traz o vinho."]
      },
      {
        id: "sn-l3", e: "👨‍👩‍👧", t: "LH, NH e os vizinhos", sym: "[ʎ l ɲ n]", q: "Que som tem esta palavra?",
        ex: [
          "Agora os quatro sons juntos: **lh**, **l**, **nh** e **n**.",
          "Os pares que mais confundem: [[fio]] × [[filho]], [[sono]] × [[sonho]], [[vela]] × [[velha]], [[mina]] × [[minha]].",
          "**li × lh:** [[família]] tem **l** + **i**, com a ponta da língua. [[filha]] tem um som só, com o meio da língua.",
          "**ni × nh:** [[Antônio]] tem **n** + **i**. [[sonho]] tem um som só.",
          "Na dúvida, olhe para a escrita: se tem **h** depois do **l** ou do **n**, é o som do meio da língua."
        ],
        cats: [
          { k: "ʎ", label: "[ʎ] LH", hint: "como em filho", words: ["filho", "olho", "velho", "folha", "galho", "telha", "joelho", "ilha"] },
          { k: "l", label: "[l] L", hint: "como em fila", words: ["fila", "vela", "galo", "tela", "bola", "mala", "pulo", "cabelo"] },
          { k: "ɲ", label: "[ɲ] NH", hint: "como em sonho", words: ["sonho", "banho", "vinho", "unha", "senha", "cozinha", "manhã", "tenho"] },
          { k: "n", label: "[n] N", hint: "como em sono", words: ["sono", "mina", "cana", "pano", "lona", "caneta", "nome", "novo"] }
        ],
        pairs: [["fio", "filho"], ["sono", "sonho"], ["vela", "velha"], ["mina", "minha"], ["galo", "galho"]],
        ipa: [["família", "faˈmiliɐ"], ["filha", "ˈfiʎɐ"], ["galho", "ˈgaʎu"], ["galo", "ˈgalu"], ["unha", "ˈũɲɐ"], ["senha", "ˈsẽɲɐ"], ["telha", "ˈteʎɐ"], ["tela", "ˈtɛlɐ"], ["joelho", "ʒoˈeʎu"], ["caneta", "kaˈnetɐ"]],
        say: ["família", "filha", "senhor", "O filho do senhor Coelho tem sono."]
      },
      {
        id: "sn-l4", e: "🇵🇹", t: "Em Portugal: tenho, espelho, coelho", sym: "[ɐʎ] · [ɐɲ]", pt: true,
        ex: [
          "O **lh** é igual nos dois países: [[filho]] e [[mulher]] têm o mesmo [ʎ]. Duas coisas mudam em volta.",
          "**1. O nh é completo, e a vogal de antes não fica nasal.** banho: 🇧🇷 [ˈbɐ̃ɲu] · 🇵🇹 [ˈbɐɲu]. vinho: 🇧🇷 [ˈvĩɲu] · 🇵🇹 [ˈviɲu].",
          "**2. Em Lisboa, o e forte antes de lh e nh soa [ɐ].** tenho: 🇧🇷 [ˈtẽɲu] · 🇵🇹 [ˈtɐɲu]. espelho: 🇧🇷 [isˈpeʎu] · 🇵🇹 [ʃˈpɐʎu]. coelho: 🇧🇷 [koˈeʎu] · 🇵🇹 [kuˈɐʎu].",
          "Por isso, para um ouvido brasileiro, o “tenho” de Lisboa parece “tanho”.",
          "E, como sempre em Portugal, as vogais sem força encolhem: melhor é [mɨˈʎɔɾ], senhor é [sɨˈɲoɾ]."
        ],
        where: [
          ["banho", "ˈbɐ̃ɲu", "ˈbɐɲu"], ["vinho", "ˈvĩɲu", "ˈviɲu"], ["tenho", "ˈtẽɲu", "ˈtɐɲu"], ["espelho", "isˈpeʎu", "ʃˈpɐʎu"],
          ["joelho", "ʒoˈeʎu", "ʒuˈɐʎu"], ["coelho", "koˈeʎu", "kuˈɐʎu"], ["minha", "ˈmĩɲɐ", "ˈmiɲɐ"], ["senhor", "seˈɲoh", "sɨˈɲoɾ"],
          ["mulher", "muˈʎɛh", "muˈʎɛɾ"], ["trabalho", "tɾaˈbaʎu", "tɾɐˈbaʎu"], ["sonho", "ˈsõɲu", "ˈsoɲu"], ["melhor", "meˈʎɔh", "mɨˈʎɔɾ"]
        ],
        say: ["vinho", "tenho", "espelho", "Eu tenho um coelho velho."]
      }
    ]
  },
  {
    id: "rt", e: "🥁", c: "#15803D", t: "Sílaba forte e ritmo",
    d: "Onde cai a força da palavra, como as palavras se juntam e a melodia que transforma uma frase em pergunta.",
    lessons: [
      {
        id: "sn-m1", e: "💪", t: "Onde está a força?", sym: "ˈ", q: "Onde está a sílaba forte?",
        ex: [
          "Toda palavra tem uma sílaba mais forte, e errar a força pode mudar a palavra: [[está]] (verbo) × [[esta]] (esta casa). [[país]] (o Brasil é um país) × [[pais]] (pai e mãe).",
          "**Regra 1:** palavras que terminam em **a**, **e**, **o** (com ou sem **s**), **em** e **am** têm a força na **penúltima** sílaba: [[casa]], [[gente]], [[livro]], [[falam]], [[viagem]].",
          "**Regra 2:** palavras que terminam em **r**, **l**, **z**, **i**, **u**, **ã** e **ão** têm a força na **última**: [[falar]], [[papel]], [[feliz]], [[aqui]], [[irmã]], [[coração]].",
          "**Regra 3:** quando a palavra não segue essas regras, a escrita avisa com um **acento**: [[café]], [[fácil]], [[música]], [[sábado]]. Toda palavra com força na antepenúltima sílaba tem acento.",
          "Cuidado com os falsos amigos do espanhol: em português é [[polícia]], [[democracia]], [[nível]], [[herói]]."
        ],
        cats: [
          { k: "1", label: "Na última", hint: "como em café", words: ["café", "falar", "papel", "feliz", "aqui", "você", "irmã", "coração", "Brasil", "avó"] },
          { k: "2", label: "Na penúltima", hint: "como em casa", words: ["casa", "gente", "livro", "menino", "cidade", "fácil", "açúcar", "lápis", "falam", "viagem"] },
          { k: "3", label: "Na antepenúltima", hint: "como em música", words: ["música", "médico", "sábado", "lâmpada", "número", "último", "árvore", "público"] }
        ],
        pairs: [["esta", "está"], ["pais", "país"], ["medico", "médico"], ["fabrica", "fábrica"], ["falaram", "falarão"]],
        ipa: [["café", "kaˈfɛ"], ["música", "ˈmuzikɐ"], ["papel", "paˈpɛw"], ["sábado", "ˈsabadu"], ["fácil", "ˈfasiw"], ["falar", "faˈlah"], ["cidade", "siˈdadʒi"], ["médico", "ˈmɛdʒiku"], ["feliz", "feˈlis"], ["aqui", "aˈki"]],
        say: ["música", "sábado", "feliz", "No sábado eu ouço música no café."]
      },
      {
        id: "sn-m2", e: "🔗", t: "Juntando as palavras", sym: "s + vogal → [z]", q: "Como soa o S no fim da primeira palavra?",
        ex: [
          "Numa frase, as palavras não ficam separadas: elas se juntam, e alguns sons mudam no encontro.",
          "**O s final + vogal vira [z]**, como se estivesse entre vogais dentro de uma palavra: [[os amigos]] soa “uzamigus”. [[mais uma]] soa “maizuma”. [[três horas]] soa “trezóras”.",
          "Antes de **p**, **t**, **c**, **f** e **s**, continua [s]: [[os pais]], [[mais tarde]], [[três copos]].",
          "**As palavras pequenas ficam fracas:** **de** soa “dji”, **que** soa “qui”, **e** soa “i”, **o** soa “u”, **em** soa “ĩ”. Em “o nome de um amigo”, só **no** e **mi** têm força.",
          "**Na fala do dia a dia, algumas encolhem:** **para** vira [[pra]], **está** vira [[tá]], **você** vira “cê”. Você não precisa falar assim, mas vai ouvir o tempo todo."
        ],
        cats: [
          { k: "z", label: "[z]", hint: "antes de vogal, o s se junta com ela", words: ["os amigos", "as aulas", "mais uma", "dois irmãos", "três horas", "vamos embora", "os olhos", "as ideias"] },
          { k: "s", label: "[s]", hint: "antes de p, t, c, f ou s", words: ["os pais", "as casas", "mais tarde", "dois quartos", "três copos", "os filhos", "as festas", "mais sal"] }
        ],
        pairs: [["os amigos", "o amigo"], ["as aulas", "a aula"], ["mais uma", "mais um"], ["para", "pra"]],
        ipa: [["os amigos", "uz aˈmigus"], ["os pais", "us ˈpajs"], ["mais uma", "majz ˈũmɐ"], ["mais tarde", "majs ˈtahdʒi"], ["três horas", "tɾez ˈɔɾɐs"], ["as casas", "as ˈkazɐs"], ["dois irmãos", "dojz ihˈmɐ̃w̃s"], ["de", "dʒi"], ["que", "ki"]],
        say: ["os amigos", "mais uma", "três horas", "Os meus amigos estão em casa às duas horas."]
      },
      {
        id: "sn-m3", e: "🎶", t: "A música da frase", sym: "↘ · ↗↘", q: "É uma pergunta ou uma afirmação?", hide: true,
        ex: [
          "Em português, uma pergunta de sim ou não tem **as mesmas palavras, na mesma ordem**, que a afirmação. Só a **melodia** muda.",
          "Afirmação: a voz **desce** no final. [[Você fala português.]]",
          "Pergunta: a voz **sobe** na última sílaba forte e desce logo depois. [[Você fala português?]]",
          "Ouça os dois lados: [[Ela mora aqui.]] × [[Ela mora aqui?]] · [[Tá tudo bem.]] × [[Tá tudo bem?]]",
          "Com palavras de pergunta (**quem**, **onde**, **quando**, **por que**), a voz começa alta e desce, como numa afirmação: [[Onde você mora?]]"
        ],
        cats: [
          { k: "q", label: "Pergunta", hint: "a voz sobe na última sílaba forte", words: ["Você vem amanhã?", "Ela é a sua irmã?", "Eles moram no Rio?", "A gente vai de carro?", "Tem pão?", "Você quer mais?", "Ele já chegou?", "Vocês gostam de samba?"] },
          { k: "a", label: "Afirmação", hint: "a voz desce no final", words: ["Você vem amanhã.", "Ela é a sua irmã.", "Eles moram no Rio.", "A gente vai de carro.", "Tem pão.", "Você quer mais.", "Ele já chegou.", "Vocês gostam de samba."] }
        ],
        pairs: [["Ela mora aqui.", "Ela mora aqui?"], ["Você gosta de café.", "Você gosta de café?"], ["Ele é brasileiro.", "Ele é brasileiro?"], ["Tá tudo bem.", "Tá tudo bem?"]],
        ipa: [["você", "voˈse"], ["amanhã", "amɐ̃ˈɲɐ̃"], ["brasileiro", "bɾaziˈlejɾu"], ["português", "pohtuˈges"], ["café", "kaˈfɛ"], ["irmã", "ihˈmɐ̃"], ["carro", "ˈkahu"], ["gente", "ˈʒẽtʃi"]],
        say: ["Tudo bem?", "Tudo bem.", "Você fala português?", "Eu moro no Brasil, e você?"]
      },
      {
        id: "sn-m4", e: "🇵🇹", t: "Em Portugal: outro ritmo", sym: "[ɨ] · ritmo", pt: true,
        ex: [
          "Você já viu todas as peças. Juntas, elas dão a Portugal um **ritmo** diferente do Brasil.",
          "**No Brasil, cada sílaba tem o seu tempo.** As vogais são claras e a fala parece cantada: te-le-fo-ne, pro-fes-sor.",
          "**Em Portugal, só as sílabas fortes têm tempo.** As fracas são apertadas entre elas: telefone vira [tɨlɨˈfɔnɨ], professor vira [pɾufɨˈsoɾ]. A fala parece mais rápida e cheia de consoantes.",
          "Por isso quem aprende português do Brasil entende Portugal com mais dificuldade do que o contrário: os portugueses ouvem todas as vogais do Brasil, mas o brasileiro precisa adivinhar as que Portugal encolheu.",
          "A melodia das perguntas funciona do mesmo jeito: sem mudar a ordem das palavras, a voz sobe na última sílaba forte."
        ],
        where: [
          ["telefone", "teleˈfõni", "tɨlɨˈfɔnɨ"], ["professor", "pɾofeˈsoh", "pɾufɨˈsoɾ"], ["esperar", "ispeˈɾah", "ʃpɨˈɾaɾ"], ["diferente", "dʒifeˈɾẽtʃi", "difɨˈɾẽtɨ"],
          ["precisar", "pɾesiˈzah", "pɾɨsiˈzaɾ"], ["felicidade", "felisiˈdadʒi", "fɨlisiˈðaðɨ"], ["pessoa", "peˈsoɐ", "pɨˈsoɐ"], ["menina", "meˈninɐ", "mɨˈninɐ"],
          ["semana", "seˈmɐ̃nɐ", "sɨˈmɐnɐ"], ["Portugal", "pohtuˈgaw", "puɾtuˈɣaɫ"], ["pequeno", "peˈkenu", "pɨˈkenu"], ["chocolate", "ʃokoˈlatʃi", "ʃukuˈlatɨ"]
        ],
        say: ["telefone", "professor", "Portugal", "O professor precisa de uma semana diferente."]
      }
    ]
  }
];

/* Unidades ainda por construir: só o nome aparece na trilha. */
PT.SOUND_SOON = [];
