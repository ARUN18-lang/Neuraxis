// Contact form → Web3Forms (no database).
// Register at https://web3forms.com with neuraxistechnologies@gmail.com,
// then add the access key to .env as VITE_WEB3FORMS_ACCESS_KEY.

import { contact } from "../data/site";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const formEnabled = Boolean(
  ACCESS_KEY && ACCESS_KEY !== "your_access_key_here"
);

export async function submitLead({ name, email, phone, message }) {
  if (!formEnabled) {
    throw new Error("form-not-configured");
  }

  const formData = new FormData();
  formData.append("access_key", ACCESS_KEY);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("message", message);
  formData.append("subject", `New project inquiry from ${name}`);
  formData.append("from_name", name);
  formData.append("replyto", email);
  formData.append("botcheck", "");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || "submit-failed");
  }

  return data;
}

export const formRecipientEmail = contact.email;
