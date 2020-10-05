import React from 'react'
import {create} from 'react-test-renderer'
import Cookies from './'

describe('Cookies Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Cookies />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})