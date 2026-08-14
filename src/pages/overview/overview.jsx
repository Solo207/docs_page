/*function Overview() {
  return (
    <div>
      <h1 id="getting-started">Getting started</h1>
      <p>Overview — content goes here.</p>

      <h2 id="features">Features</h2>
      <p>Features content goes here.</p>

      <h2 id="courses">Courses</h2>
      <p>Courses content goes here.</p>
    </div>
  )
}

const onPageItems = [
  { id: 'getting-started', label: 'Getting started' }, 
  { id: 'features', label: 'Features' },
  { id: 'courses', label: 'Courses' },
]

export const route = {
  label: 'Overview',
  element: <Overview />,
  handle: { onPageItems },
}*/

import './overview.css'

function Overview() {
  return (
    <div className="doc-page">
      <h1 id="getting-started">Getting started</h1>
      <p>
        ATLAS (also called "Study Buddy") is a WhatsApp-based AI study companion
        for medical students. There's no app to install — you message the bot
        like you'd message any contact, and it responds with explanations,
        practice questions, and study material tailored to your course.
      </p>
      <p>
        Register once with your academic details, then just start typing.
        ATLAS keeps track of your course, your progress, and your saved
        material across every conversation.
      </p>

      <h2 id="features">Features</h2>
      <ul>
        <li><strong>Q&amp;A</strong> — ask anything about your course material and get a direct, WhatsApp-friendly explanation.</li>
        <li><strong>Quiz &amp; flashcard generation</strong> — generate practice questions or flashcards on a topic or sub-topic.</li>
        <li><strong>Past questions (PQs)</strong> — retrieve and search past exam questions by course and topic.</li>
        <li><strong>Bookmarking</strong> — save any question, answer, or PQ to revisit later.</li>
        <li><strong>YouTube summarization</strong> — send a lecture video link and get a condensed summary.</li>
        <li><strong>Payments &amp; subscriptions</strong> — manage your plan directly in chat.</li>
      </ul>

      <h2 id="courses">Courses</h2>
      <p>ATLAS currently supports five courses:</p>
      <ul>
        <li>Pharmacology</li>
        <li>Chemical Pathology</li>
        <li>Morbid Anatomy</li>
        <li>Haematology</li>
        <li>Microbiology</li>
      </ul>
      <p>
        Note: "Pathology" on its own is a category, not a course — if you ask
        about it generally, ATLAS will ask you to pick Chemical Pathology or
        Morbid Anatomy specifically.
      </p>
    </div>
  )
}

const onPageItems = [
  { id: 'getting-started', label: 'Getting started' },
  { id: 'features', label: 'Features' },
  { id: 'courses', label: 'Courses' },
]

export const route = {
  label: 'Overview',
  element: <Overview />,
  handle: { onPageItems },
}