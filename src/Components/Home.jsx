import {Styles} from '../utils/utils';
import React, {useEffect, useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import { useDispatch } from 'react-redux';
import IconLink from './IconLink';
import { useMediaQuery } from 'react-responsive'
// import { Link } from 'react-router-dom'

export default function Home(){ 
    let obj = {top: window.innerHeight*0.2}
    let dispatch = useDispatch();
    let [width, setWidth] = useState(window.innerWidth);
    let [height, setHeight] = useState(window.innerHeight);
    
    let mobile = useMediaQuery({ query: '(max-width: 450px)' })

    if(mobile) {
        console.log("working on a mobile");
    }

    console.log("width: ", window.innerWidth, mobile)

    const resizeHandler = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
       window.onresize = resizeHandler
    }, [])

return(
        <div style={{width:"100%",alignItems:"center", justifyContent:'center', border: "none", borderWidth:"10px", borderColor:"red"}}>
            
            <div>
                <h1 style={{...Styles.containerContent, ...obj, ...{fontSize:(mobile) ? '220%':'500%', border:"none", borderColor:"blue", marginBottom:0}}}>Akshay Sharma</h1><br/>
                <p style={{...Styles.containerContent, ...obj, ...{fontSize: (mobile) ? '90%':'180%',border: "none", marginTop:0, borderColor:"blue"}}}>Aspiring Software Engineer</p>
                <p style={{...Styles.containerContent, ...obj, ...{fontSize: (mobile) ? '55%':'110%',border: "none", marginTop:(mobile) ? 0:-20, borderColor:"blue"}}}>Distributed Computing {(mobile)? <br/> : "|"} Machine Learning {(mobile)? <br/> : "|"} Computer Graphics</p><br/>
                <p style={{...Styles.containerContent, ...obj, ...{fontSize: (mobile) ? '45%':'80%',border: "none", marginTop:0, borderColor:"blue"}}}>All graphical effects on this website are made from scratch.<br/> Click anywhere outside the tilting card to draw a hilbert curve!</p><br/><br/>
            </div>
            
            <div className="link" style={{...Styles.containerContent, ...{marginTop: (mobile) ? 150:200, display:'flex', flexDirection: (mobile) ? "column" : "row", alignSelf: 'center', justifyContent: 'center', verticalAlign:'top'}}}>
                {/* <a  href={"https://akshaysharma21.github.io/Resume/"}><ArticleIcon sx={{ fontSize: 60, color:"silver" }}/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <IconLink text="Resume" link={"https://akshaysharma21.github.io/Resume/"} icon={<ArticleIcon sx={{ fontSize: (mobile) ? 35:65, color:"Grey" }}/>} hoverIcon={<ArticleIcon sx={{ fontSize: (mobile) ? 35:65, color:"White" }}/>}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <IconLink text="GitHub" link={"https://github.com/akshaysharma21"} icon={<GitHubIcon sx={{ fontSize: (mobile) ? 35:65, color:"Grey" }}/>} hoverIcon={<GitHubIcon sx={{ fontSize: (mobile) ? 35:65, color:"White" }}/>}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <IconLink text="LinkedIn" link={"https://www.linkedin.com/in/sharma-akshay21/"} icon={<LinkedInIcon sx={{ fontSize: (mobile) ? 35:65, color:"Grey" }}/>} hoverIcon={<LinkedInIcon sx={{ fontSize: (mobile) ? 35:65, color:"White" }}/>}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <IconLink text="Contact" handleClick = {() => dispatch({type: "toggle"})} link={"#"} icon={<EmailIcon sx={{ fontSize: (mobile) ? 35:65, color:"Grey" }}/>} hoverIcon={<EmailIcon sx={{ fontSize: (mobile) ? 35:65, color:"White" }}/>}/>

            </div>

        </div>
    )
}