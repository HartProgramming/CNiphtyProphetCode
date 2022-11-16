import React, { Fragment } from "react";
import classes from './Modal.module.css';
import  ReactDOM  from "react-dom";

const Overlay = props => {
    return <div className={classes.backdrop}>

    </div>
}

const ModalOverlay = props => {

    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portal = document.querySelector('#overlays')

const Modal = props => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<Overlay />, portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </Fragment>
    )
}

export default Modal;