/* Trilha: unidades que completam o nível A1 (mesmo formato de data-licoes-1.js) */
window.PT = window.PT || {};
PT.UNITS = PT.UNITS || [];

PT.UNITS.push({
  id: "u11", t: "Primeiros passos", e: "👋", c: "#5B5BD6",
  lessons: [
    {
      id: "i1", t: "Muito prazer!", e: "🤝",
      ex: [
        "Para se apresentar: [[Oi! Eu me chamo Ana.]] · **Meu nome é Ana.** · **Eu sou a Ana.**",
        "Para perguntar: **Como você se chama?** · **De onde você é?** · **Onde você mora?** · **Quantos anos você tem?** · **O que você faz?**",
        "A idade é com **ter**: [[Eu tenho trinta anos.]]",
        "A origem é com **ser de**: **Eu sou do México.** · **Ela é de Lisboa.** · **Eles são dos Estados Unidos.** (de + o = **do**, de + a = **da**, de + os = **dos**)",
        "Com pessoas mais velhas ou num lugar formal: **Bom dia!** · **Boa tarde!** · **Boa noite!** E **o senhor / a senhora** no lugar de **você**: [[Muito prazer. A senhora é daqui?]]"
      ],
      pt: "Em Portugal, muita gente usa **tu** com amigos e família (**tu és**, **tu tens**) e, com desconhecidos, o nome da pessoa ou **o senhor / a senhora** no lugar de **você**.",
      v: [
        ["nome", "📛", "A palavra que diz quem você é: Ana, Pedro, Mariana...", "Qual é o seu nome?"],
        ["prazer", "🤝", "O que a gente diz quando conhece uma pessoa nova.", "Muito prazer, eu sou o Lucas."],
        ["chamar-se", "🗣️", "Ter um nome. Com **me / se**: eu me chamo, você se chama.", "Como você se chama?", "Em Portugal: **chamo-me**, **chamas-te**."],
        ["morar", "🏠", "Ter a sua casa num lugar.", "Eu moro em Curitiba.", "Em Portugal se diz muito **viver**: **Vivo em Lisboa.**"],
        ["país", "🗺️", "Um lugar com governo e fronteiras: o Brasil, o México, Portugal...", "De que país você é?"],
        ["brasileiro", "🇧🇷", "Uma pessoa do Brasil. Mulher: **brasileira**.", "O meu marido é brasileiro."],
        ["idade", "🎂", "Quantos anos uma pessoa tem.", "Qual é a sua idade?"],
        ["apresentar", "🙋", "Dizer o nome de uma pessoa para outra pessoa conhecer.", "Deixa eu te apresentar a minha irmã."]
      ],
      s: [
        ["Eu tenho trinta anos.", "tenho", ["sou", "estou"], "Alguém pergunta a sua idade."],
        ["Muito prazer, eu sou a Carla.", "prazer", ["gusto", "obrigada"], "Você conhece uma pessoa nova numa festa."],
        ["Como você se chama?", "se", ["te", "me"], "Você quer saber o nome de uma pessoa."],
        ["Nós somos do México.", "do", ["de o", "da"], "Você e o seu irmão nasceram no México."]
      ]
    },
    {
      id: "i2", t: "Os números", e: "🔢",
      ex: [
        "De 0 a 10: **zero, um, dois, três, quatro, cinco, seis, sete, oito, nove, dez**.",
        "**um / uma** e **dois / duas** mudam com a palavra: **um** irmão, **uma** irmã · **dois** reais, **duas** horas.",
        "De 11 a 19: **onze, doze, treze, catorze, quinze, dezesseis, dezessete, dezoito, dezenove**.",
        "As dezenas: **vinte, trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa**. Entre a dezena e a unidade vem **e**: [[vinte e cinco]] · **trinta e dois**.",
        "**cem** = 100 exatos · **cento e um** = 101 · **duzentos** = 200 · **mil** = 1000.",
        "No telefone, muitos brasileiros dizem **meia** no lugar de **seis** (meia dúzia = 6): [[nove, meia, dois, oito]]"
      ],
      pt: "Em Portugal: **dezasseis, dezassete, dezanove** (no Brasil: dezesseis, dezessete, dezenove). E ninguém diz **meia** no lugar de seis.",
      v: [
        ["um", "1️⃣", "O número 1. Com palavra feminina, vira **uma**.", "Eu tenho um irmão e uma irmã."],
        ["dois", "2️⃣", "O número 2. Com palavra feminina, vira **duas**.", "Eu tenho dois gatos."],
        ["dez", "🔟", "O número 10: os dedos das duas mãos.", "A aula começa às dez."],
        ["vinte", "🧮", "O número 20: dez mais dez.", "A minha filha tem vinte anos."],
        ["cinquenta", "🪙", "O número 50: a metade de cem.", "Custa cinquenta reais."],
        ["cem", "💯", "O número 100. Depois dele vem **cento e um**.", "Meu avô quer viver até os cem anos."],
        ["mil", "📱", "O número 1000: dez vezes cem.", "Esse celular custa mil reais."],
        ["telefone", "📞", "O número para ligar para uma pessoa.", "Qual é o seu telefone?"]
      ],
      s: [
        ["Eu tenho duas irmãs.", "duas", ["dois", "dos"], "Os seus pais têm três filhas: você e mais duas."],
        ["A minha mãe tem cinquenta anos.", "cinquenta", ["cincoenta", "quinze"], "Você diz a idade da sua mãe: 50."],
        ["Custa cento e vinte reais.", "cento", ["cem", "ciento"], "O vendedor diz o preço: R$ 120."],
        ["Qual é o seu telefone?", "telefone", ["teléfono", "nome"], "Você quer o número da pessoa para ligar depois."]
      ]
    },
    {
      id: "i3", t: "Como é que é?", e: "❓",
      ex: [
        "Não entendeu? Sem problema! Peça ajuda: [[Pode repetir, por favor?]] · **Mais devagar, por favor.** · **Desculpa, não entendi.**",
        "Para perguntar uma palavra: **O que significa saudade?** · [[Como se diz isso em português?]] · **Como se escreve?**",
        "O alfabeto: **a, bê, cê, dê, é, efe, gê, agá, i, jota, cá, ele, eme, ene, ó, pê, quê, erre, esse, tê, u, vê, dáblio, xis, ípsilon, zê**.",
        "Para soletrar: [[Ana: a, ene, a.]] O **ç** se chama **cê-cedilha**.",
        "**Como é que é?** é um jeito bem brasileiro de dizer: não ouvi, fala de novo!"
      ],
      pt: "Em Portugal, **Não percebi.** é muito comum (= não entendi). E, para pedir com educação, também se diz **se faz favor**.",
      v: [
        ["repetir", "🔁", "Dizer ou fazer de novo.", "Pode repetir, por favor?"],
        ["devagar", "🐢", "Sem pressa, com calma. O contrário de rápido.", "Fala mais devagar, por favor."],
        ["entender", "💡", "Saber o que a outra pessoa quer dizer.", "Desculpa, não entendi.", "Em Portugal também: **perceber** (não percebi)."],
        ["significar", "📖", "Querer dizer. Uma palavra **significa** alguma coisa.", "O que significa essa palavra?"],
        ["soletrar", "🔤", "Dizer as letras de uma palavra, uma por uma.", "Pode soletrar o seu nome?"],
        ["como se diz", "🗣️", "A pergunta para saber o nome de uma coisa em português.", "Como se diz isso em português?"],
        ["dúvida", "🤔", "Quando você não tem certeza e quer perguntar.", "Professora, eu tenho uma dúvida."],
        ["Não sei.", "🤷", "Quando você não tem a resposta.", "Não sei, vou perguntar pro meu marido."]
      ],
      s: [
        ["Pode repetir, por favor?", "repetir", ["repete", "repetindo"], "Você não ouviu bem o que a pessoa disse."],
        ["Fala mais devagar, por favor.", "devagar", ["despacio", "rápido"], "A pessoa fala rápido demais para você."],
        ["Desculpa, não entendi.", "entendi", ["entendí", "entendeu"], "Você ouviu, mas não sabe o que a pessoa quis dizer."],
        ["O que significa essa palavra?", "significa", ["significar", "quer"], "Você leu uma palavra nova num livro."]
      ]
    }
  ]
});

