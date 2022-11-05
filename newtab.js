$(window).bind(
	"load", function() {
		renderNew();
	}
);


var strTopSites="<table id=\"topSitesTable\"><tr>";
// var strApps='<table id="appTable"><tr><td><div class="applink"><a href="https://chrome.google.com/webstore" title="Chrome Web Store"><img src="http://cf.wallpaperexplorer.com/ChromeWebstoreIcon.png"></a><div class="appname">Chrome Web Store</div></div></td>';


function renderNew(){
	// $("#search").click(function(e){
	// 	showSearch();
	// });
	$("#topSites").click(function(e){
		showSpeedDial();
	});
	// $("#apps").click(function(e){
	// 	showApps();
	// });
	
	// $("#imageSearchGo").click(function(e){
	// 	chrome.tabs.update({url: "http://www.google.com/search?q=" + $("#imageSearch").val() + "&tbm=isch"});
	// });
	// $("#pirateSearchGo").click(function(e){
	// 	chrome.tabs.update({url: "http://thepiratebay.se/search/" + $("#pirateSearch").val() + "/0/7/0"});
	// });
	// $("#pirateSearchHDTV").click(function(e){
	// 	chrome.tabs.update({url: "http://thepiratebay.se/search/=" + $("#pirateSearch").val() + "/0/7/208"});
	// });
	// $("#pirateSearchHDMovies").click(function(e){
	// 	chrome.tabs.update({url: "http://thepiratebay.se/search/=" + $("#pirateSearch").val() + "/0/7/207"});
	// });
	// $("#wikiGo").click(function(e){
	// 	chrome.tabs.update({url: "http://en.wikipedia.org/wiki/" + $("#wiki").val()});
	// });
	// $("#bingGo").click(function(e){
	// 	//this is just an easter egg.  bing doesn't work!
	// 	var d = new Date();
	// 	var n = d.getSeconds();
	// 	if(n>0 && n<10){
	// 		//barrel roll
	// 		chrome.tabs.update({url: "https://www.google.com/webhp?tab=ww&ei=E6EwU7jBLs6jqwHho4G4CA&ved=0CBoQ1S4#q=do+a+barrel+roll&safe=off"});
	// 	}else if(n>10 && n<20){
	// 		//breakout
	// 		chrome.tabs.update({url: "https://www.google.com/search?q=atari+breakout&safe=off&espv=2&source=lnms&tbm=isch&sa=X&ei=bqEwU9-rGc6gkQeXuYGIBQ&sqi=2&ved=0CAcQ_AUoAQ&biw=1468&bih=685#imgdii=_"});
	// 	}else if(n>20 && n<30){
	// 		//I'm sorry dave...
	// 		chrome.tabs.update({url: "https://www.youtube.com/watch?v=7qnd-hdmgfk"});
	// 	}else if(n>30 && n<40){
	// 		//Google Bing
	// 		chrome.tabs.update({url:"https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=bing&safe=off"});
	// 	}else if(n>40 && n<50){
	// 		//PC Load Letter
	// 		chrome.tabs.update({url:"https://www.youtube.com/watch?v=5QQdNbvSGok"});
	// 	}else if(n>50 && n<60){
	// 		//Zerg Rush
	// 		chrome.tabs.update({url:"https://www.google.com/search?q=zerg+rush&oq=zerg+rush&aqs=chrome.0.69i59j0l5.1804j0j1&sourceid=chrome&es_sm=0&ie=UTF-8"});			
	// 	}else{
	// 		//rick roll
	// 		chrome.tabs.update({url:"https://www.youtube.com/watch?v=oHg5SJYRHA0"});
	// 	}
	// });
	// $("#imdbGo").click(function(e){
	// 	chrome.tabs.update({url: "http://www.imdb.com/find?q=" + $("#imdb").val() + "&s=all"});
	// });
	
	// $("#advancedGoogleGo").click(function(e){
	// 	var str="";
	// 	if($("#query").val() != null && $("#query").val() !=""){
	// 		str+=$("#query").val() + ' ';
	// 	}
	// 	if($("#exact").val() != null && $("#exact").val() !=""){
	// 		str+='"' + $("#exact").val() + '" ';
	// 	}
	// 	if($("#exclude").val() != null && $("#exclude").val() !=""){
	// 		str+=parseString($("#exclude").val(),"-");
	// 	}
	// 	if($("#synonyms").val() != null && $("#synonyms").val() !=""){
	// 		str+=parseString($("#exclude").val(),"~");
	// 	}	
	// 	if($("#site").val() != null && $("#site").val() !=""){
	// 		str+='site:' + $("#site").val() + ' ';
	// 	}
	// 	if($("#links").val() != null && $("#links").val() !=""){
	// 		str+='link:' + $("#links").val() + ' ';
	// 	}
	// 	if($("#range").val() != null && $("#range").val() !=""){
	// 		str+=$("#range").val() + ' ';
	// 	}
	// 	if($("#related").val() != null && $("#related").val() !=""){
	// 		str+='related:' + $("#related").val() + ' ';
	// 	}
	// 	if(str.length>0){
	// 		chrome.tabs.update({url: "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=" + str});
	// 	}
	// });	

	//show or hide the advanced google search
	// $("#advancedGoogle").click(
	// 	function(e){
	// 		if(localStorage["advancedGoogle"] == "true"){
	// 			$(".googleLikeABoss").hide();
	// 			localStorage["advancedGoogle"] = "false";
	// 		}else{
	// 			$(".googleLikeABoss").show();
	// 			localStorage["advancedGoogle"] = "true";	
	// 		}
	// 	}
	// );	
	
	

	//this grabs top site info and passes info to addSpeedDial function
	chrome.topSites.get(function(topSites){
		var maxLength = topSites.length > 8 ? 8 : topSites.length;
		for(var i = 0; i < maxLength; i++){
			if(i==4){strTopSites+="</tr><tr>";}
			addSpeedDial(topSites[i].title,topSites[i].url, i);
		}
		strTopSites+="</tr></table>";
		$('#speedDial').append(strTopSites);
		
		// switchImages();
	});
	
	// //this grabs app info and passes to addApp function
	// chrome.management.getAll(function(apps){
	// 	for(var i = 0; i < apps.length; i++){
	// 		//Dont show this app
	// 		if(apps[i].name != "More Better New Tab"){
	// 			addApp(apps[i]);
	// 		}
	// 	}
	// 		strApps+="</tr></table>";
	// 		$('.apps').append(strApps);			
	// });

	// //this determines what screen will be displayed when the page loads
	// if(localStorage["currentScreen"] != null){
	// 	if(localStorage["currentScreen"] == "speedDial"){
	// 		showSpeedDial();
	// 	}
	// 	else if(localStorage["currentScreen"]=="apps"){
	// 		showApps();
	// 	}
	// 	else{
	// 		showSearch();
	// 	}
	// }else{showSpeedDial();}
	showSpeedDial();
	
	$('#history')
        .click(function(e) {
            chrome.tabs.update({
                url: 'chrome://history/'
            });
        });
		
	$('#chromeSettings').click(function(e) {
        chrome.tabs.update({
            url: 'chrome://settings/'
        });
    });
		
	$('#extensions').click(function(e) {
			// chrome.management.getAll(function(items){
			// 	var c = 0;
			// 	for (var i = 0; i < items.length; i++) {
			// 		if(items[i].id == 'acpdidanchadikgnhodippoldoibnhek' 
			// 		&& items[i].enabled == true){
			// 			c = 1;
			// 		}
			// 		if(items[i].id == 'ibjionfpnadbdabekllaogbnmpeeeimh' 
			// 		&& items[i].enabled == true){
			// 			c = 2;
			// 		}
			// 	}			
			// 	if(c == 1){
			// 		chrome.tabs.update({
			// 			url: 'chrome-extension://acpdidanchadikgnhodippoldoibnhek/ev.html'
			// 		});
			// 	}else if(c == 2){
			// 		chrome.tabs.update({
			// 			url: 'chrome-extension://ibjionfpnadbdabekllaogbnmpeeeimh/ev.html'
			// 		});
			// 	}else{
		            chrome.tabs.update({
						url: 'chrome://extensions/'
					});		
			// 	}
			// });
        }
	);
		
	$("body").show();
}


