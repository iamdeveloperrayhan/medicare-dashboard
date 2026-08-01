import { useState, useRef } from 'react'
import '../../styles/AppointmentForm.css'
import InputBox from "../ui/Input"
import Button from '../ui/Button'
import doctors from '../../data/doctors'

export default function AppointmentForm({ onAddAppointment }) {

    const [patientName, setPatientName] = useState('')
    const [phone, setPhone] = useState('')
    const [doctorId, setDoctorId] = useState('0')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [note, setNote] = useState('')
    
    const [errors, setErrors] = useState({})
    const validate = () => {
        const newErrors = {}

        if (!patientName.trim()) {
            newErrors.patientName = 'Patient name is required.'
        }

        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required.'
        } else if (!/^01[3-9]\d{8}$/.test(phone)) {
            newErrors.phone = 'Enter a valid 11-digit phone number.'
        }

        if (doctorId === '0') {
            newErrors.doctorId = 'Please select a doctor.'
        }

        if (!date) {
            newErrors.date = 'Please select a date.'
        }

        if (!time) {
            newErrors.time = 'Please select a time.'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // I'm Useing here useRef to store file field data. Here is the functionalety fo useRef.
    const fileInputRef = useRef(null)

    const resetForm = () => {
        setPatientName('')
        setPhone('')
        setDoctorId('0')
        setDate('')
        setTime('')
        setNote('')

        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleSubmit = () => {
        const isValid = validate()
        if (!isValid) return

        if (typeof onAddAppointment !== 'function') {
            console.error('onAddAppointment prop is missing.')
            return
        }

        const selectedDoctor = doctors.find((d) => d.id === doctorId)
        const reportFile = fileInputRef.current?.files?.[0] || null

        const newAppointment = {
            id: Date.now(),
            patientName,
            phone,
            // doctorName: selectedDoctor ? `Dr. ${selectedDoctor.name}` : 'Unassigned',
            doctorId: doctorId,
            speciality: selectedDoctor ? selectedDoctor.speciality : '',
            date,
            time,
            note,
            reportFile,
            status: 'Pending',
        }

        // console.log('New appointment submitted:', newAppointment)

        onAddAppointment(newAppointment)
        resetForm()
        setErrors({})
    }

    return (
        <>
            <div className="doctor_panel_main" style={{ marginBottom: '30px',gridColumn: 'auto',}}>
                <div className="doctor_panel_title">
                    <h2>Book New Appointment</h2>
                </div>

                <span className="lable">Patient Name <span>*</span></span>
                <InputBox
                    typeName='text'
                    placeholderName='Enter your name here...'
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)} />
                {errors.phone && <p className="error_text">{errors.patientName}</p>}

                <span className="lable">Phone Number <span>*</span></span>
                <InputBox
                    typeName='tel'
                    placeholderName='017XXXXXXXX'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
                {errors.phone && <p className="error_text">{errors.phone}</p>}

                <span className="lable">Doctor <span>*</span></span>
                <div>
                    <select
                        className='input_box'
                        name="select"
                        id="select"
                        style={{ height: '44px', padding: '0px 0px 0px 6px' }}
                        value={doctorId}
                        onChange={(e) => setDoctorId(e.target.value)}>

                        <option value="0">Select a Doctor</option>
                        {doctors.map((d) => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                        ))}
                    </select>
                    {errors.doctorId && <p className="error_text">{errors.doctorId}</p>}
                </div>

                <div className='date_time_main'>
                    <div style={{ width: '49%' }}>
                        <span className="lable">Date <span>*</span></span>
                        <InputBox
                            typeName='date'
                            className='input_box'
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />
                        {errors.date && <p className="error_text">{errors.date}</p>}

                    </div>
                    <div style={{ width: '49%' }}>
                        <span className="lable">Time <span>*</span></span>
                        <InputBox
                            typeName='time'
                            className='input_box'
                            value={time}
                            onChange={(e) => setTime(e.target.value)} />
                        {errors.time && <p className="error_text">{errors.time}</p>}
                    </div>
                </div>

                <span className="lable">Note (Optional) <span>*</span></span>
                <textarea
                    style={{ maxWidth: '100%', height: '20%' }}
                    name="note"
                    className='input_box'
                    placeholder='Write a short note...(max 200 chaacters)'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}></textarea>

                <span className="lable">Report file (Optional) <span>*</span></span>

                {/* Here i'm using useRef Hook (useRef Used in This File Input Field) */}
                <InputBox typeName='file' className='input_box' ref={fileInputRef} />

                <Button name='Book Appointment' className='btn_submit' onClick={handleSubmit} />
                <Button name='Reset' className='btn_reset' onClick={resetForm} />
            </div>
        </>
    )
}
