import BlackDivider from "../../BlackDivider/BlackDivider";
import CarCard from "../../CarCard/CarCard";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import cars from "../../../Assets/cars.json";
import CarInfo from "../../CarInfo/CarInfo";

function MoreInfo() {
  const currentCars = cars.cars.filter((car) => car.id == 1);
  console.log(currentCars);

  return (
    <>
      <div>MoreInfo</div>
      <Header />
      <CarInfo
        img={currentCars[0].image_url}
        model={currentCars[0].car_model}
        city={`${currentCars[0].fuel_efficiency.city} MPG`}
        highway={`${currentCars[0].fuel_efficiency.highway} MPG`}
        price={`$${currentCars[0].starting_price} per day`}
        luggage={currentCars[0].luggage_capacity}
        passenger={currentCars[0].passenger_capacity}
        transmission={currentCars[0].features.transmission}
        AC={currentCars[0].features.AC}
        RA={currentCars[0].features.road_assistant}
        smoke={currentCars[0].features.smoke_free}
        gps={currentCars[0].features.gps}
        description={currentCars[0].car_description}
      />
      <BlackDivider
        text="Book a car by getting in touch with us"
        span="(123) 456-7869"
      />
      <Footer />
    </>
  );
}

export default MoreInfo;
