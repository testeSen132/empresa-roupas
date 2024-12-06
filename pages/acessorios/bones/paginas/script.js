function trocarImagem() {
    var imagem = document.getElementById("imagem");

    // Verificar qual imagem está sendo exibida e trocar
    if (imagem.src.match("imagem1")) {
        imagem.src = "imagens/"; // Substitua pelo caminho da sua segunda imagem
    } else {
        imagem.src = "imagem1.jpg"; // Substitua pelo caminho da sua primeira imagem
    }
}


const add = document.getElementById("plus")
const sub = document.getElementById("minus")
const count = document.getElementById("counter")

let myCount = 0

add.addEventListener("click", () => {
    myCount += 1
    count.innerText = myCount
})

sub.addEventListener("click", () => {

    if (myCount >= 1) {
        myCount -= 1
        count.innerText = myCount
    }

})

const swatches = document.querySelectorAll('.swatch-item');
const selectedSize = document.getElementById('selected-size');

swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        const size = swatch.getAttribute('data-size');
        selectedSize.textContent = ` ${size}`;
    });
});