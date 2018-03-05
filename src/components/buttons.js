import React from 'react'

export const SubmitButton = (props) => {
  return (<button onClick={() => props.onClick(props.elemIndex)}>Done</button>)
}

export const RemoveButton = (props) => {
  return (<button onClick={() => props.onClick(props.elemIndex)}>Remove</button>)
}
