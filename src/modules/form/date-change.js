import { SchedulesDay } from "../schedules/load.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

// Recarrega a lista de horarios ao mudar de data
selectedDate.onchange = () => {
  SchedulesDay();
};
