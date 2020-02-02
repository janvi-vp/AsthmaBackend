import express from 'express';

const app = express();

app.get("/", function(req, res) {
    res.send("Hello World");
})

const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(address);
    console.log(`Server started at http://${address}:${port}`);
})