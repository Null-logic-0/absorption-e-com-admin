import { getContacts } from "@/_lib/data-services";
import ContactsTable from "@/Components/Contacts/ContactsTable";
import Heading from "@/Components/Heading";
import Spinner from "@/Components/Spinner";
import { Suspense } from "react";

async function ContactsPage() {
  const data = await getContacts();

  return (
    <>
      <Heading>Contacts</Heading>

      <Suspense fallback={<Spinner />}>
        <ContactsTable data={data} />
      </Suspense>
    </>
  );
}

export default ContactsPage;
