var express = require('express');
var router = express.Router();
const axios = require('axios');

const BASE_API = 'https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4'

/*Caja de busqueda*/
router.get('/', function(req, res, next) {
    let query= req.query.search;
    let itemObj = {
        author:{
            'name':'Mariela',
            'lastname': 'Gimenez'
        },
        categories:[],
        items: []
    }

  return axios
    .get(`${BASE_API}`)
    .then(response => response.data.results)
    .then(resp => {
            let promiseAllCat =  resp.map(r => {
            let items_list = {    
                'id': r.id,
                'title': r.title,
                'price': {
                    'currency': r.currency_id == 'ARS' ? '$' : r.currency_id,
                    'amount': r.price,
                    'decimals': r.currency_id.decimal_places
                },
                'picture':r.thumbnail,
                'condition':r.condition,
                'free_shipping': r.shipping.free_shipping,
                'location':r.address.state_name
            }
            
            itemObj.items = items_list
           // itemObj.items.push(items_list)

            return axios
            .get(`https://api.mercadolibre.com/categories/${r.category_id}`)
            .then(category => {
                let cat = {
                    name:category.data.name,
                    total: category.data.total_items_in_this_category,
                    path: category.data.path_from_root.map(c => name = c.name ) //get cat name
                }
                return cat //miau
            });
        })
        return Promise.all(promiseAllCat) //promise.all para se aguarde hasya que mi itemObj tenga item y categorie completos
    }) 
        .then(categories => {
        categories.sort(function(a, b){ //ordeno de + a - 
            return b.total-a.total
        })
        itemObj.categories = categories[0].path
        return itemObj  //tengo el objeto con el item y la categoria
    })
    .then(data => {
        console.log(data);
        return res.json(data)  // como es un json le pido que me lo devuelva como tal          
    })
    .catch(function(e){
        console.log('Error', e)
    }) 
}); // fin del router

/*Resultado de la busqueda*/
router.get('/items' );

module.exports = router;
