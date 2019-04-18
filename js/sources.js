var PREFIX = "../";

var payload = {
	"2 - 16:00": { // Registration and Sponsorship Expo
		html: "<img src='../assets/scotiabank.png' class='modal-img' alt='Scotiabank logo'><br>" +
		"<img src='../assets/bcg-short.png' class='modal-img-small' alt='BCG logo'>" + 
		"<img src='../assets/starfish.png' class='modal-img-small' alt='Starfish Medical logo'><br><br>" +
		"<p>A welcome event where delegates are invited to register themselves, and then move on to the Sponsorship Expo.</p>" +
		"<p>The Sponsorship Expo is a chance for all delegates to meet and network with representatives from our sponsors and partners, as well as some of our speakers!</p>"
	},
	"2 - 17:00": { // Opening Remarks and Dinner
		text: "The co-chairs will address the conference while a catered buffet dinner catered by the Holiday Inn Hotel is served.",
		doublesrc: true
	},
	"2 - 18:00": { // Speaker: Julie Lassonde
		html: "<p>Julie Lassonde has over 15 years of experience in a variety of financial, advisory, and engineering settings. She has been an executive and senior executive at several mining and resources companies. In addition to this, she is a seasoned board member with experience on the boards of multiple companies such as Alexis Minerals, Bison Gold, and Halo Resources. Julie has been an active member of her community through her work in organizations including the Canadian Engineering Memorial Foundation, the Campaign for Queen's University Engineering, and the Advisory Board for Civil Engineering at the University of Toronto.</p>",
		speakersrc: "assets/speakers/julie.jpg",
		img_alt: "Julie Lassonde headshot"
	},
	"2 - 19:00": { // BCG Case Study
		text: "At CIRQUE 2019, BCG representatives will lead a case-study workshop giving delegates the opportunity to work in teams and put their strategic thinking to the ultimate test! The case study theme is new and emerging technologies! If you’re interested in consulting, the business industry, space, or just want to get better at case studies in an interactive session, this is an incredible opportunity! BCG representatives will also be joining us at dinners and socials, so get ready to put your networking skills to use!",
		companysrc: "assets/bcg.png",
		img_alt: "BCG logo"
	}, 
	"2 - 20:45": { // Networking Break
		text: "Time to relax, grab a coffee and meet your fellow delegates!",
	},
	"2 - 21:15": { // Speaker: Dave Timon
		text: "Dave Timan began his career at a productive internship at Black and Decker, in which he was involved in patenting several of his inventions. He then worked at Bombardier Transportation and started the company Engaia Inc., a consulting firm for green building design. Following the success of Engaia, he has been involved in multiple entrepreneurial ventures, including Charge Centre and TimberWolf Cycles. Dave is the founder and lead designer of TimberWolf Cycles, which produces high-performance wooden bicycles. Using his past design and entrepreneurial experience, Dave continues to grow and develop TimberWolf Cycles, while simultaneously consulting for Engaia and Ktect SBS.",
		speakersrc: "assets/speakers/david.jpg",
		img_alt: "Dave Timan Headshot"
	},
	"2 - 22:00": { // Social at Blu Martini (19+)
		html: "<p>A chance to relax, network and hang out with your fellow delegates and speakers!</p><br><p>See the map below for directions</p>",
		map: '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1429.4441493838945!2d-76.480776691776!3d44.22995806670342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4cd2aaf8eaa6189f%3A0xfd7913319d45c3b1!2sHoliday+Inn+Kingston+Waterfront%2C+2+Princess+St%2C+Kingston%2C+ON+K7L+1A2!3m2!1d44.230691199999995!2d-76.4781261!4m5!1s0x4cd2aaf94bbc94f1%3A0x377159e8703fadb3!2sBLU+Martini%2C+178+Ontario+St%2C+Kingston%2C+ON+K7L+2Y8!3m2!1d44.228869499999995!2d-76.4812839!5e0!3m2!1sen!2sca!4v1548827065696" width="80%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
	},

	// DAY 2
	"3 - 8:30": { // Breakfast
		text: "A continental breakfast catered by the Holiday Inn Hotel."
	},
	"3 - 9:30": { // Speaker: Emily Columbo
		text: "Emily Colombo graduated from Queen’s University in 2012 with a degree in Civil Engineering. Emily worked at La Farge, a concrete company, upon graduation. Shortly after she secured a position as Lead Designer of Waterslides with WhiteWater West Industries Ltd. She later moved to Business Development where she worked with trusted industry design professionals on bringing global water and theme park projects to life. WhiteWater West is the largest water park design firm in the world, and Emily travels the world designing water parks. She does mentorship coaching and leadership training on the side, and is very involved with women in engineering.",
		speakersrc: "assets/speakers/emily.jpg",
		img_alt: "Emily Colombo Headshot"
	},
	"3 - 10:30": { // Starfish Workshop
		text: "CIRQUE is proud to present Starfish Medical as one if its newest partners! Representatives from Canada’s largest medical devices company will be giving an interactive presentation on their work, how their projects impact the medical industry, and the rapid development of the biomedical engineering industry.",
		companysrc: "assets/starfish.png",
		img_alt: "StarFish Medical logo"
	},
	"3 - 11:30": { // Coffee Break
		text: "A short coffee break break to shake out your bones, chat with fellow delegates and provide some time to prepare for the evening's activities!"
	},
	"3 - 12:00": { // Smith Workshop
		text: "What is the best path for me after completing my engineering undergrad? Should I go straight to the workforce? Or perhaps do a masters or receive business education? We hope to answer those questions for you with a highly energetic debate panel hosted by the Smith School of Business. Our panel will feature 3 engineering alumni who each chose one of the aforementioned paths. Come ready to discuss as this session is also open for audience involvement, our moderator is not afraid to stir the pot.",
		companysrc: "assets/smith.png",
		img_alt: "The Smith School of Business logo"
	},
	"3 - 13:00": { // Lunch
		text: "A buffet lunch catered by the Holiday Inn Hotel."
	},
	"3 - 14:00": { // Speaker: Tom Kennedy
		text: "Thomas Kennedy graduated from Queen’s University with a degree in Mining Engineering. He later completed his Doctor of Business Education in Finance at The University of Edinburgh. Thomas is the founder of Kensington Capital Partners and Chair of the Investment Committee. He serves on the Advisory Boards of several private equity funds and private companies and has been an active supporter of the Private Equity and Venture Capital business in Canada. His public service and philanthropic work has been a longstanding, and focused on education and healthcare. Thomas’s previous experience includes 10 years in operational and management positions with Consolidation Coal Co. and Alberta Energy Company. He has investment banking experience as a senior executive with Bunting Warburg, Lancaster and TD Securities.",
		speakersrc: "assets/speakers/thomas.png",
		img_alt: "Thomas Kennedy Headshot"
	},
	"3 - 15:00": { // Scotiabank Workshop
		html: "\
			<div style='text-align: left;'>\
			<h5>\
				CIRQUE 2019’s title sponsor is back once again to lead two more highly interactive workshops! Delegates will have the choice of attending one of two workshops:\
			</h5>\
			<ul>\
				<li>\
					Capital Markets: Delegates will have an opportunity to learn about capital markets and participate in small elevator pitch competition at the end. This workshop is recommended for those with an interest in applied mathematics.\
				</li>\
				<li>\
					Global Outreach: Delegates will be given an interactive presentation about Scotiabank’s worldwide connections and how to make a global impact in the workforce. This workshop is recommended for those interested in international business.\
				</li>\
			</ul>\
			<p>\
				At the conclusion of these workshops, delegates will be addressed by the Director of Recruiting for Scotiabank, Michael Shelsen.\
			</p>\
			<div style='text-align: center;'>\
				<img src='" + PREFIX + "assets/speakers/mike.jpeg' class='modal-img-small super-rounded' alt='Mike Shelson Headshot'>\
			</div>\
			<h5>About Michael:</h5>\
			<p>\
				Michael (Mike) Shelsen is looking to inspire students to think about the limitless possibilities in business. He wants to share his story about how he got to where he is today as the Director of Global Recruitment at Scotiabank. In his speech he is looking to ask students to think about their core values and the type of lifestyle they would like to lead in the future. Then, he wants them to think about how these values will affect the type of career they choose to pursue.\
			</p>\
			<p>\
				As a CPA,CA, Mike has also had the chance to travel the world with work. However, he would not have had the amazing international experiences he’s had  if he had not seized his opportunities. By sharing his career story, he hopes to encourage students to always have a positive attitude and take advantage of opportunities so they too can grow and thrive in their careers and be limitless.\
			</p>",
		companysrc: "assets/scotiabank.png",
		img_alt: "Scotiabank logo"
	},
	"3 - 17:30": { // Coffee Break
		text: "A second short break break to prepare for the evening's activities."
	},
	"3 - 18:00": { // Speaker: Nick Whalen
		text: "Nick Whalen is a Canadian Member of Parliament and currently represents the riding of St. John's East in the House of Commons. After a Bachelor’s and Master’s degree at Queen’s, Nick graduated from McGill Law. In his work as a lawyer and a patent agent, he specialized in energy law, intellectual property, and corporate and commercial law. Throughout his time at Queen’s and his subsequent career, Nick has been highly involved in his community through organizations such as Queen’s AMS, Parkinson’s Society of NL, and Lewa Wildlife Conservancy Canada.",
		speakersrc: "assets/speakers/nick.jpg",
		img_alt: "Nick Whalen Headshot"
	},
	"3 - 19:00": { // Dinner
		text: "A 3-course meal catered by the Holiday Inn Hotel."
	},
	"3 - 20:00": { // Speaker: Annette Bergeron
		text: "Annette Bergeron graduated from Queen’s University with a degree in Metallurgical Engineering and later completed her MBA in Strategic Management and Entrepreneurship from the Schulich School of Business at York University. Annette has over three decades of experience in industry, academic administration, engineering and business education, entrepreneurship, and governance. She has held roles such as the President of Professional Engineers Ontario and Lecturer at the School of Business and Faculty of Engineering as well as Director of First Year Engineering at Queen’s. She is now serving as Lead Consultant on a Status of Women Canada grant for the Ontario Society of Professional Engineers, Corporate Director at South East Local Health Integration Network, Board Director of Electrical Safety Authority Ontario, and most recently she has been appointed President of Engineers Canada. From the variety of experiences Annette has had, she excels in executive leadership and governance of not-for-profit corporations. Annette continues to serve as a role model for young engineers and the involvement of women in STEM.",
		speakersrc: "assets/speakers/annette.jpg",
		img_alt: "Annette Bergeron Headshot"
	},
	"3 - 21:00": { // Social
		text: "A social at the Holiday Inn Hotel"
	},
};

