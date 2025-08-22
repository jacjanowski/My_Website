
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3e768a39-9cd4-4df9-b7a0-d293c164f02f",
          ...values,
          subject: "New contact form submission",
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        form.reset();
        toast.success("Message sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="relative">
        <div className="absolute -bottom-20 -left-20 text-[#f9f9f9] text-[180px] md:text-[280px] font-bold leading-none z-0 select-none">
          CONTACT
        </div>
      
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#222222] mb-2">Let's Connect</h2>
            <div className="w-16 h-1 bg-[#F97316]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#222222]">Get In Touch</h3>
              <p className="text-[#555555] mb-8">
                Interested in working together? Have a project in mind? Feel free to reach out.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F97316] p-3 rounded-sm">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999999]">Email</p>
                    <p className="text-[#222222]">jacobjanowski.uic@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[#F97316] p-3 rounded-sm">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#999999]">Phone</p>
                    <p className="text-[#222222]">(630) 339-6781</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f3f3f3] p-6 rounded-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#222222]">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="border-[#ccc]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#222222]">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" className="border-[#ccc]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#222222]">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="border-[#ccc] min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#222222] hover:bg-[#222222]/90 flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
