import dayjs from "dayjs";

import { scheduleNew } from "../../service/schedule-new.js";
import { SchedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");


// Data atual para o input
const InputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = InputToday;

// Define a data mínima como hoje
selectedDate.min = InputToday;

form.onsubmit = async (event) => {
    // Impede o envio do formulário
    event.preventDefault();

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim()

        if (!name) {
            return alert("Por favor, insira o nome do cliente!")
        }

        // Recuperar o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")


        // Verifica se um horário foi selecionado
        if (!hourSelected) {
            return alert("Por favor, selecione um horário!")
        }

        // Recuperar a hora selecionado
        const [hour] = hourSelected.textContent.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime()


        await scheduleNew({id, name, when})

        await SchedulesDay()

        clientName.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento!")
        console.log(error)
    }
}