function greyOutThePast() {
	// days of the conference
	var friday = new Date("February 8, 2019 12:00 PM");
	var saturday = new Date("February 9, 2019 12:00 PM");
	var sunday = new Date("February 10, 2019 12:00 PM");
	var today = new Date();

	// if we've passed the conference, dw about it
	if (sunday < today)
		return;

	// get html tables with the dates and times
	var saturdaySched = $('#feb-3').children().children('tr:not(.header-cell)');
	var fridaySched = $('#feb-2').children().children('tr:not(.header-cell)');

	// extract information about what time it is
	var hrs = today.getHours().toString();
	var mins = today.getMinutes().toString();
	var day = today.getDay();
	// correct for the fact that getMinutes can return a single digit number
	if (mins < 10)
		mins = "0" + mins

	// if it's saturday, blur out all of friday and start counting saturday
	if (day == saturday.getDay()) {
		blurPast(saturdaySched, hrs, mins);
		blurAll(fridaySched);
	}
	else if (day == friday.getDay())
		blurPast(fridaySched, hrs, mins);
}

function blurPast(els, hour, mins) {
	var upNext = true;
	var done = false;
	var last;
	var len = els.length;

	els.each(function(index) {
		if (done)
			return;

		var el = $(this);
  		var html = el.children().html();
  		var nextTime = getTime(html);
  		var lastTime;
  		if (last)
  			lastTime = getTime(last.children().html());
  		else
  			lastTime = 0;

  		var currentTime = parseInt(hour + mins);

  		if (nextTime < currentTime) {
  			el.children().css('background-color', 'rgba(0, 0, 0, 0.3)');
  		}

  		if (lastTime <= currentTime && nextTime > currentTime) {
  			console.log(currentTime)
  			console.log(nextTime)
  			if (last) {
  				last.children().css('background-color', 'rgba(0, 255, 0, 0.3)');
  			} else {
  				el.children().css('background-color', 'rgba(0, 255, 0, 0.3)');
  			}

  			done = true;
  			upNext = false;
  		}

  		if (index == len - 1 && !done && nextTime <= 2359) {
  			el.children().css('background-color', 'rgba(0, 255, 0, 0.3)');
  		}

  		last = el;
	});
}

