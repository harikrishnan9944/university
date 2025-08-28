"use client";

import { useFormik } from "formik";
import { RegisterSchema } from "../../../validation_schema/Register_Form";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update_form() {
  const { id }: any = useParams();
  const [inpValue, setInpValue] = useState<any>(null);

 
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/admin/${id}`);
      setInpValue(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const eventOptions = ["Hackathon", "Workshop", "Seminar", "Sports"];

  const formik = useFormik({
    enableReinitialize: true, 
    initialValues: inpValue || {
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
        const res = await axios.put(`/api/admin/${id}`, values);
        console.log("Updated:", res.data);
        alert("Updated Successfully ");
        resetForm();
      } catch (error) {
        console.error(error);
        alert("Update failed ");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white border border-gray-300 p-8 rounded-2xl shadow-xl w-full max-w-3xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Update Student Form
        </h2>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Gender</label>
          <div className="flex gap-6">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
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
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="date"
            name="dob"
            value={formik.values.dob?.split("T")[0] || ""} 
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formik.values.contact}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formik.values.college}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formik.values.department}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={formik.values.year}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="rollNo"
            placeholder="Roll Number"
            value={formik.values.rollNo}
            onChange={formik.handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

      
        <div>
          <label className="block text-gray-700 font-medium mb-2">Events</label>
          <div className="flex flex-wrap gap-6">
            {eventOptions.map((event) => (
              <label key={event} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="events"
                  value={event}
                  checked={formik.values.events.includes(event)}
                  onChange={formik.handleChange}
                  className="accent-green-600"
                />
                {event}
              </label>
            ))}
          </div>
        </div>

      
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
        >
          Update
        </button>
      </form>
    </div>
  );
}
