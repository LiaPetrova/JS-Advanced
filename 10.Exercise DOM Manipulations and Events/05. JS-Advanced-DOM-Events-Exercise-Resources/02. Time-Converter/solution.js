function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(unit, value) {

        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios['hours'],
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }
    // Variant 1----->
    // let daysInput = document.getElementById('days');
    // let hoursInput = document.getElementById('hours');
    // let minutesInput = document.getElementById('minutes');
    // let secondsInput = document.getElementById('seconds');

    // Variant 2 ---->
    // const inputs = {
    //         days: document.getElementById('days'),
    //         hours: document.getElementById('hours'),
    //         minutes: document.getElementById('minutes'),
    //         seconds: document.getElementById('seconds')
    //     }

    //Variant 3 ----->
    const inputs = Object.keys(ratios).map(unit => document.getElementById(unit)).reduce((a, c) => Object.assign(a, {
        [c.id]: c }), {});

    // document.getElementById('daysBtn').addEventListener('click', onConvert);
    // document.getElementById('hoursBtn').addEventListener('click', onConvert);
    // document.getElementById('minutesBtn').addEventListener('click', onConvert);
    // document.getElementById('secondsBtn').addEventListener('click', onConvert);

    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName === 'INPUT' && e.target.type == "button") {
            const input = e.target.parentElement.querySelector('input[type= "text"]');
            const time = convert(input.id, Number(input.value));
            Object.keys(time).forEach(unit => { inputs[unit].value = time[unit] });
            // daysInput.value = time.days;
            // hoursInput.value = time.hours;
            // minutesInput.value = time.minutes;
            // secondsInput.value = time.seconds;
        }
    }

}