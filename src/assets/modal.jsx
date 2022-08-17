const cards = document.getElementsByClassName('turkuvaz-card');

const modal = document.getElementById('myModal');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        modal.style.display = "block";

        const modalimg = cards[i].children[0].children[0].src;
        const modaltitle = cards[i].children[1].children[0].innerHTML;
        console.log(modaltitle);

        if (modal.style.display == "block") {


            modal.children[0].children[1].children[0].children[0].src = modalimg;
            modal.children[0].children[1].children[1].children[0].innerHTML = modaltitle;
        }

    });

}