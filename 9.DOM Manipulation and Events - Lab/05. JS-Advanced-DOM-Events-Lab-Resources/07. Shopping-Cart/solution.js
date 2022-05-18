function solve() {
    let buttonAddElements = document.querySelectorAll('.add-product');
    let textAreaElement = document.getElementsByTagName('textarea')[0];
    let procuctListInfo = new Set();
    let totalPrice = 0;
    //  let isCheckedout = false;
    for (let singleAddButton of buttonAddElements) {
        singleAddButton.addEventListener('click', addToTextArea);
    };
    let checkOutElement = document.querySelector('.checkout');
    checkOutElement.addEventListener('click', checkoutHandler);

    function addToTextArea(e) {
        //   if (isCheckedout) {
        //       return;
        //   }
        let product = e.target.parentNode.parentNode;
        let price = Number(product.querySelector('.product-line-price').textContent);
        totalPrice += price;
        let productName = product.querySelector('.product-title').textContent;
        textAreaElement.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
        procuctListInfo.add(productName);

    };

    function checkoutHandler() {
        //   if (isCheckedout) {
        //       return;
        //   }
        //   isCheckedout = true;
        let productsList = Array.from(procuctListInfo).join(', ');
        textAreaElement.textContent += `You bought ${productsList} for ${totalPrice.toFixed(2)}.`
        for (let singleAddButton of buttonAddElements) {
            singleAddButton.setAttribute('disabled' ,'true');
        };
        checkOutElement.disabled = true;

    }
}