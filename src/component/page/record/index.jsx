// import React, { useState, useEffect, useContext } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
// import Sidebar from "../sidebar";
// import Navbar from "../../common/navbar";
// import { getData, postData } from "../../common/APIs/api";
// import { Bounce, toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";
// import AnimalCard from "../../common/animalCard";

// const Record = () => {
//   // API endpoints for different categories
//   const API_ENDPOINTS = {
//     postWean: "/user/animal/postweandata/add",
//     milk: "/user/animal/milkdata/add",
//     vaccine: "/user/animal/vaccinedata/add",
//     deworm: "/user/animal/dewormdata/add",
//     estrusHeat: "/user/animal/estrusdata/add",
//     farmSanitation: "/user/animal/sanitationdata/add",
//   };

//   // 🔹 Field configurations for each tab
//   const fieldConfigs = {
//   postWean: [
//     {
//       name: "weightKg",
//       label: "Kid Weight (Kg)",
//       type: "text",
//       placeholder: "Enter Weight kg",
//       required: true,
//     },
//     {
//       name: "weightGm",
//       label: "Kid Weight (Gm)",
//       type: "text",
//       placeholder: "Enter Weight gm",
//       required: true,
//     },
//     {
//       name: "bodyScore",
//       label: "Wean Body Score",
//       type: "select",
//       options: ["1", "2"],
//       required: true,
//     },
//     { name: "weanDate", label: "Wean Date", type: "date", required: true },
//     {
//       name: "weanComment",
//       label: "Comments (if any)",
//       type: "textarea",
//       placeholder: "Enter comment",
//     },
//   ],
//   milk: [
//     {
//       name: "milkvolume",
//       label: "Milk Volume",
//       type: "text",
//       placeholder: "Enter Milk Volume",
//       required: true,
//     },
//     {
//       name: "numberKids",
//       label: "Number of Kids",
//       type: "Number",
//       placeholder: "Enter Number of Kids",
//       required: true,
//     },
//     { name: "milkDate", label: "Milk Date", type: "date", required: true },
//   ],
//   vaccine: [
//     {
//       name: "vaccineName",
//       label: "Vaccine Name",
//       type: "text",
//       placeholder: "Enter Vaccine Name",
//       required: true,
//     },
//     {
//       name: "vaccineDate",
//       label: "Vaccine Date",
//       type: "date",
//       required: true,
//     },
//   ],
//   deworm: [
//     {
//       name: "report",
//       label: "Worms Examination Report",
//       type: "text",
//       placeholder: "Enter Worms Examination Report",
//       required: true,
//     },
//     {
//       name: "date",
//       label: "Deworm Date",
//       type: "date",
//       placeholder: "Enter Deworm Date",
//       required: true,
//     },
//     {
//       name: "endoName",
//       label: "Deworm Name (Endo Parasite) ",
//       type: "text",
//       placeholder: "Enter Deworm Name",
//       required: true,
//     },
//     {
//       name: "ectoName",
//       label: "Deworm Name (Ecto Parasite) ",
//       type: "text",
//       placeholder: "Enter Deworm Name ",
//       required: true,
//     },
//     {
//       name: "endoDate",
//       label: "Endo Date",
//       type: "date",
//       placeholder: "Endo Date",
//       required: true,
//     },
//     {
//       name: "ectoDate",
//       label: "Ecto Date",
//       type: "date",
//       placeholder: "Ecto Date",
//       required: true,
//     },
//     {
//       name: "endoType",
//       label: "Endo Type",
//       type: "select",
//       options: [
//         "Open this and select endo type",
//         "1. Tablet",
//         "2. Liquid",
//         "3. Injection",
//       ],
//       required: true,
//     },
//     {
//       name: "ectoType",
//       label: "Ecto Type",
//       type: "select",
//       options: [
//         "Open this and select ecto type",
//         "1.Oral",
//         "2. Backline",
//         "3. Injection",
//         "4.Rubbing on skin",
//       ],
//       required: true,
//     },
//     {
//       name: "animalDate",
//       label: "Animal Bath Ectoparasite Date",
//       type: "date",
//       required: true,
//     },
//   ],
//   estrusHeat: [
//     {
//       name: "heat",
//       label: "Heat Number",
//       type: "select",
//       options: [
//         "Open this and select heat number",
//         "heat 1",
//         "heat 2",
//         "heat 3",
//         "heat 4",
//         "heat 5",
//       ],
//       required: true,
//     },
//     {
//       name: "heatDate",
//       label: "Heat Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "heatResult",
//       label: "heat Result",
//       type: "select",
//       options: [
//         "Open this and select heat result",
//         "Meet",
//         "Left for Next cycle",
//       ],
//       required: true,
//     },
//     {
//       name: "breederName",
//       label: "Breeder Name",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "breedDate",
//       label: "Date of Breed",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "dueDate",
//       label: "Birth Due Date",
//       type: "date",
//       required: true,
//     },
//   ],
//   farmSanitation: [
//     {
//       name: "soilDate",
//       label: "Soil Change Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "limesprinkleDate",
//       label: "Lime Sprinkle Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "insecticideDate",
//       label: "Insecticide Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "insecticide",
//       label: "Insecticide Name",
//       type: "text",
//       required: true,
//     },
//   ],
// };

