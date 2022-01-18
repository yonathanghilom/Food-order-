import { Fragment } from "react"
import { createPortal } from "react-dom"
import classes from './modal.module.css'
const Backdrop = () =>{
    return <div className= {classes.backdrop}> </div>
}
const Modallayover = (props) =>{
    return <div className= {classes.modal}>{props.children}</div>
}
const portals = document.getElementById('layout')
const Modal =(props)=>{
    return <Fragment>
        {createPortal(<Backdrop/>, portals)}
        {createPortal(<Modallayover>{props.children}</Modallayover>, portals)}
    </Fragment>
}
export default Modal