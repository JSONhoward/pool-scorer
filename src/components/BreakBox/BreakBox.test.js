import React from 'react'
import {create} from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import BreakBox from './BreakBox'

describe('BreakBox Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<BreakBox />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Renders Correctly', () => {
        const component = create(<BreakBox />).root

        expect(component.children.length).toEqual(1)
    })

    test('Receives Props', () => {
        const component = create(<BreakBox player1={true} gameOver={false} />).root

        console.log(component.children.length)
        expect(component.findByProps({player1: true})).toBeTruthy()
        expect(component.findByProps({gameOver: false})).toBeTruthy()
    })
})