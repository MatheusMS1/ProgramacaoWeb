import styles from './ButtonFatec.module.css'

function ButtonFatec(props){
    const {type, label} = props

    return(
        <button className = {styles.buttonFatec} type={type}>
            Fatec: {label}
        </button>
    )
}

export default ButtonFatec