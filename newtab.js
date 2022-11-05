var topSitesTable = "<table id=\"topSitesTable\"><tr>";

window.addEventListener("load", function () {
    this.document.getElementById("history").addEventListener("click", () => {
        chrome.tabs.update({
            url: 'chrome://history/'
        });
    })

    this.document.getElementById("settings").addEventListener("click", () => {
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
            if (i == 4) {
                topSitesTable += "</tr><tr>";
            }
            addSpeedDial(topSites[i]);
        }
        topSitesTable += "</tr></table>";
        var items = document.createRange().createContextualFragment(topSitesTable);
        document.getElementById("speedDial").appendChild(items);
    });
});

function addSpeedDial(topSite) {
    let domain = new URL(topSite.url).hostname
        .replace("www.", "")
        .replace(".com", "")
        .replace(".edu", "")
        .replace(".co.uk", "")
        .replace(".gov", "")
        .replace("org", "");

    var faviconUrl = topSite.url + "favicon.ico"

    topSitesTable += `
        <td>
            <a href="${topSite.url}" class="speedDialLink plaintext">
                <img src="${faviconUrl}" alt="Favicon for ${domain}" class="speedDialImage"/>
                <div>
                    <span>${domain}</span>
                </div>
            </a>
        </td>`
}
