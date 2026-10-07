export const profile = {
  name: 'Gayathri Ande',
  email: 'gayathriande20@gmail.com',
  github: 'https://github.com/gayeeA/',
  linkedin: 'https://www.linkedin.com/in/ande-gayathri-9b536524a/',
  resume: '/Gayathri_Ande_Resume.pdf', // put your PDF in /public with this exact name
}

export const projects = [
  { title: 'AI CRM', tags: ['AI', 'Full-stack'], stack: 'React, Redux, TypeScript, FastAPI, LangGraph, Groq',
    desc: 'A CRM for logging healthcare professional interactions. A form sits beside an LLM assistant that turns free text into structured records, using 5 LangGraph tools.',
    code: 'https://github.com/gayeeA/AI_CRM' },
  { title: 'GrowEasy CSV Importer', tags: ['AI', 'Full-stack'], stack: 'Next.js, Express, Groq (Llama 3.3 70B)',
    desc: 'Upload a lead export in any layout and an LLM maps its columns to a standard CRM schema. Preview, confirm, import. Large files are processed in batches.',
    code: 'https://github.com/gayeeA/groweasy-csv-importer' },
  { title: 'Shinchan Voice Assistant', tags: ['AI'], stack: 'Python, STT, LLM, TTS, web search',
    desc: 'A voice-first assistant with a playful persona. It listens, searches the web, remembers the chat and answers aloud.',
    code: 'https://github.com/gayeeA/Murf-AI-Voice-Agent-Challenge' },
  { title: 'LegalLens AI', tags: ['AI'], stack: 'JavaScript, LLM',
    desc: 'Turns dense legal documents into plain-language explanations for people without a legal background.',
    code: 'https://github.com/gayeeA/LegalLens-AI' },
  { title: 'HealthCare Pro', tags: ['React'], stack: 'React 19, TypeScript, Vite, Tailwind v4, Firebase Auth, Recharts',
    desc: 'A B2B healthcare dashboard with protected routes, Firebase sign-in and interactive analytics charts.',
    code: 'https://github.com/gayeeA/healthcare-ui' },
  { title: 'Order-In', tags: ['React', 'Design'], stack: 'React, Figma',
    desc: 'A food ordering app, designed in Figma first and then built as a React single-page app.',
    code: 'https://github.com/gayeeA/order_in',
    design: 'https://www.figma.com/design/st43gkQHiFmh5KbFJGrSTq/OrderIn?node-id=0-1&t=1YNTYWxFmP43Au3U-1' },
  { title: 'Blood Group Identification', tags: ['AI', 'Full-stack'], stack: 'Python, Django, OpenCV',
    desc: 'Reads an ABD test-cell image and detects blood group and Rh factor with 83% accuracy, showing original and processed images side by side.',
    code: 'https://github.com/gayeeA/blood-group-identifier' },
  { title: 'Daily Weather Pipeline', tags: ['Data'], stack: 'Python, Airflow, SQLite',
    desc: 'A daily ELT pipeline for 5 cities: raw landing, quality checks, star schema, idempotent loads and retries.',
    code: 'https://github.com/gayeeA/de-course' },
  { title: 'E-Commerce ETL', tags: ['Data'], stack: 'Python, MySQL',
    desc: 'Extracts a Kaggle retail dataset, cleans it and loads it into MySQL for analysis.',
    code: 'https://github.com/gayeeA/ecommerce-ETL-project' },
]

export const filters = ['All', 'AI', 'Full-stack', 'React', 'Data', 'Design']

export const experience = [
  { role: 'Software Developer Apprentice', org: 'Target in India, Bangalore', when: 'Aug 2025 to Feb 2026',
    text: 'Marketing Tech team. Built React components and Spring Boot services for Roundel Insights Kiosk: custom metrics, cross-advertiser reporting and scheduled exports.' },
  { role: 'UI/UX Design Intern', org: 'CareerCrush Labs, Remote', when: 'Feb 2025 to Aug 2025',
    text: 'Wireframes, mock-ups and Figma prototypes for a mentoring and hiring platform MVP.' },
  { role: 'Python Stack Intern', org: 'Infosys Springboard, Virtual', when: 'Oct 2024 to Dec 2024',
    text: 'Built the Blood Group Identification web app with Python, Django and OpenCV.' },
]

export const skills = {
  Frontend: 'React, Next.js, TypeScript, Redux, HTML, CSS',
  Backend: 'Spring Boot, FastAPI, Django, Node.js, Express',
  'Data and AI': 'Python, Java, MySQL, OpenCV, LangGraph, Airflow',
  Design: 'Figma, wireframing, prototyping, user research',
}
