// seleziona il contenitore delle immagini
const itemsContainer = document.querySelector('.items_container');

// seleziona il contenitore delle thumbnails
const thumbnailsContainer = document.querySelector('.thumbnails');

// seleziona i pulsanti
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// ... (il tuo codice precedente rimane invariato)

// array delle immagini
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
  ];
  
  // imposta elemento visibile
  let activeItem = 0;
  
  // carica dinamicamente le immagini e le thumbnails
  images.forEach((image, index) => {
    const item = document.createElement('div');
    if (index === 0) {
      item.classList.add('item', 'active');
    } else {
      item.classList.add('item', 'hidden');
    }
  
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = `Immagine ${index + 1}`;
    item.appendChild(imgElement);
  
    itemsContainer.appendChild(item);
  
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
  
    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = image;
    thumbnailImg.alt = `Thumbnail ${index + 1}`;
    thumbnail.appendChild(thumbnailImg);
  
    // Aggiungi l'overlay alle thumbnails
    const overlay = document.createElement('div');
    if (index !== 0) {
      overlay.classList.add('overlay', 'active');
    } else {
      overlay.classList.add('overlay', 'hidden');
    }
    thumbnail.appendChild(overlay);
  
    thumbnailsContainer.appendChild(thumbnail);
  });
  
  // al click su "next"
  next.addEventListener('click', function () {
    // nascondi l'elemento corrente
    itemsContainer.children[activeItem].classList.remove('active');
    itemsContainer.children[activeItem].classList.add('hidden');
  
    // nascondi l'overlay della thumbnail corrente
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.remove('hidden');
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.add('active');
  
    // incrementa l'elemento corrente
    activeItem++;
  
    // gestisci il superamento dell'ultima immagine
    if (activeItem === itemsContainer.children.length) {
      activeItem = 0;
    }
  
    // mostra il nuovo elemento corrente
    itemsContainer.children[activeItem].classList.remove('hidden');
    itemsContainer.children[activeItem].classList.add('active');
  
    // mostra l'overlay della nuova thumbnail corrente
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.add('hidden');
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.remove('active');
  });
  
  // al click su "prev"
  prev.addEventListener('click', function () {
    // nascondi l'elemento corrente
    itemsContainer.children[activeItem].classList.remove('active');
    itemsContainer.children[activeItem].classList.add('hidden');
  
    // nascondi l'overlay della thumbnail corrente
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.remove('hidden');
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.add('active');
  
    // decrementa l'elemento corrente
    activeItem--;
  
    // gestisci il superamento della prima immagine
    if (activeItem < 0) {
      activeItem = itemsContainer.children.length - 1;
    }
  
    // mostra il nuovo elemento corrente
    itemsContainer.children[activeItem].classList.remove('hidden');
    itemsContainer.children[activeItem].classList.add('active');
  
    // mostra l'overlay della nuova thumbnail corrente
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.add('hidden');
    thumbnailsContainer.children[activeItem].querySelector('.overlay').classList.remove('active');
    
  });
  