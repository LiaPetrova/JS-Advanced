function solve() {
    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
    const table = document.querySelector('table.table tbody');

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate(e) {
        const data = JSON.parse(input.value);
        for (let item of data) {
            const row = document.createElement('tr');

            // const imgCell = document.createElement('td');
            // const img = document.createElement('img');
            // img.src = item.img;
            // imgCell.appendChild(img);

            // const nameCell = document.createElement('td');
            // const nameP = document.createElement('p');
            // nameP.textContent = item.name;
            // nameCell.appendChild(nameP);

            // const priceCell = document.createElement('td');
            // const priceP = document.createElement('p');
            // priceP.textContent = Number(item.price);
            // priceCell.appendChild(priceP);

            // const decFactorCell = document.createElement('td');
            // const decP = document.createElement('p');
            // decP.textContent = Number(item.decFactor);
            // decFactorCell.appendChild(decP);

            // const checkboxCell = document.createElement('td');
            // const check = document.createElement('input');
            // check.type = 'checkbox';
            // checkboxCell.appendChild(check);

            // row.appendChild(imgCell);
            // row.appendChild(nameCell);
            // row.appendChild(priceCell);
            // row.appendChild(decFactorCell);
            // row.appendChild(checkboxCell);
            // table.appendChild(row);

            row.appendChild(createCell('img', { src: item.img }));
            row.appendChild(createCell('p', {}, item.name));
            row.appendChild(createCell('p', {}, item.price));
            row.appendChild(createCell('p', {}, item.decFactor));
            row.appendChild(createCell('input', { type: 'checkbox' }));
            table.appendChild(row);

            function createCell(nestedTag, properties, content) {
                const cell = document.createElement('td');
                const nested = document.createElement(nestedTag);
                for (let prop in properties) {
                    nested[prop] = properties[prop];
                }
                if (content) {
                    nested.textContent = content;
                }
                cell.appendChild(nested);
                return cell;
            };
        };

    };

    function buy(e) {
        const furniture = Array
            .from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(b => b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent)
            }))
            .reduce((acc, c, i, a) => {
                acc.name.push(c.name);
                acc.total += c.price;
                acc.decFactor += c.decFactor / a.length;
                return acc;
            }, { names: [], total: 0, decFactor: 0 });


        // let totalPrice = 0;
        // let decFactor = 0;
        // let names = [];
        // for (let item of furniture) {
        //     names.push(item.name);
        //     totalPrice += item.price;
        //     decFactor += item.decFactor;
        // }
        // decFactor = decFactor / furniture.length;

        const result = `Bought furniture: ${furniture.names.join(', ')}\nTotal price: ${furniture.totalPrice.toFixed(2)}\nAverage decoration factor: ${furniture.decFactor}`;

        output.value = result;
    };

};