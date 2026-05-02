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
    alt: 'Alt-imagen1',
    tags: ['campo','globos']
  },
  {
    imagen: 'images/img2-cielo-mar-sol.jpg', 
    id: 'imagen2',
    alt: 'Alt-imagen2',
    tags: ['cielo','mar']
  },
  {
    imagen: 'images/img3-cielo-nubes-sol.jpg', 
    id: 'imagen3',
    alt: 'Alt-imagen3',
    tags: ['cielo','sol']
  },
  {
    imagen: 'images/img4-cielo-sol.jpg', 
    id: 'imagen4',
    alt: 'Alt-imagen4',
    tags: ['nubes','sol']
  },
  { imagen: 'images/img5-nubes-globos.jpg',
    id: 'imagen5',
    alt: 'Alt-imagen5',
    tags: ['cielo','globos']
  },
  {
    imagen: 'images/img6-edificio-rio.jpg',
    id: 'imagen6',
    alt: 'Alt-imagen6',
    tags: ['edificio','rio']
  },
  {
    imagen: 'images/img7-edificio-piedra.jpg',
    id: 'imagen7',
    alt: 'Alt-imagen7',
    tags: ['edificio','ciudad']
  },
  {
    imagen: 'img8-mar-pajaros-sol.jpg',
    id: 'imagen8',
    alt: 'Alt-imagen8',
    tags: ['edificio','rio']
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
      /* Filtramos y pintamos la imagen central pero solo la primera y le añadimos el alt a esta primara imagen */
      const crearImagencentral = document.createElement('img');
      crearImagencentral.src = imagenesFiltradas[0].imagen;
      crearImagencentral.alt = imagenesFiltradas[0].alt;

/*       const crearImgsecundarias = document.createElement('img');
      crearImgsecundarias.src = imagenesFiltradas.slice(1).imagen;
      crearImgsecundarias.alt = imagenesFiltradas.slice(1).alt; */
        
      crearDescripcion.classList.add('center');
      crearDescripcion.innerHTML = (`Se han encontrado <span class='colorPrincipal'>${imagenesFiltradas.length}</span> imagenes con la categoria <span class='colorPrincipal'>${tag}</span>`);

      /* Añadimos esto para evitar que cada vez que hacemos click en los botones no se repita ni el texto de presentación ni las imágenes, con esto limpiamos antes de hacer la llamada a la imagen y al texto  */
      txtPresentacion.innerHTML = '';
      imagenPrincipal.innerHTML = '';
      // imgSecundarias.innerHTML = '';
      
      imagenPrincipal.append(crearImagencentral);
      // imgSecundarias.append(crearImgsecundarias);
      txtPresentacion.append(crearDescripcion);

    
    });
    fragment.append(crearBoton);
    // fragment.append(crearImagencentral);
    
  });
  listBotones.append(fragment);
  
  }
  pintarBotones()