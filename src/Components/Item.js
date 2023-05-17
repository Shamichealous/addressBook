import React, { useState } from 'react'

function Item(props) {
    const [isHidden, setHide] = useState(true)

  return (
    <li>
        <p><img src={props.item.picture.large} alt="image of contact" 
        onClick={() => {isHidden ? setHide(false) : setHide(true)}}/></p>
        {isHidden ?
        <div></div> : <div>
        <p>{props.item.name.first} {props.item.name.last}</p>
        <p>{props.item.email}</p>
        <p>{props.item.gender}</p>
        </div>}
    </li>
  )
}
export default Item;