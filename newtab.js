var topSitesTable = "<table id=\"topSitesTable\"><tr>";

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
            if (i == 4) { topSitesTable += "</tr><tr>"; }
            addSpeedDial(topSites[i].title, topSites[i].url, i);
        }
        topSitesTable += "</tr></table>";
        var items = document.createRange().createContextualFragment(topSitesTable);
        document.getElementById("speedDial").appendChild(items);
    });
});

function addSpeedDial(topSiteTitle, topSiteUrl, count) {
    //receives top site data and creates the string to append to the page
    //the image to be used is stored in the alt property
    //it will be changed by another function later
    //PARAMETERS
    //
    //topSiteTitle      the topSiteTitle of the website ex."Facebook"
    //topSiteUrl        the url of the website
    //count             a simple count of 0 through 7
    //RESULT            this function will modify the topSitesTable global variable
    if (topSiteTitle.length > 30) {
        topSiteTitle = topSiteTitle.substr(0, 27) + "...";
    }
    let domain = (new URL(topSiteUrl));
    domain = domain.hostname
        .replace("www.", "")
        .replace(".com", "")
        .replace(".edu", "")
        .replace(".co.uk", "")
        .replace(".gov", "")
        .replace("org", "");

    var thumbnail = topSiteUrl + "favicon.ico"

    topSitesTable += '<td><a href="' + topSiteUrl + '" id="a' + count + '" class="speedDialLink plaintext">';
    topSitesTable += '<img id="img" src="' + thumbnail + '" alt="Favicon for ' + thumbnail + '" class="speedDialImage"/>';
    topSitesTable += '<div><span>' + domain + '</span></div>'
    topSitesTable += '</a></td>'
}
