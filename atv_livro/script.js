function openTab(tabName, event) {
    console.log("Tentando abrir aba: " + tabName);

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    const targetSection = document.getElementById(tabName);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log("Seção " + tabName + " ativada com sucesso!");
    } else {
        console.error("Seção " + tabName + " não encontrada!");
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}
    animation.onfinish = () => {
        bat.remove();
    };