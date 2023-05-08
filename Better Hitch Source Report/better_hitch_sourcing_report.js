var table = document.querySelector("table");
var rows = table.querySelectorAll("tr");

var x = 1;
var y = rows.length;

while (x < y) {
    var cell = rows[x].querySelectorAll("td")[8];
    console.log(cell);
    var cellText = cell.innerText;
    var cellSplit = cellText.split(" ");
    var trackingNo = cellSplit[cellSplit.length - 1];

    cell.innerHTML = "<a target='_blank' href='https://www.fedex.com/fedextrack/?trknbr=" + trackingNo + "'>" + trackingNo + "</a>";

    // window.open(cell.querySelector('a').href);
    x++;
}

var x = 1;

while (x < y) {
    var cell = rows[x].querySelectorAll("td")[2];
    console.log(cell);
    var cellText = cell.innerText;

    cell.innerHTML = "<a target='_blank' href='https://uhaul.net/equipment/towing/hitch_matrix/hitch_details.aspx?part_number=" + cellText + "'>" + cellText + "</a>";

    // window.open(cell.querySelector('a').href);
    x++;
}

completion();
