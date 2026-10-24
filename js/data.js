/* Dados do site: modelos, hashtags e calendário de postagens.
   Frases de propostas vêm do site oficial lula.com.br (seção "Propostas de Lula 4.0"). */
window.TEMPLATES=[
 {id:'manchete',nome:'Manchete com foto',desc:'Foto inteira, faixa de cor e manchete em caixa-alta, como no carrossel do site da campanha.',d:{fmt:'feed',theme:'vermelho',photo:'lancamento-campanha-2026-08-16-01.jpg',kicker:'Amanhã',title:'O *Brasil* decide\namanhã',body:'Confira seu local de votação e chame quem está do seu lado.',tag:'#OBrasilProntoPraMais'}},
 {id:'sober',nome:'Soberania',desc:'Foto no topo, painel de cor embaixo e frase curta em fonte condensada.',d:{fmt:'feed',theme:'azul',photo:'ato-copacabana-2025-09-21-01.jpg',kicker:'Soberania',title:'O que é do Brasil\nfica *no Brasil*',body:'E para os brasileiros.',tag:'#Soberania'}},
 {id:'frase',nome:'Frase de impacto',desc:'Texto grande em fonte condensada com foto redonda e selo de hashtag.',d:{fmt:'feed',theme:'azul',photo:'ato-paulista-2025-09-21-03.jpg',kicker:'Democracia',title:'O melhor do Brasil\nainda está *pela frente*',body:'',tag:'#Lula13'}},
 {id:'prop',nome:'Proposta',desc:'Uma proposta do programa de governo Lula 4.0 por página, com o tema e a explicação do site oficial.',d:{fmt:'feed',theme:'verde',photo:'acervo-14.jpg',kicker:'Lula 4.0 · Custo de vida',title:'Salário mínimo\n*valendo mais*',body:'Aumento do salário mínimo acima da inflação todo ano.',tag:'lula.com.br/propostas'}},
 {id:'conquista',nome:'Conquista',desc:'O que os governos Lula e Dilma já fizeram, com período, explicação e selo “Feito”.',d:{fmt:'feed',theme:'azul',photo:'',kicker:'Governo Lula · 2003–2010',title:'Bolsa\n*Família*',body:'Criado em 2003 para garantir renda às famílias mais pobres, com criança na escola e vacina em dia.',tag:'#OBrasilProntoPraMais'}},
 {id:'missao',nome:'Missão do dia',desc:'Passo a passo numerado para convocar o Exército: entrar no canal, compartilhar, postar a tag.',d:{fmt:'story',theme:'marinho',photo:'',kicker:'Missão do dia',title:'3 passos para\n*espalhar* o 13',body:'Entre no canal Exército do Lula\nCompartilhe 1 vídeo com 3 pessoas\nPublique usando as tags do dia',tag:'#ExercitoDoLula'}},
 {id:'tocom',nome:'Tô com Lula',desc:'Depoimento em cartão branco com foto redonda. Troque pela sua frase.',d:{fmt:'feed',theme:'vermelho',photo:'acervo-19.jpg',kicker:'Tô com Lula',title:'Porque *democracia*\nse defende na rua e no voto.',body:'',tag:'— escreva seu nome'}},
 {id:'enq',nome:'Enquete (story)',desc:'Pergunta com duas respostas sobre a foto. Cole a enquete do Instagram sobre as opções.',d:{fmt:'story',theme:'azul',photo:'ato-sao-paulo-2026-10-03.jpg',kicker:'Enquete',title:'Já sabe onde\nvota *amanhã*?',body:'Sim, já conferi\nVou conferir agora',tag:''}},
 {id:'dia',nome:'Dia D',desc:'Número gigante para datas: votação, ato, live ou mutirão.',d:{fmt:'feed',theme:'azul',photo:'acervo-01.jpg',kicker:'Domingo',title:'25/10',body:'Dia de democracia. O voto é livre e secreto.',tag:'#Eleicoes2026'}},
 {id:'capa',nome:'Capa de carrossel',desc:'Primeira página: foto inteira, manchete grande e o selo “arraste para o lado”.',d:{fmt:'feed',theme:'vermelho',photo:'lancamento-campanha-2026-08-16-02.jpg',kicker:'Lula 4.0',title:'O Brasil *pronto*\npra mais',body:'Seis temas das propostas de Lula em um carrossel.',tag:'#OBrasilProntoPraMais'}},
 {id:'lista',nome:'Lista com checks',desc:'Página interna de carrossel ou story: passo a passo, regras ou motivos, um por linha.',d:{fmt:'feed',theme:'vermelho',photo:'',kicker:'Nas redes',title:'Como defender\na *democracia*',body:'Cheque antes de compartilhar\nRespeite quem pensa diferente\nConverse com quem está em dúvida\nVote e chame quem está do seu lado',tag:'#Democracia'}},
 {id:'final',nome:'Página final',hidden:true,desc:'Fecha o carrossel pedindo para salvar, compartilhar e seguir as missões do Exército.',d:{fmt:'feed',theme:'azul',photo:'',kicker:'Gostou?',title:'Passa\n*adiante*',body:'Salve este post\nMande para 3 pessoas\nSiga as missões do Exército do Lula',tag:'#ExercitoDoLula'}},
 {id:'citacao',nome:'Citação',desc:'Frase de pensadores do Brasil e do mundo sobre democracia e contra o fascismo, com autor e fonte.',d:{fmt:'feed',theme:'marinho',photo:'',kicker:'Vozes da democracia',title:'Aconteceu, portanto pode acontecer de novo.',body:'Primo Levi\nOs Afogados e os Sobreviventes, 1986',tag:'#Democracia'}},
 {id:'adesivo',nome:'Story com adesivo',desc:'Story com espaço tracejado para colar o adesivo do Instagram: perguntas, link ou enquete.',d:{fmt:'story',theme:'azul',photo:'acervo-03.jpg',kicker:'Caixinha',title:'Por que você\n*vota 13*?',body:'Cole aqui o adesivo de perguntas',tag:'#Lula13'}}
];
window.THEMES={vermelho:'#FD0000',azul:'#0034D2',verde:'#037418',amarelo:'#FFD400',marinho:'#00071B',creme:'#F2F0E9'};
window.FORMATS={feed:{w:1080,h:1350,n:'Feed 4:5'},story:{w:1080,h:1920,n:'Story 9:16'},quad:{w:1080,h:1080,n:'Quadrado 1:1'}};

