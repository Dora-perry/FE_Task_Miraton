import { Formik, Form, Field, ErrorMessage } from "formik";
import AddressList from "./AddressList";
import { getCoordinatesFromState } from "../utils/getCoordinates";
import { contactSchema } from "../utils/validation";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  addresses: string[];
  longitude: string;
  latitude: string;
};

const ContactForm = ({
  onSubmit,
}: {
  onSubmit: (data: FormValues) => void;
}) => {
  const setCoordinates = (addresses: string[], setFieldValue: any) => {
    if (addresses.length > 0) {
      const { latitude, longitude } = getCoordinatesFromState(addresses[0]);
      setFieldValue("latitude", latitude);
      setFieldValue("longitude", longitude);
    }
  };

  return (
    <Formik<FormValues>
      initialValues={{
        name: "",
        phone: "",
        email: "",
        addresses: [""],
        longitude: "",
        latitude: "",
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block">Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Enter name"
                className="border p-2 w-full"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <label className="block">Phone Number</label>
              <Field
                name="phone"
                placeholder="Enter phone number"
                type="text"
                className="border p-2 w-full"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600"
              />
            </div>
          </div>
          <div>
            <label className="block">Email</label>
            <Field
              name="email"
              type="email"
              placeholder="Enter email"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />
          </div>
          <AddressList values={values} />
          <div>
            <button
              type="button"
              className="bg-gray-800 text-white p-4 rounded-lg "
              onClick={() => setCoordinates(values.addresses, setFieldValue)}
            >
              Get Coordinates
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block">Longitude</label>
              <Field
                name="longitude"
                type="text"
                readOnly
                className="border p-2 w-full bg-gray-200"
              />
              <ErrorMessage
                name="longitude"
                component="div"
                className="text-red-600"
              />
            </div>
            <div>
              <label className="block">Latitude</label>
              <Field
                name="latitude"
                type="text"
                readOnly
                className="border p-2 w-full bg-gray-200"
              />
              <ErrorMessage
                name="latitude"
                component="div"
                className="text-red-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-800 p-4 w-40 rounded-lg float-end"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
