function Overview() {
  return (
    <div>
      <h1 id="getting-started">Getting started</h1>
      <p>Overview — content goes here.</p>

      <h2 id="features">Features</h2>
      <p>Features content goes here.</p>

      <h2 id="courses">Courses</h2>
      <p>Courses content goes here.</p>
    </div>
  )
}

const onPageItems = [
  { id: 'getting-started', label: 'Getting started' },
  { id: 'features', label: 'Features' },
  { id: 'courses', label: 'Courses' },
]

export const route = {
  label: 'Overview',
  element: <Overview />,
  handle: { onPageItems },
}