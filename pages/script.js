document.getElementById("check-status").addEventListener("click", function () {
    const orderId = document.getElementById("order-id").value.trim();
    const statusMessage = document.getElementById("status-message");

    // Simulação de busca de status (pode integrar com uma API real)
    const mockData = {
        "123": "pending",
        "456": "shipping",
        "789": "delivered",
        "000": "canceled",
    };

    const status = mockData[orderId];

    // Resetando todos os status
    document.querySelectorAll(".status-step").forEach(step => step.classList.remove("active"));
    document.querySelectorAll(".status-icon").forEach(icon => icon.classList.remove("active"));

    if (status) {
        // Atualizando o status encontrado
        document.getElementById(`${status}-icon`).classList.add("active");
        document.querySelector(`.status-step.${status}`).classList.add("active");
        statusMessage.textContent = `O status do pedido ${orderId} é: ${status.toUpperCase()}`;
        statusMessage.style.color = status === "canceled" ? "#ef4444" : "#22c55e";
    } else {
        // Pedido não encontrado
        statusMessage.textContent = "Número do pedido não encontrado.";
        statusMessage.style.color = "#ef4444";
    }
});
