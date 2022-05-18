function result(arr, criteria) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = Number(price),
                this.status = status
        }
    }
    for (let line of arr) {
        let [destination, price, status] = line.split('|');
        result.push(new Ticket(destination, price, status))
    }
    let sorted;
    if (criteria === 'price') {
        sorted = result.sort((a, b) => a.price - b.price);
    } else {
        sorted = result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
    return sorted;

}
result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination');
result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status');
result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'price')