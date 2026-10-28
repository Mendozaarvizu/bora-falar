/* Escuta, conversa, conquistas e textos da interface */
window.PT = window.PT || {};

/* Pares mínimos: [a, b, o que muda] */
PT.PAIRS = [
  ["avó", "avô", "ó aberto × ô fechado"],
  ["vovó", "vovô", "ó aberto × ô fechado"],
  ["pão", "pau", "ão nasal × au"],
  ["lá", "lã", "a × ã nasal"],
  ["caro", "carro", "r fraco × rr forte"],
  ["vela", "velha", "l × lh"],
  ["fio", "filho", "i × lh"],
  ["mala", "malha", "l × lh"],
  ["sono", "sonho", "n × nh"],
  ["pais", "país", "ai junto × a-í separado"],
  ["coco", "cocô", "a força no começo × no final"],
  ["vi", "vim", "i × im nasal"],
  ["fala", "falam", "a × am nasal"],
  ["bebe", "bebê", "a força no começo × no final"],
  ["sabia", "sabiá", "a força no meio × no final"],
  ["falo", "falou", "o × ou"]
];

/* Frases para repetir (e a frase do dia): [frase, contexto] */
PT.PHRASES = [
  ["E aí, tudo certo?", "Você encontra um amigo."],
  ["Que saudade de você!", "Você vê alguém depois de muito tempo."],
  ["Fica à vontade.", "Você recebe uma visita."],
  ["Me passa o arroz, por favor?", "Você está na mesa com a família."],
  ["Tá uma delícia!", "Você elogia a comida."],
  ["Pra que time você torce?", "Você puxa papo sobre futebol."],
  ["Bora dar um rolê?", "Você convida os amigos para sair."],
  ["Nossa, sério?", "Você ouve uma notícia surpreendente."],
  ["Não, obrigado, tô satisfeito.", "Você não quer mais comida."],
  ["O que você fez no fim de semana?", "É segunda-feira."],
  ["Você viu o capítulo de ontem?", "Você quer falar da novela."],
  ["Hoje não dá, fica pra próxima.", "Você recusa um convite."],
  ["A gente se vê amanhã.", "Você se despede."],
  ["Tô morrendo de fome!", "Você não comeu nada o dia todo."],
  ["Prazer em conhecer vocês!", "Você conhece a família do seu namorado."],
  ["Que legal que você veio!", "Um amigo chega na sua festa."],
  ["Deixa comigo!", "Você oferece ajuda."],
  ["Tanto faz pra mim.", "Você não tem preferência."],
  ["Com certeza!", "Você concorda totalmente."],
  ["Tomara que dê tudo certo.", "Um amigo tem uma entrevista amanhã."]
];

/* Cenários de conversa com a IA */
PT.SCENES = [
  {
    id: "almoco", e: "🍗", t: "Almoço de domingo",
    d: "Primeira visita à casa da família do seu namorado ou da sua namorada. A mãe dele(a) não para de oferecer comida.",
    who: "Dona Cida",
    role: "Você é Dona Cida, 62 anos, mineira, mãe do namorado ou da namorada do aluno. Muito carinhosa e falante, oferece comida o tempo todo e faz perguntas sobre a vida do aluno (trabalho, família, de onde é).",
    open: "Oi! Que bom que você veio! Entra, fica à vontade. Você tá com fome? Eu fiz feijão tropeiro e pão de queijo!"
  },
  {
    id: "churrasco", e: "🔥", t: "Churrasco com a galera",
    d: "Sábado à tarde, churrasco na casa do Rafa. Muita gente, muita conversa.",
    who: "Rafa",
    role: "Você é Rafa, 28 anos, paulistano, amigo do aluno. Descontraído, usa gírias leves (mano, cara, suave, bora, tipo). Vocês estão num churrasco no sábado com outros amigos.",
    open: "E aí! Chegou na hora certa, a picanha tá quase pronta. Vai um guaraná ou uma cerveja?"
  },
  {
    id: "whatsapp", e: "📱", t: "WhatsApp com a Bia",
    d: "Sua amiga carioca quer combinar alguma coisa para o fim de semana.",
    who: "Bia",
    role: "Você é Bia, 25 anos, carioca, amiga do aluno, conversando pelo WhatsApp. Escreva como no WhatsApp: mensagens curtas, abreviações comuns (vc, tb, pq, td, kkkk) e alguns emojis. Você quer combinar um programa no fim de semana (praia, show, barzinho).",
    open: "oiii! quanto tempo 😄 td bem? bora fazer alguma coisa sábado??"
  },
  {
    id: "musica", e: "🎶", t: "Papo sobre música",
    d: "Léo toca violão e adora apresentar música brasileira para os amigos.",
    who: "Léo",
    role: "Você é Léo, 35 anos, de Salvador, músico amador que toca violão. Adora MPB, samba, axé e bossa nova. Gosta de recomendar artistas brasileiros reais (Caetano Veloso, Gilberto Gil, Marisa Monte, Jorge Ben Jor, Elis Regina, Anitta, Liniker) e perguntar o gosto do aluno.",
    open: "Opa! Vi que você anda ouvindo música brasileira. Que tipo de música você curte?"
  },
  {
    id: "novela", e: "📺", t: "Fofoca da novela",
    d: "Tia Lurdes precisa contar o que aconteceu no capítulo de ontem.",
    who: "Tia Lurdes",
    role: "Você é Tia Lurdes, 55 anos, tia do aluno, apaixonada por novelas. Você conta, com muita emoção, o que aconteceu no capítulo de ontem de uma novela inventada chamada 'Amor de Verão' (tem a vilã Vitória, a mocinha Helena, segredos e romances) e pede a opinião do aluno.",
    open: "Você viu o capítulo de ontem de Amor de Verão? Nossa, eu fiquei chocada! A Vitória descobriu o segredo da Helena!"
  },
  {
    id: "futebol", e: "⚽", t: "Jogo no bar",
    d: "Noite de clássico num boteco de Belo Horizonte.",
    who: "Seu Zé",
    role: "Você é Seu Zé, 60 anos, dono de um boteco em Belo Horizonte e torcedor fanático do Atlético Mineiro. O jogo está passando na TV. Você comenta o jogo, conta histórias antigas de futebol e pergunta sobre o time do aluno.",
    open: "Boa noite! Senta aí, o jogo já vai começar. Pra que time você torce?"
  },
  {
    id: "livre", e: "🌿", t: "Conversa livre",
    d: "Ana é professora e conversa sobre qualquer assunto que você quiser.",
    who: "Ana",
    role: "Você é Ana, 30 anos, professora de português de Florianópolis, paciente e simpática. Converse sobre o assunto que o aluno escolher e ajude a conversa a continuar com perguntas simples.",
    open: "Oi! Eu sou a Ana. Sobre o que você quer conversar hoje?"
  }
];

