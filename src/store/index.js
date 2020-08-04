import { createContext } from 'react'

//? Context
export const AppContext = createContext()
export const StraightPoolContext = createContext()
export const FargoContext = createContext()
export const MatchContext = createContext()
export const EqualOffenseContext = createContext()
export const HopkinsContext = createContext()

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
    CLOSE_MAIL: 'close mail',
    OPEN_MAIL: 'open mail',
    WIN: 'win',
    LOSS: 'loss',
    NO_COOKIES: 'no cookies',
    YES_COOKIES: 'yes cookies'
}

export const { INCREMENT, DECREMENT, FOUL, OPEN_MODAL, OPEN_MENU, RESET, NEW_GAME, CANCEL, NEXT, CHANGE_NAME, CLOSE_MENU, CLOSE_MAIL, OPEN_MAIL, WIN, LOSS, NO_COOKIES, YES_COOKIES } = types

//? Initial State
export const appInitialState = localStorage.appState ? JSON.parse(localStorage.appState) : {
    menuOpen: false,
    mailOpen: false,
    showConsentBar: true,
    disableCookies: false
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
    gameOver: false,
    newGameModalOpen: false
}

export const hopkinsInitialState = localStorage.hopkinsState ? JSON.parse(localStorage.hopkinsState) : {
    playerName1: '',
    playerName2: '',
    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    inning: [1, 1],
    players: 1,
    player1: true,
    gameOver: false,
    newGameModalOpen: false
}

export const equalOffenseInitialState = localStorage.equalOffenseState ? JSON.parse(localStorage.equalOffenseState) : {
    playerName1: '',
    playerName2: '',
    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    inning: [1, 1],
    players: 1,
    player1: true,
    ballsRemaining: 15,
    gameOver: false,
    newGameModalOpen: false
}

export const matchInitialState = localStorage.matchState ? JSON.parse(localStorage.matchState) : {
    playerName1: '',
    playerName2: '',
    scores1: [null],
    scores2: [null],
    rackNumber: 1,
    raceTo: 7,
    player1: true,
    players: 2,
    break: 'alternate',
    gameOver: false,
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
        case OPEN_MAIL:
            state = { ...state, mailOpen: true }
            localStorage.appState = JSON.stringify(state)
            return state
        case CLOSE_MAIL:
            state = { ...state, mailOpen: false }
            localStorage.appState = JSON.stringify(state)
            return state
        case NO_COOKIES:
            state = { ...state, disableCookies: true, showConsentBar: false }
            localStorage.appState = JSON.stringify(state)
            return state
        case YES_COOKIES:
            state = { ...state, disableCookies: false, showConsentBar: false }
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
            } else {
                state = {
                    ...state,
                    score2: state.score2 + 1,
                    ballsRemaining: state.ballsRemaining !== 2 ? state.ballsRemaining - 1 : 15,
                    currentRun: state.currentRun + 1,
                    fouls2: 0
                }
            }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
        case DECREMENT:
            if (state.player1) {
                state = {
                    ...state,
                    score1: state.score1 !== 0 ? state.score1 - 1 : 0,
                    ballsRemaining: state.ballsRemaining !== 15 ? state.ballsRemaining + 1 : 15,
                    currentRun: state.currentRun !== 0 ? state.currentRun - 1 : 0
                }
            } else {
                state = {
                    ...state,
                    score2: state.score2 !== 0 ? state.score2 - 1 : 0,
                    ballsRemaining: state.ballsRemaining !== 15 ? state.ballsRemaining + 1 : 15,
                    currentRun: state.currentRun !== 0 ? state.currentRun - 1 : 0
                }
            }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
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
                }
            }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
        case NEXT:
            if (state.players === 1) {
                let runArr = [...state.runs1, state.currentRun]
                state = {
                    ...state,
                    runs1: runArr,
                    currentRun: 0
                }
            } else {
                let runArr = [...state.runs2, state.currentRun]
                if (state.player1) {
                    state = {
                        ...state,
                        player1: !state.player1,
                        runs1: runArr,
                        currentRun: 0
                    }
                } else {
                    state = {
                        ...state,
                        player1: !state.player1,
                        runs2: runArr,
                        currentRun: 0
                    }
                }
            }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
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
            }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
            } else {
                state = { ...state, playerName2: action.payload.name }
            }
            localStorage.straightPoolState = JSON.stringify(state)
            return state
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
            if (state.players === 1 && !state.gameOver) {
                let arr = [...state.scores1]
                if (arr[state.inning[0] - 1] !== 30) arr[state.inning[0] - 1] += 1
                state = { ...state, scores1: arr }
            } else if (!state.gameOver) {
                if (state.player1) {
                    let arr = [...state.scores1]
                    if (arr[state.inning[0] - 1] !== 30) arr[state.inning[0] - 1] += 1
                    state = { ...state, scores1: arr }
                } else {
                    let arr = [...state.scores2]
                    if (arr[state.inning[1] - 1] !== 30) arr[state.inning[1] - 1] += 1
                    state = { ...state, scores2: arr }
                }
            }
            localStorage.fargoState = JSON.stringify(state)
            return state
        case DECREMENT:
            if (state.player1 && !state.gameOver) {
                let arr = [...state.scores1]
                arr[state.inning[0] - 1] !== 0 ? arr[state.inning[0] - 1] -= 1 : arr[state.inning[0] - 1] = 0
                state = { ...state, scores1: arr }
            } else if (!state.gameOver) {
                let arr = [...state.scores2]
                arr[state.inning[1] - 1] !== 0 ? arr[state.inning[1] - 1] -= 1 : arr[state.inning[1] - 1] = 0
                state = { ...state, scores2: arr }
            }
            localStorage.fargoState = JSON.stringify(state)
            return state
        case NEXT:
            if (state.players === 1 && !state.gameOver) {
                let arr = [...state.inning]
                arr[0] === 10 ? arr[0] += 0 : arr[0] += 1
                state = { ...state, inning: arr, gameOver: state.inning[0] === 10 ? true : false }
            } else if (!state.gameOver) {
                if (state.player1) {
                    let arr = [...state.inning]
                    arr[0] === 10 ? arr[0] += 0 : arr[0] += 1
                    state = { ...state, player1: !state.player1, inning: arr }
                } else {
                    let arr = [...state.inning]
                    arr[1] === 10 ? arr[1] += 0 : arr[1] += 1
                    state = { ...state, player1: !state.player1, inning: arr, gameOver: state.inning[1] === 10 ? true : false }
                }
            }
            localStorage.fargoState = JSON.stringify(state)
            return state
        case RESET:
            if (action.payload === 1) {
                state = {
                    ...fargoInitialState,
                    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    inning: [1, 1],
                    players: 1,
                    player1: true,
                    gameOver: false,
                    newGameModalOpen: false
                }
            } else {
                state = {
                    ...fargoInitialState,
                    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    inning: [1, 1],
                    players: 2,
                    player1: true,
                    gameOver: false,
                    newGameModalOpen: false
                }
            }
            localStorage.fargoState = JSON.stringify(state)
            return state
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
            } else {
                state = { ...state, playerName2: action.payload.name }
            }
            localStorage.fargoState = JSON.stringify(state)
            return state
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

