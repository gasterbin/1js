
const firstBtn = document.getElementById('button1');
firstBtn.setAttribute('style', 'font-size: 16px');
firstBtn.addEventListener('click', () => {
    firstBtn.textContent = "Текст зміненно!";
});

const secondBtn = document.getElementById('button2');
secondBtn.setAttribute('style', 'font-size: 16px');
secondBtn.addEventListener('click', () => {
    secondBtn.style.backgroundColor = 'red';
});

const pic = document.getElementById('image');
pic.addEventListener('mouseenter', () => {
    pic.src = './assets/pic2.jpg';
})

