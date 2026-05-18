import { useState } from "react";
import './Likebtn.css'

function Likebtn() {
  let [isLike, setIsLike] = useState(false);

  let toggleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="containerlike">
    <p onClick={toggleLike}>
      {isLike ? (
        <i className="fa-solid fa-heart"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </p>
    </div>
  );
}

export default Likebtn;