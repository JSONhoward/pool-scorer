import React from 'react'
import {create} from 'react-test-renderer'
import {fireEvent, render} from '@testing-library/react'
import HelpModal from './HelpModal'

describe('HelpModal Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<HelpModal />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Receives Props', () => {
        const props = {
            open: true,
            page: 'eo',
            handler: jest.fn(() => 'handler')
        }

        const component = create(<HelpModal {...props} />).root

        expect(component.props).toEqual(props)
    })
    
    test('Close Handler Works', () => {
        const handler = jest.fn(() => 'test handler')
        const {getByTestId} = render(<HelpModal handler={handler}/>)

        fireEvent.click(getByTestId('closeButton'))
        expect(handler).toHaveBeenCalled()
    })
})