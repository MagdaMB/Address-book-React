import React from 'react';
import "./ListItem.css";

// class ListItem extends React.Component {
//     render(props) {
//         return(
//             <ul>
//               <li>
//                 <h4>{props.name}</h4>
//                 <p>{props.phone}</p>
//                 <p>{props.city}</p>
//               </li>  
//             </ul>
//         )
//     }
// }

const ListItem = (props) => {
  return(
    <ul>
               <li>
                <h4>{props.name}</h4>
                <p>{props.phone}</p>
                 <p>{props.city}</p>
               </li>  
             </ul>
  )
}

export default ListItem;