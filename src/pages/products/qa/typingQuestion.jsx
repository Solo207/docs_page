import './qa.css'
import AddImage, { PageNav } from '../../../components/AddImage.jsx'

function TypingQuestion() {
  return (
    <div className="product-page" id="typing-question-page">
      <h1 id="title">Asking your first question</h1>
      <p className="lede">
        The core of ATLAS is simple: you type a question, and it answers —
        no menus, no commands, no special syntax. This page walks through
        the whole loop, from the message you send to the answer you get
        back.
      </p>

      <div className="callout">
        <p className="callout__title">Before you start</p>
        <p>
          This page assumes you've already been onboarded on WhatsApp and
          picked your active courses. If that hasn't happened yet, start
          with Getting Started — everything below assumes ATLAS already
          knows which courses you're studying.
        </p>
      </div>

      <h2 id="overview">Overview</h2>
      <p>
        Ask and Explain is the interaction almost everything else in ATLAS
        eventually routes through — a YouTube summary or a past question
        both lead back here the moment you start asking about what's in
        them. The loop itself is short: you ask, ATLAS tells you where it
        thinks the question belongs, you confirm or correct that, and then
        you get your answer.
      </p>

      <div className="steps">
        <div className="steps__item">
          <span className="steps__number">1</span>
          <div>
            <p className="steps__title">Ask</p>
            <p>You send your question as a normal message.</p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">2</span>
          <div>
            <p className="steps__title">Metadata</p>
            <p>ATLAS replies with the course and topic it mapped you to.</p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">3</span>
          <div>
            <p className="steps__title">Confirm or correct</p>
            <p>You reply yes, or tell it where the question actually belongs.</p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">4</span>
          <div>
            <p className="steps__title">Result</p>
            <p>Your answer arrives, grounded in the right curriculum.</p>
          </div>
        </div>
      </div>

      <h2 id="ask-your-first-question">Ask your first question</h2>
      <p>
        Type it fresh or paste it in from a textbook, slide, or past
        question — both work the same way, you can also upload images and voice notes. ATLAS reads the message and
        starts mapping it against the curriculum for your active courses
        before it does anything else.
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">
          "What's the mechanism of action of ACE inhibitors?"
        </p>
        <p className="example__note">
          Specific and names the drug class — easy for ATLAS to place.
        </p>
      </div>

       <AddImage
        src="/Compress_20260905_034920_0425~2.jpg"
        alt="Ask your question"
        caption="Asking question"
        height={170}
      />

      <h2 id="send-metadata">Send metadata</h2>
      <p>
        Before it answers anything, ATLAS sends back where it thinks your
        question belongs — course, topic, and sub-topic — so you can see
        exactly what it's about to answer from.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          Course: Pharmacology
          <br />
          Topic: Cardiovascular Drugs
          <br />
          Sub-topic: ACE Inhibitors
        </p>
        <p className="example__note">
          Reply <strong>yes</strong> if this looks right, or tell it the
          correct course or topic if it doesn't.
        </p>
      </div>

      <p>
        Some subjects overlap — "Pathology" on its own isn't a course,
        it's an umbrella covering both <strong>Chemical Pathology</strong>{' '}
        and <strong>Morbid Anatomy</strong>. If your question could belong
        to either, the metadata message will ask you to pick one instead
        of guessing.
      </p>

      <h2 id="correct-metadata">Correct metadata</h2>
      <p>
        If the mapping is wrong, say so and give the right course or
        topic — ATLAS re-maps the question and shows you the corrected
        metadata rather than answering from the wrong curriculum.
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">
          "No, this is Chem Path, not Pharmacology"
        </p>
        <p className="example__note">
          ATLAS updates the mapping and sends the corrected metadata back
          for you to confirm.
        </p>
      </div>

      <p>
        Once the metadata is right — whether it was correct the first time
        or you just fixed it — reply <strong>yes</strong>. That's the only
        confirmation ATLAS needs.
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">"Yes"</p>
        <p className="example__note">
          Your answer arrives right after — no extra steps.
        </p>
      </div>

      <p>
        The result is formatted for WhatsApp: short paragraphs, bolded key
        terms, and bullet points where they help, rather than a dense wall
        of text.
      </p>

      <AddImage
        src="/Screenshot_2026-09-05-03-57-56-335_com.whatsapp.w4b~2.jpg"
        alt="Correct Metadata"
        caption="Correct Metadata"
        height={200}
      />

      <h2 id="tips">Tips</h2>

      <h3 id="be-specific">Be specific about the topic</h3>
      <p>
        The more precise your question, the more precise the answer.
        "Explain anaemia" gets you a broad overview; "What's the
        difference between microcytic and macrocytic anaemia?" gets you
        the exact comparison you actually need before an exam.
      </p>

      <h3 id="long-questions">Breaking up long or multi-part questions</h3>
      <p>
        If you're pasting a question with several parts (a) b) c) from a
        past paper, it's usually clearer to send one part at a time. ATLAS
        can handle multi-part messages, but answers stay tighter and
        easier to study from when each part gets its own reply.
      </p>

      <h3 id="follow-ups">Following up</h3>
      <p>
        You don't need to repeat context or go through metadata again on
        a follow-up. "Simplify that" or "give me an example" after an
        answer builds on what was just discussed rather than starting
        over.
      </p>

      <PageNav
        previous={{ to: '/products/ask', label: 'Ask and Explain' }}
        next={{ to: '/products/ask/follow-up', label: 'Follow up question' }}
      />

    </div>
  )
}

const onPageItems = [
  { id: 'title', label: 'Asking your first question' },
  { id: 'overview', label: 'Overview' },
  { id: 'ask-your-first-question', label: 'Ask your first question' },
  { id: 'send-metadata', label: 'Send metadata' },
  { id: 'correct-metadata', label: 'Correct metadata' },
  { id: 'tips', label: 'Tips' },
]

export const route = {
  path: 'question',
  label: 'Ask your first question',
  element: <TypingQuestion />,
  handle: { onPageItems },
}