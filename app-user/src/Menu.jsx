function Menu(props){
    const {title, name, links} = props
    return (
        <nav>
            <span>{title}</span><br />
        </nav>
    )
}

export default Menu