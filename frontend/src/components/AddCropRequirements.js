import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTaken(props) {
  const [cropId, setCropId] = useState("");
  const [soilId, setSoilId] = useState("");
  const [rainfallId, setRainfallId] = useState("");
  const [temperatureId, setTemperatureId] = useState("");

  useEffect(() => {
    loadUpdate();
  }, []);

  const loadUpdate = () => {
    if (props.update != {}) {
      setCropId(props.update.cropId);
      setSoilId(props.update.soilId);
      setRainfallId(props.update.rainfallId);
      setTemperatureId(props.update.temperatureId);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (props.update.id == null) {
      await axios.post("http://localhost:5000/croprequirements", {
        cropId: cropId,
        soilId: soilId,
        rainfallIdTaken: rainfallId,
        temperatureIdPerMonth: temperatureId,
      });
    } else {
      await axios.patch(
        `http://localhost:5000/croprequirements/${props.update.id}`,
        {
          cropId: cropId,
          soilId: soilId,
          rainfallIdTaken: rainfallId,
          temperatureIdPerMonth: temperatureId,
        }
      );
    }
    props.setUpdate({});
    resetHandler();
    props.getData();
    props.setFunc(0);
  };

  const resetHandler = () => {
    setCropId("");
    setSoilId("");
    setRainfallId("");
    setTemperatureId("");
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Crop Requirements Form
        </div>
        <label className="p-1">Enter Crop Id</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setCropId(e.target.value)}
          value={cropId}
        />
        <label className="p-1">Enter Soil id</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setSoilId(e.target.value)}
          value={soilId}
        />
        <label className="p-1">Enter Rainfall Id</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setRainfallId(e.target.value)}
          value={rainfallId}
        />
        <label className="p-1">Enter Temperature Id </label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setTemperatureId(e.target.value)}
          value={temperatureId}
        />
        <div className="flex flex-row p-1 mt-2 justify-center">
          <button type="submit" className="bg-green-900 w-1/3 p-1 rounded mr-1">
            Submit
          </button>
          <button
            type="reset"
            onClick={resetHandler}
            className="bg-red-900 w-1/3 p-1 rounded ml-1"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
