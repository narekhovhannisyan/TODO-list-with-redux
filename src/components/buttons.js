import React from 'react'

export const Button = (props) => {
  return <button onClick={props.onClick}
                 onKeyPress={props.onKeyPress}>
    {props.buttonTitle}</button>
}
