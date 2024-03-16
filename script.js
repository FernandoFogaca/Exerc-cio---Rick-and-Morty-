async function executar() {
    console.log("Iniciando...")

    const elementoInput = document.getElementById("inputIdPersonagem")
    const valorInput = elementoInput.value

    const url = "https://rickandmortyapi.com/api/character/" + valorInput

    fetch(url)
   




}