/* Hashtags. "army": usadas nas convocações do Exército do Lula noticiadas pela imprensa (podem mudar a cada missão).
   "sug": sugestões editoriais desta Frente. */
window.TAGS={
 army:[
  {t:'#ExercitoDoLulaVenceuMaisUma',c:'Convocada para o X em 23/10/2026 (Poder360).'},
  {t:'#HojeTemShowDoLula',c:'Convocada para o X em 23/10/2026 (Poder360).'},
  {t:'#NordestinosComLula',c:'Chegou ao 1º lugar dos assuntos do X (ND Mais).'},
  {t:'#LulaEmJuazeiro',c:'Tag de ação do ato em Juazeiro (ND Mais).'},
  {t:'#LulaEmPetrolina',c:'Tag de ação do ato em Petrolina (ND Mais).'}
 ],
 camp:['#OBrasilProntoPraMais','#Lula13','#LulaPresidente','#BrasilComLula','#PodeEspalhar'],
 tema:['#Soberania','#Democracia','#FascismoNuncaMais','#SemAnistia','#BrasilSoberano','#Eleicoes2026','#VotoConsciente','#ODiaDoVoto']
};

/* Calendário. Cada post: dia, formato, modelo, tema, foto, textos e legenda. {tags} é substituído pelas hashtags do post. */
window.DAYS=[
 {t:'Sábado 24/10',s:'Véspera da votação',nota:'Último dia de pedido de voto aberto. Siga a ordem abaixo ao longo do dia, confira a missão no canal Exército do Lula e publique também o carrossel “Lula 4.0 em oito páginas”.',posts:[
  {id:'p1',quando:'Manhã',fmt:'feed',tpl:'manchete',theme:'vermelho',photo:'lancamento-campanha-2026-08-16-01.jpg',kicker:'Amanhã',title:'O *Brasil* decide\namanhã',body:'Confira seu local de votação e chame quem está do seu lado.',tag:'#OBrasilProntoPraMais',
   cap:'Amanhã o Brasil decide. 🇧🇷\n\nConfira seu local de votação no app e-Título, separe um documento com foto e combine com a família e os amigos de irem juntos.\n\nO melhor do Brasil ainda está pela frente. Vamos juntos!\n\n{tags}',tags:['#OBrasilProntoPraMais','#Lula13','#ExercitoDoLulaVenceuMaisUma','#Eleicoes2026']},
  {id:'p11',quando:'Manhã',fmt:'story',tpl:'missao',theme:'marinho',photo:'',kicker:'Missão do dia',title:'3 passos para\n*espalhar* o 13',body:'Entre no canal Exército do Lula\nCompartilhe 1 vídeo com 3 pessoas\nPublique usando as tags do dia',tag:'#ExercitoDoLula',
   cap:'MISSÃO DO DIA 🪖\n\n1) Entre no canal Exército do Lula no WhatsApp (whatsapp.com/channel/0029VbCbRfD7tkj88k3soZ0Y) e ative o sininho.\n2) Compartilhe um vídeo ou uma arte com 3 pessoas.\n3) Publique usando as tags do dia.\n\nSem fake news e sem ataques pessoais: a nossa força é a verdade e o número de gente.\n\n{tags}',tags:['#ExercitoDoLulaVenceuMaisUma','#HojeTemShowDoLula','#OBrasilProntoPraMais']},
  {id:'p4',quando:'Almoço',fmt:'feed',tpl:'sober',theme:'azul',photo:'ato-copacabana-2025-09-21-01.jpg',kicker:'Soberania',title:'O que é do Brasil\nfica *no Brasil*',body:'E para os brasileiros.',tag:'#Soberania',
   cap:'“O que é do Brasil fica no Brasil e para os brasileiros.”\n\nSoberania é decidir o nosso próprio caminho, da economia à democracia. Quem ama o Brasil defende o Brasil.\n\n{tags}',tags:['#Soberania','#BrasilSoberano','#OBrasilProntoPraMais','#NordestinosComLula']},
  {id:'q1',quando:'Tarde',fmt:'feed',tpl:'citacao',theme:'marinho',photo:'',kicker:'Vozes da democracia',title:'Temos ódio à ditadura. *Ódio e nojo.*',body:'Ulysses Guimarães\nDiscurso na promulgação da Constituição, 1988',tag:'#Democracia',
   cap:'“Temos ódio à ditadura. Ódio e nojo.” Ulysses Guimarães, na promulgação da Constituição de 1988.\n\nA Constituição Cidadã nasceu do fim de uma ditadura. Defender a democracia é honrar quem lutou por ela.\n\n{tags}',tags:['#Democracia','#FascismoNuncaMais','#Lula13']},
  {id:'p12',quando:'Tarde',fmt:'feed',tpl:'tocom',theme:'vermelho',photo:'acervo-19.jpg',kicker:'Tô com Lula',title:'Porque *democracia*\nse defende na rua e no voto.',body:'',tag:'— escreva seu nome',
   cap:'Tô com Lula porque democracia se defende na rua e no voto. ✊\n\nEscreva a sua razão no modelo e poste. Marque três amigos para fazerem o mesmo.\n\n{tags}',tags:['#Lula13','#OBrasilProntoPraMais','#ExercitoDoLulaVenceuMaisUma']},
  {id:'q2',quando:'Fim de tarde',fmt:'feed',tpl:'citacao',theme:'azul',photo:'',kicker:'Vozes da democracia',title:'O súdito ideal do governo totalitário são as pessoas para quem *a distinção entre fato e ficção* já não existe.',body:'Hannah Arendt\nOrigens do Totalitarismo, 1951',tag:'#Democracia',
   cap:'Hannah Arendt escreveu em 1951 que o súdito ideal do totalitarismo é quem já não distingue fato de ficção.\n\nNa reta final, a regra do Exército é clara: cheque antes de compartilhar.\n\n{tags}',tags:['#Democracia','#FascismoNuncaMais','#ExercitoDoLulaVenceuMaisUma']},
  {id:'p2',quando:'Noite',fmt:'story',tpl:'enq',theme:'azul',photo:'ato-sao-paulo-2026-10-03.jpg',kicker:'Enquete',title:'Já sabe onde\nvota *amanhã*?',body:'Sim, já conferi\nVou conferir agora',tag:'',
   cap:'Story com enquete: cole o adesivo de enquete do Instagram sobre as duas opções.\nLink útil para o story: consulta ao local de votação no site do TSE ou no app e-Título.',tags:[]},
  {id:'p13',quando:'Noite',fmt:'quad',tpl:'frase',theme:'azul',photo:'ato-paulista-2025-09-21-03.jpg',kicker:'União',title:'O melhor do Brasil\nainda está *pela frente*',body:'',tag:'#Lula13',
   cap:'“O melhor do Brasil ainda está pela frente.”\n\nUnião de brasileiros e brasileiras, de esquerda e de direita, em defesa da democracia e do futuro das nossas famílias. Amanhã, todo mundo junto.\n\n{tags}',tags:['#OBrasilProntoPraMais','#Lula13','#Democracia']}
 ]},
 {t:'Domingo 25/10',s:'Dia da votação',nota:'No dia da votação, só conteúdo cívico: sem pedido de voto, sem número de candidato e sem tags de campanha. Boca de urna e aliciamento de eleitores são proibidos. O carrossel “Guia rápido da votação” também pode circular hoje.',posts:[
  {id:'p3',quando:'Manhã',fmt:'feed',tpl:'dia',theme:'azul',photo:'acervo-01.jpg',kicker:'Domingo',title:'25/10',body:'Dia de democracia. O voto é livre e secreto.',tag:'#Eleicoes2026',
   cap:'Hoje é dia de democracia. 🗳️\n\nO voto é livre, secreto e de cada pessoa. Leve um documento com foto, vote com tranquilidade e respeite quem está na fila ao seu lado.\n\n{tags}',tags:['#Eleicoes2026','#Democracia','#VotoConsciente','#ODiaDoVoto']},
  {id:'v1',quando:'Manhã',fmt:'story',tpl:'lista',theme:'verde',photo:'',kicker:'Na seção',title:'Fique *atento*',body:'Votação das 8h às 17h, horário de Brasília\nLeve documento oficial com foto\nCelular não entra na cabine de votação\nConfira o local no e-Título ou no site do TSE',tag:'#ODiaDoVoto',
   cap:'Story de serviço: horário, documento e local de votação. Conteúdo cívico, sem pedido de voto.',tags:['#ODiaDoVoto','#Eleicoes2026']},
  {id:'q3',quando:'Tarde',fmt:'story',tpl:'citacao',theme:'vermelho',photo:'',kicker:'Vozes da democracia',title:'Aconteceu, portanto *pode acontecer de novo*.',body:'Primo Levi\nOs Afogados e os Sobreviventes, 1986',tag:'#Democracia',
   cap:'Story. Primo Levi, sobrevivente de Auschwitz: “Aconteceu, portanto pode acontecer de novo.” Memória é a primeira defesa da democracia.',tags:['#Democracia']},
  {id:'v2',quando:'Depois das 17h',fmt:'feed',tpl:'frase',theme:'marinho',photo:'acervo-03.jpg',kicker:'Democracia',title:'Democracia se defende\n*todos os dias*',body:'',tag:'#Democracia',
   cap:'As urnas fecharam. Obrigado a cada pessoa que votou, trabalhou como mesária ou mesário e ajudou alguém a votar. 💚💛💙\n\nAgora é acompanhar a apuração pelos canais oficiais do TSE e não repassar boato.\n\n{tags}',tags:['#Democracia','#Eleicoes2026']}
 ]},
 {t:'Semana seguinte',s:'Atualização após a votação',nota:'O calendário da semana seguinte será atualizado após o encerramento da votação. Até lá, sigam as missões enviadas no canal Exército do Lula.',posts:[]}
];

