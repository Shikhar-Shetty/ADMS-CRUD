import axios from "axios";
import { useEffect, useState } from "react";

export default function AddCompany(props) {
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [mob, setMob] = useState("");
  const [ema, setEma] = useState("");
  const [net, setNet] = useState("");

  useEffect(() => {
    loadUpdate();
  }, []);

  const loadUpdate = () => {
    if (props.update != {}) {
      setName(props.update.name);
      setMob(props.update.mobileNo);
      setAddr(props.update.address);
      setEma(props.update.emailAddress);
      setNet(props.update.netWorth);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (props.update.id == null) {
      await axios.post("http://localhost:5000/company", {
        name: name,
        address: addr,
        mobileNo: mob,
        emailAddress: ema,
        netWorth: net,
      });
    } else {
      await axios.patch(`http://localhost:5000/company/${props.update.id}`, {
        name: name,
        address: addr,
        mobileNo: mob,
        emailAddress: ema,
        netWorth: net,
      });
    }
    props.setUpdate({});
    resetHandler();
    props.getData();
    props.setFunc(0);
  };

  const resetHandler = () => {
    setName("");
    setAddr("");
    setEma("");
    setMob("");
    setNet("");
  };

  return (
    <form className="w-1/2 flex" onSubmit={(e) => submitHandler(e)}>
      <div className="bg-blue-900 flex flex-col my-auto w-full rounded p-2 text-white">
        <div className="text-3xl font-bold underline text-center rounded p-1 ">
          Insurance Company Form
        </div>
        <label className="p-1">Enter Company Name</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="p-1">Enter Address</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setAddr(e.target.value)}
          value={addr}
        />
        <label className="p-1">Enter Mobile Number</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setMob(e.target.value)}
          value={mob}
        />
        <label className="p-1">Enter Email Address</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setEma(e.target.value)}
          value={ema}
        />
        <label className="p-1">Enter Net Worth</label>
        <input
          className="rounded-lg text-black p-1"
          type="text"
          onChange={(e) => setNet(e.target.value)}
          value={net}
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
