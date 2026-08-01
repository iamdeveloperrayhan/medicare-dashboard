import '../../styles/DoctorPanel.css'
import doctors from "../../data/doctors";
import InputBox from "../ui/Input"
import Badge from '../ui/Badge'
import { DoctorCard } from '../ui/Card';
export default function DoctorPanel() {

    const getProfileInitials = (name) => {
        if (!name) return ""

        const words = name.trim().split(/\s+/)

        const filteredWords = words.filter((word) => !["dr", "dr.", "mr", "mr.", "mrs", "mrs.", "ms", "ms.", "prof", "prof."].includes(word.toLowerCase()))

        return filteredWords
            .slice(0, 2)
            .map((word) => word[0].toUpperCase())
            .join("")
    }
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
                        doctors.map((doctor) => (
                            <div key={doctor.id}>
                                <DoctorCard profilePic={getProfileInitials(doctor.name)} doctorName={doctor.name} specialization={`${doctor.department} • ${doctor.specialization}`} visitingFee={doctor.visitingFee} />
                            </div>))
                    }
                </div>
            </div>
        </>
    )
}