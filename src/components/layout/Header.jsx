import '../../styles/Header.css'
import Button from '../ui/Button'
export default function Header() {
    return (
        <>
            <div className="header_main">
                <div className='header_left'>
                    <div>M</div>
                    <div>MediCare Clinic</div>
                    <div>Front Desk Dashboard</div>
                </div>
                <Button name='Crash Test' className='red_btn'/>
            </div>
        </>
    )
}