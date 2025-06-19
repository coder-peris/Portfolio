"use client";
import { useState } from "react";
import type { FC, FormEvent, ReactNode, ChangeEvent } from "react";
import Link from "next/link";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { TbMail, TbLoader2 } from "react-icons/tb";
import { toast } from 'sonner';
import { Button } from "./ui/button";
import { validate_email } from "@/lib/utils";

const Contact: FC = (): ReactNode => {

  const [formData, setFormData] = useState<MessageForm>({ fullName: "", email: "", message: "" });
  const [formErr, setFormErr] = useState<FormErrors | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormErr(null);
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const errors: FormErrors = {
      emailField: "",
      nameField: "",
      messageField: ""
    };

    if (!formData?.email?.trim()) {
      errors.emailField = "Email is required";
    }
    if (!formData?.fullName?.trim()) {
      errors.nameField = "Name is required";
    }
    if (!formData?.message?.trim()) {
      errors.messageField = "Message is required";
    }
    if (formData?.email.trim() && !validate_email(formData?.email)) {
      errors.emailField = "Enter a valid email address";
    }

    setFormErr(errors);
    const hasErrors = Object.values(errors).some((msg) => msg !== "");
    if (hasErrors) {
      setFormErr(errors);
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error("Send failed");
      toast.success("Message received by coder-peris.");

      setFormData({ fullName: "", email: "", message: "" });
    } catch{
      const errorMsg = "Error occurred. Try contacting through other channels.";
      toast.error(errorMsg);
    }
    finally {
      setIsSending(false);
    }
  };
  return (
    <section id="contact" className="scroll-mt-12 w-full pt-5 bg-muted/30 px-6">
      <div className="space-y-6 text-center mb-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-5 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Contact Information</h3>
          <p className="text-muted-foreground">
            Feel free to reach out through any of these channels:
          </p>
          <ul className="space-y-2 mt-4">
            <li className="flex gap-2 items-center">
              <Link href="mailto:periskc2@gmail.com" className="flex items-center gap-2">
                <TbMail className="h-5 w-5 text-[#bc4b17]" />
                <span className="hover:underline">periskc2@gmail.com</span>
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <Link href="https://github.com/coder-peris/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaGithub className="h-5 w-5" />
                <span className="hover:underline">github/coder-peris</span>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href="https://linkedin.com/in/coder-peris/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
                <span className="hover:underline">linkedin/coder-peris</span>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href="https://facebook.com/peris.kc.1/" target="_blank" className="flex items-center gap-2">
                <FaFacebookSquare className="w-5 h-5 text-[#1877F2]" />
                <span className="hover:underline">facebook/periskc1</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Send Me a Message</h3>
          <form className="grid gap-4" onSubmit={handleSendMessage}>
            <div className="grid gap-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <input
                id="fullName"
                name="fullName"
                onChange={handleChange}
                value={formData?.fullName}
                className="flex h-10 w-full rounded-md border border-input bg-muted/80 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your name"
              />
              {formErr?.nameField && <p className="text-red-500 text-xs">{formErr.nameField}</p>}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                onChange={handleChange}
                value={formData?.email}
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-muted/80 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your email"
              />
              {formErr?.emailField && <p className="text-red-500 text-xs">{formErr.emailField}</p>}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                value={formData?.message}
                className="flex min-h-[120px] w-full rounded-md border border-input bg-muted/80 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message"
              />
              {formErr?.messageField && <p className="text-red-500 text-xs">{formErr.messageField}</p>}
            </div>
            <Button type="submit" disabled={isSending}>
              {isSending ?
                <><TbLoader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>
                :
                "Send Message"
              }
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;