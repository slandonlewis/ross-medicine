const medicine = document.querySelector('#medicine')
const hiddenContent = document.querySelector('#secret')

const showContent = () => {
    hiddenContent.classList.remove('hide')
}

medicine.addEventListener("click", showContent)

