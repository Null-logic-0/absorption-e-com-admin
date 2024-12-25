import { getSingleContact } from "@/_lib/data-services";
import Contact from "@/Components/Contacts/Contact";
import GobackButton from "@/Components/GobackButton";
import Heading from "@/Components/Heading";

async function ContactPage({ params }) {
  const { contactSlug } = await params;
  const contact = await getSingleContact(contactSlug);
  return (
    <>
      <div>
        <GobackButton href={"/contacts"} />
      </div>

      <Heading>Contact ID:{contactSlug}</Heading>
      <Contact contact={contact} />
    </>
  );
}

export default ContactPage;
