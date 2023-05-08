function jello() {
    var headings = document.querySelectorAll("h4");

    var cup = {};

    if (headings.length < 8) {
        // Come back to this later and add JSON, nice errors
        // This means that at some point, the design of this page has changed and this code might need to be revisited.
        return false;
    }

    headings.forEach((heading) => {
        var response = gummy_worms(heading.innerText, heading);
        cup[heading.innerText] = response;
    });

    return(JSON.stringify(crushed_oreos(cup)));

}

function gummy_worms(color, bag) {
    var envelope = [];
    var parentDiv = bag.parentElement;
    var unOrderedList = parentDiv.querySelector("ul");
    var allLineItems = unOrderedList ? unOrderedList.querySelectorAll("li") : [];

    if (allLineItems.length === 0) {
        return false;
    }

    allLineItems.forEach((worm) => {
        envelope.push(worm.innerText);
    });

    return envelope;

}

function crushed_oreos(stuffing) {

    var keychain = Object.keys(stuffing);

    var delta = {};

    var nol = stuffing['NOT ON LOT'];
    var nolor = stuffing['NOT ON LOT (ON RENTAL)'];

    delta['ci'] = cream(nolor, nol);
    delta['mfl'] = cream(nol, nolor);

    return delta;

}

function cream(search, against) {

    var cocoa = [];

    search.forEach((eid) => {
        if (! against.includes(eid)) {
            cocoa.push(eid);
        }
    })

    return cocoa;

}

completion(jello());