// function parseString(str, strCharacter) {
// 	//this is used by the advanced google search
// 	//PARAMETERS:
// 	//
// 	//str			the value entered in the field
// 	//strCharacter	the value to append before each word
// 	//
// 	//parseString("-", "-words to exclude") = "-words -to -exclude"
//     var words = str.split(" ");
//     var strNew = "";

//     for (var i = 0; i < words.length; i++) {
//         if(words[i].substring(0)!=strCharacter){
// 			strNew += strCharacter + words[i] + " ";
// 		}
//     }

// 	return strNew;
// }


// function showSearch(){
// 	//show the search page, hide everything else
// 	localStorage["currentScreen"] = "search";
// 	$(".search").show();
// 	$(".speedDial").hide();
// 	$(".apps").hide();
// 	if(localStorage["advancedGoogle"] == "true"){
// 		$(".googleLikeABoss").show();
// 	}else{
// 		$(".googleLikeABoss").hide();
// 		localStorage["advancedGoogle"] = "false";	
// 	}	
// }

function showSpeedDial(){
	//show the speed dial, hide everything else
	localStorage["currentScreen"] = "speedDial";
	$(".search").hide();
	$(".speedDial").show();
	$(".apps").hide();
}
// function showApps(){
// 	//show the apps, hide everything else
// 	localStorage["currentScreen"] = "apps";
// 	$(".search").hide();
// 	$(".speedDial").hide();
// 	$(".apps").show();
// }


