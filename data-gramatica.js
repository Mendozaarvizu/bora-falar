/* Gramática: temas que aparecem conforme as lições da trilha principal são feitas.
   Tema: { id, g (grupo), e, t, d, parts: [...] }
   Parte: { from: id da lição que libera, h: título, p: [linhas md], table?: [[cabeçalho], [linha]...],
            ex?: [frases com botão de ouvir], es?: aviso para quem fala espanhol, pt?: nota de Portugal }
   Um tema aparece quando a primeira parte é liberada e cresce quando as outras lições são feitas. */
window.PT = window.PT || {};

PT.GRAM_GROUPS = [
  ["nomes", "Nomes, artigos e companhia"],
  ["presente", "Verbos no presente"],
  ["passado", "Falar do passado"],
  ["frases", "Montar frases"]
];

PT.GRAM = [
  /* ================= nomes ================= */
  {
    id: "genero", g: "nomes", e: "🚻", t: "Masculino e feminino", d: "O gênero das palavras e como tudo combina com elas.",
    parts: [
      {
        from: "f1", h: "Toda palavra tem gênero",
        p: [
          "Em português, todo substantivo é **masculino** ou **feminino**, até as coisas. O artigo mostra o gênero: **o** livro, **a** mesa.",
          "A regra geral: palavras em **-o** são masculinas e palavras em **-a** são femininas. Para pessoas e animais, muitas vezes basta trocar o final."
        ],
        table: [["Masculino", "Feminino", "Como muda"], ["o filho", "a filha", "-o → -a"], ["o tio", "a tia", "-o → -a"], ["o professor", "a professora", "+ a"], ["o irmão", "a irmã", "-ão → -ã"], ["o pai", "a mãe", "palavra diferente"], ["o homem", "a mulher", "palavra diferente"], ["o estudante", "a estudante", "só o artigo muda"]],
        ex: ["O meu tio é médico e a minha tia é médica.", "Ela é a professora do meu filho.", "O estudante novo e a estudante nova chegaram hoje."]
      },
      {
        from: "f1", h: "Pistas para adivinhar o gênero",
        p: [
          "**Quase sempre femininas:** palavras em **-ção**, **-são**, **-dade** e **-gem**: a liç**ão**, a televis**ão**, a cid**ade**, a via**gem**.",
          "**Quase sempre masculinas:** palavras em **-ema** e **-ama** que vêm do grego: **o** problema, **o** sistema, **o** programa. E também **o** dia e **o** mapa.",
          "Palavras em **-e** podem ser de um ou de outro: **o** leite, **o** nome, **a** noite, **a** ponte. É preciso guardar com o artigo."
        ],
        ex: ["A viagem foi longa, mas a cidade é linda.", "O problema é o sistema.", "O leite está na geladeira e a ponte está fechada."],
        es: "Várias palavras mudam de gênero entre as duas línguas. Em português: **a** viagem, **a** paisagem, **a** mensagem (todas em -gem são femininas), **a** árvore, **a** ponte, **a** dor, **a** cor, **o** leite, **o** sal, **o** mel, **o** nariz, **o** sangue, **o** costume."
      },
      {
        from: "f3", h: "O adjetivo combina com a palavra",
        p: [
          "O adjetivo copia o gênero e o número da palavra que ele descreve: ele é alt**o**, ela é alt**a**, eles são alt**os**, elas são alt**as**.",
          "Adjetivos em **-e** e em consoante não mudam com o gênero: um homem **inteligente**, uma mulher **inteligente**. Um dia **feliz**, uma noite **feliz**.",
          "Em geral, o adjetivo vem **depois** do substantivo: uma casa **bonita**, um carro **novo**."
        ],
        table: [["", "Singular", "Plural"], ["Masculino", "o menino alto", "os meninos altos"], ["Feminino", "a menina alta", "as meninas altas"], ["Sem mudar", "o homem / a mulher feliz", "os homens / as mulheres felizes"]],
        ex: ["Minha irmã é simpática e meu irmão é simpático.", "As crianças estão cansadas.", "Ele comprou uma camisa branca e um sapato preto."]
      },
      {
        from: "c2", h: "Obrigado ou obrigada?",
        p: [
          "**Obrigado** combina com **quem fala**, não com quem ouve. Um homem diz **obrigado**; uma mulher diz **obrigada**.",
          "O mesmo vale para outras palavras que falam de você: **satisfeito / satisfeita**, **cansado / cansada**, **sozinho / sozinha**."
        ],
        ex: ["Muito obrigado, tô satisfeito.", "Muito obrigada, tô satisfeita.", "Eu mesma fiz o bolo.", "Eu mesmo fiz o bolo."]
      }
    ]
  },
  {
    id: "artigos", g: "nomes", e: "🧩", t: "Artigos e contrações", d: "o, a, um, uma, e as preposições que se juntam a eles: no, do, ao, pelo.",
    parts: [
      {
        from: "i2", h: "Os artigos",
        p: [
          "O artigo **definido** fala de algo conhecido: **o**, **a**, **os**, **as**. O **indefinido** fala de algo qualquer: **um**, **uma**, **uns**, **umas**.",
          "**um** e **dois** mudam com o gênero: **um** irmão, **uma** irmã, **dois** reais, **duas** horas. Os outros números não mudam.",
          "No Brasil, é muito comum usar o artigo antes de **nomes de pessoas** e de **possessivos**: **a** Ana, **o** João, **o** meu carro."
        ],
        table: [["", "Masculino", "Feminino"], ["Definido, singular", "o carro", "a casa"], ["Definido, plural", "os carros", "as casas"], ["Indefinido, singular", "um carro", "uma casa"], ["Indefinido, plural", "uns carros", "umas casas"]],
        ex: ["A Ana tem um irmão e duas irmãs.", "O João comprou uns livros.", "Eu tenho duas perguntas."],
        es: "Com profissões, o português não usa artigo, como o espanhol: **Eu sou professor.** Mas com nomes de pessoas o Brasil usa muito: **o** Pedro, **a** Maria. E os países quase todos têm artigo: **o** Brasil, **o** México, **a** Argentina, **os** Estados Unidos (mas: Portugal, Cuba, sem artigo)."
      },
      {
        from: "w2", h: "em + artigo = no, na",
        p: [
          "A preposição **em** se junta ao artigo. Não se diz “em o”: diz-se **no**.",
          "Usa-se para lugar (**no** quarto, **na** rua), para dias (**no** sábado, **na** segunda) e para meios de transporte fechados quando você está dentro (**no** ônibus)."
        ],
        table: [["em +", "o", "a", "os", "as", "um", "uma"], ["=", "no", "na", "nos", "nas", "num", "numa"]],
        ex: ["O livro está na mesa.", "Eu moro no Brasil.", "A gente se vê no sábado.", "Ela trabalha num banco.", "Os copos estão nas caixas."]
      },
      {
        from: "m1", h: "de + artigo = do, da",
        p: [
          "A preposição **de** também se junta: **do**, **da**, **dos**, **das**.",
          "Usa-se para origem (sou **do** México), posse (a casa **da** Ana), assunto (gosto **do** filme) e material ou tipo (suco **de** laranja, sem artigo)."
        ],
        table: [["de +", "o", "a", "os", "as", "ele", "ela", "este", "esse", "aquele"], ["=", "do", "da", "dos", "das", "dele", "dela", "deste", "desse", "daquele"]],
        ex: ["Eu sou do México e ela é da Colômbia.", "Esse é o carro do meu pai.", "Eu gosto da música dos anos oitenta.", "O nome dela é Bia."]
      },
      {
        from: "w3", h: "a + artigo = ao, à",
        p: [
          "A preposição **a** se junta ao artigo masculino: **ao**, **aos**. Com o artigo feminino, as duas letras **a** viram uma só, com acento grave: **à**, **às**. Isso se chama **crase**.",
          "Você já usa a crase nas horas e nos dias: **às** três horas, **às** segundas. E em direções: vire **à** direita."
        ],
        table: [["a +", "o", "a", "os", "as"], ["=", "ao", "à", "aos", "às"]],
        ex: ["Eu tenho aula às terças.", "O filme começa às oito.", "Vire à esquerda e depois à direita.", "Eu vou ao médico amanhã."],
        es: "Na fala do Brasil, **ir a** quase sempre vira **ir em** ou **ir para**: **Vou no médico.** · **Vou pro trabalho.** A forma **ao** aparece mais na escrita."
      },
      {
        from: "m3", h: "para + artigo = pro, pra",
        p: [
          "Na conversa, **para** vira **pra**. E **para o** vira **pro**, **para a** vira **pra**. É informal, mas todo mundo fala assim.",
          "Na escrita formal, use as formas completas: **para o**, **para a**."
        ],
        table: [["Completo", "para", "para o", "para a", "para os", "para as"], ["Na conversa", "pra", "pro", "pra", "pros", "pras"]],
        ex: ["Eu torço pro Flamengo.", "Vou pra casa.", "Isso é pra você.", "Liga pros seus pais!"]
      },
      {
        from: "y1", h: "por + artigo = pelo, pela",
        p: [
          "A preposição **por** muda de forma quando se junta ao artigo: **pelo**, **pela**, **pelos**, **pelas**."
        ],
        table: [["por +", "o", "a", "os", "as"], ["=", "pelo", "pela", "pelos", "pelas"]],
        ex: ["O ônibus passa pelo centro.", "Obrigado pela ajuda!", "Paguei cem reais pelos ingressos.", "A gente andou pelas ruas da cidade."]
      }
    ]
  },
  {
    id: "plural", g: "nomes", e: "➕", t: "O plural", d: "Como passar as palavras para o plural, do mais simples ao -ão.",
    parts: [
      {
        from: "k2", h: "As regras do plural",
        p: [
          "O plural mais comum só ganha um **-s**: casa → casa**s**, livro → livro**s**.",
          "As outras regras dependem da última letra da palavra."
        ],
        table: [["Termina em", "Plural", "Exemplos"], ["vogal", "+ s", "casa → casas · café → cafés"], ["r, z, s (com força)", "+ es", "flor → flores · vez → vezes · mês → meses"], ["m", "m → ns", "homem → homens · viagem → viagens"], ["al, el, ol, ul", "l → is", "real → reais · papel → papéis · sol → sóis"], ["il com força", "il → is", "barril → barris"], ["il sem força", "il → eis", "fácil → fáceis · difícil → difíceis"], ["ão", "ões, ães ou ãos", "limão → limões · pão → pães · mão → mãos"]],
        ex: ["Custa vinte reais.", "Eu comprei dois pães e três limões.", "As viagens foram difíceis.", "Os homens lavaram as mãos."],
        es: "O plural de **-ão** é o mais difícil. A maioria faz **-ões** (lição → lições, coração → corações). Uma pista: pense na palavra em espanhol. **-ones** → **-ões** (limones → limões). **-anes** → **-ães** (panes → pães, alemanes → alemães). **-anos** → **-ãos** (manos → mãos, hermanos → irmãos)."
      },
      {
        from: "k2", h: "Tudo combina no plural",
        p: [
          "No plural, o artigo, o adjetivo e o possessivo também ganham a marca: **os** meu**s** amigo**s** brasileiro**s**.",
          "Na fala bem informal, muitos brasileiros marcam o plural só no artigo (“os amigo”). Você vai ouvir, mas na escrita e em situações formais marque em tudo."
        ],
        ex: ["As minhas duas irmãs são altas.", "Esses sapatos pretos são caros.", "Os meus amigos brasileiros chegaram."]
      }
    ]
  },
  {
    id: "possessivos", g: "nomes", e: "🫴", t: "Possessivos", d: "meu, seu, nosso, dele, dela: de quem é cada coisa.",
    parts: [
      {
        from: "f2", h: "Meu, seu, nosso",
        p: [
          "O possessivo combina com **a coisa**, não com o dono. Um homem diz **minha** casa (casa é feminino); uma mulher diz **meu** carro.",
          "O artigo antes do possessivo é opcional no Brasil: **meu** pai e **o meu** pai são iguais."
        ],
        table: [["Dono", "Coisa masculina", "Coisa feminina", "Plural"], ["eu", "meu", "minha", "meus · minhas"], ["você", "seu", "sua", "seus · suas"], ["nós, a gente", "nosso", "nossa", "nossos · nossas"], ["vocês", "o … de vocês", "a … de vocês", ""]],
        ex: ["Meu irmão mora com a minha mãe.", "Qual é o seu nome?", "A nossa casa é pequena.", "Os meus pais são do México.", "A casa de vocês é linda!"]
      },
      {
        from: "f2", h: "Dele e dela",
        p: [
          "**seu** e **sua** podem confundir: “seu carro” é de você ou de outra pessoa? Por isso, para **ele**, **ela**, **eles** e **elas**, o Brasil usa **dele**, **dela**, **deles** e **delas**, sempre **depois** da coisa.",
          "Aqui a palavra combina com **o dono**: o carro **dela** (de uma mulher), a casa **dele** (de um homem)."
        ],
        table: [["Dono", "Forma", "Exemplo"], ["ele", "dele", "o carro dele"], ["ela", "dela", "o carro dela"], ["eles", "deles", "a casa deles"], ["elas", "delas", "a casa delas"]],
        ex: ["Esse é o João e essa é a mulher dele.", "A Ana chegou. O carro dela está lá fora.", "Meus avós moram no Sul. A casa deles é grande."],
        es: "Em espanhol, **su** serve para tudo. Em português do Brasil, **seu** quase sempre quer dizer “de você”. Para “de él / de ella”, prefira **dele / dela**. E existe **teu / tua** (de tu), que em boa parte do Brasil se mistura com **seu** na conversa.",
        pt: "Em Portugal, o artigo antes do possessivo é obrigatório: **o meu** pai, **a minha** casa. E **teu / tua** é a forma normal entre amigos."
      }
    ]
  },
  {
    id: "demonstrativos", g: "nomes", e: "👉", t: "Este, esse, aquele", d: "Apontar para as coisas: perto de mim, perto de você, longe.",
    parts: [
      {
        from: "k2", h: "Três distâncias",
        p: [
          "O português tem três demonstrativos, como o espanhol: **este** (perto de quem fala), **esse** (perto de quem ouve) e **aquele** (longe dos dois).",
          "Na conversa do Brasil, **esse** ganhou: quase todo mundo usa **esse** também para o que está perto. **este** aparece mais na escrita.",
          "As formas neutras **isto**, **isso** e **aquilo** não mudam e servem para coisas sem nome: **O que é isso?**"
        ],
        table: [["", "Masculino", "Feminino", "Neutro", "Lugar"], ["Perto de mim", "este(s)", "esta(s)", "isto", "aqui"], ["Perto de você", "esse(s)", "essa(s)", "isso", "aí"], ["Longe", "aquele(s)", "aquela(s)", "aquilo", "ali, lá"]],
        ex: ["Quanto custa essa camiseta?", "Eu quero aquele bolo ali.", "O que é isso?", "Esta é a minha casa.", "Você conhece aquela moça?"]
      },
      {
        from: "k2", h: "Com preposições",
        p: [
          "Os demonstrativos se juntam com **em** e **de**: **neste**, **nesse**, **naquele** · **deste**, **desse**, **daquele** · **nisso**, **disso**.",
          "Com o tempo: **nesta** semana ou **nessa** semana (a semana de agora), **naquele** dia (um dia distante)."
        ],
        ex: ["Eu moro nesse prédio.", "Eu não gosto disso.", "Naquele tempo, a gente não tinha celular.", "Pensa nisso!"]
      }
    ]
  },
  {
    id: "quantidade", g: "nomes", e: "⚖️", t: "Muito, pouco e quantidades", d: "Quanto de cada coisa: muito, pouco, meio, um quilo de.",
    parts: [
      {
        from: "m2", h: "Muito e meio antes de adjetivo",
        p: [
          "Antes de um adjetivo ou de um verbo, **muito** quer dizer “em grande grau” e **não muda**: ela é **muito** alta, eles são **muito** altos.",
          "**meio** antes de adjetivo quer dizer “um pouco” e também não muda: a série é **meio** chata. **bem** reforça: tá **bem** quente."
        ],
        ex: ["O filme é muito bom.", "Ela está meio cansada.", "Eles falam muito rápido.", "A praia fica bem longe."],
        es: "**muito** serve para “muy” e para “mucho”: **muito** bonito, **muito** trabalho. A palavra “mui” não se usa."
      },
      {
        from: "x1", h: "Muito e pouco antes de substantivo",
        p: [
          "Antes de uma coisa, **muito** e **pouco** combinam com ela: **muito** açúcar, **muita** água, **muitos** ovos, **muitas** frutas.",
          "Outras palavras de quantidade: **bastante** (suficiente ou muito), **demais** (em excesso, depois da palavra), **alguns / algumas**, **nenhum / nenhuma**, **vários / várias**."
        ],
        table: [["", "Masculino", "Feminino"], ["Singular", "muito · pouco", "muita · pouca"], ["Plural", "muitos · poucos", "muitas · poucas"]],
        ex: ["Tem muita gente na fila.", "Eu tenho pouco tempo hoje.", "Ela comprou muitas frutas e poucos legumes.", "Tá caro demais!", "Não tem nenhum problema."]
      },
      {
        from: "x1", h: "Medidas com de",
        p: [
          "Depois de uma medida, vem **de**, sem artigo: um quilo **de** arroz, um litro **de** leite, uma dúzia **de** ovos, um pedaço **de** bolo, um copo **de** água.",
          "**meio** e **meia** combinam com a medida: **meio** quilo, **meia** dúzia, **meia** hora. Em números de telefone, **meia** quer dizer seis."
        ],
        ex: ["Me vê meio quilo de queijo.", "Eu queria duas latas de milho.", "Faltam duas horas e meia.", "Um pouco de sal, por favor."]
      }
    ]
  },
  {
    id: "diminutivo", g: "nomes", e: "🐣", t: "Diminutivo: -inho", d: "O jeito brasileiro de mostrar carinho, tamanho e delicadeza.",
    parts: [
      {
        from: "c1", h: "Como formar",
        p: [
          "O diminutivo é uma das marcas do português do Brasil. Ele não fala só de tamanho: mostra **carinho**, deixa um pedido mais **educado** ou diminui a importância de algo.",
          "A regra básica: tire a vogal final e ponha **-inho** ou **-inha**. Palavras que terminam em vogal com força, em ditongo ou em consoante usam **-zinho** / **-zinha**."
        ],
        table: [["Palavra", "Diminutivo", "Regra"], ["casa", "casinha", "-a → -inha"], ["gato", "gatinho", "-o → -inho"], ["pouco", "pouquinho", "c → qu"], ["amigo", "amiguinho", "g → gu"], ["café", "cafezinho", "vogal forte → -zinho"], ["pai", "paizinho", "ditongo → -zinho"], ["flor", "florzinha", "consoante → -zinha"], ["mãe", "mãezinha", "nasal → -zinha"]],
        ex: ["Você quer um cafezinho?", "Espera um minutinho!", "Que gatinho lindo!", "Só um pouquinho, por favor.", "Minha filhinha tem dois anos."]
      },
      {
        from: "c1", h: "O que ele quer dizer",
        p: [
          "**Carinho:** meu amorzinho, filhinha, vovozinha.",
          "**Pedido educado:** “Me dá uma ajudinha?” soa mais leve do que “Me dá uma ajuda?”.",
          "**Reforço:** **cedinho** (bem cedo), **pertinho** (bem perto), **agorinha** (agora mesmo), **rapidinho** (bem rápido). Aqui o diminutivo entra em advérbios e adjetivos.",
          "**Pouca importância:** um probleminha, um errinho."
        ],
        ex: ["Eu acordei cedinho hoje.", "A padaria fica pertinho daqui.", "Me dá uma ajudinha?", "Volto rapidinho!", "É só um probleminha."],
        es: "O espanhol do México também adora o diminutivo, então a ideia é a mesma. Só não use **-ito**: em português é **-inho**. E repare na escrita: pou**qu**inho, ami**gu**inho."
      }
    ]
  },

  /* ================= presente ================= */
  {
    id: "pronomes", g: "presente", e: "🧑‍🤝‍🧑", t: "Você, a gente e o senhor", d: "Quem faz a ação: os pronomes e o jeito de tratar as pessoas.",
    parts: [
      {
        from: "i1", h: "Os pronomes do Brasil",
        p: [
          "No Brasil, o pronome normal para falar com alguém é **você**, e o verbo fica igual ao de **ele**. Por isso o português do Brasil tem poucas formas de verbo para decorar.",
          "O pronome aparece mais do que no espanhol. É natural dizer **Eu moro aqui**, e não só “Moro aqui”."
        ],
        table: [["Pessoa", "Pronome", "Verbo morar"], ["eu", "eu", "moro"], ["com quem falo", "você", "mora"], ["de quem falo", "ele · ela", "mora"], ["nós", "nós · a gente", "moramos · mora"], ["com quem falo (plural)", "vocês", "moram"], ["de quem falo (plural)", "eles · elas", "moram"]],
        ex: ["Você mora aqui?", "Eu moro no centro e ela mora na praia.", "Vocês são irmãos?", "Eles trabalham juntos."],
        es: "**você** não é formal como “usted”: é o tratamento normal entre amigos. **vosotros** não existe: o plural é sempre **vocês**. E em algumas regiões (Sul, Nordeste, Rio) se ouve **tu**, muitas vezes com o verbo de você: “tu vai?”.",
        pt: "Em Portugal, **tu** é o normal entre amigos e família, com verbo próprio (tu moras). **você** soa distante, e muita gente evita o pronome e usa só o verbo ou o nome da pessoa."
      },
      {
        from: "a2", h: "A gente = nós",
        p: [
          "Na conversa, **a gente** quase sempre substitui **nós**. O verbo vai no **singular**, igual ao de ele: a gente **vai**, a gente **mora**, a gente **quer**.",
          "**nós** continua correto e aparece mais na escrita e em situações formais: nós **vamos**, nós **moramos**.",
          "Nunca misture: “a gente vamos” é considerado erro."
        ],
        table: [["Formal ou escrito", "Conversa"], ["Nós vamos ao cinema.", "A gente vai no cinema."], ["Nós moramos aqui.", "A gente mora aqui."], ["Nossa casa", "A casa da gente"]],
        ex: ["A gente se vê amanhã.", "A gente mora em São Paulo.", "O que a gente vai fazer hoje?", "A gente adora samba."],
        es: "Cuidado: **a gente** (separado) é “nosotros”. **agente** (junto) é um agente, um policial. E **gente** sozinho pode ser “pessoas”: tem muita gente aqui."
      },
      {
        from: "j1", h: "O senhor e a senhora",
        p: [
          "Para mostrar respeito a pessoas mais velhas, clientes ou chefes, use **o senhor** e **a senhora** no lugar de **você**. O verbo continua igual ao de ele.",
          "Com a sogra e o sogro, comece com **a senhora** e **o senhor**. Muitas vezes eles mesmos dizem: “Pode me chamar de você!”.",
          "Antes do nome, usa-se **seu** e **dona**: **seu** José, **dona** Cida."
        ],
        ex: ["O senhor precisa de ajuda?", "A senhora quer um café?", "Bom dia, dona Cida!", "Como vai o senhor?"]
      }
    ]
  },
  {
    id: "serestar", g: "presente", e: "🪞", t: "Ser, estar e ficar", d: "Três verbos para “ser”: o que é, como está e onde fica.",
    parts: [
      {
        from: "i1", h: "Ser: quem você é",
        p: [
          "**ser** fala do que não muda de um dia para o outro: nome, origem, profissão, nacionalidade, relações.",
          "A origem é com **ser de**: Eu sou **do** México."
        ],
        table: [["", "ser"], ["eu", "sou"], ["você · ele · ela · a gente", "é"], ["nós", "somos"], ["vocês · eles · elas", "são"]],
        ex: ["Eu sou a Ana.", "Ela é do Brasil.", "Nós somos amigos.", "Eles são professores.", "De onde você é?"]
      },
      {
        from: "f3", h: "Ser × estar",
        p: [
          "**ser** = como a pessoa ou a coisa **é**, uma característica. **estar** = como ela **está agora**, um estado que pode mudar.",
          "Com alguns adjetivos, o sentido muda: **Ele é chato** (sempre) × **Ele está chato** (hoje). **Ela é bonita** × **Ela está bonita** (hoje, com essa roupa).",
          "Falando, o brasileiro corta o **es-** de estar: **tô**, **tá**, **tamos**, **tão**."
        ],
        table: [["", "estar", "Na conversa"], ["eu", "estou", "tô"], ["você · ele · ela · a gente", "está", "tá"], ["nós", "estamos", "tamos"], ["vocês · eles · elas", "estão", "tão"]],
        ex: ["Ele é alto e simpático.", "Ela está cansada hoje.", "A sopa é boa, mas está fria.", "Tô em casa.", "Vocês estão prontos?"],
        es: "Na maior parte dos casos, **ser** e **estar** funcionam como no espanhol. Diferenças: para dizer onde fica um prédio ou uma cidade, o português usa **ser** ou **ficar**, não estar (**Onde é o banheiro?** · **O hotel fica no centro.**). E o estado civil é com **ser**: **Eu sou casado.**"
      },
      {
        from: "c1", h: "Estar com: fome, sede, sono",
        p: [
          "As sensações do corpo usam **estar com** + substantivo: **estar com fome**, **com sede**, **com sono**, **com frio**, **com calor**, **com medo**, **com pressa**, **com dor**, **com saudade**.",
          "Na conversa: **Tô com fome!**"
        ],
        ex: ["Tô com fome!", "Você está com sede?", "As crianças estão com sono.", "Eu tô com saudade de você.", "Ela está com dor de cabeça."],
        es: "O espanhol usa “tener”: tengo hambre, tengo frío. Em português, **ter fome** existe, mas soa formal. O natural é **estar com fome**. A idade, sim, é com **ter**: **Eu tenho trinta anos.**"
      },
      {
        from: "k1", h: "Ficar: onde as coisas estão",
        p: [
          "Para lugares que não saem do lugar (prédios, ruas, cidades), o Brasil usa **ficar**: **Onde fica a farmácia?** · **O hotel fica perto da praia.**",
          "**ficar** também quer dizer **permanecer**: **Eu vou ficar em casa hoje.** · **Fica à vontade!**"
        ],
        ex: ["Onde fica o banheiro?", "A padaria fica na esquina.", "Recife fica no Nordeste.", "Vou ficar três dias em Salvador."]
      },
      {
        from: "l2", h: "Estar + particípio: o resultado",
        p: [
          "**estar** + particípio mostra como a coisa está depois de uma ação: quebrar → **está quebrado**. O particípio combina com a coisa: a porta está abert**a**, os copos estão quebrad**os**.",
          "Particípios regulares: **-ar** → **-ado** (fechado, ligado), **-er / -ir** → **-ido** (entupido, vendido). Alguns são irregulares: **aberto**, **feito**, **escrito**, **posto**, **visto**, **dito**."
        ],
        ex: ["O chuveiro está quebrado.", "A janela está aberta.", "As lojas estão fechadas.", "O trabalho já está feito."]
      },
      {
        from: "v2", h: "Ficar: mudar de estado",
        p: [
          "**ficar** + adjetivo mostra uma **mudança**: ficar bravo, ficar feliz, ficar doente, ficar pronto, ficar rico.",
          "Também serve para dizer como uma roupa ou um resultado saiu: **A calça ficou apertada.** · **Ficou ótimo!**"
        ],
        ex: ["Ele ficou bravo comigo.", "Eu fiquei muito feliz com a notícia.", "A blusa ficou grande.", "O bolo ficou uma delícia!", "Fica calmo!"],
        es: "**ficar** cobre vários verbos do espanhol: “quedarse” (ficar em casa), “quedar” de roupa (ficou bem), “ponerse” (ficar triste), “estar” de lugar (fica no centro). E, entre jovens, **ficar com alguém** é beijar sem compromisso."
      }
    ]
  },
  {
    id: "presente", g: "presente", e: "⏱️", t: "Presente: verbos regulares", d: "Os três grupos de verbos (-ar, -er, -ir) e como conjugar no presente.",
    parts: [
      {
        from: "w1", h: "As três conjugações",
        p: [
          "Os verbos terminam em **-ar**, **-er** ou **-ir**. Para conjugar, tire esse final e ponha a terminação da pessoa.",
          "Como **você**, **ele**, **ela** e **a gente** usam a mesma forma, e **vocês** e **eles** também, na prática são só **quatro formas** por verbo."
        ],
        table: [["", "falar", "comer", "abrir"], ["eu", "falo", "como", "abro"], ["você · ele · ela · a gente", "fala", "come", "abre"], ["nós", "falamos", "comemos", "abrimos"], ["vocês · eles · elas", "falam", "comem", "abrem"]],
        ex: ["Eu trabalho num hospital.", "Você fala espanhol?", "A gente come arroz e feijão todo dia.", "Nós moramos perto daqui.", "Eles abrem a loja às nove."]
      },
      {
        from: "w1", h: "Para que serve o presente",
        p: [
          "**Rotina e hábitos:** Eu acordo cedo. Ela trabalha de casa.",
          "**Fatos:** O Brasil fala português.",
          "**Futuro próximo com hora marcada:** Amanhã eu trabalho. O filme começa às oito.",
          "Para dizer **não**, ponha **não** antes do verbo: Eu **não** falo inglês. Para perguntar, só mude a melodia: **Você fala inglês?**"
        ],
        ex: ["Eu não bebo café.", "Ela estuda português toda noite.", "Vocês moram juntos?", "Amanhã eu não trabalho."],
        es: "Em respostas curtas, o português repete o verbo em vez de dizer só sim: **Você fala português?** → **Falo.** · **Você mora aqui?** → **Moro, sim.**"
      },
      {
        from: "w1", h: "Verbos irregulares muito usados",
        p: [
          "Alguns dos verbos mais comuns são irregulares, principalmente na forma de **eu**. Vale a pena decorar."
        ],
        table: [["", "eu", "você · ele", "nós", "vocês · eles"], ["ter", "tenho", "tem", "temos", "têm"], ["fazer", "faço", "faz", "fazemos", "fazem"], ["poder", "posso", "pode", "podemos", "podem"], ["querer", "quero", "quer", "queremos", "querem"], ["saber", "sei", "sabe", "sabemos", "sabem"], ["dizer", "digo", "diz", "dizemos", "dizem"], ["ver", "vejo", "vê", "vemos", "veem"], ["vir", "venho", "vem", "vimos", "vêm"], ["dar", "dou", "dá", "damos", "dão"], ["sair", "saio", "sai", "saímos", "saem"], ["dormir", "durmo", "dorme", "dormimos", "dormem"], ["pedir", "peço", "pede", "pedimos", "pedem"], ["ouvir", "ouço", "ouve", "ouvimos", "ouvem"]],
        ex: ["Eu faço o jantar e você lava a louça.", "Eu não sei, mas posso perguntar.", "Eu sempre peço a mesma coisa.", "Eu durmo cedo, mas ela dorme tarde.", "Eu venho de ônibus."]
      }
    ]
  },
  {
    id: "ter", g: "presente", e: "🎒", t: "Ter, tem e ter que", d: "Ter para posse e idade, tem para “existe” e ter que para obrigação.",
    parts: [
      {
        from: "i1", h: "Ter: posse e idade",
        p: [
          "**ter** fala do que você possui e da sua idade: **Eu tenho dois irmãos.** · **Eu tenho trinta anos.**"
        ],
        table: [["", "ter"], ["eu", "tenho"], ["você · ele · ela · a gente", "tem"], ["nós", "temos"], ["vocês · eles · elas", "têm"]],
        ex: ["Quantos anos você tem?", "Eu tenho trinta anos.", "Ela tem um cachorro.", "A gente tem aula hoje.", "Eles têm três filhos."]
      },
      {
        from: "w2", h: "Tem = existe",
        p: [
          "Para dizer que algo existe num lugar, o brasileiro usa **tem**, sempre no singular: **Tem** um mercado aqui perto. **Tem** duas pessoas na fila.",
          "A forma dos livros é **há**, e na conversa quase ninguém usa. No passado: **tinha** (Tinha muita gente na festa).",
          "Pergunta e resposta curtas: **Tem pão?** → **Tem.** · **Não tem.**"
        ],
        ex: ["Na minha casa tem dois quartos.", "Tem um banco aqui perto?", "Não tem problema.", "Tem muita gente na praia hoje.", "Tinha um gato na janela."],
        es: "É o “hay” do espanhol. Em espanhol, “tiene” nunca tem esse uso; em português do Brasil, **tem** é o normal. Escrevendo um texto formal, use **há**.",
        pt: "Em Portugal usa-se **há**: **Há** um mercado aqui perto. O uso de **tem** nesse sentido soa brasileiro."
      },
      {
        from: "d3", h: "Ter que: obrigação",
        p: [
          "**ter que** + verbo (ou **ter de**) = é necessário: **Eu tenho que trabalhar.**",
          "**precisar** + verbo é parecido, um pouco mais leve: **Preciso estudar.** **dever** + verbo é um conselho ou uma probabilidade: **Você deve descansar.** · **Ele deve estar em casa.**"
        ],
        ex: ["Eu tenho que lavar a louça.", "A gente tem que sair agora.", "Você não tem que pagar nada.", "Preciso comprar pão.", "Ela deve chegar às oito."]
      }
    ]
  },
  {
    id: "futuro", g: "presente", e: "🔮", t: "Futuro com ir", d: "O futuro do dia a dia: vou viajar, vai chover.",
    parts: [
      {
        from: "p1", h: "Ir + verbo",
        p: [
          "Para falar do futuro, o brasileiro quase sempre usa **ir** no presente + o verbo no infinitivo: **Eu vou viajar.**",
          "O verbo **ir** é irregular."
        ],
        table: [["", "ir", "Futuro"], ["eu", "vou", "vou viajar"], ["você · ele · ela · a gente", "vai", "vai viajar"], ["nós", "vamos", "vamos viajar"], ["vocês · eles · elas", "vão", "vão viajar"]],
        ex: ["Amanhã eu vou trabalhar de casa.", "Você vai gostar do Brasil!", "A gente vai sair hoje à noite.", "Vai chover.", "Eles vão chegar tarde."],
        es: "Não tem **a** no meio: em espanhol é “voy **a** viajar”, em português é **vou viajar**. E para ir a algum lugar, não repita o verbo: em vez de “vou ir”, diga só **Eu vou à praia.**"
      },
      {
        from: "p1", h: "Palavras de tempo e outras formas",
        p: [
          "**amanhã**, **depois de amanhã**, **semana que vem**, **mês que vem**, **ano que vem**, **daqui a dois dias**, **mais tarde**, **logo**.",
          "O presente também serve para o futuro quando o tempo está claro: **Amanhã eu te ligo.**",
          "Existe um futuro de uma palavra só (**viajarei**, **será**), usado em textos formais, notícias e avisos. Na conversa é raro.",
          "**Vamos** + verbo é também um convite: **Vamos almoçar?**"
        ],
        ex: ["Semana que vem eu vou estar de férias.", "Daqui a dois dias a gente viaja.", "Amanhã eu te ligo.", "Vamos tomar um café?", "O que você vai fazer no fim de semana?"]
      }
    ]
  },
  {
    id: "gerundio", g: "presente", e: "🔄", t: "Estar + -ndo", d: "O que está acontecendo agora: tô comendo, tá chovendo.",
    parts: [
      {
        from: "p2", h: "A ação no meio",
        p: [
          "**estar** + verbo em **-ndo** mostra uma ação que está acontecendo agora. Para formar o **-ndo**, troque o **-r** do infinitivo por **-ndo**. Não tem exceção."
        ],
        table: [["Infinitivo", "Gerúndio", "Exemplo"], ["falar", "falando", "Tô falando com ela."], ["chover", "chovendo", "Tá chovendo."], ["dormir", "dormindo", "O bebê tá dormindo."], ["pôr", "pondo", "Tô pondo a mesa."]],
        ex: ["Tá chovendo muito.", "O que você está fazendo?", "Tô vendo um filme.", "As crianças estão dormindo.", "A gente tá esperando o ônibus."],
        pt: "Em Portugal, a forma normal é **estar a** + infinitivo: **Estou a falar.** · **Está a chover.** O **-ndo** é uma das marcas do Brasil."
      },
      {
        from: "t1", h: "Presente simples × estar + -ndo",
        p: [
          "O presente simples fala de **hábitos**: **Eu leio muito.** O **-ndo** fala de **agora** ou de um período atual: **Eu tô lendo um livro ótimo.**",
          "Outros verbos também combinam com **-ndo**: **continuar** (Continua chovendo), **ficar** (Ele fica reclamando), **andar** (Ando dormindo mal), **ir** (Vai melhorando).",
          "No passado: **estava** + **-ndo** (Eu estava dormindo quando você ligou)."
        ],
        ex: ["Eu trabalho num banco, mas hoje tô trabalhando de casa.", "Ela tá aprendendo a dirigir.", "Continua chovendo.", "Eu estava dormindo quando você ligou."],
        es: "O brasileiro usa esta forma mais do que o espanhol. Para o que acontece agora, prefira sempre **tô fazendo** a “faço”."
      }
    ]
  },
  {
    id: "reflexivos", g: "presente", e: "🔁", t: "Me, te, se e os pronomes", d: "Verbos reflexivos e onde colocar me, te, se, o, a, lhe.",
    parts: [
      {
        from: "d2", h: "Verbos com me e se",
        p: [
          "Alguns verbos pedem um pronome que repete a pessoa: **chamar-se**, **levantar-se**, **sentar-se**, **vestir-se**, **lembrar-se**, **esquecer-se**, **sentir-se**, **mudar-se**, **casar-se**.",
          "No Brasil, o pronome vem **antes** do verbo: **Eu me chamo Ana.**"
        ],
        table: [["Pessoa", "Pronome", "Exemplo"], ["eu", "me", "Eu me levanto cedo."], ["você · ele · ela", "se", "Ela se chama Bia."], ["a gente", "se", "A gente se encontra às oito."], ["nós", "nos", "Nós nos conhecemos em 2020."], ["vocês · eles", "se", "Eles se casaram ontem."]],
        ex: ["Eu me chamo Ana.", "Como você se sente?", "A gente se vê amanhã.", "Eles se conhecem há dez anos.", "Eu me mudei para São Paulo."],
        es: "O Brasil usa **menos** reflexivos que o espanhol. Sem pronome: **acordar** (despertarse), **ficar** (quedarse), **ir embora** (irse), **dormir** (dormirse), **tomar banho** (bañarse), **cair** (caerse). E na conversa muita gente tira o pronome de outros: **Eu levanto às sete.** · **Eu sento aqui.**"
      },
      {
        from: "v3", h: "Onde vai o pronome",
        p: [
          "No Brasil, **me** e **te** vêm antes do verbo, até no começo da frase: **Me liga!** · **Te amo.** · **Eu te ligo amanhã.**",
          "Com dois verbos, o pronome fica no meio: **Você pode me ajudar?** · **Vou te mostrar.**",
          "Para “a ele” e “a ela”, a conversa usa **pra ele** e **pra ela** em vez de **lhe**: **Eu falei pra ele.** E para o objeto direto, é comum usar **ele / ela** em vez de **o / a**: **Eu vi ela ontem.** Na escrita formal, use **Eu a vi ontem.**"
        ],
        table: [["Pessoa", "Pronome", "Exemplo"], ["eu", "me", "Você me ouve?"], ["você (informal)", "te", "Eu te ligo."], ["ele · ela", "o · a (formal), ele · ela (conversa)", "Eu vi ela. · Eu a vi."], ["a ele · a ela", "lhe (formal), pra ele · pra ela", "Eu disse pra ela."], ["nós", "nos · a gente", "Ele ajudou a gente."]],
        ex: ["Me liga mais tarde!", "Eu te espero lá fora.", "Você pode me passar o sal?", "Eu vou te contar uma coisa.", "Eu falei pra ela ontem."],
        es: "Os pronomes duplos do espanhol (“se lo doy”, “dámelo”) não existem na conversa brasileira. Diga **Eu dou pra ele.** · **Me dá isso.** · **Eu te mando a foto.**",
        pt: "Em Portugal, o pronome vem **depois** do verbo, com hífen: **Chamo-me Ana.** · **Liga-me!** Ele passa para antes com **não**, **que** e palavras de pergunta: **Não me ligues.**"
      }
    ]
  },
  {
    id: "regencia", g: "presente", e: "🧲", t: "Verbos com preposição", d: "gostar de, precisar de, pensar em: a preposição que cada verbo pede.",
    parts: [
      {
        from: "t1", h: "Gostar de",
        p: [
          "**gostar** sempre pede **de**, antes de uma coisa ou de um verbo: **Eu gosto de café.** · **Eu gosto de ler.**",
          "Com artigo, o **de** se junta: gosto **do** filme, gosto **da** música, gosto **dos** seus amigos. E com pronomes: gosto **dele**, gosto **disso**.",
          "**adorar**, **amar**, **odiar** e **preferir** não pedem **de**: **Eu adoro ler.**"
        ],
        ex: ["O que você gosta de fazer?", "Eu gosto de samba, mas ela gosta do forró.", "Você gosta dele?", "Eu não gosto disso.", "Eu adoro cozinhar."],
        es: "É o contrário de “gustar”: em português, quem gosta é o sujeito. “Me gusta el café” = **Eu gosto de café.** Nunca diga “me gosta”."
      },
      {
        from: "j1", h: "Precisar de e companhia",
        p: [
          "**precisar de** + coisa: **Preciso de ajuda.** Mas **precisar** + verbo vai sem **de**: **Preciso sair.**",
          "Outros verbos comuns e a preposição que pedem:"
        ],
        table: [["Verbo", "Exemplo"], ["gostar de", "Eu gosto de você."], ["precisar de", "Preciso de um favor."], ["lembrar de", "Você lembra de mim?"], ["esquecer de", "Esqueci de ligar."], ["pensar em", "Tô pensando em você."], ["acreditar em", "Eu acredito em você."], ["morar em", "Ela mora em Recife."], ["chegar em (conversa) / a", "Cheguei em casa tarde."], ["ir para / a / em", "Vou pra praia."], ["sonhar com", "Sonhei com você."], ["casar com", "Ela casou com um mexicano."], ["falar com / de / sobre", "Falei com ela sobre isso."], ["depender de", "Depende do preço."], ["torcer para", "Eu torço pro Bahia."], ["assistir (a)", "A gente assiste novela."], ["ligar para", "Liga pra mim!"]],
        ex: ["Preciso de um favor.", "Tô pensando em mudar de emprego.", "Não esquece de trancar a porta!", "Ontem eu sonhei com a minha avó.", "Depende do dia."],
        es: "Vários são iguais ao espanhol: **sonhar com**, **casar com**, **pensar em**. Os que mudam: **entrar em** (entrar **a**), **chegar em** (llegar **a**), **parecer com** (parecerse **a**), **ligar para** (llamar **a**). E **gostar de** não funciona como “gustar”."
      }
    ]
  },

  /* ================= passado ================= */
  {
    id: "perfeito", g: "passado", e: "✅", t: "Pretérito perfeito", d: "O passado que já acabou: eu falei, ela comeu, a gente foi.",
    parts: [
      {
        from: "h1", h: "Verbos regulares",
        p: [
          "O **pretérito perfeito** fala de ações que começaram e terminaram no passado: **Ontem eu trabalhei.**",
          "Repare: na forma de **nós**, os verbos em **-ar** e **-ir** ficam iguais ao presente (falamos, abrimos). O contexto mostra o tempo."
        ],
        table: [["", "falar", "comer", "abrir"], ["eu", "falei", "comi", "abri"], ["você · ele · ela · a gente", "falou", "comeu", "abriu"], ["nós", "falamos", "comemos", "abrimos"], ["vocês · eles · elas", "falaram", "comeram", "abriram"]],
        ex: ["Ontem eu trabalhei até tarde.", "Você já comeu?", "A gente saiu ontem à noite.", "Eles compraram uma casa.", "Eu morei dois anos em Lisboa."],
        es: "As formas são parecidas com as do espanhol, mas cuidado com **eu**: hablé → **falei** (com i). E ele: habló → **falou**, comió → **comeu**, abrió → **abriu**."
      },
      {
        from: "h1", h: "Ir e ser: fui",
        p: [
          "**ir** e **ser** têm exatamente as mesmas formas no perfeito. O contexto diz qual é: **Eu fui ao mercado** (ir) × **Foi ótimo!** (ser)."
        ],
        table: [["", "ir · ser"], ["eu", "fui"], ["você · ele · ela · a gente", "foi"], ["nós", "fomos"], ["vocês · eles · elas", "foram"]],
        ex: ["Ontem eu fui à praia.", "Como foi a viagem?", "A gente foi ao cinema.", "Eles foram embora cedo.", "Foi muito legal!"]
      },
      {
        from: "e1", h: "Contar a sua vida",
        p: [
          "Verbos úteis para a sua história: **nascer** (nasci), **crescer** (cresci), **estudar** (estudei), **mudar-se** (me mudei), **conhecer** (conheci), **casar** (casei), **começar** (comecei), **chegar** (cheguei).",
          "Mudanças só na escrita, para manter o som na forma de **eu**: **-car** → **-quei** (ficar → fiquei), **-gar** → **-guei** (chegar → cheguei), **-çar** → **-cei** (começar → comecei).",
          "Palavras de tempo: **ontem**, **anteontem**, **semana passada**, **mês passado**, **ano passado**, **em 2015**, **há dois anos** (dois anos atrás)."
        ],
        ex: ["Eu nasci no México e cresci no interior.", "Me mudei para o Brasil em 2020.", "Eu cheguei ontem.", "Comecei a estudar português há um ano.", "A gente se conheceu numa festa."]
      },
      {
        from: "e2", h: "Verbos irregulares",
        p: [
          "Muitos verbos do dia a dia são irregulares no perfeito. A forma de **eu** e a de **ele** costumam ser diferentes."
        ],
        table: [["", "eu", "você · ele", "nós", "vocês · eles"], ["estar", "estive", "esteve", "estivemos", "estiveram"], ["ter", "tive", "teve", "tivemos", "tiveram"], ["fazer", "fiz", "fez", "fizemos", "fizeram"], ["poder", "pude", "pôde", "pudemos", "puderam"], ["querer", "quis", "quis", "quisemos", "quiseram"], ["dizer", "disse", "disse", "dissemos", "disseram"], ["trazer", "trouxe", "trouxe", "trouxemos", "trouxeram"], ["saber", "soube", "soube", "soubemos", "souberam"], ["vir", "vim", "veio", "viemos", "vieram"], ["ver", "vi", "viu", "vimos", "viram"], ["dar", "dei", "deu", "demos", "deram"], ["pôr", "pus", "pôs", "pusemos", "puseram"]],
        ex: ["O que você fez ontem?", "Eu fiz um bolo.", "Ela não pôde vir.", "Eu tive um dia difícil.", "Eles vieram de carro.", "Quem te disse isso?", "Eu trouxe pão."],
        es: "Várias se parecem com o espanhol (hice → **fiz**, tuve → **tive**, pude → **pude**, dije → **disse**, traje → **trouxe**). As traiçoeiras: **vim** é de **vir** (vine) e **vi** é de **ver**. E **foi** serve para ir e para ser, como “fue”."
      },
      {
        from: "j2", h: "Já e nunca: experiências",
        p: [
          "Para falar de experiências de vida, o português usa o **perfeito simples** com **já** ou **nunca**: **Você já foi ao Brasil?** · **Eu nunca comi isso.**",
          "A resposta curta repete **já** ou diz **ainda não** / **nunca**."
        ],
        ex: ["Você já morou fora do seu país?", "Já trabalhei como vendedor.", "Eu nunca fui a Salvador.", "Você já viu esse filme? Ainda não.", "A gente já se conhece."],
        es: "Aqui o português é diferente do espanhol da Espanha: não se usa “he comido”. **Já comi** cobre “ya comí” e “he comido”. A forma **tenho comido** existe, mas quer dizer outra coisa: uma ação repetida nos últimos tempos (**Tenho dormido mal**)."
      }
    ]
  },
  {
    id: "imperfeito", g: "passado", e: "🎞️", t: "Pretérito imperfeito", d: "O passado dos hábitos e das descrições: eu brincava, a casa era grande.",
    parts: [
      {
        from: "r1", h: "Como formar",
        p: [
          "O **imperfeito** fala de coisas que se repetiam ou duravam no passado, sem mostrar o fim.",
          "Só existem duas terminações: **-ava** para os verbos em **-ar** e **-ia** para os verbos em **-er** e **-ir**. As formas de **eu** e de **ele** são iguais."
        ],
        table: [["", "falar", "comer", "abrir"], ["eu · você · ele · ela · a gente", "falava", "comia", "abria"], ["nós", "falávamos", "comíamos", "abríamos"], ["vocês · eles · elas", "falavam", "comiam", "abriam"]],
        ex: ["Quando eu era criança, eu brincava na rua.", "A gente comia na casa da vovó todo domingo.", "Ele trabalhava num banco.", "Eles moravam no interior."],
        es: "É quase igual ao espanhol: hablaba → **falava** (com **v**), comía → **comia** (sem acento na forma de eu)."
      },
      {
        from: "r1", h: "Os quatro irregulares",
        p: [
          "Só quatro verbos são irregulares no imperfeito: **ser**, **ter**, **vir** e **pôr**."
        ],
        table: [["", "ser", "ter", "vir", "pôr"], ["eu · você · ele · a gente", "era", "tinha", "vinha", "punha"], ["nós", "éramos", "tínhamos", "vínhamos", "púnhamos"], ["vocês · eles", "eram", "tinham", "vinham", "punham"]],
        ex: ["Eu era muito tímido.", "A gente tinha um cachorro.", "Meus avós vinham todo Natal.", "A casa era pequena, mas tinha um quintal enorme."]
      },
      {
        from: "r1", h: "Quando usar",
        p: [
          "**Hábitos no passado:** Eu ia à praia todo verão. **Palavras que ajudam:** sempre, todo dia, antigamente, naquele tempo, quando eu era criança.",
          "**Descrições:** A casa era azul. Fazia calor. Ela tinha cabelo comprido.",
          "**Idade e hora no passado:** Eu tinha dez anos. Eram oito horas.",
          "**Pedidos educados:** **Eu queria** um café. · **Eu podia** falar com você?",
          "Na conversa, o imperfeito também substitui o condicional: **Eu ia**, mas não posso. · Se eu pudesse, eu **comprava**."
        ],
        ex: ["Antigamente, a gente não tinha celular.", "Eu tinha dez anos quando me mudei.", "Eram oito horas e fazia frio.", "Eu queria um suco de laranja."]
      },
      {
        from: "r2", h: "Perfeito × imperfeito",
        p: [
          "Numa história, os dois trabalham juntos. O **imperfeito** pinta o **cenário**: o que estava acontecendo, como as coisas eram. O **perfeito** conta a **ação** que aconteceu num ponto.",
          "**estava** + **-ndo** mostra a ação no meio, interrompida por outra: **Eu estava dormindo quando o telefone tocou.**",
          "Alguns verbos mudam de sentido: **Eu conhecia** a Ana (já sabia quem era) × **Eu conheci** a Ana (encontrei pela primeira vez). **Eu sabia** (tinha a informação) × **Eu soube** (descobri)."
        ],
        table: [["Imperfeito: cenário", "Perfeito: ação"], ["Era domingo e chovia.", "De repente, alguém bateu na porta."], ["Eu morava em Recife…", "…quando conheci meu marido."], ["Eu sempre ia de ônibus.", "Ontem eu fui de táxi."], ["Ela estava cozinhando…", "…quando a luz acabou."]],
        ex: ["Eu estava em casa quando você ligou.", "Quando eu era criança, quebrei o braço.", "Fazia sol, então a gente foi à praia.", "Eu conheci a minha mulher na faculdade."]
      }
    ]
  },
  {
    id: "tempo", g: "passado", e: "⏳", t: "Desde, há, faz, já e ainda", d: "Dizer quanto tempo, a partir de quando e se já aconteceu.",
    parts: [
      {
        from: "e3", h: "Desde, há e faz",
        p: [
          "**desde** marca o **começo**: **desde** 2020, **desde** ontem, **desde** criança.",
          "**há** e **faz** + tempo marcam a **duração** até agora. Os dois não vão para o plural: **faz** dois anos (não “fazem”).",
          "Para uma ação que começou no passado e **continua**, o verbo fica no **presente**: **Moro aqui há três anos.**",
          "Com um verbo no passado, **há** quer dizer “atrás”: **Cheguei há dois dias** = Cheguei dois dias **atrás**."
        ],
        table: [["Ideia", "Exemplo"], ["Começo", "Moro aqui desde 2020."], ["Duração (continua)", "Moro aqui há três anos. · Faz três anos que eu moro aqui."], ["Quanto tempo atrás", "Cheguei há dois dias. · Cheguei dois dias atrás."], ["O tempo todo de", "Choveu durante a viagem toda."], ["Limite", "Fico aqui até sexta."]],
        ex: ["Faz dois anos que eu estudo português.", "Eu trabalho aqui desde janeiro.", "A gente se conhece há muito tempo.", "Ela saiu faz cinco minutos.", "Há quanto tempo você mora aqui?"],
        es: "“Hace dos años que vivo aquí” = **Faz dois anos que eu moro aqui** (igual). “Desde hace dos años” não existe em português: diga **há dois anos**. E “llevo dos años viviendo aquí” também é **Moro aqui há dois anos**."
      },
      {
        from: "e3", h: "Já, ainda e ainda não",
        p: [
          "**já** = antes de agora, ou antes do esperado: **Já comi.** · **Já são dez horas!**",
          "**ainda** = continua: **Ainda tô no trabalho.** **ainda não** = não aconteceu até agora: **Ainda não comi.**",
          "**não … mais** = parou: **Não moro mais lá.** **já não** é a forma de Portugal e dos textos.",
          "**acabar de** + verbo = há pouquíssimo tempo: **Acabei de chegar.**"
        ],
        ex: ["Você já almoçou? Ainda não.", "Ela ainda mora com os pais.", "Eu não fumo mais.", "Acabei de chegar em casa.", "Já volto!"],
        es: "“Todavía” = **ainda**. “Ya no” = **não … mais** (Ya no trabajo allí → **Não trabalho mais lá**). “Acabo de llegar” = **Acabei de chegar** (em português, no passado)."
      }
    ]
  },

  /* ================= frases ================= */
  {
    id: "perguntas", g: "frases", e: "❓", t: "Fazer perguntas", d: "As palavras de pergunta e o jeito brasileiro de perguntar.",
    parts: [
      {
        from: "i1", h: "Palavras de pergunta",
        p: [
          "A pergunta de **sim ou não** não muda nada na frase: só a melodia sobe no final. **Você mora aqui.** → **Você mora aqui?**",
          "As outras perguntas começam com uma palavra de pergunta, e o resto da frase fica na ordem normal: **Onde você mora?**"
        ],
        table: [["Palavra", "Pergunta sobre", "Exemplo"], ["o que", "coisa", "O que você faz?"], ["quem", "pessoa", "Quem é ela?"], ["onde", "lugar", "Onde você mora?"], ["de onde", "origem", "De onde você é?"], ["quando", "tempo", "Quando é a festa?"], ["como", "modo", "Como você se chama?"], ["por que", "motivo", "Por que você estuda português?"], ["qual · quais", "escolha", "Qual é o seu nome?"], ["quanto · quanta", "quantidade, preço", "Quanto custa?"], ["quantos · quantas", "número", "Quantos anos você tem?"]],
        ex: ["Como você se chama?", "De onde você é?", "Quantos anos você tem?", "Qual é o seu telefone?", "Por que você está rindo?"],
        es: "Não existe o sinal “¿” no começo. **Qual** (e não “que”) pede uma informação entre várias possíveis: **Qual é o seu nome?** · **Qual é o problema?** E na resposta, **porque** é junto: **Por que** você veio? **Porque** eu quis."
      },
      {
        from: "i3", h: "É que, e as respostas curtas",
        p: [
          "Na conversa, é muito comum reforçar a pergunta com **é que**: **O que é que você quer?** · **Onde é que você mora?** · **Como é que é?** O sentido não muda.",
          "Para confirmar, usa-se **né?** (não é?) no fim: **Você é mexicano, né?**",
          "A resposta curta repete o verbo: **Você entendeu?** → **Entendi.** · **Não entendi.**",
          "No fim da frase, **o que** e **por que** ganham acento: **Você fez o quê?** · **Por quê?**"
        ],
        ex: ["O que é que você quer comer?", "Como é que se diz isso em português?", "Você fala espanhol, né?", "Você entendeu? Entendi.", "Você vai sair? Por quê?"]
      }
    ]
  },
  {
    id: "horas", g: "frases", e: "🕒", t: "Horas, dias e datas", d: "É uma hora, são duas, às três, na segunda, em maio.",
    parts: [
      {
        from: "d1", h: "As horas",
        p: [
          "Para dizer que horas são: **É** uma hora. · **São** duas horas. O verbo combina com o número. Também **É** meio-dia. · **É** meia-noite.",
          "Para dizer **quando** algo acontece, usa-se **a** + artigo: **à** uma, **às** duas, **ao** meio-dia, **à** meia-noite.",
          "As partes do dia: **de manhã**, **à tarde** (ou de tarde), **à noite** (ou de noite), **de madrugada**. Com hora: **às oito da manhã**, **às três da tarde**, **às dez da noite**."
        ],
        table: [["Hora", "Como se diz"], ["1h00", "É uma hora."], ["2h00", "São duas horas."], ["3h15", "São três e quinze."], ["4h30", "São quatro e meia."], ["5h45", "São cinco e quarenta e cinco. · São quinze para as seis."], ["12h00", "É meio-dia."], ["De … a …", "Das nove às cinco."]],
        ex: ["Que horas são?", "São três e meia.", "A que horas começa o filme? Às oito.", "Eu trabalho das nove às seis.", "A gente almoça ao meio-dia."],
        es: "Nas horas, **duas** é feminino: **São duas horas**, **às duas**. E não se usa artigo para dizer a hora: “Son las tres” = **São três horas**. O artigo só aparece em **às três**."
      },
      {
        from: "w3", h: "Dias, meses e datas",
        p: [
          "Os dias de segunda a sexta são femininos (**a** segunda-feira); **o** sábado e **o** domingo são masculinos.",
          "**na** segunda = nesta segunda. **às** segundas ou **toda** segunda = sempre. **no** sábado · **aos** sábados.",
          "Meses e anos usam **em**: **em** maio, **em** 2020. O dia do mês usa **no dia** ou só **dia**: **no dia** cinco de maio.",
          "Os meses e os dias se escrevem com letra minúscula."
        ],
        table: [["Quando?", "Preposição", "Exemplo"], ["um dia da semana", "na · no", "na quarta, no domingo"], ["sempre nesse dia", "às · aos · toda", "às quartas, aos domingos"], ["um mês ou um ano", "em", "em março, em 2024"], ["uma data", "no dia · dia", "no dia 12 de outubro"], ["uma parte do dia", "de · à", "de manhã, à noite"], ["uma estação", "no · na", "no verão, na primavera"]],
        ex: ["Eu tenho aula às terças.", "A festa é no sábado.", "Meu aniversário é em maio.", "Eu nasci no dia cinco de julho.", "A gente viaja em dezembro."],
        es: "Em espanhol se diz “el lunes” sem preposição. Em português precisa: **na** segunda. E “los lunes” = **às** segundas. O primeiro dia do mês é **primeiro**: **primeiro** de maio; os outros são números normais."
      }
    ]
  },
  {
    id: "lugar", g: "frases", e: "📍", t: "Onde: palavras de lugar", d: "em cima, embaixo, ao lado, perto, longe, e aqui, aí, ali, lá.",
    parts: [
      {
        from: "w2", h: "Posição",
        p: [
          "As palavras de lugar quase todas pedem **de**, que se junta ao artigo: em cima **da** mesa, ao lado **do** banco, atrás **das** caixas."
        ],
        table: [["Palavra", "Exemplo"], ["em cima de", "O celular está em cima da mesa."], ["embaixo de", "O gato está embaixo da cama."], ["dentro de", "As chaves estão dentro da bolsa."], ["fora de", "Ele está fora do país."], ["ao lado de", "A farmácia fica ao lado do banco."], ["na frente de", "Tem um ponto de ônibus na frente do hotel."], ["atrás de", "O estacionamento fica atrás do prédio."], ["entre … e …", "A loja fica entre o banco e a padaria."], ["perto de · longe de", "Eu moro perto da praia."]],
        ex: ["O gato está embaixo da cama.", "A padaria fica ao lado do mercado.", "Eu moro longe do centro.", "As chaves estão dentro da gaveta."],
        es: "“Encima de” = **em cima de** (separado). “Debajo de” = **embaixo de** (junto). “Al lado de” = **ao lado de**. “Enfrente de” = **na frente de** ou **em frente a**."
      },
      {
        from: "k1", h: "Aqui, aí, ali, lá e direções",
        p: [
          "**aqui** = onde eu estou · **aí** = onde você está · **ali** = perto, à vista · **lá** = longe. No telefone: **Como tá o tempo aí?**",
          "Para explicar o caminho: **siga reto**, **vire à direita**, **vire à esquerda**, **atravesse a rua**, **na esquina**, **no fim da rua**, **no segundo quarteirão**."
        ],
        ex: ["Vem aqui!", "Como estão as coisas aí?", "O banheiro é ali, à direita.", "Eu morei lá por dois anos.", "Siga reto e vire à esquerda na esquina."]
      }
    ]
  },
  {
    id: "pedidos", g: "frases", e: "🙏", t: "Pedir com educação", d: "queria, gostaria, pode, poderia: do informal ao formal.",
    parts: [
      {
        from: "k3", h: "Eu queria",
        p: [
          "Em lojas e restaurantes, o brasileiro pede com **eu queria** (o imperfeito de querer). Soa educado e natural. **Eu quero** não é grosseiro, mas é mais direto.",
          "Bem brasileiro no balcão: **Me vê** um café? · **Pra mim**, um suco."
        ],
        ex: ["Eu queria um suco de laranja.", "Me vê um cafezinho?", "Pra mim, um prato feito.", "A conta, por favor."]
      },
      {
        from: "p3", h: "Pode e posso",
        p: [
          "Para pedir que alguém faça algo: **Você pode** + verbo? Para pedir permissão: **Posso** + verbo?",
          "Outras formas leves: **Dá pra** + verbo? (é possível?) · **Tem como** + verbo?"
        ],
        ex: ["Você pode me ajudar?", "Posso entrar?", "Pode repetir, por favor?", "Dá pra falar mais devagar?", "Posso pagar com cartão?"]
      },
      {
        from: "j2", h: "Gostaria e poderia",
        p: [
          "Em situações formais (entrevista, e-mail, reclamação), use o **condicional**: **Eu gostaria de** + verbo · **O senhor poderia** + verbo?",
          "O condicional se forma com o infinitivo + **-ia**: gostar**ia**, poder**ia**, dever**ia**. Três irregulares: **faria** (fazer), **diria** (dizer), **traria** (trazer)."
        ],
        table: [["Mais direto", "Educado", "Formal"], ["Quero um café.", "Eu queria um café.", "Eu gostaria de um café."], ["Me ajuda?", "Você pode me ajudar?", "O senhor poderia me ajudar?"], ["Fala com ela.", "Você devia falar com ela.", "O senhor deveria falar com ela."]],
        ex: ["Eu gostaria de marcar uma reunião.", "A senhora poderia repetir, por favor?", "Gostaria de saber o preço.", "Eu gostaria de trocar esta camisa."]
      }
    ]
  },
  {
    id: "imperativo", g: "frases", e: "📣", t: "Dar ordens, conselhos e instruções", d: "Fala com ela! Misture bem. Não pise na grama.",
    parts: [
      {
        from: "n2", h: "O imperativo da conversa",
        p: [
          "Entre amigos e família, o brasileiro usa o verbo na forma de **ele** no presente: **Fala** com ela! · **Come** mais! · **Abre** a porta!",
          "Para o negativo, só ponha **não**: **Não fala** isso!",
          "Conselhos mais suaves: **Você devia** + verbo · **Por que você não** + verbo? · **Que tal** + verbo? · **É melhor** + verbo."
        ],
        table: [["Verbo", "Ordem amiga", "Negativo"], ["falar", "Fala!", "Não fala!"], ["comer", "Come!", "Não come!"], ["abrir", "Abre!", "Não abre!"], ["vir", "Vem cá!", "Não vem!"], ["ir", "Vai!", "Não vai!"], ["fazer", "Faz isso!", "Não faz isso!"], ["ser", "Seja feliz! (igual ao formal)", "Não seja bobo!"]],
        ex: ["Liga pra sua mãe!", "Vem cá!", "Espera aí!", "Não esquece o guarda-chuva!", "Você devia descansar um pouco.", "Por que você não fala com ele?"]
      },
      {
        from: "x2", h: "O imperativo formal: receitas e instruções",
        p: [
          "Em receitas, manuais, avisos e com **o senhor / a senhora**, usa-se o imperativo formal. A vogal **troca**: verbos em **-ar** terminam em **-e**; verbos em **-er** e **-ir** terminam em **-a**.",
          "A base é a forma de **eu** do presente: eu **faç**o → **faça**. eu **ponh**o → **ponha**. eu **venh**o → **venha**. Para **vocês**, some **-m**: **façam**, **venham**."
        ],
        table: [["Infinitivo", "eu (presente)", "Formal", "Plural"], ["misturar", "misturo", "misture", "misturem"], ["mexer", "mexo", "mexa", "mexam"], ["servir", "sirvo", "sirva", "sirvam"], ["fazer", "faço", "faça", "façam"], ["pôr", "ponho", "ponha", "ponham"], ["ter", "tenho", "tenha", "tenham"], ["ir", "(irregular)", "vá", "vão"], ["ser", "(irregular)", "seja", "sejam"], ["estar", "(irregular)", "esteja", "estejam"], ["dar", "(irregular)", "dê", "deem"]],
        ex: ["Coloque o leite na panela.", "Mexa sem parar.", "Sirva frio.", "Faça o seu pedido no balcão.", "Tenha um bom dia!"],
        es: "A lógica é a mesma do “usted” em espanhol: hable → **fale**, coma → **coma**, haga → **faça**. A diferença é que, na conversa, o brasileiro prefere a forma amiga (**fala**, **come**, **faz**) até com **você**."
      },
      {
        from: "z1", h: "Avisos e placas",
        p: [
          "As placas usam o imperativo formal ou frases sem verbo conjugado: **Empurre** · **Puxe** · **Não pise** na grama · **Proibido** fumar · **É proibido** estacionar.",
          "O infinitivo também dá instruções impessoais: **Não fumar.** · **Manter fechado.** · **Favor** não tocar."
        ],
        ex: ["Empurre.", "Puxe.", "Não pise na grama.", "Proibido fumar.", "Favor manter a porta fechada."]
      }
    ]
  },
  {
    id: "comparacao", g: "frases", e: "📊", t: "Comparar: mais, menos, o maior", d: "mais … que, tão … quanto, melhor, pior e o superlativo.",
    parts: [
      {
        from: "o2", h: "Comparativos",
        p: [
          "Para comparar duas coisas: **mais … (do) que**, **menos … (do) que**, **tão … quanto**. O **do** é opcional.",
          "Com substantivos, a igualdade usa **tanto / tanta / tantos / tantas … quanto**: Ela tem **tantos** livros **quanto** eu.",
          "Quatro adjetivos têm forma própria. Nunca diga “mais bom” nem “mais grande”."
        ],
        table: [["Adjetivo", "Comparativo"], ["bom", "melhor"], ["ruim · mau", "pior"], ["grande", "maior"], ["pequeno", "menor"], ["alto", "mais alto"], ["caro", "mais caro"]],
        ex: ["O Rio é mais quente que São Paulo.", "Esse celular é melhor do que o meu.", "Ela é tão alta quanto a mãe.", "Hoje o trânsito está pior.", "Minha casa é menor que a sua."],
        es: "“Más grande” = **maior**. “Más pequeño” = **menor**. Em espanhol, “mayor” e “menor” falam mais de idade; em português falam de tamanho, e para idade se diz **mais velho** e **mais novo**: **Meu irmão mais velho.**"
      },
      {
        from: "y3", h: "O superlativo",
        p: [
          "Para o máximo dentro de um grupo: **o / a mais … de**: **A cidade mais bonita do Brasil.** Com os irregulares: **o maior**, **o menor**, **o melhor**, **o pior**.",
          "Para dizer “muito, muito”, o português tem **-íssimo**: lind**íssimo**, car**íssimo**, muit**íssimo**. Na conversa, é mais comum **super**, **muito** ou **demais**: **super** legal, bom **demais**."
        ],
        ex: ["O Amazonas é o maior estado do Brasil.", "Esse é o melhor restaurante da cidade.", "Foi o pior dia da minha vida.", "A praia é lindíssima.", "Esse bolo tá bom demais!"]
      }
    ]
  },
  {
    id: "relativas", g: "frases", e: "🪢", t: "Juntar frases: que e onde", d: "A padaria que abre cedo. O bairro onde eu cresci.",
    parts: [
      {
        from: "l3", h: "Que e onde",
        p: [
          "**que** junta duas frases sobre a mesma pessoa ou coisa. Serve para tudo: pessoas, coisas, sujeito ou objeto. **Tem uma padaria. A padaria abre às seis.** → **Tem uma padaria que abre às seis.**",
          "**onde** substitui um lugar: **Esse é o bairro onde eu cresci.**",
          "Com preposição, na conversa o brasileiro costuma deixar só o **que**: “A pessoa **que** eu falei.” Na escrita, a preposição vem antes: **A pessoa com quem eu falei.** · **O filme de que eu gosto.**"
        ],
        table: [["Duas frases", "Uma frase"], ["Eu tenho um amigo. Ele mora em Recife.", "Eu tenho um amigo que mora em Recife."], ["Eu li o livro. Você me deu o livro.", "Eu li o livro que você me deu."], ["Essa é a rua. Eu moro nessa rua.", "Essa é a rua onde eu moro."], ["Aquela é a moça. Eu trabalho com ela.", "Aquela é a moça com quem eu trabalho."]],
        ex: ["Tem uma padaria que abre às seis.", "O filme que a gente viu ontem é ótimo.", "Esse é o bairro onde eu cresci.", "A mulher que mora ao lado é médica.", "É o restaurante onde a gente se conheceu."],
        es: "Para pessoas, o português usa **que** onde o espanhol às vezes usa “quien”: **A moça que ligou** (la chica que llamó). **quem** aparece só depois de preposição: **com quem**, **para quem**."
      },
      {
        from: "o1", h: "Acho que: frases com que",
        p: [
          "**que** também liga uma opinião ou uma fala ao resto da frase. Em português, ele **nunca** some: **Eu acho que sim.** · **Ela disse que vem.**",
          "Verbos comuns: **achar que**, **pensar que**, **saber que**, **dizer que**, **parecer que**, **esperar que**, **ter certeza (de) que**.",
          "Para dar a razão: **porque**. Para o resultado: **então**, **por isso**. Para o contrário: **mas**, **só que**, **apesar de**."
        ],
        ex: ["Eu acho que vai chover.", "Ela disse que vem amanhã.", "Parece que o restaurante fechou.", "Eu não fui porque estava cansado.", "Tô sem dinheiro, por isso vou ficar em casa.", "Eu gosto, só que é caro."],
        es: "**achar** tem dois sentidos: “creer / opinar” (**Eu acho que sim**) e “encontrar” (**Achei as chaves!**). E “creo que no” = **Acho que não**."
      }
    ]
  },
  {
    id: "porpara", g: "frases", e: "↔️", t: "Por × para", d: "Destino e objetivo com para; caminho, motivo e preço com por.",
    parts: [
      {
        from: "l1", h: "Por: cada, durante, motivo",
        p: [
          "**por** = **em cada**: dois mil reais **por** mês, duas vezes **por** semana, cem quilômetros **por** hora.",
          "**por** = **durante**: Morei lá **por** dois anos.",
          "**por** = **motivo**: Obrigado **pela** ajuda. · **Por** isso eu vim. · Fiz isso **por** você."
        ],
        ex: ["O aluguel é dois mil reais por mês.", "Eu vou à academia três vezes por semana.", "Obrigado pelo convite!", "Morei em Lisboa por dois anos.", "Por que você fez isso? Por amor."]
      },
      {
        from: "y1", h: "Para × por",
        p: [
          "**para** olha para **a frente**: destino, objetivo, prazo, quem recebe. **por** olha para **o caminho ou a causa**: por onde, em troca de quê, por qual motivo, por qual meio."
        ],
        table: [["para", "por"], ["Destino: Vou para Salvador.", "Caminho: O ônibus passa por Vitória."], ["Objetivo: Estudo para viajar.", "Motivo: Viajo por trabalho."], ["Quem recebe: Isso é para você.", "Troca e preço: Paguei cem reais pelo ingresso."], ["Prazo: É para sexta.", "Duração: Fiquei lá por uma semana."], ["Opinião: Para mim, é caro.", "Meio: Mandei por e-mail."], ["", "Quem fez: Foi escrito por ela."]],
        ex: ["Uma passagem para Salvador, por favor.", "O ônibus passa pelo centro.", "Eu estudo português para falar com a família da minha namorada.", "Paguei duzentos reais pela passagem.", "Me manda por mensagem.", "Isso é pra você."],
        es: "O uso é muito parecido com o do espanhol. As diferenças: **por** se junta ao artigo (**pelo**, **pela**); **para** vira **pra** na conversa; e **ir para** sugere ficar mais tempo, enquanto **ir a** é uma visita rápida: **Vou para o Brasil** (morar ou ficar) × **Vou ao mercado**."
      }
    ]
  }
];
