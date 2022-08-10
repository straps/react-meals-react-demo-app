import classes from "./Modal.module.css";

import ReactDOM from "react-dom";
import Card from "./Card";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={props.onBackdropClick}></div>
      <Card>
        <div className={classes.modal}>{props.children}</div>
      </Card>
    </>,
    document.getElementById("overlays")
  );
};

export default Modal;
