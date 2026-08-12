import { Outlet, useOutlet } from 'react-router-dom'
import { route as typingQuestionRoute } from './typingQuestion.jsx'
import { route as editingQuestionRoute } from './editingQuestion.jsx'

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

const children = [typingQuestionRoute, editingQuestionRoute]

export const route = {
  path: 'qa',
  label: 'Q&A',
  element: <QAOverview />,
  handle: { navItems: children },
  children,
}