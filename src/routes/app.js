import routerx from 'express-promise-router';

import Articulo from './articulo.js';
import Category from './category.js';

const router = routerx();

router.use('/articulo', Articulo);
router.use('/category', Category);
export default router;