document.getElementById('contato-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    alert('Enviado com sucesso!'); // Exibe um alerta de envio bem-sucedido

    window.location.href = '../index.html'; // Redireciona para index.html após o envio
});
