gsap.to(".header", {scale: 1.5, duration:1})

const image = document.querySelector("#myImage");
const text = document.querySelector("#link");

const buttonOne=document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonBack = document.querySelector("#reload");


buttonOne.addEventListener("click", easy);
buttonTwo.addEventListener("click", difficult);
function easy(){
    image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/signpost.jpg?v=1674754978646");
    text.textContent="What genre?";
    buttonOne.textContent ="Love novel";
    buttonTwo.textContent ="Crime novel"

    buttonBack.style.display = "block";
    buttonOne.removeEventListener("click", easy);
    buttonTwo.removeEventListener("click", difficult);

    buttonOne.addEventListener("click", love);
    buttonTwo.addEventListener("click", crime);
}

function love(){
    image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/love.jpg?v=1674755045480");
    text.textContent="What country?";
    buttonOne.textContent="England";
    buttonTwo.textContent="France";
    buttonOne.removeEventListener("click", love);
    buttonTwo.removeEventListener("click", crime);

    buttonOne.addEventListener("click", england);
    buttonTwo.addEventListener("click", france)
}
function england(){
    text.textContent= "Jane Austen's six most-famous novels";
    text.setAttribute("href", "https://www.amazon.com/jane-austen-books/s?k=jane+austen+books");
    image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/jane.jpg?v=1674755076903");
    image.setAttribute("width", "380")
    text.setAttribute("target", "_blank");
    buttonOne.removeEventListener("click", england);
    buttonTwo.removeEventListener("click", france);
    
    buttonOne.style="display: none";
    buttonTwo.style="display:none";
}
function france(){
    text.textContent= "Hunting and Gathering by Anna Gavalda.";
    text.setAttribute("href", "https://www.amazon.com/Hunting-Gathering-Anna-Gavalda/dp/159448144X");
    image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/gavaldaA.jpg?v=1674755099764");
    image.setAttribute("width", "430");
    text.setAttribute("target", "_blank");
    buttonOne.removeEventListener("click", england);
    buttonTwo.removeEventListener("click", france);

    buttonOne.style="display: none";
    buttonTwo.style="display:none";
}
function crime(){
    image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/lightHouse.jpg?v=1674755124376");
    text.textContent="What country?";
    buttonOne.textContent = "Canada";
    buttonTwo.textContent = "Great Britain";
    buttonOne.removeEventListener("click", love);
    buttonTwo.removeEventListener("click", crime);

    buttonOne.addEventListener("click", canada);
    buttonTwo.addEventListener("click", agatha);
    console.log("crime");
}
function canada(){
    image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/LPenny.jpg?v=1674755149344");
    image.setAttribute("width", "600");
    text.textContent="Chief Inspector Gamache mysteries by Louise Penny.";
    text.setAttribute("href", "https://www.amazon.com/louise-penny-books-order/s?k=louise+penny+books+in+order");
    text.setAttribute("target", "_blank");
    buttonOne.removeEventListener("click", canada);
    buttonTwo.removeEventListener("click", agatha);

    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    console.log("canada");
}
function agatha(){
    image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/agathaA.jpg?v=1674755170798");
    image.setAttribute("width", "450");
    text.textContent="Agatha Christie's detective novels.";
    text.setAttribute("href", "https://www.amazon.com/Agatha-Christie-Books/s?k=Agatha+Christie&rh=n%3A283155");
    text.setAttribute("target", "_blank");
    buttonOne.removeEventListener("click", canada);
    buttonTwo.removeEventListener("click", agatha);

    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    console.log("agatha");
}
    function difficult(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/signpost.jpg?v=1674754978646");
        text.textContent="What genre?";
        buttonOne.textContent ="Some novel";
        buttonTwo.textContent ="Crime novel";

        buttonBack.style.display = "block";
        buttonOne.removeEventListener("click", easy);
        buttonTwo.removeEventListener("click", difficult);

        buttonOne.addEventListener("click", novel);
        buttonTwo.addEventListener("click", detective);
        console.log("difficult");

    }
    function novel(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/books.jpg?v=1674755192061");
        text.textContent = "What genre?";
        buttonOne.textContent = "Biographical novel";
        buttonTwo.textContent = "Something philosophical and magical";
        buttonOne.removeEventListener("click", novel);
        buttonTwo.removeEventListener("click", detective);

        buttonOne.addEventListener("click", biographical);
        buttonTwo.addEventListener("click", philosophical);
        console.log("novel");
    }
    function biographical(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/historical.jpg?v=1674755224472");
        text.textContent = "Where ... when?"
        buttonOne.textContent = "Italy  XV-XVI century";
        buttonTwo.textContent = "Spane  XVIII century";
        buttonOne.removeEventListener("click", biographical);
        buttonTwo.removeEventListener("click", philosophical);

        buttonOne.addEventListener("click", italy);
        buttonTwo.addEventListener("click", spane);
        console.log("biographical");
    }
    function italy(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/irvingStoneA.jpg?v=1674755256519");
        image.setAttribute("width", "650");
        text.textContent = "The Agony and the Ecstasy. Irving Stone's classic biographical novel of Michelangelo.";
        text.setAttribute("href", "https://www.amazon.com/Agony-Ecstasy-Irving-Stone/dp/B0000BTHJD");
        text.setAttribute("target", "_blank");
        buttonOne.removeEventListener("click", italy);
        buttonTwo.removeEventListener("click", spane);

        buttonOne.style="display: none";
        buttonTwo.style="display: none";
        console.log("italy");
    }
    function spane(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/greenGoya.jpg?v=1674755275406");
        image.setAttribute("width", "650");
        text.textContent = "Lion Feuchtwanger's biographical novel about the life of Francisco Goya.";
        text.setAttribute("href", "https://www.amazon.com/Goya-%E2%80%93-Lion-Feuchtwanger-Books/s?k=Goya+%E2%80%93+Lion+Feuchtwanger&rh=n%3A283155");
        text.setAttribute("target", "_blank");
        buttonOne.removeEventListener("click", italy);
        buttonTwo.removeEventListener("click", spane);

        buttonOne.style="display: none";
        buttonTwo.style="display: none";
        console.log("spane");
    }
    function philosophical(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/labirint.jpg?v=1674755296445");
        text.textContent = "What country?";
        buttonOne.textContent = "Japan";
        buttonTwo.textContent = "Canada";
        buttonOne.removeEventListener("click", biographical);
        buttonTwo.removeEventListener("click", philosophical);

        buttonOne.addEventListener("click", japan );
        buttonTwo.addEventListener("click", davies);
        console.log("philosophical");
    }
    function japan(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/kafka.jpeg?v=1674755323177");
        image.setAttribute("width", "500");
        text.textContent = "Kafka on the Shore by Haruki Murakami.";
        text.setAttribute("href", "https://www.amazon.com/Kafka-Shore-Haruki-Murakami/dp/0099458322");
        text.setAttribute("target", "_blank");
        buttonOne.removeEventListener("click", japan);
        buttonTwo.removeEventListener("click", davies);
        
        buttonOne.style="display: none";
        buttonTwo.style="display: none";
        console.log("japan");
    }
    function davies(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/davies.jpg?v=1674755342281");
        image.setAttribute("width", "650");
        text.textContent = "The Cornish Trilogy is three related novels by Canadian novelist, playwright, critic, journalist, and professor Robertson Davies.";
        text.setAttribute("href", "https://www.amazon.com/Cornish-Trilogy-Rebel-Angels-Orpheus/dp/0140158502");
        text.setAttribute("target", "_blank");
        buttonOne.removeEventListener("click", japan);
        buttonTwo.removeEventListener("click", davies);

        buttonOne.style="display: none";
        buttonTwo.style="display: none";
        console.log("davies");
    }
    function detective(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/lato.jpg?v=1674755366058");
        text.textContent = "What country?";
        buttonOne.textContent = "Norway";
        buttonTwo.textContent = "Sweden";
        buttonOne.removeEventListener("click", novel);
        buttonTwo.removeEventListener("click", detective);

        buttonOne.addEventListener("click", norway);
        buttonTwo.addEventListener("click", sweden);
        console.log("detective");
    }
    function norway(){
        image.setAttribute("src",  "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/nesboA.jpg?v=1674755395001");
        text.textContent = "Bestselling thrillers from Jo Nesbø. ";
        text.setAttribute("href", "https://www.amazon.com/Books-Jo-Nesbo/s?rh=n%3A283155%2Cp_27%3AJo+Nesbo");
        text.setAttribute("target", "_blank");
        buttonOne.removeEventListener("click", norway);
        buttonTwo.removeEventListener("click", sweden);

        buttonOne.style="display: none";
        buttonTwo.style="display: none";
        console.log("norway");
    }
    function sweden(){
        image.setAttribute("src", "https://cdn.glitch.global/a092670e-fee7-4d71-8f67-6b411b14bd74/onestep.jpg?v=1674755418475");
        image.setAttribute("width", "600");
        text.textContent = "One Step Behind by Henning Mankell.";
        text.setAttribute("href", "https://www.amazon.com/One-Step-Behind-Henning-Mankell/dp/1400031516");
        text.setAttribute("target", "_blank");
        buttonOne.removeEventListener("click", norway);
        buttonTwo.removeEventListener("click", sweden);
        buttonOne.style="display: none";
        buttonTwo.style="display: none";
        console.log("sweden");
    }

buttonBack.addEventListener("click", function(){
    location.reload();

})

