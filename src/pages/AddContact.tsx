import ContactForm from "../components/ContactForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Contact = {
  name: string;
  phone: string;
  email: string;
  addresses: string[];
  longitude: string;
  latitude: string;
};

const AddContact = () => {
  const [contacts, setContacts] = useLocalStorage<Contact[]>("contacts", []);

  const handleFormSubmit = (data: Contact) => {
    const newContact: Contact = {
      ...data,
    };
    setContacts([...contacts, newContact]);
  };

  return (
    <>
      <div className="w-60 mx-auto mb-14">
        <h1 className="mb-4 text-4xl text-gray-800 font-bold">Add Contact</h1>
      </div>
      <div>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </>
  );
};

export default AddContact;
