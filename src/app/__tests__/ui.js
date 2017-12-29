import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import UI from '../ui'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const getPrice = jest.fn()

it('should render', () => {
  const comp = shallow(<UI getPrice={getPrice} />)
  expect(comp).toBeTruthy()
})

it('should call getPrice when the button is clicked', () => {
  const comp = shallow(<UI getPrice={getPrice} />)
  comp.find('button').simulate('click')
  expect(getPrice).toHaveBeenCalled()
})

it('should display the price', () => {
  const comp = shallow(<UI getPrice={getPrice} price="$300K" />)
  expect(comp.contains('<p>$300K</p>')).toBeTruthy()
})