//   const [activeTab, setActiveTab] = useState("postWean");
//   const [animalsparentId, setAnimalsparentId] = useState();
//   const [animalsuniqueId, setAnimaluniqueId] = useState();

//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   // API endpoint
//   const endpoint = "/user/animaldata/parent/getAll";

//   useEffect(() => {
//     const fetchAnimals = async () => {
//       try {
//         const response = await getData(endpoint);
//         setAnimaluniqueId(response.data.map((animal) => animal.uniqueId));
//         setAnimalsparentId(response.data.map((animal) => animal.parentId));
//       } catch (error) {
//         toast.error(
//           error.message || "Error fetching animal data. Please try again."
//         );
//       } finally {
//       }
//     };
//     fetchAnimals();
//   }, []); // Fetch only once on mount
//   const location = useLocation();
//   const parentId = location.state?.name;
//   const uniqueId = location.state?.uniqueId;

//   // Find parentId based on animalsparentId
//   const filteredAnimals = animalsparentId?.find(
//     (animal) => animal === parentId
//   );

//   // Find uniqueId based on animalsuniqueId
//   const parentUniqueId = animalsuniqueId?.find((animal) => animal === uniqueId);

//   // Handle form submission
//   const onSubmit = async (data) => {
//     const apiUrl = API_ENDPOINTS[activeTab];

//     const parentId = filteredAnimals;
//     const formData = { ...data, parentUniqueId, parentId }; // Include uniqueId in form data
//     console.log("formData: ", formData);
//     try {
//       const response = await postData(apiUrl, formData);
//       // store data in session for  later use
//       toast.success(response.data.message, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//       });
//       setTimeout(() => navigate("/farmdata/parent"), 1000);
//     } catch (error) {
//       toast.error(error?.message || "Login failed!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//       });
//     }
//   };

//   // Child

//   const [animalsChild, setAnimalsChild] = useState([]);
//   console.log("animalsChild: ", animalsChild);
//   const [loading, setLoading] = useState(true);

//   const Childendpoint = "/user/animaldata/child/getAll";

//   useEffect(() => {
//     const fetchAnimals = async () => {
//       try {
//         const response = await getData(Childendpoint);
//         setAnimalsChild(response.data);
//       } catch (error) {
//         toast.error(
//           error.message || "Error fetching animal data. Please try again."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAnimals();
//   }, []); // Fetch only once on mount

//   // Find animals based on selectedAnimal

//   const filteredChild = animalsChild.find(
//     (child) => child.parentId === parentId
//   );
//   console.log("filteredChild:55222 ", filteredChild);

//   return (
//     <>
//       <Navbar />
//       <div className="row">
//         <div className="col-lg-2">
//           <Sidebar />
//         </div>

//         <div className="col-lg-10 p-2">
//           <Card className="border-0 border-bottom">
//             <Card.Body>
//               <Tabs
//                 activeKey={activeTab}
//                 onSelect={(k) => setActiveTab(k)}
//                 className="mb-4"
//               >
//                 <Tab eventKey="postWean" title="Post Wean" />
//                 <Tab eventKey="milk" title="Milk" />
//                 <Tab eventKey="vaccine" title="Vaccine" />
//                 <Tab eventKey="deworm" title="Deworm" />
//                 <Tab eventKey="estrusHeat" title="Estrus Heat" />
//                 <Tab eventKey="farmSanitation" title="Farm Sanitation" />
//                 <Tab eventKey="child" title="Child" />
//               </Tabs>

//               <div className="tab-content-area">
//                 <p className="mb-2 record-head">
//                   {activeTab.replace(/([A-Z])/g, " $1")}
//                 </p>
//                 <p className="record-para mb-4">
//                   Fill {activeTab} details below
//                 </p>
//                 {/* Show Card only for Child Tab */}
//                 {activeTab === "child" && (
//                   <>
//                     {loading ? (
//                       <p>Loading...</p>
//                     ) : filteredChild?.length > 0 ? (
//                       <div className="row">
//                         {filteredChild?.map((animal, index) => (
//                           <div key={index} className="col-lg-3 px-4 pt-4">
//                             <AnimalCard
//                               name={animal.parentId}
//                               height={animal.height}
//                               gender={animal.gender}
//                               age={animal.ageYear}
//                               weight={animal.weightKg}
//                               uniqueId={animal.uniqueId}
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <p>No Parent animals found for.</p>
//                     )}
//                   </>
//                 )}

//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <div className="row mb-4">
//                     {/* Unique ID Field (Read-Only) */}
//                     <div className="col-lg-3 pb-3">
//                       <Form.Group>
//                         <Form.Label>Unique ID</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={filteredAnimals} // Display parentId
//                           readOnly // Make it unchangeable
//                         />
//                       </Form.Group>
//                     </div>

