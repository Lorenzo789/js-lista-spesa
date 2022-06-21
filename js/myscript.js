

const listItemStore = [
    'coffee',
    'milk',
    'bread',
    'orange',
    'apple',
    'spinach',
    'peas',
    'pasta',
    'venus rice',
    'air conditioner'
]

//inserire tot elementi li nell'html
//creare un ciclo for 
//farlo con un ciclo while

// ? CICLO WHILE ? \\

const cartItemShop = document.getElementById('list-shop');

let index = 0;

while (index < listItemStore.length) {
    
    const newItem = document.createElement('li');

    newItem.classList.add('pad-li');

    cartItemShop.append(newItem);

    newItem.innerHTML = (listItemStore[index]);
    
    index++;
}

// ? CICLO WHILE ? \\
    






// ! CICLO FOR ! \\

// for (let index = 0; index < listItemStore.length; index++) {
        
//     const newItem = document.createElement('li');

//     cartItemShop.append(newItem);

//     newItem.innerHTML = (listItemStore[index]);

// }

// ! CICLO FOR ! \\