import React from 'react'
import {create} from 'react-test-renderer'
import MatchModal from './MatchModal'

describe('MatchModal Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<MatchModal />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const props = {
            open: true,
            dispatch: jest.fn(() => console.log('test dispatch')),
            player1: 'player 1',
            player2: 'player 2'
        }

        const component = create(<MatchModal {...props} />).root

        expect(component.props).toEqual(props)
    })
})