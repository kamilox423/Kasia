document.getElementById("btntajny").addEventListener("click", (przenies) => {
    const odpowiedz = prompt("Podaj moje (Kamila) drugie imię:");
        if(odpowiedz && odpowiedz.trim().toLowerCase() === "krzysztof"){
            window.location.href = "Tajny/tajny.html"
        }
        else{
            console.log("Błąd!");
        }
    });