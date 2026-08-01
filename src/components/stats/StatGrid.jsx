import StatCard from "./StatCard"
import DoctorPanel from "../doctors/DoctorPanel"
import AppointmentsPage from "../appointments/AppointmentsPage"
// import AppointmentForm from "../appointments/AppointmentForm"
export default function CardGrid() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                <StatCard />
            </div>
        </>
    )
}

export function DoctorPanelGrid() {
    const isMobile = window.innerWidth <= 1230
    return (
        <>
            <div className="main_section" style={{
                display: 'grid',
                gridAutoFlow: isMobile ? "row" : "column",
                // gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '30px',
                marginTop: '30px',
                justifyContent: 'space-between',
            }}>
                <DoctorPanel />
                {/* <AppointmentForm /> */}
                <AppointmentsPage />
            </div >
        </>
    )
}