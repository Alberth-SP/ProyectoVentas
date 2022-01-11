import routerx from 'express-promise-router';

import Articulo from './articulo.js';
import Category from './category.js';
import User from './user.js';
import Client from './client.js';
const router = routerx();

router.use('/articulo', Articulo);
router.use('/category', Category);
router.use('/user', User);
router.use('/client', Client);
export default router;