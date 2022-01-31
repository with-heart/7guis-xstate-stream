import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {TemperatureConverter} from './2-temperature-converter'

test('fields are empty by default', () => {
  render(<TemperatureConverter />)

  expect(screen.getByRole('textbox', {name: 'Celsius'})).not.toHaveValue()
  expect(screen.getByRole('textbox', {name: 'Fahrenheit'})).not.toHaveValue()
})

test('entering a numeric Celsius value outputs Fahrenheit', () => {
  render(<TemperatureConverter />)

  userEvent.type(screen.getByRole('textbox', {name: 'Celsius'}), '0')

  expect(screen.getByRole('textbox', {name: 'Fahrenheit'})).toHaveValue('32')
})

test('entering a non-numeric Celsius value does not output Fahrenheit', () => {
  render(<TemperatureConverter />)

  userEvent.type(screen.getByRole('textbox', {name: 'Celsius'}), 'abc')

  expect(screen.getByRole('textbox', {name: 'Fahrenheit'})).not.toHaveValue()
})

test('entering a numeric Fahrenheit value outputs Celsius', () => {
  render(<TemperatureConverter />)

  userEvent.type(screen.getByRole('textbox', {name: 'Fahrenheit'}), '32')

  expect(screen.getByRole('textbox', {name: 'Celsius'})).toHaveValue('0')
})

test('entering a non-numeric Fahrenheit value does not output Celsius', () => {
  render(<TemperatureConverter />)

  userEvent.type(screen.getByRole('textbox', {name: 'Fahrenheit'}), 'abc')

  expect(screen.getByRole('textbox', {name: 'Celsius'})).not.toHaveValue()
})
