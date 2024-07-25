import StarRateIcon from "@mui/icons-material/StarRate";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(rating)].map((star, index) => {
        return (
          <StarRateIcon
            key={index}
            style={{ color: "#f8d64e", fontSize: "1.5rem" }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
