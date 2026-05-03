const listBotones = document.getElementById('listBotones');
const txtPresentacion = document.getElementById('txtPresentacion');
const imagenPrincipal = document.getElementById('imagenPrincipal');
const imgSecundarias = document.getElementById('imgSecundarias');
const fragment = document.createDocumentFragment();
const tags = new Set();
const arrayImagenes = [
  {
    imagen: 'images/img1-cielo-campo-globos.jpg', 
    id: 'imagen1',
    titulo: 'Cielos y globos',
    alt: 'Alt-imagen1',
    tags: ['nubes','globos']
  },
  {
    imagen: 'images/img2-cielo-mar-sol.jpg', 
    id: 'imagen2',
    titulo: 'Atardecer en el mar',
    alt: 'Alt-imagen2',
    tags: ['nubes','mar','sol']
  },
  {
    imagen: 'images/img3-cielo-nubes-sol.jpg', 
    id: 'imagen3',
    titulo: 'Nubes al amanecer',
    alt: 'Alt-imagen3',
    tags: ['cielo','sol']
  },
  {
    imagen: 'images/img4-cielo-sol.jpg', 
    titulo: 'La luna tras las nubes',
    id: 'imagen4',
    alt: 'Alt-imagen4',
    tags: ['nubes','sol']
  },
  { imagen: 'images/img5-nubes-globos.jpg',
    titulo: 'Globos en el cielo',
    id: 'imagen5',
    alt: 'Alt-imagen5',
    tags: ['nubes','globos']
  },
  {
    imagen: 'images/img6-edificio-rio.jpg',
    titulo: 'Edificio de Sevilla',
    id: 'imagen6',
    alt: 'Alt-imagen6',
    tags: ['edificio','cielo']
  },
  {
    imagen: 'images/img7-edificio-piedra.jpg',
    titulo: 'Pueblo bajo las murallas',
    id: 'imagen7',
    alt: 'Alt-imagen7',
    tags: ['edificio','cielo']
  },
  {
    imagen: 'images/img8-playa-mar.jpg',
    titulo: 'Casita en el mar',
    id: 'imagen8',
    alt: 'Alt-imagen8',
    tags: ['mar','cielo','nubes']
  }
]

 /* Recorremos las imágenes para sacar las etiquetas y quitamos las repetidas, solo queremos una etiqueta de cada para construir los botones */
  const pintarBotones = () => {
    arrayImagenes.forEach((etiquetas) => {
      etiquetas.tags.forEach((tag) => {
          tags.add(tag);
      });
    });

    /* Con las etiquetas ya recolectadas vamos construyendo los botones */
    tags.forEach((tag) => {
    const crearBoton = document.createElement('button');

    crearBoton.classList.add('borderRadius10');
    crearBoton.textContent = (tag);

    /* Con esta función creamos los botones con las etiquetas y seleccionamos las imágenes que tienen esas etiquetas */
    crearBoton.addEventListener("click", () => {
      const crearDescripcion = document.createElement('p');
      const imagenesFiltradas = arrayImagenes.filter((imagen) => {
       return imagen.tags.includes(tag);
      });
      /* Cogemos el título de cada imagen del array para crear el h3 */
      const crearTitulo = document.createElement('h3');
      crearTitulo.textContent = (imagenesFiltradas[0].titulo);

      crearTitulo.classList.add('colorPrincipal');
      crearTitulo.classList.add('mayusculas');
      /* Filtramos y pintamos la imagen central pero solo la primera y le añadimos el alt a esta primara imagen */
      const crearImagencentral = document.createElement('img');
      crearImagencentral.src = imagenesFiltradas[0].imagen;
      crearImagencentral.alt = imagenesFiltradas[0].alt;


      /* Añadimos esto para evitar que cada vez que hacemos click en los botones no se repita ni el texto de presentación ni las imágenes, con esto limpiamos antes de hacer la llamada a la imagen y al texto  */  

      txtPresentacion.innerHTML = '';
      imagenPrincipal.innerHTML = '';
      imgSecundarias.innerHTML = '';

      /* Ahora filtramos las restantes imágenes con el alt */
      imagenesFiltradas.slice(1).forEach ((imagen) => {
        /* Creamos el div donde irá cada imagen */
        const crearDivImgSec = document.createElement('div')
        /* Creamos el h4 del título de cada imagen del array */
        const crearTituloh4 = document.createElement('h4');
        /* Creamos el elemento imagen del array para crearla imagen secundaria */
        
        const crearImgsecundarias = document.createElement('img');

        crearTituloh4.textContent = (imagen.titulo);
        /* Función para crear el cambio de imagen princiàl y secundaria */
        crearImgsecundarias.addEventListener("click", () => {
          /* Guardo el src actual de la imagen principal en una variable temporal */
          const valorImagen = crearImagencentral.src;
          /* Asignamos el src de la imagen secundaria a la imagen principal */
          crearImagencentral.src = crearImgsecundarias.src;
          /* Hace el intercambio de la imagen secundaria con la principal */
          crearImgsecundarias.src = valorImagen;

          /* Guardo el titulo actual de la imagen principal en una variable temporal */
          const valorTitulo = crearTitulo.textContent;
          /* Asignamos el titulo de la imagen secundaria a la imagen principal */
          crearTitulo.textContent = crearTituloh4.textContent;
          /* Hace el intercambio del titulo de la imagen secundaria a la principal */
          crearTituloh4.textContent = valorTitulo;
        });

        crearImgsecundarias.src = imagen.imagen;
        crearImgsecundarias.alt = imagen.alt;

        
        crearDivImgSec.append(crearImgsecundarias);
        crearDivImgSec.append(crearTituloh4)
        imgSecundarias.append(crearDivImgSec);
        // imgSecundarias.append(crearTituloh4);

      });

      /* Pintamos el párrafo donde se muestran el número de mágenes de la categoría y su nombre */
      crearDescripcion.classList.add('center');
      crearDescripcion.innerHTML = (`Se han encontrado <span class='colorPrincipal'>${imagenesFiltradas.length}</span> imagenes con la categoria <span class='colorPrincipal'>${tag}</span>`);


      txtPresentacion.append(crearDescripcion);
      imagenPrincipal.append(crearTitulo);
      imagenPrincipal.append(crearImagencentral);
      
    
    });
    fragment.append(crearBoton);
    
  });
  listBotones.append(fragment);
  
  }
  pintarBotones()