export const hopkinsReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            if (state.players === 1 && !state.gameOver) {
                let arr = [...state.scores1]
                if (arr[state.inning[0] - 1] !== 20) arr[state.inning[0] - 1] += 1
                state = { ...state, scores1: arr }
            } else if (!state.gameOver) {
                if (state.player1) {
                    let arr = [...state.scores1]
                    if (arr[state.inning[0] - 1] !== 20) arr[state.inning[0] - 1] += 1
                    state = { ...state, scores1: arr }
                } else {
                    let arr = [...state.scores2]
                    if (arr[state.inning[1] - 1] !== 20) arr[state.inning[1] - 1] += 1
                    state = { ...state, scores2: arr }
                }
            }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        case DECREMENT:
            if (state.player1 && !state.gameOver) {
                let arr = [...state.scores1]
                if (arr[state.inning[0] - 1] !== -2) arr[state.inning[0] - 1] -= 1
                state = { ...state, scores1: arr }
            } else if (!state.gameOver) {
                let arr = [...state.scores2]
                if (arr[state.inning[1] - 1] !== -2) arr[state.inning[1] - 1] -= 1
                state = { ...state, scores2: arr }
            }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        case NEXT:
            if (state.players === 1 && !state.gameOver) {
                let arr = [...state.inning]
                arr[0] === 10 ? arr[0] += 0 : arr[0] += 1
                state = { ...state, inning: arr, gameOver: state.inning[0] === 10 ? true : false }
            } else if (!state.gameOver) {
                if (state.player1) {
                    let arr = [...state.inning]
                    arr[0] === 10 ? arr[0] += 0 : arr[0] += 1
                    state = { ...state, player1: !state.player1, inning: arr }
                } else {
                    let arr = [...state.inning]
                    arr[1] === 10 ? arr[1] += 0 : arr[1] += 1
                    state = { ...state, player1: !state.player1, inning: arr, gameOver: state.inning[1] === 10 ? true : false }
                }
            }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        case RESET:
            if (action.payload === 1) {
                state = {
                    ...hopkinsInitialState,
                    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    inning: [1, 1],
                    players: 1,
                    player1: true,
                    gameOver: false,
                    newGameModalOpen: false
                }
            } else {
                state = {
                    ...hopkinsInitialState,
                    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    inning: [1, 1],
                    players: 2,
                    player1: true,
                    gameOver: false,
                    newGameModalOpen: false
                }
            }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
            } else {
                state = { ...state, playerName2: action.payload.name }
            }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        case OPEN_MODAL:
            state = { ...state, newGameModalOpen: !state.newGameModalOpen }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        case NEW_GAME:
            state = { ...state, newGameModalOpen: false }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        case CANCEL:
            state = { ...state, newGameModalOpen: false }
            localStorage.hopkinsState = JSON.stringify(state)
            return state
        default:
            return state
    }
}

