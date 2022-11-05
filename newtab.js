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
            addSpeedDial(topSites[i], i);
        }
        topSitesTable += "</tr></table>";
        var items = document.createRange().createContextualFragment(topSitesTable);
        document.getElementById("speedDial").appendChild(items);
    });
});

function addSpeedDial(topSite, count) {
    if (topSite.title.length > 30) {
        topSite.title = topSite.title.substr(0, 27) + "...";
    }
    let domain = (new URL(topSite.url));
    domain = domain.hostname
        .replace("www.", "")
        .replace(".com", "")
        .replace(".edu", "")
        .replace(".co.uk", "")
        .replace(".gov", "")
        .replace("org", "");

    var thumbnail = topSite.url + "favicon.ico"

    topSitesTable += '<td><a href="' + topSite.url + '" id="a' + count + '" class="speedDialLink plaintext">';
    topSitesTable += '<img id="img" src="' + thumbnail + '" alt="Favicon for ' + thumbnail + '" class="speedDialImage"/>';
    topSitesTable += '<div><span>' + domain + '</span></div>'
    topSitesTable += '</a></td>'
}
