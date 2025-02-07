// Función para mostrar la foto en la ventana modal
function showPhoto(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = src;
}

// Función para cerrar la ventana modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}