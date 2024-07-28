import StarRateIcon from "@mui/icons-material/StarRate";

const Rating = ({ rating }) => {
  return (
    <div
      className="rating"
      data-testid="rating-component"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {[...Array(rating)].map((star, index) => {
        return (
          <StarRateIcon
            key={index}
            style={{ color: "#f8d64e", fontSize: "1.5rem" }}
            aria-label={`Star ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default Rating;
