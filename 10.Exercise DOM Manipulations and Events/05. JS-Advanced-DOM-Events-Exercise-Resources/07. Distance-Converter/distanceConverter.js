function attachEventsListeners() {
    let distances = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function convert(unit, value) {
        const inMeters = value * distances[unit];
        return {
            km: inMeters / distances.km,
            m: inMeters,
            cm: inMeters / distances.cm,
            mm: inMeters / distances.mm,
            mi: inMeters / distances.mi,
            yrd: inMeters / distances.yrd,
            ft: inMeters / distances.ft,
            in: inMeters / distances.in
        }
    }
    document.getElementById('convert').addEventListener('click', onClick);
    const resultElement = document.getElementById('outputDistance');

    function onClick() {
        const inputSelection = document.getElementById('inputUnits').value;
        const valueInputSelection = document.getElementById('inputDistance').value;
        const outputSelection = document.getElementById('outputUnits').value;
        const valueOutput = convert(inputSelection, valueInputSelection);
        resultElement.value = valueOutput[outputSelection];

    }

}