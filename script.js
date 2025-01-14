function syncHeight() {
    let range = document.getElementById('heightRange');
    let number = document.getElementById('heightNumber');
    number.value = range.value;
    range.value = number.value;
}

function validateForm() {
    const form = document.getElementById('userForm');
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (form.checkValidity()) {
        const formData = new FormData(form);
        let outputHtml = '<ul>';

        formData.forEach((value, key) => {
            if (key === 'hobbies') {
                if (!outputHtml.includes('Hobbies:')) {
                    outputHtml += `<li>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</li>`;
                } else {
                    outputHtml = outputHtml.slice(0, -5) + `, ${value}</li>`;
                }
            } else {
                outputHtml += `<li>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</li>`;
            }
        });

        outputHtml += '</ul>';
        output.innerHTML = outputHtml;
    } else {
        output.innerHTML = '<p>Please fill out all required fields correctly.</p>';
    }
}
