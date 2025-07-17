import { HoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../service/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date");

export async function SchedulesDay() {
    //Recupera a data selecionada
    const date = selectedDate.value;

    // Busca os agendamentos pela data selecionada
    const dailySchedules = await scheduleFetchByDay({ date });

    // Exibe os agendamentos
    schedulesShow({ dailySchedules });

    // Renderiza as horas disponiveis
    HoursLoad({ date, dailySchedules });
}