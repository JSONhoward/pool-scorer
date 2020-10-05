import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { AppContext, appInitialState, appReducer } from '../../store'
import Menu from './Menu'

describe('Menu Tests', () => {
    test('Snapshot Test', () => {
        const SomeComponent = () => {
            const [appState, appDispatch] = React.useReducer(appReducer, appInitialState)
            return (
                <AppContext value={[appState, appDispatch]}>
                <Menu />
                </AppContext>
            )
        }

        const renderer = new ShallowRenderer()
        renderer.render(<SomeComponent />)
        const output = renderer.getRenderOutput()

        expect(output).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const props = {
            opacity: 1,
            handleMenu: jest.fn(() => 'test handleMenu')
        }

        const SomeComponent = () => {
            const [appState, appDispatch] = React.useReducer(appReducer, appInitialState)
            return (
                <AppContext value={[appState, appDispatch]}>
                <Menu {...props}/>
                </AppContext>
            )
        }

        const renderer = new ShallowRenderer()
        renderer.render(<SomeComponent />)
        const output = renderer.getRenderOutput()

        expect(output.props.children.props).toEqual(props)
    })
})