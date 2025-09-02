const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "service_spcgbcx";
  const templateID = "template_k1y8cde";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar";
      alert("Enviado!");
    },
    (err) => {
      btn.value = "Enviar";
      alert(JSON.stringify(err));
    }
  );
});