// discography array with album objects

const discography = [
	{
		"id": 1,
		"album": "Where Is Soda Pop And Apple Sweets?",
		"year": "2008",
		"cover": "img/where.jpg"
	},
	{
		"id": 2,
		"album": "Tomboyish Love For Daughter",
		"year": "2008",
		"cover": "img/tomboyish.jpg"
	},
	{
		"id": 3,
		"album": "My Love Feels All Wrong",
		"year": "2009",
		"cover": "img/mylove.jpg"
	},
	{
		"id": 4,
		"album": "Mainstream Muthafucka!",
		"year": "2010",
		"cover": "img/mainstream.jpg"
	},
	{
		"id": 5,
		"album": "Steppa",
		"year": "2010",
		"cover": "img/steppa.jpg"
	},
	{
		"id": 6,
		"album": "Dancefloor Degrader",
		"year": "2010",
		"cover": "img/dancefloor.jpg"
	},
	{
		"id": 7,
		"album": "Overspecialized",
		"year": "2011",
		"cover": "img/oversp.jpg"
	},
	{
		"id": 8,
		"album": "Blue Girl On Sunday",
		"year": "2011",
		"cover": "img/blue.jpg"
	},
	{
		"id": 9,
		"album": "Bleak",
		"year": "2011",
		"cover": "img/bleak.jpg"
	},
	{
		"id": 10,
		"album": "Wake Up, Painful Sister!",
		"year": "2012",
		"cover": "img/wakeup.jpg"
	},
	{
		"id": 11,
		"album": "Ministry Of Shit",
		"year": "2013",
		"cover": "img/ministry.jpg"
	},
	{
		"id": 12,
		"album": "Rituals",
		"year": "2013",
		"cover": "img/rituals.jpg"
	},
	{
		"id": 13,
		"album": "Wish I Was Here (or How Things Went Wrong) ",
		"year": "2014",
		"cover": "img/wish.jpg"
	},
	{
		"id": 14,
		"album": "Mlsfaw",
		"year": "2014",
		"cover": "img/mlsfaw.jpg"
	},
	{
		"id": 15,
		"album": "end.",
		"year": "2014",
		"cover": "img/end.jpg"
	},
	{
		"id": 16,
		"album": "Goretrance 9",
		"year": "2015",
		"cover": "img/goretrance9.jpg"
	},
	{
		"id": 17,
		"album": "With All My Heart ",
		"year": "2015",
		"cover": "img/myheart.jpg"
	},
	{
		"id": 18,
		"album": "Semantics: The Benzo Chronicles",
		"year": "2015",
		"cover": "img/semantics.jpg"
	},
	{
		"id": 19,
		"album": "I Hardly Knew You",
		"year": "2016",
		"cover": "img/hardly.jpg"
	},
	{
		"id": 20,
		"album": "Sedatives Vol. 1",
		"year": "2016",
		"cover": "img/sedatives1.jpg"
	},
	{
		"id": 21,
		"album": "Sedatives Vol. 2",
		"year": "2016",
		"cover": "img/sedatives2.jpg"
	},
	{
		"id": 22,
		"album": "Sedatives Vol. 3",
		"year": "2016",
		"cover": "img/sedatives3.jpg"
	},
	{
		"id": 23,
		"album": "You Get The Tracks You Deserve!",
		"year": "2016",
		"cover": "img/youget.jpg"
	},
	{
		"id": 24,
		"album": "Stankface",
		"year": "2017",
		"cover": "img/stankface.jpg"
	},
	{
		"id": 25,
		"album": "Goretrance X",
		"year": "2017",
		"cover": "img/goretrancex.jpg"
	},
	{
		"id": 26,
		"album": "Memestreet",
		"year": "2017",
		"cover": "img/meme.jpg"
	},
	{
		"id": 27,
		"album": "nrrv6",
		"year": "2018",
		"cover": "img/nrrv6.jpg"
	},
	{
		"id": 28,
		"album": "nineties rave retrospective collection 1",
		"year": "2018",
		"cover": "img/nrrc1.jpg"
	},
	{
		"id": 29,
		"album": "loather",
		"year": "2018",
		"cover": "img/loather.jpg"
	},
	{
		"id": 30,
		"album": "tower block knife crime ",
		"year": "2019",
		"cover": "img/tbkc.jpg"
	},
	{
		"id": 31,
		"album": "AP1 - Nineties Rave Retrospective Volume 7",
		"year": "2019",
		"cover": "img/nrrv7.jpg"
	},
	{
		"id": 32,
		"album": "i can't help you.",
		"year": "2020",
		"cover": "img/canthelp.jpg"
	},
	{
		"id": 33,
		"album": "splitshit 2",
		"year": "2020",
		"cover": "img/splitshit2.jpg"
	},
	{
		"id": 343,
		"album": "ap 2",
		"year": "2021",
		"cover": "img/ap2.jpg"
	},
	{
		"id": 35,
		"album": "Misdirection (With Hitori Tori)",
		"year": "2021",
		"cover": "img/misdirection.jpg"
	},
]

const albums = document.querySelector('.albums-container');
const albumSelector = document.querySelector('#album-selector');
let albumYear = [];


window.addEventListener('DOMContentLoaded', () => {
	showAlbums(discography);
});

albumSelector.addEventListener('change', e => {
	let year = albumSelector.options[albumSelector.selectedIndex].value
	filterDisc(year, discography);
});

let showAlbums = discography => {
	let showDiscography = discography?.map(disco => {
		
		return `<article class="discography-album">
			<img src="${disco.cover}" class="photo" alt="${disco.album}">
			<div class="album-info">
				<header>
					<h4>${disco.album}</h4>
					<h4 class="buy">${disco.year}</h4>
				</header>
				<p class="item-text">more information</p>
			</div>
		</article>`;
	});
	albums.innerHTML = showDiscography.join('')
};

const filterDisc = (year, discography) => {
	const filteredYear = discography.filter(selectedYear => {
		if(selectedYear.year === year) {
			console.log(selectedYear);
			return selectedYear;
		}
	});
	if(year === "all") {
		showAlbums(discography);
	} else {
		showAlbums(filteredYear);
	}
};
