const router = require('express').Router()

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
    res.send('POST /places')
})
router.get('/new', (req, res) => {
    res.render('places/new')
})
router.get('/', (req, res) => {
    res.render('places/index', { places })



})

module.exports = router
