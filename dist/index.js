"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
// import movies dari lokasi ./data
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.json());
// ================== Get all transactions ==========================
app.get("/transactions/alyuza", (req, res) => {
    res.json({
        messages: "Success get all transactions data",
        transactions: data_1.transactions
        // data diatas diambil dari '/data.ts' let transactions
    });
});
// ================== Get transactions by id ========================
app.get("/transactions/alyuza/:id", (req, res) => {
    const Transaction = data_1.transactions.filter((item) => {
        console.log("dalam", item);
        return item.id == req.params.id;
    });
    console.log("luar", Transaction);
    if (Transaction.length != 0) {
        res.json({
            message: "Success get transactions by id",
            Transaction,
        });
    }
    else {
        res.json({
            message: "Failed get transactions by id"
        });
    }
});
// ================== Post =========================================
app.post("/transactions/alyuza", (req, res) => {
    console.log(req.body);
    data_1.transactions.push(req.body);
    console.log(data_1.transactions);
    res.json({
        message: "Success adding one new transaction",
        transactions: data_1.transactions,
    });
});
// Get route with parameter
app.get("/barcelona/:panggilan", (req, res) => {
    res.send(`halo nama panggilan saya ${req.params.panggilan}`);
});
// Put Method
app.put("/", (req, res) => {
    res.send("Nyobain put");
});
// Patch Method
app.patch("/", (req, res) => {
    res.send("Nyobain patch");
});
// Delete Method
app.delete("/", (req, res) => {
    res.send("Coba delete");
});
// Post
app.post("/", (req, res) => {
    console.log("Hello world");
    res.send("Jangan post data kosong");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
