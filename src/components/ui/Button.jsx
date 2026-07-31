import '../../styles/Button.css'
export default function Button({ name, className }) {
    function cardSelectHandel(e) {
        const selectButton = e.target

        const grandParent = selectButton.closest('.doctor_card_main')

        if (selectButton.classList.contains('btn_reset')) {
            selectButton.classList.remove('btn_reset')
            selectButton.classList.add('btn_submit')

            grandParent.classList.add('active_card')

        } else {
            selectButton.classList.remove('btn_submit')
            selectButton.classList.add('btn_reset')

            grandParent.classList.remove('active_card')
        }
    }
    return <button onClick={cardSelectHandel} className={`btn ${className}`}>{name}</button>
}