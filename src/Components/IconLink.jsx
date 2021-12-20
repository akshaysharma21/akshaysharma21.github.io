import { Margin } from '@mui/icons-material';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

export default function IconLink(props){ 
    let obj = {top: window.innerHeight*0.2}
    const contact = useSelector((state) => state.contact.expanded)
    let mobile = useMediaQuery({ query: '(max-width: 450px)' })


    let [iconHover, setIconHover] = useState(0);


return(
    <div style={{lineHeight: (mobile)? 0.5: 1}} onClick={props.handleClick} onMouseEnter={()=> setIconHover(1)} onMouseLeave={() => setIconHover(0)}>
        <a href={props.link}>{(iconHover)?props.hoverIcon:props.icon}</a>
        {(iconHover || mobile)? <p><b>{props.text}</b></p>:<p></p> }
    </div>
    )
}