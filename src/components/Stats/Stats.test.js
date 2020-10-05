import React from 'react'
import {act, create} from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import {unmountComponentAtNode, render} from 'react-dom'
import Stats from './Stats'

let container = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

describe('Stats Tests', () => {
    const props = {
        stat: 12,
        statLabel: 'test label'
    }
    test('Snapshot Test', () => {
        const tree = create(<Stats />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<Stats {...props} />).root

        expect(component.props).toEqual(props)
    })

    test('Renders Props', () => {
        act(() => {
            render(<Stats {...props} />, container)
        })
        
        expect(container.textContent).toEqual(expect.stringContaining(props.statLabel))
    })
})