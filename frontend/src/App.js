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
    insurance: [
      "Insurance Id",
      "Insurance Name",
      "Description",
      "Insurance Type",
    ],
    customer: ["Customer Id", "Name", "Address", "Mobile No", "Email"],
    company: [
      "Company Id",
      "Name",
      "Address",
      "Mobile No",
      "Email",
      "Net Worth",
    ],
    provided: ["Company Id", "Insurance Id"],
    taken: ["Customer Id", "Insurance Id", "Term Taken", "Price Per Month"],
  };

  const tableKeys = {
    insurance: ["id", "name", "description", "insuranceType"],
    customer: ["id", "name", "address", "mobileNo", "emailAddress"],
    company: ["id", "name", "address", "mobileNo", "emailAddress", "netWorth"],
    provided: ["companyId", "insuranceId"],
    taken: ["customerId", "insuranceId", "termTaken", "pricePerMonth"],
  };

  const navs = {
    insurance: "Insurance",
    customer: "Customer",
    company: "Company",
    provided: "Insurances Provided By Companies",
    taken: "Insurances Taken By Customers",
  };

  const urls = ["insurance", "customer", "company", "provided", "taken"];

  useEffect(() => {
    getData("insurance");
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
      case "insurance":
        return (
          <AddInsurance
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "customer":
        return (
          <AddCustomer
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "company":
        return (
          <AddCompany
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "provided":
        return (
          <AddProvided
            getData={() => getData(url)}
            setFunc={setFunc}
            update={update}
            setUpdate={setUpdate}
          />
        );

      case "taken":
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
            Insurance Management System
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
              Insurance Management System
            </div>
          </div>
          <div className="absolute right-10 bottom-10 bg-blue-900 rounded p-2">
            <div className=" text-left font-bold text-2xl underline">
              Project By,{" "}
            </div>
            <table className=" text-left text-white text-xl">
              <tr>
                <td className="pl-5">Isha Sheikh Bashir </td>
                <td className="pl-5">4JK20CS018</td>
              </tr>
              <tr>
                <td className="pl-5">Anvitha </td>
                <td className="pl-5">4JK20CS009</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
