import axios from "axios";
import { useEffect, useState } from "react";

export default function AddCrop(props) {
  const [timeTaken, setTimeTaken] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    loadUpdate();
  }, []);

  const loadUpdate = () => {
    if (props.update != {}) {
      setTimeTaken(props.update.timeTaken);
      setPrice(props.update.price);
      setName(props.update.name);
      setType(props.update.type);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (props.update.id == null) {
      await axios.post("http://localhost:5000/crop", {
        timeTaken: timeTaken,
        price: price,
        name: name,
        type: type,
      });
    } else {
      await axios.patch(`http://localhost:5000/crop/${props.update.id}`, {
        timeTaken: timeTaken,
        price: price,
        name: name,
        type: type,
      });
    }
    props.setUpdate({});
    resetHandler();
    props.getData();
    props.setFunc(0);
  };

  const resetHandler = () => {
    setTimeTaken("");
    setPrice("");
    setName("");
    setType("");
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Crop Form
        </div>
        <label className="p-1">Enter Crop Name</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Crop Type</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
        <label className="p-1">Enter Time Taken for Crop</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setTimeTaken(e.target.value)}
          value={timeTaken}
        />
        <label className="p-1">Enter Price</label>
        <input
          className="rounded-lg text-black p-1"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
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
