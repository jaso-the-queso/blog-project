import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table';

let table = new Table("Users");
let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});

router.get('/', (req, res) => {
    table.getAll()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err)
    })
});

router.get('/:id', (req, res) => {
    table.getOne(req.params.id)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err)
    })
});

router.post('/', (req, res) => {
    table.insert(req.body)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err)
    })
})

router.delete('/:id', (req, res) => {
    table.delete(req.params.id)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err)
    })
})

router.put('/:id', (req, res) => {
    table.update(req.params.id, req.body)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err)
    })
})

export default router;