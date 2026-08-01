import '../../styles/Card.css'
import Button from './Button'
export default function Card({ image, title, number }) {
    return (
        <>
            <div className='card_main' style={{ marginTop: '30px' }}>
                <div className='card'>
                    <h1>{image}</h1>
                    <p>{title}</p>
                    <h2>{number}</h2>
                </div>
            </div>
        </>
    )
}

export function DoctorCard({ profilePic, doctorName, specialization, visitingFee }) {
    return (
        <>
            <div className='doctor_card_main'>
                <div className='doctor_card'>
                    <div><span>{profilePic}</span></div>
                    <div className='doctor_detail'>
                        <p>{doctorName}</p>
                        <p>{specialization}</p>
                        <p>Fee ৳ {visitingFee}</p>
                    </div>
                    <div>
                        <Button name='Select' className='btn_reset card_btn' />
                    </div>
                </div>
            </div>
        </>
    )
}