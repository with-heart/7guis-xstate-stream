import {Button, HStack, Input} from '@chakra-ui/react'
import {useMachine} from '@xstate/react'
import {assign, createMachine} from 'xstate'

const counterMachine = createMachine(
  {
    id: 'counter',
    tsTypes: {} as import("./1-counter.typegen").Typegen0,
    schema: {
      context: {} as {count: number},
      events: {} as {type: 'INCREMENT'},
    },
    context: {
      count: 0,
    },
    on: {
      INCREMENT: {actions: 'incrementCount'},
    },
  },
  {
    actions: {
      incrementCount: assign({
        count: (context) => context.count + 1,
      }),
    },
  },
)

export const Counter = () => {
  const [state, send] = useMachine(counterMachine)
  const count = state.context.count

  return (
    <HStack>
      <Input aria-label="Counter" value={count} isReadOnly />
      <Button onClick={() => send('INCREMENT')}>Count</Button>
    </HStack>
  )
}
