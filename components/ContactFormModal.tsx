"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactFormModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          aria-label="Open Contact Form"
          className="hover:text-indigo-600 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogTitle className="sr-only">Contact Form</DialogTitle>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