function getTime(html) {
	var time = html.slice(0, html.indexOf(':') + 3);
  	var hour = time.slice(0, html.indexOf(":"));
  	var min = time.slice(3, time.length);
  	return parseInt(hour + min);
}

function blurAll(els) {
	els.each(function() {
		$(this).children().css('background-color', 'rgba(0, 0, 0, 0.3)');
	});
}

var lastFocus;
$(function() {
	greyOutThePast();
	setInterval(greyOutThePast, 10000); //once every 10 seconds
	$('tr.clickable-row').click(function() {
		renderModal(this);
		return false;
	});

	$('tr.clickable-row').keypress(function(e) {
		if (e.which == 13 || e.which == 32) {
			renderModal(this);
			return false;
		}
	});

	$('body').on('shown.bs.modal', '.modal', function () {
		lastFocus = document.activeElement;
	  	$('[id$=modal-close]').focus();
	});

	$('body').on('hide.bs.modal', '.modal', function () {
	  	$(lastFocus).focus();
	  	lastFocus = null;
	});
});

var lastLoaded = "";
function renderModal(el) {
	var name = getCellName(el);
	if (lastLoaded == name)
		return $('#scheduleModal').modal();

	var info = payload[name];
	appendElInfoToPayload(el, info);
	clearAll();
	loadAll(info);
	$('#scheduleModal').modal();
} 

