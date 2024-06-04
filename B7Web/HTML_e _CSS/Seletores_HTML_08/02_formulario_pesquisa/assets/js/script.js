function formatPhone(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove all non-numeric characters
    if (value.length > 11) {
        value = value.substring(0, 11); // Limita a 11 caracteres
    }
    
    if (value.length > 10) {
        value = `(${value.substring(0, 2)})${value.substring(2, 7)}-${value.substring(7)}`;
    } else if (value.length > 5) {
        value = `(${value.substring(0, 2)})${value.substring(2, 6)}-${value.substring(6)}`;
    } else if (value.length > 2) {
        value = `(${value.substring(0, 2)})${value.substring(2)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }
    
    input.value = value;
}