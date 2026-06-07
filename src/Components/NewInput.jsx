
function NewInput({
     name,
    value,
    onChange,
    placeholder
}) {

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