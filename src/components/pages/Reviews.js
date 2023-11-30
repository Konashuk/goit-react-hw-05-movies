import { reviewsDetail } from 'components/appi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './loader';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function clickReviews() {
      try {
        if (!movieId) {
          return;
        }
        setIsLoading(true);
        const response = await reviewsDetail(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error.statusText);
      } finally {
        setIsLoading(false);
      }
    }
    clickReviews();
  }, [movieId]);

  if (!reviews || reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }
  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                {author}
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
