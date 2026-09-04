/*import { Outlet, useOutlet } from 'react-router-dom'
import { route as typingQuestionRoute } from './typingQuestion.jsx'
import { route as editingQuestionRoute } from './editingQuestion.jsx'
import {route as follow} from './follow.jsx'
import { route as document } from './document.jsx'

function QAOverview() { 
  const outlet = useOutlet() 

  return (
    <div>
      {!outlet && (
        <>
          <h2>Q&A</h2>
          <p>Pick a topic from the menu.</p>
        </>
      )}
      <Outlet />
    </div>
  )
}

const children = [typingQuestionRoute, editingQuestionRoute, follow, document]

export const route = {
  path: 'ask',
  label: 'Ask and Explain',
  element: <QAOverview />,
  handle: { navItems: children },
  children,
}*/

import { Outlet, useOutlet } from 'react-router-dom'
import { PageNav } from '../../../components/AddImage.jsx'
import { route as typingQuestionRoute } from './typingQuestion.jsx'
import { route as editingQuestionRoute } from './editingQuestion.jsx'
import { route as follow } from './follow.jsx'
import { route as quiz } from './quiz.jsx'
import { route as document } from './document.jsx'
import './../products.css'

function QAOverview() {
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
        <div className="ask-overview__intro">
          <h1>Ask and Explain</h1>
          <p className="ask-overview__lede">
            This is the core of ATLAS: ask a question, get a direct answer,
            grounded in your curriculum. There's no menu to dig through —
            you can start here from anywhere in a conversation.
          </p>

          <h2 id="whats-covered">What's covered in this section</h2>
          <p>
            Every answer moves through the same pipeline: your question is
            checked against the curriculum, you confirm or correct where
            it landed, and only then does ATLAS answer. These pages walk
            through each part of that.
          </p>

          <div className="ask-overview__subtopics">
            <div className="ask-overview__subtopic">
              <span className="ask-overview__subtopic-number">1</span>
              <div>
                <p className="ask-overview__subtopic-title">Typing or pasting your question</p>
                <p className="ask-overview__subtopic-desc">
                  How to phrase a question — specific vs. vague — to get the
                  most precise answer back.
                </p>
              </div>
            </div>
            <div className="ask-overview__subtopic">
              <span className="ask-overview__subtopic-number">2</span>
              <div>
                <p className="ask-overview__subtopic-title">Editing the mapped topic</p>
                <p className="ask-overview__subtopic-desc">
                  What happens when ATLAS gets the course or topic wrong,
                  and how to correct it before it answers.
                </p>
              </div>
            </div>
            <div className="ask-overview__subtopic">
              <span className="ask-overview__subtopic-number">3</span>
              <div>
                <p className="ask-overview__subtopic-title">Following up</p>
                <p className="ask-overview__subtopic-desc">
                  Building on an answer — asking for more, or going deeper —
                  without repeating context.
                </p>
              </div>
            </div>
            <div className="ask-overview__subtopic">
              <span className="ask-overview__subtopic-number">4</span>
              <div>
                <p className="ask-overview__subtopic-title">Getting reference documents</p>
                <p className="ask-overview__subtopic-desc">
                  Pulling reading material and sources tied to an answer.
                </p>
              </div>
            </div>
          </div>

          <h2 id="also-from-an-answer">Also available from any answer</h2>
          <p>
            A couple of things you can ask for mid-conversation that don't
            have their own page yet:
          </p>
          <ul className="ask-overview__quick-actions">
            <li>Simplify the explanation (ELI5)</li>
            <li>Turn it into a quiz</li>
            <li>Turn it into flashcards</li>
          </ul>
        </div>
      )}
      <Outlet />
     {!outlet && (
     <PageNav
        previous={{ to: '/products', label: 'Products page' }}
        next={{ to: '/products/ask/question', label: 'Ask your first question' }}
      />
      )}
    </div>
  )
}

const children = [typingQuestionRoute, editingQuestionRoute, follow, quiz, document]

const onPageItems = [
  { id: 'whats-covered', label: "What's covered" },
  { id: 'also-from-an-answer', label: 'Also from any answer' },
]

export const route = {
  path: 'ask',
  label: 'Ask and Explain',
  element: <QAOverview />,
  handle: { navItems: children, onPageItems },
  children,
}