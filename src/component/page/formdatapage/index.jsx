import React from "react";
import Navbar2 from "../../common/navbar/mainnavbar";
import { NavLink } from "react-router-dom";
import Goat from "../../assets/formdata/goat.png";
import Sheep from "../../assets/formdata/sheep.png";
import Cow from "../../assets/formdata/cow.png";
import Buffalo from "../../assets/formdata/buffalo.png";

const animals = [
  { name: "Goat", image: Goat, route: "/farmdata/dashboard" },
  { name: "Sheep", image: Sheep, route: "/farmdata/dashboard" },
  { name: "Cow", image: Cow, route: "/farmdata/dashboard" },
  { name: "Buffalo", image: Buffalo, route: "/farmdata/dashboard" },
];

const Formdata = () => {
  const handleAnimalClick = (animalName) => {
    sessionStorage.setItem("animalName", animalName); // Store selected animal name in session storage
  };

  return (
    <div className="form-data">
      <Navbar2 />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-5">
            <div className="form-data-content text-center pt-lg-5 mt-5">
              <p className="text-chinese-black-color font-32-500">
                Please select an animal to proceed farm data management
              </p>
              <div className="animal-images d-flex justify-content-around pt-lg-5">
                {animals.map((animal, index) => (
                  <NavLink
                    to={animal.route}
                    className="text-decoration-none"
                    key={index}
                    state={{ animal: animal.name }} // Pass animal name
                    onClick={() => handleAnimalClick(animal.name)}
                  >
                    <div className="form-data-img">
                      <img
                        src={animal.image}
                        alt={animal.name}
                        className="img-fluid"
                      />
                    </div>
                    <h3 className="text-chinese-black-color font-32-500">
                      {animal.name}
                    </h3>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formdata;
