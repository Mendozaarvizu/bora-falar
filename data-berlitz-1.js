/* Caminho opcional do A2: Berlitz Português 4 (nível A2.3 do livro).
   Segue o programa do livro (temas, objetivos, gramática e vocabulário de cada capítulo), com lições escritas
   para o app no mesmo formato da trilha. Não conta para passar de nível: é uma alternativa ou um reforço.
   PT.TRACKS: { id, lvl, t, short, e, c, d, can, badge, units: [{ id, n (capítulo), t, e, c, d, lessons, scenes? }], scenes } */
window.PT = window.PT || {};
PT.TRACKS = PT.TRACKS || [];

PT.TRACKS.push({
  id: "berlitz4", lvl: "A2", t: "Berlitz Português 4", short: "Berlitz 4", e: "📘", c: "#3730A3", badge: "berlitz4",
  d: "Baseado no livro Berlitz Português 4 (A2.3): doze capítulos com acidentes, favores, apresentações, família, férias, convites, notícias, meio ambiente, clientes e cinema.",
  can: [
    "Descrever um acidente, chamar ajuda e se virar no hospital.",
    "Pedir favores e falar das tarefas do dia, com o imperativo e o subjuntivo.",
    "Preparar, fazer e fechar uma apresentação, e trocar opiniões com conectores.",
    "Falar da família e de planos que dependem de algo (se tudo correr bem...).",
    "Dizer aonde gostaria de ir, descrever paisagens e dar conselhos.",
    "Aceitar ou recusar convites, se apresentar e agradecer ao anfitrião.",
    "Contar notícias e o que os outros disseram.",
    "Falar de meio ambiente, energia e reciclagem.",
    "Descrever produtos, atender clientes e resolver reclamações.",
    "Falar de TV e de filmes e dar a sua opinião."
  ],
  units: [],
  scenes: []
});

