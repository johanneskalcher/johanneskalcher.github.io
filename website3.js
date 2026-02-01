function openModal() {
    document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}


window.onclick = function (event) {
    let modal = document.getElementById("productModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('warenkorb')) || [];
    cart.push({ name: name, price: price, image: image });
    localStorage.setItem('warenkorb', JSON.stringify(cart));
    alert(name + " wurde hinzugefügt!");
}


function displayCart() {
    const list = document.getElementById('cart-items-container');
    const totalSection = document.getElementById('cart-summary');
    const totalDisplay = document.getElementById('total-price');

    if (!list) return;

    let cart = JSON.parse(localStorage.getItem('warenkorb')) || [];


    if (cart.length === 0) {
        list.innerHTML = "";
        if (totalSection) totalSection.style.display = "none";
        return;
    }


    if (totalSection) totalSection.style.display = "block";
    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #ddd; padding: 10px;">
                <img src="${item.image}" width="50">
                <p><strong>${item.name}</strong> - ${item.price.toFixed(2)}€</p>
                <button onclick="removeItem(${index})" style="background:none; border:none; color:red; cursor:pointer;">Entfernen</button>
            </div>
        `;
        list.appendChild(itemDiv);
    });

    totalDisplay.innerText = total.toFixed(2);
}


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('warenkorb')) || [];
    cart.splice(index, 1);
    localStorage.setItem('warenkorb', JSON.stringify(cart));
    displayCart();
}

document.addEventListener('DOMContentLoaded', displayCart);

function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('warenkorb')) || [];
    cart.push({ name: name, price: price, image: image });
    localStorage.setItem('warenkorb', JSON.stringify(cart));
    alert(name + " wurde hinzugefügt!");
}