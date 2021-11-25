## Instruções

Para rodar essa aplicação apenas dentro de um container docker, é utilizado esse comando:

> docker run --rm -it -v $(pwd)/:/usr/src/node -p 3000:3000 node:15 bash

Para gerar a imagem com o DockerFile.prod é necessário:

> docker build -t jeancigoli/express-hello . -f Dockerfile.prod
