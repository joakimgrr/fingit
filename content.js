var strings = {
    'pull requests': 'nyhtöpyynnöt',
    'pull request': 'nyhtöpyyntö',

    'merge conflicts': 'selkkaus yhdistymisessä'
}

function getElements() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('a, span, button'));
    return elements;
}

function replaceStrings() {
    var textNodes = getElements();

    var re = new RegExp(Object.keys(strings).join('|'), 'gi');

    [].forEach.call(textNodes, function(el) {
        if(el.innerHTML) {
            el.innerHTML = el.innerHTML.replace(re, function(match) {
                return strings[match.toLowerCase()];
            })
        }
    })
}

replaceStrings();
