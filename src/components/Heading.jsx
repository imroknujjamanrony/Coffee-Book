/* eslint-disable react/prop-types */

const Heading = ({ title, subtitle }) => {
  return (
    <div className="py-6">
      <h1 className="text-4xl text-gray-500 font-semibold">{title}</h1>
      <p className="text-lg text-gray-500 font-normal">{subtitle}</p>
    </div>
  );
};

export default Heading;
