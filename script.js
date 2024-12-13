function btn_richerca() {
    //ricerca di quale orario è stato selezionato dalla select orario
    let select = document.getElementById("orario");
    let orario_selezionato = select.value;
    
    //l'orario selezionato trasforma il bottone corrispodente in orange
    const buttons = document.querySelectorAll('.btn-ricerca');
    buttons.forEach(button => {
        button.classList.remove('bg-orange-300', 'hover:bg-orange-400');
        button.classList.add('bg-green-800', 'hover:bg-green-700');
    });

    //trovare il bottone corrispondente all'orario selezionato
    buttons.forEach(button => {
        if (button.textContent === orario_selezionato) {
            button.classList.remove('bg-green-800', 'hover:bg-green-700');
            button.classList.add('bg-orange-300', 'hover:bg-orange-400');
        }
    });

}
