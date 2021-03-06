---
title: 'Terminais são legais v3.1: grupos de usuários'
description: >-
  Grupos de usuários são úteis e simples de se usar, podem te ajudar muito,
  principalmente com a segurança do seu sistema
thumbnail: groups.jpg
date: 2018-06-25 14:01:36
---


![](/images/Terminais-sao-legais-v3-1-grupos-de-usuarios/groups.jpg)

Nos artigos anteriores, vimos um pouco sobre:

- [Terminais são legais: como começar a usar ](/artigos/terminais-sao-legais-como-comecar-a-usar)
- [Terminais são legais v1: lendo e filtrando arquivos](/artigos/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/)
- [Terminais são legais v2: trabalhando com arquivos e pastas](/artigos/terminais-sao-legais-v2-pastas/)
- [Terminais são legais v3.0: usuários](/artigos/terminais-sao-legais-v3-usuarios/)

# Grupos de Usuários

Agora vamos trabalhar com *grupos de usuários*, como o próprio nome já diz, você pode agrupar usuários e definir permissões baseadas em grupos.

Comandos do dia:

- `groupadd`
- `groupmod`
- `groupdel`
- `groups`
- `groupmems`

## Criando um grupo de usuários

É bem simples, basta executar `sudo groupadd <nome-do-grupo`. Em seguida você vai precisar colocar a senha do grupo(sim, grupos tem senha!), assim como fez para criar um novo usuário.

Caso queira listar os grupos e saber se o seu foi criado, pode olhar o arquivo `/etc/group`. 

Para ver os grupos atuais, pode usar o comando `groups`, você também pode executar `groups <nome-do-usuario>` para saber em quais grupos um usuário está.

## Adicionando usuários ao novo grupo

Ok, agora temos um grupo de usuários, mas ele está vazio. Precisamos adicionar usuário a ele, certo?

Lembra do `usermod`? Então, aqui também usamos ele, mas dessa vez com o parâmetro `-G` ou `--groups` seguido pelo nome do nosso novo grupo. Exemplo: `sudo usermod -G <nome-do-grupo> <nome-do-usuario>`.

Para verificar, use `groups <nome-do-usuario>`.

Com isso, você pode gerenciar os grupos de qualquer usuário.

Há também o comando `groupmems`, que serve para gerenciar os membros do grupo primário de um usuário, dizendo melhor, o grupo principal.

Se você quiser adicionar seu usuário ao grupo `root`, pode executar `sudo groupmems -a <nome-do-usuario>`.

O `groupmems` é bom por ser versátil e mais fácil de usar para adicionar usuários. Você pode usar o seguinte comando como exemplo para adicionar um usuário a outros grupos: `sudo groupmems -g <nome-do-grupo> -a <nome-do-usuario>`

## Modificando e apagando grupos de usuários

Você pode alterar o nome do grupo com `sudo groupmod -n <novo-nome> <nome-do-grupo>`. Os parâmetros `-n` e `--new-name` são equivalentes.

Também pode alterar a senha de um grupo usando o parâmetro `-p` ou `--password` seguido da nova senha.

Para apagar um grupo de usuário, pode usar o comando `groupdel`. Se o grupo que está sendo apagado é o grupo primário de um usuário, ele não será apagado, a menos que você passe o parâmetro `-f` ou `--force`. Ficaria algo como `sudo groupdel <nome-do-grupo`.

### Grupos primários?

Aqui nós temos dois "tipos" de grupos, os primários e secundários. Um usuário tem um grupo primário, o principal do qual faz parte, e há grupos secundários.

Não há grande diferença além do que, quando conectar via login, ou SSH/TTY/etc, o grupo primário é o que aparecerá.

## Até a próxima!

Logo veremos sobre permissões, uma das partes cruciais de sistemas operacionais.

