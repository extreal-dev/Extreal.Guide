const VERSION_REGEX = /[0-9]+\.[0-9]+\.[0-9]+/g;

function goTermsOfUse() {
    let basePath = "/Extreal.Guide/";
    let path = location.pathname;

    // remove path for release page
    const releaseIndex = path.indexOf("release");
    path = releaseIndex >= 0 ? path.substring(0, releaseIndex) : path;
    
    basePath = basePath + (path.indexOf("en") >= 0 ? "en/" : "");
    basePath = basePath + (path.indexOf("next") >= 0 ? "next/" : "");
    const version = path.match(VERSION_REGEX);
    basePath = basePath + (version !== null ? `${version[0]}/` : "");
    location.href = basePath + "legal/terms-of-use";
}
