document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Fechar menu ao clicar em qualquer item da navegação
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }

    // Processamento do formulário de contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault();

            const numero = '5542999412769'; // conferir: DDI + DDD + número
            const nome = document.getElementById('nome').value.trim();
            const empresa = document.getElementById('empresa').value.trim();
            const email = document.getElementById('email').value.trim();
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value.trim();

            const texto =
                `*Solicitação de orçamento (site)*\n\n` +
                `*Nome:* ${nome}\n` +
                `*Empresa:* ${empresa || '-'}\n` +
                `*E-mail:* ${email}\n` +
                `*Serviço:* ${servico}\n` +
                `*Mensagem:* ${mensagem || '-'}`;

            window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');
            formContato.reset();
        });
    }

    const track = document.getElementById('clientsTrack');
    if (track) {
        const originais = Array.from(track.children);

        while (track.scrollWidth < window.innerWidth) {
            originais.forEach(item => track.appendChild(item.cloneNode(true)));
        }

        Array.from(track.children).forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });
    }
});