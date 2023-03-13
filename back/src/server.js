// const http=require('http');
// const char=require('./utils/data')

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes('rickandmorty/character')){
//         const reqid=req.url.split('/').pop()
//         const character=char.filter((cid)=>
//             cid.id===Number(reqid)
//         )
//         res
//             .writeHead(200,{'Content-Type':'application/json'})
//             .end(JSON.stringify(character[0]))
//     }
// }).listen(3001,'localhost')
const http=require('http');
const getCharById=require('./controllers/getCharById');
const getCharDetail=require('./controllers/getCharDetail');

http.createServer((req,res)=>{
     res.setHeader('Access-Control-Allow-Origin', '*');
     if(req.url.includes('onsearch')){
        const reqid=req.url.split('/').pop()
        getCharById(res,reqid)
     }
     if(req.url.includes('detail')){
        const reqid=req.url.split('/').pop()
        getCharDetail(res,reqid)
     }
}).listen(3001,'localhost')