// Interface / bisa menggunakan Type
interface Transaction {
    id: number,
    name: string,
    inputType : string,
    amount:number,
    description:string,
};

// Input data
export let transactions:Transaction[] = [
    {id:1, name:"Alyuza Satrio Prayogo", inputType:"Cash In", amount:9500000, description:"Salary"},
    {id:2, name:"Alyuza Satrio Prayogo", inputType:"Cash Out", amount:2000000, description:"Pay for housing"},
    {id:3, name:"Alyuza Satrio Prayogo", inputType:"Cash Out", amount:1300000, description:"Buy food for 1 month"},
    {id:4, name:"Alyuza Satrio Prayogo", inputType:"Cash Out", amount:500000, description:"Pay internet"},
]
