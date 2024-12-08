import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import axios from "axios";
import AddTemperature from "./components/AddTemperature";
import AddRainfall from "./components/AddRainfall";
import AddSoil from "./components/AddSoil";
import AddCrop from "./components/AddCrop";
import AddCropRequirements from "./components/AddCropRequirements";
import image1 from "./images/Farmer.png"

function App() {
  const [func, setFunc] = useState(0);
  const [update, setUpdate] = useState({});
  const [url, setUrl] = useState("");
  const [tableHeader, setTableHeader] = useState([]);
  const [tableKey, setTableKey] = useState([]);
  const [data, setData] = useState([]);

  const tableHeaders = {
    temperature: [
      "Temperature Id",
      "Name",
      "Start Temperature",
      "End Temperature",
    ],
    rainfall: ["Rainfall Id", "Name", "Density"],
    soil: ["Soil Id", "Name", "Soil Moisture", "Soil Type"],
    crop: ["Crop Id", "Name", "Crop Type", "Time Taken", "Price"],
    cropRequirements: ["Crop Id", "Soil Id", "Rainfall Id", "Temperature Id"],
  };

  const tableKeys = {
    temperature: ["id", "name", "startTemperature", "endTemperature"],
    rainfall: ["id", "name", "density"],
    soil: ["id", "name", "moisture", "type"],
    crop: ["id", "name", "type", "timeTaken", "price"],
    cropRequirements: ["cropId", "soilId", "rainfallId", "temperatureId"],
  };

  const navs = {
    temperature: "Temperature",
    rainfall: "Rainfall",
    soil: "Soil",
    crop: "Crop",
    cropRequirements: "Crop Requirements",
  };

  const urls = ["temperature", "rainfall", "soil", "crop", "cropRequirements"];

  useEffect(() => {
    getData("temperature");
  }, []);

  const updateHandler = (data) => {
    setUpdate(data);
    setFunc(2);
  };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/${url}/${id}`);
    getData(url);
  };

  const getData = async (url) => {
    const response = await axios.get(`http://localhost:5000/${url}`);
    setData(response.data);
  };

  const getContent = () => {
    if (func != 2) {
      return (
        <Table
          title={navs[url]}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
          headers={tableHeader}
          udcheck={"id"}
          func={func}
          rows={data}
          keys={tableKey}
        />
      );
    }
    switch (url) {
      case "temperature":
        return (
          <AddTemperature
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "rainfall":
        return (
          <AddRainfall
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "soil":
        return (
          <AddSoil
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "crop":
        return (
          <AddCrop
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "cropRequirements":
        return (
          <AddCropRequirements
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );
    }
  };

  const navClickHandler = (i) => {
    setUrl(urls[i]);
    setFunc(0);
    getData(urls[i]);
    setTableHeader(tableHeaders[urls[i]]);
    setTableKey(tableKeys[urls[i]]);
  };

  return (
    <div className=" bg-yellow-400 text-black w-screen h-screen">
      <div
        className="bg-white text-black uppercase flex font-sans flex-row p-3 my-5"
        style={{ height: "7vh" }}
      >
        <div className="text-left font-bold uppercase text- ml-1 mr-auto text-black rounded-full  pl-5 pr-5 pt-1  leading-tight mt-[-0.5rem] ">
          <button onClick={() => setUrl("")}>
            AGRITECHNO <br/> MANAGEMENT SYSTEM <span className="text-yellow-500 font-bold">.</span>
          </button>
        </div> 
        {urls.map((item, index) => (
          <div className="ml-3 mx-3 py-1 my-2.5 rounded-full border font-mono text-center border-solid border-black px-6 hover:bg-black hover:text-white">
            <button onClick={() => navClickHandler(index)}>{navs[item]}</button>
          </div>
        ))}
      </div>
      {url != "" && (
        <div className="w-full bg-white mt-[-1.15rem]" style={{ height: "93vh" }}>
          <Buttons
            setFunc={setFunc}
            title={navs[url]}
            style={{ height: "8vh" }}
          />
          <div
            style={{ height: "86vh" }}
            className={"w-full justify-center" + (func == 2 ? " flex" : " ")}
          >
            {getContent()}
          </div>
        </div>
      )}
      {url == "" && (
        <div
          className="w-full bg-white flex flex-row justify-center items-center text-center mt-[-1.15rem]"
          style={{ height: "92.5vh" }}
        >
          <div className=" text-9xl text-left font-bold items-center " style={{animation: "ping 1s ease-in 1"}}>
            Welcome
            <div className="text-6xl font-extralight font-sans">
              AgriTechno<br/> <span className="text-yellow-500">Management System</span> 
            </div>
          </div>
          <div className="w-80">
            <img src={image1} alt="Not-Found" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
