// Set increment count to 0; this will help us determine when all the requests are done, since this happens async

var incrementCount = 0;

function incrementCounter() { // because this function is only called upon completion, add one at the start
    incrementCount++;
    // if the increment counter is equal to y (the count of the p/n made at the beginning)
    if (incrementCount === y) { // refresh the page
        location.reload();
        completion();
    }
}


// import from Shortcuts
var partnumberText = "Provided Input";
// split the text at the commas
var pn = partnumberText.split(",");

// setup the loop
var x = 0;
var y = pn.length;

// while the itereation is less than the total number of parts
while (x < y) {

    fetch("/secure/Cyclecount/Cyclecount/AddPartToCycleCount", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Stringify and trim the whitespace to ensure successful validation
        body: JSON.stringify(
            {part: pn[x].trim()}
        )
    }).then((response) => response).then((result) => {
        console.log("Success:", result);
        // activate incrementer
        incrementCounter();
    }).catch((error) => {
        console.log("Error:", error);
    });
    x++;
}
