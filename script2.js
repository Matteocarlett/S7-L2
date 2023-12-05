function initCounter() {
    if (!sessionStorage.getItem('counter')) {
        sessionStorage.setItem('counter', 0);
    }
}

function updateCounter() {
    let counterElement = document.getElementById('counter')
    let counterValue = parseInt(sessionStorage.getItem('counter'))
counterValue++
sessionStorage.setItem('counter', counterValue)
counterElement.textContent = counterValue
}

initCounter()
setInterval(updateCounter, 1000)