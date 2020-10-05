import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

describe('Button Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Button />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const props = {
            text: 'test text',
            height: 5,
            width: 5,
            font: '1rem',
            handler: jest.fn(() => console.log('test handler'))
        }

        const component = create(<Button {...props} />).root

        expect(component.props).toEqual(props)
    })

    test('Renders text prop', () => {
        render(<Button text={'test'} />)

        expect(screen.getByText('test')).toBeDefined()
    })
})