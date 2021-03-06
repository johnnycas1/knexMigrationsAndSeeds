const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list().then(heroes => {
        response.json({heroes});
    }).catch(next);
});
 
router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(hero => {
        hero
            ? response.json({hero})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(hero => {
        response.status(201).json({hero});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(hero => {
        response.json({hero});
    }).catch(next);
});

module.exports = router;
