import '../products.css'
import AddImage, { PageNav } from '../../../components/AddImage.jsx'

function TypingQuestion() {
  return (
    <div className="product-page">
      <h1>Typing or pasting your question</h1>
      <p className="lede">
        The core of ATLAS is simple: you type a question, and it answers —
        no menus, no commands, no special syntax. This page covers how to
        get the best answers out of it.
      </p>

      <h2 id="how-it-works">How it works</h2>
      <p>
        Send your question as a normal WhatsApp message, exactly like you'd
        text a classmate. ATLAS reads the message, figures out which course
        and topic it belongs to, and replies with an explanation formatted
        for WhatsApp — short paragraphs, bolded key terms, and bullet points
        where it helps, rather than a dense wall of text.
      </p>

      <div className="steps">
        <div className="steps__item">
          <span className="steps__number">1</span>
          <div>
            <p className="steps__title">Type or paste your question</p>
            <p>
              You can type it fresh or paste it in from a textbook, slide,
              or past question. Both work the same way.
            </p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">2</span>
          <div>
            <p className="steps__title">ATLAS identifies the course and topic</p>
            <p>
              It maps your question against the curriculum for your active
              courses — Pharmacology, Chemical Pathology, Morbid Anatomy,
              Haematology, and Microbiology — to ground the answer in the
              right context.
            </p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">3</span>
          <div>
            <p className="steps__title">You get a direct answer</p>
            <p>
              No follow-up questions unless something's genuinely ambiguous.
              You can immediately ask a follow-up, request a simpler
              explanation, or ask for a related quiz question.
            </p>
          </div>
        </div>
      </div>

      <div className="example">
        <p className="example__label">Example</p>
        <p className="example__msg">
          "What's the mechanism of action of ACE inhibitors?"
        </p>
        <p className="example__note">
          Specific, names the drug class, and clearly belongs to one course —
          ATLAS answers immediately.
        </p>
      </div>

      <AddImage
  src="/IMG-20260625-WA003.png"
  alt="ACE inhibitor mechanism of action"
  caption="Fig 1. ACE inhibitor pathway"
  height={200}
/>

      <h2 id="tips">Tips</h2>

      <h3 id="be-specific">Be specific about the topic</h3>
      <p>
        The more precise your question, the more precise the answer. "Explain
        anaemia" gets you a broad overview; "What's the difference between
        microcytic and macrocytic anaemia?" gets you the exact comparison
        you actually need before an exam.
      </p>

      <h3 id="ambiguous-subtopics">If your course has ambiguous sub-topics</h3>
      <p>
        Some subjects overlap. "Pathology" on its own isn't a course — it's
        an umbrella covering both <strong>Chemical Pathology</strong> and{' '}
        <strong>Morbid Anatomy</strong>. If your question could belong to
        either, ATLAS will ask you to pick one rather than guessing, so the
        answer isn't pulled from the wrong curriculum.
      </p>

      <div className="comparison">
        <div className="comparison__col">
          <p className="comparison__heading comparison__heading--bad">Vague</p>
          <p>"Tell me about enzymes"</p>
        </div>
        <div className="comparison__col">
          <p className="comparison__heading comparison__heading--good">Specific</p>
          <p>"What's the role of cardiac troponin in a Chem Path exam context?"</p>
        </div>
      </div>

      <h3 id="long-questions">Breaking up long or multi-part questions</h3>
      <p>
        If you're pasting a question with several parts (a) b) c) from a past
        paper, it's usually clearer to send one part at a time. ATLAS can
        handle multi-part messages, but answers stay tighter and easier to
        study from when each part gets its own reply.
      </p>

      <h3 id="follow-ups">Following up</h3>
      <p>
        You don't need to repeat context on a follow-up. "Simplify that" or
        "give me an example" after an answer will build on what was just
        discussed rather than starting over.
      </p>

      <div className="callout">
        <p className="callout__title">Good to know</p>
        <p>
          Every answer can be bookmarked, turned into a quiz question, or
          pulled from later — you don't need to screenshot anything to save
          it for revision.
        </p>
      </div>

      <PageNav
        previous={{ to: '/products/ask', label: 'Ask and Explain' }}
        next={{ to: '/products/ask/follow-up', label: 'Follow up question' }}
      />

    </div>
  )
}

const onPageItems = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'tips', label: 'Tips' },
  { id: 'be-specific', label: 'Be specific' },
  { id: 'ambiguous-subtopics', label: 'Ambiguous sub-topics' },
  { id: 'long-questions', label: 'Long questions' },
  { id: 'follow-ups', label: 'Following up' },
]

export const route = {
  path: 'new-question',
  label: 'New question',
  element: <TypingQuestion />,
  handle: { onPageItems },
}