/* Carrosséis (feed) e sequências de stories. Cada página usa um dos modelos acima. */
window.CAROUSELS=[
 {id:'lula40',nome:'Lula 4.0 em oito páginas',desc:'Capa, os seis temas das propostas com as frases do site oficial e uma página final com convite para as missões.',fmt:'feed',
  cap:'O Brasil pronto pra mais: os seis temas das propostas de Lula 4.0, com as frases do site oficial. Arraste para ver todos e mande para quem ainda tem dúvida. 👉 Tudo em lula.com.br\n\n{tags}',
  tags:['#OBrasilProntoPraMais','#Lula13','#ExercitoDoLulaVenceuMaisUma','#BrasilComLula'],
  pages:[
   {tpl:'capa',theme:'vermelho',photo:'lancamento-campanha-2026-08-16-02.jpg',kicker:'Lula 4.0',title:'O Brasil *pronto*\npra mais',body:'Seis temas das propostas de Lula, em frases do site oficial.',tag:'#OBrasilProntoPraMais'},
   {tpl:'prop',theme:'verde',photo:'acervo-14.jpg',kicker:'Propostas de Lula 4.0',title:'Custo de\n*vida*',body:'Preços que cabem no bolso, renda que completa o mês.',tag:'lula.com.br'},
   {tpl:'prop',theme:'marinho',photo:'acervo-12.jpg',kicker:'Propostas de Lula 4.0',title:'Segu-\n*rança*',body:'Combate ao crime da sua esquina até o andar de cima.',tag:'lula.com.br'},
   {tpl:'prop',theme:'vermelho',photo:'acervo-09.jpg',kicker:'Propostas de Lula 4.0',title:'Edu-\n*cação*',body:'Preparando nossos filhos para a economia do século 21.',tag:'lula.com.br'},
   {tpl:'prop',theme:'azul',photo:'acervo-11.jpg',kicker:'Propostas de Lula 4.0',title:'*Saúde*\ne SUS',body:'Um SUS mais rápido, mais moderno e mais perto das pessoas.',tag:'lula.com.br'},
   {tpl:'prop',theme:'amarelo',photo:'acervo-10.jpg',kicker:'Propostas de Lula 4.0',title:'Trabalho\ne *renda*',body:'Tempo livre, empregos melhores e mais espaço para empreender.',tag:'lula.com.br'},
   {tpl:'prop',theme:'azul',photo:'ato-paulista-2025-09-21-02.jpg',kicker:'Propostas de Lula 4.0',title:'Sobe-\n*rania*',body:'O que é do Brasil fica no Brasil e para os brasileiros.',tag:'lula.com.br'},
   {tpl:'final',theme:'vermelho',photo:'',kicker:'Gostou?',title:'Passa\n*adiante*',body:'Salve este post\nMande para 3 pessoas\nSiga as missões do Exército do Lula',tag:'Fonte: lula.com.br'}
  ]},
 {id:'democracia',nome:'Democracia e soberania',desc:'Cinco páginas que ligam os atos nas ruas à defesa da democracia nas redes.',fmt:'feed',
  cap:'Quem ama o Brasil defende o Brasil. 🇧🇷\n\nSoberania é decidir o nosso próprio caminho. Democracia é garantir que esse caminho seja escolhido pelo povo, no voto. Arraste e compartilhe.\n\nFotos: Avelludo (CC BY-SA 4.0) e Mtvdanilo (CC BY 4.0), Wikimedia Commons.\n\n{tags}',
  tags:['#Democracia','#Soberania','#SemAnistia','#ExercitoDoLulaVenceuMaisUma'],
  pages:[
   {tpl:'capa',theme:'azul',photo:'ato-copacabana-2025-09-21-07.jpg',kicker:'Democracia',title:'Quem ama o Brasil\n*defende* o Brasil',body:'Soberania e democracia em cinco páginas.',tag:'#Democracia'},
   {tpl:'sober',theme:'azul',photo:'ato-paulista-2025-09-21-02.jpg',kicker:'Soberania',title:'O que é do Brasil\nfica *no Brasil*',body:'E para os brasileiros.',tag:'#Soberania'},
   {tpl:'manchete',theme:'marinho',photo:'ato-paulista-2025-09-21-01.jpg',kicker:'21/09/2025',title:'O povo foi\n*às ruas*',body:'Milhares de pessoas em várias cidades, em defesa da democracia e contra a anistia a quem atacou as instituições.',tag:'#SemAnistia'},
   {tpl:'lista',theme:'vermelho',photo:'',kicker:'Nas redes',title:'Como defender\na *democracia*',body:'Cheque antes de compartilhar\nRespeite quem pensa diferente\nConverse com quem está em dúvida\nVote e chame quem está do seu lado',tag:'#Democracia'},
   {tpl:'final',theme:'amarelo',photo:'',kicker:'Agora é com você',title:'Passa\n*adiante*',body:'Salve este post\nCompartilhe nos stories\nSiga as missões do Exército do Lula',tag:'#ExercitoDoLula'}
  ]},
 {id:'votacao',nome:'Guia rápido da votação',desc:'Conteúdo cívico, sem pedido de voto, que pode circular inclusive no domingo da eleição.',fmt:'feed',
  cap:'Guia rápido para votar. 🗳️\n\nLeve documento oficial com foto (ou o e-Título com foto), confira seu local de votação e chegue cedo. A votação vai das 8h às 17h, horário de Brasília.\n\nSalve e mande para a família.\n\n{tags}',
  tags:['#Eleicoes2026','#ODiaDoVoto','#VotoConsciente'],
  pages:[
   {tpl:'capa',theme:'azul',photo:'acervo-03.jpg',kicker:'Domingo 25/10',title:'Guia rápido\npara *votar*',body:'O que você precisa saber antes de sair de casa.',tag:'#Eleicoes2026'},
   {tpl:'lista',theme:'azul',photo:'',kicker:'Antes de sair',title:'Leve *isto*',body:'Documento oficial com foto\nOu o e-Título com foto no celular\nSua cola em papel, se quiser',tag:'#ODiaDoVoto'},
   {tpl:'lista',theme:'verde',photo:'',kicker:'Na seção',title:'Fique *atento*',body:'Votação das 8h às 17h, horário de Brasília\nCelular não entra na cabine de votação\nConfira o local no e-Título ou no site do TSE',tag:'#ODiaDoVoto'},
   {tpl:'frase',theme:'marinho',photo:'acervo-02.jpg',kicker:'Lembrete',title:'Seu voto é\n*livre e secreto*',body:'',tag:'#VotoConsciente'},
   {tpl:'final',theme:'vermelho',photo:'',kicker:'Compartilhe',title:'Ajude alguém\na *votar*',body:'Mande este guia para a família\nLembre quem esqueceu o local\nChegue cedo e evite filas',tag:'#Eleicoes2026'}
  ]},
 {id:'missao',nome:'Missão do dia em quatro stories',desc:'Sequência de stories para chamar mais gente para o canal e para as missões do Exército do Lula.',fmt:'story',
  cap:'Sequência de stories. Na tela 3, cole o adesivo de perguntas do Instagram no espaço tracejado. Na tela 4, cole o adesivo de link com o endereço do canal: https://whatsapp.com/channel/0029VbCbRfD7tkj88k3soZ0Y',
  tags:['#ExercitoDoLulaVenceuMaisUma','#HojeTemShowDoLula'],
  pages:[
   {tpl:'capa',theme:'vermelho',photo:'ato-sao-paulo-2026-10-02.jpg',kicker:'Exército do Lula',title:'Missão\n*de hoje*',body:'Quatro passos, menos de cinco minutos.',tag:'#ExercitoDoLula'},
   {tpl:'lista',theme:'marinho',photo:'',kicker:'Passo a passo',title:'Cumpra a\n*missão*',body:'Abra o canal Exército do Lula\nVeja a missão na aba Atualizações\nReaja com um emoji\nFaça a ação e use a tag do dia',tag:'#ExercitoDoLula'},
   {tpl:'adesivo',theme:'azul',photo:'acervo-01.jpg',kicker:'Caixinha',title:'Por que você\n*vota 13*?',body:'Cole aqui o adesivo de perguntas',tag:'#Lula13'},
   {tpl:'adesivo',theme:'amarelo',photo:'',kicker:'Entre no canal',title:'Bora pro\n*Exército*',body:'Cole aqui o adesivo de link do canal Exército do Lula',tag:'#ExercitoDoLula'}
  ]},
 {id:'vespera',nome:'Stories da véspera',desc:'Três telas para o sábado: lembrete da data, enquete sobre o local de votação e caixinha de perguntas.',fmt:'story',
  cap:'Sequência de stories para a véspera. Na tela 2, cole a enquete do Instagram sobre as opções. Na tela 3, cole o adesivo de perguntas.',
  tags:['#OBrasilProntoPraMais','#Lula13'],
  pages:[
   {tpl:'dia',theme:'vermelho',photo:'ato-sao-paulo-2026-10-05.jpg',kicker:'Amanhã',title:'25/10',body:'Domingo é dia de votar 13.',tag:'#Lula13'},
   {tpl:'enq',theme:'azul',photo:'ato-sao-paulo-2026-10-03.jpg',kicker:'Enquete',title:'Já sabe onde\nvota *amanhã*?',body:'Sim, já conferi\nVou conferir agora',tag:''},
   {tpl:'adesivo',theme:'verde',photo:'mobilizacao-campinas-2026-03.jpg',kicker:'Me conta',title:'Vai votar de\n*manhã ou à tarde*?',body:'Cole aqui o adesivo de perguntas',tag:'#OBrasilProntoPraMais'}
  ]}
];


