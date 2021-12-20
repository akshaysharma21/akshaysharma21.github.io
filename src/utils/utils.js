export const Styles = {
    bgcontainer: {
      // flex: 1,
      overflow: 'auto',
      zIndex: 1,
      position:'absolute',
      width: '100%',
      height: '100%',
      top:0,
      left:0
    },
    container: {
      // flex: 1,
      zIndex: 2,
      position:'absolute',
      width: '100%',
      height: '100%',
      display:'flex',
      top:0,
      left:0
    },
    containerContent: {
      // flex: 1,
      zIndex: 3,
      position:'relative',
      width: '100%',
      height: '100%',
      color: 'silver',
      display: 'flex',
      flexDirection:'row',
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent:'center',
      writable: true,
      top: 0
    },
    header: {
      display:'block',
      zIndex:2,
      color: 'red',
      alignContent: 'center'
    },
    circle: {
      height: 100,
      width: 100,
      borderRadius: 50,
      position: 'absolute',
      top: 150,
      right: 10,
      elevation: 10,
      backgroundColor: 'yellow',
    },
    rectangle: {
      display: 'block',
      width: 100,
      height: 100,
      background: 'black',
      color: 'black',
    },
    link: {
      '&:hover': {
           color:"blue",
      }       
    }
  };