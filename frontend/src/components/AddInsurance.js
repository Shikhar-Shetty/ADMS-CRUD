import axios from "axios";
import { useEffect, useState } from "react";

export default function AddInsurance(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    loadUpdate();
  }, []);

  const loadUpdate = () => {
    if (props.update != {}) {
      setName(props.update.name);
      setDesc(props.update.description);
      setType(props.update.insuranceType);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("here");
    if (props.update.id == null) {
      console.log("here");
      await axios.post("http://localhost:5000/insurance", {
        name: name,
        description: desc,
        insuranceType: type,
      });
    } else {
      await axios.patch(`http://localhost:5000/insurance/${props.update.id}`, {
        name: name,
        description: desc,
        insuranceType: type,
      });
    }
    props.setUpdate({});
    resetHandler();
    props.getData();
    props.setFunc(0);
  };

  const resetHandler = () => {
    setName("");
    setDesc("");
    setType("");
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Insurance Form
        </div>
        <label className="p-1">Enter Insurance Name</label>
        <input
          className="rounded-lg text-black p-1 "
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Description of Insurance</label>
        <input
          className="rounded-lg text-black p-1 "
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <label className="p-1">Enter Insurance Type</label>
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
