import { useState } from "react";
import "./tour.css";

function excerpt(text, length = 150) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}

function Tour({ id, name, info, image, price, removeTour }) {
  const [showExcerpt, setShowExcerpt] = useState(true);

  function toggleExcerpt() {
    setShowExcerpt((prevShowExcerpt) => !prevShowExcerpt);
  }
  return (
    <article className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{showExcerpt ? excerpt(info) : info}</p>
        <button
          type='button'
          className='info-btn'
          onClick={() => toggleExcerpt()}
        >
          {showExcerpt ? "Read more" : "Show less"}
        </button>
        <button
          type='button'
          className='btn delete-btn btn-block'
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
