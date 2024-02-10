function encrypt() {
    var originalText = document.getElementById("originalText").value;
    var encryptedText = originalText
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    document.getElementById("result").textContent = encryptedText;
  }
  
  function decrypt() {
    var encryptedText = document.getElementById("originalText").value;
    var originalText = encryptedText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("result").textContent = originalText;
  }
  
  function copyResult() {
    var resultText = document.getElementById("result").textContent;
    var tempInput = document.createElement("textarea");
    tempInput.value = resultText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("¡Resultado copiado al portapapeles!");
  }
  