/* Propostas do programa Lula 4.0, com os textos do site oficial (lula.com.br/propostas). */
window.PROPOSTAS=[
 {tema:'Custo de vida',theme:'verde',photo:'acervo-14.jpg',title:'Salário mínimo\n*valendo mais*',body:'Aumento do salário mínimo acima da inflação todo ano.'},
 {tema:'Custo de vida',theme:'verde',photo:'acervo-15.jpg',title:'Cesta básica\n*sem imposto*',body:'Arroz, feijão, leite e café sem imposto: a compra do mês fica mais barata.'},
 {tema:'Custo de vida',theme:'amarelo',photo:'acervo-16.jpg',title:'Cashback\nde *impostos*',body:'Quem ganha pouco recebe de volta parte do imposto pago no supermercado, na luz e no gás.'},
 {tema:'Segurança',theme:'marinho',photo:'acervo-12.jpg',title:'Ministério da\n*Segurança*',body:'Um ministério só para cuidar da sua segurança e enfrentar as facções.'},
 {tema:'Segurança',theme:'marinho',photo:'acervo-13.jpg',title:'Sistema Único de\n*Segurança*',body:'Polícias federais, estaduais e municipais trabalhando juntas em todo o país, nos moldes do SUS.'},
 {tema:'Educação',theme:'vermelho',photo:'acervo-09.jpg',title:'Pé-de-Meia\n*para todos*',body:'Todos os alunos do ensino médio público vão receber o Pé-de-Meia.'},
 {tema:'Educação',theme:'vermelho',photo:'acervo-17.jpg',title:'Escola em\n*tempo integral*',body:'Em toda a rede pública: seu filho aprende mais, come bem e fica protegido.'},
 {tema:'Educação',theme:'azul',photo:'acervo-18.jpg',title:'IA e robótica\n*nas escolas*',body:'Cursos no ensino médio público e nos Institutos Federais, de graça.'},
 {tema:'Saúde',theme:'azul',photo:'acervo-11.jpg',title:'Rede Brasil\n*contra o Câncer*',body:'A maior rede pública de tratamento do câncer do mundo, de graça e perto de casa.'},
 {tema:'Saúde',theme:'azul',photo:'acervo-04.jpg',title:'Farmácia Popular\n*com consulta*',body:'Exames e teleconsultas de graça numa farmácia perto de você.'},
 {tema:'Trabalho e renda',theme:'amarelo',photo:'acervo-10.jpg',title:'Fim da\n*escala 6x1*',body:'Sem corte de salário. Um dia a mais por semana que é só seu.'},
 {tema:'Trabalho e renda',theme:'amarelo',photo:'acervo-06.jpg',title:'*Super-MEI*',body:'Teto do MEI sobe para R$ 140 mil, crédito de R$ 5 mil para investir e perdão das dívidas.'},
 {tema:'Soberania',theme:'azul',photo:'ato-paulista-2025-09-21-02.jpg',title:'Brasil das\n*Terras Raras*',body:'Novos polos industriais: a riqueza que sai do nosso chão vira emprego bom aqui.'},
 {tema:'Soberania',theme:'marinho',photo:'acervo-05.jpg',title:'Defender\n*o que é nosso*',body:'Seu Pix continua grátis, a Amazônia continua nossa e ninguém de fora manda no Brasil.'},
 {tema:'Mulheres',theme:'vermelho',photo:'acervo-20.jpg',title:'Pacto contra o\n*feminicídio*',body:'Mais proteção, tornozeleira para agressores e mais Casas da Mulher Brasileira.'}
];