//                     {fieldConfigs[activeTab].map((field, index) => (
//                       <div key={index} className="col-lg-3 pb-3">
//                         <Form.Group>
//                           <Form.Label>{field.label}</Form.Label>

//                           {/* Handle Select Field Validation */}
//                           {field.type === "select" ? (
//                             <Controller
//                               name={field.name}
//                               control={control}
//                               render={({
//                                 field: { onChange, onBlur, value },
//                               }) => (
//                                 <Form.Select
//                                   onChange={onChange}
//                                   onBlur={onBlur}
//                                   value={value || ""}
//                                 >
//                                   {field.options.map((option, i) => (
//                                     <option
//                                       key={i}
//                                       value={i === 0 ? "" : option}
//                                     >
//                                       {option}
//                                     </option>
//                                   ))}
//                                 </Form.Select>
//                               )}
//                             />
//                           ) : field.type === "textarea" ? (
//                             <Form.Control
//                               as="textarea"
//                               placeholder={field.placeholder}
//                               {...register(field.name, {
//                                 required: field.required
//                                   ? `${field.label} is required`
//                                   : false,
//                               })}
//                             />
//                           ) : (
//                             <Form.Control
//                               type={field.type}
//                               placeholder={field.placeholder}
//                               {...register(field.name, {
//                                 required: field.required
//                                   ? `${field.label} is required`
//                                   : false,
//                               })}
//                             />
//                           )}

//                           {/* Display validation error */}
//                           {errors[field.name] && (
//                             <span className="text-danger">
//                               {errors[field.name].message}
//                             </span>
//                           )}
//                         </Form.Group>
//                       </div>
//                     ))}
//                   </div>

//                   <Button type="submit" className="record-btn">
//                     Submit
//                   </Button>
//                 </Form>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Record;

// import React, { useState, useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
// import Sidebar from "../sidebar";
// import Navbar from "../../common/navbar";
// import { getData, postData } from "../../common/APIs/api";
// import { Bounce, toast } from "react-toastify";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import AnimalCard from "../../common/animalCard";

// const Record = () => {
//   const API_ENDPOINTS = {
//     postWean: "/user/animal/postweandata/add",
//     milk: "/user/animal/milkdata/add",
//     vaccine: "/user/animal/vaccinedata/add",
//     deworm: "/user/animal/dewormdata/add",
//     estrusHeat: "/user/animal/estrusdata/add",
//     farmSanitation: "/user/animal/sanitationdata/add",
//   };

//   const fieldConfigs = {
//   postWean: [
//     {
//       name: "weightKg",
//       label: "Kid Weight (Kg)",
//       type: "text",
//       placeholder: "Enter Weight kg",
//       required: true,
//     },
//     {
//       name: "weightGm",
//       label: "Kid Weight (Gm)",
//       type: "text",
//       placeholder: "Enter Weight gm",
//       required: true,
//     },
//     {
//       name: "bodyScore",
//       label: "Wean Body Score",
//       type: "select",
//       options: ["1", "2"],
//       required: true,
//     },
//     { name: "weanDate", label: "Wean Date", type: "date", required: true },
//     {
//       name: "weanComment",
//       label: "Comments (if any)",
//       type: "textarea",
//       placeholder: "Enter comment",
//     },
//   ],
//   milk: [
//     {
//       name: "milkvolume",
//       label: "Milk Volume",
//       type: "text",
//       placeholder: "Enter Milk Volume",
//       required: true,
//     },
//     {
//       name: "numberKids",
//       label: "Number of Kids",
//       type: "Number",
//       placeholder: "Enter Number of Kids",
//       required: true,
//     },
//     { name: "milkDate", label: "Milk Date", type: "date", required: true },
//   ],
//   vaccine: [
//     {
//       name: "vaccineName",
//       label: "Vaccine Name",
//       type: "text",
//       placeholder: "Enter Vaccine Name",
//       required: true,
//     },
//     {
//       name: "vaccineDate",
//       label: "Vaccine Date",
//       type: "date",
//       required: true,
//     },
//   ],
//   deworm: [
//     {
//       name: "report",
//       label: "Worms Examination Report",
//       type: "text",
//       placeholder: "Enter Worms Examination Report",
//       required: true,
//     },
//     {
//       name: "date",
//       label: "Deworm Date",
//       type: "date",
//       placeholder: "Enter Deworm Date",
//       required: true,
//     },
//     {
//       name: "endoName",
//       label: "Deworm Name (Endo Parasite) ",
//       type: "text",
//       placeholder: "Enter Deworm Name",
//       required: true,
//     },
//     {
//       name: "ectoName",
//       label: "Deworm Name (Ecto Parasite) ",
//       type: "text",
//       placeholder: "Enter Deworm Name ",
//       required: true,
//     },
//     {
//       name: "endoDate",
//       label: "Endo Date",
//       type: "date",
//       placeholder: "Endo Date",
//       required: true,
//     },
//     {
//       name: "ectoDate",
//       label: "Ecto Date",
//       type: "date",
//       placeholder: "Ecto Date",
//       required: true,
//     },
//     {
//       name: "endoType",
//       label: "Endo Type",
//       type: "select",
//       options: [
//         "Open this and select endo type",
//         "1. Tablet",
//         "2. Liquid",
//         "3. Injection",
//       ],
//       required: true,
//     },
//     {
//       name: "ectoType",
//       label: "Ecto Type",
//       type: "select",
//       options: [
//         "Open this and select ecto type",
//         "1.Oral",
//         "2. Backline",
//         "3. Injection",
//         "4.Rubbing on skin",
//       ],
//       required: true,
//     },
//     {
//       name: "animalDate",
//       label: "Animal Bath Ectoparasite Date",
//       type: "date",
//       required: true,
//     },
//   ],
//   estrusHeat: [
//     {
//       name: "heat",
//       label: "Heat Number",
//       type: "select",
//       options: [
//         "Open this and select heat number",
//         "heat 1",
//         "heat 2",
//         "heat 3",
//         "heat 4",
//         "heat 5",
//       ],
//       required: true,
//     },
//     {
//       name: "heatDate",
//       label: "Heat Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "heatResult",
//       label: "heat Result",
//       type: "select",
//       options: [
//         "Open this and select heat result",
//         "Meet",
//         "Left for Next cycle",
//       ],
//       required: true,
//     },
//     {
//       name: "breederName",
//       label: "Breeder Name",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "breedDate",
//       label: "Date of Breed",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "dueDate",
//       label: "Birth Due Date",
//       type: "date",
//       required: true,
//     },
//   ],
//   farmSanitation: [
//     {
//       name: "soilDate",
//       label: "Soil Change Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "limesprinkleDate",
//       label: "Lime Sprinkle Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "insecticideDate",
//       label: "Insecticide Date",
//       type: "date",
//       required: true,
//     },
//     {
//       name: "insecticide",
//       label: "Insecticide Name",
//       type: "text",
//       required: true,
//     },
//   ],
// };

