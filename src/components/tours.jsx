import Tour from "./tour";

function Tours({ tours }) {
  return (
    <div>
      <div>
        <h2 className='title'>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
