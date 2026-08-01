import Header from "../components/layout/Header"
import PageContainer from "../components/layout/PageContainer"
export default function FrontDaskDashboard() {
    return (
        <>
            <Header />
            <PageContainer />
            <div>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '10px',
                    fontSize: '14px',
                }}>MdiCare Clinic &copy; 2026 • Built with React</p>
            </div>
        </>
    )
}