/* Conquistas. Lula 1 e 2 e Dilma: marcos históricos. Lula 3: página de legado da campanha (superapp.lula.com.br/pais-que-renasceu). */
window.CONQUISTAS=[
 {gov:'Governo Lula · 2003–2010',theme:'azul',title:'Bolsa\n*Família*',body:'Criado em 2003 para garantir renda às famílias mais pobres, com criança na escola e vacina em dia.'},
 {gov:'Governo Lula · 2003–2010',theme:'azul',title:'Luz para\n*Todos*',body:'Desde 2003, levou energia elétrica às casas do campo que viviam no escuro.'},
 {gov:'Governo Lula · 2003–2010',theme:'vermelho',title:'ProUni e\n*Institutos Federais*',body:'Bolsas em faculdades desde 2004 e a criação da rede de Institutos Federais em 2008.'},
 {gov:'Governo Lula · 2003–2010',theme:'vermelho',title:'Minha Casa,\n*Minha Vida*',body:'Lançado em 2009 para realizar o sonho da casa própria de milhões de famílias.'},
 {gov:'Governo Lula · 2003–2010',theme:'marinho',title:'Lei Maria\n*da Penha*',body:'Sancionada em 2006, é a principal lei de proteção às mulheres contra a violência doméstica.'},
 {gov:'Governo Lula · 2003–2010',theme:'verde',title:'Farmácia Popular\ne *Brasil Sorridente*',body:'Desde 2004, remédio mais barato ou de graça e dentista pelo SUS.'},
 {gov:'Governo Dilma · 2011–2016',theme:'verde',title:'Fora do\n*Mapa da Fome*',body:'Em 2014, a ONU reconheceu que o Brasil tinha deixado o Mapa da Fome pela primeira vez.'},
 {gov:'Governo Dilma · 2011–2016',theme:'azul',title:'Mais\n*Médicos*',body:'Criado em 2013 para levar médicos às periferias e ao interior do país.'},
 {gov:'Governo Dilma · 2011–2016',theme:'vermelho',title:'Lei de\n*Cotas*',body:'Desde 2012, vagas nas universidades federais para estudantes de escola pública, negros e indígenas.'},
 {gov:'Governo Dilma · 2011–2016',theme:'marinho',title:'Direitos das\n*domésticas*',body:'A PEC das Domésticas, de 2013, estendeu às trabalhadoras domésticas direitos como jornada definida e hora extra.'},
 {gov:'Governo Dilma · 2011–2016',theme:'amarelo',title:'Comissão\n*da Verdade*',body:'Instalada em 2012 para apurar as violações de direitos humanos da ditadura.'},
 {gov:'Governo Lula · 2023–2026',theme:'verde',title:'Fora do Mapa\nda Fome *de novo*',body:'O Brasil saiu do Mapa da Fome pela segunda vez, em tempo recorde.'},
 {gov:'Governo Lula · 2023–2026',theme:'azul',title:'IR zero\naté *R$ 5 mil*',body:'Quem ganha até R$ 5 mil por mês ficou isento do Imposto de Renda.'},
 {gov:'Governo Lula · 2023–2026',theme:'vermelho',title:'Menor\n*desemprego*',body:'5,4% no trimestre encerrado em julho de 2026, o menor nível da série histórica.'},
 {gov:'Governo Lula · 2023–2026',theme:'amarelo',title:'*Pé-de-Meia*',body:'Mais de 7,3 milhões de estudantes já receberam a poupança para concluir o ensino médio.'},
 {gov:'Governo Lula · 2023–2026',theme:'verde',title:'Farmácia Popular\n*100% grátis*',body:'Os 41 itens do programa ficaram gratuitos, incluindo fraldas geriátricas e absorventes.'},
 {gov:'Governo Lula · 2023–2026',theme:'marinho',title:'Gás do\n*Povo*',body:'Botijão de gás de graça para 15 milhões de famílias, cerca de 45 milhões de pessoas.'}
];

