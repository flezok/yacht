// расстояние между буквами
const rotateBetweenLetters = (value) => {
    const letters = document.querySelectorAll('.about__title-btn_text')
    
    let deg = 0
    
    for (let letter of letters) {
        letter.style.transform = `rotate(${ deg }deg)`
        deg += value
    }
    
}

window.onload = () => {
    rotateBetweenLetters(10.58);
};