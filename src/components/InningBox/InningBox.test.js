import React from 'react'
import {create} from 'react-test-renderer'
import InningBox from './InningBox'

describe('InningBox Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<InningBox scores={[[null], [null]]} />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const props = {
            scores: [[null], [null]],
            players: 1,
            top: '2rem'
        }
        const component = create(<InningBox {...props} />).root

        expect(component.props).toEqual(props)
    })
})