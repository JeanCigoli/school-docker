# Docker

Readme para estudo e anotações sobre docker e suas funcionalidades

## O que são containers?

**Tradução da explicação de container**

    Um container é um padrão de unidade de software que empacota código e todas as dependências de uma aplicação fazendo que a mesma seja executada rapidamente de forma confiável de uma ambiente computacional para o outro.

### Como ele funciona?

#### NAMESPACES

Os containers são processos, onde por meio de namespaces eles conseguem ficar isolados dentro do seu sistema operacional

- Namespaces: é uma forma de fazer o isolamento dos processos, com isso é possível ter um conjunto de processos.

Os processos só enxergam aquilo que está dentro dele, não visualiza nada fora do seu namespace.

![Namespace](docs/img/namespace.png)

Cada processo pode ter:

- Pid;

- Users: Divisões de usuários;

- Network: Isolamento de redes;

- File system.

Isso pode ser coberto por um namespace, assim ter um container completamente isolado

#### CGROUPS

Foi possível a organização de containers graças ao Cgroups, ele nada mais é do que um controlador de recursos.

Com isso podemos isolar os recursos computacionais dos meus container, assim definir que um container pode consumir apenas 500MB de memória.

#### OVERLAY FILE SYSTEM

---

In progress...
