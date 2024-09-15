const { select, input, checkbox } = require('@inquirer/prompts');

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

const realizarmetas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0){
        console.log("Nenhuma meta realizada.\n")
        return;
    }

    await select({
        message: "Metas Realizadas: ",
        choices: [...realizadas]
    })
}

const listarmetas = async () => {
    if (metas.length == 0){
        console.log("Nenhuma meta cadastrada.\n")
        return;
    }

    for(i = 0; i < metas.length; i++){
        console.log(metas[i].value);
    }

const resposta = await checkbox({
    message: "\nSelecione as metas a serem marcadas: ",
    choices: [...metas]
    })

    metas.forEach((m) => {
        m.checked = false;
    })

    resposta.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true;
    })
        
};

async function start() {
    console.log("BEM VINDO!\n");

    while (true) {
        const opcao = await select({
            message: "\nMenu >",
            choices: [{
                name: "Cadastrar meta",
                value: "Cadastrar"
            },{
                name: "Listar metas",
                value: "Listar"
            },{
                name: "Marcar metas realizadas",
                value: "Realizadas"
            },{
                name: "Sair",
                value: "Sair"
            }]
        });

        switch(opcao){
            case "Cadastrar":
                await cadastrarmeta();
                console.log("Meta cadastrada com sucesso!\n");
                break;
            case "Listar":
                await listarmetas();
                console.log("Metas organizadas!\n");
                break;
            case "Realizadas":
                await realizarmetas();
                break;
            case "Sair":
                console.log("Saindo...");
                return;
        }
    }
}

start()