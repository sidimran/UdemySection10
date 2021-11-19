import React, { useEffect, useRef,useImperativeHandle} from "react";
import classes from "./Input.module.css";
// const Input = (props) => {

const Input = React.forwardRef((props,ref) =>{
  const inputRef = useRef();

//   useEffect(
//     () => () => {
//       inputRef.current.focus();
//     },
//     []
//   );  // .focus() its a javascript method, it will through error.


const activate  =() =>{
    inputRef.current.focus();
}


useImperativeHandle(ref ,()=>{
    return {
        focus:activate
    }
})
  return (
    <div
      className={`${classes.control} ${
        // emailIsValid === false ? classes.invalid : ""
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );

});

export default Input;
