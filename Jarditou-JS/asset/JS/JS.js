function    verif()
{
    var filtreNom = /^[a-zA-Z]+$/;
    var nom = document.getElementById("rep1").value;
    if(!filtreNom.test(nom))
    {
        document.getElementById("errNom").innerHTML = "Utilisez uniquement des caractères alphabétiques.";
        return false;
    }
    else
        document.getElementById("errNom").innerHTML = "";


//  
    var filtrePrenom = /^[a-zA-Z]+$/;
    var prenom = document.getElementById("rep2").value;
    if(!filtrePrenom.test(prenom))
    {
        document.getElementById("errPrenom").innerHTML = "Utilisez uniquement des caractères alphabétiques.";
        return false;
    }
    else
        document.getElementById("errPrenom").innerHTML = "";
    var filtreMail = /([\w.]+@[\w.]+.{1}[\w]+)/;
    var mail = document.getElementById("rep3").value;
    if (!filtreMail.test(mail))
    {
        document.getElementById("errMail").innerHTML = "Renseignez un email contenant au moins '@' et '.' .";
        return false;
    }
    else
        document.getElementById("errMail").innerHTML = "";
    if (document.getElementById("rep4").value == "CHOIX")
    {
        document.getElementById("errSuj").innerHTML = "Choisissez le sujet de votre requête.";
        return false;
    }
    else
        document.getElementById("errSuj").innerHTML = "";

    if (document.getElementById("rep5").value == "")
    {
        document.getElementById("errQuest").innerHTML = "Vous n'avez renseigner aucun message.";
        return false;
    }
    else
        document.getElementById("errQuest").innerHTML = "";
}