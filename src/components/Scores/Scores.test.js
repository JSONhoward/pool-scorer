import React from 'react'
import {create} from 'react-test-renderer'
import Scores from './Scores'

describe('Scores Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Scores />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const props = {
            players: 2,
            score1: 5,
            score2: 7,
            player1: true,
            match: false,
            raceTo: 11,
            gameOver: false
        }

        const component = create(<Scores {...props} />).root

        expect(component.props).toEqual(props)
    })
})