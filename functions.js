function mudarPagina({jogo}){
    async function getJogo({jogo}){
        fetch("https://localhost:3000", {
            method: "POST",
            body: JSON.stringify({
              jogo: jogo,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
          
    };
    
    getJogo(jogo);
    window.location.href = "./jogo.html";

}