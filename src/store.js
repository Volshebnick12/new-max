import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      cards: [
        {
          image: 'image/detmir.png',
          name: 'Детский Мир',
          floor: '1 этаж',
          index: '1'
        },
        {
          image: 'image/kihls.png',
          name: 'Kihls',
          floor: '2 этаж',
          index: '2'
        },
        {
          image: 'image/mixit.png',
          name: 'Mixit',
          floor: '1 этаж',
          index: '3'
        },
        {
          image: 'image/respect.png',
          name: 'Respect',
          floor: '3 этаж',
          index: '4'
        },
        {
          image: 'image/ecco.png',
          name: 'Ecco',
          floor: '3 этаж',
          index: '5'
        },
        {
          image: 'image/h&m.png',
          name: 'H&M',
          floor: '1 этаж',
          index: '6'
        },
        {
          image: 'image/lacoste.png',
          name: 'Lacoste',
          floor: '1 этаж',
          index: '7'
        },
        {
          image: 'image/adidas.png',
          name: 'adidas',
          floor: '2 этаж',
          index: '8'
        },
      ],
      magazin: [
        {
          image: 'image/detmir.png',
          name: 'Детский Мир',
          floor: '1 этаж',
          index: '1'
        },
        {
          image: 'image/kihls.png',
          name: 'Kihls',
          floor: '2 этаж',
          index: '2'
        },
        {
          image: 'image/mixit.png',
          name: 'Mixit',
          floor: '1 этаж',
          index: '3'
        },
        {
          image: 'image/respect.png',
          name: 'Respect',
          floor: '3 этаж',
          index: '4'
        },
        {
          image: 'image/ecco.png',
          name: 'Ecco',
          floor: '3 этаж',
          index: '5'
        },
        {
          image: 'image/h&m.png',
          name: 'H&M',
          floor: '1 этаж',
          index: '6'
        },
        {
          image: 'image/lacoste.png',
          name: 'Lacoste',
          floor: '1 этаж',
          index: '7'
        },
        {
          image: 'image/adidas.png',
          name: 'adidas',
          floor: '2 этаж',
          index: '8'
        },
        {
          image: 'image/detmir.png',
          name: 'Детский Мир',
          floor: '1 этаж',
          index: '9'
        },
        {
          image: 'image/kihls.png',
          name: 'Kihls',
          floor: '2 этаж',
          index: '10'
        },
        {
          image: 'image/mixit.png',
          name: 'Mixit',
          floor: '1 этаж',
          index: '11'
        },
        {
          image: 'image/respect.png',
          name: 'Respect',
          floor: '3 этаж',
          index: '12'
        },
        {
          image: 'image/ecco.png',
          name: 'Ecco',
          floor: '3 этаж',
          index: '13'
        },
        {
          image: 'image/h&m.png',
          name: 'H&M',
          floor: '1 этаж',
          index: '14'
        },
        {
          image: 'image/lacoste.png',
          name: 'Lacoste',
          floor: '1 этаж',
          index: '15'
        },
        {
          image: 'image/adidas.png',
          name: 'adidas',
          floor: '2 этаж',
          index: '16'
        },
        {
          image: 'image/detmir.png',
          name: 'Детский Мир',
          floor: '1 этаж',
          index: '17'
        },
        {
          image: 'image/kihls.png',
          name: 'Kihls',
          floor: '2 этаж',
          index: '18'
        },
        {
          image: 'image/mixit.png',
          name: 'Mixit',
          floor: '1 этаж',
          index: '19'
        },
        {
          image: 'image/respect.png',
          name: 'Respect',
          floor: '3 этаж',
          index: '20'
        },
        {
          image: 'image/ecco.png',
          name: 'Ecco',
          floor: '3 этаж',
          index: '21'
        },
        {
          image: 'image/h&m.png',
          name: 'H&M',
          floor: '1 этаж',
          index: '22'
        },
        {
          image: 'image/lacoste.png',
          name: 'Lacoste',
          floor: '1 этаж',
          index: '23'
        },
        {
          image: 'image/adidas.png',
          name: 'adidas',
          floor: '2 этаж',
          index: '24'
        },
        {
          image: 'image/detmir.png',
          name: 'Детский Мир',
          floor: '1 этаж',
          index: '25'
        },
        {
          image: 'image/kihls.png',
          name: 'Kihls',
          floor: '2 этаж',
          index: '26'
        },
        {
          image: 'image/mixit.png',
          name: 'Mixit',
          floor: '1 этаж',
          index: '27'
        },
        {
          image: 'image/respect.png',
          name: 'Respect',
          floor: '3 этаж',
          index: '28'
        },
        {
          image: 'image/ecco.png',
          name: 'Ecco',
          floor: '3 этаж',
          index: '29'
        },
        {
          image: 'image/h&m.png',
          name: 'H&M',
          floor: '1 этаж',
          index: '30'
        },
        {
          image: 'image/lacoste.png',
          name: 'Lacoste',
          floor: '1 этаж',
          index: '31'
        },
        {
          image: 'image/adidas.png',
          name: 'adidas',
          floor: '2 этаж',
          index: '32'
        },
        {
          image: 'image/detmir.png',
          name: 'Детский Мир',
          floor: '1 этаж',
          index: '33'
        },
        {
          image: 'image/kihls.png',
          name: 'Kihls',
          floor: '2 этаж',
          index: '34'
        },
        {
          image: 'image/mixit.png',
          name: 'Mixit',
          floor: '1 этаж',
          index: '35'
        },
        {
          image: 'image/respect.png',
          name: 'Respect',
          floor: '3 этаж',
          index: '36'
        },
        {
          image: 'image/ecco.png',
          name: 'Ecco',
          floor: '3 этаж',
          index: '37'
        },
        {
          image: 'image/h&m.png',
          name: 'H&M',
          floor: '1 этаж',
          index: '38'
        },
        {
          image: 'image/lacoste.png',
          name: 'Lacoste',
          floor: '1 этаж',
          index: '39'
        },
        {
          image: 'image/adidas.png',
          name: 'adidas',
          floor: '2 этаж',
          index: '40'
        },
      ],
      stocks: [
        {
          image: 'image/uniqlo.png',
          name: 'Uniclo',
          sale: '10',
          index: '1'
        },
        {
          image: 'image/massimodutti.png',
          name: 'Massimo Dutti',
          sale: '5',
          index: '2'
        },
        {
          image: 'image/moscowjewelryfactory.png',
          name: 'Moscow Jewelry Factory',
          sale: '20',
          index: '3'
        },
        {
          image: 'image/yvesrocher.png',
          name: 'Yves Rocher',
          sale: '10',
          index: '4'
        },
      ]
    }
  }
})


export default store;