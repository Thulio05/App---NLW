//const start = () => {
//    console.log("Teste");
//}

function start() {
    console.log("Teste\n");

    while (true) {
        let opcao = "Cadastrar";
        switch(opcao){
            case "Cadastrar":
                console.log("Cadastre: \n");
                break;
            case "Listar":
                console.log("Liste: \n");
                break;
            case "Sair":
                console.log("Saindo: \n");
                return;
        }
    }
}

start()