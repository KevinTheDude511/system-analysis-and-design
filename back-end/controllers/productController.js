const productModel = require('../models/productModel')
const faker = require('faker')

const getAllProducts = async (req, res) => {
    try {
        const data = await productModel.find({})
        return res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}

const generateProducts = async (req, res) => {
    try {
        const numberOfProducts = 100
        const products = [];
        for (let i = 0; i < numberOfProducts; i++) {
            const product = new productModel
            ({
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: faker.commerce.department(),
                brand: faker.company.companyName(),
                quantity: faker.datatype.number({ min: 1, max: 100 }),
                imageUrl: faker.image.imageUrl(),
                ratings: faker.datatype.number({ min: 1, max: 5 }),
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent()
            })
            products.push(product)
        }
        await productModel.insertMany(products)
        res.status(201).json({msg: 'Data insert successfully'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts,
    generateProducts,
}