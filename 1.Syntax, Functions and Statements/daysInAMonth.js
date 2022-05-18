function daysInAMonth(month, year) {

    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth);
}
daysInAMonth(5, 2021)