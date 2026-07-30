import '../../styles/Input.css'
export default function InputBox({typeName, placeholderName}){
    return <input className="input_box" type={typeName} placeholder={placeholderName}/>
}