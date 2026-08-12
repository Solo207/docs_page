function TypingQuestion() {
  return (
    <div>
      <h2 id="how-it-works">How it works</h2>
      <p>Send your question as a normal WhatsApp message...</p>

      <h2 id="tips">Tips</h2>
      <p>If your course has ambiguous sub-topics...</p>
    </div>
  )
}

const onPageItems = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'tips', label: 'Tips' },
]

export const route = {
  path: 'typing-question',
  label: 'Typing or pasting your question',
  element: <TypingQuestion />,
  handle: { onPageItems },
}