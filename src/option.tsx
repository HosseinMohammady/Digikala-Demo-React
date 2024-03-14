import { Link } from "react-router-dom";
const option = () => {
  return (
    <div className="text-left m-5">
      <h2 className="text-5xl min-[320px]:text-3xl mb-7">Page is not ready</h2>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default option;
