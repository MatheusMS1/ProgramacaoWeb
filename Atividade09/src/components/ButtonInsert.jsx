import styles from './ButtonInsert.module.css'

function ButtonInsert(props){
    const {type, value, placeholder} = props

    return(
        <input className = {styles.buttonInsert} type={type} value={value} placeholder={placeholder}>
        </input>
    )
}

export default ButtonInsert