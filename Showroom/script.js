

const loadContent = async () => {
    const cardHolder = document.querySelector(".card-holder");

    let json = await (await fetch("showroom.json")).json();

    json.forEach(x => {
        const cInfo1 = document.createElement("div");
        const cInfo2 = document.createElement("div");

        cInfo1.classList.add("card-info");        
        cInfo2.classList.add("card-info");        
                
        const cardTitle = document.createElement("h2");
        cardTitle.innerText = x.nome;

        const cardDescription = document.createElement("p");
        cardDescription.innerText = x.descricao;

        const cardStatus = document.createElement("div");
        cardStatus.classList.add("card-status");

        if (x.status) {
            cardStatus.classList.add("card-status-green");
        }

        const cardPrice = document.createElement("p");
        cardPrice.innerText = `Price: ${x.preco}$`;

        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", x.imagem);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const card = document.createElement("div");
        card.classList.add("card");


        cInfo1.appendChild(cardTitle);
        cInfo1.appendChild(cardDescription);

        cInfo2.appendChild(cardStatus);
        cInfo2.appendChild(cardPrice);

        cardContent.appendChild(cInfo1);
        cardContent.appendChild(cInfo2);

        card.appendChild(cardImg);
        card.appendChild(cardContent);

        cardHolder.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadContent();
});