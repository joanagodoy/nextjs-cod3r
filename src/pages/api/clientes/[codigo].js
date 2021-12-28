export default function codigo(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        codigo: codigo,
        nome: `Joana ${codigo}`,
        email: `joana${codigo}@gmail`
    })
}