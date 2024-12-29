// Função para adicionar a classe de animação quando o elemento entra na viewport
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-target'); // Selecione os elementos que deseja animar

    // Configuração do IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Adiciona a classe 'fade-in' quando entra na tela
                observer.unobserve(entry.target); // Para de observar o elemento após a animação
            }
        });
    }, { threshold: 0.1 }); // 10% do elemento deve estar visível para a animação

    // Inicia a observação nos elementos selecionados
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Chama a função ao carregar a página
window.addEventListener('load', fadeInOnScroll);
