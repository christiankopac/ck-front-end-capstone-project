import "./HighlightCard.css";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const HighlightCard = ({ imgSrc, title, price, description, buttonText }) => {
  return (
    <div className="card" aria-label="highlight card">
      <img
        className="card--img"
        src={imgSrc}
        alt={`${title}`}
        data-testid="highlight-img"
      />
      <div className="card--content" aria-label="card content">
        <div className="card--header" aria-label="card header">
          <h3>{title}</h3>
          <p className="card--price" aria-label="price">
            {price}
          </p>
        </div>

        <div className="card--body" aria-label="card body">
          <p>{description}</p>
        </div>
        <div
          className="card--footer"
          style={{ marginTop: "auto" }}
          aria-label="card footer"
        >
          <p
            style={{ display: "flex", gap: "1rem", fontWeight: "bold" }}
            aria-label="button text"
          >
            {buttonText ? (
              buttonText
            ) : (
              <>
                Order a delivery <DeliveryDiningIcon />
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
