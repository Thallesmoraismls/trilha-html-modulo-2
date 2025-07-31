function calcularGorjetas() {

    const valorConta = parseFloat(document.getElementById('valorConta').value);

    if (isNaN(valorConta)) {

        alert("insira um valor válido")

    } else {
        
        const qualidadeServico = parseFloat(document.getElementById('qualidadeServico').value);
        const valorGorjeta = valorConta * qualidadeServico;
        const valorTotal = valorConta + valorGorjeta;
        document.getElementById('valorGorjeta').value = valorGorjeta;
        document.getElementById('valorTotal').value = valorTotal;
    }


}