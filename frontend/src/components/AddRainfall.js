import axios from "axios";
import { useEffect, useState } from "react";

export default function AddRainfall(props) {
  const [name, setName] = useState("");
  const [density, setDensity] = useState("");

  useEffect(() => {
    loadUpdate();
  }, []);

  const loadUpdate = () => {
    if (props.update != {}) {
      setName(props.update.name);
      setDensity(props.update.density);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (props.update.id == null) {
      await axios.post("http://localhost:5000/rainfall", {
        name: name,
        density: density,
      });
    } else {
      await axios.patch(`http://localhost:5000/rainfall/${props.update.id}`, {
        name: name,
        density: density,
      });
    }
    props.setUpdate({});
    resetHandler();
    props.getData();
    props.setFunc(0);
  };

  const resetHandler = () => {
    setName("");
    setDensity("");
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} className="w-1/2 flex">
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Rainfall Form
        </div>
        <label className="p-1">Enter Rainfall Name</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Rainfall Density</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setDensity(e.target.value)}
          value={density}
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
