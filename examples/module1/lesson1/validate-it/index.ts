function validator(): void {
  const input = document.getElementById('input') as HTMLInputElement | null
  const buttonValidate = document.getElementById(
    'buttonValidate'
  ) as HTMLButtonElement | null
  const buttonClear = document.getElementById(
    'buttonClear'
  ) as HTMLButtonElement | null
  const result = document.getElementById('result')

  const isInteger = (value: number): boolean => Number.isInteger(value)
  const isPositive = (value: number): boolean => value > 0
  const isLessThan100 = (value: number): boolean => value < 100
  const isEven = (value: number): boolean => value % 2 === 0

  const validationRules: Array<(value: number) => boolean> = [
    isInteger,
    isPositive,
    isLessThan100,
    isEven,
  ]

  const validateInput = () => {
    if (!input || !result) return
    const inputValue: number = Number(input.value)

    if (validate(inputValue, validationRules)) {
      result.innerHTML = 'Valid'
    } else {
      result.innerHTML = 'Invalid'
    }
  }

  const validate = (
    value: number,
    rules: Array<(value: number) => boolean>
  ): boolean => {
    return rules.every((rule) => rule(value))
  }

  const clearInput = () => {
    if (input) input.value = ''
    if (result) result.innerHTML = ''
  }

  buttonValidate?.addEventListener('click', validateInput)
  buttonClear?.addEventListener('click', clearInput)
}

validator()
