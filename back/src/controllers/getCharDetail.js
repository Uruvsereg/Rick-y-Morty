const axios=require('axios')
const getCharDetail=(res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=>
        response.data
    )
    .then(data=>{
        const char={
            id:data.id,
            image:data.image,
            name:data.name,
            gender:data.gender,
            status:data.status,
            origin:data.origin,
            species:data.species
        }
        res.writeHead(200,{'Content-Type':'application/json'})
        .end(JSON.stringify(char))
    })
    .catch(_err=>{
        res.writeHead(500,{'Content-Type':'text/plain'})
        .end('Holi, soy un error..., PUTO...')
    })
}

module.exports=getCharDetail;