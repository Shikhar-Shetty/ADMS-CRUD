import axios from "axios";
import { useEffect, useState } from "react";

export default function AddSoil(props) {
  const [name, setName] = useState("");
  const [moisture, setMoisture] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    loadUpdate();
  }, []);

  const loadUpdate = () => {
    if (props.update != {}) {
      setName(props.update.name);
      setMoisture(props.update.moisture);
      setType(props.update.type);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (props.update.id == null) {
      await axios.post("http://localhost:5000/soil", {
        name: name,
        moisture: moisture,
        type: type,
      });
    } else {
      await axios.patch(`http://localhost:5000/soil/${props.update.id}`, {
        name: name,
        moisture: moisture,
        type: type,
      });
    }
    props.setUpdate({});
    resetHandler();
    props.getData();
    props.setFunc(0);
  };

  const resetHandler = () => {
    setName("");
    setMoisture("");
    setType("");
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Soil Form
        </div>
        <label className="p-1">Enter Soil Name</label>
        <input
          className="rounded-lg text-black p-1 "
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Soil Moisture</label>
        <input
          className="rounded-lg text-black p-1 "
          type="text"
          onChange={(e) => setMoisture(e.target.value)}
          value={moisture}
        />
        <label className="p-1">Enter Soil Type</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setType(e.target.value)}
          value={type}
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
