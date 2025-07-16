import { HoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function SchedulesDay() {
    //Recupera a data selecionada
    const date = selectedDate.value;

    // Renderiza as horas disponiveis
    HoursLoad({ date });
}