import '../../styles/AppointmentList.css'
import AppointmentRow from './AppointmentRow'
import Badge from '../ui/Badge'
export default function AppointmentList() {
    return (
        <>
            <div className='appointment_list_main'>
                <div></div>
                <div className='appointment_detail'>
                    <div className="doctor_panel_title">
                        <h2>Appointments</h2>
                        <Badge className='badge_main' content='12' />
                    </div>
                    <div className='filter_section'>
                        <Badge className='filter_badge' content='All(12)' />
                        <Badge className='filter_badge_unselect' content='Pending (5)' />
                        <Badge className='filter_badge_unselect' content='Confirmed (2)' />
                        <Badge className='filter_badge_unselect' content='Completed (4)' />
                        <Badge className='filter_badge_unselect' content='Cancelled (1)' />
                    </div>
                    <AppointmentRow />
                </div>
            </div>
        </>
    )
}