export const matchReducer = (state, action) => {
    let p1score = state.scores1?.reduce((a, b) => a + b)
    let p2score = state.scores2?.reduce((a, b) => a + b)
    switch (action.type) {
        case WIN:
            if (state.player1 && p1score !== state.raceTo && p2score !== state.raceTo) {
                let arr1 = [...state.scores1]
                let arr2 = [...state.scores2]
                arr1[state.rackNumber - 1] = 1
                arr2[state.rackNumber - 1] = 0
                state = { ...state, scores1: arr1, scores2: arr2, rackNumber: p1score + 1 === state.raceTo ? state.rackNumber : state.rackNumber + 1, player1: state.break === 'alternate' ? !state.player1 : state.player1, gameOver: p1score + 1 === state.raceTo ? true : false }
            } else if (!state.player1 && p2score !== state.raceTo && p1score !== state.raceTo) {
                let arr1 = [...state.scores1]
                let arr2 = [...state.scores2]
                arr1[state.rackNumber - 1] = 0
                arr2[state.rackNumber - 1] = 1
                state = { ...state, scores1: arr1, scores2: arr2, rackNumber: p2score + 1 === state.raceTo ? state.rackNumber : state.rackNumber + 1, player1: state.break === 'alternate' ? !state.player1 : state.player1, gameOver: p2score + 1 === state.raceTo ? true : false }
            }
            localStorage.matchState = JSON.stringify(state)
            return state
        case LOSS:
            if (state.player1 && p1score !== state.raceTo && p2score !== state.raceTo) {
                let arr1 = [...state.scores1]
                let arr2 = [...state.scores2]
                arr1[state.rackNumber - 1] = 0
                arr2[state.rackNumber - 1] = 1
                state = { ...state, scores1: arr1, scores2: arr2, rackNumber: p2score + 1 === state.raceTo ? state.rackNumber : state.rackNumber + 1, player1: !state.player1, gameOver: p2score + 1 === state.raceTo ? true : false }
            } else if (!state.player1 && p2score !== state.raceTo && p1score !== state.raceTo) {
                let arr1 = [...state.scores1]
                let arr2 = [...state.scores2]
                arr1[state.rackNumber - 1] = 1
                arr2[state.rackNumber - 1] = 0
                state = { ...state, scores1: arr1, scores2: arr2, rackNumber: p1score + 1 === state.raceTo ? state.rackNumber : state.rackNumber + 1, player1: !state.player1, gameOver: p1score + 1 === state.raceTo ? true : false }
            }
            localStorage.matchState = JSON.stringify(state)
            return state
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
            } else {
                state = { ...state, playerName2: action.payload.name }
            }
            localStorage.matchState = JSON.stringify(state)
            return state
        case RESET:
            state = {
                ...matchInitialState,
                scores1: [null],
                scores2: [null],
                rackNumber: 1,
                player1: action.payload.breakChoice === 1,
                players: 2,
                gameOver: false,
                newGameModalOpen: false,
                raceTo: action.payload.race,
                break: action.payload.break
            }
            localStorage.matchState = JSON.stringify(state)
            return state
        case OPEN_MODAL:
            state = { ...state, newGameModalOpen: !state.newGameModalOpen }
            localStorage.matchState = JSON.stringify(state)
            return state
        case CANCEL:
            state = { ...state, newGameModalOpen: false }
            localStorage.matchState = JSON.stringify(state)
            return state
        default:
            return state
    }
}