/* Conquistas */
PT.BADGES = [
  { id: "primeira", e: "🌱", t: "Primeiro passo", d: "Complete sua primeira lição." },
  { id: "cinco", e: "📚", t: "Pegando o jeito", d: "Complete 5 lições diferentes." },
  { id: "quinze", e: "🎓", t: "Estudante dedicado", d: "Complete 15 lições diferentes." },
  { id: "trilha", e: "🏆", t: "Trilha completa", d: "Complete todas as lições da trilha." },
  { id: "perfeito", e: "⭐", t: "Sem errar nada", d: "Termine uma lição sem nenhum erro." },
  { id: "combo10", e: "⚡", t: "Pegando fogo", d: "Acerte 10 seguidas numa lição." },
  { id: "meta", e: "🎯", t: "Meta batida", d: "Bata a sua meta diária de XP." },
  { id: "dias3", e: "🔥", t: "Três dias seguidos", d: "Estude 3 dias seguidos." },
  { id: "dias7", e: "📆", t: "Uma semana firme", d: "Estude 7 dias seguidos." },
  { id: "dias30", e: "🌋", t: "Um mês sem parar", d: "Estude 30 dias seguidos." },
  { id: "cartoes50", e: "🃏", t: "Memória boa", d: "Revise 50 cartões." },
  { id: "cartoes500", e: "🐘", t: "Memória de elefante", d: "Revise 500 cartões." },
  { id: "ouvido", e: "👂", t: "Ouvido afiado", d: "Acerte 25 exercícios de escuta." },
  { id: "ditado", e: "✍️", t: "Escriba", d: "Acerte 20 ditados." },
  { id: "foneticista", e: "🔤", t: "Foneticista", d: "Acerte 20 perguntas no Desafio AFI." },
  { id: "papo1", e: "💬", t: "Primeiro papo", d: "Mande sua primeira mensagem numa conversa." },
  { id: "papo50", e: "🗣️", t: "Tagarela", d: "Mande 50 mensagens nas conversas." },
  { id: "avaliacao", e: "📝", t: "Aluno aplicado", d: "Termine uma conversa e receba uma avaliação." },
  { id: "nivel5", e: "🚀", t: "Nível 5", d: "Chegue ao nível 5." },
  { id: "nivel10", e: "👑", t: "Nível 10", d: "Chegue ao nível 10." },
  { id: "coruja", e: "🦉", t: "Coruja", d: "Estude depois das 23h." },
  { id: "madrugador", e: "🐓", t: "Madrugador", d: "Estude antes das 7h." },
  { id: "saudade", e: "💛", t: "Que saudade!", d: "Volte a estudar depois de uma pausa de 3 dias ou mais." }
];

PT.LEVEL_NAMES = [
  "Turista", "Visitante", "Aprendiz", "Curioso", "Conversador",
  "Parte da galera", "Quase carioca", "Fera do churrasco", "Brasileiro de coração", "Mestre da saudade"
];

PT.PRAISE = ["Isso aí!", "Mandou bem!", "Perfeito!", "Arrasou!", "Muito bom!", "Boa!", "Show!", "Exatamente!"];
PT.OOPS = ["Quase!", "Não foi dessa vez.", "Opa, errou.", "Calma, acontece."];
PT.WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
