export function HoursClick() {
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            
            // Remove a classe de selecionado de todos os horários
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })
            
            // Adiciona a classe de selecionado ao horário selecionado
            selected.target.classList.add("hour-selected")
        })

    
    })
}
