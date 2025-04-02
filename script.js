function openModal(imageIndex) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");
    const downloadLink = document.getElementById("download-link");
    const ratingContainer = document.querySelector('.rating-container');

    // Datos de los libros
    const books = [
        {
            src: "img/quijote.jpg",
            title: "Don Quijote de la Mancha",
            text: "La historia de un hidalgo que decide convertirse en caballero andante tras leer muchos libros de caballería, enfrentándose a molinos de viento y liberando prisioneros, y explorando temas de idealismo y realidad.",
            download: "obras pdf/quijote.pdf"
        },
        {
            src: "img/tom.jpeg",
            title: "La cabaña del tío Tom",
            text: "La vida de Tom, un esclavo afroamericano que enfrenta la separación familiar y la injusticia racial, abordando el impacto de la esclavitud y los derechos civiles.",
            download: "obras pdf/Lacabaña.pdf"
        },
        {
            src: "img/lazarillo.png",
            title: "Lazarillo de Tormes",
            text: "La historia de Lázaro, un joven que sirve a diferentes amos, ofreciendo una crítica social a través de sus experiencias de hambre, injusticia y sátira.",
            download: "obras pdf/lazarillo.pdf"
        },
        {
            src: "img/caballero.png",
            title: "El caballero de la armadura oxidada",
            text: "Un caballero obsesionado con su armadura inicia un viaje para descubrir su verdadera identidad, explorando temas de amor y vulnerabilidad.",
            download: "obras_pdf/Elcaballero.pdf"
        },
        {
            src: "img/elviejo.png",
            title: "El viejo y el mar",
            text: "La lucha del pescador Santiago contra un pez espada gigante y los tiburones, como símbolo de perseverancia y dignidad.",
            download: "obras pdf/elviejo.pdf"
        },
        {
            src: "img/gabiota.jpg",
            title: "Juan Salvador Gaviota",
            text: "La búsqueda de Juan Salvador Gaviota por volar más allá de lo común y alcanzar un nivel de autoconocimiento y libertad personal.",
            download: "obras pdf/Gaviota.pdf"
        },
        {
            src: "img/romeo.png",
            title: "Romeo y Julieta",
            text: "La trágica historia de dos jóvenes amantes cuyas familias están enfrentadas, explorando temas de amor prohibido y consecuencias del conflicto.",
            download: "obras pdf/romeo.pdf"
        },
        {
            src: "img/maria.png",
            title: "María",
            text: "La historia de amor entre Efraín y María en el valle colombiano, marcada por la enfermedad y la nostalgia, reflejando el amor puro y el dolor de la separación.",
            download: "obras pdf/Maria.pdf"
        },
        {
            src: "img/soledad.jpeg",
            title: "Cien años de soledad",
            text: "La historia de la familia Buendía en Macondo, explorando temas de destino y soledad a través de generaciones y el ciclo de repetición de eventos.",
            download: "obras pdf/CIEN AÑOS.pdf"
        },
        {
            src: "img/colera.png",
            title: "El amor en los tiempos del cólera",
            text: "La historia de amor entre Fermina Daza y Florentino Ariza, quienes se reencuentran en su vejez y viven una relación que superó décadas y dificultades.",
            download: "obras pdf/colera.pdf"
        },
        {
            src: "img/coroner.png",
            title: "El coronel no tiene quien le escriba",
            text: "Un coronel retirado espera una pensión que nunca llega, aferrándose a la esperanza de cambiar su situación mientras se enfrenta a la pobreza.",
            download: "obras pdf/coronel.pdf"
        },
        {
            src: "img/cronicas.jpg",
            title: "Crónica de una muerte anunciada",
            text: "Un análisis de los eventos que rodean el asesinato de Santiago Nasar, reflexionando sobre la inevitabilidad del destino y la moralidad social.",
            download: "obras pdf/cronica.pdf"
        },
        {
            src: "img/iliada.jpeg",
            title: "La Iliada",
            text: "La Ilíada narra los últimos días de la Guerra de Troya, centrándose en la ira de Aquiles. Tras una disputa con Agamenón, Aquiles se retira de la batalla, permitiendo que los troyanos, liderados por Héctor, tomen ventaja. Cuando Héctor mata a Patroclo, el querido amigo de Aquiles, este regresa al combate para vengarlo. Aquiles mata a Héctor y arrastra su cuerpo, humillándolo. Sin embargo, al final, el rey Príamo, padre de Héctor, le suplica a Aquiles que devuelva el cadáver de su hijo. Conmovido, Aquiles acepta, permitiendo que Héctor reciba un entierro digno.",
            download: "Obras pdf/iliada.pdf"

        },
        {
            src: "img/sangre.jpg",
            title: "sangre",
            text: "sangre",
            download: "Obras pdf/sangre.pdf"
        }
       

    
    ];

    // Verifica si el índice es válido
    if (imageIndex > 0 && imageIndex <= books.length) {
        const book = books[imageIndex - 1]; // Ajustar el índice para que empiece desde 0
        modalImage.src = book.src;
        title.innerText = book.title;
        text.innerText = book.text;
        downloadLink.href = book.download;

        // Limpiar calificación anterior
        const stars = ratingContainer.querySelectorAll('.star');
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    modal.style.display = "flex";
}

function closeModal(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal || event.target.classList.contains("close-btn")) {
        modal.style.display = "none";
    }
}

// Manejo de calificación
const ratingContainer = document.querySelector('.rating-container');
ratingContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('star')) {
        const stars = ratingContainer.querySelectorAll('.star');
        const ratingValue = event.target.getAttribute('data-value');

        // Seleccionar estrellas según la calificación
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= ratingValue) {
                star.classList.add('selected');
            }
        });

        // Aquí puedes agregar la lógica para guardar la calificación si es necesario
        console.log(`Calificación dada: ${ratingValue}`);
    }
});

// Manejo de comentarios
document.getElementById("comment-btn").addEventListener("click", function() {
    const commentInput = document.getElementById("comments");
    const commentList = document.getElementById("comment-list");

    if (commentInput.value.trim() !== "") {
        const comment = document.createElement("p");
        comment.textContent = commentInput.value;
        commentList.appendChild(comment);
        commentInput.value = ""; // Limpiar el campo de comentario
    }
});

// Función de búsqueda con "Mostrar todos"
document.getElementById("search-btn").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input");
    const filter = searchInput.value.toLowerCase();
    const images = document.querySelectorAll(".imagen-galery-button img");

    // Verifica si hay un término de búsqueda
    if (this.innerText === "Mostrar todos") {
        // Reinicia el texto del botón y muestra todas las imágenes
        images.forEach(image => {
            image.style.display = "inline-block";
        });
        this.innerText = "Buscar"; // Cambia el texto del botón a "Buscar"
        searchInput.value = ""; // Limpia el campo de búsqueda
    } else {
        // Realiza la búsqueda y muestra solo los resultados coincidentes
        let found = false;
        images.forEach(image => {
            const title = image.getAttribute("data-title").toLowerCase();
            if (title.includes(filter)) {
                image.style.display = "inline-block";
                found = true;
            } else {
                image.style.display = "none";
            }
        });
        
        // Si se encuentra al menos un resultado, cambia el botón a "Mostrar todos"
        if (filter && found) {
            this.innerText = "Mostrar todos"; // Cambia el texto del botón a "Mostrar todos"
        }
    }
});



// Cierre del modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
