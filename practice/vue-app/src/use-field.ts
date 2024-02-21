import { ref, watchEffect } from 'vue';

export function useField(validate: (value: number) => boolean) {
  const value = ref(0)
  const isValid = ref(true)

  watchEffect(() => {
    isValid.value = validate(value.value)
  })

  return { value, isValid }
}
