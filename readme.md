# Projeto Products gRPC

Este projeto consiste em dois microserviços, um em Go e outro em NestJS, que se comunicam através do protocolo gRPC. O microserviço em Go se conecta a um banco de dados SQLite para salvar e consultar produtos. Enquanto isso, o microserviço em NestJS oferece dois endpoints, GET e POST, que interagem com o microserviço em Go para realizar as operações correspondentes.

## Estrutura do Projeto

- `go/`: Contém o código-fonte do microserviço em Go.
- `nest/`: Contém o código-fonte do microserviço em NestJS.

## Como Executar

Para rodar a aplicação, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/jean-souza2019/products-grpc.git
cd products-grpc
```

2. Inicie os serviços usando Docker Compose:

```bash
docker-compose up -d
```

A aplicação estará disponível para acesso em `http://localhost`.

## Endpoints

### Microserviço NestJS

#### GET /products

Endpoint para obter a lista de produtos.

#### POST /products

Endpoint para adicionar um novo produto.

### Microserviço Go

O microserviço Go está configurado para se comunicar com o banco de dados SQLite para operações de salvar e consultar produtos.

## Comunicação gRPC

Os microserviços em Go e NestJS utilizam gRPC para a comunicação entre si. Isso permite uma comunicação eficiente e de alto desempenho entre os serviços.

## Contribuindo

Fique à vontade para contribuir com melhorias e correções de bugs. Abra um pull request e será revisado o mais rápido possível.

## Autores

- Jean Marcos de Souza (https://github.com/jean-souza2019)

---

**Nota:** Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina antes de executar o projeto.

Aproveite o desenvolvimento!