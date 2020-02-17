import State from '../src/index'

const STATES = ['STATE1', 'STATE2', 'STATE3']

test('should create new empty state', () => {
  const state = new State(STATES)

  expect(state.get()).toStrictEqual([])
})

test('should add one state', () => {
  const state = new State(STATES)
  state.add(STATES[0])

  expect(state.get()).toStrictEqual(['STATE1'])
})

test('should add multiple states', () => {
  const state = new State(STATES)
  state.add([STATES[0], STATES[1]])

  expect(state.get()).toStrictEqual([STATES[0], STATES[1]])
})

test('should add and remove one state', () => {
  const state = new State(STATES)
  state.add(STATES[0])
  state.remove(STATES[0])

  expect(state.get()).toStrictEqual([])
})

test('should add and remove multiple states', () => {
  const state = new State(STATES)
  state.add([STATES[0], STATES[1]])
  state.remove([STATES[0], STATES[1]])

  expect(state.get()).toStrictEqual([])
})

test('should test if current state includes', () => {
  const state = new State(STATES)
  state.add([STATES[0], STATES[1]])

  expect(state.has(STATES[0])).toBeTruthy()
  expect(state.has(STATES[2])).toBeFalsy()
})

test('should test if current state includes multiples', () => {
  const state = new State(STATES)
  state.add([STATES[0], STATES[1]])

  expect(state.has([STATES[0], STATES[1]])).toBeTruthy()
  state.remove([STATES[1], STATES[2]])

  expect(state.has([STATES[1], STATES[2]])).toBeFalsy()
})

test('should force a state', () => {
  const state = new State(STATES)
  state.add([STATES[0], STATES[1]])
  state.set(STATES[2])

  expect(state.get()).toStrictEqual([STATES[2]])
})

test('should clean state', () => {
  const state = new State(STATES)
  state.add([STATES[0], STATES[1]])
  state.reset()

  expect(state.get()).toStrictEqual([])
})
