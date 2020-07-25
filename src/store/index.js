import { createContext } from 'react'

//? Context
export const AppContext = createContext()
export const StraightPoolContext = createContext()
export const FargoContext = createContext()

//? Types
const types = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    FOUL: 'foul',
    OPEN_MODAL: 'open modal',
    OPEN_MENU: 'open menu',
    RESET: 'reset',
    NEW_GAME: 'new game',
    CANCEL: 'cancel',
    NEXT: 'next',
    CHANGE_NAME: 'change name',
    CLOSE_MENU: 'close menu'
}

export const { INCREMENT, DECREMENT, FOUL, OPEN_MODAL, OPEN_MENU, RESET, NEW_GAME, CANCEL, NEXT, CHANGE_NAME, CLOSE_MENU } = types

//? Initial State
export const appInitialState = {
    newGameModalOpen: false,
    menuOpen: false
}

export const straightPoolInitialState = {
    playerName1: 'Player 1',
    playerName2: 'Player 2',
    score1: 0,
    score2: 0,
    fouls1: 0,
    fouls2: 0,
    ballsRemaining: 15,
    runs1: [0],
    runs2: [0],
    currentRun: 0,
    players: 1,
    player1: true
}

export const fargoInitialState = {
    scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    inning: 0,
    inOrder: false
}

//? Reducers
export const appReducer = (state, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            state = { ...state, newGameModalOpen: !state.newGameModalOpen }
            return state
        case NEW_GAME:
            state = { ...state, newGameModalOpen: false }
            return state
        case CANCEL:
            state = { ...state, newGameModalOpen: false }
            return state
        case OPEN_MENU:
            state = {...state, menuOpen: true}
            return state
        case CLOSE_MENU:
            state = {...state, menuOpen: false}
            return state
        default:
            return state
    }
}

export const straightPoolReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            if (state.player1) {
                state = {
                    ...state,
                    score1: state.score1 + 1,
                    ballsRemaining: state.ballsRemaining !== 2 ? state.ballsRemaining - 1 : 15,
                    currentRun: state.currentRun + 1,
                    fouls1: 0
                }
                return state
            } else {
                state = {
                    ...state,
                    score2: state.score2 + 1,
                    ballsRemaining: state.ballsRemaining !== 2 ? state.ballsRemaining - 1 : 15,
                    currentRun: state.currentRun + 1,
                    fouls2: 0
                }
                return state
            }
        case DECREMENT:
            if (state.player1) {
                state = {
                    ...state,
                    score1: state.score1 !== 0 ? state.score1 - 1 : 0,
                    ballsRemaining: state.ballsRemaining !== 15 ? state.ballsRemaining + 1 : 15,
                    currentRun: state.currentRun !== 0 ? state.currentRun - 1 : 0
                }
                return state
            } else {
                state = {
                    ...state,
                    score2: state.score2 !== 0 ? state.score2 - 1 : 0,
                    ballsRemaining: state.ballsRemaining !== 15 ? state.ballsRemaining + 1 : 15,
                    currentRun: state.currentRun !== 0 ? state.currentRun - 1 : 0
                }
                return state
            }
        case FOUL:
            if (state.players === 1) {
                let runArr = [...state.runs1, state.currentRun]
                state = {
                    ...state,
                    fouls1: state.fouls1 === 2 ? 0 : state.fouls1 + 1,
                    score1: state.fouls1 === 2 ? state.score1 - 15 : state.score1 - 1,
                    runs1: runArr,
                    currentRun: 0
                }
                return state
            } else {
                if (state.player1) {
                    let runArr = [...state.runs1, state.currentRun]
                    state = {
                        ...state,
                        fouls1: state.fouls1 === 2 ? 0 : state.fouls1 + 1,
                        score1: state.fouls1 === 2 ? state.score1 - 15 : state.score1 - 1,
                        runs1: runArr,
                        currentRun: 0,
                        player1: !state.player1
                    }
                    return state
                } else {
                    let runArr = [...state.runs2, state.currentRun]
                    state = {
                        ...state,
                        fouls2: state.fouls2 === 2 ? 0 : state.fouls2 + 1,
                        score2: state.fouls2 === 2 ? state.score2 - 15 : state.score2 - 1,
                        runs2: runArr,
                        currentRun: 0,
                        player1: !state.player1
                    }
                    return state
                }
            }

        case NEXT:
            if (state.players === 1) {
                let runArr = [...state.runs1, state.currentRun]
                state = {
                    ...state,
                    runs1: runArr,
                    currentRun: 0
                }
                return state
            } else {
                let runArr = [...state.runs2, state.currentRun]
                if (state.player1) {
                    state = {
                        ...state,
                        player1: !state.player1,
                        runs1: runArr,
                        currentRun: 0
                    }
                    return state
                } else {
                    state = {
                        ...state,
                        player1: !state.player1,
                        runs2: runArr,
                        currentRun: 0
                    }
                    return state
                }
            }
        case RESET:
            if (action.payload === 1) {
                state = { ...straightPoolInitialState }
                return state
            } else {
                state = { ...straightPoolInitialState, players: 2 }
                return state
            }
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
                return state
            } else {
                state = { ...state, playerName2: action.payload.name }
                return state
            }
        default:
            return state
    }
}

export const fargoReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            let score = state.current + 1
            state = { ...state, current: score }
            return state
        default:
            return state
    }
}