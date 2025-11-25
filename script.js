// 1. Funcionalidad Scroll Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 2. Diccionario de Traducciones (Español / Inglés)
const translations = {
    es: {
        nav_home: "Inicio", nav_about: "Sobre Mí", nav_values: "Valores", nav_gallery: "Portafolio", nav_contact: "Contacto",
        hero_title: "DEREK", hero_role: "Ingeniero de Software", hero_slogan: "Diseñando el futuro, pieza a pieza.",
        btn_cv: "Descargar CV", btn_work: "Ver Trabajos",
        about_title: "Sobre Mí",
        // Subtítulo de la sección "Sobre Mí"
        about_subtitle: "Mi trayectoria y compromiso con la excelencia en el desarrollo de software.", 
        mission_title: "Misión", mission_text: "Aplicar las mejores prácticas de ingeniería de software para construir soluciones digitales que resuelvan problemas reales, contribuyendo con precisión y funcionalidad en cada proyecto que desarrolle.",
        vision_title: "Visión", vision_text: "Convertirme en un desarrollador senior que lidere equipos y proyectos de alto impacto, diseñando y manteniendo arquitecturas de software innovadoras y eficientes a largo plazo.",
        values_title: "Mis Valores",
        // NUEVA CLAVE: Subtítulo de la sección "Valores"
        values_subtitle: "Estos principios fundamentales guían mi toma de decisiones y garantizan un desempeño ético y de alta calidad en cada interacción profesional.",
        val1_title: "Precisión", val1_text: "Garantizar que el código y el diseño cumplan estrictamente con los requisitos.",
        val2_title: "Aprendizaje Continuo", val2_text: "Mantenerse actualizado con las nuevas tecnologías y metodologías de desarrollo.",
        val3_title: "Resolución", val3_text: "Ver los desafíos técnicos como oportunidades para diseñar soluciones ingeniosas.",
        val4_title: "Respeto", val4_text: "Promuevo un ambiente de colaboración donde se valoran las ideas, el tiempo y el trabajo.",
        gallery_title: "Proyectos Destacados",
        // NUEVA CLAVE: Subtítulo de la sección "Galería"
        gallery_subtitle: "Una selección de mis trabajos más recientes y significativos, que demuestran mi capacidad para aplicar tecnologías diversas y ofrecer resultados tangibles.",
        contact_title: "Contacto",
        // NUEVA CLAVE: Subtítulo de la sección "Contacto"
        contact_subtitle: "Si desea colaborar en un proyecto o tiene alguna consulta, no dude en ponerse en contacto conmigo a través del formulario o mis redes profesionales.",
        form_name: "Nombre", form_email: "Correo Electrónico", form_msg: "Mensaje", form_btn: "Enviar Mensaje"
    },
    en: {
        nav_home: "Home", nav_about: "About Me", nav_values: "Values", nav_gallery: "Portfolio", nav_contact: "Contact",
        hero_title: "DEREK", hero_role: "Software Engineer", hero_slogan: "Designing the future, piece by piece.",
        btn_cv: "Download CV", btn_work: "View Work",
        about_title: "About Me",
        // Subtítulo de la sección "About Me"
        about_subtitle: "My professional trajectory and commitment to excellence in software development.",
        mission_title: "Mission", mission_text: "Apply best software engineering practices to build digital solutions that solve real problems, contributing with precision and functionality in every project I develop.",
        vision_title: "Vision", vision_text: "Become a senior developer leading high-impact teams and projects, designing and maintaining innovative and efficient software architectures for the long term.",
        values_title: "My Values",
        // NUEVA CLAVE: Subtítulo de la sección "Values"
        values_subtitle: "These core principles guide my decision-making and ensure ethical, high-quality performance in every professional interaction.",
        val1_title: "Precision", val1_text: "Ensuring that code and design strictly meet requirements.",
        val2_title: "Continuous Learning", val2_text: "Staying updated with new technologies and development methodologies.",
        val3_title: "Problem Solving", val3_text: "Viewing technical challenges as opportunities to design ingenious solutions.",
        val4_title: "Respect", val4_text: "Promoting a collaborative environment where ideas, time, and work are valued.",
        gallery_title: "Featured Projects",
        // NUEVA CLAVE: Subtítulo de la sección "Portfolio"
        gallery_subtitle: "A selection of my most recent and significant works, demonstrating my ability to apply diverse technologies and deliver tangible results.",
        contact_title: "Contact",
        // NUEVA CLAVE: Subtítulo de la sección "Contact"
        contact_subtitle: "If you wish to collaborate on a project or have any inquiries, feel free to contact me through the form or my professional networks.",
        form_name: "Name", form_email: "Email Address", form_msg: "Message", form_btn: "Send Message"
    }
};

// 3. Lógica de Cambio de Idioma
const langToggle = document.getElementById('language-toggle');
const translatableElements = document.querySelectorAll('[data-translate]');

langToggle.addEventListener('change', function() {
    const lang = this.checked ? 'en' : 'es';
    
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
            // Animación sutil al cambiar texto
            el.style.opacity = 0;
            setTimeout(() => el.style.opacity = 1, 300);
        }
    });
});

// 4. Animación de Scroll (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-section'); // Añade clase base en CSS si deseas
    observer.observe(section);

});
