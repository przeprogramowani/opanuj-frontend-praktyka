type execution = (a: number, b: number) => number

type operation = {
  name: string
  execution: execution
  operator: string
}

const operations:(operation)[] = [
  {
    name: 'add',
    execution: (a, b) => a + b,
    operator: '+'
  },
  {
    name: 'subtract',
    execution: (a, b) => a - b,
    operator: '-'
  },
  {
    name: 'multiply',
    execution: (a, b) => a * b,
    operator: '*'
  },
  {
    name: 'divide',
    execution: (a, b) => a / b,
    operator: '/'
  }
]
export default operations
