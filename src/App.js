import React from 'react';
import './App.css';
import Background from './Components/Background';
import TiltCard from './Components/TiltCard';
import {Styles} from "./utils/utils";
import Home from './Components/Home';
import Contact from './Components/Contact';
import { useSelector, useDispatch } from 'react-redux';
import {useMediaQuery} from 'react-responsive';

function App() {

  const contactToggle = useSelector((state) => state.contact.expanded);
  const tiltCardID = useSelector((state) => state.contact.count);
  let mobile = useMediaQuery({ query: '(max-width: 450px)' })

  // const tiltcard = React.useMemo(props => {return <TiltCard key={(""+tiltCardID)} />})

  return (
    <div className="App" style={{overflow: 'auto', background: "linear-gradient(black, transparent)", backgroundColor:'black'}}>
        {/* <div>
          <Card  bg="Secondary" style={{ width: '18rem', alignSelf:'center'}}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title><b>Akshay Dev</b></Card.Title>
              <Card.Text>
                Just tryina score a good job...
              </Card.Text>
            </Card.Body>
          </Card>
        </div> */}
        <div style={Styles.bgcontainer}>
            <Background/>
        </div>

        <div style={Styles.container}>
          <TiltCard mobile={mobile}/>
          {/* <TiltCard/> */}
        </div>

        {contactToggle? <Contact/> : <Home/>}

        {/* <footer>© Akshay Sharma, 2021</footer> */}
        {/* <Home/> */}

        {/* <Tilt>
          <div style={styles.rectangle}/>
        </Tilt> */}
        
    </div>
  );
}

// const styles = {
//   bgcontainer: {
//     // flex: 1,
//     zIndex: -1,
//     position:'absolute',
//     width: '100%',
//     height: '100%',
//     top:0,
//     left:0
//   },
//   container: {
//     // flex: 1,
//     zIndex: 2,
//     position:'absolute',
//     width: '100%',
//     height: '100%',
//     top:0,
//     left:0
//   },
//   containerContent: {
//     // flex: 1,
//     zIndex: 3,
//     position:'relative',
//     width: '100%',
//     height: '100%',
//     top:0,
//     left:0,
//     color: 'silver',
//     textAlign: 'center'
//   },
//   header: {
//     display:'block',
//     zIndex:2,
//     color: 'red',
//     alignContent: 'center'
//   },
//   circle: {
//     height: 100,
//     width: 100,
//     borderRadius: 50,
//     position: 'absolute',
//     top: 150,
//     right: 10,
//     elevation: 10,
//     backgroundColor: 'yellow',
//   },
//   rectangle: {
//     display: 'block',
//     width: 100,
//     height: 100,
//     background: 'black',
//     color: 'black',
//   }
// };

export default App;
