import React from 'react'
import {create} from 'react-test-renderer'
import Names from './Names'

describe('Names Tests', () => {
    const props = {
        state: {
            players: 2,
            playerName1: 'player 1',
            playerName2: 'player 2',
            player1: true
        },
        dispatch: jest.fn(() => 'test dispatch'),
        gameOver: false
    }

    test('Snapshot Test', () => {
        const tree = create(<Names {...props}/>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<Names {...props} />).root

        expect(component.props).toEqual(props)
    })
})