

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header");
    const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.innerHTML = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#" || targetId === "") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    const sections = document.querySelectorAll("section[id]");
    const navLinkItems = document.querySelectorAll(".nav-links a");
    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinkItems.forEach(function (link) {
            link.classList.remove("active");

            const linkTarget = link.getAttribute("href");

            if (linkTarget === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

    const animatedElements = document.querySelectorAll(
        ".section-heading, .about-grid, .mission-card, .service-card, .value-item, .project-card, .client-card, .process-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }

    const footerYear = document.querySelector(".footer-bottom p");

    if (footerYear) {

        const currentYear = new Date().getFullYear();

        footerYear.innerHTML =
            footerYear.innerHTML.replace(/\d{4}/, currentYear);

       }

    // LANGUAGE SWITCHING

    const languageSelect = document.getElementById("languageSelect");

    const translations = {

        fr: {
            "GENERAL BUSINESS SOLUTIONS": "SOLUTIONS GÉNÉRALES AUX ENTREPRISES",
            "Home": "Accueil",
            "About": "À propos",
            "Services": "Services",
            "Our Work": "Nos réalisations",
            "Contact": "Contact",
            "Get In Touch": "Nous contacter",
            "Connecting Needs": "Relier les besoins",
            "with Reliable Solutions.": "à des solutions fiables.",
            "GEBUSO-SARL provides practical and reliable business solutions designed to support organizations, institutions, businesses, and partners.": "GEBUSO-SARL propose des solutions commerciales pratiques et fiables pour soutenir les organisations, les institutions, les entreprises et les partenaires.",
            "Explore Our Services": "Découvrir nos services",
            "Contact Us": "Contactez-nous",
            "YOUR NEED. OUR SOLUTION.": "VOTRE BESOIN. NOTRE SOLUTION.",
            "You Tell Us. We Find the Way.": "Vous nous expliquez. Nous trouvons la solution.",
            "Have a specific need? Tell GEBUSO what you are looking for, and we will work to identify the right solution. From products and services to business opportunities and specialized requirements, we connect your needs with the right resources.": "Vous avez un besoin spécifique ? Expliquez à GEBUSO ce que vous recherchez et nous travaillerons pour trouver la solution adaptée. Des produits et services aux opportunités commerciales et aux besoins spécialisés, nous relions vos besoins aux ressources appropriées.",
            "Tell Us What You Need →": "Dites-nous ce dont vous avez besoin →",
            "HOW IT WORKS": "COMMENT ÇA MARCHE",
            "From Your Need to the Right Solution": "De votre besoin à la bonne solution",
            "Share Your Need": "Présentez votre besoin",
            "Tell us what you are looking for and what you need.": "Dites-nous ce que vous recherchez et ce dont vous avez besoin.",
            "We Understand": "Nous comprenons",
            "We listen carefully and understand your requirements and expectations.": "Nous vous écoutons attentivement et comprenons vos exigences et vos attentes.",
            "We Find": "Nous recherchons",
            "We identify the right product, service, opportunity, or solution for your need.": "Nous identifions le produit, le service, l'opportunité ou la solution qui répond à votre besoin.",
            "We Connect": "Nous vous mettons en relation",
            "We connect you with the right resources and manage the process professionally.": "Nous vous mettons en relation avec les ressources appropriées et gérons le processus avec professionnalisme.",
            "You Get the Solution": "Vous obtenez la solution",
            "We work to ensure your need is fulfilled efficiently and reliably.": "Nous veillons à ce que votre besoin soit satisfait efficacement et de manière fiable.",
            "Whatever you need, start by telling us.": "Quel que soit votre besoin, commencez par nous en parler.",
            "GEBUSO connects your needs to the right solutions.": "GEBUSO relie vos besoins aux solutions adaptées.",
            "ABOUT US": "À PROPOS DE NOUS",
            "Business Solutions Built Around Your Needs": "Des solutions commerciales adaptées à vos besoins",
            "General Business Solutions (GEBUSO-SARL) is a diversified business company based in Burundi, providing practical business solutions to companies, institutions, organizations, schools, and other clients.": "General Business Solutions (GEBUSO-SARL) est une entreprise diversifiée basée au Burundi, qui fournit des solutions commerciales pratiques aux entreprises, institutions, organisations, écoles et autres clients.",
            "GEBUSO operates in different areas including commercial activities, procurement and supply, consultancy, investment, research and development, training, strategic partnerships, and other business-related services.": "GEBUSO intervient dans différents domaines, notamment les activités commerciales, les achats et l'approvisionnement, le conseil, l'investissement, la recherche et le développement, la formation, les partenariats stratégiques et d'autres services liés aux affaires.",
            "Discover More About Us →": "Découvrez-en plus sur nous →",
            "Our Mission": "Notre mission",
            "To provide reliable, innovative, and value-driven business solutions that meet the needs of our clients and partners while creating sustainable value and supporting growth.": "Fournir des solutions commerciales fiables, innovantes et créatrices de valeur, qui répondent aux besoins de nos clients et partenaires tout en créant une valeur durable et en favorisant la croissance.",
            "Our Vision": "Notre vision",
            "To become a trusted and recognized business solutions company known for quality, reliability, innovation, strong partnerships, and sustainable growth.": "Devenir une entreprise de solutions commerciales reconnue et digne de confiance, réputée pour sa qualité, sa fiabilité, son innovation, ses partenariats solides et sa croissance durable.",
            "WHAT WE DO": "NOS ACTIVITÉS",
            "Our Business Solutions": "Nos solutions commerciales",
            "We provide a diversified range of services designed to respond to the needs of businesses, institutions, organizations, and partners.": "Nous proposons une gamme diversifiée de services conçus pour répondre aux besoins des entreprises, institutions, organisations et partenaires.",
            "Commercial Activities": "Activités commerciales",
            "Providing products and business solutions that respond to different market and client needs.": "Fournir des produits et des solutions commerciales répondant aux différents besoins du marché et des clients.",
            "Procurement & Supply": "Achats et approvisionnement",
            "Sourcing and supplying materials, equipment, school supplies, and other products according to client requirements.": "Rechercher et fournir des matériaux, équipements, fournitures scolaires et autres produits selon les exigences des clients.",
            "Consultancy": "Conseil",
            "Providing professional guidance and practical solutions to businesses and organizations.": "Fournir des conseils professionnels et des solutions pratiques aux entreprises et aux organisations.",
            "Investment": "Investissement",
            "Exploring business and investment opportunities that create sustainable economic value.": "Explorer les opportunités commerciales et d'investissement qui créent une valeur économique durable.",
            "Research & Development": "Recherche et développement",
            "Promoting research, innovation, and the development of new business solutions.": "Promouvoir la recherche, l'innovation et le développement de nouvelles solutions commerciales.",
            "Strategic Partnerships": "Partenariats stratégiques",
            "Building strong partnerships with businesses, institutions, investors, organizations, and professionals.": "Établir des partenariats solides avec les entreprises, institutions, investisseurs, organisations et professionnels.",
            "Training & Education": "Formation et éducation",
            "Supporting training and capacity development for individuals and organizations.": "Soutenir la formation et le renforcement des capacités des individus et des organisations.",
            "Corporate Social Responsibility": "Responsabilité sociale des entreprises",
            "Supporting initiatives that contribute to community development and positive social impact.": "Soutenir les initiatives qui contribuent au développement communautaire et à un impact social positif.",
            "Learn More →": "En savoir plus →",
            "WHY GEBUSO": "POURQUOI GEBUSO",
            "A Reliable Partner for Your Business Needs": "Un partenaire fiable pour vos besoins commerciaux",
            "GEBUSO combines different areas of business expertise to provide practical and flexible solutions.": "GEBUSO combine différentes expertises commerciales pour fournir des solutions pratiques et flexibles.",
            "We focus on understanding client needs, delivering quality services and products, and building trusted relationships that create long-term value.": "Nous nous concentrons sur la compréhension des besoins des clients, la fourniture de services et de produits de qualité et la construction de relations de confiance créatrices de valeur à long terme.",
            "Integrity": "Intégrité",
            "Building relationships based on honesty, transparency, and trust.": "Établir des relations fondées sur l'honnêteté, la transparence et la confiance.",
            "Professionalism": "Professionnalisme",
            "Maintaining high standards in everything we do.": "Maintenir des normes élevées dans tout ce que nous faisons.",
            "Quality": "Qualité",
            "Delivering reliable products, services, and solutions.": "Fournir des produits, services et solutions fiables.",
            "Innovation": "Innovation",
            "Encouraging creativity, research, and new ideas.": "Encourager la créativité, la recherche et les nouvelles idées.",
            "Collaboration": "Collaboration",
            "Creating opportunities through strong partnerships.": "Créer des opportunités grâce à des partenariats solides.",
            "Customer Satisfaction": "Satisfaction client",
            "Putting our clients' needs at the center of our work.": "Placer les besoins de nos clients au centre de notre travail.",
            "OUR WORK": "NOS RÉALISATIONS",
            "Delivering Solutions That Matter": "Fournir des solutions qui comptent",
            "Our activities reflect our commitment to providing practical solutions and creating value for our clients.": "Nos activités reflètent notre engagement à fournir des solutions pratiques et à créer de la valeur pour nos clients.",
            "PROCUREMENT & SUPPLY": "ACHATS ET APPROVISIONNEMENT",
            "Medical Products Supply for CDS BUTA": "Fourniture de produits médicaux au CDS BUTA",
            "GEBUSO-SARL provided pharmaceutical and medical products to CDS BUTA through IBAZA, responding to their procurement requirements and supporting the availability of essential healthcare supplies.": "GEBUSO-SARL a fourni des produits pharmaceutiques et médicaux au CDS BUTA par l'intermédiaire d'IBAZA, répondant à ses besoins d'approvisionnement et contribuant à la disponibilité des fournitures essentielles de santé.",
            "School Supplies & Equipment": "Fournitures et équipements scolaires",
            "GEBUSO-SARL supplied educational materials and equipment to SUKUNUNU SCHOOL in Burundi, including attendance registers, maps, national flags, rulers, compasses, protractors, set squares, and other school materials.": "GEBUSO-SARL a fourni du matériel éducatif et des équipements à SUKUNUNU SCHOOL au Burundi, notamment des registres de présence, des cartes, des drapeaux nationaux, des règles, des compas, des rapporteurs, des équerres et d'autres fournitures scolaires.",
            "TRUSTED BY": "ILS NOUS FONT CONFIANCE",
            "Organizations That Trust GEBUSO": "Les organisations qui font confiance à GEBUSO",
            "We are proud to build professional relationships with organizations and institutions that trust our services.": "Nous sommes fiers de construire des relations professionnelles avec les organisations et institutions qui font confiance à nos services.",
            "LET'S WORK TOGETHER": "TRAVAILLONS ENSEMBLE",
            "Have a Business Need?": "Vous avez un besoin commercial ?",
            "Let's discuss how GEBUSO can provide the right solution for your organization or institution.": "Discutons de la manière dont GEBUSO peut apporter la solution adaptée à votre organisation ou institution.",
            "Contact GEBUSO": "Contacter GEBUSO",
            "General Business Solutions": "Solutions générales aux entreprises",
            "Creating Opportunities. Delivering Value. Growing Together.": "Créer des opportunités. Apporter de la valeur. Grandir ensemble.",
            "All Rights Reserved.": "Tous droits réservés."
        },

        rn: {
            "GENERAL BUSINESS SOLUTIONS": "IBISUBIZO VY'UBUCURUZI VY'UBWOKO BWONSE",
            "Home": "Ahabanza",
            "About": "Ibitwerekeye",
            "Services": "Ivyo dukora",
            "Our Work": "Ibikorwa vyacu",
            "Contact": "Twandikire",
            "Get In Touch": "Twandikire",
            "Connecting Needs": "Guhuza ivyo mukeneye",
            "with Reliable Solutions.": "n'inyishu zizewe.",
            "GEBUSO-SARL provides practical and reliable business solutions designed to support organizations, institutions, businesses, and partners.": "GEBUSO-SARL itanga inyishu zifatika kandi zizewe mu bijanye n'ubudandaji, kugira ngo ifashe amashirahamwe, ibigo, abadandaza n'abafatanyabikorwa.",
            "Explore Our Services": "Raba ibikorwa vyacu",
            "Contact Us": "Twandikire",
            "YOUR NEED. OUR SOLUTION.": "ICO MUKENEYE. INYISHU YACU.",
            "You Tell Us. We Find the Way.": "Mutubwire ivyo mukeneye. Twebwe turondera inyishu.",
            "Have a specific need? Tell GEBUSO what you are looking for, and we will work to identify the right solution. From products and services to business opportunities and specialized requirements, we connect your needs with the right resources.": "Hari ico mukeneye mu buryo budasanzwe? Tubwire ivyo murondera, GEBUSO izogerageza kurondera inyishu ibereye. Duhuza ivyo mukeneye n'ibikoresho, ibikorwa n'amahirwe abereye.",
            "Tell Us What You Need →": "Tubwire ivyo mukeneye →",
            "HOW IT WORKS": "UKO BIKORWA",
            "From Your Need to the Right Solution": "Kuva ku co mukeneye gushika ku nyishu ibereye",
            "Share Your Need": "Tubwire ico mukeneye",
            "Tell us what you are looking for and what you need.": "Tubwire ivyo murondera n'ivyo mukeneye.",
            "We Understand": "Turabitahura",
            "We listen carefully and understand your requirements and expectations.": "Turabatega yompi kugira ngo dutahure ivyo musaba n'ivyo mwiteze.",
            "We Find": "Turabirondera",
            "We identify the right product, service, opportunity, or solution for your need.": "Turondera igicuruzwa, igikorwa, akaryo canke inyishu ibereye ku co mukeneye.",
            "We Connect": "Turabahuza",
            "We connect you with the right resources and manage the process professionally.": "Tubahuza n'abo mukeneye kandi tugakurikirana igikorwa mu buryo bw'umwuga.",
            "You Get the Solution": "Muraronka inyishu",
            "We work to ensure your need is fulfilled efficiently and reliably.": "Dukora kugira ngo ivyo mukeneye biranguke neza kandi mu buryo bwizewe.",
            "Whatever you need, start by telling us.": "Ico cose mukeneye, tangura mukitubwira.",
            "GEBUSO connects your needs to the right solutions.": "GEBUSO ihuza ivyo mukeneye n'inyishu zibereye.",
            "ABOUT US": "IVYEREKEYE GEBUSO",
            "Business Solutions Built Around Your Needs": "Inyishu z'ubudandaji zijanye n'ivyo mukeneye",
            "General Business Solutions (GEBUSO-SARL) is a diversified business company based in Burundi, providing practical business solutions to companies, institutions, organizations, schools, and other clients.": "General Business Solutions (GEBUSO-SARL) ni ishirahamwe rikora ibikorwa bitandukanye vy'ubudandaji rikorera mu Burundi, ritanga inyishu zifatika ku masosiyete, ibigo, amashirahamwe, amashure n'abandi bakiriya.",
            "GEBUSO operates in different areas including commercial activities, procurement and supply, consultancy, investment, research and development, training, strategic partnerships, and other business-related services.": "GEBUSO ikora mu mice itandukanye harimwo ubudandaji, kugura no gutanga ibikoresho, impanuro z'umwuga, gushora imitahe, ubushakashatsi n'iterambere, inyigisho, ubufatanye n'ibindi bikorwa bijanye n'ubudandaji.",
            "Discover More About Us →": "Menya vyinshi ku bitwerekeye →",
            "Our Mission": "Intumbero yacu",
            "To provide reliable, innovative, and value-driven business solutions that meet the needs of our clients and partners while creating sustainable value and supporting growth.": "Gutanga inyishu z'ubudandaji zizewe kandi zishasha, zihura n'ivyo abakiriya n'abafatanyabikorwa bacu bakeneye, zikanazana agaciro karamba n'iterambere.",
            "Our Vision": "Icipfuzo cacu",
            "To become a trusted and recognized business solutions company known for quality, reliability, innovation, strong partnerships, and sustainable growth.": "Kuba ishirahamwe ry'ubudandaji ryizigirwa kandi rizwi kubera ibikorwa vyiza, ukwizigirwa, udushasha, ubufatanye bukomeye n'iterambere rirama.",
            "WHAT WE DO": "IVYO DUKORA",
            "Our Business Solutions": "Inyishu zacu mu vy'ubudandaji",
            "We provide a diversified range of services designed to respond to the needs of businesses, institutions, organizations, and partners.": "Dutanga ibikorwa bitandukanye bigenewe kwishura ivyo abadandaza, ibigo, amashirahamwe n'abafatanyabikorwa bakeneye.",
            "Commercial Activities": "Ibikorwa vy'ubudandaji",
            "Providing products and business solutions that respond to different market and client needs.": "Gutanga ibidandazwa n'inyishu z'ubudandaji bihuye n'ivyo isoko n'abakiriya bakeneye.",
            "Procurement & Supply": "Kugura no gutanga ibikoresho",
            "Sourcing and supplying materials, equipment, school supplies, and other products according to client requirements.": "Kurondera no gutanga ibikoresho, ibikoresho vy'amashure n'ibindi bidandazwa hisunzwe ivyo abakiriya basavye.",
            "Consultancy": "Impanuro z'umwuga",
            "Providing professional guidance and practical solutions to businesses and organizations.": "Gutanga impanuro z'umwuga n'inyishu zifatika ku badandaza no ku mashirahamwe.",
            "Investment": "Gushora imitahe",
            "Exploring business and investment opportunities that create sustainable economic value.": "Kurondera amahirwe y'ubudandaji no gushora imitahe bizana agaciro k'ubutunzi karamba.",
            "Research & Development": "Ubushakashatsi n'iterambere",
            "Promoting research, innovation, and the development of new business solutions.": "Guteza imbere ubushakashatsi, udushasha n'iterambere ry'inyishu nshasha z'ubudandaji.",
            "Strategic Partnerships": "Ubufatanye bw'iterambere",
            "Building strong partnerships with businesses, institutions, investors, organizations, and professionals.": "Kwubaka ubufatanye bukomeye n'abadandaza, ibigo, abashora imitahe, amashirahamwe n'abahinga.",
            "Training & Education": "Inyigisho n'amahugurwa",
            "Supporting training and capacity development for individuals and organizations.": "Gufasha mu mahugurwa no guteza imbere ubushobozi bw'abantu n'amashirahamwe.",
            "Corporate Social Responsibility": "Inshingano ku kibano",
            "Supporting initiatives that contribute to community development and positive social impact.": "Gushigikira ibikorwa biteza imbere ikibano kandi bizana impinduka nziza mu kibano.",
            "Learn More →": "Soma vyinshi →",
            "WHY GEBUSO": "IGITUMA MWOKWIZIGIRA GEBUSO",
            "A Reliable Partner for Your Business Needs": "Umufatanyabikorwa yizewe ku vyo mukeneye mu bucuruzi",
            "GEBUSO combines different areas of business expertise to provide practical and flexible solutions.": "GEBUSO ikoresha ubumenyi butandukanye mu vy'ubudandaji kugira ngo itange inyishu zifatika kandi zorohereza abakiriya.",
            "We focus on understanding client needs, delivering quality services and products, and building trusted relationships that create long-term value.": "Twitwararika gutahura ivyo abakiriya bakeneye, gutanga ibikorwa n'ibicuruzwa vyiza, no kwubaka imigenderanire y'ukwizigirana izana agaciro karamba.",
            "Integrity": "Ubwizigirwa",
            "Building relationships based on honesty, transparency, and trust.": "Kwubaka imigenderanire ishingiye ku kuri, ku mugaragaro no ku kwizigirana.",
            "Professionalism": "Ubuhinga bw'umwuga",
            "Maintaining high standards in everything we do.": "Kugumana urugero rwo hejuru mu bikorwa vyacu vyose.",
            "Quality": "Ubwiza",
            "Delivering reliable products, services, and solutions.": "Gutanga ibidandazwa, ibikorwa n'inyishu vyizewe.",
            "Innovation": "Udushasha",
            "Encouraging creativity, research, and new ideas.": "Gushigikira ubuhinga bushasha, ubushakashatsi n'ivyiyumviro bishasha.",
            "Collaboration": "Ubufatanye",
            "Creating opportunities through strong partnerships.": "Guteza imbere amahirwe biciye mu bufatanye bukomeye.",
            "Customer Satisfaction": "Guhimbara abakiriya",
            "Putting our clients' needs at the center of our work.": "Gushira ivyo abakiriya bakeneye imbere mu bikorwa vyacu.",
            "OUR WORK": "IBIKORWA VYACU",
            "Delivering Solutions That Matter": "Gutanga inyishu ngirakamaro",
            "Our activities reflect our commitment to providing practical solutions and creating value for our clients.": "Ibikorwa vyacu vyerekana ko twiyemeje gutanga inyishu zifatika no kuremera agaciro abakiriya bacu.",
            "PROCUREMENT & SUPPLY": "KUGURA NO GUTANGA IBIKORESHO",
            "Medical Products Supply for CDS BUTA": "Gutanga ibikoresho vy'ubuvuzi kuri CDS BUTA",
            "GEBUSO-SARL provided pharmaceutical and medical products to CDS BUTA through IBAZA, responding to their procurement requirements and supporting the availability of essential healthcare supplies.": "GEBUSO-SARL yaratanze imiti n'ibikoresho vy'ubuvuzi kuri CDS BUTA biciye kuri IBAZA, yishura ivyo bari bakeneye mu kugura ibikoresho no gufasha kuronka ibikoresho vya nkenerwa mu buvuzi.",
            "School Supplies & Equipment": "Ibikoresho vy'ishure",
            "GEBUSO-SARL supplied educational materials and equipment to SUKUNUNU SCHOOL in Burundi, including attendance registers, maps, national flags, rulers, compasses, protractors, set squares, and other school materials.": "GEBUSO-SARL yaratanze ibikoresho vy'inyigisho kuri SUKUNUNU SCHOOL mu Burundi, harimwo amakaye y'abanyeshure, amakarata, amabendera y'igihugu, imirongo yo gupima, compas n'ibindi bikoresho vy'ishure.",
            "TRUSTED BY": "ABATWIZIGIRA",
            "Organizations That Trust GEBUSO": "Amashirahamwe yizigira GEBUSO",
            "We are proud to build professional relationships with organizations and institutions that trust our services.": "Turahimbarwa no kwubaka imigenderanire y'umwuga n'amashirahamwe hamwe n'ibigo vyizigira ibikorwa vyacu.",
            "LET'S WORK TOGETHER": "DUKORANE",
            "Have a Business Need?": "Hari ico mukeneye mu vy'ubudandaji?",
            "Let's discuss how GEBUSO can provide the right solution for your organization or institution.": "Reka tuganire ingene GEBUSO yoshobora gutanga inyishu ibereye ku ishirahamwe canke ikigo canyu.",
            "Contact GEBUSO": "Twandikire GEBUSO",
            "General Business Solutions": "Inyishu rusangi mu vy'ubudandaji",
            "Creating Opportunities. Delivering Value. Growing Together.": "Guteza imbere amahirwe. Gutanga agaciro. Gukura turi kumwe.",
            "All Rights Reserved.": "Uburenganzira bwose burabitswe."
        }

    };

    if (languageSelect) {

        const textNodes = [];

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

        while (walker.nextNode()) {

            const node = walker.currentNode;

            if (
                node.parentElement &&
                node.parentElement.closest("script, style, select")
            ) {
                continue;
            }

            const originalText = node.nodeValue.replace(/\s+/g, " ").trim();

            if (originalText) {
                textNodes.push({
                    node: node,
                    original: originalText
                });
            }

        }

        function changeLanguage(language) {

            textNodes.forEach(function (item) {

                if (language === "en") {
                    item.node.nodeValue = item.original;
                } else {
                    item.node.nodeValue =
                        translations[language][item.original] || item.original;
                }

            });

            document.documentElement.lang = language;

            if (language === "fr") {
                document.title = "GEBUSO-SARL | Solutions générales aux entreprises";
            } else if (language === "rn") {
                document.title = "GEBUSO-SARL | Inyishu mu vy'ubudandaji";
            } else {
                document.title = "GEBUSO-SARL | General Business Solutions";
            }

        }

        languageSelect.addEventListener("change", function () {
            changeLanguage(this.value);
        });

               changeLanguage("en");

    }

});