import {combineReducers} from 'redux';

import {counter, counter2} from './counter';

const reducer = combineReducers({
    counter,
    counter2,
});

export default reducer;
