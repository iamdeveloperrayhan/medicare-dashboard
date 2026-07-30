import '../../styles/DoctorPanel.css'
import InputBox from "../ui/Input"
import Badge from '../ui/Badge'
export default function DoctorPanel() {
    return (
        <>
            <div className="doctor_panel_main">
                <div className="doctor_panel_title">
                    <h2>Our Doctors</h2>
                    <Badge content='8'/>
                </div>
                <InputBox typeName='search' placeholderName='🔍 Search doctor by name...'/>
            </div>
        </>
    )
}