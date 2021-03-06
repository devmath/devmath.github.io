---
title: 'Terminais são legais v3.2: permissões'
date: 2018-07-05 15:54:20
description:
thumbnail:
---


## Anteriormente...

Vimos algumas coisas legais sobre Linux, se você ainda não leu ou quer refrescar sua memória, se liga:

- [Terminais são legais: como começar a usar ](/artigos/terminais-sao-legais-como-comecar-a-usar)
- [Terminais são legais v1: lendo e filtrando arquivos](/artigos/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/)
- [Terminais são legais v2: trabalhando com arquivos e pastas](/artigos/terminais-sao-legais-v2-pastas/)
- [Terminais são legais v3.0: usuários](/artigos/terminais-sao-legais-v3-usuarios/)
- [Terminais são legais v3.1: grupos de usuários](/artigos/terminais-sao-legais-v3-1-grupos-de-usuarios/)

E hoje vamos aprender um pouco mais sobre permissões.

## Sistema de Permissões no Linux

Bom, como você já deve ter visto por aí, alguns comandos como o `ls` exibem algumas combinações de letras estranhas, ou até sequências de números como `0777`, `0755`, `drwx-xr-x`, etc. 

Todas são *representações* das permissões de determinada pasta/arquivo. Normalmente, você vai encontrar a representação númérica em fóruns, artigos e etc, por ser mais fácil de decorar, e a outra, em comandos como `ls -l`.

### Mas o que significam?

Para começar, precisamos entender primeiro os *níveis de permissão* existentes no Linux.

Esses níveis são divididos em três: usuário, grupo do usuário e outros usuários.

Nós temos três possíveis ações: *ler*, *escrever/editar*, *executar*. 

Você pode entender cada uma com sua sigla assim:

- ler = *r* de _read_
- escrever/editar = *w* de _write_
- executar = *x* de _eXecute_

Sendo assim, veja a seguinte combinação: `rwxrwxrwx`

Olhando bem, da pra perceber que temos 3 grupos com as mesmas permissões, sendo elas, na ordem: *leitura, escrita e execução*.

Mas se são 3 grupos, isso quer dizer que...sim! Cada grupo representa respectivamente o usuário atual, seu grupo, e os outros usuários.

Como em `rwxr-xr-x`, estamos dizendo que o usuário atual pode fazer tudo, o grupo dele pode apenas ler e executar, e o restante apenas pode executar.

Como comentei antes, você pode também representar com números, equivalendo:

- *r* = 4
- *w* = 2
- *x* = 1

Vamos ver como fica, comparando duas representações? Se liga:

`rwxr-xr-x` é o mesmo que `755`.
`rwxrwxrwx` é o mesmo que `777`.

E por aí vai.

Normalmente, você vai encontrar mais a representação numérica, por ser mais fácil de decorar e escrever.

Com o comando `ls`, você pode ver também as permissões das pastas usando o parâmetro `-l`. 

![](/images/Terminais-sao-legais-v3-2-permissoes/ls-l.png)

Há algumas coisas a mais sobre permissões, mas vou deixar para outro artigo, você precisa decorar bem para não ter problemas depois. 


Até a próxima!
