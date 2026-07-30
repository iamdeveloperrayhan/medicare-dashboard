import StatCard from "./StatCard"
import DoctorPanel from "../doctors/DoctorPanel"
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
    return (
        <>
            <div className="main_section" style={{
                display: 'grid',
                gridAutoFlow: 'column',
                justifyContent: 'space-between',
            }}>
                <DoctorPanel />
                <DoctorPanel />
            </div>
        </>
    )
}