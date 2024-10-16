"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // Use a verified domain email
            to: "amine99hasnat@gmail.com", // You can use any email after verifying the domain
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
              message: message as string,
              senderEmail: senderEmail as string,
            }),
          });
          
        console.log(data)
    } catch (error: unknown) {
        console.log(error)
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};