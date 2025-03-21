// import React from "react";
// import { IoIosArrowBack } from "react-icons/io";
// import Goat from "../../assets/formdata/goat.png";
// import Sheep from "../../assets/formdata/sheep.png";
// import Cow from "../../assets/formdata/cow.png";
// import Buffalo from "../../assets/formdata/buffalo.png";
// import Navbar2 from "../../common/navbar/navbar2";
// import { NavLink } from "react-router-dom";

// const Formdata = () => {
//   return (
//     <>
//       <div className="form-data">
//         <Navbar2 />
//         <div className="container">
//           <div className="row">
//             {/* <div className="col-lg-12 pt-lg-5">
//               <div className="form-data-btn">
//                 <button className="bg-white border border-0 d-flex align-items-center fs-5">
//                   <IoIosArrowBack /> Back
//                 </button>
//               </div>
//             </div> */}
//             <div className="col-lg-12 py-5">
//               <div className="form-data-content text-center pt-lg-5">
//                 <h2>Please select an animal to proceed</h2>
//                 <div className="animal-images d-flex justify-content-around pt-lg-5">
//                   <div className="goat-image">
//                     <NavLink to="/parentcard" className="text-decoration-none">
//                       <div className="form-data-img">
//                         <img src={Goat} alt="Loading" />
//                       </div>
//                       <h3 className="text-dark">Goat</h3>
//                     </NavLink>
//                   </div>
//                   <NavLink to="/parentcard" className="text-decoration-none">
//                     <div className="sheep-image">
//                       <div className="form-data-img">
//                         <img src={Sheep} alt="Loading" />
//                       </div>

//                       <h3>Sheep</h3>
//                     </div>
//                   </NavLink>

//                   <NavLink to="/parentcard" className="text-decoration-none">
//                     <div className="cow-image">
//                       <div className="form-data-img">
//                         <img src={Cow} alt="Loding" />
//                       </div>

//                       <h3>Cow</h3>
//                     </div>
//                   </NavLink>
//                   <NavLink to="/parentcard" className="text-decoration-none">
//                     <div className="buffalo-image">
//                       <div className="form-data-img">
//                         <img src={Buffalo} alt="Loading" />
//                       </div>

//                       <h3>Buffalo</h3>
//                     </div>
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Formdata;



import React from "react";
import Navbar2 from "../../common/navbar/navbar2";
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

const   Formdata = () => {
  const handleAnimalClick = (animalName) => {
    sessionStorage.setItem("animalName", animalName); // Store selected animal name in session storage
  };

  return (
    <div className="form-data">
      <Navbar2 />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-5">
            <div className="form-data-content text-center pt-lg-5">
              <h2>Please select an animal to proceed</h2>
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
                      <img src={animal.image} alt={animal.name} className="img-fluid"/>
                    </div>
                    <h3 className="text-dark">{animal.name}</h3>
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
