#Yarn Simple Installer
##A Simple nodejs library to install dependencies using yarn


##Usage

###Install Yarn first
 ```
    npm install -g yarn
 ```

###Install yarn-simple-installer
```
    npm install --save yarn-simple-installer
```

###Create package.txt to hold dependencies ,the dependencies must be comma separated

```
    package.txt
    mongoose,express,angular,react,socket.io
```

###Use in code to install dependencies in runtime
```
    var simpleYarnInstaller = require('yarn-simple-installer')
```
###Install dependencies(Blocking)
```
    simpleYarnInstaller.install()
```
###Install dependencies(Promise api)
```
    simpleYarnInstaller.startInstall().then((outout)=>{
       //your code goes here (output will give console output while installing dependencies)
    }).catch((err)=>{
          //error handling code goes here
      })
```
