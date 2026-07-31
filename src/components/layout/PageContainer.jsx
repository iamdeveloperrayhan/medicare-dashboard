import CardGrid, { DoctorPanelGrid } from '../stats/StatGrid'
import AppointmentList from '../appointments/AppointmentList'
export default function PageContainer() {
    const isMobile = window.innerWidth <= 1270

    return (
        <>
            <div className='conteiner_main' style={{
                maxWidth: '1200px',
                margin: isMobile ? "30px" : "0 auto 30px auto",
            }}>
                <CardGrid />
                <DoctorPanelGrid />
                <AppointmentList />
            </div>
        </>
    )
}