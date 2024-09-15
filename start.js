const { select } = require('@inquirer/prompts');

//const start = () => {
//    console.log("Teste");
//}

async function start() {
    console.log("Teste\n");

    while (true) {
        const opcao = await select({
            message: "Menu >",
            choices: [{
                name: "Cadastrar meta",
                value: "Cadastrar"
            },{
                name: "Listar metas",
                value: "Listar"
            },{
                name: "Sair",
                value: "Sair"
            }]
        });
        switch(opcao){
            case "Cadastrar":
                console.log("Cadastre: \n");
                break;
            case "Listar":
                console.log("Liste: \n");
                break;
            case "Sair":
                console.log("Saindo...");
                return;
        }
    }
}

start()