import '../../styles/Card.css'
export default function Card({ image, title, number }) {
    return (
        <>
            <div className='card_main'>
                <div className='card'>
                    <h1>{image}</h1>
                    <p>{title}</p>
                    <h2>{number}</h2>
                </div>
            </div>
        </>
    )
}