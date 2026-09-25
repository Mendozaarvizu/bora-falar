/* Trilha: unidades 1–2. Formato:
   v: [palavra, emoji, definição simples, exemplo, nota 🇵🇹 opcional]
   s: [frase, lacuna, [distratores], contexto] */
window.PT = window.PT || {};
PT.UNITS = PT.UNITS || [];

PT.UNITS.push({
  id: "u1", t: "Família", e: "👨‍👩‍👧", c: "#D9481C",
  lessons: [
    {
      id: "f1", t: "Quem é quem?", e: "👪",
      ex: [
        "Na família, muitas palavras mudam no final: **-o** para homem, **-a** para mulher.",
        "o fil**ho** → a fil**ha** · o t**io** → a t**ia** · o prim**o** → a prim**a**",
        "Algumas palavras são diferentes: **o pai** e **a mãe**, **o irmão** e **a irmã**.",
        "O acento muda tudo! [[avó]] tem o **ó** aberto: é mulher. [[avô]] tem o **ô** fechado: é homem.",
        "No plural, o masculino junta todo mundo: **os pais** = o pai + a mãe. **os avós** = o avô + a avó."
      ],
      v: [
        ["mãe", "👩", "A mulher que tem filhos. Ela cuidou de você quando você era bebê.", "Minha mãe liga todo domingo."],
        ["pai", "👨", "O homem que tem filhos.", "O pai dela é muito engraçado."],
        ["irmão", "👦", "Um menino ou homem que é filho dos mesmos pais que você.", "Tenho um irmão mais velho."],
        ["irmã", "👧", "Uma menina ou mulher que é filha dos mesmos pais que você.", "A minha irmã mora em São Paulo."],
        ["avó", "👵", "A mãe do seu pai ou da sua mãe.", "A avó faz o melhor bolo de fubá."],
        ["avô", "👴", "O pai do seu pai ou da sua mãe.", "Meu avô adora contar histórias."],
        ["tio", "🧔", "O irmão do seu pai ou da sua mãe.", "O meu tio tem um sítio no interior."],
        ["prima", "👩‍🦱", "A filha do seu tio ou da sua tia.", "A minha prima vai casar em dezembro."]
      ],
      s: [
        ["A minha irmã mora em São Paulo.", "irmã", ["irmão", "irmãs"], "Você fala da filha dos seus pais."],
        ["Meu avô adora contar histórias.", "avô", ["avó", "avôs"], "Você fala do pai do seu pai."],
        ["A avó faz um bolo delicioso.", "avó", ["avô", "vovô"], "Você fala da mãe da sua mãe."],
        ["O meu tio tem dois filhos.", "tio", ["tia", "primo"], "Você fala do irmão do seu pai."]
      ]
    },
    {
      id: "f2", t: "Meu, minha, dele, dela", e: "💞",
      ex: [
        "**meu** / **minha** = de mim: meu irmão, minha irmã.",
        "**seu** / **sua** = de você: seu pai, sua mãe.",
        "**nosso** / **nossa** = de nós, da gente: nossa casa, nosso cachorro.",
        "Para ele e ela, no Brasil a gente usa **dele** e **dela** depois da coisa: o carro **dele**, a casa **dela**.",
        "O possessivo combina com a coisa, não com a pessoa: um homem fala **minha** mãe, porque **mãe** é feminino."
      ],
      pt: "Em Portugal, quase sempre se usa o artigo: **a minha** mãe, **o teu** pai (com **tu**). No Brasil, **minha mãe** e **a minha mãe** estão certos.",
      v: [
        ["marido", "🤵", "O homem casado com alguém.", "O marido da Ana é mineiro."],
        ["esposa", "👰", "A mulher casada com alguém.", "A esposa dele é muito simpática."],
        ["namorado", "💑", "A pessoa com quem você tem um romance, antes de casar.", "Meu namorado é de Recife."],
        ["sogra", "🙋‍♀️", "A mãe do seu marido, da sua esposa ou do seu namorado.", "A minha sogra cozinha muito bem."],
        ["cunhado", "🙋‍♂️", "O irmão do seu marido ou da sua esposa. Ou o marido da sua irmã.", "O cunhado dela torce pro Flamengo."],
        ["neto", "🧒", "O filho do seu filho ou da sua filha.", "A vovó tem cinco netos."],
        ["filha", "👶", "A menina que é de um pai e de uma mãe.", "A filha deles faz aniversário hoje."],
        ["parentes", "🎄", "Todas as pessoas da sua família: tios, primos, avós...", "No Natal, todos os parentes vêm aqui."]
      ],
      s: [
        ["A casa dela é bem grande.", "dela", ["ela", "de ela"], "Você fala da casa da Júlia."],
        ["Minha sogra é muito legal.", "Minha", ["Meu", "Meus"], "Você fala da mãe do seu marido."],
        ["O pai dele é mineiro.", "dele", ["de ele", "ele"], "Você fala do pai do Pedro."],
        ["Nossos primos moram no Rio.", "Nossos", ["Nossas", "Nosso"], "Você fala dos seus primos e dos primos do seu irmão."]
      ]
    },
    {
      id: "f3", t: "Como ele é?", e: "🪞",
      ex: [
        "**ser** = como a pessoa é, quase sempre: Ele **é** alto. Ela **é** simpática.",
        "**estar** = como a pessoa está agora: Ele **está** cansado. Ela **está** feliz hoje.",
        "Falando, o brasileiro corta o **estar**: eu **tô**, você **tá**, a gente **tá**. Tô cansado! Cê tá bem?",
        "O adjetivo combina com a pessoa: ele é bonit**o**, ela é bonit**a**, eles são bonit**os**.",
        "**-inho** / **-inha** deixa a palavra pequena ou carinhosa: baixa → baix**inha**."
      ],
      pt: "Em Portugal, **bravo** quer dizer mais 'selvagem'. Para 'com raiva', usam **zangado**.",
      v: [
        ["alto", "🦒", "Uma pessoa grande, de cima a baixo. O contrário de baixo.", "Meu irmão é muito alto."],
        ["baixo", "🐭", "Uma pessoa pequena. O contrário de alto.", "A minha avó é baixinha."],
        ["engraçado", "😂", "Uma pessoa que faz os outros rirem.", "Seu tio é engraçado demais!"],
        ["simpático", "😊", "Uma pessoa agradável, que trata bem os outros.", "Os seus pais são super simpáticos."],
        ["chato", "🙄", "Uma pessoa que incomoda, que não é divertida.", "Não seja chato, vem com a gente!"],
        ["carinhoso", "🤗", "Uma pessoa que abraça e mostra amor.", "Ele é muito carinhoso com os filhos."],
        ["cansado", "😴", "Quando você precisa dormir ou descansar.", "Tô cansado, trabalhei muito hoje."],
        ["bravo", "😠", "Com raiva de alguém. Não feliz com o que aconteceu.", "A mãe ficou brava com a gente.", "Em Portugal: **zangado**."]
      ],
      s: [
        ["Ela é muito engraçada.", "é", ["está", "tá"], "Você descreve a personalidade da sua prima."],
        ["Hoje eu tô muito cansado.", "tô", ["sou", "é"], "Você trabalhou o dia todo."],
        ["Meus tios são simpáticos.", "são", ["estão", "é"], "Você descreve os seus tios."],
        ["A minha mãe tá brava comigo.", "tá", ["é", "sou"], "Você chegou tarde em casa ontem."]
      ]
    }
  ]
});

