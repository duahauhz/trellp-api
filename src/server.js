// const express = require('express')
import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function(rep, res){
    res.send('<h1>hello world</h1>')
})

app.listen(port, hostname, () => {
    console.log(`hello huahauhz, i'am running serve at http://${hostname}:${port}/`)
})
