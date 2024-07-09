import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';

type AddressListProps = {
  values: {
    addresses: string[];
  };
};

const AddressList: React.FC<AddressListProps> = ({ values }) => {
  return (
    <div>
      <label className="block">Addresses</label>
      <FieldArray name="addresses">
        {({ insert, remove, push }) => (
          <>
            {values.addresses.length > 0 &&
              values.addresses.map((address, index) => (
                <div key={index} className="flex space-x-2 mb-2">
                  <Field
                    name={`addresses.${index}`}
                    placeholder="Enter address"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage name={`addresses.${index}`} component="div" />
                  {values.addresses.length > 1 && (
                    <button type="button" onClick={() => remove(index)}>Remove</button>
                  )}
                </div>
              ))}
            {values.addresses.length < 5 && (
              <button type="button" onClick={() => push('')}>Add Address</button>
            )}
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default AddressList;
