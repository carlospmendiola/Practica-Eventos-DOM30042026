const listBotones = document.getElementById('listBotones');
const fragment = document.createDocumentFragment();
const tags = new Set();
const arrayImagenes = [
  {
    id: 'imagen1',
    alt: 'Alt-imagen1',
    tags: ['campo','globos']
  },
  {
    id: 'imagen2',
    alt: 'Alt-imagen2',
    tags: ['cielo','mar']
  },
  {
    id: 'imagen3',
    alt: 'Alt-imagen3',
    tags: ['cielo','sol']
  },
  {
    id: 'imagen4',
    alt: 'Alt-imagen4',
    tags: ['nubes','sol']
  },
  {
    id: 'imagen5',
    alt: 'Alt-imagen5',
    tags: ['cielo','ciudades']
  },
  {
    id: 'imagen6',
    alt: 'Alt-imagen6',
    tags: ['edificio','rio']
  },
  {
    id: 'imagen7',
    alt: 'Alt-imagen7',
    tags: ['edificios','monte']
  },
  {
    id: 'imagen8',
    alt: 'Alt-imagen8',
    tags: ['edificio','rio']
  }/* 
  {
    id: 'imagen9',
    alt: 'Alt-imagen9',
    tags: ['mar','pajaro','sol']
  },
  {
    id: 'imagen10',
    alt: 'Alt-imagen10',
    tags: ['cielo','nubes','globos']
  },
  {
    id: 'imagen11',
    alt: 'Alt-imagen11',
    tags: ['playa','mar','edificio']
  },
  {
    id: 'imagen12',
    alt: 'Alt-imagen12',
    tags: ['playa','mar','chica']
  } */
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
      fragment.append(crearBoton)
    });
  listBotones.append(fragment)
  }
  pintarBotones()