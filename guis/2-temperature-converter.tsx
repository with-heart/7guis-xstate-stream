import {FormLabel, HStack, Input} from '@chakra-ui/react'
import {useMachine} from '@xstate/react'
import {assign, createMachine} from 'xstate'

const celsiusToFahrenheit = (celsius: number) => celsius * (9 / 5) + 32
const fahrenheitToCelsius = (fahrenheit: number) => (fahrenheit - 32) * (5 / 9)

const validTemperatureRegex = /^\d+$/

const temperatureConverterMachine = createMachine(
  {
    id: 'temperature-converter',
    tsTypes: {} as import('./2-temperature-converter.typegen').Typegen0,
    schema: {
      context: {} as {celsius: string; fahrenheit: string},
      events: {} as
        | {type: 'CHANGE_CELSIUS'; value: string}
        | {type: 'CHANGE_FAHRENHEIT'; value: string},
    },
    context: {
      celsius: '',
      fahrenheit: '',
    },
    type: 'parallel',
    states: {
      celsius: {
        on: {
          CHANGE_CELSIUS: [
            {
              cond: 'isValidTemperature',
              target: '.valid',
              actions: ['storeCelsius', 'updateFahrenheit'],
            },
            {
              target: '.invalid',
              actions: 'storeCelsius',
            },
          ],
        },
        initial: 'invalid',
        states: {
          invalid: {},
          valid: {},
        },
      },
      fahrenheit: {
        on: {
          CHANGE_FAHRENHEIT: [
            {
              cond: 'isValidTemperature',
              target: '.valid',
              actions: ['storeFahrenheit', 'updateCelsius'],
            },
            {
              target: '.invalid',
              actions: 'storeFahrenheit',
            },
          ],
        },
        initial: 'invalid',
        states: {
          invalid: {},
          valid: {},
        },
      },
    },
  },
  {
    actions: {
      storeCelsius: assign({
        celsius: (_context, event) => event.value,
      }),
      updateFahrenheit: assign({
        fahrenheit: (_context, event) =>
          celsiusToFahrenheit(parseInt(event.value)).toString(),
      }),
      storeFahrenheit: assign({
        fahrenheit: (_context, event) => event.value,
      }),
      updateCelsius: assign({
        celsius: (_context, event) =>
          fahrenheitToCelsius(parseInt(event.value)).toString(),
      }),
    },
    guards: {
      isValidTemperature: (_context, event) =>
        validTemperatureRegex.test(event.value),
    },
  },
)

export const TemperatureConverter = () => {
  const [state, send] = useMachine(temperatureConverterMachine)
  const {celsius, fahrenheit} = state.context

  return (
    <HStack spacing={4}>
      <HStack>
        <Input
          id="celsius"
          value={celsius}
          onChange={(event) =>
            send({type: 'CHANGE_CELSIUS', value: event.target.value})
          }
        />
        <FormLabel htmlFor="celsius">Celsius</FormLabel>
      </HStack>
      <span>=</span>
      <HStack>
        <Input
          id="fahrenheit"
          value={fahrenheit}
          onChange={(event) =>
            send({type: 'CHANGE_FAHRENHEIT', value: event.target.value})
          }
        />
        <FormLabel htmlFor="fahrenheit">Fahrenheit</FormLabel>
      </HStack>
    </HStack>
  )
}
