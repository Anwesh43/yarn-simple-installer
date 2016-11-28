var mod = {}
var q = require('q')
var childProcess = require('child_process')
var fileParser = require('./fileParser')
mod.getPackages = ()=>{
    var defer = q.defer()
    fileParser.getPackageList().then((data)=>{
        defer.resolve(data.replace(/,/g," "))
    }).catch((err)=>{
        defer.reject(err)
    })
  return defer.promise
}
mod.startInstall = function() {
  var defer = q.defer()
  this.getPackages().then((data)=>{
      var cmd = "yarn add "+data
      childProcess.exec(cmd,(err,stdout,stderr)=>{
          if(err == null) {
              defer.resolve(stdout)
          }
          else {
              defer.reject(err.toString())
          }
      })
  }).catch((err)=>{
      cosole.log(err)
  })
  return defer.promise
}
mod.install = function() {
    this.startInstall().then(function(data){
      console.log(data)
    }).catch(function(err){
        console.log(err)
    })
}
module.exports = mod
