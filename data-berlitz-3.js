/* Berlitz Português 4: capítulos 9 a 12 (o 12 é revisão) e as cenas das revisões para a conversa com a IA. */
(function () {
  const T = PT.TRACKS.find((t) => t.id === "berlitz4");

  T.units.push({
    id: "bz9", n: 9, t: "Isto é reciclável?", e: "♻️", c: "#15803D",
    d: "Falar sobre o meio ambiente · Descrever fontes de energia · Falar sobre reciclagem e consumo",
    lessons: [
      {
        id: "b9a", t: "Campo ou cidade?", e: "🌍",
        ex: [
          "Para comparar: as **vantagens** (o lado bom) e as **desvantagens** (o lado ruim): [[A cidade tem mais trabalho, mas tem muita poluição.]]",
          "**A maioria das pessoas** + verbo, quase sempre no singular: **A maioria das pessoas mora em cidades.**",
          "**Cada vez mais / cada vez menos**: **Há cada vez mais carros e cada vez menos áreas verdes.**",
          "O **meio ambiente** é a natureza à nossa volta: o ar, a água, as plantas e os animais."
        ],
        pt: "Em Portugal se diz **o ambiente** (sem **meio**), e o trânsito também é o **tráfego**.",
        v: [
          ["meio ambiente", "🌍", "A natureza à nossa volta: ar, água, plantas e animais.", "Temos que proteger o meio ambiente."],
          ["planeta", "🪐", "Um corpo grande que gira em volta do sol. O nosso é a Terra.", "Só temos um planeta."],
          ["natureza", "🍃", "Tudo o que não foi feito pelas pessoas: rios, florestas, animais.", "Adoro estar perto da natureza."],
          ["poluição", "🏭", "Sujeira no ar, na água ou na terra.", "A poluição aqui é muito forte."],
          ["área verde", "🌳", "Um lugar com árvores e plantas na cidade: parques e praças.", "O bairro tem poucas áreas verdes."],
          ["campo", "🌾", "Fora da cidade, onde há fazendas e natureza.", "Meus avós moram no campo."],
          ["trânsito", "🚗", "Os carros que circulam na rua; o engarrafamento.", "O trânsito hoje está horrível."],
          ["vantagem", "➕", "O lado bom de alguma coisa. O lado ruim: **desvantagem**.", "Morar perto do trabalho é uma vantagem."]
        ],
        s: [
          ["A maioria das pessoas mora na cidade.", "mora", ["moran", "moramos"], "Você fala de onde vive a população."],
          ["A poluição está cada vez pior.", "pior", ["peor", "mais mal"], "Você fala do ar da cidade."],
          ["Eu me mudei para o campo.", "campo", ["campiña", "campa"], "Você cansou da cidade grande."],
          ["O trânsito é uma desvantagem da cidade.", "desvantagem", ["desventaja", "desvantage"], "Você fala do lado ruim de morar no centro."]
        ]
      },
      {
        id: "b9b", t: "Fontes de energia", e: "⚡",
        ex: [
          "Energias **não renováveis** (vão acabar um dia): **o petróleo**, **o gás natural**, **o carvão**. Energias **renováveis** (limpas): **solar**, **eólica** (do vento), **hidráulica** (da água).",
          "O Brasil produz muita energia nas **usinas hidrelétricas** e usa **etanol**, feito da cana-de-açúcar, nos carros.",
          "**Graças a** + nome, para causas boas: [[Graças ao vento, o Nordeste produz muita energia.]] · **a + o = ao**, **a + a = à**.",
          "**A longo prazo** = num tempo distante, no futuro: **A longo prazo, a energia solar sai mais barata.**"
        ],
        pt: "Em Portugal se diz **central hidroelétrica**, e o etanol lá é pouco usado.",
        v: [
          ["petróleo", "🛢️", "Um óleo do fundo da terra, usado para fazer gasolina.", "O petróleo não é renovável."],
          ["gás natural", "⛽", "Um gás da terra, usado para cozinhar e para gerar energia.", "O fogão funciona com gás natural."],
          ["energia solar", "☀️", "A energia que vem do sol.", "Instalamos energia solar no telhado."],
          ["energia eólica", "🌬️", "A energia que vem do vento.", "O Nordeste produz muita energia eólica."],
          ["usina hidrelétrica", "💧", "O lugar onde a força da água de um rio vira eletricidade.", "Itaipu é uma usina hidrelétrica enorme."],
          ["renovável", "♻️", "Que não acaba, que a natureza renova.", "O vento é uma energia renovável."],
          ["etanol", "🌱", "Um combustível feito da cana-de-açúcar.", "Meu carro anda com etanol."],
          ["a longo prazo", "🔭", "Num tempo distante, no futuro.", "A longo prazo, vamos economizar."]
        ],
        s: [
          ["Graças ao sol, a conta de luz baixou.", "Graças", ["Gracias", "Grácias"], "Você instalou painéis solares em casa."],
          ["O vento é uma energia renovável.", "renovável", ["renovable", "renovado"], "Você explica a energia eólica."],
          ["O Brasil usa muito etanol.", "etanol", ["etanolo", "etanoles"], "Você fala dos carros brasileiros."],
          ["A longo prazo, vale a pena.", "prazo", ["plazo", "praço"], "Você fala do investimento em energia solar."]
        ]
      },
      {
        id: "b9c", t: "Reciclar", e: "🗑️",
        ex: [
          "A regra dos três erres: **reduzir** o lixo, **reutilizar** o que dá e **reciclar** o resto.",
          "Na hora de separar: **papel e papelão**, **plástico**, **vidro** e **metal** vão para a **coleta seletiva**; o resto vai para o lixo comum.",
          "**Apesar de** mostra um contraste, com um nome ou um infinitivo: [[Apesar de ser mais caro, compro produtos orgânicos.]] · **Apesar da chuva, saímos.**",
          "**Apesar de** + infinitivo = **embora** + subjuntivo: **Apesar de ser caro...** = **Embora seja caro...**"
        ],
        pt: "Em Portugal a lata de lixo é o **caixote do lixo**, e os contêineres de reciclagem são o **ecoponto**.",
        v: [
          ["reciclar", "♻️", "Transformar um material usado em algo novo.", "Aqui em casa a gente recicla tudo."],
          ["reutilizar", "🔁", "Usar outra vez.", "Eu reutilizo as sacolas do mercado."],
          ["reduzir", "📉", "Diminuir, fazer ficar menor.", "Precisamos reduzir o lixo."],
          ["papelão", "📦", "Um papel grosso e duro, o das caixas.", "As caixas de papelão vão para a reciclagem."],
          ["descartável", "🥤", "Que se usa uma vez e se joga fora.", "Evito copos descartáveis."],
          ["lata de lixo", "🗑️", "O recipiente onde se joga o lixo.", "Jogue o papel na lata de lixo."],
          ["coleta seletiva", "🚛", "Recolher o lixo separado por tipo, para reciclar.", "O meu prédio tem coleta seletiva."],
          ["apesar de", "🤷", "Mesmo com: **apesar da chuva**, **apesar de ser caro**.", "Apesar do frio, fomos à praia."]
        ],
        s: [
          ["Apesar de ser caro, eu compro.", "Apesar", ["A pesar", "Apesare"], "Você fala dos produtos orgânicos."],
          ["Apesar da chuva, saímos.", "da", ["de la", "de a"], "Choveu muito, mas vocês foram ao parque."],
          ["Eu reutilizo os potes de vidro.", "reutilizo", ["reutiliso", "reutilizar"], "Você explica o que faz com os potes vazios."],
          ["Os copos descartáveis vão para o lixo.", "descartáveis", ["descartables", "descartável"], "Você fala do problema do plástico."]
        ]
      },
      {
        id: "b9d", t: "Consumo consciente", e: "🛒",
        ex: [
          "Para consumir melhor: comprar **produtos orgânicos** e da região, usar **lâmpadas de baixo consumo**, evitar o **desperdício**.",
          "**Quanto menos..., melhor**: [[Quanto menos plástico, melhor.]] · **Quanto mais cedo, melhor.**",
          "**Prejudicial a** = que faz mal: **O plástico é prejudicial ao meio ambiente.** · **Sustentável** = que não acaba com os recursos.",
          "**Poupar** = **economizar**: **poupar água**, **poupar energia**, **poupar dinheiro**."
        ],
        pt: "Em Portugal se usa mais **poupar** do que economizar, e **desperdício** é igual.",
        v: [
          ["orgânico", "🥬", "Produzido sem agrotóxicos e sem química.", "Só compro verdura orgânica."],
          ["lâmpada", "💡", "O objeto que dá luz.", "Troquei todas as lâmpadas da casa."],
          ["de baixo consumo", "🔋", "Que gasta pouca energia.", "Essas lâmpadas são de baixo consumo."],
          ["desperdício", "🚮", "Gastar ou jogar fora sem necessidade.", "Jogar comida fora é um desperdício."],
          ["poupar", "🐷", "Economizar, gastar menos.", "Precisamos poupar água."],
          ["prejudicial", "☠️", "Que faz mal.", "O cigarro é prejudicial à saúde."],
          ["sustentável", "🌱", "Que respeita o meio ambiente e não acaba com os recursos.", "A empresa tem um projeto sustentável."],
          ["fresco", "🍅", "Recém-colhido ou recém-feito, não congelado.", "Os legumes da feira são fresquinhos."]
        ],
        s: [
          ["Quanto menos plástico, melhor.", "menos", ["menor", "meno"], "Você fala do lixo da sua casa."],
          ["O plástico é prejudicial ao meio ambiente.", "prejudicial", ["perjudicial", "prejudiciais"], "Você explica por que evita sacolas."],
          ["Troquei as lâmpadas para poupar energia.", "poupar", ["ahorrar", "poupa"], "Você explica a conta de luz mais baixa."],
          ["Jogar comida fora é um desperdício.", "desperdício", ["desperdicio", "desperdiço"], "Você vê muita comida no lixo."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz10", n: 10, t: "Atendimento ao cliente, bom dia!", e: "☎️", c: "#C2410C",
    d: "Descrever um produto · Responder às necessidades dos clientes · Falar das relações com os clientes",
    lessons: [
      {
        id: "b10a", t: "De que é feito?", e: "🪑",
        ex: [
          "Para o material, use **de** + material: **uma mesa de madeira**, **uma cadeira de metal**, **um copo de vidro**. Pergunta: [[De que é feito?]]",
          "Para descrever: **leve / pesado**, **resistente / frágil**, **prático**, **moderno / obsoleto**.",
          "O **superlativo -íssimo** deixa a palavra mais forte: **caro** → **caríssimo** · **barato** → **baratíssimo** · **simpático** → **simpaticíssimo** · **muito** → **muitíssimo**.",
          "Cuidado com a escrita: **pouco** → **pouquíssimo**, **rico** → **riquíssimo** (o **c** vira **qu**)."
        ],
        pt: "Em Portugal o -íssimo é igual, e soa muito natural: **pesadíssimo**, **levíssimo**.",
        v: [
          ["madeira", "🪵", "O material das árvores, usado nos móveis.", "A mesa é de madeira."],
          ["metal", "🔩", "Um material duro, como o ferro e o alumínio.", "As cadeiras são de metal."],
          ["vidro", "🪟", "O material transparente das janelas e das garrafas.", "Cuidado, a mesa é de vidro."],
          ["tecido", "🧵", "O material das roupas e das cortinas.", "Esse tecido é muito macio."],
          ["leve", "🪶", "Que pesa pouco.", "Essa bicicleta é bem leve."],
          ["resistente", "🛡️", "Forte, que não quebra fácil.", "A mala é leve e resistente."],
          ["obsoleto", "📼", "Velho demais, que não serve mais.", "O meu celular já está obsoleto."],
          ["baratíssimo", "🤑", "Muito, muito barato.", "Comprei baratíssimo na promoção."]
        ],
        s: [
          ["A mesa é de madeira.", "madeira", ["madera", "madeiro"], "Um cliente pergunta sobre o material do móvel."],
          ["Esse vestido está caríssimo!", "caríssimo", ["carísimo", "caríssima"], "Você vê o preço na etiqueta."],
          ["Esse notebook é levíssimo.", "levíssimo", ["levísimo", "levessimo"], "Você mostra o seu computador novo."],
          ["O meu computador está obsoleto.", "obsoleto", ["obsoleta", "absoluto"], "Você explica por que quer um novo."]
        ]
      },
      {
        id: "b10b", t: "Em que posso ser útil?", e: "🛎️",
        ex: [
          "O que o cliente quer ouvir: [[Em que posso ser útil?]] · **Posso lhe mostrar.** · **Compreendo. Vou resolver isso agora mesmo.** · **Não temos no estoque, mas posso encomendar.**",
          "O que o cliente não quer ouvir: **Não sei.** · **Não podemos ajudar.** · **Vou transferir a ligação.** · **Todos os nossos atendentes estão ocupados.**",
          "**Quer que eu lhe mostre?** (**querer que** + subjuntivo, do capítulo cinco) · **Você receberá uma resposta até as três.** (futuro simples, formal)",
          "O **SAC** é o **Serviço de Atendimento ao Consumidor**: o telefone ou o chat para reclamar ou tirar dúvidas."
        ],
        pt: "Em Portugal se diz **apoio ao cliente** em vez de SAC, e **portes de envio** em vez de frete.",
        v: [
          ["Em que posso ser útil?", "🛎️", "Pergunta educada de quem atende: **como posso ajudar?**", "Bom dia! Em que posso ser útil?"],
          ["SAC", "☎️", "Serviço de Atendimento ao Consumidor: o telefone para clientes.", "Liguei para o SAC da loja."],
          ["pedido", "🧾", "Uma compra que você fez e que ainda vai receber.", "O número do seu pedido, por favor?"],
          ["disponível", "🟢", "Que está à venda, ou livre para usar.", "Esse modelo não está disponível."],
          ["encomendar", "📲", "Pedir um produto que a loja ainda não tem.", "Podemos encomendar para você."],
          ["frete", "🚚", "O preço do envio de um produto.", "O frete é grátis acima de cem reais."],
          ["cobrar", "💳", "Pedir o pagamento de algo.", "Me cobraram duas vezes!"],
          ["peça", "🧩", "Uma parte de um aparelho ou de uma máquina.", "Falta uma peça na impressora."]
        ],
        s: [
          ["Em que posso ser útil?", "útil", ["util", "útiles"], "Você atende um cliente na loja."],
          ["Esse produto não está disponível.", "disponível", ["disponible", "disponíveis"], "Você explica ao cliente que o modelo acabou."],
          ["Quer que eu lhe mostre?", "mostre", ["muestre", "mostro"], "Você oferece ajuda ao cliente."],
          ["Me cobraram o frete duas vezes.", "cobraram", ["cobraron", "cobraran"], "Você liga para o SAC para reclamar."]
        ]
      },
      {
        id: "b10c", t: "Uma reclamação", e: "😤",
        ex: [
          "Para reclamar: [[Eu gostaria de fazer uma reclamação.]] · **O produto chegou com defeito.** · **Me cobraram duas vezes.** · **O pedido ainda não chegou.**",
          "Quem atende responde: **Peço desculpas pelo transtorno.** · **Vamos solucionar isso imediatamente.** · **Podemos trocar o produto.**",
          "**Puxa!** e **Poxa!** mostram chateação ou surpresa: **Puxa, de novo?**",
          "E não esqueça: **O cliente sempre tem razão!** · **estar satisfeito** ou **insatisfeito** com algo."
        ],
        pt: "Em Portugal se diz **reclamação** igual, e toda loja tem o **Livro de Reclamações**.",
        v: [
          ["reclamação", "📣", "Quando o cliente diz que não está satisfeito.", "Quero fazer uma reclamação."],
          ["insatisfeito", "😠", "Que não está contente com algo.", "O cliente ficou muito insatisfeito."],
          ["transtorno", "😩", "Um problema, um incômodo.", "Desculpe o transtorno."],
          ["Puxa!", "😮", "Para mostrar surpresa ou chateação. Também: **Poxa!**", "Puxa, o pedido atrasou de novo!"],
          ["endereço de entrega", "📬", "O lugar onde o produto deve chegar.", "O endereço de entrega estava errado."],
          ["erro", "❌", "Uma coisa feita de forma errada.", "Houve um erro no seu pedido."],
          ["solucionar", "🛠️", "Resolver um problema.", "Vamos solucionar o seu problema hoje."],
          ["pedir desculpas", "🙇", "Dizer que sente muito por um erro.", "A empresa pediu desculpas."]
        ],
        s: [
          ["Quero fazer uma reclamação.", "reclamação", ["reclamación", "reclamo"], "O seu pedido chegou quebrado."],
          ["Desculpe o transtorno.", "transtorno", ["trastorno", "transtorna"], "Você trabalha no SAC e o cliente está chateado."],
          ["Houve um erro no endereço.", "erro", ["error", "erra"], "O atendente explica por que o produto não chegou."],
          ["A empresa pediu desculpas ao cliente.", "desculpas", ["disculpas", "desculpes"], "Você conta como terminou a sua reclamação."]
        ]
      },
      {
        id: "b10d", t: "Qualquer um serve", e: "🎲",
        ex: [
          "**Qualquer** = não importa qual: [[Qualquer cor serve.]] No plural é **quaisquer**: **quaisquer dúvidas, me ligue**.",
          "**Qualquer um / qualquer uma** = não importa qual, ou não importa quem: **— Qual você quer? — Qualquer um.** · **Ele não empresta o carro a qualquer um.**",
          "Depois do nome, **qualquer** soa negativo: **um hotel qualquer** = um hotel sem nada de especial.",
          "Qualidades de um bom atendente: **eficaz**, **rápido**, **paciente**, **honesto**, **confiável** e **profissional**."
        ],
        pt: "Em Portugal é igual: **qualquer / quaisquer**. E **tanto faz** também se diz por lá.",
        v: [
          ["qualquer", "🎲", "Não importa qual: **qualquer dia**.", "Pode me ligar a qualquer hora."],
          ["quaisquer", "🃏", "Plural de **qualquer**: **quaisquer perguntas**.", "Estou à disposição para quaisquer dúvidas."],
          ["qualquer um", "👤", "Não importa qual, ou não importa quem.", "Qualquer um pode participar."],
          ["eficaz", "🎯", "Que funciona bem, que dá resultado.", "Ela é uma atendente muito eficaz."],
          ["paciente", "⏳", "Que espera com calma, sem ficar nervoso.", "É preciso ser paciente com os clientes."],
          ["honesto", "😇", "Que fala a verdade e não engana.", "Ele é um vendedor honesto."],
          ["confiável", "🔒", "Em quem dá para confiar.", "Essa loja é muito confiável."],
          ["profissional", "👔", "Que faz o trabalho com seriedade e competência.", "O atendimento foi muito profissional."]
        ],
        s: [
          ["Qualquer cor serve.", "Qualquer", ["Cualquier", "Quaisquer"], "O vendedor pergunta que cor você quer."],
          ["Me ligue se tiver quaisquer dúvidas.", "quaisquer", ["cualesquiera", "qualquers"], "Você termina um atendimento por telefone."],
          ["Ele não empresta o carro a qualquer um.", "qualquer", ["cualquier", "quaisquer"], "Você fala do seu irmão, que tem ciúme do carro."],
          ["É preciso ser paciente com os clientes.", "paciente", ["paciencia", "pacientes"], "Você dá uma dica a um atendente novo."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz11", n: 11, t: "Esse filme é dublado?", e: "🎬", c: "#7E22CE",
    d: "Falar sobre programas de televisão · Falar sobre um filme · Dar a sua opinião sobre um filme",
    lessons: [
      {
        id: "b11a", t: "O que está passando?", e: "📺",
        ex: [
          "Na TV, **passar** = ser mostrado: [[O que está passando agora?]] · **Vai passar um jogo às nove.** · **Esse programa passa todo domingo.**",
          "Tipos de programa: **telejornal**, **novela**, **seriado** (ou **série**), **documentário**, **programa de auditório**, **jogo de futebol**.",
          "**Mudar de canal** = trocar o canal. **Estrear** = passar pela primeira vez: **A série estreia amanhã.**",
          "A **Rede Globo** é a maior emissora do Brasil e uma das maiores produtoras de novelas do mundo."
        ],
        pt: "Em Portugal se diz **dar** no lugar de **passar**: **O que está a dar na televisão?** E o controle remoto lá é o **comando**.",
        v: [
          ["programação", "🗓️", "A lista dos programas de um canal, com os horários.", "Vou ver a programação de hoje."],
          ["telejornal", "📰", "O programa de notícias na TV.", "Meus pais veem o telejornal toda noite."],
          ["seriado", "🍿", "Uma série de TV, com vários episódios.", "Estou viciado nesse seriado."],
          ["programa de auditório", "👏", "Programa de TV com plateia, jogos e música, bem típico do Brasil.", "O programa de auditório passa no domingo."],
          ["controle remoto", "🎛️", "O aparelho para mudar de canal de longe.", "Cadê o controle remoto?"],
          ["mudar de canal", "🔄", "Trocar o canal da TV.", "Posso mudar de canal?"],
          ["estrear", "🌟", "Passar ou mostrar pela primeira vez.", "A novela nova estreia hoje."],
          ["episódio", "🎬", "Cada parte de uma série.", "Falta só um episódio para acabar."]
        ],
        s: [
          ["O que está passando na TV?", "passando", ["pasando", "passado"], "Você liga a televisão à noite."],
          ["Posso mudar de canal?", "mudar", ["cambiar", "mude"], "O programa está chato."],
          ["A série estreia na sexta.", "estreia", ["estrena", "estréia"], "Você conta a novidade para o seu amigo."],
          ["Cadê o controle remoto?", "remoto", ["remota", "mando"], "Você quer mudar de canal e não acha o controle."]
        ]
      },
      {
        id: "b11b", t: "Assim que eu chegar", e: "⏳",
        ex: [
          "Para o futuro, depois de **quando**, **assim que** e **enquanto**, use o **futuro do subjuntivo**, como depois do **se** no capítulo quatro: [[Assim que eu chegar, te ligo.]]",
          "**quando** = no momento em que: **Quando você tiver dezoito anos, vai poder dirigir.** · **assim que** = logo depois que: **Assim que terminar, eu saio.**",
          "**enquanto** = durante o tempo em que: **Enquanto eu não chegar em casa, não vou saber.**",
          "Cuidado com **ver** e **vir**: **quando eu vir** (de **ver**!) e **quando eu vier** (de **vir**): **Quando você vir a Ana, diga oi.**",
          "Em espanhol se usa o presente do subjuntivo: **cuando llegue** → **quando eu chegar**."
        ],
        pt: "Em Portugal é igual: **quando chegar, telefono**. Lá se diz mais **telefonar** do que **ligar**.",
        v: [
          ["assim que", "⚡", "Logo que, imediatamente depois de.", "Assim que puder, eu te respondo."],
          ["enquanto", "⌛", "Durante o tempo em que.", "Enquanto você cozinha, eu arrumo a mesa."],
          ["da próxima vez que", "🔜", "Na próxima ocasião em que.", "Da próxima vez que eu for, te aviso."],
          ["vier", "🚪", "Futuro do subjuntivo de **vir**: **quando você vier**.", "Quando você vier, te mostro a cidade."],
          ["estiver", "📍", "Futuro do subjuntivo de **estar**: **quando eu estiver**.", "Quando eu estiver em casa, te ligo."],
          ["souber", "💡", "Futuro do subjuntivo de **saber**: **assim que eu souber**.", "Assim que eu souber, te conto."],
          ["fizer", "🔨", "Futuro do subjuntivo de **fazer**: **quando fizer sol**.", "Quando fizer sol, vamos à praia."],
          ["der", "🎁", "Futuro do subjuntivo de **dar**: **quando der** (= quando for possível).", "Quando der, me manda uma mensagem."]
        ],
        s: [
          ["Assim que eu chegar, te ligo.", "chegar", ["llegue", "chego"], "Você está saindo do trabalho e fala com a sua mãe."],
          ["Quando você vier, traga o livro.", "vier", ["venga", "vem"], "Você combina uma visita com um amigo."],
          ["Enquanto não terminar, não saio.", "terminar", ["termine", "termino"], "Os seus amigos chamam você para sair, mas você está trabalhando."],
          ["Assim que eu souber, te conto.", "souber", ["sepa", "sei"], "A sua amiga quer saber o resultado da entrevista."]
        ]
      },
      {
        id: "b11c", t: "Sobre o que é o filme?", e: "🎥",
        ex: [
          "Para perguntar: [[Sobre o que é o filme?]] Para responder: **É sobre uma família que...** · **Conta a história de...**",
          "Gêneros: **comédia**, **drama**, **filme de ação**, **filme de terror**, **ficção científica**, **comédia romântica**, **documentário**, **filme policial**.",
          "**Quem está no filme?** · **O protagonista é...** · **Quem faz o papel de...?** · **Quem dirigiu?** (o diretor ou a diretora)",
          "**Baseado em fatos reais** = a história aconteceu de verdade. Também se diz **baseado numa história verídica**."
        ],
        pt: "Em Portugal os gêneros têm os mesmos nomes; só se escreve **género**, com acento agudo.",
        v: [
          ["gênero", "🎭", "O tipo de filme: comédia, drama, terror...", "Qual é o seu gênero de filme favorito?"],
          ["comédia", "😂", "Um filme engraçado.", "Quero ver uma comédia hoje."],
          ["drama", "😢", "Um filme sério e emocionante, às vezes triste.", "Esse drama me fez chorar."],
          ["filme de terror", "👻", "Um filme que dá medo.", "Não vejo filme de terror sozinho."],
          ["filme de ação", "💥", "Um filme com lutas, perseguições e explosões.", "Ele adora filme de ação."],
          ["ficção científica", "👽", "Histórias sobre o futuro, a ciência e o espaço.", "Gosto muito de ficção científica."],
          ["protagonista", "🦸", "O personagem principal de uma história.", "A protagonista é uma médica."],
          ["baseado em fatos reais", "📚", "Que conta uma história que aconteceu de verdade.", "O filme é baseado em fatos reais."]
        ],
        s: [
          ["Sobre o que é o filme?", "Sobre", ["Acerca", "Sobra"], "O seu amigo quer ir ao cinema e você quer saber mais."],
          ["É uma comédia muito engraçada.", "comédia", ["comedia", "comédio"], "Você recomenda um filme."],
          ["O protagonista é um ator brasileiro.", "protagonista", ["protagonisto", "protagonistas"], "Você fala do elenco."],
          ["Esse filme é baseado em fatos reais.", "baseado", ["basado", "baseada"], "Você conta que a história aconteceu de verdade."]
        ]
      },
      {
        id: "b11d", t: "Dublado ou legendado?", e: "🍿",
        ex: [
          "**Dublado** = com as vozes em português. **Legendado** = na língua original, com o texto embaixo: [[Prefiro filme legendado.]]",
          "No cinema: a **sessão** (o horário) · a **última sessão** · o **ingresso** · a **pipoca** · o **trailer** (a prévia).",
          "**Estrangeiro** = de outro país: **filme estrangeiro**, **língua estrangeira**.",
          "Para combinar: **Vamos na sessão das oito?** · **Essa não, termina muito tarde.** · **As críticas são ótimas!**"
        ],
        pt: "Em Portugal quase tudo no cinema é **legendado**; só os desenhos animados são **dobrados** (= dublados).",
        v: [
          ["dublado", "🗣️", "Com as vozes gravadas em português.", "As crianças preferem filme dublado."],
          ["legendado", "💬", "Na língua original, com o texto na tela.", "O filme é em francês, legendado."],
          ["versão original", "🎞️", "O filme na língua em que foi feito.", "Gosto de ver na versão original."],
          ["sessão", "🕗", "Cada horário em que o filme passa no cinema.", "Vamos na sessão das sete?"],
          ["trailer", "🎥", "Um vídeo curto que mostra partes do filme.", "O trailer parece ótimo!"],
          ["estrangeiro", "🌎", "De outro país.", "Adoro filmes estrangeiros."],
          ["pipoca", "🍿", "Milho estourado, a comida do cinema.", "Vou comprar pipoca e refrigerante."],
          ["crítica", "⭐", "A opinião dos especialistas sobre um filme.", "As críticas do filme são excelentes."]
        ],
        s: [
          ["O filme é dublado?", "dublado", ["doblado", "dublada"], "Você está comprando o ingresso."],
          ["Não gosto de ler legendas.", "legendas", ["subtítulos", "legendos"], "Você prefere filme dublado."],
          ["Vamos na sessão das oito?", "sessão", ["sesión", "seção"], "Você combina o horário com uma amiga."],
          ["Adoro ver filmes estrangeiros.", "estrangeiros", ["extranjeros", "estranjeiros"], "Você fala do seu gosto por cinema."]
        ]
      },
      {
        id: "b11e", t: "O que você achou?", e: "💭",
        ex: [
          "Para pedir opinião: [[O que você achou do filme?]] Para responder: **Achei ótimo!** · **Achei o final previsível.** (achar + coisa + adjetivo)",
          "Opiniões boas: **emocionante**, **divertido**, **imperdível**. Ruins: **sem graça**, **chato**, **cheio de clichês**, **decepcionante**.",
          "**Emprestar** = dar por um tempo: **Ela me emprestou o livro.** · **Pedir emprestado** = pedir para usar por um tempo: **Pedi o livro emprestado a ela.** Depois: **devolver**.",
          "Cuidado, portunhol! O **prestar** do espanhol é **emprestar** em português. Em português, **prestar** é outra coisa: **prestar atenção**, **não presta** (= é ruim)."
        ],
        pt: "Em Portugal também se diz **emprestar** e **pedir emprestado**.",
        v: [
          ["O que você achou?", "🧐", "Pergunta para saber a opinião de alguém.", "O que você achou do final?"],
          ["sem graça", "😐", "Chato, sem nada de interessante ou de engraçado.", "A comédia foi meio sem graça."],
          ["emocionante", "🥹", "Que dá uma emoção forte.", "O final foi muito emocionante."],
          ["decepcionado", "😞", "Triste porque algo foi pior do que você esperava.", "Fiquei decepcionado com o filme."],
          ["clichê", "🥱", "Uma ideia repetida demais, sem originalidade.", "O filme é cheio de clichês."],
          ["imperdível", "🏆", "Tão bom que você não pode perder.", "Esse filme é imperdível!"],
          ["emprestar", "🤲", "Dar algo para alguém usar por um tempo.", "Você me empresta o seu carregador?"],
          ["pedir emprestado", "🙏", "Pedir para usar algo de alguém por um tempo.", "Pedi um guarda-chuva emprestado."]
        ],
        s: [
          ["Achei o filme muito emocionante.", "Achei", ["Hallé", "Pensei"], "Você conta o que sentiu no cinema."],
          ["Você me empresta o seu livro?", "empresta", ["presta", "emprestas"], "Você quer ler o livro do seu colega."],
          ["Fiquei decepcionado com o final.", "decepcionado", ["decepcionando", "deceptionado"], "O final do filme foi muito ruim."],
          ["A comédia foi meio sem graça.", "graça", ["gracia", "graças"], "Você não riu nenhuma vez."]
        ]
      }
    ]
  });

  T.units.push({
    id: "bz12", n: 12, t: "Revisão: capítulos 7 a 11", e: "🔁", c: "#334155",
    d: "Uma lição de revisão e seis cenas para praticar com a IA, como no livro",
    scenes: ["bz-c7", "bz-c8", "bz-c9", "bz-c10", "bz-c11", "bz-c12"],
    lessons: [
      {
        id: "b12a", t: "Mais cenas da vida real", e: "🎭",
        ex: [
          "Revisão dos capítulos 7 a 11: convites e festas, notícias, meio ambiente, atendimento ao cliente e cinema.",
          "Gramática para revisar: **condicional de cortesia** (**teria, poderia, seria possível**) · **discurso indireto** (**disse que era**) · **graças a / apesar de** · **qualquer / quaisquer** · **assim que / quando + futuro do subjuntivo** · **emprestar / pedir emprestado**.",
          "Para mudar um compromisso: [[Vou ter que adiar a reunião.]] · **Você está livre amanhã de manhã?** · **Deixa eu ver a minha agenda.**",
          "Depois desta lição, faça as **cenas** com a IA, logo abaixo na trilha."
        ],
        pt: "Em Portugal **adiar** e **agenda** são iguais, e o suporte técnico é o **apoio técnico**.",
        v: [
          ["agenda", "📒", "Onde você anota os seus compromissos.", "Deixa eu ver a minha agenda."],
          ["estar livre", "🆓", "Não ter compromisso, ter tempo.", "Você está livre na quinta à noite?"],
          ["adiar", "⏭️", "Mudar para uma data mais tarde.", "Vamos ter que adiar a reunião."],
          ["gasto", "💸", "O dinheiro que se gasta com algo.", "Esse gasto não está no orçamento."],
          ["suporte técnico", "🧑‍💻", "O serviço que ajuda com computadores e aparelhos.", "Liguei para o suporte técnico."],
          ["danificado", "🥀", "Estragado, com algum dano.", "Duas impressoras chegaram danificadas."],
          ["ouvir dizer", "👂", "Saber de algo pelos outros: **ouvi dizer que...**", "Ouvi dizer que o filme é ótimo."],
          ["deitar-se", "🛏️", "Ir para a cama.", "Durante a semana, me deito cedo."]
        ],
        s: [
          ["Vou ter que adiar a reunião.", "adiar", ["aplazar", "adia"], "Houve um incêndio perto do escritório."],
          ["Você está livre amanhã de manhã?", "livre", ["libre", "livres"], "Você quer convidar um amigo para tomar café."],
          ["Ouvi dizer que o filme é ótimo.", "dizer", ["decir", "dito"], "Você sugere um filme para a sua amiga."],
          ["Duas impressoras chegaram danificadas.", "danificadas", ["dañadas", "danificados"], "Você liga para o suporte técnico."]
        ]
      }
    ]
  });

  /* Cenas das revisões (capítulos 6 e 12): o aluno faz o papel da ficha A e a IA faz a ficha B.
     Mesmo formato de PT.SCENES; aparecem na unidade de revisão da trilha e na aba Conversa. */
  T.scenes.push(
    {
      id: "bz-c1", unit: "bz6", e: "🩹", t: "Uma queda na rua",
      d: "Você está atrasado para uma reunião importante, escorrega na rua e bate a cabeça. Sangra um pouco, mas você acha que não é grave: quer passar numa farmácia e ir para o escritório. Uma pessoa que viu tudo vem falar com você.",
      who: "Márcia",
      role: "Você é Márcia, 45 anos, enfermeira, que estava passando na rua e viu o aluno escorregar e bater a cabeça no chão. A cabeça está sangrando bastante, e você sabe que machucados na cabeça podem ser graves. Faça perguntas (está tonto? dói? enxerga bem?), ofereça ajuda e tente convencer o aluno a ir ao pronto-socorro ou a chamar o SAMU, em vez de ir trabalhar.",
      open: "Nossa, que tombo! Tá tudo bem? Espera, não levanta ainda... deixa eu ver essa cabeça. Tá sangrando!"
    },
    {
      id: "bz-c2", unit: "bz6", e: "💡", t: "O eletricista quer mudar o horário",
      d: "Sábado. Você tem que ir ao correio, ao mecânico e à lavanderia, e o mecânico e o correio fecham ao meio-dia. O eletricista vem à uma da tarde, e o conserto vai demorar pelo menos duas horas. São quinze para as dez, você está saindo de casa e o celular toca.",
      who: "Seu Valdir",
      role: "Você é Seu Valdir, 50 anos, eletricista, simpático e falante. Você marcou um conserto complicado de duas horas na casa do aluno à uma da tarde, mas surgiu outro serviço à tarde, e agora você quer adiantar a visita para as dez e meia da manhã. São quinze para as dez. Peça o favor com educação e negocie com o aluno, que tem tarefas na rua antes do meio-dia.",
      open: "Alô, bom dia! Aqui é o Valdir, o eletricista. Tudo bem? Olha, queria te pedir um favor..."
    },
    {
      id: "bz-c3", unit: "bz6", e: "📊", t: "A sala de reuniões",
      d: "Você é supervisor de marketing e faz uma apresentação hoje às dez. Está nervoso, mas bem preparado: reservou a melhor sala de reuniões, com o computador, o microfone, a tela grande e os slides prontos. As outras duas salas do escritório são pequenas e não têm tela grande. O seu celular toca.",
      who: "Roberto, do RH",
      role: "Você é Roberto, diretor de RH da empresa do aluno. Você tem que fazer uma reunião urgente, de última hora, hoje às dez, e precisa da sala grande por causa da tela. Mas o aluno reservou essa sala para uma apresentação. Ligue, explique a situação e peça a sala com muita educação (use poderia, seria possível, gostaria). Procurem juntos uma solução.",
      open: "Oi, bom dia! Aqui é o Roberto, do RH. Desculpa incomodar... você teria um minutinho?"
    },
    {
      id: "bz-c4", unit: "bz6", e: "🎂", t: "O aniversário do vovô",
      d: "Você está organizando um almoço de família para o aniversário do seu avô e já falou com quase todo mundo. A melhor data é sábado, dia doze, ao meio-dia. Na semana seguinte você viaja a negócios e só volta no sábado, dia dezenove, às cinco da tarde. Ligue para o seu irmão para ver se ele pode no dia doze.",
      who: "Duda, seu irmão",
      role: "Você é Duda, o irmão mais novo do aluno. Você trabalhou muito este mês e está muito cansado. Do dia onze ao dia treze você vai esquiar em Bariloche, na Argentina, com os amigos: uma viagem que levou meses para planejar e que você não quer cancelar. O aluno vai ligar sobre o aniversário do avô. Explique a sua situação e tente achar outra data.",
      open: "Alô? Oi! Que surpresa! Tudo bem por aí?"
    },
    {
      id: "bz-c5", unit: "bz6", e: "✈️", t: "Mudar a data da viagem",
      d: "Você reservou uma viagem à Europa com a sua família, do dia primeiro ao dia quinze do mês que vem, numa oferta especial do site Superviagens. Por causa de uma reunião de trabalho, você precisa voltar um dia antes. Ligue para o atendimento ao cliente.",
      who: "Patrícia, da Superviagens",
      role: "Você é Patrícia, atendente do site de viagens Superviagens. Na semana passada houve uma promoção de duas semanas na Europa para o mês que vem: do dia primeiro ao quinze, ou do dezesseis ao trinta e um, pelo mesmo preço. Normalmente não é possível alterar uma reserva depois de feita. Seja educada e profissional, explique as regras e procure uma solução (uma taxa, outro voo, trocar de período).",
      open: "Superviagens, boa tarde! Meu nome é Patrícia. Em que posso ser útil?"
    },
    {
      id: "bz-c6", unit: "bz6", e: "💬", t: "Agora é a sua vez! (1)",
      d: "Um bate-papo de revisão dos capítulos 1 a 5: acidentes, favores e tarefas, apresentações, família e férias. A professora pergunta, e você conta as suas experiências.",
      who: "Professora Clara",
      role: "Você é Clara, professora de português, simpática e paciente. Faça uma conversa de revisão com estes temas, um de cada vez: um acidente que o aluno teve ou viu (ambulância? gesso? muletas? quanto tempo para se recuperar?), favores e tarefas do dia a dia, a última apresentação que ele fez ou viu, a família dele (família grande? filho único? reuniões de família?) e as últimas férias ou as férias dos sonhos. Faça UMA pergunta por vez e reaja ao que ele conta antes de mudar de tema.",
      open: "Oi! Hoje é dia de revisão. Vamos começar: você já teve algum acidente? O que aconteceu?"
    },
    {
      id: "bz-c7", unit: "bz12", e: "☕", t: "Café da manhã ou jantar?",
      d: "Hoje é terça, dia três de julho. Você quer ver uma amiga antes das suas férias, que vão do dia quinze ao dia vinte e nove. Você trabalha das nove às seis, mas está livre no café da manhã e no jantar. Durante a semana, você não gosta de se deitar depois das dez da noite (no fim de semana, depois das onze). Ligue e convide.",
      who: "Júlia",
      role: "Você é Júlia, amiga do aluno. Você trabalha das nove às cinco e está livre para café da manhã ou jantar, mas a sua agenda deste mês está cheia: invente compromissos em vários dias (academia, aula de inglês, aniversário da sua mãe, uma viagem a trabalho). O aluno vai ligar para convidar você. Atenda e tente achar um dia que dê para os dois.",
      open: "Alô? Oi! Quanto tempo! Tudo bem com você?"
    },
    {
      id: "bz-c8", unit: "bz12", e: "🔥", t: "Incêndio perto do escritório",
      d: "São sete da manhã. Você acabou de ouvir no rádio que há um incêndio grande no prédio ao lado do seu escritório: as ruas estão fechadas, há muitos bombeiros, e a polícia não vai deixar ninguém passar o dia todo. Você tem uma reunião às dez no escritório e precisa adiá-la para amanhã às nove. Ligue para o seu colega.",
      who: "Marcos",
      role: "Você é Marcos, colega de trabalho do aluno. São sete da manhã, você acabou de tomar banho e ainda não sabe de nada. Vocês têm uma reunião às dez no escritório. O aluno vai ligar: reaja à notícia com surpresa, faça perguntas (o que o jornalista disse? houve vítimas? as ruas estão fechadas?) e combinem a nova data.",
      open: "Alô? Bom dia... Nossa, que cedo! Aconteceu alguma coisa?"
    },
    {
      id: "bz-c9", unit: "bz12", e: "♻️", t: "Reciclagem no escritório",
      d: "Você coordena uma equipe numa empresa pequena. Na semana passada, a equipe pediu ao gerente duas despesas: trocar a empresa de limpeza (ela não recicla nada e usa produtos químicos que dão dor de cabeça; custa vinte e cinco reais a mais por mês) e comprar latas de lixo para reciclar o papel (setenta reais). O telefone toca: é o gerente.",
      who: "Seu Augusto, o gerente",
      role: "Você é Augusto, gerente de uma empresa pequena. Na semana passada, a equipe do aluno pediu: (1) trocar a empresa de limpeza, que não recicla e usa produtos químicos perigosos, por vinte e cinco reais a mais por mês; (2) comprar latas de lixo para a coleta seletiva, por setenta reais. Você gosta da ideia da reciclagem, mas acha que esses gastos não se justificam agora, por causa da situação econômica da empresa. Ligue e explique. O aluno vai tentar convencer você; mude de ideia só se os argumentos forem bons. Use apesar de, graças a e embora quando fizer sentido.",
      open: "Oi, aqui é o Augusto. Tudo bem? Recebi a mensagem da sua equipe sobre a limpeza e as latas de lixo. Podemos conversar?"
    },
    {
      id: "bz-c10", unit: "bz12", e: "🖨️", t: "Impressoras danificadas",
      d: "Chegaram três computadores e três impressoras novas no seu escritório, com duas semanas de atraso, e isso causou muitos problemas. Você é o responsável pelos equipamentos e, ao abrir as caixas, viu que duas impressoras chegaram danificadas. O seu chefe está muito chateado. Ligue para o suporte ao cliente para reclamar.",
      who: "Fernanda, do suporte",
      role: "Você é Fernanda, do suporte ao cliente de uma empresa de computadores. Nas últimas semanas, o sistema de envio pelos correios não funcionou bem e muitas encomendas chegaram atrasadas; o problema acabou de ser resolvido. Os clientes estão reclamando. Seja paciente e profissional: peça desculpas, peça o número do pedido e ofereça soluções (trocar as impressoras, a empresa pagar o frete, um desconto).",
      open: "Suporte ao cliente, bom dia! Aqui é a Fernanda. Em que posso ser útil?"
    },
    {
      id: "bz-c11", unit: "bz12", e: "🎬", t: "Que filme vamos ver?",
      d: "Você combinou de ir ao cinema com um amigo e agora vocês têm que escolher o filme. Hoje passam quatro: um de ação, um romântico, um policial e um drama. Você não gosta de comédias românticas, já viu o drama e ouviu dizer que o policial não é muito bom. O seu amigo acabou de chegar.",
      who: "Bruno",
      role: "Você é Bruno, amigo do aluno. Vocês combinaram de ir ao cinema. Estão passando quatro filmes: um de ação, um romântico, um policial e um drama. Você não gosta de filmes de ação, já viu o drama e ouviu dizer que o policial é ótimo. Discutam até escolher um filme (dê opiniões: achei, ouvi dizer, as críticas dizem). Pergunte também sobre a sessão e se o aluno prefere dublado ou legendado.",
      open: "E aí! Desculpa o atraso. E então, qual filme a gente vai ver?"
    },
    {
      id: "bz-c12", unit: "bz12", e: "💬", t: "Agora é a sua vez! (2)",
      d: "Um bate-papo de revisão dos capítulos 7 a 11: convites e festas, notícias, meio ambiente, produtos e atendimento, TV e cinema.",
      who: "Professora Clara",
      role: "Você é Clara, professora de português, simpática e paciente. Faça uma conversa de revisão com estes temas, um de cada vez: o último convite que o aluno recebeu (formal ou informal? o que vestiu?), uma notícia importante das últimas semanas (onde ficou sabendo?), o meio ambiente na região dele (poluição? reciclagem? energia?), um produto que comprou (bom ou ruim? já teve que reclamar?) e o último filme ou programa de TV que viu (gostou? dublado ou legendado?). Faça UMA pergunta por vez e reaja ao que ele conta antes de mudar de tema.",
      open: "Oi de novo! Vamos revisar? Me conta: qual foi o último convite que você recebeu? Era uma festa formal?"
    }
  );
})();
