import express from 'express';
import mongoose from 'mongoose';

import { fetchPatients } from "./controllers/asthmacontroller";

const app = express();

mongoose.connect("mongodb://localhost/asthma", { useNewUrlParser: true });

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/getpatients", fetchPatients);

const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(address);
    console.log(`Server started at http://${address}:${port}`);
});