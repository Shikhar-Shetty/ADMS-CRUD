import { FaEdit, FaTrash } from "react-icons/fa";

export default function Table(props) {
  return (
    <>
      <div className="w-full text-center text-3xl font-bold underline rounded p-1">
        {props.title + " List"}
      </div>
      <table className="w-full text-center border-separate text-sm pt-1 px-5">
        <tr className="bg-blue-900">
          {props.headers.map((header) => (
            <th className="p-1">{header}</th>
          ))}
          {props.func == 1 && <th className="p-1">Update/Delete</th>}
        </tr>
        {props.rows != null &&
          props.rows.map((row) => {
            return (
              <tr className="bg-blue-200">
                {props.keys.map((key) => (
                  <td className="p-1">{row[key] + ""}</td>
                ))}
                {props.func == 1 && (
                  <td>
                    <button
                      className="bg-green-900 rounded w-1/3 mr-1 p-0.5 text-white"
                      onClick={() => props.updateHandler(row)}
                    >
                      <FaEdit className="inline mb-1 mr-1 " />
                      Update
                    </button>
                    <button
                      className="bg-red-900 rounded w-1/3 p-0.5 text-white"
                      onClick={() => props.deleteHandler(row[props.udcheck])}
                    >
                      <FaTrash className="inline mb-1 mr-1 " />
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
      </table>
    </>
  );
}