PT.UNITS.push({
  id: "u12", t: "Minha vida", e: "🏡", c: "#BE123C",
  lessons: [
    {
      id: "w1", t: "O que você faz?", e: "💼",
      ex: [
        "Para perguntar a profissão: [[O que você faz?]] · **Qual é a sua profissão?** Resposta: **Eu sou professora.** (sem **uma**!)",
        "Verbos em **-ar** no presente: **trabalhar** → eu trabalh**o** · você / ele / ela / a gente trabalh**a** · nós trabalh**amos** · vocês / eles trabalh**am**.",
        "Em **-er** e **-ir**: eu com**o**, você com**e**, nós com**emos**, eles com**em** · eu abr**o**, você abr**e**, nós abr**imos**, eles abr**em**.",
        "Alguns verbos são diferentes: **ser** → eu **sou**, você **é** · **ter** → eu **tenho**, você **tem** · **fazer** → eu **faço**, você **faz** · **ir** → eu **vou**, você **vai**.",
        "Onde? **Eu trabalho num hospital.** · **numa escola** · **em casa**. (em + um = **num**, em + uma = **numa**)"
      ],
      pt: "Em Portugal, com **tu**: **tu trabalhas**, **tu comes**. E muita gente pergunta **O que é que fazes?**",
      v: [
        ["trabalhar", "💼", "Fazer uma atividade e receber dinheiro por ela.", "Eu trabalho de segunda a sexta."],
        ["estudar", "📚", "Aprender coisas na escola, na faculdade ou sozinho.", "Eu estudo português todo dia."],
        ["professor", "🧑‍🏫", "A pessoa que ensina. Mulher: **professora**.", "A minha professora é de Recife."],
        ["médico", "🩺", "A pessoa que cuida da saúde dos outros. Mulher: **médica**.", "O meu cunhado é médico."],
        ["engenheiro", "👷", "A pessoa que planeja prédios, pontes e máquinas. Mulher: **engenheira**.", "Ela é engenheira numa empresa grande."],
        ["empresa", "🏢", "Um lugar onde muitas pessoas trabalham juntas para fazer ou vender coisas.", "Ele trabalha numa empresa de tecnologia."],
        ["aposentado", "🧓", "Uma pessoa que não trabalha mais por causa da idade.", "Meu pai é aposentado e viaja muito.", "Em Portugal: **reformado**."],
        ["salário", "💰", "O dinheiro que você recebe todo mês pelo trabalho.", "O salário cai no dia cinco."]
      ],
      s: [
        ["Eu sou professora.", "sou", ["soy", "estou"], "Você diz a sua profissão."],
        ["Nós trabalhamos numa escola.", "trabalhamos", ["trabajamos", "trabalham"], "Você e o seu marido têm o mesmo trabalho."],
        ["Ela come no restaurante da empresa.", "come", ["comi", "como"], "Você fala do almoço de todo dia da sua colega."],
        ["O que você faz?", "faz", ["hace", "fazer"], "Você quer saber a profissão de uma pessoa."]
      ]
    },
    {
      id: "w2", t: "Minha casa", e: "🛋️",
      ex: [
        "Para dizer o que existe num lugar, o brasileiro usa **tem**: [[Na minha casa tem dois quartos.]] Mais formal: **há**.",
        "**em + o = no** · **em + a = na**: **no** quarto, **na** sala, **na** cozinha, **no** banheiro.",
        "Onde está? **em cima de** · **embaixo de** · **ao lado de** · **dentro de** · **atrás de** · **na frente de**.",
        "Com **o / a**: em cima **da** mesa · embaixo **do** sofá · ao lado **da** janela.",
        "Nas cidades grandes, muitos brasileiros moram em **apartamento**, num **prédio** com porteiro."
      ],
      pt: "Em Portugal, **há** é muito comum (**há dois quartos**) e o banheiro se chama **casa de banho**.",
      v: [
        ["apartamento", "🏙️", "Uma casa dentro de um prédio, com vizinhos em cima e embaixo.", "A gente mora num apartamento pequeno.", "Em Portugal também se diz **andar**, ou **T2**, **T3** pelo número de quartos."],
        ["quarto", "🛏️", "O cômodo onde a gente dorme.", "O meu quarto é bem silencioso."],
        ["sala", "🛋️", "O cômodo com sofá e TV, para ficar com a família ou com visitas.", "A gente vê novela na sala."],
        ["cozinha", "🍳", "O cômodo onde a gente prepara a comida.", "A minha avó passa o dia na cozinha."],
        ["janela", "🪟", "Uma abertura na parede para entrar luz e ar.", "Abre a janela, tá muito calor!"],
        ["em cima de", "⬆️", "Numa posição mais alta, tocando a coisa.", "A chave está em cima da mesa."],
        ["embaixo de", "⬇️", "Numa posição mais baixa, sob a coisa.", "O gato dorme embaixo da cama.", "Em Portugal: **debaixo de**."],
        ["ao lado de", "↔️", "Muito perto, do lado direito ou esquerdo.", "O sofá fica ao lado da janela."]
      ],
      s: [
        ["Na minha casa tem três quartos.", "tem", ["hay", "é"], "Você descreve a sua casa."],
        ["O sofá está na sala.", "na", ["en la", "no"], "Você diz onde fica o sofá."],
        ["O gato está embaixo da cama.", "embaixo", ["debajo", "em cima"], "O gato dorme no chão, sob a cama."],
        ["O banheiro fica no corredor.", "no", ["na", "en el"], "Você explica a uma visita onde fica o banheiro."]
      ]
    },
    {
      id: "w3", t: "Dias e meses", e: "📅",
      ex: [
        "Os dias da semana: **segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado, domingo**. Na conversa, a gente corta o **-feira**: **segunda, terça...**",
        "**na** segunda = nesta segunda · **às** segundas = toda segunda: [[Eu tenho aula às terças.]] E **no** sábado, **no** domingo.",
        "Os meses: **janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro**. Com letra minúscula!",
        "A data: [[Hoje é dia três de novembro.]] O dia 1 é **primeiro**: **primeiro de janeiro**.",
        "Para perguntar: **Que dia é hoje?** · **Quando é o seu aniversário?** → **É dia dez de março.** · **em** março · **no** dia dez."
      ],
      pt: "Em Portugal se diz **o dia um de maio** (no Brasil: **primeiro de maio**) e se usa mais o nome completo: **segunda-feira**.",
      v: [
        ["segunda-feira", "📅", "O primeiro dia de trabalho da semana, depois do domingo.", "Na segunda-feira eu volto ao trabalho."],
        ["sábado", "🛍️", "O dia depois da sexta. Muita gente não trabalha.", "No sábado a gente vai à feira."],
        ["domingo", "🍖", "O último dia da semana: dia de almoço com a família.", "Domingo tem churrasco na casa da minha tia."],
        ["mês", "🗓️", "Uma das doze partes do ano: janeiro, fevereiro...", "Esse mês eu tô sem dinheiro."],
        ["ano", "🎆", "Doze meses. Começa em primeiro de janeiro.", "Esse ano passou muito rápido!"],
        ["aniversário", "🎂", "O dia em que você nasceu, que se comemora todo ano.", "Quando é o seu aniversário?", "Em Portugal também se diz **fazer anos**: **Faço anos em março.**"],
        ["hoje", "📍", "Este dia, agora.", "Hoje é dia de feira."],
        ["feriado", "🏖️", "Um dia de festa sem trabalho, como o Natal ou o Sete de Setembro.", "Segunda é feriado, oba!"]
      ],
      s: [
        ["Hoje é primeiro de maio.", "primeiro", ["uno", "primer"], "O dia 1 de maio é feriado."],
        ["Eu tenho aula às terças.", "às", ["los", "a"], "Você tem aula toda terça-feira."],
        ["O meu aniversário é em março.", "em", ["no", "de"], "Você nasceu no terceiro mês do ano."],
        ["No sábado a gente vai à praia.", "sábado", ["domingo", "segunda"], "Você fala do dia depois da sexta-feira."]
      ]
    }
  ]
});

