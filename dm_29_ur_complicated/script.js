document.addEventListener('DOMContentLoaded', () => {
    'use strict';


    const valuta = document.getElementById('valuta'),
        inputItem = document.getElementById('item'),
        inputKonvertValuta = document.getElementById('konvert-valuta'),
        buttom = document.querySelector('button'),
        latestForeign = {};

    const getData = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=RUB')
            .then((data) => {
                if (data.status !== 200) throw new Error('нет связи');
                return data.json();
            })
            .then((data) => {
                for (let key in data.rates) {
                    let optoins = `<option id="${key}" value="${data.rates[key]}">Валюта ${key}</option>`;
                    valuta.insertAdjacentHTML('beforeend', optoins);
                    // latestForeign[key] = data.rates[key];
                }
            })
            .catch((error) => console.error(error));
    };

    inputItem.addEventListener('input', () => {
        inputItem.value = inputItem.value.replace(/[^.0-9]/g, '');
    });

    valuta.addEventListener('change', () => {
        buttom.addEventListener('click', () => {
            if (inputItem.value !== '') {
                inputKonvertValuta.value = +(inputItem.value / valuta.value).toFixed(2);
            }
        });

    });

    getData();
});