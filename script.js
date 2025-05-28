//referenciar os elementos

const botaoBuscar = document.getElementById("botao-buscar")
const campoEntrada = document.getElementById("entrada")

//evento ao clicar, fazer a requisição
botaoBuscar.addEventListener("click", async () => {
    const busca = campoEntrada.value.toLowerCase().trim();
    if(!busca) return; //se estiver vazio
    try{
        //faz a req.
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
        if(!resposta.ok) throw new Error("Pokémon não encontrado")

        //se ok, converte em JSON
        const dados = await resposta.json()

        //atualizar os dados
        document.getElementById("nome").textContent = dados.name;
        document.getElementById("numero").textContent = `${dados.id}`;
        document.getElementById("imagem").src = dados.sprites.front_default;

        //exibir tipo de pokemon

        
    } catch(erro){
        alert(erro.message);
    }
});
