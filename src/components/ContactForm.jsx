
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get In Touch
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4 bg-[#252525] p-6 rounded-2xl border border-[#333] shadow-2xl"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white text-sm">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#1a1a1a] border-[#444] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff] transition-colors text-sm py-2"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-sm">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#1a1a1a] border-[#444] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff] transition-colors text-sm py-2"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white text-sm">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="bg-[#1a1a1a] border-[#444] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff] transition-colors text-sm py-2"
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="text-red-400 text-xs">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white text-sm">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="bg-[#1a1a1a] border-[#444] text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff] transition-colors resize-none text-sm p-2"
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00d4ff] hover:bg-[#00b8e6] text-black font-semibold py-2 text-sm transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
