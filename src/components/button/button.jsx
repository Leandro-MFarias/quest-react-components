import React from "react"

const Button = ({label}) => {
    const baixandoCV = () => {
        alert('Você está baixando o CV')
    }

    return (
        <button id="btn" onClick={baixandoCV}>{label}</button>
    )
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button