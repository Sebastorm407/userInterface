const express = require('express');
const router = express.Router();
const Links = require("../../database/models/Links")

router.get('/add', (req, res) => {
    res.render('links/add');
})

router.post('/add', async(req, res) => {
    const {title, url, description} = req.body;
    const newLink = {
        titulo: title,
        url,
        descripcion: description
    };
    const li = await Links.create(newLink)
    console.log(li.id)
    res.render('links/add')
})

router.get('/', async(req, res) => {

    const links = await Links.findAll({
        attributes: ["titulo", "url", "descripcion"]
    });

    console.log(links.every(link => link instanceof Links)); // true
    console.log("All users:", JSON.stringify(links, null, 2));

    //El nombre con es que se va a pasar la lista {xxx: xxx}
    res.render('links/list', { links: links })
})

module.exports = router;