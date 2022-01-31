import {Box} from '@chakra-ui/react'
import {TemperatureConverter} from './2-temperature-converter'

export default {
  component: TemperatureConverter,
  title: 'Temperature Converter',
}

export const TemperatureConverterGUI = () => (
  <Box p={6}>
    <TemperatureConverter />
  </Box>
)
