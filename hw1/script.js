"use strict"
const goods = [
    { 
        title: 'Shirt',
        price: 150 
    },
    { 
        title: 'Socks',
        price: 50 
    },
    {
        title: 'Jacket',
        price: 350
    },
    { 
        title: 'Shoes',
        price: 250 
    }
];

const DEFAULT_PRODUCT = {
    title: 'Default',
    price: 999
}

const renderGoodsItem = ({title, price } = DEFAULT_PRODUCT) => {
    return `<div class="goods-item"><img class="goods-img" src="img/goods.png" alt="goods" width="150" height="150"><h3 class="goods-title">${title}</h3><p class="goods-price">${price}</p></div>`;
};
  
const renderGoodsList = (list = []) => {
    return list.map(p => renderGoodsItem(p)).join('');
};

window.onload = () => {
    const $el = document.querySelector('.goods-list');
    $el.innerHTML = `${renderGoodsList(goods)}`
};
  
