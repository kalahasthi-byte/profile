import { Formik } from "formik";
import Card from "../Card";
import Loader from "../Loader";

export default function Contact() {
  const handleEmailSend = async (values) => {
    let details = {
      firstname: values.givenname,
      lastname: values.familyname,
      company: values.organization,
      email: values.email,
      phonenumber: values.phonenumber,
      message: values.message,
    };

    let response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();

    return result;
  };

  return (
    <Card title="Contact" orientation="right">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <p class="mt-1 text-xl text-gray-600">
              Please reach out me if interested in my profile.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <Formik
            initialValues={{
              givenname: "",
              familyname: "",
              organization: "",
              email: "",
              phonenumber: "",
              message: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(async () => {
                const response = await handleEmailSend(values);
                setSubmitting(false);
                if (response.status === 200) {
                  resetForm({
                    values: {
                      givenname: "",
                      familyname: "",
                      organization: "",
                      email: "",
                      phonenumber: "",
                      message: "",
                    },
                  });
                }
              }, 400);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                action="#"
                method="POST"
                class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                onSubmit={handleSubmit}
              >
                <div class="mt-1">
                  <div class="outline relative border-2 focus-within:border-blue-500">
                    <input
                      type="text"
                      name="givenname"
                      placeholder="First Name"
                      class="block p-4 w-full text-lg  appearance-none focus:outline-none bg-transparent"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.givenname}
                    />
                    <label
                      for="givenname"
                      class="absolute top-0 text-lg text-gray-800 bg-white p-4 -z-1 duration-300 origin-0"
                    >
                      First Name
                    </label>
                  </div>
                </div>
                <div class="mt-1">
                  <div class="outline relative border-2 focus-within:border-blue-500">
                    <input
                      type="text"
                      name="familyname"
                      placeholder="Last Name"
                      class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.familyname}
                    />
                    <label
                      for="familyname"
                      class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <div class="outline relative border-2 focus-within:border-blue-500">
                      <input
                        type="text"
                        name="organization"
                        placeholder="Company"
                        class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.organization}
                      />
                      <label
                        for="organization"
                        class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
                      >
                        Company
                      </label>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <div class="outline relative border-2 focus-within:border-blue-500">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <label
                        for="email"
                        class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <div class="outline relative border-2 focus-within:border-blue-500">
                      <input
                        type="text"
                        name="phonenumber"
                        placeholder="(222)-222-2222"
                        class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phonenumber}
                      />
                      <label
                        for="phonenumber"
                        class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <div class="outline relative border-2 focus-within:border-blue-500">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
                        rows="4"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                      <label
                        for="message"
                        class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0"
                      >
                        Message
                      </label>
                    </div>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <button
                    type="submit"
                    class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-none shadow-sm text-base font-medium text-white bg-gradient-to-r from-cyan-400 to-lightBlue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <Loader />}
                    <span>Let's talk</span>
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Card>
  );
}
