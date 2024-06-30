# ProjetoFinalAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# API de Colaboradores

Esta API permite gerenciar colaboradores, oferecendo operações para listar, criar, atualizar e excluir colaboradores.

## Endpoints

### 1. Listar Colaboradores

**GET /colaboradores**

Retorna a lista de todos os colaboradores.

**Resposta:**

```json
[
  {
    "nome": "Mayra",
    "cargo": "desenvolvedor",
    "id": 1
  }
]
```

### 2. Criar um Novo Colaborador

**POST /colaboradores**

Cria um novo colaborador.

Request Body:
**Resposta**

```json
{
  "nome": "João",
  "cargo": "gerente"
}
```

**Resposta:**

```json
{
  "nome": "João",
  "cargo": "gerente",
  "id": 2
}
```

### 3. Atualizar um Colaborador

**PUT /colaboradores/{id}**

Atualiza as informações de um colaborador existente.
Parâmetros:
id (obrigatório): O ID do colaborador a ser atualizado.
Request Body:
**Resposta**

```json
{
  "nome": "João",
  "cargo": "diretor"
}
```

**Resposta:**

```json
{
  "nome": "João",
  "cargo": "diretor",
  "id": 2
}
```

### 4. Excluir um Colaborador

**DELETE /colaboradores/{id}**
Parâmetros:

id (obrigatório): O ID do colaborador a ser excluído.
Request Body:
**Resposta:**

```json
{
  "message": "Colaborador excluído com sucesso."
}
```

# Exemplo de Uso

Listar Colaboradores
curl -X GET http://api.exemplo.com/colaboradores
Criar um Novo Colaborador
curl -X POST http://api.exemplo.com/colaboradores -H "Content-Type: application/json" -d '{
"nome": "João",
"cargo": "gerente"
}'
Atualizar um Colaborador
curl -X PUT http://api.exemplo.com/colaboradores/2 -H "Content-Type: application/json" -d '{
"nome": "João",
"cargo": "diretor"
}'
Excluir um Colaborador
curl -X DELETE http://api.exemplo.com/colaboradores/2
