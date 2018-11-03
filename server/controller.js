module.exports = {

    getAll: (req, res, next) => {

        const dbInstance = req.app.get('db');

        dbInstance.get_all().then(houses => res.status(200).send(houses)).catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });

    },

    // getOne: (req, res, next) => {

    //     const dbInstance = req.app.get('db');

    //     const { productID } = req.params;

    //     dbInstance.get_product(productID).then(product => res.status(200).send(product)).catch(err => {
    //         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
    //         console.log(err)
    //     });

    // },

    addHouse: (req, res, next) => {

        const dbInstance = req.app.get('db');

        const { name, address, city, state, zipcode } = req.body;

        console.log([name, address, city, state, zipcode])

        dbInstance.add_house([name, address, city, state, zipcode]).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });

    },

    deleteHouse: (req, res, next) => {

        const dbInstance = req.app.get('db');

        const { houseID } = req.params;

        dbInstance.delete_house(houseID).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });

    }

    // editProduct: (req, res, next) => {

    //     const dbInstance = req.app.get('db');

    //     const { productID } = req.params;

    //     const { product_name, price, image_url } = req.body;

    //     dbInstance.edit_product([product_name, price, image_url, productID]).then(() => res.sendStatus(200)).catch(err => {
    //         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
    //         console.log(err)
    //     });

    // }

}