function addSpeedDial(name, link, intCount){
	//receives top site data and creates the string to append to the page
	//the image to be used is stored in the alt property
	//it will be changed by another function later
	//PARAMETERS
	//
	//name		the name of the website ex."Facebook"
	//link		the url of the website
	//intCount	a simple count of 0 through 7
	//			this is needed for changing the image as mentioned above
	//RESULT	this function will modify the strTopSites global variable
	if(name.length > 30){
		name = name.substr(0, 27)+"...";
	}
	let domain = (new URL(link));
	domain = domain.hostname
		.replace("www.", "")
		.replace(".com", "")
		.replace(".edu", "")
		.replace(".co.uk", "")
		.replace(".gov", "")
		.replace("org", "");

	var thumbnail = link + "favicon.ico"
	//the strTopSites variable is continued from the very top of this file
	// strTopSites+='<td><div class="speedDialLink">';
	// strTopSites+='<figure><a href="'+link+'" id="a' + intCount + '">';
	// strTopSites+='<img id="img" class=speedDialLink" src="' + thumbnail + '" alt="Favicon for ' + thumbnail + '" 	width="50px"  height="50px"/>';
	// strTopSites+='</a><figcaption class="sdname">'+domain+'</figcaption></figure></div></td>';

	strTopSites+='<td><a href="' + link + '" id="a' + intCount + '" class="speedDialLink plaintext">';
	strTopSites+='<img id="img" src="' + thumbnail + '" alt="Favicon for ' + thumbnail + '" class="speedDialImage"/>';
	strTopSites+='<div><span>' + domain + '</span></div>'
	strTopSites+='</a></td>'
}


// function addApp(app){
// 	//receives an app object and modifies the strApps global variable
// 	if(app.icons && app.isApp){
// 		if(app.name.length > 23){
// 			app.shortname = app.name.substr(0, 20)+"...";
// 		}
// 		else{
// 			app.shortname = app.name;
// 		}
// 		//the strApps variable is continued from the very top of this file
// 		strApps+='<td><div class="applink"><a href="'+app.appLaunchUrl+'" title="'+app.name+'"><img src="'+app.icons[app.icons.length-1].url+'"></a><div class="appname">'+app.shortname+'</div></div></td>';
// 	}
// }

// function switchImages(){
// 	//this will grab all images and pass required information to loadImage()
//     var images = document.getElementsByTagName('img');
    
// 	for(var i = 0; i < images.length; i++) {
//         var image = images[i];
// 		loadImage(image.alt, i);
//     }
// }

// function loadImage(alt, i){
// 	//forces the image to load behind the scenes
// 	//then display loaded image on screne and remove default icon128.png
// 	//PARAMETER
// 	//alt		the source that needs to be loaded
// 	//i			the simple counter so the new image gets loaded inside the correct anchor
 
// 	var _image=new Image(50, 50);
// 	var myImage = getImagesByAlt(alt)[0];
// 	var myA=myImage.parentNode;
	
// 	_image.src=alt;
// 	$(_image).load(
// 		function(){
// 			$('#a' + i).append(_image);
// 			myImage.parentNode.removeChild(myImage);
		
// 		}
// 	);

// }
// function getImagesByAlt(alt) {
// 	//grab an image with a given alt property
// 	//this can be done more easily in jQuery
// 	//but I couldn't get it to work!
	
//     var allImages = document.getElementsByTagName("img");
//     var images = [];
//     for (var i = 0, len = allImages.length; i < len; ++i) {
//         if (allImages[i].alt == alt) {
//             images.push(allImages[i]);
//         }
//     }
//     return images;
// }