PT.UNITS.push({
  id: "u2", t: "Amigos", e: "🙌", c: "#0B7A57",
  lessons: [
    {
      id: "a1", t: "E aí, beleza?", e: "👋",
      ex: [
        "Com os amigos, o português do Brasil é bem informal.",
        "Para cumprimentar: **Oi!** · **E aí?** · **Beleza?** · **Tudo bem?** · **Tudo certo?**",
        "Para responder: **Tudo!** · **Beleza!** · **Tudo tranquilo.** · **De boa.**",
        "Para agradecer entre amigos: [[Valeu!]]",
        "Para se despedir: **Tchau!** · [[Falou!]] · **Até mais!** · **Beijo!** (com amigos próximos)"
      ],
      pt: "Em Portugal, em vez de **legal** dizem **fixe**. E **Olá!** é mais comum do que **Oi!**.",
      v: [
        ["E aí?", "👋", "Um jeito informal de dizer oi e perguntar como a pessoa está.", "E aí, cara? Tudo certo?"],
        ["beleza", "👍", "Quer dizer 'tudo bem' ou 'combinado'.", "Amanhã às oito? Beleza!"],
        ["valeu", "🙏", "Um jeito informal de dizer obrigado.", "Valeu pela ajuda!"],
        ["falou", "✌️", "Um jeito informal de dizer tchau.", "Falou, até amanhã!"],
        ["cara", "🧑", "Um jeito informal de chamar um amigo. Também quer dizer rosto.", "Cara, que saudade!"],
        ["legal", "😎", "Bom, bacana, interessante.", "Que legal que você veio!", "Em Portugal: **fixe**."],
        ["de boa", "😌", "Tranquilo, sem problema, relaxado.", "Tô de boa, pode ficar tranquilo."],
        ["saudade", "💛", "O sentimento de sentir falta de alguém ou de um lugar.", "Tô com saudade de você!"]
      ],
      s: [
        ["E aí, tudo certo?", "certo", ["cierto", "certa"], "Você encontra um amigo na rua."],
        ["Valeu pela ajuda!", "Valeu", ["Falou", "Beleza"], "Seu amigo te ajudou com a mudança."],
        ["Falou, até amanhã!", "Falou", ["Valeu", "E aí"], "Você vai embora da festa."],
        ["Tô com saudade de você.", "saudade", ["falta", "sozinho"], "Faz um ano que você não vê sua amiga."]
      ]
    },
    {
      id: "a2", t: "Bora sair?", e: "🛹",
      ex: [
        "No Brasil, a gente fala **a gente** no lugar de **nós**. O verbo fica igual ao de **ele**: a gente **vai**, a gente **come**.",
        "Para convidar: [[Bora?]] · **Vamos?** · **Que tal...?** · **Topa...?**",
        "Para aceitar: **Bora!** · **Topo!** · **Fechado!** · **Combinado!**",
        "Para recusar com educação: **Hoje não dá.** · **Fica pra próxima!**",
        "**pra** = para · **pro** = para o · **pra** a gente = para a gente."
      ],
      pt: "Em Portugal, **a gente** também existe, mas **nós** é mais comum. E **rolê** é bem brasileiro.",
      v: [
        ["bora", "🏃", "Vamos! Um jeito bem informal de chamar alguém para fazer algo.", "Bora tomar um açaí?"],
        ["topar", "🤝", "Aceitar um convite ou uma ideia.", "Você topa ir ao cinema hoje?"],
        ["combinado", "✅", "Quando as pessoas concordam com um plano.", "Combinado: sábado às sete na praia."],
        ["a gente", "👥", "Nós. Eu e outras pessoas.", "A gente vai chegar atrasado!"],
        ["rolê", "🛹", "Um passeio, uma saída com os amigos.", "Vamos dar um rolê no centro?"],
        ["fim de semana", "📅", "Sábado e domingo.", "O que você vai fazer no fim de semana?"],
        ["barzinho", "🍻", "Um bar pequeno e simples para encontrar os amigos.", "Depois do trabalho, a gente vai num barzinho."],
        ["não dá", "⛔", "Não é possível. Não consigo.", "Hoje não dá, tenho que trabalhar."]
      ],
      s: [
        ["A gente vai no barzinho hoje.", "vai", ["vamos", "vão"], "Você fala de você e dos seus amigos."],
        ["Você topa ir à praia?", "topa", ["topo", "topar"], "Você convida uma amiga para a praia."],
        ["Hoje não dá, fica pra próxima.", "dá", ["dou", "da"], "Você não pode sair hoje."],
        ["Bora dar um rolê no sábado?", "rolê", ["rolo", "rola"], "Você quer passear com os amigos."]
      ]
    },
    {
      id: "a3", t: "No WhatsApp", e: "📱",
      ex: [
        "Nas mensagens, os brasileiros escrevem rápido e usam muitas abreviações.",
        "**vc** = você · **tb** = também · **pq** = porque · **blz** = beleza · **msg** = mensagem · **td** = tudo",
        "Para rir: **kkkkk** ou **rsrs**. Quanto mais **k**, mais engraçado!",
        "Muita gente prefere mandar **áudio** em vez de escrever.",
        "No final, entre amigos: **bjs** (beijos) ou **abs** (abraços)."
      ],
      v: [
        ["vc", "📲", "Abreviação de você.", "vc vem hoje?"],
        ["tb", "➕", "Abreviação de também.", "eu tb quero ir!"],
        ["kkkk", "🤣", "O jeito brasileiro de escrever uma risada.", "kkkkk para, que vergonha!"],
        ["áudio", "🎙️", "Uma mensagem de voz.", "Te mandei um áudio, escuta aí."],
        ["figurinha", "🖼️", "Uma imagem pequena e engraçada que você manda na conversa.", "Ela respondeu só com uma figurinha."],
        ["pq", "❓", "Abreviação de porque ou por quê.", "pq vc não veio?"],
        ["grupo", "💬", "Uma conversa com muitas pessoas. Toda família tem um!", "O grupo da família tem mil mensagens."],
        ["bjs", "😘", "Abreviação de beijos. Para terminar uma mensagem com carinho.", "Até amanhã! bjs"]
      ],
      s: [
        ["Te mandei um áudio agora.", "áudio", ["grupo", "figurinha"], "Você gravou sua voz no celular."],
        ["Ela mandou uma figurinha engraçada.", "figurinha", ["figura", "foto"], "Sua amiga respondeu com uma imagem."],
        ["O grupo da família tá cheio de mensagens.", "grupo", ["áudio", "rolê"], "Todos os parentes conversam juntos."],
        ["Eu também vou na festa.", "também", ["tampouco", "tanto"], "Você vai à festa, como seus amigos."]
      ]
    }
  ]
});
