import "./tour.css";

function Tour({ name, info, image, price }) {
  function excerpt(text, length = 150) {
    return text.length > length ? text.slice(0, length) + "..." : text;
  }
  return (
    <div className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{excerpt(info)}</p>
        <button type='button' className='info-btn'>
          Read more
        </button>
        <button type='button' className='btn delete-btn btn-block'>
          Not interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
