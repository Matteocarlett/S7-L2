function saveName() {
    let nome = document.getElementById('name').value
    localStorage.setItem('username', nome)
    showSavedName()
    document.getElementById('name').value = '';
}
function removeName() {
    localStorage.removeItem('username')
    showSavedName()
}

function showSavedName() {
    let savedValue = localStorage.getItem('username')
    let elementSavedValue = document.getElementById('nomeSalvato')
    
    if (savedValue) {
        elementSavedValue.textContent = 'Nome Salvato: ' + savedValue
    } else {
        elementSavedValue.textContent = ''
    }
}

showSavedName()
