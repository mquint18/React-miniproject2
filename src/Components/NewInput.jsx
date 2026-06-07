
function NewInput({
    name,
    value,
    onChange,
    placeholder,
    multiline = false
}) {
    if (multiline) {
        return (
            <textarea 
            className="multi-line"
            name={name} 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />)


           
    }


    return(

       <input 
       className="input" 
       name = {name}
       value= {value}
       onChange={onChange}
       placeholder={placeholder}
       type="text" 
       />
    )
}

export default NewInput;