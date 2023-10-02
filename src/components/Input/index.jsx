export const Input = ({id, type, placeholder, value, setValue}) => {
    return(
        <div>
            <input 
            type={type} 
            name={id} 
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}