function getCellName(el) {
	var date = $(el).parent().parent()[0].id;
	var time = $(el).children().first().text();
	return date[date.length - 1] + " - " +  time;
}

function appendElInfoToPayload(elName, payload) {
	var el = $(elName);
	payload.defaultTitle = el.children().next().text();
	payload.startTime = el.children().first().text();

	end = el.next().children().first().text(); 
	payload.endTime = end ? end : "23:59";
}

function clearAll() {
	var txt = $('#body-text-target').html('');
	var map = $('#map-target').html('');
	var img = $('#modal-img-target').html('');
}

function loadAll(payload) {
	var title = $('#schd-modal-title');
	var txt = $('#body-text-target');
	var map = $('#map-target');
	var img = $('#modal-img-target');
	
	if (payload.title)
		title.html(payload.title);
	else
		title.html(payload.defaultTitle);

	if (payload.map)
		map.html(payload.map);

	if (payload.html)
		txt.html(payload.html);
	else
		txt.html("<p>" + payload.text + "</p>");

	if (payload.companysrc)
		img.html("<img src='" + PREFIX + payload.companysrc + "' class='modal-img' alt='" + payload.img_alt +"'><br><br>");
	else if (payload.doublesrc)
		img.html("<img src='" + PREFIX + "assets/team/Jamison.jpg' class='modal-img-small super-rounded' alt='Jamison Higa Headshot'>" +
			"<img src='" + PREFIX + "assets/team/Andrew.jpg' class='modal-img-small super-rounded' alt='Andrew Yang Headshot'>");
	else if (payload.speakersrc)
		img.html("<img src='" + PREFIX + payload.speakersrc + "' class='modal-img rounded' alt='" + payload.img_alt +"'>");

}	