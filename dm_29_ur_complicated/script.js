document.addEventListener('DOMContentLoaded', () => {
    'use strict';


    const valuta = document.getElementById('valuta'),
        inputItem = document.querySelectorAll('#item'),
        inputKonvertValuta = document.getElementById('konvert-valuta'),
        buttom = document.querySelectorAll('button'),
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

    inputItem.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^.0-9]/g, '');
        });
    });

    valuta.addEventListener('change', () => {
        document.querySelectorAll('#itemName').forEach((itemName) => {
            itemName.textContent = `Валюта ${valuta[valuta.selectedIndex].id}`;
        });

        document.getElementById('conteyners').addEventListener('click', (event) => {
            let target = event.target
            if (target.parentNode.id === 'konv1') {
                document.getElementById(target.parentNode.id).querySelector('#konvert-valuta').value = +(document.getElementById(target.parentNode.id).querySelector('#item').value / valuta.value).toFixed(2);
            }
            if (target.parentNode.id === 'konv2') {
                document.getElementById(target.parentNode.id).querySelector('#konvert-valuta').value = +(document.getElementById(target.parentNode.id).querySelector('#item').value * valuta.value).toFixed(2);
            }

        });
    });



    getData();
});