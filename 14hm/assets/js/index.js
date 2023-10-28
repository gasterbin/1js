'use strict';

function printNumbersWithInterval(from, to, interval) {
    let currentNumber = from;
    const intervalId = setInterval(function() {
        console.log(currentNumber);
        if (currentNumber === to) {
            clearInterval(intervalId);
        }
        currentNumber++;
    }, interval);
}
printNumbersWithInterval(1, 10, 1000); 


function printNumbersWithTimeout(from, to, interval) {
    function printNumber(currentNumber) {
        console.log(currentNumber);
        if (currentNumber < to) {
            setTimeout(printNumber, interval, currentNumber + 1);
        }
    }
    printNumber(from);
}


printNumbersWithTimeout(1, 10, 1000); 

function displayCountdownAndImage(seconds) {
    const countdownElement = document.createElement('h1');
    countdownElement.style.fontFamily = 'system-ui';
    document.body.appendChild(countdownElement);

    function updateCountdown(seconds) {
        countdownElement.textContent = `Залишилося часу: ${seconds} секунд`;
    }

    const countdownInterval = setInterval(function() {
        updateCountdown(seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '';

            const imgElement = document.createElement('img');
            imgElement.src = 'assets/pic1.png'; 
            document.body.appendChild(imgElement); 
        }
    }, 1000);
}

displayCountdownAndImage(15); 


