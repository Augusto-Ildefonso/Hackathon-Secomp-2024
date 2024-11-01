function mudarPagina(jogo) {
    window.location.href = "./jogo.html";
    async function getJogo(jogo) {
        try {
            const response = await fetch("http://localhost:3000/jogos", {
                method: "POST",
                body: JSON.stringify({ jogo: jogo }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar o jogo");
            }

            // Recebe o arquivo binário como um ArrayBuffer
            const arrayBuffer = await response.arrayBuffer();

            // Converte o ArrayBuffer para Uint8Array, que é mais fácil de manipular
            const jogoBinario = new Uint8Array(arrayBuffer);

            // Aqui você pode processar ou executar o arquivo `jogoBinario` diretamente
            console.log("Jogo carregado em memória:", jogoBinario);

            // Redireciona para outra página se necessário
            window.location.href = "./jogo.html";
        } catch (error) {
            console.error("Erro:", error);
        }
    }

    // Chama a função para buscar o jogo
    getJogo(jogo);
}

function mudarNome({jogo}) {
    var titulo = jogo;
    document.title = titulo;
}