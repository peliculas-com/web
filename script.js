// Información de películas por género
const movies = {
    accion: [
        { title: "Soy leyenda", image: "accion1.jpg" },
        { title: "The Wolverine", image: "accion2.jpg" },
        { title: "Godzilla", image: "accion3.jpg" },
        { title: "Rapidos y Furiosos", image: "accion4.jpg" },
        { title: "Dos policias reberldes", image: "accion5.jpg" },
        { title: "Joker", image: "accion8.jpg" },
        { title: "Blacklight", image: "accion7.jpg" },
        { title: "Duro de matar", image: "15.jpg" }
    ],
    drama: [
        { title: "El niño", image: "drama1.jpg" },
        { title: "Project Power", image: "8.jpg" },
        { title: "Durante la Tormenta", image: "drama3.jpg" },
        { title: "Nieve Negra", image: "drama4.jpg" },
        { title: "ContraTiempo", image: "drama5.jpg" },
        { title: "El Guardian Invisible", image: "drama6.jpg" },
        { title: "BOYHOOD", image: "drama7.jpg" },
        { title: "THOR", image: "2.jpg" }
    ],
    comedia: [
        { title: "Un pueblo dispuesto a todo", image: "comedia1.jpg" },
        { title: "Perdiendo el norte", image: "comedia2.jpg" },
        { title: "Vuelta a Casa de mi madre", image: "comedia3.jpg" },
        { title: "THOR", image: "3.jpg" },
        { title: "Little Man", image: "comedia5.jpg" },
        { title: "Home Alone", image: "comedia6.jpg" },
        { title: "Todo Incluido", image: "comedia7.jpg" },
        { title: "Los padres de ella", image: "comedia8.jpg" }
    ],
    terror: [
        { title: "Annabelle", image: "terror1.jpg" },
        { title: "The Witch", image: "terror2.jpg" },
        { title: "Un lugar Tranquilo", image: "terror3.jpg" },
        { title: "OUIJA", image: "terror4.jpg" },
        { title: "", image: "terror5.jpg" },
        { title: "MAMÁ", image: "terror6.jpg" },
        { title: "El Conjuro 2", image: "terror7.jpg" },
        { title: "La Purga", image: "terror8.jpg" }

    ],
    cienciaFiccion: [
        { title: "Raised By Wolves 2", image: "ficcion1.jpg" },
        { title: "Avatar", image: "ficcion2.jpg" },
        { title: "Marte", image: "ficcion3.jpg" },
        { title: "June", image: "ficcion4.jpg" },
        { title: "El Reino Del Planeta de los Simios", image: "ficcion5.jpg" },
        { title: "Alien", image: "ficcion6.jpg" },
        { title: "El Gran Cambio", image: "ficcion7.jpg" },
        { title: "Predator", image: "ficcion8.jpg" }
    ],
    familiar: [
        { title: "El Rey Leon", image: "familiar1.jpg" },
        { title: "Harry Potter", image: "familiar2.jpg" },
        { title: "Intensamente", image: "familiar3.jpg" },
        { title: "Moana", image: "familiar4.jpg" },
        { title: "Horton y el mundo de los Quien", image: "familiar5.jpg" },
        { title: "Caroline", image: "familiar6.jpg" },
        { title: "El lorax", image: "familiar7.jpg" },
        { title: "Robot Salvaje", image: "familiar8.jpg" }
    ],
    romance: [
        { title: "A dos metros de ti", image: "romance5.jpg" },
        { title: "Orgullo y Prejucio", image: "romance2.jpg" },
        { title: "Antes de ti", image: "romance1.jpg" },
        { title: "Bajo la misma estrella", image: "romance4.jpg" },
        { title: "Titanic", image: "romance3.jpg" },
        { title: "Todos los dias mi vida", image: "romance6.jpg" },
        { title: "Fabricante de lagrimas", image: "romance8.jpg" },
        { title: "The lucky one", image: "romance7.jpg" },
        
    ]
};

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}


// Función para mostrar películas por género
function showGenre(genre) {
    const gallery = document.getElementById("movieGallery");
    gallery.innerHTML = ""; // Limpia la galería

    // Agrega las películas del género seleccionado
    movies[genre].forEach(movie => {
        const movieBox = document.createElement("div");
        movieBox.classList.add("movie-box");
        
        const movieImage = document.createElement("img");
        movieImage.src = movie.image;
        movieImage.alt = movie.title;
        
        const movieTitle = document.createElement("h3");
        movieTitle.textContent = movie.title;
        
        movieBox.appendChild(movieImage);
        movieBox.appendChild(movieTitle);
        
        gallery.appendChild(movieBox);
    });
}
