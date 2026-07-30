import CardGrid, { DoctorPanelGrid } from '../stats/StatGrid'
export default function PageContainer() {
    return (
        <>
            <div style={{
                width: '1200px',
                margin: '30px auto 0 auto',
            }}>
                <CardGrid />
                <DoctorPanelGrid />
            </div>
        </>
    )
}