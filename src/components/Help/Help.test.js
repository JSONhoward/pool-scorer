import React from 'react'
import {create} from 'react-test-renderer'
import Help from './Help'

describe('Help Tests', () => {
    test('Snapshot Tests', () => {
        const tree = create(<Help />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const component = create(<Help page={'test'} />).root

        expect(component.props).toEqual({page: 'test'})
        
    })
})