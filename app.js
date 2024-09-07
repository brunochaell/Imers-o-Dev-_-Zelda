function descobrir() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value


    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p class='texto-nao-encontrado'>Nada foi encontrado</p>"
    
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada personagem na lista de personagens
    for (let personagem of personagens) {
        titulo = personagem.titulo.toLowerCase()
        descricao = personagem.descricao.toLowerCase()
        tags = personagem.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){            
            console.log(personagem.titulo.includes(campoPesquisa))
            // Constrói o HTML para cada item de resultado, formatando os dados do personagem
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href=${personagem.link} target="_blank">${personagem.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${personagem.descricao}
                    </p>
                </div>
            `;


        }
        // então faça...

    }

    if (!resultados) {

    resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML construído à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}

// Imprime a lista de personagens no console (descomente para verificar o conteúdo)
// console.log(personagens);