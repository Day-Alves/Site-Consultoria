// Inicialização do AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 1rem';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.classList.add('shadow-lg');
    } else {
        navbar.style.padding = '1rem';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.classList.remove('shadow-lg');
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = () => {
    counters.forEach(counter => {
        const target = +counter.innerText;
        const count = +counter.getAttribute('data-count') || 0;
        const inc = target / speed;

        if (count < target) {
            counter.setAttribute('data-count', Math.ceil(count + inc));
            counter.innerText = Math.ceil(count + inc);
            setTimeout(animateCounter, 1);
        } else {
            counter.innerText = target;
        }
    });
};

// Iniciar animação dos contadores quando a seção estiver visível
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
            observer.unobserve(entry.target);
        }
    });
};

const counterSection = document.querySelector('.counter').parentElement.parentElement.parentElement;
if (counterSection) {
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5
    });
    observer.observe(counterSection);
}

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Validação do formulário de contato
const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação dos campos
        let isValid = true;
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const subject = form.querySelector('#subject');
        const message = form.querySelector('#message');
        
        // Validação do nome
        if (!name.value.trim()) {
            showError(name, 'Por favor, insira seu nome');
            isValid = false;
        } else if (name.value.trim().length < 3) {
            showError(name, 'O nome deve ter pelo menos 3 caracteres');
            isValid = false;
        } else {
            removeError(name);
        }
        
        // Validação do email
        if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido');
            isValid = false;
        } else {
            removeError(email);
        }

        // Validação do assunto
        if (!subject.value) {
            showError(subject, 'Por favor, selecione um assunto');
            isValid = false;
        } else {
            removeError(subject);
        }
        
        // Validação da mensagem
        if (!message.value.trim()) {
            showError(message, 'Por favor, insira sua mensagem');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'A mensagem deve ter pelo menos 10 caracteres');
            isValid = false;
        } else {
            removeError(message);
        }
        
        // Se todos os campos estiverem válidos
        if (isValid) {
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            // Desabilita o botão e mostra loading
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...';
            
            // Simulação de envio
            setTimeout(() => {
                // Aqui você pode adicionar o código para enviar o formulário
                // Por exemplo, usando fetch para enviar para um backend
                
                form.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                
                showSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                
                // Scroll suave até a mensagem de sucesso
                const alertElement = document.querySelector('.alert-success');
                if (alertElement) {
                    alertElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 1500);
        }
    });
}

// Funções auxiliares
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorDiv = formGroup.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message text-danger mt-1';
    errorDiv.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorDiv);
    }
    
    input.classList.add('is-invalid');
    
    // Adiciona animação de shake
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
}

function removeError(input) {
    const formGroup = input.closest('.form-group');
    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    input.classList.remove('is-invalid');
}

function showSuccessMessage(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const form = document.querySelector('#contact-form');
    form.insertAdjacentElement('beforebegin', alertDiv);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        alertDiv.classList.add('fade-out');
        setTimeout(() => alertDiv.remove(), 300);
    }, 5000);
}

// WhatsApp Button
const whatsappButton = document.querySelector('.whatsapp-button');
if (whatsappButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappButton.style.opacity = '1';
            whatsappButton.style.visibility = 'visible';
        } else {
            whatsappButton.style.opacity = '0';
            whatsappButton.style.visibility = 'hidden';
        }
    });
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
