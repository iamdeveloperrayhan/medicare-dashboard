import '../../styles/DoctorPanel.css'
import doctors from "../../data/doctors";
import InputBox from "../ui/Input"
import Badge from '../ui/Badge'
import { DoctorCard } from '../ui/Card';
export default function DoctorPanel() {
    return (
        <>
            <div className="doctor_panel_main">
                <div className="doctor_panel_title">
                    <h2>Our Doctors</h2>
                    <Badge className='badge_main' content='8' />
                </div>
                <InputBox typeName='search' placeholderName='🔍 Search doctor by name...' />
                <div className='filter_section'>
                    <Badge className='filter_badge' content='All' />
                    <Badge className='filter_badge_unselect' content='Cardiology' />
                    <Badge className='filter_badge_unselect' content='Neurology' />
                    <Badge className='filter_badge_unselect' content='Medicine' />
                    <Badge className='filter_badge_unselect' content='Orthopedics' />
                </div>
                <hr />
                <div>
                    {
                    doctors.map((doctor)=>(
                        <div key={doctor.id}>
                            <DoctorCard profilePic='He' doctorName={doctor.name} specialization={`${doctor.department} • ${doctor.specialization}`} visitingFee={doctor.visitingFee}/>
                        </div>))
                    }
                </div>
            </div>
        </>
    )
}