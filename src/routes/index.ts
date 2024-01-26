import {Router, Request, Response} from 'express';

const router = Router();

router.get('/',(req: Request, res: Response)=> {
    let age: number = 51;
    let showOld: boolean = false;

    if(age > 50){
        showOld = true;
    }
    
    res.render('pages/home', {
        
        name: "Matheus",
        lastname: "Chaves",
        showOld,
        products: [
            { title: "Produto X", price: 10 },
            { title: "Produto Y", price: 15},
            { title: "Produto Z", price: 20}
        ]
    });

});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre')
});

router.get('/nome', (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    })
})

router.get('/idade', (req: Request, res: Response) => {
    res.render('pages/idade');
})

router.post('/idade', (req: Request, res: Response) => {
    let idade: number = 0;
    let mostrarIdade:boolean = false;

    if(req.body.ano){
    let anoNasc: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNasc;
    mostrarIdade = true;
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
})

export default router