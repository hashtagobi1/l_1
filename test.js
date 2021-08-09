const fs = require('fs')


// reading
// ! ASYNC
fs.readFile('./blogs/lyvvsdy.txt', (err, data) =>{
    if(err){
        // console.log(err)
    }

    // console.log(data.toString())
})

// write
fs.writeFile('./blogs/obi.txt', 'fuck you china man', () =>{
    console.log('complete')
})

//directories

if(!fs.existsSync('./potato')){
    fs.mkdir('./potato', err =>{
        if(err){
            console.log(err)
        }
        console.log('file created')
    }) 
}else{
    fs.rmdir('./potato', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    } )
}


// deleting


if(fs.existsSync('./blogs/deleteme.txt')){
    fs.unlink('./blogs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file gone bro!!')
    })
}