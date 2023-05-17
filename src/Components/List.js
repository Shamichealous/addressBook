import React, { useEffect, useState } from 'react'
import Item from './Item';

function List(props) {
    const [items, setItems] = useState([]);
    // console.log(items)
    // const [isHidden, setHide] = useState(true)


    useEffect(()=> {
        fetch(props.url).then((res) => {
            return res.json();
        }).then((data)=> {
            setItems(data.results)
        });
    }, []);
    

    // useEffect(() => {
    //     console.log(items)
    // }, [items]);


  return (
    <ul>
        {
            items.map((item) => {
                // console.log(item)
                return <Item item={item} />;
            })
        }
    </ul>
  )
}
export default List;