import { reviewsDetail } from 'components/appi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './loader';

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function clickReviews() {
      try {
        setIsLoading(true);

        const response = await reviewsDetail(params.movieId);
        setReviews(response);
      } catch (error) {
        console.log(error.statusText);
      } finally {
        setIsLoading(false);
      }
    }
    clickReviews();
  }, [params]);
  if (reviews.results.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }
  return (
    <ul>
      {reviews.results.map(({ author, content }) => {
        return (
          <li>
            {isLoading && <Loader />}
            {author}
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
