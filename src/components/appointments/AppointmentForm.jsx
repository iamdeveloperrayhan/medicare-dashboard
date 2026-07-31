import '../../styles/AppointmentForm.css'
import InputBox from "../ui/Input"
import Button from '../ui/Button'
export default function AppointmentForm() {
    return (
        <>
            <div className="doctor_panel_main" style={{
                gridColumn: 'span 7',
                height: '900px',
            }}>
                <div className="doctor_panel_title">
                    <h2>Book New Appointment</h2>
                </div>
                <span className="lable">Patient Name <span>*</span></span>
                <InputBox typeName='text' placeholderName='Enter your name here...' />
                <span className="lable">Phone Number <span>*</span></span>
                <InputBox typeName='tel' placeholderName='017XXXXXXXX' />
                <span className="lable">Doctor <span>*</span></span>
                <div>
                    <select className='input_box' name="select" id="select" style={{
                        height: '44px',
                        padding: ' 0px 0px 0px 6px',
                    }}>
                        <option value="0">Select a Doctor</option>
                        <option value="1">Rohim</option>
                        <option value="2">Kobir</option>
                        <option value="3">Salam</option>
                        <option value="4">Jamil</option>
                        <option value="5">Kubad</option>
                        <option value="6">Kashem</option>
                    </select>
                </div>
                <div className='date_time_main'>
                    <div style={{ width: '49%', }}>
                        <span className="lable">Date <span>*</span></span>
                        <InputBox typeName='date' className='input_box'/>
                    </div>
                    <div style={{ width: '49%', }}>
                        <span className="lable">Time <span>*</span></span>
                        <InputBox typeName='time' className='input_box'/>
                    </div>
                </div>
                <span className="lable">Note (Optional) <span>*</span></span>
                <textarea style={{ maxWidth: '100%', height: '20%' }} name="note" className='input_box' placeholder='Write a short note...(max 200 chaacters)'></textarea>
                <span className="lable">Report file (Optional) <span>*</span></span>
                <InputBox typeName='file' className='input_box' />
                <Button name='Book Appointment' className='btn_submit'/>
                <Button name='Reset' className='btn_reset'/>
            </div>
        </>
    )
}