import Card from "../ui/Card"
export default function StatCard() {
    return (
        <>
            <Card image='🩺' title='total doctors' number='08' />
            <Card image='📆' title='total appointments' number='12' />
            <Card image='⌛' title='pending appointments' number='05' />
            <Card image='✅' title='completed appointments' number='08' />
        </>
    )
}