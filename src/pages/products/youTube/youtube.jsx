import { Outlet, useOutlet } from 'react-router-dom'
import { route as summary } from './summary.jsx'
import { route as simplify} from './simplify.jsx'
import { route as quiz} from './quiz.jsx'
import { route as flashcard} from './flashcards.jsx'

function YTOverview() { 
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

const children = [summary, simplify, quiz, flashcard]

export const route = {
  path: 'youtube',
  label: 'YouTube Summary',
  element: <YTOverview />,
  handle: { navItems: children },
  children,
}