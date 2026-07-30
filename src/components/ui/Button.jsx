import '../../styles/Button.css'
export default function Button({name, className}){
    return <button className={`btn ${className}`}>{name}</button>
}