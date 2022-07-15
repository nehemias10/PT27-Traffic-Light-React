import React, { useState } from "react";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState ("rojo");

	
	return (
		<div className="semaforo">
			<div className="barra"></div>

			<div className="luces">

			<div
			onClick={() => setSelectedColor("rojo") }
			className={" rojo " + (selectedColor === "rojo" ? "glow" : "" )}></div>

			<div 
			onClick={() => setSelectedColor("amarillo")}
			className={" amarillo " + (selectedColor === "amarillo" ? "glow" : "" )}></div>

			<div 
			onClick={() => setSelectedColor("verde")}
			className={" verde " + (selectedColor === "verde" ? "glow" : "" )}></div>

			</div>
			<Footer/>
		</div>
	
	);
};

export default Home;