//   const [activeTab, setActiveTab] = useState("postWean");
//   const [animals, setAnimals] = useState([]);
//   const [children, setChildren] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isactive, setActive] = useState(false);

//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();
//   const location = useLocation();
//   const parentId = location.state?.name;
//   const uniqueId = location.state?.uniqueId;

//   useEffect(() => {
//     const fetchAnimals = async () => {
//       try {
//         const response = await getData("/user/animaldata/parent/getAll");
//         setAnimals(response.data || []);
//       } catch (error) {
//         toast.error("Error fetching animal data.");
//       }
//     };

//     const fetchChildren = async () => {
//       try {
//         const response = await getData("/user/animaldata/child/getAll");
//         setChildren(response.data || []);
//       } catch (error) {
//         toast.error("Error fetching child data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAnimals();
//     fetchChildren();
//   }, []);

//   const filteredAnimals = animals.filter(
//     (animal) => animal.parentId === parentId
//   );
//   console.log("filteredAnimals: ", filteredAnimals);
//   const filteredChildren = children.filter(
//     (child) => child.parentId === parentId
//   );
//   console.log("filteredChildren: ");

//   const onSubmit = async (data) => {
//     const apiUrl = API_ENDPOINTS[activeTab];
//     const formData = { ...data, parentUniqueId: uniqueId, parentId };

