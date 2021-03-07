const actions = [
    {
    name: "action",
    type: "list",
    message: "O que você deseja fazer?:",
    choices: ["Cadastrar novo Pet", "Listar todos os Pets", "Buscar pet por nome", "Finalizar"],
  },
];

const searchName = [
    {
        type: 'input',
        name: 'name',
        message: 'Nome do Pet: '
    },  
]

const createPet = [
    {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do Pet?'
    },
    {
        type: 'input',
        name: 'breed',
        message: 'Qual a raça do Pet?'
    },
    {
        type: 'input',
        name: 'owner',
        message: 'Qual o nome do dono?'
    }
];

module.exports = {actions,createPet, searchName};