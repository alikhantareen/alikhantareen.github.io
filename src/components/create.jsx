import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "./header";
import Footer from "./footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Create = () => {
  const schema = yup.object({
    title: yup.string().required("Title field is required"),
    body: yup.string().required("Body field is required"),
  });
  return (
    <div className="font-mono dark:bg-black dark:text-white">
      <Header />
      <div className="w-3/5 m-auto flex flex-col gap-5 mt-2 p-3 h-screen">
        <div className="text-5xl font-mono font-extrabold">Create a blog</div>
        <Formik
          initialValues={{ title: "", body: "" }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={schema}
        >
          <Form className="flex flex-col gap-4">
            <label className="font-bold text-xl">Title:</label>
            <Field
              className="border-b-2 border-gray-700 p-2"
              name="title"
              type="text"
            />
            <ErrorMessage className="text-red-900" name="name" component={"div"} />
            <label className="font-bold text-xl">Description:</label>
            <textarea
              className="border-b-2 border-gray-700 p-2"
              rows="8"
              cols="50"
            />
            <ErrorMessage className="text-red-900" name="name" component={"div"} />
            <input type="file" />
            <button className="font-mono p-4 w-36 bg-gray-900 text-white rounded-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-gray-800">
              Create blog
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
