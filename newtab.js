var strTopSites = "<table id=\"topSitesTable\"><tr>";

window.addEventListener("load", function(){
    this.document.getElementById("history").addEventListener("click", () => {
        chrome.tabs.update({
            url: 'chrome://history/'
        });
    })

    this.document.getElementById("chromeSettings").addEventListener("click", () => {
        chrome.tabs.update({
            url: 'chrome://settings/'
        });
    })

    this.document.getElementById("extensions").addEventListener("click", () => {
        chrome.tabs.update({
            url: 'chrome://extensions/'
        });
    })

    chrome.topSites.get(function (topSites) {
        var maxLength = topSites.length > 8 ? 8 : topSites.length;
        for (var i = 0; i < maxLength; i++) {
            if (i == 4) { strTopSites += "</tr><tr>"; }
            addSpeedDial(topSites[i].title, topSites[i].url, i);
        }
        strTopSites += "</tr></table>";
        var items = document.createRange().createContextualFragment(strTopSites);
        document.getElementById("speedDial").appendChild(items);
    });
});

function addSpeedDial(name, link, intCount) {
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
    if (name.length > 30) {
        name = name.substr(0, 27) + "...";
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

    strTopSites += '<td><a href="' + link + '" id="a' + intCount + '" class="speedDialLink plaintext">';
    strTopSites += '<img id="img" src="' + thumbnail + '" alt="Favicon for ' + thumbnail + '" class="speedDialImage"/>';
    strTopSites += '<div><span>' + domain + '</span></div>'
    strTopSites += '</a></td>'
}
