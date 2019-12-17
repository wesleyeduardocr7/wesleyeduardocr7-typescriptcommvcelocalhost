import { TransacaoController } from './controllers/TransacaoController';

const controller = new TransacaoController();
$('.form').submit(controller.adiciona.bind(controller));