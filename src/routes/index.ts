import {Router, Request, Response} from 'express';

import * as HomeController from '../controllers/homeController'


const router = Router();

router.get('/', HomeController.home);

router.get('/usuario/:id/excluir', HomeController.excluir)

router.post('/novousuario', HomeController.criarUsuario)

export default router