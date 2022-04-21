import chalk from "chalk";
import express from "express";

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

const app = express();
app.get("/holidays", (request, response) => {
    response.send(holidays);
});

// app.get("/is-today-holiday", (request, response) => {
//     const hoje = new Date().toLocaleDateString();
//     //console.log(hoje.toLocaleDateString()); // 1/1/2022
//     const feriado = holidays.find(holiday => {
//         return holiday.date === hoje;
//     })



// })

app.listen(5000, () => {
    console.log(chalk.bold.green(`Aplicação está funcionando!`))
} );


