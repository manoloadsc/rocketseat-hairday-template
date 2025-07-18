import dayjs from "dayjs";

// Seleciona as sessões (Manhã, tarde e a noite)
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodEvening = document.getElementById("period-night")

export function schedulesShow({dailySchedules}) {
    try {
        // Limpa as sessões
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodEvening.innerHTML = ""

        // Renderizar os agendamentos por periodo
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            // Adiciona o id do agendamento
            item.setAttribute("data-id", schedule.id.id)

            time.textContent = dayjs(schedule.id.when).format("HH:mm")

            name.textContent = schedule.id.name

            // Cria o icone de cancelar
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            // Adiciona tempo, nome e icone de cancelar
            item.append(time, name, cancelIcon)

            // Obtem somente a hora
            const hour = dayjs(schedule.id.when).hour()

            //Renderizar o agendamento na sessão (Condicional)
            if (hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodEvening.appendChild(item)
            }
        })
        
    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos!")
    }
}