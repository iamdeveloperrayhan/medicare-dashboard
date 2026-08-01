// import { useState } from 'react'
import '../../styles/AppointmentRow.css'
import Badge from '../ui/Badge'
// import appointmentsData from "../../data/appointments"

const STATUS_OPTIONS = ["Pending", "Confirmed", "Completed", "Cancelled"]

export default function AppointmentRow({ appointments, onStatusChange, onDelete }) {
    // const [appointments, setAppointments] = useState(appointmentsData)

    // const handleStatusChange = (id, newStatus) => {
    //     setAppointments((prev) =>
    //         prev.map((appointment) =>
    //             appointment.id === id
    //                 ? { ...appointment, status: newStatus }
    //                 : appointment
    //         )
    //     )
    // }

    // const handleDelete = (id) => {
    //     setAppointments((prev) => prev.filter((appointment) => appointment.id !== id))
    // }

    return (
        <div className='table_main'>
            <div className="doctor_panel_title" style={{
                marginTop: '10px',
            }}>
                <h2>Appointments</h2>
                <Badge className='badge_main' content='12' />
            </div>
            <div className='filter_section'>
                <Badge className='filter_badge' content='All (12)' />
                <Badge className='filter_badge_unselect' content='Pending (5)' />
                <Badge className='filter_badge_unselect' content='Confirmed (2)' />
                <Badge className='filter_badge_unselect' content='Conpleted (4)' />
                <Badge className='filter_badge_unselect' content='Cancelled (1)' />
            </div>
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
                                    {/* <p>{appointment.doctorName}</p> */}
                                    <h4>{appointment.doctorId}</h4>
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
                                                onStatusChange(appointment.id, e.target.value)}>
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
                                        onDelete(appointment.id)
                                    }}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
