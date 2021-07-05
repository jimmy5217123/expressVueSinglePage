const fs = require("fs")
const http = require("http")

const port = 3000
const ip = "127.0.0.1"

const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./${filename}`, (error, data) => {
        if (error) {
            response.statusCode = 500
            response.setHeader("Content-Type", "text/plain")
            response.end('sorry')
        } else {
            response.statusCode = statusCode
            response.setHeader("Content-Type", "text/html")
            response.end(data)
        }
    })
}
const server = http.createServer((request, response) => {
    const url = request.url
    const urlObj = new URL(url, `http://${ip}:${port}`)
    console.log(urlObj)
    if (url === "/") sendResponse("index.html", 200, response)
})


server.listen(port, ip, () => {
    console.log(`running at http://${ip}:${port}`)
})