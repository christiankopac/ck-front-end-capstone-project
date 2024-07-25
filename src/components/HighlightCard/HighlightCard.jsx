// Component Name: Card
import "./HighlightCard.css";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const Card = ({ imgSrc, title, price, description, buttonText }) => {
  return (
    <div className="card">
      <img className="card--img" src={imgSrc} alt={`${title} image`} />
      <div className="card--content">
        <div className="card--header">
          <h3>{title}</h3>
          <p className="card--price">{price}</p>
        </div>

        <div className="card--body">
          <p>{description}</p>
        </div>
        <div className="card--footer" style={{ marginTop: "auto" }}>
          <p style={{ display: "flex", gap: "1rem", fontWeight: "bold" }}>
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
export default Card;
