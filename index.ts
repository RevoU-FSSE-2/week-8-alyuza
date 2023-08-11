import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import movies dari lokasi ./data
import { transactions } from "./data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

// ================== Get all transactions ==========================
app.get("/transactions/alyuza", (req, res) => {
    res.json({
        messages: "Success get all transactions data",
        transactions
        // data diatas diambil dari '/data.ts' let transactions
    });
});

// ================== Get transactions by id ========================
app.get("/transactions/alyuza/:id", (req:Request, res:Response) => {
    const Transaction = transactions.filter((item: any) => {
        console.log("dalam", item);
        return item.id == req.params.id;
    });
    console.log("luar", Transaction);

    if (Transaction.length != 0) {
        res.json({
            message: "Success get transactions by id",
            Transaction,
        });
    } else {
        res.json({
            message: "Failed get transactions by id"
        });
    }
});

// ================== Post =========================================
app.post("/transactions/alyuza", (req, res) => {
    console.log(req.body);

    transactions.push(req.body);
    console.log(transactions);

    res.json({
        message: "Success adding one new transaction",
        transactions,
    })
});


// Get route with parameter
app.get("/barcelona/:panggilan", (req, res) => {
    res.send(`halo nama panggilan saya ${req.params.panggilan}`)
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
    res.send("Coba delete")
})

// Post
app.post("/", (req, res) => {
    console.log("Hello world")
    res.send("Jangan post data kosong")
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
