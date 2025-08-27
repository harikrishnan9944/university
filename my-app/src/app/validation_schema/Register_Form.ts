import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Must be at least 2 characters"),

  middleName: Yup.string().optional(),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Must be at least 2 characters"),

  gender: Yup.string().required("Please select your gender"),

  dob: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date cannot be in the future"),

  contact: Yup.string()
    .required("Contact number is required")
    .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),

  college: Yup.string().required("College name is required"),

  department: Yup.string().required("Department is required"),

  year: Yup.string()
    .required("Year is required")
    .matches(/^[1-9][0-9]?$/, "Invalid year"),

  rollNo: Yup.string().required("Roll number is required"),

  events: Yup.array()
    .min(1, "Select at least one event")
    .required("Please choose at least one event"),
});
