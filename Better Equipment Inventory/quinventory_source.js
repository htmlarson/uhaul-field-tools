var pile_of_concerns = {};
function dream() {
    var pairings = {};
    var fireworks = {};
    document.querySelectorAll("[data-heading=Equipment]").forEach(function (equipment) {
        var equipment_raw = equipment.innerText.trim();
        var id_raw = equipment.parentElement.id.trim().slice(2);
        var number_only = equipment_raw.slice(2, -1);
        var safe_number = "eq" + String(number_only);

        if (pairings[number_only]) {
            fireworks[equipment_raw] = {
                equipment_raw: equipment_raw,
                id_raw: id_raw,
                fuzzy: number_only
            };

        } else {
            pairings[number_only] = {
                equipment_raw: equipment_raw,
                id_raw: id_raw,
                fuzzy: safe_number
            }
        }

        // console.log(pairings);

    });
    var package = {};
    package['colide'] = fireworks.length > 0 ? 1 : 0;
    package['manifest'] = pairings;
    package['fireworks'] = fireworks;
    // console.log(pairings);
    // console.log(fireworks);
    console.log(package);
    return(package);
}

function santaClaus(ios_input) {

    var ios_clean = (JSON.parse(ios_input));

    var walt = dream();

    var unwrapped = walt['manifest'];

    var x = 0;

    while (x < Object.keys(ios_clean).length) {
        setTimeout(dialOut, 50, unwrapped, ios_clean[x]);

        x++;

    };
    setTimeout(completion, 1000, pile_of_concerns);

}

function dialOut(unwrapped, toy) {
    if (unwrapped[toy]) {
        var session_eq_ephem = unwrapped[toy];


        document.querySelector("#chk" + session_eq_ephem['id_raw']).click();
        console.log(unwrapped[toy]);
    } else {
        pile_of_concerns[toy] = true;
    }
}
santaClaus('dictionary');