# Projeto Ucrania
Integrantes
- André Monteiro Sanches Garcia&emsp;–&emsp;19.01230-6
- Arthur Castanheda Sarnadas&emsp;&nbsp;&emsp;–&emsp;19.00756-6
- Giovanni Brandini B. Benuthe&emsp;&emsp;–&emsp;19.00043-0
- Guilherme Bernardelli Zeigler&emsp;&emsp;–&emsp;19.02453-3

## Como Rodar
1. Abrir nodejs e executar o comando `node server.js` para conectar ao banco
2. Trocar a porta na URL do navegador para 8080

## Docker
Para criação das imagens utiliza-se o comando `docker build .` no diretório onde se encontra o _dockerfile_ para criação de uma imagem que pode ser renomeada e utilizada como exemplificado abaixo.
![projeto-ucrania-react-4](https://user-images.githubusercontent.com/79452579/206590250-a6bcb70a-f467-4834-863e-2a103cfbbe68.png)

## Kubernetes
O Kubernetes é implementado primeiramente gerando um pod configurado para a sua imagem docker através de um arquivo .yaml com o comando `kubectl apply`. Posteriormente deve-se fazer o deployment do pod utilizando-se o mesmo comando aplicado ao seu arquivo .yaml configurado para Deployment.
![projeto-ucrania-react-3](https://user-images.githubusercontent.com/79452579/206591006-ddfb0f62-680d-45c7-8444-ee1da6681659.png)

## Breve Explicação
A plataforma visa o cadastro de acolhedores em um banco de dados para que ucranianos possam encontrar ajuda e refugio neste tempo de guerra.
O projeto é desenvolvido com a estrutura MERN (MongoDB, Express, React e NodeJs) onde usamos React para o front-end e requisições Axios através do framework Express que se comunicam com um back-end em JavaScript conectado a um banco de dados em nuvem MongoDB.

## Vídeo Explicação
[Vídeo Explicativo (Youtube)](https://youtu.be/kjI1FGrT8u8)
## Fotos do Site
![projeto-ucrania-react-1](https://user-images.githubusercontent.com/79452579/206589582-8ee5c808-da6f-45b9-8a7e-34a6ea2fc94b.png)
![projeto-ucrania-react-2](https://user-images.githubusercontent.com/79452579/206589587-06c62448-2183-45f7-9476-d4096680e349.png)

