import redStarImg from "../../asset/red-star.png";
import greyStarImg from "../../asset/grey-star.png";
import "./Star.scss";

function Star(accLogement) {
  const maxStars = 5;
  var redStars = parseInt(accLogement.rating);
  if (redStars > 5) {
    redStars = 5;
  } else if (redStars < 0) {
    redStars = 0;
  }
  const greyStars = maxStars - redStars;

  const redStarsToDisplay = Array(redStars)
    .fill()
    .map((_, index) => <img key={index} src={redStarImg} alt="red star" />);
  const greyStarsToDisplay = Array(greyStars)
    .fill()
    .map((_, index) => <img key={index} src={greyStarImg} alt="grey star" />);
  return (
    <div className="star-container">
      {redStarsToDisplay}
      {greyStarsToDisplay}
    </div>
  );
}

export default Star;
