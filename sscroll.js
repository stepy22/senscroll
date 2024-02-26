$(document).ready(function() {
    // Izvlačenje rečenice iz URL parametra
    var sentence = new URLSearchParams(window.location.search).get('sentence');
 
    // Ako postoji rečenica u URL-u
    if (sentence) {
        // Zamjena specijalnih znakova za regex
        sentence = sentence.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
 
        // Traženje rečenice na stranici
        $("body").find("*").each(function() {
            if ($(this).children().length === 0) { // Provjera da element nema djece, tražimo tekstualni sadržaj
                var regex = new RegExp(sentence, "i"); // i za case insensitive
                if (regex.test($(this).text())) {
                    // Scroll do elementa koji sadrži rečenicu
                    $('html, body').animate({
                        scrollTop: $(this).offset().top
                    }, 1000);
                    return false; // Prekida each petlju nakon prvog poklapanja
                }
            }
        });
    }
});