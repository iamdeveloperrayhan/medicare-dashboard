import '../../styles/Badge.css'
export default function Badge({ content }) {
    return (
        <>
            <div className="badge_main">
                <span>{content}</span>
            </div>
        </>
    )
}