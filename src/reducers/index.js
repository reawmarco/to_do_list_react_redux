/**
 * Created by reawmarco on 06/03/17.
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
