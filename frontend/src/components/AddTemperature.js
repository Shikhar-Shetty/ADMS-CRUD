import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTemperature(props) {
  const [name, setName] = useState("");
  const [startTemperature, setStartTemperature] = useState("");
  const [endTemperature, setEndTemperature] = useState("");

  useEffect(() => {
    loadUpdate();
  }, []);

  const loadUpdate = () => {
    if (props.update != {}) {
      setName(props.update.name);
      setStartTemperature(props.update.startTemperature);
      setEndTemperature(props.update.endTemperature);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (props.update.id == null) {
      await axios.post("http://localhost:5000/temperature", {
        name: name,
        startTemperature: startTemperature,
        endTemperature: endTemperature,
      });
    } else {
      await axios.patch(
        `http://localhost:5000/temperature/${props.update.id}`,
        {
          name: name,
          startTemperature: startTemperature,
          endTemperature: endTemperature,
        }
      );
    }
    props.setUpdate({});
    resetHandler();
    props.getData();
    props.setFunc(0);
  };

  const resetHandler = () => {
    setName("");
    setStartTemperature("");
    setEndTemperature("");
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Temperature Form
        </div>
        <label className="p-1">Enter Temperature Name</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Start Temperature</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setStartTemperature(e.target.value)}
          value={startTemperature}
        />
        <label className="p-1">Enter End Temperature</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setEndTemperature(e.target.value)}
          value={endTemperature}
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
