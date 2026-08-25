import { Outlet, useOutlet } from 'react-router-dom'
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
}