PT.UNITS.push({
  id: "u13", t: "Na cidade", e: "🏙️", c: "#0F766E",
  lessons: [
    {
      id: "k1", t: "Onde fica?", e: "🧭",
      ex: [
        "Para perguntar o caminho: [[Com licença, onde fica a farmácia?]] · **Tem um mercado aqui perto?**",
        "**ficar** = estar num lugar (para coisas que não mudam de lugar): **A padaria fica na esquina.**",
        "Para explicar: **siga reto** · **vire à direita** · **vire à esquerda** · **na próxima rua** · **no fim da rua**.",
        "Lugares: **na** farmácia · **na** padaria · **no** banco · **no** mercado. (em + a = **na**, em + o = **no**)",
        "Mais posições: **na frente de** · **atrás de** · **entre** a padaria **e** o banco."
      ],
      pt: "Em Portugal se diz **siga em frente** (no Brasil: **siga reto**). E a padaria muitas vezes é uma **pastelaria**, com café e doces.",
      v: [
        ["farmácia", "💊", "A loja que vende remédios.", "A farmácia fica aberta a noite toda."],
        ["padaria", "🥖", "A loja que faz e vende pão. No Brasil, também tem café e lanche.", "Vou à padaria comprar pão."],
        ["mercado", "🛒", "A loja grande onde a gente compra comida e coisas de casa.", "O mercado fecha às dez da noite.", "Em Portugal: **supermercado**. O **mercado** é a feira com bancas."],
        ["banco", "🏦", "O lugar que guarda o dinheiro das pessoas. Também é um lugar para sentar!", "O banco abre às dez."],
        ["rua", "🛣️", "O caminho na cidade, com casas e lojas dos dois lados.", "Eu moro nessa rua."],
        ["esquina", "🚦", "O lugar onde duas ruas se encontram.", "Tem uma padaria na esquina."],
        ["reto", "⬆️", "Sempre para a frente, sem virar.", "Siga reto até o fim da rua.", "Em Portugal: **em frente**."],
        ["esquerda", "⬅️", "O lado contrário da direita.", "Vire à esquerda depois do banco."]
      ],
      s: [
        ["Com licença, onde fica o banco?", "fica", ["queda", "fico"], "Você está na rua e procura um banco."],
        ["Siga reto e vire à esquerda.", "reto", ["derecho", "certo"], "Uma pessoa explica o caminho para você."],
        ["A farmácia fica na esquina.", "na", ["en la", "no"], "Você explica onde fica a farmácia."],
        ["Tem um mercado aqui perto?", "perto", ["cerca", "longe"], "Você precisa comprar comida e não quer andar muito."]
      ]
    },
    {
      id: "k2", t: "Quanto custa?", e: "🛍️",
      ex: [
        "Para saber o preço: [[Quanto custa essa camiseta?]] · **Quanto é?** · **Tá caro!** · **Tá barato!**",
        "O dinheiro do Brasil é o **real** (plural: **reais**). R$ 49,90 = **quarenta e nove e noventa** ou **quarenta e nove reais e noventa centavos**.",
        "**este / esta** = perto de mim · **esse / essa** = perto de você · **aquele / aquela** = longe. Na conversa, o brasileiro usa **esse** para quase tudo.",
        "Cores: **branco, preto, vermelho, amarelo, verde, azul, cinza, rosa**. A cor muda com a palavra: camiseta **branca**, tênis **branco**. Mas **verde** e **azul** não mudam: camiseta **azul**, tênis **azul**.",
        "Na loja: **Tem num tamanho maior?** · **Posso experimentar?** · [[Vou levar!]]"
      ],
      pt: "Em Portugal: **t-shirt** (camiseta), **calças** no plural e **sapatilhas** para tênis. O dinheiro é o **euro**.",
      v: [
        ["camiseta", "👕", "Uma roupa leve, sem botões, para a parte de cima do corpo.", "Essa camiseta é muito confortável.", "Em Portugal: **t-shirt**."],
        ["calça", "👖", "Uma roupa para as duas pernas, até os pés.", "Essa calça jeans ficou ótima!", "Em Portugal: **calças**, no plural."],
        ["vestido", "👗", "Uma roupa de uma peça só, do ombro até as pernas.", "Ela comprou um vestido vermelho."],
        ["tênis", "👟", "Um sapato confortável para esporte ou para o dia a dia.", "Meu tênis branco está sujo.", "Em Portugal: **sapatilhas** ou **ténis**."],
        ["tamanho", "📏", "A medida de uma roupa: P, M, G...", "Tem esse tamanho em azul?"],
        ["barato", "🏷️", "Que custa pouco dinheiro. O contrário de caro.", "Tá barato, vou levar dois!"],
        ["experimentar", "🪞", "Vestir uma roupa na loja para ver se fica bem.", "Posso experimentar essa calça?"],
        ["real", "💵", "O dinheiro do Brasil. Plural: **reais**.", "Custa vinte reais."]
      ],
      s: [
        ["Quanto custa essa camiseta?", "custa", ["cuesta", "custo"], "Você quer saber o preço na loja."],
        ["Eu quero um vestido vermelho.", "vermelho", ["vermelha", "rojo"], "Você procura um vestido da cor do tomate."],
        ["Ela comprou uma calça preta.", "preta", ["preto", "negra"], "A calça é da cor da noite."],
        ["Posso experimentar esse tênis?", "experimentar", ["probar", "experimento"], "Você quer ver se o tênis fica bom no seu pé."]
      ]
    },
    {
      id: "k3", t: "No restaurante", e: "🍽️",
      ex: [
        "Para pedir: [[Eu queria um suco de laranja.]] · **Pra mim, um prato feito.** · **Me vê um cafezinho?** (bem brasileiro!)",
        "O garçom pergunta: **Mais alguma coisa?** Você responde: **Só isso, obrigado.**",
        "No fim: [[A conta, por favor.]] · **Pode trazer a conta?** No Brasil, a conta muitas vezes já vem com **10%** para o garçom.",
        "No **restaurante por quilo**, você se serve e paga pelo peso do prato. É muito comum no Brasil!",
        "Para levar: **pra viagem**, mesmo sem viajar! **Um pão de queijo pra viagem, por favor.**"
      ],
      pt: "Em Portugal: **a ementa** (o cardápio), **o empregado de mesa** (o garçom), **para levar** (pra viagem). E **um café** é um expresso pequeno.",
      v: [
        ["cardápio", "📋", "A lista das comidas e bebidas do restaurante, com os preços.", "Pode me trazer o cardápio?", "Em Portugal: **ementa**."],
        ["garçom", "🤵", "A pessoa que atende as mesas no restaurante. Mulher: **garçonete**.", "O garçom foi muito simpático.", "Em Portugal: **empregado de mesa**."],
        ["pedir", "🙋", "Dizer o que você quer comer ou beber.", "Você já pediu?"],
        ["conta", "🧾", "O papel com o preço de tudo o que você comeu e bebeu.", "A conta, por favor."],
        ["prato feito", "🍛", "Um almoço simples e barato: arroz, feijão, carne e salada. Também se diz **PF**.", "Eu almoço um prato feito todo dia."],
        ["pra viagem", "🥡", "Para levar e comer em outro lugar.", "Dois pastéis pra viagem, por favor.", "Em Portugal: **para levar**."],
        ["gelo", "🧊", "Água dura e muito fria, para bebidas.", "Um suco sem gelo, por favor."],
        ["garrafa", "🍾", "Um recipiente de vidro ou plástico para bebidas.", "Uma garrafa de água, por favor."]
      ],
      s: [
        ["A conta, por favor.", "conta", ["cuenta", "conto"], "Você terminou de comer e quer pagar."],
        ["Eu queria um suco de laranja.", "queria", ["quiero", "queira"], "Você pede uma bebida com educação."],
        ["Pode me trazer o cardápio?", "cardápio", ["menú", "conta"], "Você acabou de sentar e quer ver as comidas."],
        ["Um pão de queijo pra viagem.", "viagem", ["llevar", "viaje"], "Você vai comer no carro."]
      ]
    }
  ]
});

