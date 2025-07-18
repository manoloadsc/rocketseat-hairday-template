import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({date}) {
    try {
        // Faz a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedule`)
        
        // Transforma a resposta em JSON
        const data = await response.json()

        // Filtra os agendamentos pela data selecionada
        const dailySchedules = data.filter((schedule) =>
            dayjs(date).isSame(dayjs(schedule.when), "day"))

        return dailySchedules
    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos!")
    }
}
