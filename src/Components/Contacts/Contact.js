"use client";
import { deleteContact } from "@/_lib/actions";
import GobackButton from "../GobackButton";
import DeleteButton from "../DeleteButton";
function Contact({ contact }) {
  const { fullName, subject, message, email, id } = contact;
  return (
    <div className="flex flex-col gap-3 bg-slate-50 p-5 shadow-md rounded-lg">
      <div className="flex-col flex gap-2">
        <p className="text-xl font-semibold text-gray-800">{fullName}</p>
        <p className="text-gray-400">
          <span className="text-md text-gray-800 font-semibold">Subject:</span>
          {subject}
        </p>
      </div>
      <p className="text-lg font-semibold text-gray-800 ">Message</p>

      <div className="border-2 border-gray-800 p-2 bg-slate-100 rounded-lg text-md font-medium text-gray-400">
        {message}
      </div>
      <div className="justify-end pt-4 flex gap-4 items-center">
        <DeleteButton action={() => deleteContact(id)}>
          Remove Contact
        </DeleteButton>
        <a
          href={`mailto:${email}`}
          className=" p- bg-gray-900 text-white hover:text-gray-800 hover:bg-transparent border-gray-800 p-2 border-2 cursor-pointer rounded-md font-semibold"
        >
          Send a mail
        </a>
        <GobackButton />
      </div>
    </div>
  );
}

export default Contact;
