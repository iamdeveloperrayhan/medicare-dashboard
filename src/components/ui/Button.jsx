import '../../styles/Button.css'
export default function Button({ name, className, onClick }) {
    function cardSelectHandel(e) {
        const selectButton = e.target
        const doctorCard = selectButton.closest('.doctor_card')
        const span = doctorCard.querySelector("span")

        const grandParent = selectButton.closest('.doctor_card_main')
        if (selectButton.classList.contains('btn_reset')) {
            selectButton.classList.remove('btn_reset')
            selectButton.classList.add('btn_submit')
            selectButton.textContent = "Selected"

            grandParent.classList.add('active_card')
            span.style.backgroundColor = "#FFFFFF"

        } else {
            selectButton.classList.remove('btn_submit')
            selectButton.classList.add('btn_reset')
            selectButton.textContent = "Select"

            grandParent.classList.remove('active_card')
            span.style.backgroundColor = "#CCFBF1"
        }
    }

    const handleClick = onClick ? onClick : cardSelectHandel

    return <button onClick={handleClick} className={`btn ${className}`}>{name}</button>
}