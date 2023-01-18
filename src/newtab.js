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
        let topSitesTable = "<table id=\"topSitesTable\"><tr>";
        const maxLength = topSites.length > 8
            ? 8
            : topSites.length;

        for (let i = 0; i < maxLength; i++) {
            if (i == 4) {
                topSitesTable += "</tr><tr>";
            }
            topSitesTable += getSpeedDial(topSites[i]);
        }

        topSitesTable += "</tr></table/>";
        const items = document.createRange().createContextualFragment(topSitesTable);
        document.getElementById("speedDial").appendChild(items);
    });
});

function getSpeedDial(topSite) {
    const url = new URL(topSite.url)
    const domain = url.hostname
        .replace("www.", "")
        .replace(".com", "")
        .replace(".edu", "")
        .replace(".co.uk", "")
        .replace(".gov", "")
        .replace(".org", "");

    return `
        <td>
            <a href="${topSite.url}" class="speedDialLink plaintext">
                <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${url.host.replace("www.", "")}&size=64" alt="Favicon for ${domain}" class="speedDialImage"/>
                <div>
                    <span>${domain}</span>
                </div>
            </a>
        </td>`
}
