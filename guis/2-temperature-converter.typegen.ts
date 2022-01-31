// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  eventsCausingActions: {
    storeCelsius: 'CHANGE_CELSIUS'
    updateFahrenheit: 'CHANGE_CELSIUS'
    storeFahrenheit: 'CHANGE_FAHRENHEIT'
    updateCelsius: 'CHANGE_FAHRENHEIT'
  }
  internalEvents: {
    'xstate.init': {type: 'xstate.init'}
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingServices: {}
  eventsCausingGuards: {
    isValidTemperature: 'CHANGE_CELSIUS' | 'CHANGE_FAHRENHEIT'
  }
  eventsCausingDelays: {}
  matchesStates: undefined
  tags: never
}
