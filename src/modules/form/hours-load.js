import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { HoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")

export function HoursLoad({ date, dailySchedules }) {

    // Limpa a lista de horários
    hours.innerHTML = ""

    // Obtem as horas com a datas indisponiveis
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))
    
    const opening = openingHours.map((hour) => {
        
        // Recuperar somente a hora
        const [schedulesHour] = hour.split(":")

        // Adiciona a hora na data e verifica se está no passado
        const isHourPast = dayjs(date).add(schedulesHour, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
            hour,
            available,
        }
    })

    // Renderizar os horários
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "09:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.appendChild(li)
    })

    // Adiciona os eventos de click nos horários disponíveis
    HoursClick()

}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.appendChild(header)
}