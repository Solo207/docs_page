import { useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import AnchorSidebar from '../../components/AnchorSidebar/AnchorSidebar'
import PageHeader from '../../components/PageHeader/PageHeader'
import './overview.css'
export const TAB = { label: 'Overview', path: '/' }

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'getting-started', label: 'Getting started' },
  { id: 'features', label: 'Features' },
  { id: 'courses', label: 'Courses' },
  { id: 'commands', label: 'Commands' },
  { id: 'faq', label: 'FAQ' },
]

const TRANSCRIPT = [
  { from: 'user', text: 'quiz me on beta blockers' },
  { from: 'bot', text: 'Pulling 10 PHARM questions on beta blockers. First one coming up — reply with A, B, C or D.' },
  { from: 'user', text: 'pq cpath 2023' },
  { from: 'bot', text: 'Found 34 past questions from Chemical Pathology, 2023 sitting. Want them by topic or in exam order?' },
]

const GETTING_STARTED = [
  { step: '01', title: 'Save the number', body: 'Add the Study Buddy WhatsApp number to your contacts. No app store, no install — it opens straight in WhatsApp.' },
  { step: '02', title: 'Say hi', body: 'Send any message to start. Study Buddy walks you through registration: email, a one-time PIN, then your school and year.' },
  { step: '03', title: 'Pick your courses', body: 'Choose from Pharmacology, Chemical Pathology, Morbid Anatomy, Haematology and Microbiology. You can add or switch later.' },
  { step: '04', title: 'Start studying', body: 'Ask a question, request a quiz, or pull past questions. Study Buddy replies in the same chat, every time.' },
]

const FEATURES = [
  { name: 'Q&A', body: 'Ask anything from your syllabus in plain language and get a straight, exam-focused answer — with follow-up questions kept in context.', example: 'explain the mechanism of warfarin' },
  { name: 'Quiz mode', body: 'Timed or untimed multiple-choice sets, generated on demand for a topic, a course, or a mix of everything you\u2019re weak on.', example: 'quiz me on renal physiology, 20 questions' },
  { name: 'Flashcards', body: 'Front-and-back cards built from your course material, sent as a deck you can flip through message by message.', example: 'flashcards on acid-base disorders' },
  { name: 'Past questions', body: 'Search and bookmark past exam questions by course, year, or set, and revisit anything you\u2019ve saved.', example: 'pq mobid 2022 set b' },
  { name: 'Video summaries', body: 'Drop in a YouTube lecture link and get a written summary with the key points, ready before the video would\u2019ve finished playing.', example: 'summarize [youtube link]' },
]

const COURSES = [
  { code: 'PHARM', name: 'Pharmacology' },
  { code: 'CPATH', name: 'Chemical Pathology' },
  { code: 'MOBID', name: 'Morbid Anatomy' },
  { code: 'HEMAT', name: 'Haematology' },
  { code: 'MCB', name: 'Microbiology' },
]

const COMMANDS = [
  { cmd: 'quiz me on <topic>', does: 'Starts a multiple-choice quiz on that topic' },
  { cmd: 'flashcards <topic>', does: 'Builds a flashcard deck you can flip through' },
  { cmd: 'pq <course> <year>', does: 'Retrieves past questions for a course and sitting' },
  { cmd: 'bookmark', does: 'Saves the last question or card for later' },
  { cmd: 'summarize <link>', does: 'Summarizes a YouTube lecture into key points' },
  { cmd: 'switch course', does: 'Changes which course you\u2019re currently studying' },
]

const FAQS = [
  { q: 'Do I need to install anything?', a: 'No. Study Buddy runs entirely inside WhatsApp — there\u2019s no separate app, login page, or download.' },
  { q: 'Which courses does it cover right now?', a: 'Pharmacology, Chemical Pathology, Morbid Anatomy, Haematology and Microbiology. "Pathology" on its own covers two of these, so Study Buddy will ask which one you mean.' },
  { q: 'Where do the past questions come from?', a: 'A shared bank built from real exam sittings, organised by course, year and set so you can search or bookmark exactly what you need.' },
  { q: 'Can I pick up where I left off?', a: 'Yes. Study Buddy keeps track of the course and topic you were on, so a follow-up question doesn\u2019t need repeated context.' },
  { q: 'What if I get stuck or something looks wrong?', a: 'Send "help" at any point in the chat, and a message will get routed to support.' },
]

