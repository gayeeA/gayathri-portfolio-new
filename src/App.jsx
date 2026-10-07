import {useEffect,useRef,useState} from 'react'
import Robot from './Robot.jsx'

const SKILLS=[
  ['Languages','Python · Java · JavaScript · TypeScript'],
  ['Frontend','React · Redux · Next.js · Tailwind · HTML/CSS'],
  ['Backend','Spring Boot · FastAPI · Node/Express · Django'],
  ['AI & machine learning','LangGraph · Groq LLMs · OpenCV · scikit-learn · NLTK'],
  ['Data','MySQL · PostgreSQL · SQLite · Airflow · ETL'],
  ['Design & tools','Figma · Git · Canva'],
]

const PROJECTS=[
  {
    name:'AI CRM',
    type:'monitor',
    stack:'React · Redux · TypeScript · FastAPI · LangGraph',
    description:'A split-screen CRM that pairs a structured form with an LLM assistant, turning free-text HCP interactions into structured data with five specialised AI tools.',
    href:'https://github.com/gayeeA/AI_CRM',
    label:'Open project on GitHub',
  },
  {
    name:'GrowEasy CSV Importer',
    type:'machine',
    stack:'Next.js · Express · Groq · Llama 3.3 70B',
    description:'Maps lead exports from different sources to a standard CRM schema, with batching for larger files.',
    href:'https://github.com/gayeeA/groweasy-csv-importer',
    label:'Open project on GitHub',
  },
  {
    name:'Weather Analytics Pipeline',
    type:'greenhouse',
    stack:'Python · Airflow · SQLite',
    description:'A daily ELT pipeline for five cities, loading a star schema with idempotent runs, data-quality checks, and retries.',
    href:'https://github.com/gayeeA/de-course',
    label:'Open project on GitHub',
  },
  {
    name:'Blood Group Identification',
    type:'scanner',
    stack:'Python · Django · OpenCV',
    description:'A web app that analyses a blood test-cell image for agglutination patterns to identify blood group and Rh factor. Reported accuracy: 83%.',
    href:'https://github.com/gayeeA/blood-group-identifier',
    label:'Open project on GitHub',
  },
  {
    name:'Voice Agents',
    type:'radio',
    stack:'Python · Speech-to-text · LLM · Text-to-speech',
    description:'A voice assistant with web search and memory, built over 30 days and refactored into independent services.',
    href:'https://github.com/gayeeA/Voice_Agents_Ai',
    label:'Open project on GitHub',
  },
  {
    name:'HealthCare Pro',
    type:'terminal',
    stack:'React · TypeScript · Vite · Firebase · Recharts',
    description:'A B2B healthcare dashboard featuring protected routes and interactive charts.',
    href:'https://github.com/gayeeA/healthcare-ui',
    label:'Open project on GitHub',
  },
  {
    name:'LegalLens AI',
    type:'book',
    stack:'JavaScript · LLM',
    description:'An AI concept for turning dense legal documents into plain-language explanations and actionable takeaways.',
    href:'https://github.com/gayeeA/LegalLens-AI',
    label:'Open project on GitHub',
  },
  {
    name:'Order-In',
    type:'blueprint',
    stack:'React · Figma',
    description:'A food-ordering concept designed in Figma and built in React.',
    href:'https://github.com/gayeeA/order_in',
    label:'Open project on GitHub',
  },
]

const EXPERIENCES=[
  {
    date:'Aug 2025 – Feb 2026',
    title:'Software Developer Apprentice',
    company:'Target (TII)',
    place:'Bangalore · Marketing Technology',
    details:'Contributed to Roundel Insights Kiosk, a centralised analytics platform for multi-channel campaign reporting and attribution. Built React front-end components and Spring Boot services supporting custom metrics, cross-advertiser reports, and scheduled exports.',
    tools:'React · Spring Boot',
  },
  {
    date:'Feb 2025 – Aug 2025',
    title:'UI/UX Design Intern',
    company:'CareerCrush Labs',
    place:'Remote',
    details:'Designed wireframes, mock-ups, and high-fidelity Figma prototypes for a mentoring and hiring platform MVP in collaboration with product managers and developers.',
    tools:'Figma · Product design',
  },
  {
    date:'Oct – Dec 2024',
    title:'Python Stack Intern',
    company:'Infosys Springboard',
    place:'Virtual',
    details:'Built a blood-group identification web app using Python, Django, and OpenCV.',
    tools:'Python · Django · OpenCV',
  },
]

