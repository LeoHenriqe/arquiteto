function enviarParaWhatsApp() {
    var opcaoSelecionada = document.getElementById("op").value;
    var mensagem = "Ola, gostaria de saber mais sobre " + opcaoSelecionada;
    var numeroWhatsApp = "62999278558";

    // Substitua "SEU_NÚMERO_DE_TELEFONE" pelo número de telefone para o qual deseja enviar a mensagem

    var urlWhatsApp = "https://api.whatsapp.com/send/?phone=5562992725427&text&type=phone_number&app_absent=0" + numeroWhatsApp + "&text=" + encodeURIComponent(mensagem);
    window.open(urlWhatsApp);
}