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
    CLOSE_MENU: 'close menu',
    ROTATE: 'rotate'
}

export const { INCREMENT, DECREMENT, FOUL, OPEN_MODAL, OPEN_MENU, RESET, NEW_GAME, CANCEL, NEXT, CHANGE_NAME, CLOSE_MENU, ROTATE } = types

//? Initial State
export const appInitialState = localStorage.appState ? JSON.parse(localStorage.appState) : {
    menuOpen: false
}

export const straightPoolInitialState = localStorage.straightPoolState ? JSON.parse(localStorage.straightPoolState) : {
    playerName1: '',
    playerName2: '',
    score1: 0,
    score2: 0,
    fouls1: 0,
    fouls2: 0,
    ballsRemaining: 15,
    runs1: [0],
    runs2: [0],
    currentRun: 0,
    players: 1,
    player1: true,
    newGameModalOpen: false
}

export const fargoInitialState = localStorage.fargoState ? JSON.parse(localStorage.fargoState) : {
    playerName1: '',
    playerName2: '',
    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    inning: [1, 1],
    players: 1,
    player1: true,
    inOrder: [false, false],
    ballsRemaining: 15,
    newGameModalOpen: false
}

//? Reducers
export const appReducer = (state, action) => {
    switch (action.type) {
        case OPEN_MENU:
            state = { ...state, menuOpen: true }
            localStorage.appState = JSON.stringify(state)
            return state
        case CLOSE_MENU:
            state = { ...state, menuOpen: false }
            localStorage.appState = JSON.stringify(state)
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
                localStorage.straightPoolState = JSON.stringify(state)
                return state
            } else {
                state = {
                    ...state,
                    score2: state.score2 + 1,
                    ballsRemaining: state.ballsRemaining !== 2 ? state.ballsRemaining - 1 : 15,
                    currentRun: state.currentRun + 1,
                    fouls2: 0
                }
                localStorage.straightPoolState = JSON.stringify(state)
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
                localStorage.straightPoolState = JSON.stringify(state)
                return state
            } else {
                state = {
                    ...state,
                    score2: state.score2 !== 0 ? state.score2 - 1 : 0,
                    ballsRemaining: state.ballsRemaining !== 15 ? state.ballsRemaining + 1 : 15,
                    currentRun: state.currentRun !== 0 ? state.currentRun - 1 : 0
                }
                localStorage.straightPoolState = JSON.stringify(state)
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
                localStorage.straightPoolState = JSON.stringify(state)
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
                    localStorage.straightPoolState = JSON.stringify(state)
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
                    localStorage.straightPoolState = JSON.stringify(state)
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
                localStorage.straightPoolState = JSON.stringify(state)
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
                    localStorage.straightPoolState = JSON.stringify(state)
                    return state
                } else {
                    state = {
                        ...state,
                        player1: !state.player1,
                        runs2: runArr,
                        currentRun: 0
                    }
                    localStorage.straightPoolState = JSON.stringify(state)
                    return state
                }
            }
        case RESET:
            if (action.payload === 1) {
                state = {
                    ...straightPoolInitialState,
                    score1: 0,
                    score2: 0,
                    fouls1: 0,
                    fouls2: 0,
                    ballsRemaining: 15,
                    runs1: [0],
                    runs2: [0],
                    currentRun: 0,
                    players: 1,
                    player1: true,
                    newGameModalOpen: false
                }
                localStorage.straightPoolState = JSON.stringify(state)
                return state
            } else {
                state = {
                    ...straightPoolInitialState,
                    score1: 0,
                    score2: 0,
                    fouls1: 0,
                    fouls2: 0,
                    ballsRemaining: 15,
                    runs1: [0],
                    runs2: [0],
                    currentRun: 0,
                    players: 2,
                    player1: true,
                    newGameModalOpen: false
                }
                localStorage.straightPoolState = JSON.stringify(state)
                return state
            }
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
                localStorage.straightPoolState = JSON.stringify(state)
                return state
            } else {
                state = { ...state, playerName2: action.payload.name }
                localStorage.straightPoolState = JSON.stringify(state)
                return state
            }
        case OPEN_MODAL:
            state = { ...state, newGameModalOpen: !state.newGameModalOpen }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
        case NEW_GAME:
            state = { ...state, newGameModalOpen: false }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
        case CANCEL:
            state = { ...state, newGameModalOpen: false }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
        default:
            return state
    }
}

