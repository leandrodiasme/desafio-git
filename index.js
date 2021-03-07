const inquirer = require("inquirer");
const fs = require("fs");
const { actions, createPet, searchName } = require("./questions");

var arrayPets = [];
var contador = 0;

function Pet(nome, raca, nomeDono) {
  let objeto = {};

  objeto.id = contador;
  objeto.nome = nome;
  objeto.raca = raca;
  objeto.nomeDono = nomeDono;

  arrayPets.push(objeto);
  contador++;
  return arrayPets;
}

// Utilizando o inquirer para o uusário escolher as opções

function menu() {
  inquirer.prompt(actions).then((choice) => {
    switch (choice.action) {
      case "Cadastrar novo Pet":
        cadastrar();
        break;

      case "Listar todos os Pets":
        listar();
        break;

      case "Buscar pet por nome":
        inquirer.prompt(searchName).then((search) => {
          buscar(search.name);
        });
        break;

      case "Finalizar":
        break;
    }
  });
}

function cadastrar() {
  console.clear();
  inquirer.prompt(createPet).then((create) => {
    Pet(create.name, create.breed, create.owner);
    fs.writeFileSync(
      "pets.json",
      `${JSON.stringify(arrayPets, null, 2)}`,
      (err) => {
        if (err) throw err;
      }
    );
    menu();
  });
}

function listar() {
  console.clear();
  arrayPets.forEach((element) => {
    console.table(element);
  });
  menu();
}

function buscar(nomePet) {
  console.clear();
  arrayPets.forEach(function (pet) {
    if (pet.nome === nomePet) {
      for (var dado in pet) {
        console.log(dado + ": " + pet[dado]);
      }
    }
  });
  menu();
}

menu();
