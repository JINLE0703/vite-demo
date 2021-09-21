const express = require('express')
const app = express()

const manifest = require('./dist/manifest.json')

app.set('view engine', 'pug')

// 正常情况下把前端资源打包后放在后端仓库 然后设置静态资源映射
app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hey',
        message: 'Hello World!',
        index: manifest['index.html'].file,
        vender: manifest['index.html'].imports.vender,
        css: manifest['index.html'].css[0]
    })
})

app.listen(4000)