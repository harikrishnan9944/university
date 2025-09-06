"use client";

import { useFormik } from "formik";
import { RegisterSchema } from "../validation_schema/Register_Form";
import axios from "axios";
export default function Register_Form() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dob: "",
      contact: "",
      email: "",
      college: "",
      department: "",
      year: "",
      rollNo: "",
      events: [] as string[],
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post("/api/form", values);
        console.log(res.data);
        resetForm()
      } catch (error) {}
    },
  });

  const eventOptions = ["Hackathon", "Workshop", "Seminar", "Sports"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-gray-950/80 shadow-[0_0_25px_rgba(34,197,94,0.7)] backdrop-blur-md border border-gray-800 p-8 rounded-2xl  w-full max-w-3xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Student Registration Form
        </h2>

 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
            )}
          </div>
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
          />
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
            )}
          </div>
        </div>

        
        <div>
          <label className="block text-gray-300 font-medium mb-2">Gender</label>
          <div className="flex gap-6">
            {["Male", "Female", "Other"].map((g) => (
              <label
                key={g}
                className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition"
              >
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formik.values.gender === g}
                  onChange={formik.handleChange}
                  className="accent-blue-500"
                />
                {g}
              </label>
            ))}
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <p className="text-red-500 text-sm">{formik.errors.gender}</p>
          )}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="date"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.dob && formik.errors.dob && (
              <p className="text-red-500 text-sm">{formik.errors.dob}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formik.values.contact}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.contact && formik.errors.contact && (
              <p className="text-red-500 text-sm">{formik.errors.contact}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formik.values.college}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.college && formik.errors.college && (
              <p className="text-red-500 text-sm">{formik.errors.college}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formik.values.department}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.department && formik.errors.department && (
              <p className="text-red-500 text-sm">{formik.errors.department}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={formik.values.year}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.year && formik.errors.year && (
              <p className="text-red-500 text-sm">{formik.errors.year}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="rollNo"
              placeholder="Roll Number"
              value={formik.values.rollNo}
              onChange={formik.handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.rollNo && formik.errors.rollNo && (
              <p className="text-red-500 text-sm">{formik.errors.rollNo}</p>
            )}
          </div>
        </div>

        
        <div>
          <label className="block text-gray-300 font-medium mb-2">Events</label>
          <div className="flex flex-wrap gap-6">
            {eventOptions.map((event) => (
              <label
                key={event}
                className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition"
              >
                <input
                  type="checkbox"
                  name="events"
                  value={event}
                  checked={formik.values.events.includes(event)}
                  onChange={formik.handleChange}
                  className="accent-green-500"
                />
                {event}
              </label>
            ))}
          </div>
          {formik.touched.events && formik.errors.events && (
            <p className="text-red-500 text-sm">{formik.errors.events}</p>
          )}
        </div>

    
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 hover:scale-100  hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