/* Citações sobre democracia e contra o autoritarismo. Trechos curtos, com autor e fonte. */
window.QUOTES=[
 {q:'Temos ódio à ditadura. *Ódio e nojo.*',a:'Ulysses Guimarães',src:'Discurso na promulgação da Constituição, 1988'},
 {q:'Traidor da Constituição é *traidor da Pátria*.',a:'Ulysses Guimarães',src:'Discurso na promulgação da Constituição, 1988'},
 {q:'*Não vamos nos dispersar.* Continuemos reunidos, como nas praças públicas.',a:'Tancredo Neves',src:'Discurso de 15 de janeiro de 1985'},
 {q:'Ninguém liberta ninguém, ninguém se liberta sozinho: os homens se libertam *em comunhão*.',a:'Paulo Freire',src:'Pedagogia do Oprimido, 1968'},
 {q:'Quando dou comida aos pobres, me chamam de santo. Quando pergunto por que eles são pobres, *chamam-me de comunista*.',a:'Dom Hélder Câmara',src:'Arcebispo de Olinda e Recife'},
 {q:'Aconteceu, portanto *pode acontecer de novo*.',a:'Primo Levi',src:'Os Afogados e os Sobreviventes, 1986'},
 {q:'O fascismo eterno ainda está ao nosso redor, *às vezes em trajes civis*.',a:'Umberto Eco',src:'O Fascismo Eterno, 1995'},
 {q:'O súdito ideal do governo totalitário são as pessoas para quem *a distinção entre fato e ficção* já não existe.',a:'Hannah Arendt',src:'Origens do Totalitarismo, 1951'},
 {q:'A injustiça em qualquer lugar é uma ameaça *à justiça em todo lugar*.',a:'Martin Luther King Jr.',src:'Carta da Prisão de Birmingham, 1963'},
 {q:'Ainda é fértil o ventre de onde *surgiu a besta*.',a:'Bertolt Brecht',src:'A Resistível Ascensão de Arturo Ui, 1941'}
];

