import '../../styles/Badge.css'
export default function Badge({className, content }) {
    return (
        <>
            <div className={className}>
                <span>{content}</span>
            </div>
        </>
    )
}