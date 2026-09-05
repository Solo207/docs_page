import './qa.css'
import AddImage, { PageNav } from '../../../components/AddImage.jsx'

function Flashcard() {
  return (
    <div className="product-page" id="flashcard-page">
      <h1 id="title">Generating flashcards</h1>
      <p className="lede">
        Flashcards run through almost the same loop as a quiz — ask,
        confirm, receive. Where the two actually differ is worth paying
        attention to, since it changes what you do once they arrive.
      </p>

      <div className="callout">
        <p className="callout__title">Before you start</p>
        <p>
          This page assumes you've already been through Generating a quiz
          — the mapping and confirmation steps here work the same way, so
          this page focuses mainly on what's different rather than
          repeating the basics.
        </p>
      </div>

      <h2 id="overview">Overview</h2>
      <p>
        Just like a quiz, you can reach flashcards either by tapping
        Generate Flashcards from the Choose an Option menu after an
        answer, or by asking for a set directly by topic. The request maps
        to your curriculum the exact same way — course, topic, sub-topic —
        so a set on "ketogenesis" is built from that specific sub-topic,
        not the whole of biochemistry.
      </p>
      <p>
        Two things set flashcards apart from a quiz. First, there's no
        question type or timer to set — a flashcard set only carries a
        difficulty and a count, and if you don't specify either, ATLAS
        fills in sensible defaults rather than stopping to ask. Second, the
        end result isn't a page you visit and take there and then — it's
        an actual file that lands in your WhatsApp chat, ready to study
        whenever you get to it.
      </p>

      <h2 id="starting-a-set">Starting a set of flashcards</h2>
      <p>
        Ask the same way you would for a quiz — name the topic and say you
        want flashcards on it.
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">"Generate flashcards on ketogenesis"</p>
      </div>

      <p>
        You can include a difficulty and a count in that same message if
        you already know what you want. If you don't, ATLAS won't stop to
        ask — it fills in a default (Medium difficulty, 10 cards) and
        shows you the mapping right away, same as it would if you'd
        specified those numbers yourself. Either path lands you at the
        same confirmation step next.
      </p>

      <h2 id="confirming-your-flashcards">Confirming your flashcards</h2>
      <p>
        The metadata message looks like the one you'd see for a quiz,
        minus the fields that don't apply — no question type, no timer,
        just the course mapping plus difficulty and count.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          Here is what I mapped for your question 🔍
          <br />
          <br />
          Course: biochemistry
          <br />
          Semester: second semester
          <br />
          Topic: Metabolism of lipids
          <br />
          Sub-topic: ketogenesis
          <br />
          Difficulty: Medium
          <br />
          Count: 10
          <br />
          <br />
          All correct? I will fetch your answer the moment you confirm ✅
        </p>
        <p className="example__note">
          Reply <strong>Yes, go</strong> to confirm, or <strong>Fix it</strong> to
          change anything before it builds.
        </p>
      </div>

      <AddImage
        src="/4.jpg"
        alt="Flashcard flow"
        caption="Flashcard Flow"
        height={200}
      />

      <p>
        Fixing something doesn't mean writing the whole request over. Tap{' '}
        <strong>Fix it</strong> and send just the value you want changed —
        ATLAS updates that one field and re-sends the mapping so you can
        check it again.
      </p>

      <div className="example">
        <p className="example__label">You send</p>
        <p className="example__msg">"50"</p>
        <p className="example__note">
          Just the new count — ATLAS knows this refers to the field you
          just asked to fix, not a new request.
        </p>
      </div>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          Here is what I mapped for your question 🔍
          <br />
          <br />
          Course: biochemistry
          <br />
          Semester: second semester
          <br />
          Topic: Metabolism of lipids
          <br />
          Sub-topic: ketogenesis
          <br />
          Difficulty: Medium
          <br />
          Count: 50
          <br />
          <br />
          All correct? I will fetch your answer the moment you confirm ✅
        </p>
        <p className="example__note">
          Everything else stayed the same — only the count updated. Reply{' '}
          <strong>yes</strong> once it looks right.
        </p>
      </div>

       <AddImage
        src="/3.jpg"
        alt="Flashcard flow"
        caption="Flashcard Flow"
        height={200}
      />


      <h2 id="getting-your-flashcards">Getting your flashcards</h2>
      <p>
        Once you confirm, ATLAS builds the set and sends it to you two
        ways at once — a download link, and the file itself, straight into
        the chat.
      </p>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          YOUR FLASHCARD IS ON IT'S WAY 🔥🔥🔥
          <br />
          <br />
          TAP THE LINK BELOW 👇 TO DOWNLOAD YOUR FLASHCARD, LINK EXPIRES IN
          30S
        </p>
        <p className="example__note">
          The 30-second window is real — if you're not ready to tap{' '}
          <strong>Visit Now</strong> the moment this arrives, don't worry
          about chasing it.
        </p>
      </div>

      <div className="example">
        <p className="example__label">ATLAS sends</p>
        <p className="example__msg">
          I've sent 50 flashcards on ketogenesis to your WhatsApp! 🃏 Go
          check them out and let me know when you're ready for more. 😊
        </p>
        <p className="example__note">
          This is the message that actually matters if you miss the link —
          the set is sitting in your chat as a file either way.
        </p>
      </div>

      <h2 id="studying-your-flashcards">Studying your flashcards</h2>
      <p>
        There's no page to visit and no timer running — the file that
        lands in your chat is an Anki deck (.apkg). If you already use
        Anki, importing it is a couple of taps. If you don't, installing
        the free Anki app first is the easiest way to actually study the
        set instead of it just sitting in your downloads.
      </p>
      <p>
        Once it's imported, you study it the way you'd study any Anki
        deck — at your own pace, reviewing cards as many times as you
        need. There's no submission step and nothing to send back to
        ATLAS. The "let me know when you're ready for more" line is a
        genuine invitation — ask for another batch, on the same sub-topic
        or a different one, whenever you finish this one.
      </p>

       <AddImage
        src="/2.jpg"
        alt="Flashcard flow"
        caption="Flashcard Flow"
        height={200}
      />


      <h2 id="tips">Tips</h2>

      <h3 id="grab-the-link-fast">Grab the link fast, but don't stress if you miss it</h3>
      <p>
        The download link expires in 30 seconds, which is easy to miss if
        you're not already looking at your phone. That's fine — the same
        set is already sitting in the chat as a file, so nothing is
        actually lost if the link times out.
      </p>

      <h3 id="skip-the-upfront-numbers">You don't need to specify count or difficulty upfront</h3>
      <p>
        Unlike a quiz, flashcards don't stop to interrogate you for
        details. Ask for a topic, let the defaults through, and use{' '}
        <strong>Fix it</strong> if the count or difficulty isn't what you
        wanted — it's usually faster than trying to phrase everything in
        the first message.
      </p>

      <h3 id="install-anki-first">Install Anki before you need it</h3>
      <p>
        A .apkg file does nothing on its own without an app that reads it.
        Get Anki installed ahead of your first request so the deck is
        actually usable the moment it lands, instead of a file you have to
        come back to later.
      </p>

      <PageNav
        previous={{ to: '/products/ask/quiz', label: 'Generating quiz' }}
        next={{ to: '/products/youtube', label: 'Video Summary' }}
      />

    </div>
  )
}

const onPageItems = [
  { id: 'title', label: 'Generating flashcards' },
  { id: 'overview', label: 'Overview' },
  { id: 'starting-a-set', label: 'Starting a set of flashcards' },
  { id: 'confirming-your-flashcards', label: 'Confirming your flashcards' },
  { id: 'getting-your-flashcards', label: 'Getting your flashcards' },
  { id: 'studying-your-flashcards', label: 'Studying your flashcards' },
  { id: 'tips', label: 'Tips' },
]

export const route = {
  path: 'flashcards',
  label: 'Generating flashcards',
  element: <Flashcard />,
  handle: { onPageItems },
}