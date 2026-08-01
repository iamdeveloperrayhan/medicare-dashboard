import '../../styles/Badge.css'
export default function Badge({ className, content }) {
    function badgeHandle() {
        const selectBadge = document.querySelector('.filter_badge');

        selectBadge.addEventListener('click', () => {
            selectBadge.classList.toggle('filter_badge');
            selectBadge.classList.toggle('filter_badge_unselect');
        });
    }
    return (
        <>
            <div onClick={badgeHandle} className={className}>
                <span>{content}</span>
            </div>
        </>
    )
}