/*import { Outlet, useOutlet } from 'react-router-dom'
import { route as qaRoute } from './qa/qa.jsx'
import {route as ytRoute } from './youTube/youtube.jsx'
import {route as pqRoute} from './pastQuestion/pq.jsx'

function ProductsOverview() { 
  const outlet = useOutlet()

  return ( 
    <div>
      {!outlet && (
        <>
          <h1>Products</h1>
          <p>Pick a feature from the menu.</p>
        </>
      )}
      <Outlet />
    </div>
  )
}

const children = [qaRoute, ytRoute, pqRoute]

export const route = {
  path: 'products',
  label: 'Products',
  element: <ProductsOverview />,
  handle: { navItems: children },
  children,
}*/

import { Outlet, useOutlet } from 'react-router-dom'
import { route as qaRoute } from './qa/qa.jsx'
import { route as ytRoute } from './youTube/youtube.jsx'
import { route as pqRoute } from './pastQuestion/pq.jsx'
import './products.css'

function ProductsOverview() {
  const outlet = useOutlet()

  return (
    <div>
      {!outlet && (
        <div className="products-overview__hero">
          <p className="products-overview__eyebrow">ATLAS Products</p>
          <h1>Everything ATLAS can do for you</h1>
          <p className="products-overview__lede">
            ATLAS isn't a set of tools you have to learn — it's a
            conversation that happens to be very good at studying with you.
            Ask a question, drop a lecture video, or dig up an old past
            paper, and ATLAS meets you where you are. Here's what lives
            under the hood.
          </p>

          <h2 id="feature-grid">The three ways in</h2>
          <div className="products-overview__grid">
            <div className="products-overview__card">
              <span className="products-overview__card-icon">💬</span>
              <p className="products-overview__card-tagline">Ask and Explain</p>
              <h3 className="products-overview__card-title">Your question, answered properly</h3>
              <p className="products-overview__card-desc">
                Type a question the way you'd text a classmate. ATLAS
                checks it against your curriculum before answering, so
                you're never getting an explanation pulled from the wrong
                course.
              </p>
              <ul className="products-overview__card-list">
                <li>Confirms the topic before answering</li>
                <li>Follow-ups without repeating context</li>
                <li>Simplify, quiz, flashcard, or reference — right from the answer</li>
              </ul>
            </div>

            <div className="products-overview__card">
              <span className="products-overview__card-icon">🎥</span>
              <p className="products-overview__card-tagline">YouTube</p>
              <h3 className="products-overview__card-title">Turn a lecture video into study material</h3>
              <p className="products-overview__card-desc">
                Paste a YouTube link and ATLAS distills it into a proper
                summary — then offers to turn what it just watched into
                something you can actually revise from.
              </p>
              <ul className="products-overview__card-list">
                <li>Clean summary of the video's content</li>
                <li>Quiz generated straight from what was covered</li>
                <li>Flashcards built the same way</li>
              </ul>
            </div>

            <div className="products-overview__card">
              <span className="products-overview__card-icon">🔖</span>
              <p className="products-overview__card-tagline">Past Questions & Bookmarks</p>
              <h3 className="products-overview__card-title">Everything you've saved, in one place</h3>
              <p className="products-overview__card-desc">
                Pull up past exam questions by course, or come back to
                anything you've bookmarked along the way. No screenshots,
                no scrolling through old chats.
              </p>
              <ul className="products-overview__card-list">
                <li>Browse and pick past questions by topic</li>
                <li>Upload your own past questions to the store</li>
                <li>Bookmark, revisit, and delete freely</li>
              </ul>
            </div>
          </div>

          <div className="products-overview__weave">
            <h2 id="ties-together">It's one conversation, not three tools</h2>
            <p>
              The real trick isn't any single feature — it's that they hand
              off to each other. An answer isn't a dead end; it's a
              starting point.
            </p>
            <div className="products-overview__weave-flow">
              <span className="products-overview__weave-node">Ask a question</span>
              <span className="products-overview__weave-arrow">→</span>
              <span className="products-overview__weave-node">Get an answer</span>
              <span className="products-overview__weave-arrow">→</span>
              <span className="products-overview__weave-node">Quiz yourself on it</span>
              <span className="products-overview__weave-arrow">→</span>
              <span className="products-overview__weave-node">Bookmark it for later</span>
            </div>
          </div>

          <p className="products-overview__closing">
            Pick a feature from the menu to see exactly how each one
            works — or just start typing. That's usually faster.
          </p>
        </div>
      )}
      <Outlet />
    </div>
  )
}

const children = [qaRoute, ytRoute, pqRoute]

const onPageItems = [
  { id: 'feature-grid', label: 'The three ways in' },
  { id: 'ties-together', label: 'How it ties together' },
]

export const route = {
  path: 'products',
  label: 'Products',
  element: <ProductsOverview />,
  handle: { navItems: children, onPageItems },
  children,
}