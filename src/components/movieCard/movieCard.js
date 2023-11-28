import { castDetail, reviewsDetail } from 'components/Appi/appi';
import { useState } from 'react';
import { CastCard } from './castCard';
import { ReviewsCard } from './reviewsCard';

export const MovieCard = ({ movie }) => {
  const [casts, setCasts] = useState();
  const [reviews, setReviews] = useState();

  const { title, overview, genres, poster_path, vote_average, id } = movie;
  const base = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const score = Math.round(vote_average * 10);

  const onClickCast = async event => {
    event.preventDefault();
    try {
      const response = await castDetail(id);
      console.log(response);
      setCasts(response);
    } catch (error) {
      console.log(error.statusText);
    }
  };

  const onClickReviews = async event => {
    event.preventDefault();
    try {
      const response = await reviewsDetail(id);
      console.log(response);
      setReviews(response);
    } catch (error) {
      console.log(error.statusText);
    }
  };
  return (
    <div>
      <img src={base} alt={title} />
      <h2>{title}</h2>
      <p>User score: {score}% </p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      {genres.map(({ name, id }) => (
        <p key={id}>{name}</p>
      ))}

      <p>Aditional information</p>
      <a href="/" onClick={onClickCast}>
        Cast
      </a>
      {casts && <CastCard casts={casts} />}
      <a href="/" onClick={onClickReviews}>
        Reviews
      </a>
      {reviews && <ReviewsCard reviews={reviews} />}
    </div>
  );
};
