var fileParser = {}
var fs = require('fs')
var q = require('q')
fileParser.getPackageList = () => {
    var defer = q.defer()
    var ws = fs.createReadStream('package.txt')
    var msg = ""
    ws.on('data',(data)=>{
        msg = msg+data.toString()
    })
    ws.on('end',()=>{
        defer.resolve(msg)
    })
    ws.on('error',(err)=>{
        defer.reject(err.toString())
    })


    return defer.promise
}
module.exports = fileParser