PT.UNITS.push({
  id: "u14", t: "Corpo e saúde", e: "🩺", c: "#C2410C",
  lessons: [
    {
      id: "s1", t: "Como você está?", e: "😊",
      ex: [
        "Para perguntar: [[Tudo bem?]] · **Como você está?** · **Tá tudo bem com você?**",
        "Sensações com **estar com**: **Estou com fome.** · **Estou com sede.** · **Estou com sono.** · **Estou com frio / calor.** · **Estou com medo.** · **Estou com pressa.**",
        "Sentimentos com **estar** + palavra: **Estou feliz.** · **Ela está triste.** · **Ele está nervoso.**",
        "Na conversa, **estou** vira **tô** e **está** vira **tá**: [[Tô com fome!]]",
        "Lembre: **ser** = como a pessoa é · **estar** = como a pessoa está agora. **Ele é feliz** (na vida) · **Ele está feliz** (hoje)."
      ],
      pt: "Em Portugal é muito comum usar **ter**: **tenho fome**, **tenho frio**, **tenho sono**.",
      v: [
        ["sede", "🥤", "A vontade de beber água.", "Tô com muita sede, tem água?"],
        ["sono", "😴", "A vontade de dormir.", "Depois do almoço, eu fico com sono."],
        ["pressa", "⏱️", "Quando você precisa fazer tudo rápido, sem tempo.", "Desculpa, tô com pressa!"],
        ["medo", "😨", "O que você sente quando acha que algo ruim vai acontecer.", "Meu filho tem medo do escuro."],
        ["feliz", "😊", "Contente, alegre.", "Tô muito feliz de te ver!"],
        ["triste", "😢", "O contrário de feliz.", "Ela ficou triste com a notícia."],
        ["nervoso", "😬", "Agitado, com medo de algo que vai acontecer. No Brasil, também: com raiva.", "Tô nervoso com a entrevista."],
        ["preocupado", "😟", "Pensando muito num problema.", "A mãe ficou preocupada porque ele não ligou."]
      ],
      s: [
        ["Estou com fome.", "com", ["em", "de"], "Você não come nada desde cedo."],
        ["Ela está triste hoje.", "está", ["é", "esta"], "A sua amiga recebeu uma notícia ruim hoje."],
        ["Tô com pressa, tchau!", "pressa", ["prisa", "fome"], "Você vai perder o ônibus."],
        ["Meu pai está preocupado.", "preocupado", ["preocupada", "ocupado"], "O seu pai pensa muito num problema."]
      ]
    },
    {
      id: "s2", t: "No médico", e: "🤒",
      ex: [
        "Para falar de dor: [[Estou com dor de cabeça.]] · **dor de barriga** · **dor de dente** · **dor nas costas**.",
        "Com o verbo **doer**: **Minha cabeça dói.** · **Meus pés doem.** · **Dói aqui.**",
        "Outras frases: **Tô gripado.** · **Tô com febre.** · **Tô com tosse.** · **Me sinto mal.**",
        "Na farmácia: [[Você tem alguma coisa pra dor de cabeça?]] Numa emergência no Brasil, ligue **192**.",
        "O corpo: **a cabeça, o olho, a boca, o braço, a mão, a barriga, a perna, o pé**."
      ],
      pt: "Atenção: em Portugal, **constipado** quer dizer com o nariz entupido, espirrando (no Brasil: **resfriado**). No Brasil, **constipado** é outra coisa: quando o intestino não funciona!",
      v: [
        ["cabeça", "🤕", "A parte de cima do corpo, com os olhos, a boca e o cérebro.", "Tô com dor de cabeça."],
        ["barriga", "🤢", "A parte da frente do corpo, entre o peito e as pernas.", "Comi demais, tô com dor de barriga."],
        ["dente", "🦷", "As partes duras e brancas dentro da boca, para morder.", "Tô com dor de dente."],
        ["braço", "💪", "A parte do corpo entre o ombro e a mão.", "Ele quebrou o braço jogando futebol."],
        ["perna", "🦵", "A parte do corpo que a gente usa para andar.", "Minhas pernas doem depois da corrida."],
        ["febre", "🌡️", "Quando o corpo fica muito quente porque você está doente.", "O menino está com febre."],
        ["remédio", "💊", "O que você toma para ficar bom quando está doente.", "Toma esse remédio de oito em oito horas.", "Em Portugal se diz mais **medicamento**."],
        ["gripe", "🤧", "Uma doença com febre, tosse e nariz escorrendo.", "Tô com gripe, vou ficar em casa."]
      ],
      s: [
        ["Estou com dor de cabeça.", "dor", ["dolor", "doi"], "A sua cabeça dói muito."],
        ["Minha perna dói.", "dói", ["duele", "doem"], "Você machucou a perna jogando bola."],
        ["O menino está com febre.", "febre", ["fiebre", "frio"], "O corpo do menino está muito quente."],
        ["Você tem alguma coisa pra gripe?", "pra", ["para la", "por"], "Você está na farmácia, com tosse e febre."]
      ]
    }
  ]
});