export const equalOffenseReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            if (state.players === 1 && !state.gameOver) {
                let scoreArr = [...state.scores1]
                if (scoreArr[state.inning[0] - 1] !== 20) scoreArr[state.inning[0] - 1] += 1
                state = { ...state, scores1: scoreArr, ballsRemaining: scoreArr[state.inning[0] - 1] !== 20 ? state.ballsRemaining === 2 ? 15 : state.ballsRemaining - 1 : state.ballsRemaining }
            } else if (!state.gameOver) {
                if (state.player1) {
                    let scoreArr = [...state.scores1]
                    if (scoreArr[state.inning[0] - 1] !== 20) scoreArr[state.inning[0] - 1] += 1
                    state = { ...state, scores1: scoreArr, ballsRemaining: scoreArr[state.inning[0] - 1] !== 20 ? state.ballsRemaining === 2 ? 15 : state.ballsRemaining - 1 : state.ballsRemaining }
                } else {
                    let scoreArr = [...state.scores2]
                    if (scoreArr[state.inning[1] - 1] !== 20) scoreArr[state.inning[1] - 1] += 1
                    state = { ...state, scores2: scoreArr, ballsRemaining: scoreArr[state.inning[1] - 1] !== 20 ? state.ballsRemaining === 2 ? 15 : state.ballsRemaining - 1 : state.ballsRemaining }
                }
            }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        case DECREMENT:
            if (state.players === 1 && !state.gameOver) {
                let scoreArr = [...state.scores1]
                if (scoreArr[state.inning[0] - 1] !== 0) scoreArr[state.inning[0] - 1] -= 1
                state = { ...state, scores1: scoreArr, ballsRemaining: scoreArr[state.inning[0] - 1] !== 20 ? state.ballsRemaining === 15 ? 15 : state.ballsRemaining + 1 : state.ballsRemaining }
            } else if (!state.gameOver) {
                if (state.player1) {
                    let scoreArr = [...state.scores1]
                    if (scoreArr[state.inning[0] - 1] !== 0) scoreArr[state.inning[0] - 1] -= 1
                    state = { ...state, scores1: scoreArr, ballsRemaining: scoreArr[state.inning[0] - 1] !== 20 ? state.ballsRemaining === 15 ? 15 : state.ballsRemaining + 1 : state.ballsRemaining }
                } else {
                    let scoreArr = [...state.scores2]
                    if (scoreArr[state.inning[1] - 1] !== 0) scoreArr[state.inning[1] - 1] -= 1
                    state = { ...state, scores2: scoreArr, ballsRemaining: scoreArr[state.inning[1] - 1] !== 20 ? state.ballsRemaining === 15 ? 15 : state.ballsRemaining + 1 : state.ballsRemaining }
                }
            }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        case NEXT:
            if (state.players === 1 && !state.gameOver) {
                let arr = [...state.inning]
                arr[0] === 10 ? arr[0] += 0 : arr[0] += 1
                state = { ...state, inning: arr, ballsRemaining: 15, gameOver: state.inning[0] === 10 ? true : false }
            } else if (!state.gameOver) {
                if (state.player1) {
                    let arr = [...state.inning]
                    arr[0] === 10 ? arr[0] += 0 : arr[0] += 1
                    state = { ...state, inning: arr, ballsRemaining: 15, player1: !state.player1 }
                } else {
                    let arr = [...state.inning]
                    arr[1] === 10 ? arr[1] += 0 : arr[1] += 1
                    state = { ...state, inning: arr, ballsRemaining: arr[1] === 10 ? state.ballsRemaining : 15, player1: !state.player1, gameOver: state.inning[1] === 10 ? true : false }
                }
            }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        case RESET:
            if (action.payload === 1) {
                state = {
                    ...equalOffenseInitialState,
                    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    inning: [1, 1],
                    players: 1,
                    player1: true,
                    ballsRemaining: 15,
                    gameOver: false,
                    newGameModalOpen: false
                }
            } else {
                state = {
                    ...equalOffenseInitialState,
                    scores1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    scores2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    inning: [1, 1],
                    players: 2,
                    player1: true,
                    ballsRemaining: 15,
                    gameOver: false,
                    newGameModalOpen: false
                }
            }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        case CHANGE_NAME:
            if (action.payload.player === 'name1') {
                state = { ...state, playerName1: action.payload.name }
            } else {
                state = { ...state, playerName2: action.payload.name }
            }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        case OPEN_MODAL:
            state = { ...state, newGameModalOpen: !state.newGameModalOpen }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        case NEW_GAME:
            state = { ...state, newGameModalOpen: false }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        case CANCEL:
            state = { ...state, newGameModalOpen: false }
            localStorage.equalOffenseState = JSON.stringify(state)
            return state
        default:
            return state
    }
}