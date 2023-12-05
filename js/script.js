// seleziona il contenitore delle immagini
const itemsContainer = document.querySelector('.items_container');

// seleziona il contenitore delle thumbnails
const thumbnailsContainer = document.querySelector('.thumbnails');

// seleziona i pulsanti
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// array degli oggetti immagine
const images = [
  {
    image: 'img/01.webp',
    title: "Marvel's Spiderman Miles Morale",
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  },
];

// imposta elemento visibile
let activeItem = 0;

// carica dinamicamente le immagini e le thumbnails
images.forEach((data, index) => {
  const item = document.createElement('div');
  item.classList.add('item', index === 0 ? 'active' : 'hidden');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const imgElement = document.createElement('img');
  imgElement.src = data.image;
  imgElement.alt = `Immagine ${index + 1}`;
  imgContainer.append(imgElement);

  const overlayTitle = document.createElement('h3');
  overlayTitle.textContent = data.title;
  imgContainer.append(overlayTitle);

  const overlayText = document.createElement('h5');
  overlayText.textContent = data.text;
  imgContainer.append(overlayText);

  item.append(imgContainer);
  itemsContainer.append(item);

  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');

  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = data.image;
  thumbnailImg.alt = `Thumbnail ${index + 1}`;
  thumbnail.append(thumbnailImg);

  const overlay = document.createElement('div');
  overlay.classList.add('overlay', index !== 0 ? 'active' : 'hidden');
  thumbnail.append(overlay);

  thumbnailsContainer.append(thumbnail);
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
  





 

// Funzione per eseguire l'autoplay
function autoplay() {
  // Simula un click sul pulsante "Next"
  next.click();
}

// Intervallo di 3 secondi per l'autoplay
const autoplayInterval = setInterval(autoplay, 3000);

