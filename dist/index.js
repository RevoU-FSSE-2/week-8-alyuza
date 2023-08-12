"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data"); // import transactions dari lokasi ./data.ts
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.json());
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.get("/", (req, res) => {
    res.json({
        messages: "Assignment Week 8",
        transactions: data_1.transactions,
    });
});
// ================== Get all transactions ==========================
app.get("/transactions", (req, res) => {
    res.json({
        messages: "Success get all transactions data",
        transactions: data_1.transactions,
    });
});
// ================== Get transactions by id ========================
app.get("/transactions/:transId", (req, res) => {
    const Transaction = data_1.transactions.filter((item) => {
        return item.transId == req.params.transId;
    });
    if (Transaction.length != 0) {
        res.status(201).json({
            message: "Success get transactions by id",
            Transaction,
        });
    }
    else {
        res.json({
            message: "Transactions not found"
        });
    }
});
// ======================== Post Method ==========================
app.post('/transactions/', (req, res) => {
    const newPost = {
        transId: req.body.transId,
        name: req.body.name,
        inputType: req.body.inputType,
        amount: req.body.amount,
        description: req.body.description,
    };
    data_1.transactions.push(newPost);
    res.status(202).json({
        message: "Successfully added a new transaction",
        newPost,
    });
});
// =============== Delete transaction by Id =======================
app.delete('/transactions/:transId', (req, res) => {
    const id = parseInt(req.params.transId);
    const financialIndex = data_1.transactions.findIndex((obj) => obj.transId === id);
    if (financialIndex !== -1) {
        const deletedFinancial = data_1.transactions.splice(financialIndex, 1)[0];
        res.json({
            message: "This transaction is deleted",
            deletedFinancial,
        });
    }
    else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});
exports.default = app;
