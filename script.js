
const projectData = {
    research: {
        title: "Research: Disaster Preparedness of Coastal Residents of Poblacion, Lianga Surigao del Sur",
        date: "November 26, 2023",
        subject: "Practical Research I",
        description: "This study assesses the level of disaster preparedness among coastal residents in Poblacion, Lianga, Surigao del Sur by identifying common natural and man-made hazards, evaluating residents' readiness, and determining key indicators of preparedness. Using a descriptive quantitative survey, the research aims to inform local planning and strengthen community resilience to disasters."
    },
    catalog: {
        title: "Catalog: Luxurious Wrist Watch for Men",
        date: "February 20, 2025",
        subject: "Multimedia Systems",
        description: "This catalog showcases a curated collection of men’s wristwatches across luxury, premium, casual, and smartwatch categories, highlighting their prices, specifications, and unique features from brands such as Patek Philippe, Rolex, Cartier, Vacheron Constantin, Citizen, Seiko, Casio, Fossil, Samsung, and Apple. It serves as a buyer’s guide by presenting different watch types tailored to various lifestyles and budgets."
    },
    scrapbook: {
        title: "Scrapbook: Lyans Personal Scrapbook",
        date: "December 16, 2024",
        subject: "Understanding The Self",
        description: "This scrapbook provides a comprehensive reflection on the multi-faceted identity of Lyan John O. Orcullo, a BSCS student, by exploring his physical attributes, sexual self, moral values, and religious beliefs. It further details his personal interests, digital persona, and community connections, while outlining his diverse talents, academic achievements, and future goals for personal and financial growth."
    },
    medipal: {
        title: "Business Pitch: MediPal",
        date: "November 4, 2025",
        subject: "Entrepreneurship",
        description: "MediPal is an innovative digital health platform designed to bridge the gap in Philippine healthcare by providing AI-powered diagnostics and 24/7 telemedicine consultations directly via a mobile app. By offering a 'freemium' model that includes camera-based illness detection and electronic prescriptions, the venture aims to reduce long hospital wait times and empower users in rural or underserved areas with instant, reliable medical guidance."
    },
    gurogo: {
        title: "Business Pitch: Guro-Go",
        date: "December 8, 2025",
        subject: "Entrepreneurship",
        description: "GuroGo is an innovative educational technology venture designed to address literacy and numeracy gaps among Filipino students by providing a smart, offline-capable learning app that aligns with the national curriculum. Operating on a freemium model with specialized plans for families and schools, the platform aims to democratize access to quality primary education, empowering learners in both urban and remote areas to build foundational skills regardless of internet connectivity or financial status."
    }
};

function changeProject(element, pdfSrc, projectKey) {
    if (window.event) window.event.preventDefault();

    const frame = document.querySelector('.myframe');
    if (frame) frame.src = pdfSrc;

    const data = projectData[projectKey];
    if (data) {
        document.getElementById('desc-title').innerText = data.title;
        document.getElementById('desc-date').innerText = data.date;
        document.getElementById('desc-subject').innerText = data.subject;
        document.getElementById('desc-text').innerText = data.description;
    }

    document.querySelectorAll('.probtn').forEach(btn => btn.classList.remove('active-btn'));
    element.classList.add('active-btn');
}