//     try {
//       const response = await postData(apiUrl, formData);
//       if (response.status === 200 || response.status === 201) {
//         toast.success(response.data.message, {
//           autoClose: 3000,
//           transition: Bounce,
//         });
//         setTimeout(() => navigate("/farmdata/parent"), 1000);
//       } else {
//         throw new Error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error?.message || "Submission failed.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="row">
//         <div className="col-lg-2">
//           <Sidebar />
//         </div>
//         <div className="col-lg-10 p-2">
//           <Card className="border-0 border-bottom">
//             <Card.Body>
//               <Tabs
//                 activeKey={activeTab}
//                 onSelect={(k) => setActiveTab(k)}
//                 className="mb-4"
//               >
//                 {Object.keys(API_ENDPOINTS).map((tab) => (
//                   <Tab
//                     key={tab}
//                     eventKey={tab}
//                     title={tab.replace(/([A-Z])/g, " $1")}
//                   />
//                 ))}
//                 <Tab eventKey="child" title="Child" />
//               </Tabs>
//               <div className="d-flex justify-content-between align-items-center">
//                 <div className="record-head">
//                   {activeTab.replace(/([A-Z])/g, " $1")}
//                 </div>
//                 {activeTab === "child" && (
//                   <div>
//                     <button
//                       className="btn text-white px-4 border rounded-pill me-5"
//                       style={{
//                         background:
//                           "linear-gradient(to right, #60A5FA, #EC4899)",
//                       }}
//                       onClick={() => setActive(true)}
//                     >
//                       <span className="me-1">+</span>
//                       Add Child
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {activeTab !== "child" && (
//                 <p className="record-para mb-4">
//                   Fill {activeTab} details below
//                 </p>
//               )}
// {isactive && ( <Form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="row mb-4">
//                   <div className="col-lg-3 pb-3">
//                     <Form.Group>
//                       <Form.Label>Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         {...register("name", { required: true })}
//                         placeholder="Enter name"
//                       />
//                       {errors.name && (
//                         <p className="text-danger">{errors.name.message}</p>
//                       )}
//                     </Form.Group>
//                   </div>
//                   <div className="col-lg-3 pb-3">
//                     <Form.Group>
//                       <Form.Label>Age</Form.Label>
//                       <Form.Control
//                         type="number"
//                         name="age"
//                         {...register("age", { required: true })}
//                         placeholder="Enter age in years"
//                       />
//                       {errors.age && (
//                         <p className="text-danger">{errors.age.message}</p>
//                       )}
//                     </Form.Group>
//                   </div>)}
//               {activeTab === "child" && (
//                 <>
//                   {loading ? (
//                     <p>Loading...</p>
//                   ) : filteredChildren.length > 0 ? (
//                     <div className="row">
//                       {filteredChildren.map((animal, index) => (
//                         <div key={index} className="col-lg-3 px-3 pt-4">
//                           <AnimalCard
//                             name={animal.parentId}
//                             height={animal.height}
//                             gender={animal.gender}
//                             age={animal.ageYear}
//                             weight={animal.weightKg}
//                             uniqueId={animal.uniqueId}
//                             kidId={animal.kidId}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>No Child animals found.</p>
//                   )}
//                 </>
//               )}

//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="row mb-4">
//                   {/* Unique ID Field (Read-Only) - Hide in "Child" Tab */}
//                   {activeTab !== "child" && (
//                     <div className="col-lg-3 pb-3">
//                       <Form.Group>
//                         <Form.Label>Unique ID</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={parentId} // Display parentId
//                           readOnly // Make it unchangeable
//                         />
//                       </Form.Group>
//                     </div>
//                   )}

//                   {fieldConfigs[activeTab]?.map((field, index) => (
//                     <div key={index} className="col-lg-3 pb-3">
//                       <Form.Group>
//                         <Form.Label>{field.label}</Form.Label>
//                         {field.type === "select" ? (
//                           <Controller
//                             name={field.name}
//                             control={control}
//                             render={({ field: { onChange, value } }) => (
//                               <Form.Select
//                                 onChange={onChange}
//                                 value={value || ""}
//                               >
//                                 <option value="">Select {field.label}</option>
//                                 {field.options.map((option, i) => (
//                                   <option key={i} value={option}>
//                                     {option}
//                                   </option>
//                                 ))}
//                               </Form.Select>
//                             )}
//                           />
//                         ) : (
//                           <Form.Control
//                             type={field.type}
//                             {...register(field.name, {
//                               required: field.required,
//                             })}
//                           />
//                         )}
//                         {/* {errors[field.name] && <span className="text-danger">{errors[field.name].message}</span>} */}
//                         {errors[field.name] && (
//                           <span className="text-danger">
//                             This field is required
//                           </span>
//                         )}
//                       </Form.Group>
//                     </div>
//                   ))}
//                 </div>
//                 {activeTab !== "child" && (
//                   <Button type="submit" className="record-btn">
//                     Submit
//                   </Button>
//                 )}
//               </Form>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Record;



// import React, { useState, useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
// import Sidebar from "../sidebar";
// import Navbar from "../../common/navbar";
// import { getData, postData } from "../../common/APIs/api";
// import { Bounce, toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";
// import AnimalCard from "../../common/animalCard";

// const Record = () => {
//   const API_ENDPOINTS = {
//     postWean: "/user/animal/postweandata/add",
//     milk: "/user/animal/milkdata/add",
//     vaccine: "/user/animal/vaccinedata/add",
//     deworm: "/user/animal/dewormdata/add",
//     estrusHeat: "/user/animal/estrusdata/add",
//     farmSanitation: "/user/animal/sanitationdata/add",
//   };

//   const fieldConfigs = {
//     postWean: [
//       { name: "weightKg", label: "Kid Weight (Kg)", type: "text", required: true },
//       { name: "weightGm", label: "Kid Weight (Gm)", type: "text", required: true },
//       { name: "bodyScore", label: "Wean Body Score", type: "select", options: ["1", "2"], required: true },
//       { name: "weanDate", label: "Wean Date", type: "date", required: true },
//       { name: "weanComment", label: "Comments", type: "textarea" },
//     ],
//     milk: [
//       { name: "milkvolume", label: "Milk Volume", type: "text", required: true },
//       { name: "numberKids", label: "Number of Kids", type: "number", required: true },
//       { name: "milkDate", label: "Milk Date", type: "date", required: true },
//     ],
//   };

//   const [activeTab, setActiveTab] = useState("postWean");
//   const [animals, setAnimals] = useState([]);
//   const [children, setChildren] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isActive, setIsActive] = useState(false);

//   const navigate = useNavigate();
//   const { register, handleSubmit, control, formState: { errors } } = useForm();
//   const location = useLocation();
//   const parentId = location.state?.name;
//   const uniqueId = location.state?.uniqueId;

//   useEffect(() => {
//     const fetchAnimals = async () => {
//       try {
//         const response = await getData("/user/animaldata/parent/getAll");
//         setAnimals(response.data || []);
//       } catch (error) {
//         toast.error("Error fetching animal data.");
//       }
//     };

//     const fetchChildren = async () => {
//       try {
//         const response = await getData("/user/animaldata/child/getAll");
//         setChildren(response.data || []);
//       } catch (error) {
//         toast.error("Error fetching child data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAnimals();
//     fetchChildren();
//   }, []);

//   const filteredChildren = children.filter((child) => child.parentId === parentId);

//   const onSubmit = async (data) => {
//     const apiUrl = API_ENDPOINTS[activeTab];
//     const formData = { ...data, parentUniqueId: uniqueId, parentId };

//     try {
//       const response = await postData(apiUrl, formData);
//       if (response.status === 200 || response.status === 201) {
//         toast.success(response.data.message, { autoClose: 3000, transition: Bounce });
//         setTimeout(() => navigate("/farmdata/parent"), 1000);
//       } else {
//         throw new Error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error?.message || "Submission failed.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="row">
//         <div className="col-lg-2">
//           <Sidebar />
//         </div>
//         <div className="col-lg-10 p-2">
//           <Card className="border-0 border-bottom">
//             <Card.Body>
//               <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-4">
//                 {Object.keys(API_ENDPOINTS).map((tab) => (
//                   <Tab key={tab} eventKey={tab} title={tab.replace(/([A-Z])/g, " $1")} />
//                 ))}
//                 <Tab eventKey="child" title="Child" />
//               </Tabs>

//               <div className="d-flex justify-content-between align-items-center">
//                 <h4>{activeTab.replace(/([A-Z])/g, " $1")}</h4>
//                 {activeTab === "child" && (
//                   <button
//                     className="btn text-white px-4 border rounded-pill me-5"
//                     style={{ background: "linear-gradient(to right, #60A5FA, #EC4899)" }}
//                     onClick={() => setIsActive(true)}
//                   >
//                     <span className="me-1">+</span> Add Child
//                   </button>
//                 )}
//               </div>

//               {activeTab !== "child" && <p className="record-para mb-4">Fill {activeTab} details below</p>}

//               {isActive && (
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <div className="row mb-4">
//                     <div className="col-lg-3 pb-3">
//                       <Form.Group>
//                         <Form.Label>Name</Form.Label>
//                         <Form.Control type="text" {...register("name", { required: true })} placeholder="Enter name" />
//                         {errors.name && <p className="text-danger">This field is required</p>}
//                       </Form.Group>
//                     </div>
//                     <div className="col-lg-3 pb-3">
//                       <Form.Group>
//                         <Form.Label>Age</Form.Label>
//                         <Form.Control type="number" {...register("age", { required: true })} placeholder="Enter age" />
//                         {errors.age && <p className="text-danger">This field is required</p>}
//                       </Form.Group>
//                     </div>
//                   </div>
//                 </Form>
//               )}

//               {activeTab === "child" ? (
//                 loading ? <p>Loading...</p> : filteredChildren.length > 0 ? (
//                   <div className="row">
//                     {filteredChildren.map((animal, index) => (
//                       <div key={index} className="col-lg-3 px-3 pt-4">
//                         <AnimalCard {...animal} />
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p>No Child animals found.</p>
//                 )
//               ) : (
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <div className="row mb-4">
//                     <div className="col-lg-3 pb-3">
//                       <Form.Group>
//                         <Form.Label>Unique ID</Form.Label>
//                         <Form.Control type="text" value={uniqueId} readOnly />
//                       </Form.Group>
//                     </div>

//                     {fieldConfigs[activeTab]?.map((field, index) => (
//                       <div key={index} className="col-lg-3 pb-3">
//                         <Form.Group>
//                           <Form.Label>{field.label}</Form.Label>
//                           <Form.Control type={field.type} {...register(field.name, { required: field.required })} />
//                           {errors[field.name] && <span className="text-danger">This field is required</span>}
//                         </Form.Group>
//                       </div>
//                     ))}
//                   </div>
//                   <Button type="submit" className="record-btn">Submit</Button>
//                 </Form>
//               )}
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Record;


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
import Sidebar from "../sidebar";
import Navbar from "../../common/navbar";
import { getData, postData } from "../../common/APIs/api";
import { Bounce, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import AnimalCard from "../../common/animalCard";

const Record = () => {
  const API_ENDPOINTS = {
    postWean: "/user/animal/postweandata/add",
    milk: "/user/animal/milkdata/add",
    vaccine: "/user/animal/vaccinedata/add",
    deworm: "/user/animal/dewormdata/add",
    estrusHeat: "/user/animal/estrusdata/add",
    farmSanitation: "/user/animal/sanitationdata/add",
    child: "user/animal/childdata/add",
  };

  const fieldConfigs = {
    postWean: [
      {
        name: "weightKg",
        label: "Kid Weight (Kg)",
        type: "text",
        placeholder: "Enter Weight kg",
        required: true,
      },
      {
        name: "weightGm",
        label: "Kid Weight (Gm)",
        type: "text",
        placeholder: "Enter Weight gm",
        required: true,
      },
      {
        name: "bodyScore",
        label: "Wean Body Score",
        type: "select",
        options: ["1", "2"],
        required: true,
      },
      { name: "weanDate", label: "Wean Date", type: "date", required: true },
      {
        name: "weanComment",
        label: "Comments (if any)",
        type: "textarea",
        placeholder: "Enter comment",
      },
    ],
    milk: [
      {
        name: "milkvolume",
        label: "Milk Volume",
        type: "text",
        placeholder: "Enter Milk Volume",
        required: true,
      },
      {
        name: "numberKids",
        label: "Number of Kids",
        type: "Number",
        placeholder: "Enter Number of Kids",
        required: true,
      },
      { name: "milkDate", label: "Milk Date", type: "date", required: true },
    ],
    vaccine: [
      {
        name: "vaccineName",
        label: "Vaccine Name",
        type: "text",
        placeholder: "Enter Vaccine Name",
        required: true,
      },
      {
        name: "vaccineDate",
        label: "Vaccine Date",
        type: "date",
        required: true,
      },
    ],
    deworm: [
      {
        name: "report",
        label: "Worms Examination Report",
        type: "text",
        placeholder: "Enter Worms Examination Report",
        required: true,
      },
      {
        name: "date",
        label: "Deworm Date",
        type: "date",
        placeholder: "Enter Deworm Date",
        required: true,
      },
      {
        name: "endoName",
        label: "Deworm Name (Endo Parasite) ",
        type: "text",
        placeholder: "Enter Deworm Name",
        required: true,
      },
      {
        name: "ectoName",
        label: "Deworm Name (Ecto Parasite) ",
        type: "text",
        placeholder: "Enter Deworm Name ",
        required: true,
      },
      {
        name: "endoDate",
        label: "Endo Date",
        type: "date",
        placeholder: "Endo Date",
        required: true,
      },
      {
        name: "ectoDate",
        label: "Ecto Date",
        type: "date",
        placeholder: "Ecto Date",
        required: true,
      },
      {
        name: "endoType",
        label: "Endo Type",
        type: "select",
        options: [
          "Open this and select endo type",
          "1. Tablet",
          "2. Liquid",
          "3. Injection",
        ],
        required: true,
      },
      {
        name: "ectoType",
        label: "Ecto Type",
        type: "select",
        options: [
          "Open this and select ecto type",
          "1.Oral",
          "2. Backline",
          "3. Injection",
          "4.Rubbing on skin",
        ],
        required: true,
      },
      {
        name: "animalDate",
        label: "Animal Bath Ectoparasite Date",
        type: "date",
        required: true,
      },
    ],
    estrusHeat: [
      {
        name: "heat",
        label: "Heat Number",
        type: "select",
        options: [
          "Open this and select heat number",
          "heat 1",
          "heat 2",
          "heat 3",
          "heat 4",
          "heat 5",
        ],
        required: true,
      },
      {
        name: "heatDate",
        label: "Heat Date",
        type: "date",
        required: true,
      },
      {
        name: "heatResult",
        label: "heat Result",
        type: "select",
        options: [
          "Open this and select heat result",
          "Meet",
          "Left for Next cycle",
        ],
        required: true,
      },
      {
        name: "breederName",
        label: "Breeder Name",
        type: "text",
        required: true,
      },
      {
        name: "breedDate",
        label: "Date of Breed",
        type: "date",
        required: true,
      },
      {
        name: "dueDate",
        label: "Birth Due Date",
        type: "date",
        required: true,
      },
    ],
    farmSanitation: [
      {
        name: "soilDate",
        label: "Soil Change Date",
        type: "date",
        required: true,
      },
      {
        name: "limesprinkleDate",
        label: "Lime Sprinkle Date",
        type: "date",
        required: true,
      },
      {
        name: "insecticideDate",
        label: "Insecticide Date",
        type: "date",
        required: true,
      },
      {
        name: "insecticide",
        label: "Insecticide Name",
        type: "text",
        required: true,
      },
    ],
    child: [
      {
        name: "age",
        label: "kids Age Year",
        type: "number",
        placeholder: "Enter Age",
        required: true,
      },
      {
        name: "age",
        label: "kids Age Month",
        type: "number",
        placeholder: "Enter Age",
        required: true,
      },
      {
        name: "height",
        label: "kids Height",
        type: "number",
        placeholder: "Enter Height",
        required: true,
      },
      {
        name: "gender",
        label: "Gender",
        type: "radio",
        options: ["Male", "Female", "Other"],
        required: true,
      },
      {
        name: "weightKg",
        label: "Kid Weight (Kg)",
        type: "text",
        placeholder: "Enter Weight kg",
        required: true,
      },
      {
        name: "weightGm",
        label: "Kid Weight (Gm)",
        type: "text",
        placeholder: "Enter Weight gm",
        required: true,
      },
      {
        name: "bodyScore",
        label: "Wean Body Score",
        type: "select",
        options: ["1", "2"],
        required: true,
      },
      { name: "weanDate", label: "Wean Date", type: "date", required: true },
      {
        name: "weanComment",
        label: "Comments (if any)",
        type: "textarea",
        placeholder: "Enter comment",
      },
    ],

  };

  const [activeTab, setActiveTab] = useState("postWean");
  const [animals, setAnimals] = useState([]);
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  console.log('isActive: ', isActive);

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const parentId = location.state?.name;
  const uniqueId = location.state?.uniqueId;

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await getData("/user/animaldata/parent/getAll");
        setAnimals(response.data || []);
      } catch (error) {
        toast.error("Error fetching animal data.");
      }
    };

    const fetchChildren = async () => {
      try {
        const response = await getData("/user/animaldata/child/getAll");
        setChildren(response.data || []);
      } catch (error) {
        toast.error("Error fetching child data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
    fetchChildren();
  }, []);

  const filteredChildren = children.filter((child) => child.parentId === parentId);

  const onSubmit = async (data) => {
    const apiUrl = API_ENDPOINTS[activeTab];
    const formData = { ...data, parentUniqueId: uniqueId, parentId };

    try {
      const response = await postData(apiUrl, formData);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message, { autoClose: 3000, transition: Bounce });
        setTimeout(() => navigate("/farmdata/parent"), 1000);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message || "Submission failed.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 p-2">
          <Card className="border-0 border-bottom">
            <Card.Body>
              <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-4">
                {Object.keys(API_ENDPOINTS).map((tab) => (
                  <Tab key={tab} eventKey={tab} title={tab.replace(/([A-Z])/g, " $1")} />
                ))}
                {/* <Tab eventKey="child" title="Child" /> */}
              </Tabs>

              {activeTab === "child" && (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>{activeTab.replace(/([A-Z])/g, " $1")}</h4>
                    <button
                      className="btn text-white px-4 border rounded-pill me-5"
                      style={{ background: "linear-gradient(to right, #60A5FA, #EC4899)" }}
                      onClick={() => setIsActive(true)}
                    >
                      <span className="me-1">+</span> Add Child
                    </button>
                  </div>

                  {isActive ? (
                    <>
                      <p className="record-para mb-4">Fill {activeTab} details below</p>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-4">
                          <div className="col-lg-3 pb-3">
                            <Form.Group>
                              <Form.Label>Unique ID</Form.Label>
                              <Form.Control type="text" value={parentId} readOnly />
                            </Form.Group>
                          </div>
                          {fieldConfigs[activeTab]?.map((field, index) => (
                            <div key={index} className="col-lg-3 pb-3">
                              <Form.Group>
                                <Form.Label>{field.label}</Form.Label>

                                {field.type === "radio" ? (
                                  // Radio buttons
                                  <div className="d-flex gap-3">
                                    {field.options.map((option, idx) => (
                                      <Form.Check
                                        key={idx}
                                        type="radio"
                                        label={option}
                                        value={option}
                                        {...register(field.name, { required: field.required })}
                                        name={field.name} // Radio ke liye name zaroori hai
                                      />
                                    ))}
                                  </div>
                                ) : field.type === "select" ? (
                                  // ✅ Corrected Select Field
                                  <Form.Select {...register(field.name, { required: field.required })}>
                                    <option value="">Select an option</option> {/* Placeholder */}
                                    {field.options.map((option, idx) => (
                                      <option key={idx} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </Form.Select>
                                ) : (
                                  // Normal input fields
                                  <Form.Control
                                    type={field.type}
                                    {...register(field.name, { required: field.required })}
                                  />
                                )}

                                {errors[field.name] && <span className="text-danger">This field is required</span>}
                              </Form.Group>
                            </div>
                          ))}
                        </div>
                        <Button type="submit" className="record-btn">Submit</Button>
                      </Form>
                    </>
                  ) : (
                    <>
                      {loading ? (
                        <p>Loading...</p>
                      ) : filteredChildren.length > 0 ? (
                        <div className="row">
                          {filteredChildren.map((animal, index) => (
                            <div key={index} className="col-lg-3 px-3 pt-4">
                              <AnimalCard {...animal} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No Child animals found.</p>
                      )}
                    </>
                  )}
                </>
              )}

              {activeTab !== "child" && (
                <>
                  <p className="record-para mb-4">Fill {activeTab} details below</p>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-4">
                      <div className="col-lg-3 pb-3">
                        <Form.Group>
                          <Form.Label>Unique ID</Form.Label>
                          <Form.Control type="text" value={parentId} readOnly />
                        </Form.Group>
                      </div>
                      {fieldConfigs[activeTab]?.map((field, index) => (
                        <div key={index} className="col-lg-3 pb-3">
                          <Form.Group>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control type={field.type} {...register(field.name, { required: field.required })} />
                            {errors[field.name] && <span className="text-danger">This field is required</span>}
                          </Form.Group>
                        </div>
                      ))}
                    </div>
                    <Button type="submit" className="record-btn">Submit</Button>
                  </Form>
                </>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Record;
