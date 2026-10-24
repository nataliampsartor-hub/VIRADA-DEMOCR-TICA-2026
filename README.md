# Frente Democrática · Modelos de postagem

Site independente de apoiadores com modelos de postagem, fotos de atos pela democracia e pela soberania, legendas prontas e as hashtags do Exército do Lula, para baixar e compartilhar.

**Não é o site oficial da campanha de Lula nem de nenhum partido.** As cores e a linguagem se inspiram no kit visual público da campanha (lula.com.br). O logotipo oficial não é usado.

## O que tem

- **Banco de fotos**: 54 fotos para baixar uma a uma ou em ZIP com os créditos.
- **13 modelos editáveis**: manchete, soberania, frase, proposta (com as propostas do programa Lula 4.0), conquista (governos Lula e Dilma), missão do dia, Tô com Lula, enquete, Dia D, capa de carrossel, lista com checks, story com adesivo e citação, nos formatos feed 4:5, quadrado 1:1 e story 9:16. Cada modelo traz sugestões de texto. A página final dos carrosséis não é um modelo separado: ela é editada dentro de cada carrossel.
- **Carrosséis e sequências de stories**: Propostas de Lula 4.0 (com o link lula.com.br/propostas na página final), Conquistas de Lula e Dilma (2003 a 2016), Um país que renasceu (2023 a 2026), Democracia e soberania, Guia rápido da votação, Vozes da democracia (citações de Ulysses Guimarães, Paulo Freire, Primo Levi, Umberto Eco, Hannah Arendt e Martin Luther King Jr.), Missão do dia e Stories da véspera. Todas as páginas saem num ZIP, já numeradas.
- **Banco colaborativo**: link para a pasta do Drive onde apoiadores enviam fotos, com o termo de uso das imagens.
- **Editor**: troca texto, cor e foto (inclusive uma foto sua) e baixa o PNG em tamanho real. No celular, o botão Compartilhar manda a arte direto para o app.
- **Calendário**: posts para sábado 24 e domingo 25 de outubro, com horário, arte, legenda e hashtags. A semana seguinte será atualizada após o encerramento da votação.
- **Hashtags**: as tags do Exército do Lula noticiadas pela imprensa, mais sugestões de campanha e de temas.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub (por exemplo `frente-democratica`) e envie o conteúdo desta pasta.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`. Salve.
4. Em um ou dois minutos, o site fica em `https://SEU-USUARIO.github.io/frente-democratica/`.

## Estrutura

```
index.html        página única
css/style.css     visual e modelos
js/data.js        modelos, hashtags e calendário (edite aqui as legendas)
js/photos.js      lista de fotos e créditos
js/app.js         galeria, editor e exportação em PNG
assets/fotos/     fotos em 1600 px (mini/ tem as miniaturas)
```

Para trocar uma legenda ou incluir um post, edite `js/data.js`. Para incluir uma foto, coloque o arquivo em `assets/fotos/` e uma miniatura em `assets/fotos/mini/`, e acrescente uma linha em `js/photos.js`.

## Créditos das fotos

| Arquivos | Autor | Licença | Fonte |
|---|---|---|---|
| `ato-paulista-2025-09-21-*` | Mtvdanilo | CC BY 4.0 | Wikimedia Commons |
| `mobilizacao-campinas-2026-*` | Mtvdanilo | CC BY 4.0 | Wikimedia Commons |
| `ato-copacabana-2025-09-21-*` | Avelludo | CC BY-SA 4.0 | Wikimedia Commons |
| `lancamento-campanha-2026-08-16-*` | Lula Oficial | CC BY-SA 4.0 | Wikimedia Commons |
| `ato-sao-paulo-2026-10-*` | Lula Oficial | CC BY-SA 4.0 | Wikimedia Commons |
| `acervo-*` | Acervo Frente Democrática | — | Fotos dos apoiadores |

O link de cada foto no Commons está em `js/photos.js`. As licenças CC BY e CC BY-SA exigem crédito ao autor, e o editor já escreve o crédito na arte. Uma arte feita com foto CC BY-SA deve ser compartilhada com a mesma licença.

## Regras

Sem boatos, sem ataques pessoais e sem expor dados de ninguém. Impulsionamento pago de conteúdo eleitoral só pode ser contratado por candidatos, partidos, federações e coligações (Lei 9.504/97 e Res. TSE 23.610/2019). No dia da votação, prefira conteúdo cívico.
