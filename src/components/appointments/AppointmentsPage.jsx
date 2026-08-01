import { useState } from 'react'
import AppointmentForm from './AppointmentForm'
import AppointmentRow from './AppointmentRow'
import initialAppointments from '../../data/appointments'

export default function AppointmentsPage() {
    const [appointments, setAppointments] = useState(initialAppointments)

    const addAppointment = (newAppointment) => {
        setAppointments((prev) => [...prev, newAppointment])
    }
    // console.log(appointments);

    const handleStatusChange = (id, newStatus) => {
        setAppointments((prev) =>
            prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
        )
    }

    const handleDelete = (id) => {
        setAppointments((prev) => prev.filter((a) => a.id !== id))
    }

    return (
        <>
            <div style={{display: 'grid', gridColumn: 'span 10',}}>
                <AppointmentForm onAddAppointment={addAppointment} />
                <AppointmentRow appointments={appointments} onStatusChange={handleStatusChange} onDelete={handleDelete} />
            </div>
        </>
    )
}
//  gridTemplateColumns: 'repeat(12, 1fr)',