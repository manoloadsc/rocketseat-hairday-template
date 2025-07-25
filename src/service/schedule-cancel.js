import { apiConfig } from "./api-config"

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedule/${id}`, {
            method: "DELETE"
        })
        alert("Agendamento cancelado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento!")
    }
}
