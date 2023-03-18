// navigation javascript
const expandMenu = document.querySelector('.menulist');
const navItem = document.querySelectorAll('.item');
const menuCont = document.querySelector('.items');
const foldMenu = document.querySelector('.close');

function openMobMenu() {
  menuCont.classList.add('menu-open');
}

expandMenu.addEventListener('click', openMobMenu);
function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}
foldMenu.addEventListener('click', closeMobMenu);

navItem.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMobMenu);
});

// famous speakers javascript

const speakersList = [
  {
    speakerImage: 'src="assets/speaker_01.png" alt="Desktop-project3"',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    speakerImage: 'src="assets/speaker_02.png" alt="Desktop-project3"',
    name: 'Kilnam Chon',
    title: 'Director of Art Centre Nabi and a board member of CC Botlokwa',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    speakerImage: 'src="assets/speaker_03.png" alt="Desktop-project3"',
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    speakerImage: 'src="assets/speaker_04.png" alt="Desktop-project3"',
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    speakerImage: 'src="assets/speaker_05.png" alt="Desktop-project3"',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe.',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    speakerImage: 'src="assets/speaker_05.png" alt="Desktop-project3"',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe.',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
];

const speakerss = document.querySelector('#speakers');
speakersList.forEach((speaker) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('flex', 'p-[20px]', 'justify-center', 'gap-5', 'flex-row', 'mb-10', 'relative', 'speaker');
  innerProject.innerHTML = (`
    <img class="-z-9" ${speaker.speakerImage}>
    <div class="flex flex-col gap-1">
        <h2 class="text-[1.17rem] text-[#272a31]">${speaker.name}</h2>
        <p class="text-[16px] text-[#ec5242]">${speaker.title}</p>
        <hr class="w-[40px] bg-[#d3d3d3] h-[1px]">
        <p class="text-[12px]" >${speaker.description}</p>
    </div>
      `);
  speakerss.appendChild(innerProject);
});