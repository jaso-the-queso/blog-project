import { Router } from 'express';
import blogsRouter from './Blogs';

let router = Router();

router.use('/blogs', blogsRouter);

export default router;