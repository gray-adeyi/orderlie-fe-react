import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const ClassList = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleUpdate = () => {
    // Logic for updating information
  };

  const handleDelete = () => {
    // Logic for deleting information
    Axios.delete("/api/v1/{class_id}/students/{student_id}")
      .then((response) => {
        console.log("Student information deleted:", response.data);

        // Show an alert popup upon successful deletion
        window.alert("Student information has been successfully deleted.");
      })
      .catch((error) => {
        console.error("Error deleting student information:", error);
      });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center space-x-1 px-3">
        <Link to="/upload-bio-data">
          <button className="flex rounded-xl text-center border border-sm py-1 px-1 text-bgColor border-bgColor sm:py-2 md:px-5 lg:px-10">
            Upload Bio-Data
          </button>
        </Link>
        <Link to="/new-class">
          <button className="flex rounded-xl py-2 px-2 sm:px-7 md:px-10 text-white bg-bgColor">
            Class List
          </button>
        </Link>
        <Link
          to="/newclass"
          className="flex rounded-xl border text-center border-sm py-1 px-1 sm:py-2 md:px-5 lg:px-10 text-bgColor border-bgColor"
        >
          Create New Class
        </Link>
      </div>

			<h3 className='text-sm font-bold mx-4 sm:text-2xl lg:text-2xl lg:mx-16 mt-10'>
				COMPUTER SCIENCE 200L
			</h3>
			<div className='flex sm:flex-row flex-col justify-between'>
				<div className='flex flex-col  mx-4 lg:mx-16 '>
					<h3 className='text-sm mt-7 sm:text-2xl lg:text-2xl'>
						CLASS GOVERNOR: ADETOYE GLORY
					</h3>
					<h3 className='text-sm mt-1 sm:text-2xl lg:text-2xl'>
						DEPUTY CLASS GOVERNOR: ADETOYE GLORY
					</h3>
				</div>
				<div className='mx-4 lg:mx-16'>
					<h3 className='text-sm sm:mt-7 mt-1 sm:text-2xl lg:text-2xl'>
						MEMBERS COUNT: 3
					</h3>
				</div>
			</div>
			<div class='relative overflow-x-auto rounded-lg sm:rounded-xl mx-4 sm:mx-16 mt-5'>
				<table class='w-full text-sm text-left text-black border border-bgColor rounded-lg'>
					<thead class='text-lg text-white  bg-bgColor'>
						<tr>
							<th
								scope='col'
								class='px-6 py-3'></th>
							<th
								scope='col'
								class='px-6 py-3'>
								Last Name
							</th>
							<th
								scope='col'
								class='px-6 py-3'>
								First Name
							</th>
							<th
								scope='col'
								class='px-6 py-3'>
								Middle Name
							</th>
							<th
								scope='col'
								class='px-6 py-3'>
								Matric No
							</th>
							<th
								scope='col'
								class='px-6 py-3'></th>
						</tr>
					</thead>
					<tbody>
						<tr class='bg-white border-b'>
							<th
								scope='row'
								class='px-4 py-4 font-medium text-black whitespace-nowrap  '>
								1.
							</th>
							<td class='px-6 py-4'>ADETOYE</td>
							<td class='px-6 py-4'>GLORY</td>
							<td class='px-6 py-4'>TOLU</td>
							<td class='px-6 py-4'>12345678900</td>
							<td className='px-6 py-4'>
								<a
									href='#'
									className='font-extrabold text-blue-600 dark:text-blue-500 hover:underline'
									onClick={() => setIsDivVisible(true)}>
									<FontAwesomeIcon icon={faEdit} />
								</a>
							</td>
						</tr>
						<tr class='bg-white border-b'>
							<th
								scope='row'
								class='px-4 py-4 font-medium text-black whitespace-nowrap '>
								2.
							</th>
							<td class='px-6 py-4'>ADETOYE</td>
							<td class='px-6 py-4'>GLORY</td>
							<td class='px-6 py-4'>TOLU</td>
							<td class='px-6 py-4'>12345678900</td>
							<td className='px-6 py-4'>
								<a
									href='#'
									className='font-extrabold text-blue-600 dark:text-blue-500 hover:underline'
									onClick={() => setIsDivVisible(true)}>
									<FontAwesomeIcon icon={faEdit} />
								</a>
							</td>
						</tr>
						<tr class='bg-white border-b'>
							<th
								scope='row'
								class='px-4 py-4 font-medium text-black whitespace-nowrap '>
								3.
							</th>
							<td class='px-6 py-4'>ADETOYE</td>
							<td class='px-6 py-4'>GLORY</td>
							<td class='px-6 py-4'>TOLU</td>
							<td class='px-6 py-4'>12345678900</td>
							<td className='px-6 py-4'>
								<a
									href='#'
									className='font-extrabold text-blue-600 dark:text-blue-500 hover:underline'
									onClick={() => setIsDivVisible(true)}>
									<FontAwesomeIcon icon={faEdit} />
								</a>
							</td>
						</tr>
						<tr class='bg-white '>
							<th
								scope='row'
								class='px-4 py-4 font-medium text-black whitespace-nowrap '></th>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
						</tr>
						<tr class='bg-white '>
							<th
								scope='row'
								class='px-4 py-4 font-medium text-black whitespace-nowrap '></th>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
						</tr>
						<tr class='bg-white '>
							<th
								scope='row'
								class='px-4 py-4 font-medium text-black whitespace-nowrap '></th>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
						</tr>
						<tr class='bg-white '>
							<th
								scope='row'
								class='px-4 py-4 font-medium text-black whitespace-nowrap '></th>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
							<td class='px-6 py-4'></td>
						</tr>
						{isDivVisible && (
							<div className='absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-bgColor'>
								{/* Edit and Cancel icons */}
								<div className='flex justify-between mb-4 border-b border-bgColor'>
									<h3 className='text-xl font-semibold'>Edit</h3>
									<FontAwesomeIcon
										icon={faTimes}
										className='cursor-pointer'
										onClick={() => setIsDivVisible(false)}
									/>
								</div>

                {/* Update Info and Delete Info buttons */}
                <div className="flex justify-between">
                  <button
                    className="border border-bgColor text-bgColor px-2 py-1 mr-3 rounded hover:bg-blue-700"
                    onClick={handleUpdate}
                  >
                    Update Info
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={handleDelete}
                  >
                    Delete Info
                  </button>
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-5 border border-xl border-bgColor mx-4 lg:mx-32 rounded-lg sm:rounded-xl">
        <div>
          <h3 className="bg-bgColor py-2 px-1 rounded-tl-xl rounded-tr-xl text-center text-white ">
            DOWNLOAD CLASS DATA
          </h3>
        </div>
        <div className="flex flex-col mx-4 lg:mx-40 mt-4">
          <button className="text-xs sm:text-xl rounded-2xl border border-sm py-1 px-2 mt-2 text-white bg-bgColor ">
            Class Data As xlsx [Excel sheet]
          </button>
          <button className="text-xs sm:text-xl rounded-2xl border border-sm py-1 px-2 mt-2 text-white bg-bgColor ">
            Name merged As xlsx [Excel sheet]
          </button>
          <button className="text-xs sm:text-xl rounded-2xl border border-sm py-1 px-2 mt-2 text-white bg-bgColor ">
            Class Data As docx [Word document]
          </button>
          <button className="text-xs sm:text-xl rounded-2xl border border-sm py-1 px-2 mt-2 mb-10 text-white bg-bgColor ">
            Name merged As docx [Word document]
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassList;
