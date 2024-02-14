const Title = ({title, color}) => {
    return (
        <div>
            <h2 style={ {color: color} }>{title}</h2>
        </div>
    )
}

Title.defaultProps = {
    color: '#00ffff',
    textTransform: 'uppercase'
}

export default Title