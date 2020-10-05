import React from 'react'
import { create } from 'react-test-renderer'
import ContactModal from './ContactModal'

describe('ContactModal Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<ContactModal />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const testRef = React.createRef()
        const props = {
            open: true,
            handle: jest.fn(() => 'test handle'),
            reference: testRef
        }

        const component = create(<ContactModal {...props} />).root

        expect(component.props).toEqual(props)
    })
})