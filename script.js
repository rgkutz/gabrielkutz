document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const mensaje = this.querySelector('textarea').value;

    // Validación básica
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Aquí puedes agregar la lógica para enviar los datos a un servidor
    // Por ejemplo, usando fetch o XMLHttpRequest
    alert('Mensaje enviado con éxito!'); // Mensaje de éxito

    // Limpiar el formulario después de enviar
    this.reset();
    toggleForm(); // Ocultar el formulario después de enviar
});