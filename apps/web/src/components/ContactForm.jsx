
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Email không hợp lệ');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast.success('Gửi thông tin thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-[#0B1F3B] font-medium mb-2 block" style={{fontFamily: 'Open Sans, sans-serif'}}>
            Họ và tên <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nguyễn Văn A"
            required
            className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-gray-900 placeholder:text-gray-400"
            style={{fontFamily: 'Open Sans, sans-serif'}}
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-[#0B1F3B] font-medium mb-2 block" style={{fontFamily: 'Open Sans, sans-serif'}}>
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            required
            className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-gray-900 placeholder:text-gray-400"
            style={{fontFamily: 'Open Sans, sans-serif'}}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-[#0B1F3B] font-medium mb-2 block" style={{fontFamily: 'Open Sans, sans-serif'}}>
            Số điện thoại <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0905 123 456"
            required
            className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-gray-900 placeholder:text-gray-400"
            style={{fontFamily: 'Open Sans, sans-serif'}}
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-[#0B1F3B] font-medium mb-2 block" style={{fontFamily: 'Open Sans, sans-serif'}}>
            Chủ đề
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Tư vấn mua căn hộ"
            className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37] text-gray-900 placeholder:text-gray-400"
            style={{fontFamily: 'Open Sans, sans-serif'}}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-[#0B1F3B] font-medium mb-2 block" style={{fontFamily: 'Open Sans, sans-serif'}}>
          Nội dung <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tôi muốn được tư vấn về..."
          rows={6}
          required
          className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37] resize-none text-gray-900 placeholder:text-gray-400"
          style={{fontFamily: 'Open Sans, sans-serif'}}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-[#D4AF37] hover:bg-[#C19B2F] text-white font-semibold px-8 py-6 text-base transition-all duration-200 active:scale-[0.98]"
        style={{fontFamily: 'Open Sans, sans-serif'}}
      >
        {isSubmitting ? (
          'Đang gửi...'
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Gửi thông tin
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
