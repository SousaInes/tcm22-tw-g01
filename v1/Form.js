function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const form = document.getElementById('myForm');

function submitForm(event) {
    event.preventDefault();
    let stringXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";

    let xmlDoc = document.implementation.createDocument(null, "Feedback");
    let primeiroNome = xmlDoc.createElement("PrimeiroNome");
    let segundoNome = xmlDoc.createElement("SegundoNome");
    let cidade = xmlDoc.createElement("Cidade");
    let melhorias = xmlDoc.createElement("Melhorias")

    primeiroNome.textContent = document.getElementById("fname").value;
    segundoNome.textContent = document.getElementById("lname").value;
    cidade.textContect = document.getElementById("country").value;
    melhorias.textContent = document.getElementById("subject").value
    x = xmlDoc.getElementsByTagName("Feedback")[0]
    x.appendChild(primeiroNome);
    x.appendChild(segundoNome);
    x.appendChild(cidade);
    x.appendChild(melhorias)

    stringXml += new XMLSerializer().serializeToString(xmlDoc);

    const teste = stringXml;

    const blob = new Blob([teste], { type: "octet-stream" });
    const href = URL.createObjectURL(blob);

    const a = Object.assign(document.createElement("a"), {
        href,
        style: "display:none",
        download: "myData.xml",
    })

    document.body.appendChild(a);
    a.click();
}

form.addEventListener('submit', submitForm);