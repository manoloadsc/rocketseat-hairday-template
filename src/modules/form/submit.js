import dayjs from "dayjs";

const form = document.querySelector("form");
const name = document.getElementById("name");
const SelectedDate = document.getElementById("date");


// Data atual para o input
const InputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
SelectedDate.value = InputToday;

// Define a data mínima como hoje
SelectedDate.min = InputToday;

form.onsubmit = (event) => {
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

        if (!hourSelected) {
            return alert("Por favor, selecione um horário!")
        }

        // Recuperar a hora selecionado
        const [hour] = hourSelected.textContent.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime()

        
    } catch (error) {
        alert("Não foi possível realizar o agendamento!")
        console.log(error)
    }
}