## Tipos de networks

Para fazer os container conversarem é preciso que eles estejam na mesma rede, por isso é necessários os networks. Existem alguns tipos deles:

### Bridge

É a network mais utilizada do docker.

### Host

Mescla a network do docker com a network do host do docker.

### Overlay

Integrando várias máquinas onde rodam o docker, assim deixando na mesma network

### Mac lan

Integrando com o mac da máquina

### None

O container não ter nenhuma rede acoplada a ele.

## Commands:

- **Docker network --help**: Lista a ajuda de comandos do network.

- **Docker network ls**: Lista os networks que possuem ativos.

- **Docker network prune**: Mata todas as networks que não estão sendo utilizadas.

- **Docker network inspect {name}**: Inspeciona as networks

- **Docker network create --driver bridge {nome}**: Cria uma nova rede baseada no tipo de escolha

- **docker run -d -it --name ubuntu2 --network {nome} bash**: Rodando um container passando a rede que desejo usar

  - Quando você cria uma rede e utiliza ela no container, você consegue utilizar o nome da imagem para comunicação. Usando a bridge default é necessário passar o IP.

- **docker network connect {nome rede} {nome imagem}**: Conectar um container já criado a rede que deseja.

## Acesso interno

Caso precise que seu container acesse um recurso que que está rodando na sua máquina, existe um atalho que pode ser utilizado:

> http://host.docker.internal:{port}

Assim o container acha o recurso da máquina.
