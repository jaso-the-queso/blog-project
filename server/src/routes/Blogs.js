import { Router } from "express";
import Table from "../table";

let table = new Table("Blogs");
let router = Router();

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

export default router;