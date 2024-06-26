import { Link } from "react-router-dom";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LuggageIcon from "@mui/icons-material/Luggage";
import PeopleIcon from "@mui/icons-material/People";
import MemoryIcon from "@mui/icons-material/Memory";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SupportIcon from "@mui/icons-material/Support";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";

import "./CarCard.css";

function CarCard(props) {
  return (
    // passing onClick props so can be used in parrent component
    <div id={props.id} onClick={props.onClick} className="flexCarCards">
      <div className="modelCard">
        <h2 itemProp="catagory">{props.model}</h2>
        <div className="modelCard-p">
          <p>
            <strong>City:</strong> {props.city}
            <br></br>
            <strong>Highway:</strong> {props.highway}
          </p>
          <LocalGasStationIcon className="gas" />
        </div>
      </div>
      <div className="middleCard">
        <img
          src={props.img}
          className="attachment-medium size-medium wp-post-image lazy loaded"
          alt="ccar"
          itemProp="image"
          decoding="async"
          fetchpriority="high"
          data-sizes="(max-width: 400px) 100vw, 400px"
          sizes="(max-width: 400px) 100vw, 400px"
          data-was-processed="true"
        />
      </div>
      <div className="bottomCard">
        <div className="carFeatures">
          <div className="carModel">
            {/* <h3 itemProp="model">{props.description}</h3> */}
            <p>
              Starting at <strong>{props.price}</strong>
            </p>
            <ul className="featureDetails">
              <li>
                <ul className="capacity">
                  <li className="luggages" itemProp="cargoVolume">
                    <LuggageIcon />
                    {props.luggage}
                  </li>
                  <li className="passengers" itemProp="seatingCapacity">
                    <PeopleIcon />
                    {props.passenger}
                  </li>
                </ul>
              </li>
              <li className="transmission" itemProp="vehicleTransmission">
                <MemoryIcon /> {props.transmission}
              </li>
              <li className="ac" itemProp="additionalProperty">
                <AcUnitIcon />
                {props.AC}
              </li>
              <li className="road">
                <SupportIcon />
                Road Assistant: {props.RA}
              </li>
              <li className="smokefree">
                <SmokeFreeIcon />
                Smoke Free Vehicle:{props.smoke}
              </li>
              <li className="gps">
                <GpsFixedIcon />
                Free GPS: {props.gps}
              </li>
              <li className="age">
                <CreditCardIcon />
                20 years +
              </li>
            </ul>
          </div>
          <div className="actions">
            <Link
              to="/Vehicle Model/More Info"
              className="moreButton"
              itemProp="url"
              href=""
            >
              More
            </Link>
            <Link
              to="/Vehicle Model/Book Now"
              className="bookButton"
              itemProp="url"
              href=""
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
