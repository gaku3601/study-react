const initialState = {
  fuga: 1
}

export function counter(state = initialState, action) {
  switch(action.type) {
    case 'INC': {
      return {fuga: state.fuga + 1}
    }
    case 'DEC': {
      return {fuga: state.fuga - 1}
    }
    default:
      return state
  }
}

export function counter2(state = initialState, action) {
  switch(action.type) {
    case 'INC2': {
      return {fuga: state.fuga + 1}
    }
    case 'DEC2': {
      return {fuga: state.fuga - 1}
    }
    default:
      return state
  }
}
