// Project data
const projects = [
    { 
        id: "pharma",
        title: "Pharma", 
        tag: "Design", 
        img: "images/project-details/pharma-hero.jpg", 
        desc: "Mostly work from various pharmaceutical companies, information-heavy designs."
    },
    { 
        id: "roc",
        title: "Roc", 
        tag: "Landing Pages", 
        img: "images/project-details/roc-hero.jpg", 
        desc: "Multi-award winning business and technology services provider. Landing page design for Nimbus Software."
    },
    { 
        id: "motion",
        title: "Motion", 
        tag: "Motion Design", 
        img: "images/project-details/motion-hero.jpg", 
        desc: "Legacy... updated coming soon..."
    },
    { 
        id: "nhs",
        title: "NHS", 
        tag: "Digital & Print", 
        img: "images/project-details/nhs-hero.jpg", 
        desc: "Various digital and print projects with the NHS in Dorset. Apps, videos, print collaterals and websites."
    },
    { 
        id: "ebay",
        title: "ebay", 
        tag: "Marketing", 
        img: "images/project-details/ebay-hero.jpg", 
        desc: "Supported eBayUK internal marketing team with digital assets, emails, banners and social campaigns."
    },
    { 
        id: "small-project-dump",
        title: "Small Project Dump", 
        tag: "Various", 
        img: "images/project-details/small-project-dump.jpg", 
        desc: "World Flags poster, Peace For Humanity poster, and other conceptual work."
    },
    { 
        id: "websites",
        title: "Websites", 
        tag: "Web Design", 
        img: "images/project-details/websites-hero.jpg", 
        desc: "Muvule, Urban Warriors, Dorset Cottage Holidays. Full website design and builds."
    },
    { 
        id: "print",
        title: "Print", 
        tag: "Print Design", 
        img: "images/project-details/print-hero.jpg", 
        desc: "DLEP, BNSS floor plans, Bournemouth University self-help books and more."
    },
    { 
        id: "3t",
        title: "3T", 
        tag: "UI/UX", 
        img: "images/project-details/3t-hero.jpg", 
        desc: "Drilling simulation technology. Exhibition graphics and KREW learning platform UI/UX design."
    }
];

// Populate project grid on homepage
function loadProjects() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    
    projects.forEach((p) => {
        const projectCard = document.createElement('a');
        projectCard.href = `projects/${p.id}.html`;
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="img-wrapper">
                <img src="${p.img}" alt="${p.title}">
            </div>
            <div class="project-content">
                <h3>${p.title}</h3>
                <span class="project-tag">${p.tag}</span>
            </div>
        `;
        
        grid.appendChild(projectCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects };
}
