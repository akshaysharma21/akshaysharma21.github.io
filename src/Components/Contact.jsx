import {Styles} from '../utils/utils';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { useSelector, useDispatch } from 'react-redux';
import IconLink from './IconLink';
import { useMediaQuery } from 'react-responsive'



export default function Contact(){ 
    let obj = {top: window.innerHeight*0.2}
    const toggleState = useSelector((state) => state.contact.expanded)
    const dispatch = useDispatch();
    let mobile = useMediaQuery({ query: '(max-width: 450px)' })


    console.log("toggleState: ", toggleState)
return(
        <div style={{width:"100%",alignItems:"center", justifyContent:'center', border: "none", borderWidth:"10px", borderColor:"red"}}>
            
            <div>
                <h1 style={{...Styles.containerContent, ...obj, ...{fontSize:(mobile) ? '220%':'500%', border:"none", borderColor:"blue", marginBottom:0}}}>Akshay Sharma</h1><br/>
                <p style={{...Styles.containerContent, ...obj, ...{fontSize: (mobile) ? '90%':'180%',border: "none", marginTop:0, borderColor:"blue"}}}>Aspiring Software Engineer</p>
                <p style={{...Styles.containerContent, ...obj, ...{fontSize: (mobile) ? '55%':'110%',border: "none", marginTop:(mobile) ? 0:-20, borderColor:"blue"}}}>Distributed Computing {(mobile)? <br/> : "|"} Machine Learning {(mobile)? <br/> : "|"} Computer Graphics</p><br/>
                <p style={{...Styles.containerContent, ...obj, ...{fontSize: (mobile) ? '45%':'80%',border: "none", marginTop:0, borderColor:"blue"}}}>All graphical effects on this website are made from scratch.<br/> Click anywhere outside the tilting card to draw a hilbert curve!</p><br/><br/>
            </div>
            
            <div style={{...Styles.containerContent, ...{marginTop: 200, display:'flex', flexDirection: (mobile || toggleState) ? "column" : "row", alignSelf: 'center', justifyContent: 'center', verticalAlign:'top'}}}>
                <IconLink handleClick = {() => dispatch({type: "toggle"})} link={"#"} icon={<EmailIcon sx={{ fontSize: (mobile)? 35 : 65, color:"Grey" }}/>} hoverIcon={<EmailIcon sx={{ fontSize: mobile? 35 : 65, color:"White" }}/>}/>
                <p style={{fontSize:mobile?20:30, marginTop:mobile? -5: -20}}>Sharmaa2@myumanitoba.ca</p>
            </div>

        </div>
    )
}