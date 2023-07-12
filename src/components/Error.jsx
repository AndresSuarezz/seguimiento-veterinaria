const Error = ({ mensaje }) => {
  
  return (
    <div className="bg-red-500 text-white text-center p-3 uppercase font-bold mb-3 rounded">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;