function solve() {
    let fnameEl = document.getElementById('fname');
    let lnameEl = document.getElementById('lname');
    let emailEl = document.getElementById('email');
    let birthEl = document.getElementById('birth');
    let positionEl = document.getElementById('position');
    let salaryEl = document.getElementById('salary');
    let addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', addWorker);
    let tbodyEL = document.getElementById('tbody');
    let sumSalry = document.getElementById('sum');


    function addWorker(e) {
        e.preventDefault();
        let trTbody = document.createElement('tr');
        let elArr = [fnameEl, lnameEl, emailEl, birthEl, positionEl, salaryEl];
        if (!elArr.some(x => x.value === '')) {
            trTbody.appendChild(createEl(fnameEl));
            trTbody.appendChild(createEl(lnameEl));
            trTbody.appendChild(createEl(emailEl));
            trTbody.appendChild(createEl(birthEl));
            trTbody.appendChild(createEl(positionEl));
            trTbody.appendChild(createEl(salaryEl));

            let buttonsTd = document.createElement('td');
            let firedBtn = document.createElement('button');
            firedBtn.classList.add('fired');
            firedBtn.textContent = 'Fired';
            let editBtn = document.createElement('button');
            editBtn.classList.add('edit');
            editBtn.textContent = 'Edit';
            buttonsTd.appendChild(firedBtn);
            buttonsTd.appendChild(editBtn);
            trTbody.appendChild(buttonsTd);

            tbodyEL.appendChild(trTbody);
            let budget = Number(sumSalry.textContent) + Number(salaryEl.value);
            sumSalry.textContent = budget.toFixed(2);
            [fnameEl, lnameEl, emailEl, birthEl, positionEl, salaryEl].map(x => x.value = '');
            editBtn.addEventListener('click', editInfo);
            firedBtn.addEventListener('click', fireWorker);
        }

        function editInfo(e) {
            let [tdFname, tdLname, tdEmail, tdBirth, tdPosition, tdSalary] = Array.from(e.target.parentElement.parentElement.children);
            let tdArr = [tdFname, tdLname, tdEmail, tdBirth, tdPosition, tdSalary];
            elArr.map(el => el.value = tdArr.shift().textContent);
            budget = Number(sumSalry.textContent) - Number(tdSalary.textContent);
            sumSalry.textContent = budget.toFixed(2);
            e.target.parentElement.parentElement.remove();

        }

        function createEl(el) {
            let tdEl = document.createElement('td');
            tdEl.textContent = el.value;
            return tdEl;
        }

        function fireWorker(e) {
            let tdSalary = Array.from(e.target.parentElement.parentElement.children)[5];
            budget = Number(sumSalry.textContent) - Number(tdSalary.textContent);
            sumSalry.textContent = budget.toFixed(2);
            e.target.parentElement.parentElement.remove();
        }
    }
}

solve()