export const fargoReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            if (state.player1) {
                if (state.inOrder[0]) {
                    let arr = [...state.scores1]
                    if (state.ballsRemaining !== 0) arr[state.inning[0] - 1] += 2
                    state = { ...state, scores1: arr, ballsRemaining: state.ballsRemaining !== 0 ? state.ballsRemaining - 1 : 0 }
                    localStorage.fargoState = JSON.stringify(state)
                    return state
                } else {
                    let arr = [...state.scores1]
                    if (state.ballsRemaining !== 0) arr[state.inning[0] - 1] += 1
                    state = { ...state, scores1: arr, ballsRemaining: state.ballsRemaining !== 0 ? state.ballsRemaining - 1 : 0 }
                    localStorage.fargoState = JSON.stringify(state)
                    return state
                }
            } else {
                if (state.inOrder[1]) {
                    let arr = [...state.scores2]
                    if (state.ballsRemaining !== 0) arr[state.inning[1] - 1] += 2
                    state = { ...state, scores2: arr, ballsRemaining: state.ballsRemaining !== 0 ? state.ballsRemaining - 1 : 0 }
                    localStorage.fargoState = JSON.stringify(state)
                    return state
                } else {
                    let arr = [...state.scores2]
                    if (state.ballsRemaining !== 0) arr[state.inning[1] - 1] += 1
                    state = { ...state, scores2: arr, ballsRemaining: state.ballsRemaining !== 0 ? state.ballsRemaining - 1 : 0 }
                    localStorage.fargoState = JSON.stringify(state)
                    return state
                }
            }
        case DECREMENT:
            if (state.player1) {
                let arr = [...state.scores1]
                arr[state.inning[0] - 1] !== 0 ? arr[state.inning[0] - 1] -= 1 : arr[state.inning[0] - 1] = 0
                state = { ...state, scores1: arr, ballsRemaining: state.ballsRemaining !== 15 ? state.ballsRemaining + 1 : 15 }
                localStorage.fargoState = JSON.stringify(state)
                return state
            } else {
                let arr = [...state.scores2]
                arr[state.inning[1] - 1] !== 0 ? arr[state.inning[1] - 1] -= 1 : arr[state.inning[1] - 1] = 0
                state = { ...state, scores2: arr, ballsRemaining: state.ballsRemaining !== 15 ? state.ballsRemaining + 1 : 15 }
                localStorage.fargoState = JSON.stringify(state)
                return state
            }
        case ROTATE:
            let arr = [...state.inOrder]
            arr[state.player1 ? 0 : 1] = true
            state = { ...state, inOrder: arr }
            localStorage.fargoState = JSON.stringify(state)
            return state
        case NEXT:
            if (state.players === 1) {
                let arr = [...state.inning]
                arr[0] !== 10 ? arr[0] += 1 : arr[0] = 10
                state = { ...state, inOrder: [false, false], inning: arr, ballsRemaining: 15 }
                localStorage.fargoState = JSON.stringify(state)
                return state
            } else {
                if (state.player1) {
                    let arr = [...state.inning]
                    arr[0] !== 10 ? arr[0] += 1 : arr[0] = 10
                    state = { ...state, inOrder: [false, false], player1: !state.player1, inning: arr, ballsRemaining: 15 }
                    localStorage.fargoState = JSON.stringify(state)
                    return state
                } else {
                    let arr = [...state.inning]
                    arr[1] !== 10 ? arr[1] += 1 : arr[1] = 10
                    state = { ...state, inOrder: [false, false], player1: !state.player1, inning: arr, ballsRemaining: 15 }
                    localStorage.fargoState = JSON.stringify(state)
                    return state
                }
            }
        case RESET:
            if (action.payload === 1) {
                state = { ...fargoInitialState }
                localStorage.fargoState = JSON.stringify(state)
                return state
            } else {
                state = { ...fargoInitialState, players: 2 }
                localStorage.fargoState = JSON.stringify(state)
                return state
            }
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
                localStorage.fargoState = JSON.stringify(state)
                return state
            } else {
                state = { ...state, playerName2: action.payload.name }
                localStorage.fargoState = JSON.stringify(state)
                return state
            }
        case OPEN_MODAL:
            state = { ...state, newGameModalOpen: !state.newGameModalOpen }
            localStorage.fargoState = JSON.stringify(state)
            return state
        case NEW_GAME:
            state = { ...state, newGameModalOpen: false }
            localStorage.fargoState = JSON.stringify(state)
            return state
        case CANCEL:
            state = { ...state, newGameModalOpen: false }
            localStorage.fargoState = JSON.stringify(state)
            return state
        default:
            return state
    }
}