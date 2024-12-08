export default function Buttons(props) {
  return (
    <div
      className="flex flex-row w-full justify-center items-center text-white p-3"
      style={props.style}
    >
      <div className="w-full text-center">
        <button
          onClick={() => props.setFunc(2)}
          className="bg-black text-white rounded-full border-black border-5 py-2 px-2 w-4/5  hover:bg-white hover:shadow-md hover:text-black hover:border-black transition duration-300 ease-in-out active:text-black active:bg-white"
        >
          Add New {props.title}
        </button>
      </div>
      <div className="w-full text-center">
        <button
          onClick={() => props.setFunc(1)}
          className="bg-black text-white rounded-full border-black py-2 px-3 w-4/5 hover:bg-white hover:shadow-md hover:text-black transition duration-300 ease-in-out active:text-black active:bg-white "
        >
          Update/Delete {props.title}
        </button>
      </div>
      <div className="w-full text-center">
        <button
          onClick={() => props.setFunc(0)}
          className="bg-black text-white rounded-full m-8 border-black py-2 px-3 w-4/5 hover:bg-white hover:shadow-md hover:text-black transition duration-300 ease-in-out active:text-black active:bg-white"
        >
          View {props.title}
        </button>
      </div>
    </div>
  );
}
