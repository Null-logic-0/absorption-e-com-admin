import { getSingleContact } from "@/_lib/data-services";
import Contact from "@/Components/Contacts/Contact";
import Heading from "@/Components/Heading";

async function ContactPage({ params }) {
  const { contactSlug } = await params;
  const contact = await getSingleContact(contactSlug);
  return (
    <>
      <Heading>Contact ID:{contactSlug}</Heading>
      <Contact contact={contact} />
    </>
  );
}

export default ContactPage;
