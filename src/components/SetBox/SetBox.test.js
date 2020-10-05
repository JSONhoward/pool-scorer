import React from 'react'
import { create } from 'react-test-renderer'
import SetBox from './SetBox'

describe('SetBox Tests', () => {
    const props = {
        state: {
            scores1: [1, 0, 1],
             scores2: [0, 1, 0],
            rackNumber: 3
        }
    }
    test('Snapshot Test', () => {
        const tree = create(<SetBox {...props} />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<SetBox {...props} />).root

        expect(component.props).toEqual(props)
    })
})