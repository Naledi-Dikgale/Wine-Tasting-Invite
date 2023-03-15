// capstone

// Responsive Navbar
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

// Program Page 
const programTiles = document.querySelectorAll('.program-tile');

// object 
const tilesData = [
  {
    imageSrc: 'tile1.jpg',
    title: 'Tile 1',
    description: 'Description for Tile 1',
    link: '#',
  },
  {
    imageSrc: 'tile2.jpg',
    title: 'Tile 2',
    description: 'Description for Tile 2',
    link: '#',
  },
  {
    imageSrc: 'tile3.jpg',
    title: 'Tile 3',
    description: 'Description for Tile 3',
    link: '#',
  },
  {
    imageSrc: 'tile4.jpg',
    title: 'Tile 4',
    description: 'Description for Tile 4',
    link: '#',
  },
  {
    imageSrc: 'tile5.jpg',
    title: 'Tile 5',
    description: 'Description for Tile 5',
    link: '#',
  },
];

// Loop through each tile 
programTiles.forEach((tile, index) => {
  tile.querySelector('img').src = tilesData[index].imageSrc;
  tile.querySelector('h3').textContent = tilesData[index].title;
  tile.querySelector('p').textContent = tilesData[index].description;
  tile.querySelector('a').href = tilesData[index].link;
});

// Images 
const images = document.querySelectorAll('.image');

// object to store data for each image
const imagesData = [
  {
    imageSrc: 'image1.jpg',
    title: 'Image 1',
    description: 'Description for Image 1',
    link: '#',
  },
  {
    imageSrc: 'image2.jpg',
    title: 'Image 2',
    description: 'Description for Image 2',
    link: '#',
  },
  {
    imageSrc: 'image3.jpg',
    title: 'Image 3',
    description: 'Description for Image 3',
    link: '#',
  },
  {
    imageSrc: 'image4.jpg',
    title: 'Image 4',
    description: 'Description for Image 4',
    link: '#',
  },
  {
    imageSrc: 'image5.jpg',
    title: 'Image 5',
    description: 'Description for Image 5',
    link: '#',
  },
];

// Loop 
images.forEach((image, index) => {
  image.querySelector('img').src = imagesData[index].imageSrc;
  image.querySelector('h4').textContent = imagesData[index].title;
  image.querySelector('p').textContent = imagesData[index].description;
  image.querySelector('a').href = imagesData[index].link;
});
