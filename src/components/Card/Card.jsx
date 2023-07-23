/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({ images }) => {
  return (
    <>
      {images.map((img) => (
        <figure key={img.id} className="card">
          <img
            srcSet={`${img.urls.thumb} 200w, ${img.urls.small} 400w, ${img.urls.regular} 1080w`}
            sizes="(max-width: 400px) 200px, (max-width: 1080px) 400px, 1080px"
            src={img.urls.small}
            alt={img.alt_description}
            loading="lazy"
          />
          <div className="card-overlay"></div>
          <div className="card-details">
            <h4>{img.description}</h4>
            <p>Author: {img.user.name}</p>
            <p>Likes: {img.likes}</p>
            <a href={img.links.html} target="_blank" rel="noopener noreferrer">
              View on Unsplash
            </a>
          </div>
        </figure>
      ))}
    </>
  );
};

export default Card;
