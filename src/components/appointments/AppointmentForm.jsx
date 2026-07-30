import '../../styles/AppointmentForm.css'
import InputBox from "../ui/Input"
export default function AppointmentForm() {
    return (
        <>
            <div className="doctor_panel_main" style={{
                gridColumn: 'span 7',
            }}>
                <div className="doctor_panel_title">
                    <h2>Book New Appointment</h2>
                </div>
                <span className="lable">Patient Name <span>*</span></span>
                <InputBox typeName='text' placeholderName='Enter your name here...' />
                <span className="lable">Phone Number <span>*</span></span>
                <InputBox typeName='tel' placeholderName='017XXXXXXXX' />
                <span className="lable">Doctor <span>*</span></span>
                <InputBox typeName='time' placeholderName='I Need to add a select field here not this field' />
            </div>
        </>
    )
}