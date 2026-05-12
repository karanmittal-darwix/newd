"use server";

import nodemailer from "nodemailer";

type DemoRequest = {
  name: string;
  company: string;
  email: string;
  phone: string;
  useCase: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getNotificationRecipients = () =>
  (process.env.DEMO_REQUEST_NOTIFY_TO || "")
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email.length > 0);

const createTransport = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
};

export async function submitDemoRequest(formData: DemoRequest) {
  if (!formData.name || formData.name.trim() === "") {
    return { success: false, error: "Full Name is required." };
  }

  if (!formData.company || formData.company.trim() === "") {
    return { success: false, error: "Company Name is required." };
  }

  if (!formData.email || formData.email.trim() === "") {
    return { success: false, error: "Business Email is required." };
  }

  if (!emailRegex.test(formData.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!formData.phone || formData.phone.trim() === "") {
    return { success: false, error: "Phone Number is required." };
  }

  if (!formData.useCase || formData.useCase.trim() === "") {
    return { success: false, error: "Use Case is required." };
  }

  try {
    const recipients = getNotificationRecipients();

    if (recipients.length === 0) {
      return {
        success: false,
        error:
          "Email recipients are not configured. Set DEMO_REQUEST_NOTIFY_TO in your environment.",
      };
    }

    const transport = createTransport();

    if (!transport) {
      return {
        success: false,
        error:
          "SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM_EMAIL.",
      };
    }

    const fromAddress =
      process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || "no-reply@darwix.ai";
    const useCaseHtml = escapeHtml(formData.useCase).replace(/\n/g, "<br />");

    await transport.sendMail({
      from: fromAddress,
      to: recipients,
      replyTo: formData.email,
      subject: `New demo request from ${formData.name} (${formData.company})`,
      text: [
        "New Demo Request",
        `Name: ${formData.name}`,
        `Company: ${formData.company}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Use Case: ${formData.useCase}`,
      ].join("\n"),
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(formData.company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
        <p><strong>Use Case:</strong><br />${useCaseHtml}</p>
      `,
    });

    await transport.sendMail({
      from: fromAddress,
      to: formData.email,
      subject: "We received your Darwix AI demo request",
      text: [
        `Hi ${formData.name},`,
        "",
        "Thanks for requesting a demo from Darwix AI. We have received your details and our team will contact you within 24 hours.",
        "",
        "What we received:",
        `Company: ${formData.company}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Use Case: ${formData.useCase}`,
        "",
        "Best regards,",
        "Darwix AI Team",
      ].join("\n"),
      html: `
        <p>Hi ${escapeHtml(formData.name)},</p>
        <p>Thanks for requesting a demo from Darwix AI. We have received your details and our team will contact you within 24 hours.</p>
        <p><strong>What we received:</strong></p>
        <ul>
          <li><strong>Company:</strong> ${escapeHtml(formData.company)}</li>
          <li><strong>Email:</strong> ${escapeHtml(formData.email)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(formData.phone)}</li>
          <li><strong>Use Case:</strong> ${useCaseHtml}</li>
        </ul>
        <p>Best regards,<br />Darwix AI Team</p>
      `,
    });

    return { success: true, id: `demo_${Date.now()}` };
  } catch (error) {
    console.error("Error processing request:", error);
    return { success: false, error: "Failed to process request" };
  }
}
