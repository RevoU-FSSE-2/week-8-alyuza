// Interface / bisa menggunakan Type
interface Transaction {
    transId: number,
    name: string,
    inputType : string,
    amount:number,
    description:string,
};

// Input data (untuk di export ke index.ts)
export let transactions:Transaction[] = [
    {transId:1, name:"Alyuza Satrio Prayogo", inputType:"Cash In", amount:9500000, description:"Salary"},
    {transId:2, name:"Alyuza Satrio Prayogo", inputType:"Cash Out", amount:2000000, description:"Pay for housing"},
    {transId:3, name:"Alyuza Satrio Prayogo", inputType:"Cash Out", amount:1300000, description:"Buy food for 1 month"},
    {transId:4, name:"Alyuza Satrio Prayogo", inputType:"Cash Out", amount:500000, description:"Pay internet"},
]