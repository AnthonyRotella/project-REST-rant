const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })

    }
})

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
    res.render('places/index', { places })

})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id], id })
    }
})

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})


module.exports = router


























































// const router = require('express').Router()
// const places = require('../models/places.js')

// router.get('/', (req, res) => {
//     res.render('places/index', { places })
// })

// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

// router.get('/:id', (req, res) => {
//     const { id } = req.params
//     res.render('places/show', { place: places[id] })

// })

// router.post('/', (req, res) => {
//     if (!req.body.pic) req.body.pic = 'images/IMG_20191125_184836031.jpg'
//     places.push(req.body)
//     res.redirect('/places')
//     {

//     }
//     if
// })
// // router.get('/:id', (req, res) => {
// //   res.render('place')
// // })
// router.post('/', (req, res) => {
//     if (!req.body.pic) req.body.pic = "http://placekitten.com/400/400"
//     places.push(req.body)
//     res.redirect('/places')
// })


// module.exports = router







// /