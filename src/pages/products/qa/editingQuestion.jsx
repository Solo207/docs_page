import './qa.css'
import AddImage, { PageNav } from '../../../components/AddImage.jsx'

function FollowUp() {
  return (
    <div className="product-page" id="follow-up-page">
      <h1 id="title">Following up on an answer</h1>
      <p className="lede">
        Picking up right where the confirmation loop leaves off: you've
        replied yes, your first answer has landed, and now the real
        studying starts. This page covers the two ways to keep going from
        there — typing another question, or using the built-in shortcuts.
      </p>

      <div className="callout">
        <p className="callout__title">Before you start</p>
        <p>
          This page assumes you're already past the ask-and-confirm loop —
          see Ask your first question and Correct metadata if you haven't
          gotten your first answer yet. Everything below picks up once
          ATLAS has already answered something and is waiting to see what
          you do next.
        </p>
      </div>

       <AddImage
        src="/preview.webp"
        alt="Answer"
        caption="First Answer"
        height={200}
      />

      <h2 id="overview">Overview</h2>
      <p>
        An answer from ATLAS isn't really the end of anything — it's the
        point where the conversation gets useful. Because ATLAS already
        knows the course, topic, and sub-topic your question was mapped
        to, and it remembers what it just told you, it doesn't need you to
        set any of that up again. You get to react to the answer the way
        you would with a classmate: "I don't get that part," "give me an
        example," "quiz me on this instead."
      </p>
      <p>
        There are two ways to do that, and you'll use both in the same
        session depending on what you need in the moment.
      </p>

      <div className="comparison">
        <div className="comparison__col">
          <p className="comparison__heading comparison__heading--bad">Type it</p>
          <p>
            A free-form follow-up message. Best when your confusion is
            specific — one part of the answer, one term, one mechanism —
            and you want ATLAS to go deeper on exactly that.
          </p>
        </div>
        <div className="comparison__col">
          <p className="comparison__heading comparison__heading--good">Choose an option</p>
          <p>
            A fixed menu ATLAS offers after most answers. Best when you
            already know what you want next — simplified, quizzed,
            flashcarded, or the source documents themselves.
          </p>
        </div>
      </div>

      <p>
        Neither one locks you out of the other. You can type three
        follow-ups in a row, then tap into the menu for a quiz on the same
        material, then go back to typing again. ATLAS doesn't treat any of
        that as starting over.
      </p>

      <h2 id="asking-a-follow-up">Asking a follow-up</h2>
      <p>
        Once an answer has come through, you can just keep talking. There's
        no command, no need to restate the course or topic, and no need to
        quote the previous answer back to ATLAS — it already has that
        context. Say what's still unclear the way you'd say it out loud.
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">
          "I don't get the long term compensation"
        </p>
        <p className="example__note">
          No mention of the course, the topic, or even the word "shock" —
          ATLAS already knows this is about hypovolemic shock from the
          answer it just gave.
        </p>
      </div>

      <p>
        Notice what that follow-up does well: it points at one specific
        piece of a longer answer rather than asking to hear the whole
        thing again. ATLAS had already covered both the immediate and the
        long-term compensation mechanisms for hypovolemic shock, and the
        follow-up narrows the request down to just the second half. That's
        the difference between a follow-up that saves you time and one
        that just triggers a repeat of the same explanation.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          "The body has several ways to compensate for long-term blood loss
          and maintain blood pressure."
        </p>
        <p className="example__note">
          Followed by the actual mechanisms — capillary fluid shift,
          erythropoiesis, the renin-angiotensin-aldosterone system — pulled
          back from the same lecture notes and reference material the
          original answer was grounded in, not a generic restatement.
        </p>
      </div>

       <AddImage
        src="/preview (1).webp"
        alt="Follow-up"
        caption="Follow-up question"
        height={200}
      />

      <p>
        That last point matters: a follow-up doesn't get a looser, less
        sourced answer just because it's the third message in a row. ATLAS
        re-checks the same curriculum material — in this case, going back
        to the specific lecture notes on blood pressure — so a follow-up
        three messages deep is just as grounded as the first answer was.
      </p>

      <p>
        You can chain as many of these as you need in one sitting. "What
        about the baroreceptor reflex instead?", "give me an example",
        "simplify that" — each one builds on the last, and none of them
        require you to re-explain what you're studying. The only thing
        worth doing on your end is being specific about which piece you
        want more on, the same way the example above named "the long term
        compensation" instead of just saying the answer was confusing.
      </p>

      <h2 id="choosing-an-option">Choosing an option</h2>
      <p>
        After most answers — including follow-up answers — ATLAS closes
        with a prompt instead of just going quiet. It's a signal that
        you've got a choice: keep typing, or pick one of a small set of
        fixed actions instead.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          "Your answer is ready! 🚀 If any part feels confusing, choose an
          option below or simply type your question."
        </p>
        <p className="example__note">
          Underneath it, a "Choose an Option" button opens a short menu
          instead of you having to remember what commands exist.
        </p>
      </div>

      <p>
        Tapping it opens a single-select list — you pick one, the menu
        closes, and ATLAS acts on it immediately. There are four options,
        and each one does something meaningfully different with the
        material you were just discussing:
      </p>

       <AddImage
        src="/preview (3).webp"
        alt="choosing an Option"
        caption="choosing an Option"
        height={200}
      />
      
      <div className="steps">
        <div className="steps__item">
          <span className="steps__number">1</span>
          <div>
            <p className="steps__title">Simplify the Explanation</p>
            <p>
              Rewrites the same answer in the simplest terms possible.
              Reach for this when the content was right but the language
              or level of detail was heavier than you needed.
            </p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">2</span>
          <div>
            <p className="steps__title">Generate Quiz</p>
            <p>
              Turns what you've just covered into quiz questions, so you
              can check whether it actually stuck instead of assuming it
              did because the explanation made sense while you read it.
            </p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">3</span>
          <div>
            <p className="steps__title">Generate Flashcards</p>
            <p>
              Same underlying material as the quiz option, but formatted
              as flashcards instead of questions — better suited to
              repeated, spaced review rather than a one-off check.
            </p>
          </div>
        </div>
        <div className="steps__item">
          <span className="steps__number">4</span>
          <div>
            <p className="steps__title">Send Documents</p>
            <p>
              Sends the actual source material ATLAS pulled the answer
              from — lecture notes, slides, or reference PDFs — so you can
              read the primary source yourself instead of relying only on
              the summary.
            </p>
          </div>
        </div>
      </div>

      <p>
        None of these require you to type anything, which is the whole
        point of the menu: it's there for the moments when you already
        know exactly what you want to do with an answer and don't want to
        phrase a request for it. If what you actually need is something
        more specific — one part clarified, one mechanism compared to
        another — typing a follow-up will usually get you there faster
        than trying to fit that into one of the four fixed options.
      </p>

      <p>
        And picking an option isn't a dead end either. You can simplify an
        explanation, then still ask a follow-up about the simplified
        version, then generate a quiz once you feel ready. ATLAS keeps
        following the thread through all of it.
      </p>

      <h2 id="tips">Tips</h2>

      <h3 id="be-specific-followup">Say what confused you, not just "I don't get it"</h3>
      <p>
        "I don't get the long term compensation" gets a targeted answer.
        "I don't get it" makes ATLAS guess which part of a multi-part
        answer you mean, and you'll usually end up re-reading the whole
        thing again before it narrows down.
      </p>

      <h3 id="one-at-a-time">One follow-up at a time</h3>
      <p>
        If you have two unrelated questions about the same answer, send
        them as two messages rather than one. It keeps each reply focused,
        and it's easier to bookmark or turn into a quiz question later if
        it isn't tangled up with something else.
      </p>

      <h3 id="use-the-menu-when-you-know">Use the menu when you already know what you want</h3>
      <p>
        If you're about to type "can you quiz me on this" or "send me the
        flashcards for this," stop — that's exactly what the menu is for.
        It's faster than typing the request out, and it does the same
        thing.
      </p>

      <PageNav
        previous={{ to: '/products/ask/question', label: 'Ask your first question' }}
        next={{ to: '/products/ask/quiz', label: 'Generate Quiz' }}
      />

    </div>
  )
}

const onPageItems = [
  { id: 'title', label: 'Following up on an answer' },
  { id: 'overview', label: 'Overview' },
  { id: 'asking-a-follow-up', label: 'Asking a follow-up' },
  { id: 'choosing-an-option', label: 'Choosing an option' },
  { id: 'tips', label: 'Tips' },
]

export const route = {
  path: 'follow-up',
  label: 'Follow up question',
  element: <FollowUp />,
  handle: { onPageItems },
}