/* Sugestões de texto que o editor sempre mostra, por modelo. A pessoa pode usar como estão ou reescrever. */
window.SUG={
 manchete:[
  {kicker:'Amanhã',title:'O *Brasil* decide\namanhã',body:'Confira seu local de votação e chame quem está do seu lado.'},
  {kicker:'Democracia',title:'Democracia\n*não se negocia*',body:'Quem atacou as instituições precisa responder pelo que fez.'},
  {kicker:'Nas ruas',title:'O povo\n*nas ruas*',body:'Milhares de pessoas em várias cidades, em defesa da democracia.'},
  {kicker:'Nunca mais',title:'Ditadura\n*nunca mais*',body:'A democracia brasileira foi conquistada nas ruas e se defende todos os dias.'}],
 sober:[
  {kicker:'Soberania',title:'O que é do Brasil\nfica *no Brasil*',body:'E para os brasileiros.'},
  {kicker:'Soberania',title:'Quem decide\no Brasil é *o povo*',body:'Nenhum outro país escolhe por nós.'},
  {kicker:'Brasil soberano',title:'Nossa terra,\n*nosso voto*',body:'Soberania nacional e democracia andam juntas.'}],
 frase:[
  {kicker:'Democracia',title:'O melhor do Brasil\nainda está *pela frente*'},
  {kicker:'Democracia',title:'Democracia se defende\n*todos os dias*'},
  {kicker:'Contra o ódio',title:'O ódio\n*não vai vencer*'},
  {kicker:'Memória',title:'Para que não se esqueça,\n*para que nunca mais aconteça*'}],
 prop:window.PROPOSTAS.map(function(x){return {kicker:'Lula 4.0 · '+x.tema,title:x.title,body:x.body,tag:'lula.com.br/propostas'}}),
 conquista:window.CONQUISTAS.map(function(x){return {kicker:x.gov,title:x.title,body:x.body}}),
 missao:[
  {kicker:'Missão do dia',title:'3 passos para\n*espalhar* o 13',body:'Entre no canal Exército do Lula\nCompartilhe 1 vídeo com 3 pessoas\nPublique usando as tags do dia'},
  {kicker:'Missão do dia',title:'Responda boato\ncom *informação*',body:'Cheque a fonte antes de compartilhar\nResponda com link de fonte confiável\nUse a tag da missão do dia'},
  {kicker:'Missão do dia',title:'Converse com\n*quem está em dúvida*',body:'Escolha uma pessoa da família\nPergunte o que mais preocupa\nMostre a proposta sobre esse tema'}],
 tocom:[
  {kicker:'Tô com Lula',title:'Porque *democracia*\nse defende na rua e no voto.'},
  {kicker:'Tô com Lula',title:'Porque quero um país\n*sem fome e sem ódio*.'},
  {kicker:'Tô com Lula',title:'Porque *soberania*\nnão se negocia.'},
  {kicker:'Tô com Lula',title:'Porque ditadura\n*nunca mais*.'}],
 enq:[
  {kicker:'Enquete',title:'Já sabe onde\nvota *amanhã*?',body:'Sim, já conferi\nVou conferir agora'},
  {kicker:'Enquete',title:'Já cumpriu a\n*missão de hoje*?',body:'Sim, já postei\nAinda não, vou agora'},
  {kicker:'Enquete',title:'Democracia é\n*inegociável*?',body:'Sim, sempre\nCom certeza'}],
 dia:[
  {kicker:'Domingo',title:'25/10',body:'Dia de democracia. O voto é livre e secreto.'},
  {kicker:'Amanhã',title:'25/10',body:'Domingo é dia de votar 13.'},
  {kicker:'Na urna',title:'13',body:'Confira o número antes de confirmar.'}],
 capa:[
  {kicker:'Lula 4.0',title:'O Brasil *pronto*\npra mais',body:'Seis temas das propostas de Lula em um carrossel.'},
  {kicker:'Democracia',title:'Quem ama o Brasil\n*defende* o Brasil',body:'Soberania e democracia em cinco páginas.'},
  {kicker:'Vozes da democracia',title:'O que a história\nnos *ensina*',body:'Pensadores do Brasil e do mundo sobre a defesa da democracia.'}],
 lista:[
  {kicker:'Nas redes',title:'Como defender\na *democracia*',body:'Cheque antes de compartilhar\nRespeite quem pensa diferente\nConverse com quem está em dúvida\nVote e chame quem está do seu lado'},
  {kicker:'Atenção',title:'Como reconhecer\n*fake news*',body:'Título alarmista e sem fonte\nPede para repassar com urgência\nNão aparece em nenhum jornal\nNa dúvida, não repasse'},
  {kicker:'Sinais de alerta',title:'Como o fascismo\n*avança*',body:'Ataca a imprensa e a ciência\nTrata adversário como inimigo\nDesacredita as eleições\nEspalha mentira como método'}],
 final:[
  {kicker:'Gostou?',title:'Passa\n*adiante*',body:'Salve este post\nMande para 3 pessoas\nSiga as missões do Exército do Lula'},
  {kicker:'Agora é com você',title:'Democracia se\ndefende *junto*',body:'Compartilhe nos stories\nCheque antes de repassar\nSiga as missões do Exército do Lula'}],
 adesivo:[
  {kicker:'Caixinha',title:'Por que você\n*vota 13*?',body:'Cole aqui o adesivo de perguntas'},
  {kicker:'Entre no canal',title:'Bora pro\n*Exército*',body:'Cole aqui o adesivo de link do canal Exército do Lula'},
  {kicker:'Me conta',title:'O que a democracia\n*significa pra você*?',body:'Cole aqui o adesivo de perguntas'}],
 citacao:window.QUOTES.map(function(x){return {kicker:'Vozes da democracia',title:x.q,body:x.a+'\n'+x.src}})
};

/* Banco de fotos colaborativo */
window.UPLOAD={url:'https://drive.google.com/drive/folders/1UyAHUHJV4hyJVcW1YzHSxZiNZDVuQP7s'};
window.CANAL='https://whatsapp.com/channel/0029VbCbRfD7tkj88k3soZ0Y';

/* Carrossel de citações e dia extra no calendário */
(function(){
 var Q=window.QUOTES,pick=[0,3,5,6,7,8],themes=['vermelho','azul','marinho','vermelho','azul','marinho'];
 window.CAROUSELS.push({id:'vozes',nome:'Vozes da democracia',desc:'Seis citações de pensadores do Brasil e do mundo sobre democracia e os riscos do fascismo, com capa e página final.',fmt:'feed',
  cap:'Vozes da democracia. ✊\n\nUlysses Guimarães, Paulo Freire, Primo Levi, Umberto Eco, Hannah Arendt e Martin Luther King Jr. viram de perto o que acontece quando a democracia é atacada. Em tempos de avanço da extrema direita no mundo, vale lembrar o que eles disseram.\n\nArraste, salve e compartilhe.\n\n{tags}',
  tags:['#Democracia','#FascismoNuncaMais','#OBrasilProntoPraMais','#ExercitoDoLulaVenceuMaisUma'],
  pages:[{tpl:'capa',theme:'marinho',photo:'lancamento-campanha-2026-08-16-08.jpg',kicker:'Vozes da democracia',title:'O que a história\nnos *ensina*',body:'Pensadores do Brasil e do mundo sobre a defesa da democracia.',tag:'#Democracia'}]
   .concat(pick.map(function(i,k){var x=Q[i];return {tpl:'citacao',theme:themes[k],photo:'',kicker:'Vozes da democracia',title:x.q,body:x.a+'\n'+x.src,tag:'#Democracia'}}))
   .concat([{tpl:'final',theme:'amarelo',photo:'',kicker:'Agora é com você',title:'Democracia se\ndefende *junto*',body:'Compartilhe nos stories\nCheque antes de repassar\nSiga as missões do Exército do Lula',tag:'#FascismoNuncaMais'}])});
})();

