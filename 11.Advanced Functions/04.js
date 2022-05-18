    function solve(input, criteria) {
        // let data = JSON.parse(input);
        // if (criteria !== 'all') {
        //     const [property, content] = criteria.split('-');
        //     result = data.filter(function(person) {
        //         return person[property] == content;
        //     })
        // } else {
        //     result = data;
        // }
        // let counter = 0;
        // for (let singlePerson of result) {
        //     console.log(`${counter++}. ${singlePerson['first_name']} ${singlePerson['last_name']} - ${singlePerson.email}`);
        // };

        let data = JSON.parse(input);
        let [prefix, value] = criteria.split('-');
        let counter = 0;

        data.forEach(person => selectByCriteria.call(person));


        function selectByCriteria() {
            if (this[prefix] === value || criteria === 'all') {
                return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);
            }
        }

    }
    solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
        'gender-Female')
    solve(`[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
        'last_name-Johnson'
    )