/* Berlitz Português 4: capítulos 5 a 8 (o 6 é revisão). Mesmo formato de data-berlitz-1.js. */
(function () {
  const T = PT.TRACKS.find((t) => t.id === "berlitz4");

  T.units.push({
    id: "bz5", n: 5, t: "Aproveite as férias!", e: "🏖️", c: "#0E7490",
    d: "Dizer aonde gostaria de ir · Descrever paisagens · Dizer que tipo de férias prefere",
    lessons: [
      {
        id: "b5a", t: "Para onde você iria?", e: "🗺️",
        ex: [
          "Para desejos e sonhos, use o **futuro do pretérito** (o condicional): [[Eu adoraria fazer um cruzeiro.]]",
          "Forma: infinitivo + **-ia, -ia, -íamos, -iam**: **viajar** → viajar**ia**, viajar**íamos**, viajar**iam**.",
          "Irregulares: **fazer** → **faria** · **dizer** → **diria** · **trazer** → **traria**. O resto é regular: **seria**, **iria**, **poderia**, **preferiria**.",
          "**Gostaria de** + infinitivo é um jeito educado de dizer **quero**: **Gostaria de visitar Fortaleza.**",
          "Para viajar barato: **uma pechincha**, **fora de temporada** (fora da época de férias), **tudo incluído**."
        ],
        pt: "Em Portugal, na fala, muita gente usa o imperfeito no lugar do condicional: **Gostava de ir ao Brasil.** · **Adorava fazer um cruzeiro.**",
        v: [
          ["adoraria", "😍", "Condicional de **adorar**: um desejo forte.", "Eu adoraria conhecer a Bahia."],
          ["preferiria", "🤔", "Condicional de **preferir**.", "Eu preferiria ir de trem."],
          ["seria", "✨", "Condicional de **ser**: **seria ótimo**.", "Seria incrível viajar com vocês."],
          ["faria", "🛠️", "Condicional de **fazer**.", "O que você faria no meu lugar?"],
          ["cruzeiro", "🛳️", "Uma viagem de férias num navio grande.", "Nunca fiz um cruzeiro."],
          ["pechincha", "🏷️", "Uma coisa muito barata, uma ótima oferta.", "Essa passagem foi uma pechincha!"],
          ["fora de temporada", "📉", "Fora da época em que todo mundo viaja.", "Fora de temporada, tudo é mais barato."],
          ["tudo incluído", "🍹", "Pacote com hotel, comida e bebida no preço.", "O hotel é com tudo incluído."]
        ],
        s: [
          ["Eu adoraria ir ao Peru.", "adoraria", ["adoraría", "adoraia"], "Você fala de um sonho de viagem."],
          ["O que você faria com um mês livre?", "faria", ["haría", "fazeria"], "Você pergunta sobre os sonhos do seu amigo."],
          ["Seria ótimo viajar em março.", "Seria", ["Sería", "Seira"], "Você sugere uma data para as férias."],
          ["Nós poderíamos ir de carro.", "poderíamos", ["podríamos", "poderiamo"], "Vocês estão planejando a viagem juntos."]
        ]
      },
      {
        id: "b5b", t: "Paisagens", e: "🏞️",
        ex: [
          "Para descrever um lugar: **É uma paisagem rural / urbana / espetacular.** · **Tem de tudo: mar, montanhas e floresta.**",
          "No passado, a descrição vai no **imperfeito**: [[A praia era linda e a água estava quente.]]",
          "Os pontos cardeais: **norte**, **sul**, **leste** e **oeste**. O **Nordeste** é a região das praias mais famosas do Brasil.",
          "Palavras para elogiar: **inesquecível**, **espetacular**, **maravilhoso**, **impressionante**. **Gigante** = enorme."
        ],
        pt: "Em Portugal se diz **este** em vez de leste, e a cachoeira lá é a **cascata**.",
        v: [
          ["paisagem", "🏞️", "O que você vê de um lugar: montanhas, rios, campos.", "Que paisagem linda!"],
          ["montanha", "⛰️", "Uma terra muito alta, maior que um morro.", "Subimos a montanha a pé."],
          ["deserto", "🏜️", "Um lugar muito seco, com pouca chuva.", "O Atacama é um deserto no Chile."],
          ["floresta", "🌳", "Um lugar grande com muitas árvores.", "A floresta estava cheia de pássaros."],
          ["cachoeira", "💦", "A água de um rio que cai de um lugar alto.", "Tomamos banho de cachoeira."],
          ["inesquecível", "✨", "Tão bom que você nunca vai esquecer.", "Foi uma viagem inesquecível."],
          ["ecoturismo", "🌿", "Turismo na natureza, que protege o meio ambiente.", "Fizemos ecoturismo no Pantanal."],
          ["tartaruga", "🐢", "Um animal com casco duro, que vive no mar ou na terra.", "Vimos tartarugas na praia."]
        ],
        s: [
          ["A paisagem era espetacular.", "era", ["fue", "eram"], "Você descreve a vista do hotel."],
          ["Foi uma viagem inesquecível.", "inesquecível", ["inolvidable", "esquecível"], "Você fala das suas melhores férias."],
          ["O Nordeste tem praias lindas.", "Nordeste", ["Noreste", "Nordesto"], "Você fala de uma região do Brasil."],
          ["Vimos uma cachoeira enorme.", "cachoeira", ["cascada", "cachoera"], "Você conta o passeio na serra."]
        ]
      },
      {
        id: "b5c", t: "Descansar ou se aventurar?", e: "🏝️",
        ex: [
          "Para preferências: **Prefiro descansar a fazer esporte.** (preferir **X a Y**) · **Gosto mais de praia do que de montanha.**",
          "Para dar conselho com educação, use **deveria**: [[Você deveria tirar umas férias.]] · **Nós deveríamos viajar mais.**",
          "**Fazer bem** = ser bom para a saúde ou para o humor: **Umas férias te fariam bem.**",
          "**Tirar férias** = parar de trabalhar para descansar: **Vou tirar uma semana de férias.**"
        ],
        pt: "Em Portugal também se diz **tirar férias**, e a excursão é muitas vezes um **passeio**.",
        v: [
          ["tirar férias", "🧳", "Parar de trabalhar por um tempo para descansar ou viajar.", "Vou tirar férias em julho."],
          ["descansar", "😴", "Parar de fazer esforço para recuperar a energia.", "Este ano eu quero só descansar."],
          ["excursão", "🚌", "Uma viagem curta em grupo, com guia.", "Fizemos uma excursão pelas praias do norte."],
          ["aventura", "🧗", "Uma experiência emocionante e um pouco arriscada.", "Ele adora férias de aventura."],
          ["deveria", "☝️", "Condicional de **dever**: para dar conselho.", "Você deveria provar a comida local."],
          ["fazer bem", "💚", "Ser bom para a saúde ou para o humor.", "O mar me faz bem."],
          ["agitado", "🎢", "Com muito movimento, muita coisa para fazer.", "As férias foram agitadas demais."],
          ["sossegado", "🍃", "Calmo, tranquilo, sem barulho.", "Quero um lugar sossegado."]
        ],
        s: [
          ["Você deveria descansar mais.", "deveria", ["debería", "deveria de"], "O seu amigo trabalha sessenta horas por semana."],
          ["Umas férias te fariam bem.", "fariam", ["harían", "fazeriam"], "O seu amigo está muito estressado."],
          ["Vou tirar férias em dezembro.", "tirar", ["sacar", "tomar"], "Você conta os seus planos para o fim do ano."],
          ["Quero um lugar sossegado.", "sossegado", ["sosegado", "sossego"], "Você está cansado do barulho da cidade."]
        ]
      },
      {
        id: "b5d", t: "Espero que você goste", e: "🌠",
        ex: [
          "Quando o desejo é sobre **outra pessoa**, use **que + subjuntivo**: **Eu quero viajar.** → [[Eu quero que você viaje comigo.]]",
          "Verbos de desejo e de pedido: **querer que** · **esperar que** · **desejar que** · **pedir que** · **aconselhar que** · **é importante que** · **tomara que** (= ojalá).",
          "**Espero que vocês possam vir.** · **O médico pede que a gente tome a vacina.** · **Tomara que faça sol!**",
          "Formas novas: **leia, descanse, tenha, saia, faça, possa, vá, seja, esteja**. Com **nós**: **façamos, tenhamos, possamos**.",
          "É igual ao espanhol: **quiero que vengas → quero que você venha**. Só a forma muda!"
        ],
        pt: "Em Portugal ainda se usa **oxalá** (= tomara que). No Brasil, quase só **tomara que**.",
        v: [
          ["esperar que", "🤞", "Desejar que algo aconteça: **espero que dê certo**.", "Espero que você goste do presente."],
          ["querer que", "👉", "Desejar que outra pessoa faça algo.", "Ela quer que eu vá junto."],
          ["pedir que", "🙏", "Pedir para alguém fazer algo, de forma mais formal.", "Peço que vocês cheguem cedo."],
          ["é importante que", "❗", "Com subjuntivo: **é importante que você descanse**.", "É importante que todos venham."],
          ["desejar", "💫", "Querer muito. Também: **desejar boa viagem**.", "Desejo que vocês sejam felizes."],
          ["aconselhar", "🗨️", "Dar um conselho: **aconselhar que** + subjuntivo.", "O médico aconselha que eu descanse."],
          ["vacina", "💉", "Um remédio que protege contra uma doença.", "Você já tomou a vacina da gripe?"],
          ["seguir", "🧭", "Fazer o que alguém recomenda: **seguir um conselho**.", "É bom seguir os conselhos do médico."]
        ],
        s: [
          ["Espero que você goste.", "goste", ["guste", "gosta"], "Você dá um presente para a sua amiga."],
          ["Ela quer que eu vá com ela.", "vá", ["vaya", "vou"], "Você conta o pedido da sua irmã."],
          ["Tomara que faça sol amanhã.", "faça", ["haga", "faz"], "Vocês vão à praia amanhã."],
          ["É importante que vocês descansem.", "descansem", ["descansen", "descansam"], "O médico fala com o time depois do jogo."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz6", n: 6, t: "Revisão: capítulos 1 a 5", e: "🔁", c: "#475569",
    d: "Uma lição de revisão e seis cenas para praticar com a IA, como no livro",
    scenes: ["bz-c1", "bz-c2", "bz-c3", "bz-c4", "bz-c5", "bz-c6"],
    lessons: [
      {
        id: "b6a", t: "Cenas do dia a dia", e: "🎭",
        ex: [
          "Revisão dos capítulos 1 a 5: acidentes e hospital, tarefas e favores, apresentações, família e férias.",
          "Gramática para revisar: **futuro simples** (**farei, será**) · **imperativo** (**compre, traga**) · **embora / antes que + subjuntivo** · **voz passiva** · **se + futuro do subjuntivo** · **condicional** (**adoraria, deveria**).",
          "Para mudar um plano: [[Podemos remarcar?]] · **Dá para adiantar para as dez?** · **Desculpa, tive um imprevisto.**",
          "Depois desta lição, faça as **cenas** com a IA, logo abaixo na trilha: cada uma é uma situação real do livro, e você faz o seu papel."
        ],
        pt: "Em Portugal se diz mais **marcar para outro dia** do que remarcar. E **imprevisto** é igual.",
        v: [
          ["grave", "⚠️", "Sério, perigoso: **um machucado grave**.", "Não é nada grave, fica tranquilo."],
          ["de última hora", "⏰", "No último momento, sem tempo para planejar.", "Surgiu uma reunião de última hora."],
          ["remarcar", "📅", "Marcar outra data ou outra hora para algo.", "Podemos remarcar para sexta?"],
          ["adiantar", "⏩", "Fazer algo mais cedo do que o combinado.", "Dá para adiantar a consulta?"],
          ["imprevisto", "😬", "Algo que acontece sem a gente esperar.", "Desculpa, tive um imprevisto."],
          ["sala de reuniões", "🚪", "A sala do escritório onde as reuniões acontecem.", "A sala de reuniões está reservada."],
          ["a negócios", "💼", "Por causa do trabalho: **viajar a negócios**.", "Vou viajar a negócios na semana que vem."],
          ["comemorar", "🎉", "Fazer uma festa por algo bom: **comemorar o aniversário**.", "Vamos comemorar o aniversário do vovô!"]
        ],
        s: [
          ["Podemos remarcar a reunião?", "remarcar", ["remarcá", "remarca"], "Você não vai conseguir chegar a tempo."],
          ["Se você puder, me ligue amanhã.", "puder", ["pueda", "poder"], "Você deixa um recado para o eletricista."],
          ["Embora esteja nervoso, estou preparado.", "esteja", ["esté", "está"], "Você fala antes de uma apresentação importante."],
          ["O acidente foi visto por muitas pessoas.", "visto", ["vido", "vista"], "Você explica que muita gente viu o que aconteceu."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz7", n: 7, t: "Temos que ir a rigor?", e: "🎩", c: "#6D28D9",
    d: "Aceitar ou recusar um convite · Descrever roupa formal · Apresentar-se e apresentar outras pessoas · Agradecer ao anfitrião e se despedir",
    lessons: [
      {
        id: "b7a", t: "Aceitar ou recusar", e: "💌",
        ex: [
          "Convite formal: [[Gostaríamos de convidar você para o nosso jantar.]] · **Temos o prazer de convidá-lo...** Informal: **Vou dar uma festa sábado, quer vir?**",
          "Para aceitar: **Com prazer!** · **Claro, conte comigo!** · **Levo alguma coisa?**",
          "Para recusar com educação: **Agradeço muito o convite, mas infelizmente não vai dar.** · **Que pena, já tenho outro compromisso.** · **Fica pra próxima!**",
          "No convite: **traje a rigor** (roupa muito formal) · **traje social** (terno, vestido) · **confirmar presença até...** (avisar se você vai)."
        ],
        pt: "Em Portugal o traje a rigor é o **traje de cerimónia**, e se diz **fica para a próxima**.",
        v: [
          ["convite", "💌", "Um pedido para alguém ir a uma festa ou a um evento.", "Recebi um convite de casamento."],
          ["traje a rigor", "🎩", "Roupa muito formal: smoking e vestido longo.", "O convite diz traje a rigor."],
          ["confirmar presença", "✅", "Avisar que você vai ao evento.", "Por favor, confirme presença até sexta."],
          ["com prazer", "😊", "Com alegria, de boa vontade.", "Vou com prazer!"],
          ["aceitar", "👍", "Dizer que sim a um convite ou a uma proposta.", "Aceitei o convite na hora."],
          ["recusar", "🙅", "Dizer que não a um convite ou a uma proposta.", "Tive que recusar o convite."],
          ["conte comigo", "🤜", "Pode contar com a minha ajuda ou com a minha presença.", "Festa no sábado? Conte comigo!"],
          ["fica pra próxima", "🔜", "Não dá desta vez; quem sabe outra vez.", "Hoje não posso, fica pra próxima!"]
        ],
        s: [
          ["Agradeço o convite, mas não vai dar.", "convite", ["invitación", "convido"], "Você recusa um jantar com educação."],
          ["Claro, vou com prazer!", "prazer", ["placer", "prazeres"], "Uma colega convida você para o aniversário dela."],
          ["Você pode confirmar presença até sexta?", "confirmar", ["confirmá", "confirme"], "Você organiza a festa e precisa saber quantos vêm."],
          ["Infelizmente tenho outro compromisso.", "compromisso", ["compromiso", "compromissa"], "Você explica por que não pode ir."]
        ]
      },
      {
        id: "b7b", t: "Roupa de festa", e: "👗",
        ex: [
          "**Usar** e **vestir**: **Vou usar um vestido preto.** · **O que você vai vestir?** Bem brasileiro: **ir de** + roupa: [[Eu vou de smoking.]]",
          "As joias: **um colar** (no pescoço), **uma pulseira** (no pulso), **um anel** (no dedo), **brincos** (nas orelhas).",
          "Elogios: **Esse vestido ficou ótimo em você!** · **Que elegante!** Resposta: **Obrigada, foi presente da minha tia.**",
          "**Ficar bem em alguém** = combinar com a pessoa: **Azul fica muito bem em você.**"
        ],
        pt: "Em Portugal o terno é o **fato**, e a gravata-borboleta é o **laço**.",
        v: [
          ["colar", "📿", "Uma joia que se usa no pescoço.", "Ela usou um colar de pérolas."],
          ["pulseira", "🔗", "Uma joia que se usa no pulso.", "Ganhei uma pulseira de prata."],
          ["anel", "💍", "Uma joia que se usa no dedo.", "Que anel bonito!"],
          ["brinco", "💎", "Uma joia que se usa na orelha. Quase sempre no plural: **brincos**.", "Adorei os seus brincos!"],
          ["smoking", "🤵", "Um terno preto muito formal, para festas de gala.", "Ele foi de smoking."],
          ["gravata-borboleta", "🎀", "Uma gravata curtinha, em forma de laço.", "O smoking pede gravata-borboleta."],
          ["ficar bem", "🪞", "Combinar com a pessoa, deixar a pessoa bonita.", "Essa cor fica muito bem em você."],
          ["sob medida", "📏", "Feito com as medidas exatas de uma pessoa.", "O terno dele foi feito sob medida."]
        ],
        s: [
          ["Esse vestido ficou ótimo em você!", "ficou", ["quedó", "ficaste"], "Você elogia a roupa da sua amiga."],
          ["Eu vou de smoking.", "de", ["con", "em"], "Um amigo pergunta o que você vai usar na festa."],
          ["Ela usou um colar de ouro.", "colar", ["collar", "colares"], "Você descreve a joia da noiva."],
          ["Adorei os seus brincos!", "brincos", ["aretes", "brincas"], "Você elogia uma colega na festa."]
        ]
      },
      {
        id: "b7c", t: "Gostaria de lhe apresentar", e: "🤝",
        ex: [
          "Para apresentar com formalidade: [[Gostaria de lhe apresentar a nossa diretora.]] · **Muito prazer.** → **O prazer é todo meu.**",
          "Se ninguém apresentou: **Desculpe, acho que não fomos apresentados. Sou o Fernando.** · **Já fomos apresentados, mas não guardei o seu nome.**",
          "O **condicional de cortesia** deixa o pedido mais educado: **Você tem...?** → **Você teria...?** · **Posso...?** → **Poderia...?** · **É possível...?** → **Seria possível...?** · **Quer...?** → **Gostaria de...?**",
          "No Brasil, mesmo em situações formais, a gente costuma usar o primeiro nome: **Seu Marcelo**, **Dona Ana**."
        ],
        pt: "Em Portugal é comum usar o título e o sobrenome: **Senhor Doutor**, **Senhora Engenheira**. E lá o sobrenome se chama **apelido**!",
        v: [
          ["gostaria de lhe apresentar", "🙋", "Frase formal para apresentar uma pessoa a outra.", "Gostaria de lhe apresentar o meu sócio."],
          ["o prazer é todo meu", "😊", "Resposta formal para **muito prazer**.", "O prazer é todo meu, senhora."],
          ["ser apresentado", "🫱", "Conhecer alguém por meio de outra pessoa.", "Acho que ainda não fomos apresentados."],
          ["sobrenome", "🪪", "O nome da família, que vem depois do primeiro nome.", "Qual é o seu sobrenome?"],
          ["teria", "❓", "Condicional de **ter**, para pedir com educação.", "Você teria um minuto?"],
          ["seria possível", "🙏", "Forma educada de **é possível**.", "Seria possível mudar a data?"],
          ["sirva-se", "🍽️", "Fique à vontade para pegar comida ou bebida.", "O bufê está ali, sirva-se!"],
          ["docinho", "🍬", "Um doce pequeno de festa, como o brigadeiro.", "Os docinhos acabaram rapidinho."]
        ],
        s: [
          ["Você teria um suco de laranja?", "teria", ["tendría", "tenha"], "Você está numa recepção formal e pede uma bebida."],
          ["Poderia me passar o sal, por favor?", "Poderia", ["Podría", "Pudesse"], "Você está num jantar formal."],
          ["Muito prazer, o prazer é todo meu.", "todo", ["toda", "tudo"], "A diretora acaba de se apresentar a você."],
          ["Acho que não fomos apresentados.", "apresentados", ["presentados", "apresentado"], "Você está numa festa e não conhece a pessoa ao lado."]
        ]
      },
      {
        id: "b7d", t: "Saúde! Obrigado por ter vindo", e: "🥂",
        ex: [
          "Numa festa, alguém pode **propor um brinde** ao **anfitrião** (quem convidou). Todo mundo levanta o copo e diz: [[Saúde!]]",
          "Para se despedir: **Já vão embora?** · **Sim, amanhã a gente acorda cedo.** · **Que pena! Obrigado por terem vindo.**",
          "**Obrigado por + ter + particípio**: **obrigado por ter vindo** (a uma pessoa) · **obrigado por terem vindo** (a várias).",
          "No dia seguinte: **Queria agradecer outra vez pelo jantar de ontem. Foi um prazer conhecer os seus amigos.**"
        ],
        pt: "Em Portugal o brinde é igual (**Saúde!** ou **Tchim-tchim!**), e o coquetel é o **cocktail**.",
        v: [
          ["brinde", "🥂", "O momento em que todos levantam o copo por alguém.", "Vamos fazer um brinde aos noivos!"],
          ["Saúde!", "🍻", "O que se diz quando todos brindam.", "Saúde! Aos nossos amigos!"],
          ["anfitrião", "🏠", "A pessoa que recebe os convidados na festa.", "O anfitrião preparou tudo sozinho."],
          ["convidado", "🧑‍🤝‍🧑", "Quem foi chamado para a festa.", "Havia mais de cem convidados."],
          ["coquetel", "🍸", "Uma festa elegante, com bebidas e salgadinhos.", "O coquetel começa às oito."],
          ["parabenizar", "🎊", "Dar os parabéns a alguém.", "Liguei para parabenizar a Sara."],
          ["ir embora", "🚪", "Sair de um lugar para voltar para casa.", "Já vão embora? Ainda é cedo!"],
          ["obrigado por ter vindo", "🫶", "Frase para agradecer a visita ou a presença.", "Obrigado por ter vindo, foi ótimo!"]
        ],
        s: [
          ["Já vão embora?", "embora", ["afuera", "enbora"], "Os seus amigos estão pegando os casacos."],
          ["Obrigada por terem vindo!", "terem", ["haber", "tenham"], "Você agradece a vários convidados na porta."],
          ["Vamos fazer um brinde ao anfitrião.", "brinde", ["brindis", "brinda"], "Você levanta o copo no aniversário do seu amigo."],
          ["Liguei para parabenizar a Sara.", "parabenizar", ["felicitá", "parabenisar"], "Hoje é aniversário da sua colega."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz8", n: 8, t: "Você escutou a notícia?", e: "📰", c: "#0F766E",
    d: "Dizer como você se mantém informado · Falar sobre a atualidade · Contar o que os outros disseram",
    lessons: [
      {
        id: "b8a", t: "Como você se informa?", e: "🗞️",
        ex: [
          "Para se informar: **ler o jornal**, **assinar** um jornal ou uma revista, **ver o telejornal**, **ouvir o rádio**, **ler sites de notícias**.",
          "No jornal: a **capa** (a primeira página), as **manchetes** (os títulos grandes), as **seções** (política, economia, esportes) e a **crônica**.",
          "[[Eu dou uma olhada nas manchetes todo dia.]] **Dar uma olhada** = ver rapidamente.",
          "**Manter-se informado** = estar sempre por dentro: **Eu me mantenho informado pela internet.**"
        ],
        pt: "Em Portugal se diz **o diário** para o jornal de todo dia, e **assinar** uma revista também.",
        v: [
          ["jornal", "📰", "Uma publicação diária com as notícias.", "Leio o jornal no café da manhã."],
          ["assinatura", "✍️", "Um pagamento para receber um jornal, uma revista ou um serviço.", "Tenho uma assinatura dessa revista."],
          ["manchete", "🗞️", "O título principal de uma notícia.", "Você viu a manchete de hoje?"],
          ["revista", "📖", "Uma publicação semanal ou mensal, com fotos e artigos.", "Compro uma revista toda semana."],
          ["seção", "📑", "Uma parte do jornal: **seção de esportes**.", "Só leio a seção de esportes."],
          ["crônica", "✒️", "Um texto curto e pessoal sobre o dia a dia, típico dos jornais brasileiros.", "Adoro as crônicas de domingo."],
          ["dar uma olhada", "👀", "Ver rapidamente.", "Vou dar uma olhada nas notícias."],
          ["manter-se informado", "📲", "Estar sempre por dentro das notícias.", "É importante se manter informado."]
        ],
        s: [
          ["Eu assino um jornal de economia.", "assino", ["suscribo", "assina"], "Você explica como recebe as notícias."],
          ["Você viu a manchete de hoje?", "manchete", ["mancheta", "titular"], "Você comenta uma notícia com um colega."],
          ["Vou dar uma olhada no site.", "olhada", ["mirada", "olhado"], "Você quer ver as notícias rapidinho."],
          ["Eu me mantenho informado pelo rádio.", "mantenho", ["mantengo", "manteio"], "Alguém pergunta como você acompanha as notícias."]
        ]
      },
      {
        id: "b8b", t: "Confio, desconfio", e: "📡",
        ex: [
          "Muitos verbos pedem uma preposição: **confiar em** · **desconfiar de** · **acreditar em** · **interessar-se por** · **ter interesse em**.",
          "Com o artigo, elas se juntam: **em + o = no** · **de + a = da** · **por + a = pela**: [[Não confio na mídia.]] · **Desconfio das redes sociais.** · **Ela se interessa pela política.**",
          "Na TV: **canal**, **debate**, **documentário**, **entrevista**, **ao vivo**.",
          "Para perguntar: **De que tipo de programa você gosta?** · **Você se interessa por esporte?**"
        ],
        pt: "Em Portugal é igual: **confiar em**, **interessar-se por**. Só a ordem muda: **interessa-se pela política**.",
        v: [
          ["mídia", "📡", "Os meios de comunicação: TV, rádio, jornais, internet.", "A mídia falou muito desse caso."],
          ["canal", "📺", "Uma estação de TV.", "Em que canal passa o jogo?"],
          ["debate", "🎙️", "Uma discussão organizada entre pessoas com ideias diferentes.", "Você viu o debate ontem?"],
          ["documentário", "🎞️", "Um filme sobre fatos reais.", "Vi um documentário sobre a Amazônia."],
          ["confiar em", "🤝", "Acreditar que algo ou alguém é honesto.", "Eu confio nesse jornal."],
          ["desconfiar de", "🤨", "Não confiar; achar que algo pode ser falso.", "Desconfio de notícias sem fonte."],
          ["interessar-se por", "🧐", "Ter interesse em algo.", "Ele se interessa por política."],
          ["ao vivo", "🔴", "Transmitido no mesmo momento em que acontece.", "O show vai passar ao vivo."]
        ],
        s: [
          ["Eu não confio nesse site.", "nesse", ["en ese", "de esse"], "Você acha que um site de notícias mente."],
          ["Ela desconfia das redes sociais.", "das", ["de las", "nas"], "A sua amiga não acredita no que lê na internet."],
          ["Você se interessa por esporte?", "por", ["en", "para"], "Você quer saber o que o seu colega gosta de ver."],
          ["O jogo vai passar ao vivo.", "vivo", ["directo", "viva"], "Você conta como vai ver a final."]
        ]
      },
      {
        id: "b8c", t: "Você ouviu o que aconteceu?", e: "🚨",
        ex: [
          "Para dar uma notícia: [[Você ouviu o que aconteceu?]] · **Você ficou sabendo?** · **Houve um terremoto no Japão.**",
          "Para reagir: **Não pode ser!** · **Que horror!** · **Nossa, que notícia!** · **Sério? Houve vítimas?**",
          "Desastres: **um incêndio** (fogo), **uma inundação** (água), **um terremoto** (a terra treme). Quem ajuda: os **bombeiros** e a **Defesa Civil**.",
          "As notícias usam a **voz passiva**: **Muitas casas foram destruídas.** · **Os moradores foram resgatados.**"
        ],
        pt: "Em Portugal se diz mais **sismo** do que terremoto, e **cheia** para inundação.",
        v: [
          ["incêndio", "🔥", "Um fogo grande e perigoso.", "Houve um incêndio no prédio."],
          ["inundação", "🌊", "Quando a água cobre as ruas e as casas.", "A chuva causou uma inundação."],
          ["terremoto", "🌋", "Quando a terra treme com força.", "O terremoto destruiu muitas casas."],
          ["vítima", "🚑", "Uma pessoa ferida ou morta num acidente ou num desastre.", "Felizmente não houve vítimas."],
          ["bombeiro", "🧑‍🚒", "Quem apaga incêndios e resgata pessoas.", "Os bombeiros chegaram rápido."],
          ["resgatar", "🛟", "Salvar alguém de um perigo.", "Eles resgataram uma família."],
          ["destruído", "🏚️", "Muito danificado, que não serve mais.", "A ponte ficou destruída."],
          ["Não pode ser!", "😱", "Para mostrar surpresa com uma notícia.", "Não pode ser! Que horror!"]
        ],
        s: [
          ["Os bombeiros apagaram o incêndio.", "incêndio", ["incendio", "incêndia"], "Você conta a notícia do prédio vizinho."],
          ["Muitas casas foram destruídas.", "destruídas", ["destruidas", "destruídos"], "Você lê a notícia do terremoto."],
          ["Você ouviu o que aconteceu?", "aconteceu", ["pasó", "acontece"], "Você liga para um amigo depois de ver o noticiário."],
          ["Felizmente não houve vítimas.", "houve", ["hubo", "houveram"], "Você lê o fim da notícia sobre o incêndio."]
        ]
      },
      {
        id: "b8d", t: "Ele disse que...", e: "🗣️",
        ex: [
          "Para contar o que alguém disse, o verbo vai um passo para trás: **\"A situação é difícil.\"** → [[Ele disse que a situação era difícil.]]",
          "**presente → imperfeito**: é → **era** · está → **estava** · vou → **ia**: **\"Vou ligar.\"** → **Disse que ia ligar.**",
          "**futuro → condicional**: **\"O jogador voltará.\"** → **Confirmou que o jogador voltaria.**",
          "Verbos para contar: **dizer que**, **contar que**, **afirmar que**, **anunciar que**, **confirmar que**, **prometer que**. E **segundo** = de acordo com: **Segundo o jornal,...**",
          "Nas notícias você também vai ouvir **se + imperfeito do subjuntivo**: **disse que, se as vendas crescessem, contrataria mais gente.** Por enquanto, só reconheça!"
        ],
        pt: "Em Portugal é igual. Na fala, lá se usa o imperfeito no lugar do condicional: **disse que voltava**.",
        v: [
          ["anunciar", "📢", "Informar algo publicamente.", "A empresa anunciou novas vagas."],
          ["afirmar", "☝️", "Dizer com certeza.", "O ministro afirmou que não sabia de nada."],
          ["segundo", "📌", "De acordo com: **segundo o jornal**.", "Segundo a previsão, vai chover."],
          ["confirmar", "✔️", "Dizer que algo é verdade ou que vai mesmo acontecer.", "O técnico confirmou que ele vai jogar."],
          ["prometer", "🤙", "Dizer que vai fazer algo, com certeza.", "Ele prometeu que ia ligar."],
          ["jornalista", "🎤", "Quem trabalha com notícias.", "O jornalista fez uma pergunta difícil."],
          ["greve", "✊", "Quando os trabalhadores param de trabalhar para protestar.", "Os motoristas de ônibus estão em greve."],
          ["prefeito", "🏛️", "O chefe do governo de uma cidade.", "O prefeito prometeu novas escolas."]
        ],
        s: [
          ["Ele disse que estava cansado.", "estava", ["estaba", "estive"], "O seu colega falou: Estou cansado."],
          ["Ela disse que ia chegar tarde.", "ia", ["iba", "foi"], "A sua irmã avisou: Vou chegar tarde."],
          ["O prefeito anunciou que as obras acabariam em maio.", "acabariam", ["acabarían", "acabaram"], "Você conta o que o prefeito disse na TV."],
          ["Segundo o jornal, houve uma greve.", "Segundo", ["Según", "Secundo"], "Você cita a fonte da notícia."]
        ]
      }
    ]
  });
})();
