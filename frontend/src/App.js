import { useEffect, useState } from "react";
import AddCompany from "./components/AddCompany";
import AddCustomer from "./components/AddCustomer";
import AddInsurance from "./components/AddInsurance";
import AddProvided from "./components/AddProvided";
import AddTaken from "./components/AddTaken";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import axios from "axios";

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
    temperature: ["id", "name", "startTemp", "endTemp"],
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
          <AddInsurance
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "rainfall":
        return (
          <AddCustomer
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "soil":
        return (
          <AddCompany
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "crop":
        return (
          <AddProvided
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "cropRequirements":
        return (
          <AddTaken
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
    <div className=" bg-blue-300 w-screen h-screen">
      <div
        className="bg-blue-900 text-white flex flex-row p-2"
        style={{ height: "7vh" }}
      >
        <div className=" text-xl ml-1 mr-auto">
          <button onClick={() => setUrl("")}>
            AgriTechno Management System
          </button>
        </div>
        {urls.map((item, index) => (
          <div className="ml-3 py-1">
            <button onClick={() => navClickHandler(index)}>{navs[item]}</button>
          </div>
        ))}
      </div>
      {url != "" && (
        <div className="w-full bg-blue-500" style={{ height: "93vh" }}>
          <Buttons
            setFunc={setFunc}
            title={navs[url]}
            style={{ height: "8vh" }}
          />
          <div
            style={{ height: "85vh" }}
            className={"w-full justify-center" + (func == 2 ? " flex" : " ")}
          >
            {getContent()}
          </div>
        </div>
      )}
      {url == "" && (
        <div
          className="w-full bg-blue-500 flex flex-col justify-center text-center"
          style={{ height: "93vh" }}
        >
          <div className=" text-9xl font-bold">
            Welcome
            <div className="text-5xl font-extralight">
              AgriTechno Management System
            </div>
          </div>
          <div className="absolute right-10 bottom-10 bg-blue-900 rounded p-2">
            <div className=" text-left font-bold text-2xl underline">
              Project By,{" "}
            </div>
            <table className=" text-left text-white text-xl">
              <tr>
                <td className="pl-5">Vaishnavi </td>
                <td className="pl-5">4JK20IS000</td>
              </tr>
              <tr>
                <td className="pl-5">Disha </td>
                <td className="pl-5">4JK20IS000</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