(function () {
  const T = PT.TRACKS.find((t) => t.id === "berlitz4");

  T.units.push({
    id: "bz1", n: 1, t: "Chamando uma ambulância", e: "🚑", c: "#DC2626",
    d: "Descrever um acidente · Ir ao hospital e dar entrada · Acidentes em casa",
    lessons: [
      {
        id: "b1a", t: "Houve um acidente", e: "🚗",
        ex: [
          "Para contar um acidente, use o **pretérito perfeito** para as ações: [[O carro bateu no caminhão.]] · **Eu freei, mas não deu tempo.**",
          "Revisão dos regulares: **-ar** → eu fre**ei**, ele fre**ou**, eles fre**aram** · **-er** → eu bat**i**, ele bat**eu**, eles bat**eram** · **-ir** → eu sa**í**, ele sa**iu**, eles sa**íram**.",
          "Para descrever a cena (o fundo), use o **imperfeito**: **A pista estava molhada.** · **Chovia muito.** · **Não dava para ver nada.**",
          "**Houve** um acidente = aconteceu um acidente. É o passado de **há**: [[Houve um acidente no cruzamento.]]",
          "No Brasil, ligue **192** para o SAMU (a ambulância), **193** para os bombeiros e **190** para a polícia."
        ],
        pt: "Em Portugal se diz **camião** (caminhão), **travar** (frear) e **condutor** (motorista). O número de emergência é o **112**.",
        v: [
          ["ambulância", "🚑", "O carro que leva as pessoas feridas ao hospital.", "Chamem uma ambulância, rápido!"],
          ["bater", "💥", "Um carro chocar com outra coisa: **bater o carro**, **bater no poste**.", "Ele bateu o carro ontem."],
          ["frear", "🛑", "Fazer o carro parar ou ir mais devagar.", "Eu freei, mas não deu tempo."],
          ["cruzamento", "🚦", "O lugar onde duas ruas se encontram.", "O acidente foi no cruzamento."],
          ["culpa", "☝️", "A responsabilidade por uma coisa ruim que aconteceu.", "A culpa não foi minha!"],
          ["ferido", "🤕", "Uma pessoa machucada num acidente.", "Felizmente ninguém ficou ferido."],
          ["motorista", "🚕", "A pessoa que dirige um carro, um ônibus ou um caminhão.", "O motorista estava no celular."],
          ["caminhão", "🚚", "Um veículo grande que leva cargas pesadas.", "Um caminhão fechou a rua."]
        ],
        s: [
          ["O carro bateu no poste.", "bateu", ["chocó", "bateo"], "Você conta o que aconteceu com o carro do seu vizinho."],
          ["Eu freei, mas não deu tempo.", "freei", ["frené", "freiei"], "Você explica que tentou parar o carro."],
          ["Ninguém ficou ferido.", "ferido", ["herido", "feridos"], "A polícia pergunta se alguém se machucou."],
          ["Houve um acidente na estrada.", "Houve", ["Hubo", "Houvo"], "Você ouve a notícia no rádio do carro."]
        ]
      },
      {
        id: "b1b", t: "Dar entrada no hospital", e: "🏥",
        ex: [
          "No hospital, primeiro você **dá entrada** na recepção: nome, documento e **plano de saúde**. Depois o médico examina você.",
          "Médicos, avisos e jornais usam muito o **futuro simples**: infinitivo + **-ei, -á, -emos, -ão**: [[Você ficará internado esta noite.]]",
          "**falar** → falar**ei**, falar**á**, falar**emos**, falar**ão** · Irregulares: **fazer** → **farei**, **fará** · **dizer** → **direi**, **dirá** · **trazer** → **trarei**, **trará**.",
          "Na conversa, os brasileiros preferem **ir + infinitivo**: **você vai ficar internado**. O futuro simples soa mais formal.",
          "Para dizer o que dói: **Dói aqui.** · **Meu pé está doendo.** · **Estou com dor nas costas.**"
        ],
        pt: "Em Portugal o pronto-socorro é **as urgências**, e se diz mais **raio-X** do que radiografia. O plano de saúde lá é o **seguro de saúde**.",
        v: [
          ["fratura", "🦴", "Quando um osso quebra.", "O médico disse que é uma fratura."],
          ["radiografia", "🩻", "Uma foto de dentro do corpo, que mostra os ossos. Também: **raio-X**.", "Vamos fazer uma radiografia do braço."],
          ["engessado", "🦵", "Com gesso duro em volta de um braço ou de uma perna quebrada.", "Fiquei com a perna engessada."],
          ["muleta", "🩼", "Um apoio para andar quando a perna está machucada.", "Ele está andando de muletas."],
          ["internado", "🛏️", "Quando o paciente tem que dormir no hospital.", "Minha avó ficou internada dois dias."],
          ["alérgico", "🤧", "Quem tem uma reação ruim a um remédio, a uma comida etc.", "Sou alérgico a penicilina."],
          ["recuperar-se", "💪", "Ficar bom de novo depois de uma doença ou de um acidente.", "Ela já se recuperou da cirurgia."],
          ["plano de saúde", "💳", "Um serviço pago que cobre médicos e hospitais particulares.", "Você tem plano de saúde?"]
        ],
        s: [
          ["Você ficará internado esta noite.", "ficará", ["quedará", "ficarão"], "O médico explica o que vai acontecer com você."],
          ["Eu farei os exames amanhã.", "farei", ["fazerei", "haré"], "Você conta os seus planos para a recepcionista."],
          ["Sou alérgico a esse remédio.", "alérgico", ["alergia", "alergioso"], "A enfermeira pergunta se você tem alguma alergia."],
          ["Ele vai precisar de muletas.", "muletas", ["muletos", "maletas"], "O seu amigo está com a perna engessada."]
        ]
      },
      {
        id: "b1c", t: "Acidentes em casa", e: "🏠",
        ex: [
          "Muitos acidentes de casa usam **verbos reflexivos**: **eu me cortei**, **ele se queimou**, **a gente se machucou**.",
          "No Brasil, na fala, o pronome vem antes do verbo: [[Eu me queimei no forno.]] Por escrito também se vê **queimei-me**, mas soa formal.",
          "Para ajudar alguém: **Não se mexa!** · **Fica calmo.** · **Deixa eu ver.** · **Põe gelo.** · **Vou fazer um curativo.**",
          "Os perigos da casa: a **escada**, o chão molhado do banheiro, o fogão, a faca da cozinha. E se você bate a cabeça, fica com um **galo**!"
        ],
        pt: "Em Portugal o pronome vem depois: **cortei-me**, **queimei-me**, **magoei-me** (= me machuquei). E o curativo lá é o **penso**.",
        v: [
          ["machucar-se", "🤕", "Sentir dor ou se ferir por causa de um acidente.", "Você se machucou?"],
          ["queimar-se", "♨️", "Ferir a pele com fogo ou com algo muito quente.", "Me queimei com a panela."],
          ["sangrar", "🩸", "Sair sangue do corpo.", "Seu dedo está sangrando!"],
          ["curativo", "🩹", "O que se põe num machucado para proteger.", "Vou fazer um curativo no seu joelho."],
          ["escorregar", "🍌", "Perder o equilíbrio num chão liso ou molhado.", "Escorreguei no chão do banheiro."],
          ["tropeçar", "🪨", "Bater o pé em algo e quase cair.", "Tropecei no tapete da sala."],
          ["escada", "🪜", "Os degraus para subir ou descer.", "Ele caiu da escada."],
          ["galo", "🐓", "Um calombo na cabeça depois de uma batida.", "Bati a cabeça e fiquei com um galo."]
        ],
        s: [
          ["Eu me cortei com a faca.", "cortei", ["corté", "cortou"], "Você está na cozinha e tem sangue no dedo."],
          ["Ele caiu da escada ontem.", "caiu", ["cayó", "caió"], "Você conta o que aconteceu com o seu avô."],
          ["Não se mexa, por favor!", "mexa", ["mueva", "mexo"], "Uma pessoa caiu e você acha que ela quebrou algo."],
          ["Ela escorregou no chão molhado.", "escorregou", ["resbalou", "escorregó"], "Você explica por que a sua colega está com o braço doendo."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz2", n: 2, t: "Você pode me fazer um favor?", e: "🙏", c: "#B45309",
    d: "Falar das tarefas do dia · Pedir um favor a alguém",
    lessons: [
      {
        id: "b2a", t: "Tarefas do dia", e: "📝",
        ex: [
          "Para falar do que você precisa fazer: **tenho que** + infinitivo · **preciso** + infinitivo: [[Hoje eu tenho que passar no banco.]]",
          "**Faltar** = ainda não ter algo necessário. Com plural, o verbo vai para o plural: **Falta o pão.** · **Faltam dois ovos.** · **Falta comprar o leite.**",
          "**Me faz falta** = eu preciso, eu sinto falta: [[Um carro me faz muita falta.]] · **Te faz falta alguma coisa?**",
          "O **infinitivo** pode ser o sujeito da frase: **Ficar na fila é chato.** · **Fazer compras de manhã é mais tranquilo.**"
        ],
        pt: "Em Portugal o hortifrúti é a **frutaria** ou a **mercearia**, e o jornal se compra no **quiosque**.",
        v: [
          ["tarefa", "✅", "Uma coisa que a gente tem que fazer.", "Tenho mil tarefas hoje."],
          ["lavanderia", "🧺", "A loja que lava e passa a sua roupa.", "Preciso pegar as camisas na lavanderia."],
          ["banca de jornal", "📰", "Uma lojinha na rua que vende jornais e revistas.", "Comprei a revista na banca de jornal."],
          ["hortifrúti", "🥕", "A loja de frutas, verduras e legumes.", "As frutas do hortifrúti são fresquinhas."],
          ["livraria", "📚", "A loja que vende livros. (A **biblioteca** empresta.)", "Vou na livraria depois do almoço."],
          ["buscar", "🚗", "Ir a um lugar para pegar algo ou alguém.", "Você pode buscar as crianças?"],
          ["faltar", "➖", "Não ter algo que é necessário: **falta pão**.", "Falta comprar o leite."],
          ["daqui a pouco", "⏱️", "Dentro de pouco tempo, logo.", "Daqui a pouco eu volto."]
        ],
        s: [
          ["Ainda falta comprar o pão.", "falta", ["falto", "hace"], "Vocês estão no mercado e quase terminaram as compras."],
          ["Faltam dois ovos para o bolo.", "Faltam", ["Falta", "Faltan"], "Você olha a receita e depois a geladeira."],
          ["Ficar na fila é muito chato.", "Ficar", ["Quedar", "Fica"], "Você reclama do banco."],
          ["Daqui a pouco eu passo na lavanderia.", "Daqui a pouco", ["Dentro de poco", "Desde pouco"], "A sua mãe pergunta quando você vai pegar as roupas."]
        ]
      },
      {
        id: "b2b", t: "No correio", e: "📮",
        ex: [
          "Nos **Correios**: [[Queria mandar esta carta registrada.]] · **Quanto custa o selo para a Argentina?** · **Quanto tempo demora para chegar?**",
          "**Queria** (imperfeito) é um jeito educado de pedir, mais suave que **quero**.",
          "Quantidades: **uma dúzia de** (doze) · **dezenas de** (muitas, em grupos de dez) · **centenas de** (muitas, em grupos de cem) · **milhares de**.",
          "**Alguns / algumas** = uma quantidade pequena: **alguns selos**, **algumas cartas**. **Vários / várias** = um pouco mais."
        ],
        pt: "Em Portugal o correio são **os CTT**, e o CEP é o **código postal**.",
        v: [
          ["correio", "📮", "O serviço que leva cartas e pacotes. A empresa no Brasil: **os Correios**.", "Vou ao correio mandar um presente."],
          ["selo", "🏷️", "O papelzinho que você cola na carta para pagar o envio.", "Quantos selos eu preciso?"],
          ["envelope", "✉️", "O papel dobrado onde você põe a carta.", "Escreva o endereço no envelope."],
          ["carta registrada", "📨", "Uma carta com comprovante, mais segura.", "Mandei os documentos por carta registrada."],
          ["aviso de recebimento", "🧾", "Um papel que prova que a pessoa recebeu a carta. Sigla: **AR**.", "Quero com aviso de recebimento, por favor."],
          ["encomenda", "📦", "Um pacote que você manda ou recebe pelo correio.", "Minha encomenda ainda não chegou."],
          ["dezenas", "🔟", "Muitas, em grupos de dez: **dezenas de pessoas**.", "Recebi dezenas de mensagens hoje."],
          ["centenas", "💯", "Muitas, em grupos de cem: **centenas de livros**.", "Há centenas de lojas no shopping."]
        ],
        s: [
          ["Queria mandar esta carta.", "Queria", ["Quería", "Quis"], "Você chega ao balcão dos Correios."],
          ["Preciso de alguns selos.", "alguns", ["algunos", "algum"], "Você vai mandar três cartas."],
          ["Há centenas de pessoas na fila.", "centenas", ["cientos", "centos"], "Hoje é dia de pagar contas e o correio está cheio."],
          ["Minha encomenda chegou ontem.", "encomenda", ["encomendo", "paquete"], "Você comprou algo pela internet."]
        ]
      },
      {
        id: "b2c", t: "Pode me fazer um favor?", e: "🤝",
        ex: [
          "Para pedir um favor: [[Você pode me fazer um favor?]] · **Posso te pedir um favor?** · **Você podia me quebrar um galho?** (bem brasileiro)",
          "O **imperativo** com **você / vocês** vem do presente com **eu**: tire o **-o** e ponha **-e** (verbos em -ar) ou **-a** (em -er e -ir): compr**o** → **compre** · escolh**o** → **escolha** · **faço** → **faça** · **digo** → **diga** · **trago** → **traga**.",
          "Com **vocês**: **comprem, escolham, façam, tragam**. O negativo é igual, com **não** antes: **Não compre arroz.**",
          "**ir** é irregular: **vá / vão**: **Não vá sozinho!** Na fala informal, muita gente usa a forma do presente: **compra o pão pra mim?**"
        ],
        pt: "Em Portugal, com **tu**, o imperativo é **compra**, **traz**, **vai**, e o negativo usa outra forma: **não compres**, **não vás**.",
        v: [
          ["fazer um favor", "🤝", "Ajudar alguém com algo que ele pediu.", "Você pode me fazer um favor?"],
          ["quebrar um galho", "🌿", "Expressão: ajudar alguém num problema.", "Valeu, você me quebrou um galho!"],
          ["passar em", "🚶", "Ir rapidinho a um lugar no caminho: **passar no banco**.", "Passa na padaria pra mim?"],
          ["compromisso", "📅", "Um encontro ou uma obrigação marcada para uma hora.", "Não posso, tenho um compromisso."],
          ["eletricista", "💡", "O profissional que conserta a parte elétrica da casa.", "O eletricista vem amanhã."],
          ["marcar", "🗓️", "Combinar dia e hora para algo.", "Vamos marcar um jantar?"],
          ["fila", "🧍", "As pessoas esperando, uma atrás da outra.", "A fila do banco estava enorme."],
          ["traga", "🎒", "Imperativo de **trazer**: **traga / tragam**.", "Traga um guarda-chuva!"]
        ],
        s: [
          ["Por favor, compre um frango.", "compre", ["compro", "compres"], "Você pede a quem mora com você que vá ao mercado."],
          ["Traga o seu documento.", "Traga", ["Trae", "Trazer"], "A recepcionista explica o que você precisa levar."],
          ["Não vá sozinha, é perigoso.", "vá", ["vaya", "ir"], "A sua amiga quer andar sozinha de noite."],
          ["Vocês podem passar na farmácia?", "passar", ["pasar", "passam"], "Você está doente e pede ajuda aos amigos."]
        ]
      },
      {
        id: "b2d", t: "Embora seja difícil", e: "🧩",
        ex: [
          "Algumas palavras pedem o **presente do subjuntivo**: **embora** (= mesmo que), **antes que**, **para que**, **até que**.",
          "Como formar: presente com **eu**, tire o **-o** e troque a vogal: **-ar** → **-e**: fal**o** → **fale** · **-er / -ir** → **-a**: com**o** → **coma**, **tenho** → **tenha**, **faço** → **faça**.",
          "Irregulares importantes: **ser** → **seja** · **estar** → **esteja** · **ir** → **vá** · **saber** → **saiba** · **querer** → **queira** · **dar** → **dê**.",
          "[[Embora seja caro, eu gosto desse restaurante.]] · **Vou sair antes que comece a chover.** · **Falo devagar para que você entenda.** · **Espere aqui até que eu volte.**",
          "É parecido com o espanhol: **aunque sea → embora seja** · **para que entiendas → para que você entenda**."
        ],
        pt: "Em Portugal é igual. Só cuidado: **embora** também aparece em **ir embora** (= sair), nos dois países: **Já vou embora!**",
        v: [
          ["embora", "🤷", "Com subjuntivo: **mesmo que**, apesar de: **embora seja tarde**.", "Embora esteja cansado, vou à festa."],
          ["antes que", "⏰", "Antes do momento em que: **antes que feche**.", "Vamos antes que comece a chover."],
          ["para que", "🎯", "Com o objetivo de: **para que você entenda**.", "Falo devagar para que você entenda."],
          ["até que", "🏁", "Até o momento em que: **até que ele chegue**.", "Espere aqui até que eu volte."],
          ["ingresso", "🎫", "O bilhete para entrar num show, num jogo, no cinema etc.", "Comprei dois ingressos para o show."],
          ["esgotar", "🈵", "Acabar tudo, não sobrar nada: **os ingressos esgotaram**.", "Compre logo, antes que esgote!"],
          ["mesmo assim", "💪", "Apesar disso: **choveu, mas fomos mesmo assim**.", "Choveu, mas saímos mesmo assim."],
          ["a tempo", "⏳", "Na hora certa, sem atraso.", "Chegamos a tempo para o filme."]
        ],
        s: [
          ["Embora seja caro, eu compro.", "seja", ["sea", "é"], "Você fala do seu café preferido."],
          ["Vamos antes que feche.", "feche", ["cierre", "fecha"], "A padaria vai fechar daqui a dez minutos."],
          ["Explico de novo para que você entenda.", "entenda", ["entienda", "entende"], "O seu colega não entendeu o plano."],
          ["Fico aqui até que você volte.", "volte", ["vuelva", "volta"], "A sua amiga vai ao banheiro e pede para você esperar."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz3", n: 3, t: "Agradeço a sua atenção", e: "📊", c: "#1D4ED8",
    d: "Preparar e fazer uma apresentação · Trocar opiniões · Terminar uma apresentação",
    lessons: [
      {
        id: "b3a", t: "Preparar uma apresentação", e: "🗂️",
        ex: [
          "Uma boa apresentação tem três partes: a **introdução** (o tema e os pontos principais), o **desenvolvimento** (as ideias, uma por uma) e a **conclusão** (o resumo).",
          "Antes, faça um **esboço**: uma lista com os pontos de cada parte. Depois prepare os **slides** e as suas **anotações**.",
          "Para falar da sua experiência: [[Trabalho na área há quinze anos.]] = **Faz quinze anos que trabalho na área.** Atenção: **faz** fica no singular.",
          "**Principal** = mais importante: **os pontos principais**, **o tema principal**."
        ],
        pt: "Em Portugal muita gente diz **diapositivos** em vez de slides.",
        v: [
          ["apresentação", "📊", "Uma fala, com slides, para explicar um tema a um público.", "Amanhã tenho uma apresentação importante."],
          ["esboço", "✏️", "Um primeiro plano, só com as ideias principais.", "Fiz um esboço da apresentação."],
          ["introdução", "🚪", "A primeira parte: apresenta o tema.", "Na introdução, fale do objetivo."],
          ["desenvolvimento", "🧱", "A parte do meio, onde você explica as ideias.", "O desenvolvimento tem três partes."],
          ["conclusão", "🏁", "A parte final, com o resumo.", "Na conclusão, repita os pontos principais."],
          ["tema", "🏷️", "O assunto de uma fala ou de um texto.", "O tema é o turismo no Brasil."],
          ["anotação", "🗒️", "Uma nota curta para não esquecer algo.", "Ela leu as anotações antes de falar."],
          ["público", "👥", "As pessoas que assistem a uma apresentação ou a um show.", "O público fez muitas perguntas."]
        ],
        s: [
          ["Faz dez anos que trabalho aqui.", "Faz", ["Hace", "Fazem"], "Você explica há quanto tempo está na empresa."],
          ["A conclusão resume os pontos principais.", "conclusão", ["conclusión", "concluso"], "Você explica a parte final da apresentação."],
          ["Preparei um esboço dos slides.", "esboço", ["boceto", "esbozo"], "Você mostra ao chefe o seu primeiro plano."],
          ["O público estava muito atento.", "público", ["publico", "pública"], "Você conta como foi a sua apresentação."]
        ]
      },
      {
        id: "b3b", t: "Foi aprovado!", e: "✅",
        ex: [
          "A **voz passiva** dá destaque a quem recebe a ação: **A diretora aprova o orçamento.** → [[O orçamento é aprovado pela diretora.]]",
          "Forma: **ser** + **particípio** (+ **por**). O particípio concorda: **o projeto é aprovado** · **a proposta é aprovada** · **os relatórios são aprovados**.",
          "O tempo fica no verbo **ser**: **é** aprovado (presente) · **foi** aprovado (passado) · **vai ser** ou **será** aprovado (futuro).",
          "**por + o / a** = **pelo / pela**: **escrito pela equipe** · **decidido pelo gerente**.",
          "Na fala é comum o sujeito indefinido: **Aprovaram o orçamento.** (= o orçamento foi aprovado)"
        ],
        pt: "Em Portugal a passiva é igual. Também se usa muito o **-se**: **Aprovou-se o orçamento.**",
        v: [
          ["aprovar", "👍", "Dizer oficialmente que sim a um plano ou a um projeto.", "O diretor aprovou o projeto."],
          ["orçamento", "💰", "O dinheiro previsto para um projeto, ou o preço calculado de um serviço.", "O orçamento já foi aprovado."],
          ["filial", "🏢", "Um escritório ou uma loja da mesma empresa em outro lugar.", "Ele foi para a filial de Recife."],
          ["equipe", "🧑‍🤝‍🧑", "Um grupo de pessoas que trabalham juntas.", "A apresentação foi feita pela equipe."],
          ["resumo", "📄", "Um texto curto com as ideias principais.", "O resumo será enviado amanhã."],
          ["transferido", "🔀", "Mandado para trabalhar em outro lugar.", "A Ana foi transferida para Lisboa."],
          ["decidido", "⚖️", "Quando a decisão já foi tomada.", "Ainda não foi decidido."],
          ["promoção", "🏅", "Subir de cargo no trabalho. Também: preço mais baixo numa loja.", "Ele recebeu uma promoção."]
        ],
        s: [
          ["O projeto foi aprovado ontem.", "aprovado", ["aprobado", "aprovada"], "Você dá uma boa notícia à equipe."],
          ["As propostas foram enviadas pela equipe.", "enviadas", ["enviados", "enviado"], "Você explica quem mandou os documentos."],
          ["O relatório é escrito pelo gerente.", "pelo", ["por el", "pela"], "Você explica quem faz o relatório todo mês."],
          ["O orçamento vai ser apresentado na sexta.", "ser", ["estar", "ter"], "O chefe avisa quando vai mostrar os números."]
        ]
      },
      {
        id: "b3c", t: "Bom dia a todos", e: "🎤",
        ex: [
          "Para começar: [[Bom dia a todos e sejam bem-vindos.]] · **Meu nome é... e sou gerente de...** · **Vim falar sobre...**",
          "Para dar o contexto: **Como vocês sabem,...** Para mostrar o plano: **Em primeiro lugar, vou falar sobre... Depois... Finalmente...**",
          "Durante a fala, envolva o público: **Estão me acompanhando?** · **Prestem atenção neste número.** · **O que vocês acham?**",
          "Para pedir um esclarecimento com educação: **Não sei se entendi bem.** · **Poderia repetir o segundo ponto?** · **Não vejo como isso seria possível.**"
        ],
        pt: "Em Portugal se diz **ecrã** em vez de tela, e **projetor** igual.",
        v: [
          ["sejam bem-vindos", "👋", "Frase para receber um público ou visitas.", "Bom dia a todos e sejam bem-vindos!"],
          ["em primeiro lugar", "🥇", "Para apresentar a primeira coisa de uma lista.", "Em primeiro lugar, vou falar dos números."],
          ["finalmente", "🔚", "Para apresentar a última coisa.", "Finalmente, vou mostrar os resultados."],
          ["como vocês sabem", "💡", "Para falar de algo que o público já conhece.", "Como vocês sabem, o mercado mudou."],
          ["gráfico", "📈", "Um desenho que mostra números de forma visual.", "Este gráfico mostra as vendas."],
          ["projetor", "📽️", "O aparelho que mostra os slides na parede ou na tela.", "O projetor não está funcionando."],
          ["prestar atenção", "👀", "Ouvir ou olhar com cuidado.", "Prestem atenção neste ponto.", "Cuidado, portunhol: em português, **prestar** não é **emprestar**."],
          ["convencer", "🗣️", "Fazer alguém acreditar numa ideia ou aceitar uma ideia.", "Ela convenceu a diretoria."]
        ],
        s: [
          ["Em primeiro lugar, vou falar do mercado.", "primeiro", ["primer", "primeira"], "Você apresenta o plano da sua fala."],
          ["Como vocês sabem, as vendas subiram.", "sabem", ["saben", "sabe"], "Você lembra o público de algo conhecido."],
          ["Não sei se entendi bem.", "entendi", ["entendí", "entendei"], "Um colega explicou algo confuso na reunião."],
          ["Prestem atenção neste gráfico.", "Prestem", ["Presten", "Prestam"], "Você quer que o público olhe um número importante."]
        ]
      },
      {
        id: "b3d", t: "Por isso, além disso...", e: "🔗",
        ex: [
          "**Conectores** ligam as ideias: **por isso** (resultado) · **além disso** (mais uma ideia) · **no entanto** (contraste, = mas).",
          "[[O tema é interessante. Além disso, é muito atual.]] · **Ele morou no Japão, por isso fala japonês.**",
          "**Por um lado... por outro lado...** para comparar dois lados · **pelo contrário** para dizer o oposto · **em vez disso** = no lugar disso.",
          "Para dar opinião: **a meu ver** · **na minha opinião**. Para concordar: **Sem dúvida.** · **Você tem razão.** Para discordar: **Não estou de acordo.**"
        ],
        pt: "Em Portugal se usa muito **contudo** (= no entanto) e **aliás** (= além disso, ou melhor).",
        v: [
          ["por isso", "➡️", "Por essa razão; mostra o resultado.", "Choveu, por isso ficamos em casa."],
          ["além disso", "➕", "E também; acrescenta uma ideia.", "É barato. Além disso, é perto."],
          ["no entanto", "↩️", "Mas; mostra um contraste. Um pouco formal.", "É caro. No entanto, vale a pena."],
          ["pelo contrário", "🔄", "Ao contrário; o oposto do que foi dito.", "Não foi chato. Pelo contrário!"],
          ["por um lado", "⚖️", "Para apresentar um lado; depois vem **por outro lado**.", "Por um lado, é bom; por outro, é caro."],
          ["em vez disso", "🔀", "No lugar disso.", "Em vez disso, fomos ao cinema."],
          ["a meu ver", "👓", "Na minha opinião.", "A meu ver, a ideia é ótima."],
          ["ter razão", "👍", "Estar certo numa opinião.", "Você tem razão, desculpa."]
        ],
        s: [
          ["Ele estudou muito, por isso passou.", "isso", ["eso", "esso"], "Você explica o resultado do seu amigo na prova."],
          ["É barato e, além disso, é bonito.", "além", ["además", "alem"], "Você recomenda uma loja."],
          ["Não estava chato, pelo contrário.", "contrário", ["contrario", "contrária"], "O seu amigo achou que a festa foi chata."],
          ["Você tem razão, vamos mudar o plano.", "razão", ["razón", "rasão"], "O seu colega deu uma boa ideia."]
        ]
      },
      {
        id: "b3e", t: "Alguma pergunta?", e: "❓",
        ex: [
          "Para abrir as perguntas: [[Alguma pergunta?]] Para responder: **Se eu entendi bem, você quer saber...** · **Para responder à sua pergunta,...**",
          "Para conferir: **Isso responde à sua pergunta?** · **Ficou mais claro assim?**",
          "Para fechar: **Portanto, como vimos,...** · **Resumindo, podemos dizer que...** · **Agradeço a sua atenção.** · **Muito obrigado a todos.**",
          "Para concordar ou discordar com força: **Sem dúvida!** · **Exatamente.** · **De jeito nenhum!** (= de maneira nenhuma)"
        ],
        pt: "Em Portugal se ouve mais **de maneira nenhuma** e **de modo nenhum**; **de jeito nenhum** é bem brasileiro.",
        v: [
          ["Alguma pergunta?", "🙋", "Frase para o público fazer perguntas.", "Terminei. Alguma pergunta?"],
          ["se eu entendi bem", "🔍", "Para confirmar que você entendeu a pergunta.", "Se eu entendi bem, você quer os números."],
          ["Como assim?", "🤨", "Para pedir que a pessoa explique melhor.", "Como assim? Não entendi."],
          ["sem dúvida", "💯", "Com certeza, claro que sim.", "Sem dúvida, foi a melhor apresentação."],
          ["de jeito nenhum", "🚫", "De forma nenhuma; nunca. Também: **de maneira nenhuma**.", "Desistir? De jeito nenhum!"],
          ["portanto", "🧮", "Então, por esse motivo (em conclusões).", "Portanto, precisamos de mais tempo."],
          ["resumindo", "📝", "Para fazer o resumo do que foi dito.", "Resumindo, o projeto foi um sucesso."],
          ["agradeço a sua atenção", "🙇", "Frase formal para terminar uma apresentação.", "Agradeço a sua atenção. Obrigado!"]
        ],
        s: [
          ["Agradeço a sua atenção.", "Agradeço", ["Agradezco", "Agradeça"], "Você termina a sua apresentação."],
          ["Se eu entendi bem, você quer saber o preço.", "entendi", ["entendí", "entende"], "Alguém fez uma pergunta e você confirma."],
          ["Resumindo, o projeto foi um sucesso.", "Resumindo", ["Resumiendo", "Resumido"], "Você começa a conclusão."],
          ["Isso responde à sua pergunta?", "responde", ["contesta", "responda"], "Você terminou de explicar e confere com a pessoa."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz4", n: 4, t: "Eu lhe apresento a minha família", e: "👨‍👩‍👧", c: "#BE185D",
    d: "Falar da sua família · Falar dos seus projetos e das suas expectativas",
    lessons: [
      {
        id: "b4a", t: "A família toda", e: "🌳",
        ex: [
          "A família por casamento: os pais do seu marido ou da sua mulher são os seus **sogros** (**sogro** + **sogra**). Para eles, você é o **genro** (homem) ou a **nora** (mulher).",
          "O filho do seu irmão é o seu **sobrinho**; a filha é a sua **sobrinha**. Para eles, você é o **tio** ou a **tia**.",
          "**Filho único** = sem irmãos. O **caçula** é o filho mais novo; o **mais velho** é o primeiro.",
          "Para apresentar com educação: [[Eu lhe apresento a minha sogra.]] (**lhe** = a você, ao senhor, à senhora)",
          "Aniversários de casamento: **bodas de prata** (vinte e cinco anos) e **bodas de ouro** (cinquenta anos)."
        ],
        pt: "Em Portugal se diz **o mais novo** em vez de caçula, e **Apresento-lhe a minha sogra**, com o pronome depois.",
        v: [
          ["sobrinho", "👦", "O filho do seu irmão ou da sua irmã.", "Meu sobrinho tem cinco anos."],
          ["genro", "🤵", "O marido da sua filha.", "O meu genro é muito simpático."],
          ["nora", "👰", "A esposa do seu filho.", "A nora dela é brasileira."],
          ["sogros", "👴", "O pai e a mãe do seu marido ou da sua mulher.", "Vamos almoçar na casa dos meus sogros."],
          ["filho único", "☝️", "Quem não tem irmãos.", "Sou filho único."],
          ["caçula", "🧒", "O filho mais novo da família.", "A caçula da família tem dez anos."],
          ["mais velho", "🧓", "Com mais idade; o primeiro filho é **o mais velho**.", "Meu irmão mais velho mora em Manaus."],
          ["bodas de prata", "🥈", "A festa de vinte e cinco anos de casamento. Com cinquenta: **bodas de ouro**.", "Meus pais fizeram bodas de prata."]
        ],
        s: [
          ["Ele é o meu genro.", "genro", ["yerno", "nora"], "Você apresenta o marido da sua filha."],
          ["Os meus sogros moram em Curitiba.", "sogros", ["suegros", "sogras"], "Você fala dos pais da sua esposa."],
          ["Eu lhe apresento a minha sobrinha.", "lhe", ["le", "lo"], "Numa festa formal, você apresenta a filha da sua irmã a um senhor."],
          ["A caçula é a mais mimada.", "caçula", ["caçulo", "pequenha"], "Você fala da filha mais nova da família."]
        ]
      },
      {
        id: "b4b", t: "Casamentos e separações", e: "💍",
        ex: [
          "**Como** no começo da frase = **porque**: [[Como moramos perto, a gente se vê sempre.]] (= A gente se vê sempre porque mora perto.)",
          "Com **como**, a causa vem **primeiro**; com **porque**, vem **depois**: **Fiquei em casa porque estava cansado.** · **Como estava cansado, fiquei em casa.**",
          "Os verbos de relação são reflexivos: **eles se casaram**, **se separaram**, **se divorciaram**, **se dão bem**.",
          "**Dar-se bem** com alguém = ter uma boa relação: **Eu me dou bem com a minha sogra.**"
        ],
        pt: "Em Portugal: **casaram-se**, **divorciaram-se**, **dão-se bem**. E o bebê lá é o **bebé**.",
        v: [
          ["divorciar-se", "💔", "Terminar o casamento oficialmente.", "Eles se divorciaram no ano passado."],
          ["separar-se", "↔️", "Deixar de viver junto como casal.", "Os pais dela se separaram."],
          ["dar-se bem", "🤗", "Ter uma boa relação com alguém.", "Eu me dou bem com o meu irmão."],
          ["discutir", "🗯️", "Falar com raiva com alguém; brigar com palavras.", "Às vezes eles discutem por bobagem."],
          ["noivo", "💍", "Quem vai se casar. No dia do casamento: **os noivos**.", "Meu noivo é de Salvador."],
          ["grávida", "🤰", "A mulher que vai ter um bebê.", "Ela está grávida de seis meses."],
          ["neném", "🍼", "Bebê, criança bem pequena (bem brasileiro).", "O neném nasceu ontem!"],
          ["viúvo", "🖤", "Quem perdeu o marido ou a mulher, que morreu.", "O meu avô é viúvo."]
        ],
        s: [
          ["Como estava cansado, fiquei em casa.", "Como", ["Cómo", "Que"], "Você explica por que não foi à festa."],
          ["Eles se divorciaram em março.", "divorciaram", ["divorciaron", "divorciou"], "Você conta a história dos seus vizinhos."],
          ["Eu me dou bem com a minha sogra.", "dou", ["doy", "dá"], "Uma amiga pergunta como é a sua relação com a mãe do seu marido."],
          ["A minha irmã está grávida!", "grávida", ["embarazada", "grávido"], "Você dá uma notícia muito feliz."]
        ]
      },
      {
        id: "b4c", t: "Conhecer ou saber?", e: "🤔",
        ex: [
          "**Conhecer** = ter contato com pessoas, lugares ou coisas: [[Eu conheço a Carla.]] · **Você conhece Recife?**",
          "**Saber** = ter uma informação, ou saber fazer algo: **Sei onde ela mora.** · **Você sabe dirigir?**",
          "Às vezes os dois aparecem juntos: **Não conheço o marido dela, mas sei que ele é de Recife.**",
          "**Ficar sabendo** = descobrir uma notícia: **Fiquei sabendo que você vai se casar!** · **Conhecer de vista** = só conhecer a cara.",
          "No passado, **conheci** = encontrei pela primeira vez: **Conheci a minha mulher na faculdade.**"
        ],
        pt: "Em Portugal é igual. Só que lá se diz **saber conduzir** (= saber dirigir).",
        v: [
          ["conhecer", "🫱", "Ter contato com uma pessoa, um lugar ou uma coisa.", "Você conhece o meu primo?"],
          ["saber", "🧠", "Ter uma informação; ou ser capaz de fazer algo.", "Você sabe onde fica o banco?"],
          ["ficar sabendo", "📣", "Receber uma notícia, descobrir.", "Fiquei sabendo da novidade hoje."],
          ["de vista", "👁️", "Conhecer **de vista**: só conhecer a cara da pessoa.", "Conheço ele só de vista."],
          ["de cor", "📖", "Saber **de cor**: saber sem precisar ler.", "Sei o seu telefone de cor."],
          ["não fazer ideia", "💭", "Não saber nada sobre algo: **não faço ideia**.", "Não faço ideia de onde ela está."],
          ["reconhecer", "🔎", "Saber quem é uma pessoa que você já viu.", "Nem te reconheci de óculos!"],
          ["dirigir", "🚗", "Guiar um carro.", "Ainda não sei dirigir."]
        ],
        s: [
          ["Você conhece o Rio de Janeiro?", "conhece", ["sabe", "conoce"], "Você pergunta se a pessoa já esteve na cidade."],
          ["Você sabe onde ela mora?", "sabe", ["conhece", "sepa"], "Você precisa do endereço da sua amiga."],
          ["Fiquei sabendo da notícia ontem.", "sabendo", ["conhecendo", "sabido"], "Você conta quando descobriu uma novidade."],
          ["Não faço ideia do preço.", "faço", ["hago", "faz"], "Alguém pergunta quanto custa uma casa na praia."]
        ]
      },
      {
        id: "b4d", t: "Se tudo correr bem", e: "🤞",
        ex: [
          "Para planos que dependem de algo, use **se + futuro do subjuntivo**: [[Se tudo correr bem, eu me formo no ano que vem.]]",
          "Esse tempo não existe no espanhol! Em espanhol se diz **si puedo**; em português, **se eu puder**.",
          "Como formar: pegue **eles** no pretérito perfeito e tire o **-ram**: fize**ram** → **fizer** · pude**ram** → **puder** · tive**ram** → **tiver** · fo**ram** → **for** · estive**ram** → **estiver** · quise**ram** → **quiser**.",
          "Nos regulares, parece o infinitivo: **se eu falar**, **se você comer**, **se a gente sair**. Com **nós** e **eles**: **se nós pudermos**, **se eles puderem**.",
          "A outra parte da frase vai no futuro ou no presente: **Se o tempo estiver bom, vamos ao parque.**"
        ],
        pt: "Em Portugal se chama **futuro do conjuntivo**, e funciona igual: **se puder, vou**.",
        v: [
          ["se tudo correr bem", "🍀", "Se não acontecer nenhum problema.", "Se tudo correr bem, viajo em julho."],
          ["puder", "💪", "Futuro do subjuntivo de **poder**: **se eu puder**.", "Se eu puder, eu te ligo."],
          ["tiver", "🫴", "Futuro do subjuntivo de **ter**: **se você tiver tempo**.", "Se você tiver tempo, me ajuda?"],
          ["for", "🚶", "Futuro do subjuntivo de **ir** e de **ser**: **se eu for**.", "Se eu for a Porto Alegre, te visito."],
          ["quiser", "🙋", "Futuro do subjuntivo de **querer**: **se você quiser**.", "Se você quiser, pode vir junto."],
          ["diploma", "📜", "O documento que mostra que você terminou um curso.", "Ele vai receber o diploma em dezembro."],
          ["levar a sério", "🧐", "Tratar algo como importante, com responsabilidade.", "Agora ela leva os estudos a sério."],
          ["expectativa", "🔮", "O que você espera que aconteça.", "A minha expectativa é terminar este ano."]
        ],
        s: [
          ["Se eu puder, vou à festa.", "puder", ["pueda", "posso"], "Você ainda não sabe se vai ter tempo."],
          ["Se você quiser, eu te ajudo.", "quiser", ["quieres", "quisser"], "Você oferece ajuda para um amigo."],
          ["Se o tempo estiver bom, vamos à praia.", "estiver", ["esté", "esteja"], "Vocês estão planejando o domingo."],
          ["Se tudo correr bem, eu me formo em junho.", "correr", ["corrir", "corra"], "Você fala dos seus planos na faculdade."]
        ]
      }
    ]
  });
})();
