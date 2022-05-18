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
		"album": "Goretrance X ",
		"year": "2017",
		"cover": "img/goretrancex.jpg"
	}
]

// window.addEventListener('unhandledrejection', event => discography.map(({ album, cover, year}) => `<article class="discography-album">

const albums = document.querySelector('.albums-holder');

window.addEventListener('DOMContentLoaded', () => {
	let showDiscography = discography.map(disco => {
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
});
