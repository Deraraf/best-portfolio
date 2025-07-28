"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://formspree.io/f/xdkznkvo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {submitted ? (
        <div className="text-green-600 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> Thank you! Your message was sent.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow-md"
        >
          <div>
            <Input placeholder="Name" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="Email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Textarea
              rows={5}
              placeholder="Message"
              spellCheck={false}
              autoComplete="off"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send /> Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
