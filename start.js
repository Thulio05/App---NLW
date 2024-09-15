const { select, input } = require('@inquirer/prompts');

let metas = []

const cadastrarmeta = async () => {
    const metaadd = await input({ message: "Digite a meta: " });
    if(metaadd.length == 0){
        console.log("Meta vazia não é válida. Tente novamente: ");
        return cadastrarmeta();
    } 

    metas.push({
        value: metaadd,
        checked: false
    })
};

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
                await cadastrarmeta();
                console.log("Meta cadastrada com sucesso!\n");
                console.log(metas);
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