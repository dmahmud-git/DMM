/**
 * ─────────────────────────────────────────────
 *  data.js  —  Edit this file to update the site
 *  All pages read from this one object.
 * ─────────────────────────────────────────────
 */
const SITE = {

  /* ── Identity ─────────────────────────────── */
  name: "Dewan Mahnaaz Mahmud",
  siteTitle: "Dewan Mahnaaz Mahmud",
  tagline: "Researcher|Teacher|Engineer",
  bio: "I am a Doctoral (Ph.D.) Researcher and Enseignant vacataire (Lecturer) at <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>. I received my B.Sc. degree in Electrical and Electronic Engineering (EEE) from American International University-Bangladesh (AIUB), Bangladesh, in 2021, and joint master degree from <a href='https://master-dream.ec-nantes.fr/' target='_blank'>European Master in Dynamics of Renewables-based Power Systems (DREAM)</a>; <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes (ECN)</a>, France and <a href='https://www.upc.edu' target='_blank'>Universitat Politècnica de Catalunya (UPC)</a>, Spain in 2024. Currently, I am working toward my Ph.D. degree at <a href='https://www.univ-nantes.fr/' target='_blank'>Nantes Université</a>, <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>, <a href='https://www.ls2n.fr/' target='_blank'>LS2N (UMR CNRS 6004)</a>, France. My research interests is in the feild of power systems and conrol theory.",
  location: "Nantes, France",
  institution: "École Centrale de Nantes",
  fontSize: "11.5px", // Base font size for the website. Modify this value to scale all text (e.g. "12px", "14px", "16px", "18px", etc.).

  /* Path to your profile photo, relative to the site root.
     Place the image inside the images/ folder. Leave "" for initials. */
  avatar: "images/F_Mahnaaz.png",

  /* Path to your PDF CV, relative to the site root. */
  cvLink: "files/CV_DMM.pdf",

  /* ── Navigation ───────────────────────────── */
  nav: [
    { label: "Publication", href: "pages/publications.html" },
    { label: "Experience", href: "pages/cv.html" },
    { label: "Projects", href: "pages/portfolio.html" },
    { label: "Scientific services and distinctions", href: "pages/scientific-services.html" },
    { label: "Others", href: "pages/others.html" },
  ],

  /* ── Sidebar contact links ────────────────── */
  links: [
    { icon: "images/email-mail-web-svgrepo-com.svg", label: "dewan-mahnaaz.mahmud@ec-nantes.fr", href: "mailto:dewan-mahnaaz.mahmud@ec-nantes.fr" },
    { icon: "images/icons8-google-scholar-480.png", label: "Google Scholar", href: "https://scholar.google.com/citations?user=i0qyR8QAAAAJ&hl=en" },
    { icon: "images/ORCID_iD.svg", label: "ORCID", href: "https://orcid.org/0000-0002-8316-8006" },
    { icon: "images/icons8-researchgate-96.png", label: "ResearchGate", href: "https://www.researchgate.net/profile/Dewan-Mahmud-3?ev=hdr_xprf" },
    { icon: "images/LI-In-Bug.png", label: "LinkedIn", href: "https://www.linkedin.com/in/mahnaaz4211/" },
  ],

  /* ── Research Interests ────────────────────── */
  researchInterests: `My research interests include in the area of grid-tied power converter control, power systems dynamics, automatic control, real-time simulation and experimentation. More 
specifically: 
<br>
<ul class="prose">
  <li><strong>Control & Modeling:</strong> Dynamics and control of grid-tied converters in converter-dominated modern power systems</li>
  <li><strong>Stability:</strong> Device-level and system-level stability analysis of converter-dominated modern power systems</li>
  <li><strong>Grid Services:</strong> Grid ancillary services via resource aggregation; virtual power plants, dynamic virtual power plants</li>
  <li><strong>Control theory:</strong> Application of advance control; e.g.,  passivity-based control, H₂/H∞ control, model-free, model predictive and data-driven control methods to converter-dominated modern power systems</li>
</ul>`,

  /* ── Invited Talks ────────────────────────── */
  invitedTalks: [
    "Presented at the Winter School of the <a href='https://master-dream.ec-nantes.fr/' target='_blank'><em>European Master in Dynamics of Renewables-based Power Systems (DREAM)</em></a>, organized by <a href='https://www.ec-nantes.fr' target='_blank'><em>École Centrale de Nantes</em></a> in 2025, 2026.",
    "Conducted webinar as a speaker titled <em>“AIUBians on Erasmus”</em>, organized by the <a href='https://ieeeaiubsb.com/' target='_blank'><em>IEEE AIUB Student Branch</em></a>."
  ],
  volunteering: [
    {
      role: "Treasurer",
      org: "<a href='https://ieeeaiubsb.com/' target='_blank'><em>IEEE AIUB Student Branch</em></a>",
      institution: "<a href='https://www.aiub.edu/' target='_blank'><em>American International University-Bangladesh</em></a>",
      year: "February 2020-June 2021"
    },
    {
      role: "Section Ambassador, IEEE Day 2019",
      org: "<a href='https://ieeeaiubsb.com/' target='_blank'><em>IEEE AIUB Student Branch</em></a>",
      institution: "<a href='https://www.aiub.edu/' target='_blank'><em>American International University-Bangladesh</em></a>",
      year: "July 2019-February 2020"
    },
    {
      role: "Event Designer",
      org: "<a href='https://ieeeaiubsb.com/' target='_blank'><em>IEEE AIUB Student Branch</em></a>",
      institution: "<a href='https://www.aiub.edu/' target='_blank'><em>American International University-Bangladesh</em></a>",
      year: "January 2019-February 2020"
    }
  ],

  /* ── Reviewer Activities ────────────────────── */
  reviewerJournals: [
    "Electric Power Systems Research",
    "International Journal of Electrical Power & Energy Systems",
    "Energy Sustainable Development",
    "Technology and Economics of Smart Grids and Sustainable Energy",
    "Smart Grids and Sustainable Energy",
    "Environmental Progress & Sustainable Energy",
    "Energies",
    "Processes",
  ],
  reviewerConferences: [
    "Power Systems Computation Conference (PSCC)",
    "IEEE Transportation Electrification Conference & Expo (ITEC+EATS)",
    "IEEE AFRICON",
    "Energy Conversion Congress and Exposition (ECCE)",
    "IEEE International Conference on Flexible, Printable Sensors and Systems (FLEPS)",
    "IEEE Global Humanitarian Technology Conference (GHTC)",
    "IEEE IAS International Conference on Computational Performance (ComPE)",
  ],

  /* ── News & Updates ────────────────────────── */
  news: [
    {
      date: "Jul 2026",
      text: "Presented research work at the <a href='https://ed-spi-bzh.doctorat-bretagne.fr/en/2026-second-year-phd-students-seminar-july-1st-and-2nd-vannes' target='_blank'>2026 Second-Year Ph.D. Students Seminar</a> (ED SPI) in Vannes, France",
    },
    {
      date: "Jun 2026",
      text: "New preprint available on arXiv: <a href='https://arxiv.org/abs/2606.17873' target='_blank'>Model-Free Control for Multi-Time Scale Dynamics of Grid-Connected Power Converters</a>",
    },
    {
      date: "May 2026",
      text: "Conference proceedings accepted at the <a href='https://ieee-isgt.org/2026/' target='_blank'>IEEE PES Innovative Smart Grid Technologies (ISGT 2026)</a>",
    },
    {
      date: "Mar 2026",
      text: "Conference proceedings accepted at the <a href='https://ieee-ecce.org/2026/' target='_blank'>IEEE Energy Conversion Congress and Exposition (ECCE 2026)</a> (<a href='https://arxiv.org/abs/2603.01831' target='_blank'>arXiv</a>)",
    },
    {
      date: "Nov 2025",
      text: "Presented research work at the winter school of <a href='https://master-dream.ec-nantes.fr/' target='_blank'>European Master in Dynamics of Renewables-based Power Systems (DREAM)</a> in Nantes, France",
    },
    {
      date: "Nov 2024",
      text: "Started Ph.D. in Automatic Control at <a href='https://www.ls2n.fr/' target='_blank'>LS2N</a> / <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>",
    },
    {
      date: "Sep 2024",
      text: "Graduated from the <a href='https://master-dream.ec-nantes.fr/' target='_blank'>European Master in Dynamics of Renewables-based Power Systems (DREAM)</a> (Erasmus Mundus Joint Master)",
    },
  ],

  /* ── Home page ────────────────────────────── */
  home: {
    /* How many recent items to preview on the home page */
    recentPublications: 2,
    recentPosts: 2,
  },

  /* ── Journals ─────────────────── */
  journals: [
    {
      authors: "<strong>Mahmud, D.M.</strong>, Thomas, V. and Marinescu, B.",
      year: "2026",
      title: "Model-Free Control for Multi-Time Scale Dynamics of Grid-Connected Power Converters",
      journal: "arXiv preprint arXiv:2606.17873",
      link: "https://arxiv.org/abs/2606.17873",
    },

    {
      authors: "<strong>Mahmud, D.M.</strong>, Sule, E.E., Wang, T. and Thomas, V.",
      year: "2025",
      title: "Towards clean energy: Design and integration strategy of photovoltaics for residential electrification",
      journal: "Journal of Engineering Research, 13(2), pp.1329–1343",
      link: "https://www.sciencedirect.com/science/article/pii/S2307187724000555",
    },
    {
      authors: "Zeyad, M., Ahmed, S.M., Hasan, S. and <strong>Mahmud, D.M.</strong>",
      year: "2023",
      title: "Community microgrid: an approach towards positive energy community in an urban area of Dhaka, Bangladesh",
      journal: "Clean Energy, 7(4), pp.926–939",
      link: "https://academic.oup.com/ce/article/7/4/926/7152419",
    },
    {
      authors: "Hasan, S., Zeyad, M., Ahmed, S.M., <strong>Mahmud, D.M.</strong>, Anubhove, M.S.T. and Hossain, E.",
      year: "2023",
      title: "Techno-economic feasibility analysis of an electric vehicle charging station for an International Airport in Chattogram, Bangladesh",
      journal: "Energy Conversion and Management, 293, p.117501",
      link: "https://www.sciencedirect.com/science/article/pii/S0196890423008476",
    },
    {
      authors: "<strong>Mahmud, D.M.</strong>, Ahmed, S.M., Hasan, S. and Zeyad, M.",
      year: "2022",
      title: "Grid-connected microgrid: design and feasibility analysis for a local community in Bangladesh",
      journal: "Clean Energy, 6(3), pp.447–459",
      link: "https://academic.oup.com/ce/article/6/3/447/6606004",
    },
  ],

  /* ── Conferences ──────────────────────────── */
  conferences: [
    {
      authors: "<strong>Mahmud, D.M.</strong>, Thomas, V., Marinescu, B. and Hilairet, M.",
      year: "2026",
      title: "Critical Clearing Time Enhancement of Droop-Controlled Grid-Forming Inverters with Adaptive Function-Based Parameters",
      journal: "arXiv preprint arXiv:2603.01831",
      link: "https://arxiv.org/abs/2603.01831",
    },
    {
      authors: "Hasan, M.I., Zeyad, M., Ahmed, S.M., Anubhove, M.S.T., Hossain, E., Hasan, S. and <strong>Mahmud, D.M.</strong>",
      year: "2023",
      title: "Scheme and construction of a smart vacuum cleaner robot",
      journal: "In 2023 Third International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT) (pp. 1–6). IEEE",
      link: "https://ieeexplore.ieee.org/document/10118212",
    },
    {
      authors: "Moon, M.H.M., <strong>Mahmud, D.M.</strong>, Ahamed, I., Kabir, S.B. and Mannan, M.A.",
      year: "2021",
      title: "Static and dynamic charging system for a four-wheeler electric vehicle by inductive coupling wireless power transmission system",
      journal: "In 2021 International Conference on Green Energy, Computing and Sustainable Technology (GECOST) (pp. 1–6). IEEE",
      link: "https://ieeexplore.ieee.org/document/9538752",
    },
    {
      authors: "<strong>Mahmud, D.M.</strong>, Hasan, S., Ahmed, S.M. and Zeyad, M.",
      year: "2021",
      title: "Techno economic feasibility analysis of grid-connected microgrid by using solar PV for residential usage",
      journal: "In 2021 IEEE 9th Region 10 Humanitarian Technology Conference (R10-HTC) (pp. 1–6). IEEE",
      link: "https://ieeexplore.ieee.org/document/9641732",
    },
    {
      authors: "Hasan, S., <strong>Mahmud, D.M.</strong>, Islam, S., Hossain, E., Ahmed, S.M., Zeyad, M. and Anubhove, M.S.T.",
      year: "2021",
      title: "Centralized microgrid: agricultural load in rural areas of Bangladesh",
      journal: "In 2021 International Conference on Computational Performance Evaluation (ComPE) (pp. 939–943). IEEE",
      link: "https://ieeexplore.ieee.org/document/9752129",
    },
    {
      authors: "Mitra, P., Ahmed, S.M., <strong>Mahmud, D.M.</strong> and Zeyad, M.",
      year: "2022",
      title: "An Overview of the Progress of CO2 Capture Technologies",
      journal: "In 2022 11th International Conference on Power Science and Engineering (ICPSE) (pp. 142–147). IEEE",
      link: "https://ieeexplore.ieee.org/document/9935495",
    },
    {
      authors: "<strong>Mahmud, D.M.</strong>, Tasnim, F., Mahbub, F., Saif, M.Z.U. and Khan, S.H.",
      year: "2021",
      title: "A review on solar and biomass energy for overcoming the energy scarcity of bangladesh and its prospects",
      journal: "In 2021 International Conference on Electrical, Communication, and Computer Engineering (ICECCE) (pp. 1–6). IEEE",
      link: "https://ieeexplore.ieee.org/document/9514072",
    },
    {
      authors: "Anubhove, M.S.T., Hasan, S., <strong>Mahmud, D.M.</strong>, Hossain, E., Zeyad, M., Ahmed, S.M. and Islam, S.",
      year: "2021",
      title: "Solar energy home systems for rural areas communities in bangladesh",
      journal: "In 2021 International Conference on Computational Performance Evaluation (ComPE) (pp. 996–1001). IEEE",
      link: "https://ieeexplore.ieee.org/document/9752457",
    },
    {
      authors: "Zeyad, M., Ahmed, S.M., Hossain, E., Anubhove, M.S.T., Hasan, S., <strong>Mahmud, D.M.</strong> and Islam, S.",
      year: "2021",
      title: "Optimization of a solar PV power plant with poultry demand side management (PoDSM) for poultry farm",
      journal: "In 2021 International Conference on Computational Performance Evaluation (ComPE) (pp. 73–78). IEEE",
      link: "https://ieeexplore.ieee.org/document/9751839",
    },
    {
      authors: "Saif, M.Z.U., <strong>Mahmud, D.M.</strong>, Tasnim, F., Hanif, M.A., Ahmed, M.R. and Hossain, C.A.",
      year: "2021",
      title: "Current and Temperature Analysis of Thermoelectric Generator for Regenerative Breaking of the Hybrid Electric Vehicle",
      journal: "In 2021 IEEE 6th International Conference on Computing, Communication and Automation (ICCCA) (pp. 504–508). IEEE",
      link: "https://ieeexplore.ieee.org/document/9666431",
    },
    {
      authors: "<strong>Mahmud, D.M.</strong>, Tasnim, F., Mahbub, F., Saif, M.Z.U. and Khan, S.H.",
      year: "2021",
      title: "Tentative prospects and overview of general awareness towards sustainable energy in Bangladesh",
      journal: "In 2021 International Conference on Science & Contemporary Technologies (ICSCT) (pp. 1–6). IEEE",
      link: "https://ieeexplore.ieee.org/document/9642609",
    },
  ],

  /* ── Publications (Getter to merge journals & conferences) ── */
  get publications() {
    return [...this.journals, ...this.conferences];
  },

  /* ── Talks ────────────────────────────────── */
  talks: [
    {
      title: "Winter School Presentation",
      event: "European Master in Dynamics of Renewables-based Power Systems (DREAM)",
      place: "École Centrale de Nantes",
      date: "2023-01-15",
      desc: "Presented at the Winter School organized by École Centrale de Nantes.",
      image: "",
      links: [],
    },
    {
      title: "AIUBians on Erasmus",
      event: "Webinar — IEEE AIUB Student Branch",
      place: "American International University-Bangladesh",
      date: "2023-06-01",
      desc: "Conducted webinar as a speaker sharing experiences and insights on the Erasmus Mundus program.",
      image: "",
      links: [],
    },
  ],

  /* ── Teaching ─────────────────────────────── */
  teaching: {
    Graduate: [
      "Smart grids for renewable energy (Winter 2026)",
      "Control of electrical drive systems (Fall 2024, Fall 2025)",
      "Power systems dynamics (Fall 2024, Fall 2025)",
      "Power grid control (Fall 2024)"
    ],
    Undergraduate: [
      "Signals, systems, linear drive (Fall 2025)"
    ]
  },

  /* ── Portfolio / Projects ─────────────────── */
  project: [
    {
      title: "Higher penetration of renewable energy sources using grid-forming inverters",
      institution: "<a href='https://www.ls2n.fr/' target='_blank'>Laboratoire des Sciences du numérique de Nantes (LS2N) (UMR CNRS 6004)</a>, <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>",
      date: "November 2024-Ongoing",
      desc: `<ul class="prose">
        <li>Reviewed state-of-the-art methods to improve the performance of the grid-forming inverters</li>
        <li>Investigating the performance of the grid-forming inverter under transients</li>
        <li>EMT modelling and real-time simulation of the grid-forming inverter</li>
        <li>Validation of the standard control schemes in Hardware-in-the-loop (HiL) experimental testbench platform</li>
      </ul>`,
    },
    {
      title: "Renewables integration to secondary voltage control",
      institution: "<a href='https://www.ls2n.fr/' target='_blank'>Laboratoire des Sciences du numérique de Nantes (LS2N) (UMR CNRS 6004)</a>, <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>",
      date: "February 2024-August 2024",
      desc: `<ul class="prose">
        <li>Investigating the possibility of participation in the secondary voltage control framework for the inverter-based resources</li>
        <li>Proposes a model-free control (intelligent proportional–integral (iPI)) controller for grid-connected inverters enabling participation of renewable energy sources in the secondary voltage control framework</li>
        <li>Validation of the iPI controller in the Hardware-in-the-loop (HiL) experimental testbench platform</li>
      </ul>`,
    },
    {
      title: "Design of grid-forming converter for modern power systems with high penetration of power electronics",
      institution: "<a href='https://www.upc.edu' target='_blank'>Universitat Politècnica de Catalunya</a>",
      date: "February 2023-July 2023",
      desc: `<ul class="prose">
        <li>Modelling of grid-forming converter for low inertia power systems in MATLAB/Simulink&reg;</li>
        <li>Validated control strategies with two different power synchronization loops</li>
        <li>Designed a SISO transfer function model of the system with validation</li>
      </ul>`,
    },
    {
      title: "Active and Reactive power control of a grid-connected solar photovoltaic farm",
      institution: "<a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>",
      date: "September 2022-January 2023",
      desc: `<ul class="prose">
        <li>Designed a grid-following control strategy for active and reactive power control of 1 MW grid-connected solar PV</li>
        <li>Validated the components in MATLAB/Simulink&reg; and studied the dynamics of the grid</li>
        <li>Performed case studies to validate the control strategy</li>
      </ul>`,
    },
    {
      title: "Microgrid design for rural and urban locations in Bangladesh [technical, economical, optimization analysis]",
      institution: "<a href='https://sites.google.com/view/mohammadzeyad/research-laboratory/abcd-laboratory-bangladesh?authuser=0' target='_blank'>Advanced Bioinformatics, Computational Biology and Data Science Laboratory, Bangladesh (ABCD Laboratory, Bangladesh)</a>",
      date: "December 2020-July 2022",
      desc: `<ul class="prose">
        <li>Studied the potential for utilizing renewable sources in different locations across Bangladesh</li>
        <li>Investigated the most optimal and distinct Renewable Energy System (RES) design for various locations based on resources, demographics, and other factors</li>
        <li>Proposed a feasible solution for planning and integration of renewables into the main electricity grid</li>
      </ul>`,
    },
    {
      title: "Smart poultry farming for developing countries [technical, real-time experimentation, demand side management, economical, optimization analysis]",
      institution: "<a href='https://sites.google.com/view/mohammadzeyad/research-laboratory/abcd-laboratory-bangladesh?authuser=0' target='_blank'>Advanced Bioinformatics, Computational Biology and Data Science Laboratory, Bangladesh (ABCD Laboratory, Bangladesh)</a>",
      date: "December 2020-July 2022",
      desc: `<ul class="prose">
        <li>Assessed the potentiality of renewable energy sources (solar, wind, geothermal, water) to reduce dependency on the grid</li>
        <li>Proposed technological solution to increase productivity, decrease energy costs and consumption, and increase transparency and dependability of the energy supply chain</li>
      </ul>`,
    },
    {
      title: "Design and simulation of modern electric vehicle with wireless charging capability",
      institution: "<a href='https://www.aiub.edu/' target='_blank'>American International University-Bangladesh</a>",
      date: "September 2020 – October 2021",
      desc: `<ul class="prose">
        <li>Designed and simulated static wireless charging system for the electric vehicle</li>
        <li>Proposed a dynamic charging system for the vehicle to charge up and discharge simultaneously while remaining in motion</li>
        <li>Surveyed and analyzed feedback post regarding dynamic wireless charging system</li>
      </ul>`,
    },
  ],

  /* ── Blog posts ───────────────────────────── */
  blog: [],

  /* ── CV ───────────────────────────────────── */
  cv: {
    education: [
      {
        degree: "Ph.D., in Automatic Control",
        year: "November 2024-Ongoing",
        institution: "<em><a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a></em>",
        details: [
          { key: "Research unit", val: "<a href='https://www.ls2n.fr/equipe/codex/' target='_blank'>Commande, Observation, Diagnostic et Expérimentation (CODEx)</a>" },
          { key: "Laboratory", val: "<a href='https://www.ls2n.fr/' target='_blank'>Laboratoire des Sciences du numérique de Nantes (LS2N) (UMR CNRS 6004)</a>" },
          { key: "Dissertation", val: "Higher penetration of renewable energy sources using grid-forming inverters" },
          { key: "Advisors", val: "<a href='https://www.ec-nantes.fr/version-francaise/annuaire/mickael-hilairet' target='_blank'>Mickaël Hilairet</a>, <a href='https://www.ec-nantes.fr/version-francaise/annuaire/m-bogdan-marinescu' target='_blank'>Bogdan Marinescu</a>, <a href='https://www.ec-nantes.fr/english-version/directory/vinu-thomas' target='_blank'>Vinu Thomas</a>" }
        ]
      },
      {
        degree: "European Master in Dynamics of Renewables-based Power Systems (DREAM)",
        year: "September 2022-August 2024",
        institution: "<em><a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a></em>, <em><a href='https://www.upc.edu' target='_blank'>Universitat Politècnica de Catalunya</a></em>",
        details: [
          { key: "Master thesis", val: "Renewables integration to secondary voltage control" },
          { key: "Advisor", val: "<a href='https://www.ec-nantes.fr/english-version/directory/vinu-thomas' target='_blank'>Vinu Thomas</a>" }
        ]
      },
      {
        degree: "B.Sc., Electrical and Electronics Engineering",
        year: "April 2017-October 2021",
        institution: "<em><a href='https://www.aiub.edu' target='_blank'>American International University-Bangladesh</a></em>",
        details: [
          { key: "Capstone project", val: "Design and simulation of modern electric vehicle with wireless charging capability" },
          { key: "Advisor", val: "<a href='https://www.aiub.edu/faculty-list/faculty-profile?q=mdmannan#mdmannan@aiub.edu' target='_blank'>Mohammad Abdul Mannan</a>" }
        ]
      }
    ],
    employment: [
      {
        year: "November 2024 – Ongoing",
        role: "Lecturer (Enseignant vacataire)",
        org: "<a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>",
        note: "Department: <a href='https://www.ec-nantes.fr/organisation/staff-and-organisation/automatic-control-and-robotics-department' target='_blank'>Automatic Control and Robotics</a>"
      },
      {
        year: "November 2024 – Ongoing",
        role: "Doctoral (Ph.D.) Researcher",
        org: "<a href='https://www.ls2n.fr/' target='_blank'>LS2N (UMR CNRS 6004)</a>, <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>",
        note: "Research unit: <a href='https://www.ls2n.fr/equipe/codex/' target='_blank'>Commande, Observation, Diagnostic et Expérimentation (CODEx)</a><br>Laboratory: <a href='https://www.ls2n.fr/' target='_blank'>Laboratoire des Sciences du numérique de Nantes (LS2N) (UMR CNRS 6004)</a>"
      },
      {
        year: "February 2024 – August 2024",
        role: "Graduate Research Intern",
        org: "<a href='https://www.ls2n.fr/' target='_blank'>LS2N (UMR CNRS 6004)</a>, <a href='https://www.ec-nantes.fr' target='_blank'>École Centrale de Nantes</a>",
        note: "Research unit: <a href='https://www.ls2n.fr/equipe/codex/' target='_blank'>Commande, Observation, Diagnostic et Expérimentation (CODEx)</a><br>Laboratory: <a href='https://www.ls2n.fr/' target='_blank'>Laboratoire des Sciences du numérique de Nantes (LS2N) (UMR CNRS 6004)</a><br>"
      }
    ],
    awards: [
      "<strong>Erasmus+ Erasmus Mundus Joint Master (EMJM) Scholarship</strong> for <a href='https://master-dream.ec-nantes.fr/' target='_blank'>Master's in Dynamics of Renewables-based Power Systems (DREAM)</a>",
      "<strong>“High-Impact Research Category/Collection for H1 2022”, “Featured Article”, “Cover Page of the issue” and “Editor’s Choice”</strong> of the journal <em><strong><a href='https://academic.oup.com/ce' target='_blank'>Clean Energy</a></strong></em>, for the article <a href='https://academic.oup.com/ce/article/6/3/447/6606004' target='_blank'><em>“Grid-connected microgrid: design and feasibility analysis for a local community in Bangladesh”</em></a> Volume 6 Issue 3, June 2022, <a href='https://academic.oup.com' target='_blank'>Oxford University Press</a>",
      "<strong>Best Paper (Article)</strong> for the paper entitled <a href='https://academic.oup.com/ce/article/6/3/447/6606004' target='_blank'><em>“Grid-connected microgrid: design and feasibility analysis for a local community in Bangladesh”</em></a> during the year 2022, issued by Energy and Technology Research Division of <a href='https://sites.google.com/view/mohammadzeyad/research-laboratory/abcd-laboratory-bangladesh?authuser=0' target='_blank'>Advanced Bioinformatics, Computational Biology and Data Science Laboratory, Bangladesh (ABCD Laboratory, Bangladesh)</a>",
      "<strong>Young Researcher Award</strong> for <em>“Outstanding Contribution in Research”</em> during the year 2021, issued by Energy and Technology Research Division of <a href='https://sites.google.com/view/mohammadzeyad/research-laboratory/abcd-laboratory-bangladesh?authuser=0' target='_blank'>Advanced Bioinformatics, Computational Biology and Data Science Laboratory, Bangladesh (ABCD Laboratory, Bangladesh)</a>",
      "<strong>Fast Learner Award</strong> for <em>“Fast Learner and Improver in Research Activities”</em> during the year 2021, issued by Energy and Technology Research Division of <a href='https://sites.google.com/view/mohammadzeyad/research-laboratory/abcd-laboratory-bangladesh?authuser=0' target='_blank'>Advanced Bioinformatics, Computational Biology and Data Science Laboratory, Bangladesh (ABCD Laboratory, Bangladesh)</a>",
      "<strong>Dean's List Honor</strong> for <em>“Academic Excellence”</em>, issued by Faculty of Electrical and Electronics Engineering (EEE), <a href='https://www.aiub.edu/' target='_blank'>American International University-Bangladesh (AIUB)</a>"
    ],
    skills: [
      "MATLAB",
      "MATLAB/Simulink<sup>&reg;</sup>",
      "PSCAD",
      "DIgSILENT PowerFactory",
      "RTLab",
      "Neplan",
      "PSAT",
      "HOMER",
      "NI circuit design suite",
      "PSIM",
      "Python",
      "C++",
      "Microsoft office suite",
      "Latex"
    ],
  },
};
