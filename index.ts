import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Transaction, transactions } from "./data"; // import transactions dari lokasi ./data.ts

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

// ================== Get all transactions ==========================
app.get("/transactions", (req: Request, res: Response) => {
    res.json({
        messages: "Success get all transactions data",
        transactions,
    });
});

// ================== Get transactions by id ========================
app.get("/transactions/:transId", (req: Request, res: Response) => {
    const Transaction = transactions.filter((item: any) => {
        return item.transId == req.params.transId;
    });

    if (Transaction.length != 0) {
        res.status(201).json({
            message: "Success get transactions by id",
            Transaction,
        });
    } else {
        res.json({
            message: "Transactions not found"
        });
    }
});

// ======================== Post Method ==========================
app.post('/transactions/', (req: Request, res: Response) => {
    const newPost: Transaction = {
        transId: req.body.transId,
        name: req.body.name,
        inputType: req.body.inputType,
        amount: req.body.amount,
        description: req.body.description,
    };
    transactions.push(newPost);
    res.status(202).json({
        message: "Successfully added a new transaction",
        newPost,
    });
});

// =============== Delete transaction by Id =======================
app.delete('/transactions/:transId', (req: Request, res: Response) => {
    const id = parseInt(req.params.transId);
    const financialIndex = transactions.findIndex((obj) => obj.transId === id);
    if (financialIndex !== -1) {
        const deletedFinancial = transactions.splice(financialIndex, 1)[0];
        res.json({
            message: "This transaction is deleted",
            deletedFinancial,
        });
    } else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