function Overview() {
  const [activeSection, setActiveSection] = useState('overview')
  const [openFaq, setOpenFaq] = useState(0)
  const { navOpen, setNavOpen } = useOutletContext()
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) {
        sectionRefs.current[id] = el
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => setNavOpen(false) 

  return (
    <>
      <AnchorSidebar items={NAV_ITEMS} activeId={activeSection} open={navOpen} onLinkClick={handleNavClick}>
        <p>Runs entirely on WhatsApp.</p>
        <p>Built for medical students, by the people who sat the same exams.</p>
      </AnchorSidebar>

      <main className="content">
        <section id="overview" className="section section--hero">
          <PageHeader
            level={1}
            hero
            eyebrow="Study Buddy — Documentation"
            title="Your revision partner lives in WhatsApp."
            lede="No app to install, no dashboard to learn. Study Buddy answers questions, runs quizzes, builds flashcards, and pulls past exam questions — all in the same chat thread you already use every day."
          />

          <div className="transcript">
            <div className="transcript__header">
              <span>STUDY BUDDY — TRANSCRIPT</span>
              <span>PHARM / CPATH</span>
            </div>
            <div className="transcript__body">
              {TRANSCRIPT.map((m, i) => (
                <div key={i} className={`bubble bubble--${m.from}`}>
                  <span className="bubble__label">{m.from === 'user' ? 'You' : 'Study Buddy'}</span>
                  <p>{m.text}</p>
                </div>
              ))}
              <div className="cursor" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="getting-started" className="section">
          <PageHeader eyebrow="Getting started" title="Four messages to your first study session." />
          <div className="steps">
            {GETTING_STARTED.map((s) => (
              <div className="step" key={s.step}>
                <span className="step__number">{s.step}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="section">
          <PageHeader eyebrow="Features" title="Everything you'd want from a study app, none of the app." />
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <article className="feature-card" key={f.name}>
                <h3>{f.name}</h3>
                <p>{f.body}</p>
                <code>{f.example}</code>
              </article>
            ))}
          </div>
        </section>

        <section id="courses" className="section">
          <PageHeader eyebrow="Courses" title="Currently covering five courses." />
          <p className="section-note">
            "Pathology" spans two of these — Chemical Pathology and Morbid Anatomy — so Study Buddy will ask which one you mean if you don't specify.
          </p>
          <div className="course-grid">
            {COURSES.map((c) => (
              <div className="course-chip" key={c.code}>
                <span className="course-chip__code">{c.code}</span>
                <span className="course-chip__name">{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="commands" className="section">
          <PageHeader eyebrow="Commands" title="A quick reference." />
          <p className="section-note">
            You don't need exact phrasing — Study Buddy understands natural language. These are just the shortest way to ask.
          </p>
          <div className="command-table">
            {COMMANDS.map((c) => (
              <div className="command-row" key={c.cmd}>
                <code>{c.cmd}</code>
                <span>{c.does}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section">
          <PageHeader eyebrow="FAQ" title="Common questions." />
          <div className="faq">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={f.q}>
                  <button
                    className="faq-item__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <span className="faq-item__icon" aria-hidden="true" />
                  </button>
                  {isOpen && <p className="faq-item__answer">{f.a}</p>}
                </div>
              )
            })}
          </div>
        </section>

        <footer className="footer">
          <p>Stuck on something these docs don't cover?</p>
          <p>Send "help" to Study Buddy on WhatsApp and it'll route you to support.</p>
        </footer>
      </main>
    </>
  )
}

export default Overview