const ROBOT_MESSAGES=[
  'BEEP! New idea detected.',
  'Curiosity levels: maximum.',
  'Scanning for useful problems…',
  'Tiny bot. Big plans.',
  'Found something worth building!',
]
const FIGMA='https://www.figma.com/design/st43gkQHiFmh5KbFJGrSTq/OrderIn?node-id=0-1&t=1YNTYWxFmP43Au3U-1'
const GITHUB='https://github.com/gayeeA/'
const LINKEDIN='https://www.linkedin.com/in/ande-gayathri-9b536524a/'
const EMAIL='gayathriande20@gmail.com'
const FORMSPREE_ID=import.meta.env.VITE_FORMSPREE_ID

export default function App(){
  const roverRef=useRef(null)
  const groundRef=useRef(null)
  const blinkTimerRef=useRef(0)
  const messageTimerRef=useRef(0)
  const [form,setForm]=useState({name:'',email:'',message:''})
  const [status,setStatus]=useState('')
  const [robotBlink,setRobotBlink]=useState(false)
  const [robotMessage,setRobotMessage]=useState('')

  useEffect(()=>{
    const rover=roverRef.current
    if(!rover)return

    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame=0
    let walkingTimer

    const updateJourney=()=>{
      frame=0
      const width=window.innerWidth
      const height=window.innerHeight
      const maxScroll=document.documentElement.scrollHeight-height
      const progress=maxScroll>0?window.scrollY/maxScroll:0
      const introLanding=width>900&&window.scrollY<72
      rover.dataset.intro=introLanding?'true':'false'
      const chapters=[...document.querySelectorAll('main>.chapter')]
      const activeChapter=chapters.reduce((closest,chapter)=>{
        const rect=chapter.getBoundingClientRect()
        const distance=Math.abs((rect.top+rect.bottom)/2-height*.58)
        return !closest||distance<closest.distance?{chapter,distance}:closest
      },null)?.chapter
      const scene=activeChapter?.id||'home'
      rover.dataset.scene=scene
      if(groundRef.current)groundRef.current.dataset.scene=scene
      const roverWidth=rover.offsetWidth
      const roverHeight=rover.offsetHeight
      const targetX=introLanding?width*.8:width*(.5+.4*Math.sin(progress*Math.PI*8))
      const introRoverHeight=Math.min(430,Math.max(320,width*.31))
      const targetY=introLanding
        ?height-introRoverHeight/2-126
        :height-roverHeight/2-18
      rover.style.visibility='visible'
      rover.style.setProperty('--rover-x',`${Math.max(roverWidth/2+8,Math.min(width-roverWidth/2-8,targetX))}px`)
      rover.style.setProperty('--rover-y',`${targetY}px`)
      rover.style.setProperty('--rover-facing',Math.cos(progress*Math.PI*8)>=0?1:-1)
      document.documentElement.style.setProperty('--journey-drift',`${progress*48}px`)
    }

    const scheduleJourney=()=>{
      if(!frame)frame=requestAnimationFrame(updateJourney)
      if(!reducedMotion.matches){
        rover.dataset.walking='true'
        window.clearTimeout(walkingTimer)
        walkingTimer=window.setTimeout(()=>{rover.dataset.walking='false'},190)
      }
    }

    updateJourney()
    window.addEventListener('scroll',scheduleJourney,{passive:true})
    window.addEventListener('resize',scheduleJourney)
    return()=>{
      window.removeEventListener('scroll',scheduleJourney)
      window.removeEventListener('resize',scheduleJourney)
      window.cancelAnimationFrame(frame)
      window.clearTimeout(walkingTimer)
      window.clearTimeout(blinkTimerRef.current)
      window.clearTimeout(messageTimerRef.current)
      if('speechSynthesis' in window)window.speechSynthesis.cancel()
    }
  },[])

  const blinkRobot=()=>{
    setRobotBlink(true)
    window.clearTimeout(blinkTimerRef.current)
    blinkTimerRef.current=window.setTimeout(()=>setRobotBlink(false),220)
  }

  const speakRobot=()=>{
    const choices=ROBOT_MESSAGES.filter(message=>message!==robotMessage)
    const message=choices[Math.floor(Math.random()*choices.length)]
    setRobotMessage(message)
    blinkRobot()
    const AudioContextConstructor=window.AudioContext||window.webkitAudioContext
    if(AudioContextConstructor){
      const audio=new AudioContextConstructor()
      const now=audio.currentTime
      const oscillator=audio.createOscillator()
      const filter=audio.createBiquadFilter()
      const volume=audio.createGain()
      oscillator.type='square'
      oscillator.frequency.setValueAtTime(760,now)
      oscillator.frequency.exponentialRampToValueAtTime(1320,now+.065)
      oscillator.frequency.exponentialRampToValueAtTime(890,now+.17)
      filter.type='highpass'
      filter.frequency.value=520
      volume.gain.setValueAtTime(.0001,now)
      volume.gain.exponentialRampToValueAtTime(.035,now+.018)
      volume.gain.exponentialRampToValueAtTime(.0001,now+.21)
      oscillator.connect(filter)
      filter.connect(volume)
      volume.connect(audio.destination)
      oscillator.onended=()=>audio.close()
      oscillator.start(now)
      oscillator.stop(now+.22)
    }
    if('speechSynthesis' in window&&'SpeechSynthesisUtterance' in window){
      window.speechSynthesis.cancel()
      const utterance=new SpeechSynthesisUtterance(`Bweep! ${message}`)
      utterance.rate=.86
      utterance.pitch=1.9
      window.speechSynthesis.speak(utterance)
    }
    window.clearTimeout(messageTimerRef.current)
    messageTimerRef.current=window.setTimeout(()=>setRobotMessage(''),2800)
  }

  const updateField=key=>event=>{
    setForm(current=>({...current,[key]:event.target.value}))
  }

  const sendMessage=async event=>{
    event.preventDefault()
    setStatus('')

    if(!FORMSPREE_ID){
      window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`
      return
    }

    setStatus('sending')
    try{
      const response=await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,{
        method:'POST',
        headers:{'Content-Type':'application/json',Accept:'application/json'},
        body:JSON.stringify(form),
      })
      if(!response.ok){
        setStatus('error')
        return
      }
      setStatus('sent')
      setForm({name:'',email:'',message:''})
    }catch{
      setStatus('error')
    }
  }

  return(
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Gayathri Ande, beginning of journey">GA<span>.</span></a>
        <nav aria-label="Journey navigation">
          <a href="#about">Workspace</a>
          <a href="#experience">Field logs</a>
          <a href="#projects">Discoveries</a>
          <a className="nav-contact" href="#contact">Radio home <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <div className="rover-ground" ref={groundRef} data-scene="home" aria-hidden="true">
        <span className="ground-ridge"/>
        <span className="ground-grit grit-one"/>
        <span className="ground-grit grit-two"/>
        <span className="ground-sprout"><i/><i/></span>
        <span className="ground-stamp">FIELD UNIT · 01</span>
      </div>
      <div className="scroll-walker" ref={roverRef} data-walking="false">
        {robotMessage&&<span className="robot-bubble" role="status">{robotMessage}</span>}
        <button className="walker-button" type="button" aria-label="Curious little rover. Click for a random message." onPointerEnter={blinkRobot} onFocus={blinkRobot} onClick={speakRobot}>
          <Robot blink={robotBlink}/>
        </button>
      </div>

      <main id="main" className="expedition">
        <section className="chapter intro-land" id="home" aria-labelledby="intro-title">
          <div className="distant-towers" aria-hidden="true"><i/><i/><i/><i/></div>
          <div className="far-ridge" aria-hidden="true"/>
          <div className="near-rubble" aria-hidden="true"><i/><i/><i/><i/><i/></div>
          <div className="plant sprout-one" aria-hidden="true"><i/><i/><i/></div>
          <div className="plant sprout-two" aria-hidden="true"><i/><i/><i/></div>
          <div className="section-shell chapter-inner intro-inner">
            <div className="intro-copy">
              <p className="chapter-label"><span className="signal-dot"/> FIELD NOTE 001 · A QUIET PLANET</p>
              <div className="weathered-sign">
                <span className="sign-overline">RECOVERED NAMEPLATE · HUMAN ARCHIVE</span>
                <h1 id="intro-title">Gayathri Ande</h1>
                <p>AI/ML <span>•</span> Full-Stack Developer</p>
                <span className="sign-scratch" aria-hidden="true"/>
              </div>
              <p className="intro-description">A curious builder exploring the space between useful software and intelligent systems. Follow the rover to uncover the work, tools, and ideas along the way.</p>
              <a className="physical-link" href="#about">Begin the expedition <span aria-hidden="true">↓</span></a>
            </div>
            <div className="landscape-object object-screen world-prop" aria-hidden="true">
              <div className="screen-glass"><span>ARCHIVE FOUND</span><b>08:88</b><i/></div>
              <div className="screen-neck"/><div className="screen-foot"/>
            </div>
          </div>
          <span className="land-coordinate">17° 36′ N · 78° 31′ E</span>
          <span className="scene-number">01 — 08</span>
        </section>

        <section className="chapter workspace" id="about" aria-labelledby="about-title">
          <div className="section-shell chapter-inner split-inner">
            <div className="chapter-copy">
              <p className="chapter-label">02 · THE ROBOT’S WORKSPACE</p>
              <h2 id="about-title">A little room<br/>for big ideas.</h2>
              <p>I like working across the whole product: understanding a problem, shaping a clear experience, and building the system behind it. My path spans full-stack engineering, AI/ML experiments, and hands-on UI/UX design.</p>
              <p>When a workflow feels complicated, I enjoy finding the useful signal in the noise—and building a tool that makes the next step feel simple.</p>
              <p className="handwritten-note">Current coordinates: Tirupati, Andhra Pradesh</p>
            </div>
            <div className="workbench world-prop" aria-label="An old maintenance desk with a recovered work note">
              <div className="desk-lamp"><i/><b/></div>
              <div className="monitor-frame">
                <span className="monitor-label">PERSONAL LOG · 2026</span>
                <div className="workbench-screen">
                  <p>Build for people.</p>
                  <span>Keep the system clear.</span>
                  <span>Stay curious.</span>
                </div>
                <div className="monitor-controls"><i/><i/><i/></div>
              </div>
              <div className="desk-top"><span className="cable cable-one"/><span className="cable cable-two"/></div>
              <div className="desk-leg leg-one"/><div className="desk-leg leg-two"/>
              <div className="notebook"><i/><i/><i/><b>ideas</b></div>
              <div className="plant desk-plant"><i/><i/><i/></div>
            </div>
          </div>
          <span className="scene-number">02 — 08</span>
        </section>

        <section className="chapter compactor-yard" id="skills" aria-labelledby="skills-title">
          <div className="section-shell chapter-inner">
            <div className="chapter-copy yard-copy">
              <p className="chapter-label">03 · THE COMPACTOR / DATA YARD</p>
              <h2 id="skills-title">Useful parts,<br/>ready for a new life.</h2>
              <p>Recovered tools from the yard. No rankings or mystery percentages—just the technologies I reach for and the systems I’ve worked with.</p>
            </div>
            <div className="compactor world-prop">
              <div className="compactor-top"><span>RECLAIM / REUSE / REBUILD</span><i/><i/><i/></div>
              <div className="compactor-mouth"><div className="salvage-grid">
                {SKILLS.map(([name,items],index)=>(
                  <article className="skill-scrap" key={name}>
                    <span className="scrap-number">PART {String(index+1).padStart(2,'0')}</span>
                    <h3>{name}</h3><p>{items}</p>
                  </article>
                ))}
              </div></div>
              <div className="compactor-foot"><span>POWER: LOW / SPIRIT: HIGH</span><i/></div>
            </div>
            <div className="yard-plant plant" aria-hidden="true"><i/><i/><i/></div>
          </div>
          <span className="scene-number">03 — 08</span>
        </section>

        <section className="chapter terminal-facility" id="experience" aria-labelledby="experience-title">
          <div className="section-shell chapter-inner">
            <div className="chapter-copy terminal-copy">
              <p className="chapter-label">04 · THE OLD TERMINAL FACILITY</p>
              <h2 id="experience-title">Work left<br/>in the logs.</h2>
              <p>A few field records from teams and products I’ve had the chance to contribute to.</p>
            </div>
            <div className="terminal-stack">
              {EXPERIENCES.map((item,index)=>(
                <article className="terminal-record" key={item.company}>
                  <div className="terminal-record-head"><span>LOG 0{index+1} · {item.date}</span><i/></div>
                  <h3>{item.title} <span>@ {item.company}</span></h3>
                  <p className="record-place">{item.place}</p>
                  <p>{item.details}</p>
                  <span className="record-tools">{item.tools}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="terminal-cables" aria-hidden="true"/>
          <span className="scene-number">04 — 08</span>
        </section>

        <section className="chapter discovery-zone" id="projects" aria-labelledby="projects-title">
          <div className="section-shell chapter-inner">
            <div className="chapter-copy discovery-heading">
              <p className="chapter-label">05 · THE PROJECT DISCOVERY ZONE</p>
              <h2 id="projects-title">Something’s still<br/>working out here.</h2>
              <p>Eight recovered builds. Open a project to inspect the source and how it works.</p>
            </div>
            <div className="discovery-grid">
              {PROJECTS.map((project,index)=>(
                <article className={`project-discovery artifact-${project.type}`} key={project.name}>
                  <div className="artifact-visual" aria-hidden="true"><span className="artifact-light"/><span className="artifact-detail"/></div>
                  <div className="artifact-paper">
                    <span className="artifact-tag">FOUND OBJECT · {String(index+1).padStart(2,'0')}</span>
                    <h3>{project.name}</h3>
                    <p className="artifact-stack">{project.stack}</p>
                    <p>{project.description}</p>
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.label}: ${project.name}`}>Inspect the build <span aria-hidden="true">↗</span></a>
                  </div>
                </article>
              ))}
            </div>
            <p className="blueprint-note">A design sketch from the archive: <a href={FIGMA} target="_blank" rel="noreferrer">Order-In in Figma <span aria-hidden="true">↗</span></a></p>
          </div>
          <span className="scene-number">05 — 08</span>
        </section>

        <section className="chapter overgrown-city" id="data" aria-labelledby="data-title">
          <div className="section-shell chapter-inner city-inner">
            <div className="chapter-copy city-copy">
              <p className="chapter-label">06 · THE OVERGROWN CITY</p>
              <h2 id="data-title">Technology,<br/>with room to grow.</h2>
              <p>Somewhere between natural language and structured data, a good tool can make the complicated feel approachable. These are a few ideas I’ve been exploring.</p>
            </div>
            <div className="city-discoveries">
              <article className="data-inscription">
                <span className="inscription-icon icon-spark" aria-hidden="true">✳</span>
                <span className="chapter-label">LISTEN / UNDERSTAND</span>
                <h3>Language into structure</h3>
                <p>AI CRM uses specialised tools to turn free-text healthcare interactions into structured records.</p>
                <a href="https://github.com/gayeeA/AI_CRM" target="_blank" rel="noreferrer">Explore the project ↗</a>
              </article>
              <article className="data-inscription">
                <span className="inscription-icon icon-leaf" aria-hidden="true">✳</span>
                <span className="chapter-label">MAP / TRANSFORM</span>
                <h3>Messy inputs, useful data</h3>
                <p>GrowEasy maps differently shaped lead exports into a shared schema and processes larger files in batches.</p>
                <a href="https://github.com/gayeeA/groweasy-csv-importer" target="_blank" rel="noreferrer">Explore the project ↗</a>
              </article>
              <article className="data-inscription">
                <span className="inscription-icon icon-sun" aria-hidden="true">✳</span>
                <span className="chapter-label">SCHEDULE / VERIFY</span>
                <h3>Data that keeps moving</h3>
                <p>A small multi-city ELT pipeline uses idempotent loads, checks, and retries to keep its daily run dependable.</p>
                <a href="https://github.com/gayeeA/de-course" target="_blank" rel="noreferrer">Explore the project ↗</a>
              </article>
            </div>
          </div>
          <div className="city-vines" aria-hidden="true"><i/><i/><i/><i/><i/></div>
          <span className="scene-number">06 — 08</span>
        </section>

        <section className="chapter memory-room" id="education" aria-labelledby="education-title">
          <div className="section-shell chapter-inner memory-inner">
            <div className="chapter-copy">
              <p className="chapter-label">07 · THE HUMAN MEMORY ROOM</p>
              <h2 id="education-title">Things worth<br/>keeping.</h2>
              <p>Notes from the learning trail. Every milestone is a reminder to keep asking better questions.</p>
            </div>
            <div className="memory-shelf">
              <article className="memory-artifact diploma">
                <span className="artifact-tag">EDUCATION · 2021—2025</span>
                <span className="paper-stamp">88%</span>
                <h3>B.Tech, CSE (AI &amp; ML)</h3>
                <p>Sri Venkateswara College of Engineering, Tirupati</p>
              </article>
              <article className="memory-artifact paper-note">
                <span className="artifact-tag">EARLIER CHAPTER</span>
                <h3>Intermediate · M.P.C</h3>
                <p>Sri Chaitanya Junior College · 79.2%</p>
              </article>
              <article className="memory-artifact paper-note">
                <span className="artifact-tag">FIRST RECORD</span>
                <h3>SSC</h3>
                <p>Sri Venkateshwara Children’s High School · 95%</p>
              </article>
              <article className="memory-artifact book-note">
                <span className="artifact-tag">COLLECTED FIELD NOTES</span>
                <h3>Courses &amp; training</h3>
                <p>Infosys Springboard: OOP with Python, DBMS, Software Engineering &amp; Agile</p>
                <p>MySQL &amp; Java training, Bodha Software Technologies</p>
                <p>Mastering Figma (UI/UX) · edX HTML5 &amp; CSS Fundamentals</p>
              </article>
            </div>
            <div className="memory-lamp" aria-hidden="true"><i/><b/></div>
          </div>
          <span className="scene-number">07 — 08</span>
        </section>

        <section className="chapter rooftop" id="contact" aria-labelledby="contact-title">
          <div className="roof-sun" aria-hidden="true"/>
          <div className="roof-city" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
          <div className="section-shell chapter-inner rooftop-inner">
            <div className="rooftop-copy">
              <p className="chapter-label">08 · ROOFTOP · FIRST LIGHT</p>
              <h2 id="contact-title">Hi, I’m Gayathri.</h2>
              <p className="rooftop-role">AI/ML <span>•</span> Full-Stack Developer</p>
              <p>The city is waking up. If you’re building something useful, let’s make the next thing together.</p>
            </div>
            <div className="contact-terminal world-prop">
              <div className="radio-screen"><span>OPEN CHANNEL</span><strong>LET’S BUILD<br/>SOMETHING.</strong><i/></div>
              <div className="radio-controls">
                <a href={GITHUB} target="_blank" rel="noreferrer"><i/> GitHub <span>↗</span></a>
                <a href="/Gayathri_Resume.pdf" target="_blank" rel="noreferrer"><i/> Resume <span>↗</span></a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer"><i/> LinkedIn <span>↗</span></a>
                <a href={`mailto:${EMAIL}`}><i/> Contact <span>↗</span></a>
              </div>
              <div className="radio-grille" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div>
              <a className="radio-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <form onSubmit={sendMessage} className="contact-form">
              <p className="chapter-label">SEND A TRANSMISSION</p>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" required value={form.name} onChange={updateField('name')}/>
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField('email')}/>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="3" required value={form.message} onChange={updateField('message')}/>
              <button className="physical-link" type="submit" disabled={status==='sending'}>{status==='sending'?'Sending…':'Send transmission'} <span aria-hidden="true">↗</span></button>
              <p className="form-status" role="status" aria-live="polite">{status==='sent'&&'Transmission received. I’ll be in touch.'}{status==='error'&&<>Signal lost. Please email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>}</p>
            </form>
          </div>
          <p className="rooftop-coordinate">TIRUPATI, INDIA · SIGNAL STRENGTH: HOPEFUL</p>
          <span className="scene-number">END — BEGIN AGAIN</span>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#home">GA<span>.</span></a>
        <p>A small expedition, built by Gayathri Ande.</p>
        <a href="#home">Return to the horizon ↑</a>
      </footer>
    </>
  )
}
