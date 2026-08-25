// AddImage.jsx
import './../Layout.css'

function AddImage({ src, alt = '', caption, height = 320 }) {
  return (
    <figure className="add-image">
      <div className="add-image__frame" style={{ height }}>
        <img src={src} alt={alt} className="add-image__img" />
      </div>
      {caption && <figcaption className="add-image__caption">{caption}</figcaption>}
    </figure>
  )
}

export default AddImage