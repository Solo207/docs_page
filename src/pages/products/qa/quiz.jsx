import './qa.css'
import { PageNav } from '../../../components/AddImage.jsx'

function Quiz() {
  return (
    <div className="product-page" id="quiz-page">
      <h1 id="title">Generating a quiz</h1>
      <p className="lede">
        A quiz works the same way as any other question — it just carries
        a few extra parameters along with it. This page covers the whole
        run: asking for one, setting it up, confirming it, and taking it.
      </p>

      <div className="callout">
        <p className="callout__title">Before you start</p>
        <p>
          This assumes you're already familiar with the ask-and-confirm
          loop from Ask your first question — a quiz goes through the same
          course/topic mapping and the same yes-or-fix-it confirmation, on
          top of a few extra details specific to quizzes.
        </p>
      </div>

      <h2 id="overview">Overview</h2>
      <p>
        There are two ways into a quiz: you can tap Generate Quiz from the
        Choose an Option menu after an answer, or you can ask for one
        directly by naming a topic — you don't need to have asked a
        question about it first. Either way, the quiz that comes back
        isn't generic. It's built from the same curriculum mapping every
        other feature uses, so a quiz on "pharmacokinetics" pulls from the
        exact block and topic that phrase maps to in your course, not a
        broad guess at what pharmacokinetics might cover.
      </p>
      <p>
        The run from request to finished quiz has four parts: you start
        it, ATLAS confirms exactly what it's about to build, it hands you
        a link once the quiz is ready, and then you actually sit down and
        take it.
      </p>

      <h2 id="starting-a-quiz">Starting a quiz</h2>
      <p>
        Ask for a quiz the same way you'd ask ATLAS anything else — name
        the topic and say you want a quiz on it.
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">"Generate a quiz on pharmacokinetics"</p>
      </div>

      <p>
        Before it builds anything, ATLAS needs three numbers from you: how
        many questions, how hard they should be, and how long you'll have.
        It asks for all three in one message rather than one at a time.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          How many questions, what difficulty, and how much time? 🧠 Reply
          like: 10 Hard 30
          <br />
          <br />
          Difficulty: Easy, Medium, Hard
          <br />
          Time: minutes only, max 150. Don't want a timer? Type 0, or just
          leave the time out ⏱️
        </p>
      </div>

      <p>
        Reply with all three in that order — count, difficulty, time —
        separated by spaces, no extra formatting needed:
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">"40 Medium 50"</p>
        <p className="example__note">
          40 questions, Medium difficulty, 50-minute timer.
        </p>
      </div>

      <p>
        Difficulty only accepts Easy, Medium, or Hard — spelled out, not
        abbreviated. Time is always in minutes, capped at 150; if you'd
        rather not race a clock, type 0 for the time or just leave that
        part off your reply entirely, and the quiz will have no timer at
        all. There's no hard minimum or maximum on question count, but
        keep it realistic against however much time you're giving
        yourself — a 100-question quiz with a 10-minute timer isn't going
        to leave you time to actually think.
      </p>

      <h2 id="confirming-your-quiz">Confirming your quiz</h2>
      <p>
        Just like a regular question, ATLAS shows you exactly what it
        mapped before building anything — except this time the metadata
        includes your quiz settings alongside the course and topic.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          Here is what I mapped for your question 🔍
          <br />
          <br />
          Course: pharmacology
          <br />
          Block: first block
          <br />
          Topic: General Pharmacology Principles
          <br />
          Sub-topic: Pharmacokinetics (ADME)
          <br />
          Type: MCQ / Difficulty: Medium / Count: 40 / Time: 50 minutes
          <br />
          <br />
          All correct? I will fetch your answer the moment you confirm ✅
        </p>
        <p className="example__note">
          Reply <strong>Yes, go</strong> if everything's right, or{' '}
          <strong>Fix it</strong> to change anything — the topic, the
          block, or the quiz settings themselves.
        </p>
      </div>

      <p>
        This is the point to actually read through the mapping rather than
        reflexively confirming it. It's a lot easier to fix a wrong block
        or an overambitious question count here than to sit through a
        50-minute timer on a quiz that turned out to be the wrong topic.
        Once it looks right, reply <strong>yes</strong> and ATLAS starts
        building.
      </p>

      <h2 id="getting-your-quiz">Getting your quiz</h2>
      <p>
        Larger quizzes take a little while to put together — a 40-question
        set won't land the second you confirm, so don't worry if a few
        minutes pass in between. When it's ready, ATLAS sends a short
        heads-up followed by a link.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          YOUR QUIZ IS ON IT'S WAY 🔥🔥🔥
          <br />
          <br />
          Click the button below to visit our page 👆
        </p>
        <p className="example__note">
          Tapping <strong>Visit Now</strong> opens the quiz in your
          browser — no login or extra setup needed, it's tied to the
          request you just confirmed.
        </p>
      </div>

      <h2 id="submitting">Submitting</h2>
      <p>
        The quiz itself opens as a simple one-question-at-a-time page:
        topic and timer up top, the question and its four options in the
        middle, and navigation below.
      </p>

      <div className="example">
        <p className="example__label">What the quiz page looks like</p>
        <p className="example__msg">
          Pharmacokinetics (ADME) · Question 1 of 40 · 49:27 remaining
        </p>
        <p style={{ margin: '0 0 0.75rem' }}>
          What is the primary driving force for the movement of a drug
          from the plasma to the tissues during distribution?
        </p>
        <div className="steps">
          <div className="steps__item">
            <span className="steps__number">A</span>
            <div><p>Active transport via tissue-specific transporters</p></div>
          </div>
          <div className="steps__item">
            <span className="steps__number">B</span>
            <div><p>The concentration gradient between plasma and tissues</p></div>
          </div>
          <div className="steps__item">
            <span className="steps__number">C</span>
            <div><p>High blood flow to peripheral compartments</p></div>
          </div>
          <div className="steps__item">
            <span className="steps__number">D</span>
            <div><p>Ionization of the drug molecule</p></div>
          </div>
        </div>
        <p className="example__note">
          Prev and Next move between questions one at a time; All Questions
          jumps straight to any question on the list.
        </p>
      </div>

      <p>
        If you set a timer when you started the quiz, it counts down at
        the top of the page for the whole attempt. If you left the time
        out or typed 0, there's no timer at all — this section of the
        header simply won't be there, and you can take as long as you
        need on each question.
      </p>
      <p>
        Work through the questions in order with Next, or jump around
        freely with All Questions if you'd rather answer the ones you're
        confident about first. Once you've been through everything,
        submit the quiz to see your results and go back over what you got
        wrong.
      </p>

      <h2 id="tips">Tips</h2>

      <h3 id="match-count-to-time">Match the count to the time you're giving yourself</h3>
      <p>
        40 questions in 50 minutes is roughly a minute and a quarter each
        — fine for MCQs you've studied, tight if the topic is new. Scale
        the count down, or the time up, rather than finding out mid-quiz
        that you're rushing.
      </p>

      <h3 id="timer-vs-no-timer">Use the timer for practice, skip it for review</h3>
      <p>
        A timed quiz is closer to exam conditions and worth doing once
        you're reasonably confident in a topic. Leaving the time out is
        better for a first pass through new material, where the point is
        working through it carefully rather than racing a clock.
      </p>

      <h3 id="name-the-subtopic">Name the exact sub-topic, not just the course</h3>
      <p>
        "Generate a quiz on pharmacology" maps to a much broader slice of
        the curriculum than "generate a quiz on pharmacokinetics." The
        more specific the topic in your request, the more focused the
        resulting questions will be.
      </p>

      <PageNav
        previous={{ to: '/products/ask/follow-up', label: 'Follow up question' }}
        next={{ to: '/products/ask/flashcards', label: 'Generating flashcards' }}
      />

    </div>
  )
}

const onPageItems = [
  { id: 'title', label: 'Generating a quiz' },
  { id: 'overview', label: 'Overview' },
  { id: 'starting-a-quiz', label: 'Starting a quiz' },
  { id: 'confirming-your-quiz', label: 'Confirming your quiz' },
  { id: 'getting-your-quiz', label: 'Getting your quiz' },
  { id: 'submitting', label: 'Submitting' },
  { id: 'tips', label: 'Tips' },
]

export const route = {
  path: 'quiz',
  label: 'Generating quiz',
  element: <Quiz />,
  handle: { onPageItems },
}
