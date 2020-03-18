//import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialUsers } from '../utils/api'
import { getInitialQuestions } from '../utils/api'

const AUTHED_ID = null;

export function handleInitialQuestions () {
    return (dispatch) => {
        return getInitialQuestions().then((questions) => {
            dispatch(receiveQuestions(questions))
        })
    }
}

export function handleInitialUsers() {
    return (dispatch) => {
        return getInitialUsers().then((users) => {
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}