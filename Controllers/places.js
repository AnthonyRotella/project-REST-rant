const router = require('express').Router()
const places = require('../models/places.js')

let places = [{
    name: 'The Palm Tree',
    city: 'Clearwater',
    state: 'FL',
    cuisines: 'Sea Food and Burgers',
    pic: '/images/thepalmtree.jpg'
}, {
    name: 'The Yum',
    city: 'Hilton Head Island',
    state: 'SC',
    cuisines: 'Sweets',
    pic: '/images/theyum.jpg'
}]
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {

        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})


module.exports = router


