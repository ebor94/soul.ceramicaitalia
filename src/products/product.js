import { useEffect, useState } from "react";
import CheckInlineExample from "../filters/check";
import Usos from "../filters/switch";
import Accesosintext from "../filters/accesos.js";
import Space from "../filters/space";
import Tipologia from "../filters/listTipologias";
import GetSensationss from "../filters/listSesantions";
import GetFormats from "../filters/ListFormat";
import ProductList from "./listProduct";
import {  InfoProd  } from "../data/products";

function Getproducts() {

  const [SUPERFICIE, SETSUPERFICIE] = useState([]);
  const [productListacceso, setproductListacceso] = useState([]);
  const [productListSpace, setproductListSpace] = useState([]);
  const [TIPOLOGIA, SETTIPOLOGIA] = useState([]);
  const [sensacion, setsensacion] = useState([]);
  const [TAMANO, SETTAMANO] = useState([]);
  const [AREACOMERCIAL, SETAREACOMERCIAL] =  useState([]);
  const [AREARESIDENCIAL, SETAREARESIDENCIAL] = useState([]);
  const [AREAINSTITUCIONAL, SETAREAINSTITUCIONAL] = useState([]);
  const [AREAEXTERIOR, SETAREAEXTERIOR] = useState([]);


  const [userList, setUserList] = useState([]);

  useEffect(() => {
    InfoProd()
      .then(userList => setUserList(userList))
      .catch(error => {
        // handle any error state, rejected promises, etc..
      });
  }, []);


  const filteredProduct = userList.filter(
    (product) => SUPERFICIE.length === 0 || SUPERFICIE.includes(product.SUPERFICIE)
  )
    .filter(
      (product) =>
      AREARESIDENCIAL.length === 0 ||
      AREARESIDENCIAL.includes(product.AREARESIDENCIAL)
    )
    .filter(
      (product) =>
      TIPOLOGIA.length === 0 || TIPOLOGIA.includes(product.TIPOLOGIA)
    )
    .filter(
      (product) =>
        sensacion.length === 0 || sensacion.includes(product.sensacion)
    )
    .filter(
      (product) => TAMANO.length === 0 || TAMANO.includes(product.TAMANO)
    )
    .filter((product)=>AREACOMERCIAL.length === 0 || AREACOMERCIAL.includes(product.AREACOMERCIAL)
    )
    .filter((product)=>AREAINSTITUCIONAL.length === 0 || AREAINSTITUCIONAL.includes(product.AREAINSTITUCIONAL)
    )
    .filter((product)=>AREAEXTERIOR.length === 0 || AREAEXTERIOR.includes(product.EXTERIOR));

 
  const handleuso = (e) => {
    SUPERFICIE.includes(e.target.name);
    SETSUPERFICIE(
      SUPERFICIE.includes(e.target.name)
        ? SUPERFICIE.filter((product) => product !== e.target.name)
        : [...SUPERFICIE, e.target.name]
    );
  };

  const handleresidencial = (e) => {
    console.log(e.target)
    if(e.target.value === "true"){
      e.target.value = "SI"
    }
    if(e.target.value === "false"){
      e.target.value = "NO"
    }
      console.log(e.target)
      console.log("residencial")
    SETAREARESIDENCIAL(
      AREARESIDENCIAL.includes(e.target.value) ? AREARESIDENCIAL.filter((product) => product !== e.target.value): [...AREARESIDENCIAL, e.target.value]
    );
  };

  const handleacceso = (e) => {
    setproductListacceso(
      productListacceso.includes(e.target.name)
        ? productListacceso.filter((product) => product !== e.target.name)
        : [...productListacceso, e.target.name]
    );
  };

  const handleSpace = (e) => {
    setproductListSpace(
      productListSpace.includes(e.target.name)
        ? productListSpace.filter((product) => product !== e.target.name)
        : [...productListSpace, e.target.name]
    );
  };

  const handletipologia = (e) => {
    SETTIPOLOGIA(
      TIPOLOGIA.includes(e.target.name)
        ? TIPOLOGIA.filter((product) => product !== e.target.name)
        : [...TIPOLOGIA, e.target.name]
    );
  };

  const handleSensation = (e) => {
    setsensacion(
      sensacion.includes(e.target.name)
        ? sensacion.filter((product) => product !== e.target.name)
        : [...sensacion, e.target.name]
    );
  };
  const handleFormat = (e) => {
    SETTAMANO(
      TAMANO.includes(e.target.name)
        ? TAMANO.filter((product) => product !== e.target.name)
        : [...TAMANO, e.target.name]
    );
  };

  const handlecomercial = (e) => {
  
  if(e.target.value === "true"){
    e.target.value = "SI"
  }
  if(e.target.value === "false"){
    e.target.value = "NO"
  }
  console.log(e.target)
  console.log("comercial")
    SETAREACOMERCIAL(      
      AREACOMERCIAL.includes(e.target.value) ? AREACOMERCIAL.filter((product) => product !== e.target.value) : [...AREACOMERCIAL, e.target.value]
    );
  };

  const handleinstitucional = (e) => {
   // console.log(e.target)
   if(e.target.value === "true"){
    e.target.value = "SI"
  }
  if(e.target.value === "false"){
    e.target.value = "NO"
  }
    console.log(e.target)
    console.log("institucional")
 
    SETAREAINSTITUCIONAL(      
      AREAINSTITUCIONAL.includes(e.target.value) ? AREAINSTITUCIONAL.filter((product) => product !== e.target.value) : [...AREAINSTITUCIONAL, e.target.value]
      );
    };

    const handleexterior = (e) => {
      // console.log(e.target)
      if(e.target.value === "true"){
       e.target.value = "SI"
     }
     if(e.target.value === "false"){
       e.target.value = "NO"
     }
       console.log(e.target)
       console.log("EXTERIOR")
    
       SETAREAEXTERIOR(      
        AREAEXTERIOR.includes(e.target.value) ? AREAEXTERIOR.filter((product) => product !== e.target.value) : [...AREAEXTERIOR, e.target.value]
         );
       };

  return (
    <div className="container">
      <div className="row">
      
        <Usos handleuso={handleuso} />
        <CheckInlineExample handleresidencial={handleresidencial}  handlecomercial={handlecomercial} handleinstitucional={handleinstitucional}  handleexterior={handleexterior}/>
        <Accesosintext handleacceso={handleacceso} />
      </div>
      <div className="row">
        <Space handleSpace={handleSpace} />
      </div>
      <div className="row">
        <Tipologia handletipologia={handletipologia} />
        <GetSensationss handleSensation={handleSensation} />
      </div>
      <div className="row">
        <GetFormats handleFormat={handleFormat} />
      </div>

      <div className="row">
        <ProductList filteredProduct={filteredProduct} />
      </div>
    </div>
  );
}

export default Getproducts;
