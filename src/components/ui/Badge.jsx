import '../../styles/Badge.css'
export default function Badge({ className, content }) {
    function badgeHandle() {
        const badges = document.querySelectorAll(
            '.filter_badge, .filter_badge_unselect'
        )

        badges.forEach((badge) => {
            badge.addEventListener('click', () => {

                badges.forEach((b) => {
                    b.classList.remove('filter_badge')
                    b.classList.add('filter_badge_unselect')
                })

                badge.classList.remove('filter_badge_unselect')
                badge.classList.add('filter_badge')
            })
        })
    }
    return (
        <>
            <div onClick={badgeHandle} className={className}>
                <span>{content}</span>
            </div>
        </>
    )
}