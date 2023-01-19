import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Cards.css";

//Importar todas las imagenes de las carpetas mencionadas.

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imagesIn = importAll(
  require.context("../../assets/instalaciones/", false, /\.(png|jpe?g|svg)$/)
);

const images = importAll(
  require.context("../../assets/refacciones/", false, /\.(png|jpe?g|svg)$/)
);

// Cards 
function Cards() {
  return (
    <div className="cards">
      <div>
        <h1>Algunos de nuetros servicios</h1>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={images["pcBuild.jpg"]}
              text="Armado de Computadoras"
              alt="PC-BUILDING-INTEGRASYS-COMPUTACION-CHIHUAHUA-CUU"
              label="BUILDING"
              path="/services"
            />
            <CardItem
              src={images["cctvInstall.jpg"]}
              text="Instalacion De Sistemas de Circuito Cerrado"
              alt="SEGURIDAD-VIDEOVIGILANCIA-CCTV-CHIHUAHUA-CUU"
              label="SEGURIDAD"
              path="/services"
            />
            <CardItem
              src={images["repairLap.jpg"]}
              text="Equipo De Computo Como Laptops, Tablets, PCs y Mas"
              alt="Reparacion-Refacciones-Arreglar-Computo-Tablet-Laptop-Pc-Teclado"
              label="REPARACION"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images["printerRepair.jpg"]}
              text="Armado de Computadoras"
              alt="PC-BUILDING-INTEGRASYS-COMPUTACION-CHIHUAHUA-CUU"
              label="BUILDING"
              path="/services"
            />
            <CardItem
              src={imagesIn["structuredCable.jpg"]}
              text="Armado de Computadoras"
              alt="PC-BUILDING-INTEGRASYS-COMPUTACION-CHIHUAHUA-CUU"
              label="BUILDING"
              path="/services"
            />
            <CardItem
              src={images["mac.jpg"]}
              text="Refacciones de Dispositivos Apple"
              alt="MAC-APPLE-REFACCIONES-REPARACION-CHIHUAHUA-CUU"
              label="APPLE REPAIR"
              path="/services"
            />
          </ul>
          
          <div>
            <h2>Conocelos todos lo que podemos ofrecerte</h2>
            <Link to="/Servicios" className="lnk">
              <Button className="btn" to="/servicios">
                AQUI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
