const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('html')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})