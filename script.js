document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dados dinâmicos para o Carrossel de Soluções
    const solucoesData = [
        { title: "Mapeamento Computacional via Satélite", desc: "Monitoramento em tempo real do estresse hídrico e deficiência de nitrogênio das plantas." },
        { title: "Bioinsumos Customizados", desc: "Laboratório próprio de multiplicação de microrganismos para controle biológico de pragas." },
        { title: "Eletrificação de Frotas Agrícolas", desc: "Integração de maquinários híbridos e elétricos que diminuem a pegada de carbono no campo." }
    ];

    const track = document.getElementById('carousel-track');
    const indicatorsContainer = document.getElementById('carousel-indicators');

    solucoesData.forEach((solucao, idx) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<h3>${solucao.title}</h3><p>${solucao.desc}</p>`;
        track.appendChild(slide);

        const indicator = document.createElement('div');
        indicator.className = `indicator ${idx === 0 ? 'active' : ''}`;
        indicator.dataset.index = idx;
        indicatorsContainer.appendChild(indicator);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    function updateCarousel(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach(ind => ind.classList.remove('active'));
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    document.getElementById('btn-next').addEventListener('click', () => {
        let next = (currentSlide + 1) % slides.length;
        updateCarousel(next);
    });

    document.getElementById('btn-prev').addEventListener('click', () => {
        let prev = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel(prev);
    });

    indicators.forEach(ind => {
        ind.addEventListener('click', (e) => {
            updateCarousel(parseInt(e.target.dataset.index));
        });
    });

    // 2. Dados dinâmicos para o FAQ Accordion
    const faqData = [
        { q: "A transição sustentável reduz a produtividade inicial?", a: "Não. Nossas metodologias focam no ganho de eficiência imediata através do uso inteligente de dados e bioinsumos corretivos." },
        { q: "Como as soluções se aplicam ao plantio do Paraná?", a: "Nossos sistemas levam em consideração as variações climáticas regionais do Sul e o solo de terra roxa paranaense para otimizar plantios como trigo e soja." },
        { q: "O que são as linhas de crédito verde?", a: "São financiamentos bancários com juros reduzidos voltados a produtores que comprovam práticas sustentáveis através de relatórios técnicos." }
    ];

    const accordion = document.getElementById('faq-accordion');
    faqData.forEach(item => {
        const accItem = document.createElement('div');
        accItem.className = 'accordion-item';
        accItem.innerHTML = `
            <button class="accordion-header">${item.q} <span>▼</span></button>
            <div class="accordion-content"><p>${item.a}</p></div>
        `;
        accordion.appendChild(accItem);
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
            content.style.display = isOpen ? 'none' : 'block';
        });
    });

    // 3. Acessibilidade (Contraste e Fonte)
    let fontSizeModifier = 0;
    document.getElementById('btn-font-increase').addEventListener('click', () => {
        fontSizeModifier += 2;
        document.body.style.fontSize = `${16 + fontSizeModifier}px`;
    });
    document.getElementById('btn-font-decrease').addEventListener('click', () => {
        fontSizeModifier -= 2;
        document.body.style.fontSize = `${16 + fontSizeModifier}px`;
    });

    document.getElementById('btn-contrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // 4. Form Submission
    const form = document.getElementById('lead-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
    });
});