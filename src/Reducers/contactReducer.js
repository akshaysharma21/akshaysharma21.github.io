const INITIAL_STATE = {"expanded": false, "count": 0}

export default function contactReducer(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        
      case 'toggle': {
        // Can return just the new todos array - no extra object around it
        state = {...state, "expanded": !state.expanded}
        console.log("toggle")
        return state
      }

      case "update": {
          state = {...state, "count": state.count+=1}
          return state;
      }

      default:
        return state
    }
  }