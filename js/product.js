document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase 'animate-on-scroll'
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    // Configura el Intersection Observer
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Obtén la animación y el retraso desde los atributos
                    const animationClass = entry.target.dataset.animation || 'animate__fadeIn';
                    const delay = entry.target.dataset.delay || '0s';

                    // Aplica el retraso usando estilos en línea
                    entry.target.style.animationDelay = delay;

                    // Agrega las clases de animación
                    entry.target.classList.add('animate__animated', animationClass);

                    // Deja de observar el elemento después de animarlo
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.05, // El 5% del elemento debe ser visible
        }
    );

    // Observa cada elemento animable
    animateElements.forEach(el => observer.observe(el));
});

// Función para actualizar el valor del rango de precio
document.getElementById('price-range').addEventListener('input', function() {
    const value = this.value;
    document.getElementById('price-value').textContent = `0 - ${value}`;
});

// Filtro de búsqueda por Nombre de producto
document.getElementById('nombre-search').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const items = document.querySelectorAll('.product-card');
    items.forEach(function (item) {
        const productName = item.querySelector('h2').textContent.toLowerCase();
        item.style.display = productName.includes(searchText) ? 'block' : 'none';
    });
});

// Filtro de búsqueda en Proveedor
document.getElementById('proveedor-search').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const items = document.querySelectorAll('#proveedor-list li');
    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
});

// Filtro de búsqueda en Marca
document.getElementById('marca-search').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const items = document.querySelectorAll('#marca-list li');
    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
});
