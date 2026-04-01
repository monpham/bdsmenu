
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0B1F3B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://horizons-cdn.hostinger.com/86d8422a-93e6-4f60-849e-fd9aa087ef95/efdfcaa60447c9083787afd7c5d3ab13.png" 
                alt="ApartmentDN Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-[#D4AF37]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                ApartmentDN
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-90" style={{fontFamily: 'Open Sans, sans-serif'}}>
              Chuyên mua bán căn hộ cao cấp tại Đà Nẵng với hơn 8 năm kinh nghiệm trong lĩnh vực bất động sản.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-lg font-semibold text-[#D4AF37] mb-4 block" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Liên hệ
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+84905123456" className="text-sm hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    +84 905 123 456
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contact@apartmentdn.vn" className="text-sm hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    contact@apartmentdn.vn
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    123 Đường Nguyễn Văn Linh<br />
                    Quận Hải Châu, Đà Nẵng
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <span className="text-lg font-semibold text-[#D4AF37] mb-4 block" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Giờ làm việc
            </span>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div className="text-sm" style={{fontFamily: 'Open Sans, sans-serif'}}>
                  <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                  <p>Thứ 7: 8:00 - 17:00</p>
                  <p>Chủ nhật: 9:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <span className="text-lg font-semibold text-[#D4AF37] mb-4 block" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Liên kết
            </span>
            <div className="space-y-2 mb-6">
              <Link to="/" className="block text-sm hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Trang chủ
              </Link>
              <Link to="/projects" className="block text-sm hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Dự án
              </Link>
              <Link to="/about" className="block text-sm hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Về chúng tôi
              </Link>
              <Link to="/contact" className="block text-sm hover:text-[#D4AF37] transition-colors duration-200" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Liên hệ
              </Link>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80" style={{fontFamily: 'Open Sans, sans-serif'}}>
            © 2026 ApartmentDN. Bản quyền thuộc về ApartmentDN. Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
