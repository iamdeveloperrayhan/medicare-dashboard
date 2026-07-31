import { forwardRef } from 'react'
import '../../styles/Input.css'

const InputBox = forwardRef(function InputBox(
    { typeName, placeholderName, className, value, onChange },
    ref
) {
    return (
        <input
            ref={ref}
            className={className ? `input_box ${className}`.trim() : 'input_box'}
            type={typeName}
            placeholder={placeholderName}
            value={value}
            onChange={onChange}/>
    )
})

export default InputBox