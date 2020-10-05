import React from 'react'
import ShallowRender from 'react-test-renderer/shallow'
import { appInitialState, AppContext, appReducer } from '../../store'
import Layout from './'

describe('Layout Tests', () => {
    test('Snapshot Test', () => {
        const SomeComponent = () => {
            const [appState, appDispatch] = React.useReducer(appReducer, appInitialState)
            return (
                <AppContext value={[appState, appDispatch]}>
                    <Layout />
                </AppContext>
            )
        }

        const renderer = new ShallowRender()
        renderer.render(<SomeComponent />)
        const output = renderer.getRenderOutput()

        expect(output).toMatchSnapshot()
    })

    test('Renders Children', () => {
        const SomeComponent = () => {
            const [appState, appDispatch] = React.useReducer(appReducer, appInitialState)
            return (
                <AppContext value={[appState, appDispatch]}>
                    <Layout>
                        <div>Test</div>
                    </Layout>
                </AppContext>
            )
        }

        const renderer = new ShallowRender()
        renderer.render(<SomeComponent />)
        const output = renderer.getRenderOutput()

        expect(output.props.children.props.children.type).toEqual('div')
    })
})