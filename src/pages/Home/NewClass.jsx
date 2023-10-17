import React, { useState } from "react";

const NewClass = () => {
  const [formData, setFormData] = useState({
    name: "",
    faculty: "",
    department: "",
    classGovernor: "",
    deputyClassGovernor: "",
    level: "",
    session: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createClass = () => {
    if (
      !formData.name ||
      !formData.faculty ||
      !formData.department ||
      !formData.classGovernor ||
      !formData.deputyClassGovernor ||
      !formData.level ||
      !formData.session
    ) {
      setError("Please fill all fields");
      return;
    }

    // Clear the error message if all fields are filled
    setError("");

    // Logic to create class using formData
    setIsLoading(true);

    // Simulating an API call
    setTimeout(() => {
      // After successful creation
      setIsLoading(false);
      setSuccessMessage("Class Created Successfully");
    }, 2000);
  };

  return (
    <div className="container mx-auto my-10 font-serrat">
      {/* Section 1 */}
      <div className="flex justify-center space-x-2 px-3">
      <button className=" rounded-xl border border-sm py-2 px-3 text-bgColor border-bgColor sm:py-2 md:px-5 lg:px-10">
    Upload Bio-Data
  </button>
        <button className="flex rounded-xl border border-sm py-2 px-3  text-bgColor border-bgColor  md:px-5 lg:px-10">
          Class List
        </button>
        <button className="flex rounded-xl py-2 px-3 sm:px-5 md:px-10 text-white bg-bgColor">
          Create New List
        </button>
      </div>

      {/* Section 2 */}
      <div className="mt-10 flex justify-center">
      <div className="border-2 border-bgColor w-full  mx-4 lg:mx-40 md:mx-40 rounded-2xl md:px-5 px-4 py-4 mb-6 ">
          <h1 className="text-2xl font-semibold mb-6  text-center">
            Create Class List
          </h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400"
                placeholder="Enter Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-600">
                Faculty
              </label>
              <input
                type="text"
                name="faculty"
                value={formData.faculty}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400"
                placeholder="Enter Faculty"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-600">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400"
                placeholder="Enter Department"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-600">
                Class Governor
              </label>
              <input
                type="text"
                name="classGovernor"
                value={formData.classGovernor}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400"
                placeholder="Enter Class Governor"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-600">
                Deputy Class Governor
              </label>
              <input
                type="text"
                name="deputyClassGovernor"
                value={formData.deputyClassGovernor}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400"
                placeholder="Enter Deputy Class Governor"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-600">
                Level
              </label>
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400"
                placeholder="Enter Level"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-600">
                Session
              </label>
              <input
                type="text"
                name="session"
                value={formData.session}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-2xl focus:outline-none border-bgColor focus:border-green-500 shadow-lg shadow-gray-400"
                placeholder="Enter Session"
              />
            </div>
          </div>

          <button
            className="btn mt-6 w-full rounded-xl py-2 px-4 text-white bg-bgColor"
            onClick={createClass}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create"}
          </button>
          {successMessage && (
            <div className="mt-4 text-green-500">{successMessage}</div>
          )}
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default NewClass;
