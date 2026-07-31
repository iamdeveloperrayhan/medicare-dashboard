import { useState } from 'react'
import '../../styles/AppointmentRow.css'
import appointmentsData from "../../data/appointments"

const STATUS_OPTIONS = ["Pending", "Confirmed", "Completed", "Cancelled"]

export default function AppointmentRow() {
    const [appointments, setAppointments] = useState(appointmentsData)

    const handleStatusChange = (id, newStatus) => {
        setAppointments((prev) =>
            prev.map((appointment) =>
                appointment.id === id
                    ? { ...appointment, status: newStatus }
                    : appointment
            )
        )
    }

    const handleDelete = (id) => {
        setAppointments((prev) => prev.filter((appointment) => appointment.id !== id))
    }

    return (
        <div className='table_main'>
            <table>
                <thead>
                    <tr>
                        <th>PATIENT</th>
                        <th>DOCTOR ID</th>
                        <th>DATE & TIME</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td>
                                <div className="patient_info">
                                    <h4>{appointment.patientName}</h4>
                                    <p>{appointment.phone}</p>
                                </div>
                            </td>
                            <td>
                                <div className="doctor_info">
                                    <h4>{appointment.doctorId}</h4>
                                    <p>{appointment.speciality}</p>
                                </div>
                            </td>
                            <td>
                                <div className="date_time">
                                    <p>{appointment.date}</p>
                                    <span>{appointment.time}</span>
                                </div>
                            </td>
                            <td>
                                <div className="status_box">
                                    <span className={`status ${appointment.status.toLowerCase()}`}>
                                        {appointment.status}
                                    </span>

                                    <div className="change_wrapper">
                                        <select
                                            className="change_btn"
                                            value={appointment.status}
                                            onChange={(e) =>
                                                handleStatusChange(appointment.id, e.target.value)}>
                                            {STATUS_OPTIONS.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a className='remove_class'
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleDelete(appointment.id)
                                    }}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
