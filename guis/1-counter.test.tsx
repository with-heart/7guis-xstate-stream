import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Counter} from './1-counter'

test('initial value is 0', () => {
  render(<Counter />)

  expect(screen.getByRole('textbox', {name: 'Counter'})).toHaveValue('0')
})

test('textbox is read only', () => {
  render(<Counter />)

  userEvent.type(screen.getByRole('textbox', {name: 'Counter'}), '{selectall}1')

  expect(screen.getByRole('textbox', {name: 'Counter'})).toHaveValue('0')
})

test('clicking "Count" increases the counter by 1', () => {
  render(<Counter />)

  expect(screen.getByRole('textbox', {name: 'Counter'})).toHaveValue('0')

  userEvent.click(screen.getByRole('button', {name: 'Count'}))

  expect(screen.getByRole('textbox', {name: 'Counter'})).toHaveValue('1')
})
