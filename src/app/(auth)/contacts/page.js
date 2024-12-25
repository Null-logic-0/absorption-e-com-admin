import { getContacts } from "@/_lib/data-services";
import ContactsTable from "@/Components/Contacts/ContactsTable";
import GobackButton from "@/Components/GobackButton";
import Heading from "@/Components/Heading";

async function ContactsPage() {
  const data = await getContacts();

  return (
    <>
      <Heading>Contacts</Heading>

      <ContactsTable data={data} />
    </>
  );
}

export default ContactsPage;
