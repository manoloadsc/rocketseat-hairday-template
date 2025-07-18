import { scheduleCancel } from "../../service/schedule-cancel.js"
import { SchedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

// Gera um evento de click para cada lista (Manhã, tarde e noite)
periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            // Obtem a li pai do icone de cancelar
            const item = event.target.closest("li")

            // Obtem o ID do agendamento
            const {id} = item.dataset

            // Confirma se o ID foi selecionado
            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")

                // Verifica se o usuário confirmou
                if(isConfirm) {
                    await scheduleCancel({id})
                    SchedulesDay()
                }
            }

        }
    })
})