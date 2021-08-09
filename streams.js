
const fs = require('fs')

const readStream = fs.createReadStream('./blogs/biggie.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./blogs/fucky.txt')

// readStream.on('data', (chunk) =>{
//     // console.log('_____NEW CHUNK_____')
//     // console.log(chunk.toString())
//     writeStream.write('\nNew Chunko!\n')
//     writeStream.write(chunk)

// })

// piping
readStream.pipe(writeStream)