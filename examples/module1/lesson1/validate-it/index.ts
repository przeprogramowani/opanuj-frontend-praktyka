import Validator from './validator';

const input = document.getElementById('input');
const validateTrigger = document.getElementById('validation-btn');
const clearTrigger = document.getElementById('cleanup-btn');
const result = document.getElementById('result');

if (input && validateTrigger && clearTrigger && result) {
  new Validator(input, validateTrigger, clearTrigger, result);
}
