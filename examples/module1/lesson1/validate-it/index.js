function validator() {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');
    const result = document.getElementById('result');

    button.addEventListener('click', () => {
        if (input.value) {
            if (Number.isInteger(input.value)) {
                if (Number(input.value) > 0 && Number(input.value) < 100 && Number(input.value) % 2 === 0) {
                    result.innerHTML = 'Valid';
                } else {
                    result.innerHTML = 'Invalid';
                }
                result.innerHTML = 'Valid';
            } else {
                result.innerHTML = 'Invalid';
            }
        } else {
            result.innerHTML = 'Invalid';
        }
    });

    button2.addEventListener('click', () => {
        input.value = '';
        result.innerHTML = '';
    });
}

validator();
