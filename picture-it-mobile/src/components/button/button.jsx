import React from "react";
import './button.css'
import {Link} from "react-router-dom";

const STYLES = [
    'btn--primary',
    'btn--light',
    'btn--alt',
    'btn--primary-light'
]

function Button  ({
                    children,
                    type,
                    onClick,
                    buttonStyle,
                    buttonSize,
                    buttonIcon,
                    path,
                    target
                       }) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to={path} target={target}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
                {/* <i className={buttonIcon}/> */}
            </button>
        </Link>
)
}
export default Button;

const SIZES = [
    'btn--medium',
    'btn--large'
]
