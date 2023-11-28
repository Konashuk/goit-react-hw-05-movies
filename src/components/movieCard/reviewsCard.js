export const ReviewsCard = ({ reviews: { results } }) => {
  if (results.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }
  return (
    <ul>
      {results.map(({ author, content }) => {
        return (
          <li>
            {author}
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
