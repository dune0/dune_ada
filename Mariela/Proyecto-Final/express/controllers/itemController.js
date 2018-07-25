let self = {};

const restler = require("restler");

self.search = (req, res) => {

    const query = req.query.q;
    let resData = {};
    restler
        .get('https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4')
        .on("complete", data => {
            resData = {
                items: [],
                filters: data.filters
            };
            for (var i = 0; i < data.results.length; i++) {
                const obj = {
                    id: data.results[i].id,
                    title: data.results[i].title,
                    price: {
                        currency: data.results[i].currency_id,
                        amount: data.results[i].price.toString().split(".")[0],
                        decimals: data.results[i].price.toString().split(".")[1]
                    },
                    picture: data.results[i].thumbnail,
                    condition: data.results[i].condition,
                    free_shipping: data.results[i].shipping.free_shipping,
                    address: data.results[i].seller_address.city.name
                };
                obj.price.currency =
                    obj.price.currency == "ARS" ? "$" : obj.price.currency;
                resData.items.push(obj);
            }
            
        });

        return res.json(resData);
};

module.exports = self;