/* Propostas e conquistas nos carrosséis e no calendário */
(function(){
 var PR=window.PROPOSTAS,CQ=window.CONQUISTAS,C=window.CAROUSELS;
 function prop(x){return {tpl:'prop',theme:x.theme,photo:x.photo,kicker:'Lula 4.0 · '+x.tema,title:x.title,body:x.body,tag:'lula.com.br/propostas'}}
 function conq(x,photo){return {tpl:'conquista',theme:x.theme,photo:photo||'',kicker:x.gov,title:x.title,body:x.body,tag:'#OBrasilProntoPraMais'}}
 var l40=C.filter(function(c){return c.id==='lula40'})[0];
 l40.nome='Propostas de Lula 4.0';
 l40.desc='Dez propostas do programa de governo, com os textos do site oficial: salário mínimo, cesta básica, segurança, Pé-de-Meia, câncer, 6x1, Super-MEI, terras raras e feminicídio.';
 l40.cap='Propostas de Lula 4.0: um salto de qualidade na vida dos brasileiros. 🇧🇷\n\nSalário mínimo acima da inflação, cesta básica sem imposto, Ministério da Segurança Pública, Pé-de-Meia para todos, Rede Brasil contra o Câncer, fim da escala 6x1 sem corte de salário e muito mais. Arraste, salve e mande para quem ainda tem dúvida.\n\n👉 Programa completo em lula.com.br/propostas\n\n{tags}';
 l40.pages=[{tpl:'capa',theme:'vermelho',photo:'lancamento-campanha-2026-08-16-02.jpg',kicker:'Lula 4.0',title:'O Brasil *pronto*\npra mais',body:'Dez propostas do programa de governo para os próximos quatro anos.',tag:'#OBrasilProntoPraMais'}]
  .concat([0,1,3,5,6,8,10,11,12,14].map(function(i){return prop(PR[i])}))
  .concat([{tpl:'final',theme:'vermelho',photo:'',kicker:'Programa completo',title:'Veja todas\nas *propostas*',body:'lula.com.br/propostas\nSalve e mande para 3 pessoas\nSiga as missões do Exército do Lula',tag:'Link na legenda e na bio',link:'lula.com.br/propostas'}]);
 C.splice(1,0,
  {id:'conquistas',nome:'Conquistas de Lula e Dilma',desc:'De 2003 a 2016: Bolsa Família, Luz para Todos, ProUni, Minha Casa Minha Vida, Lei Maria da Penha, saída do Mapa da Fome, Mais Médicos e Lei de Cotas.',fmt:'feed',
   cap:'Quem fez, sabe fazer. 💪\n\nBolsa Família, Luz para Todos, ProUni, Institutos Federais, Minha Casa Minha Vida, Lei Maria da Penha, Mais Médicos, Lei de Cotas e a saída do Brasil do Mapa da Fome em 2014. Conquistas dos governos Lula e Dilma que mudaram a vida de milhões de brasileiros.\n\nArraste e compartilhe.\n\n{tags}',
   tags:['#OBrasilProntoPraMais','#Lula13','#ExercitoDoLulaVenceuMaisUma'],
   pages:[{tpl:'capa',theme:'azul',photo:'mobilizacao-campinas-2026-03.jpg',kicker:'2003 a 2016',title:'Quem fez,\n*sabe fazer*',body:'Conquistas dos governos Lula e Dilma que mudaram a vida do povo.',tag:'#OBrasilProntoPraMais'}]
    .concat([0,1,2,3,4,6,7,8].map(function(i){return conq(CQ[i])}))
    .concat([{tpl:'final',theme:'vermelho',photo:'',kicker:'E tem mais',title:'O melhor\n*ainda vem*',body:'Salve este post\nMande para quem esqueceu\nSiga as missões do Exército do Lula',tag:'#OBrasilProntoPraMais'}])},
  {id:'renasceu',nome:'Um país que renasceu',desc:'Conquistas do terceiro mandato de Lula, com os números da página de legado da campanha.',fmt:'feed',
   cap:'Um país que renasceu. 🇧🇷\n\nO Brasil saiu do Mapa da Fome pela segunda vez, quem ganha até R$ 5 mil ficou isento do Imposto de Renda, o desemprego chegou ao menor nível da série, o Pé-de-Meia chegou a mais de 7,3 milhões de estudantes e a Farmácia Popular ficou 100% grátis.\n\nFonte: página de legado da campanha (lula.com.br).\n\n{tags}',
   tags:['#OBrasilProntoPraMais','#Lula13','#HojeTemShowDoLula'],
   pages:[{tpl:'capa',theme:'vermelho',photo:'ato-sao-paulo-2026-10-04.jpg',kicker:'2023 a 2026',title:'Um país que\n*renasceu*',body:'O que mudou no Brasil nos últimos quatro anos.',tag:'#OBrasilProntoPraMais'}]
    .concat([11,12,13,14,15,16].map(function(i){return conq(CQ[i])}))
    .concat([{tpl:'final',theme:'azul',photo:'',kicker:'Agora é com você',title:'Pra seguir\n*avançando*',body:'Salve este post\nMande para 3 pessoas\nSiga as missões do Exército do Lula',tag:'Fonte: lula.com.br'}])}
 );
 var sab=window.DAYS[0].posts;
 sab.splice(3,0,
  {id:'c1',quando:'Almoço',fmt:'feed',tpl:'conquista',theme:'verde',photo:'',kicker:'Governo Lula · 2023–2026',title:'Fora do Mapa\nda Fome *de novo*',body:'O Brasil saiu do Mapa da Fome pela segunda vez, em tempo recorde.',tag:'#OBrasilProntoPraMais',
   cap:'Em 2014, com Dilma, o Brasil saiu do Mapa da Fome da ONU pela primeira vez. Depois voltou para ele. Com Lula, saiu de novo, em tempo recorde. ✊🍽️\n\nComida no prato é o que importa.\n\n{tags}',tags:['#OBrasilProntoPraMais','#Lula13','#NordestinosComLula']},
  {id:'pp1',quando:'Tarde',fmt:'feed',tpl:'prop',theme:'amarelo',photo:'acervo-10.jpg',kicker:'Lula 4.0 · Trabalho e renda',title:'Fim da\n*escala 6x1*',body:'Sem corte de salário. Um dia a mais por semana que é só seu.',tag:'lula.com.br/propostas',
   cap:'FIM DA ESCALA 6X1, sem corte de salário. Um dia a mais por semana que é só seu: para a família, para estudar ou para ganhar um dinheiro a mais.\n\nProposta do programa de governo Lula 4.0. Veja todas em lula.com.br/propostas\n\n{tags}',tags:['#OBrasilProntoPraMais','#Lula13','#ExercitoDoLulaVenceuMaisUma']}
 );
})();
