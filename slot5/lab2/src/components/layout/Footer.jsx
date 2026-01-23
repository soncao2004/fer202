import React from "react";
import "./Footer.css";
// Đảm bảo import ảnh đại diện của bạn
import avatar from "../../image/anh11.jpg"; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h2 className="footer-logo">PIZZA <span>PALACE</span></h2>
          <p className="footer-desc">Mang hương vị Ý truyền thống đến không gian sống hiện đại của bạn.</p>
        </div>

        <div className="footer-section profile-box">
          <div className="avatar-wrapper">
            <img src={avatar} alt="Developer" className="footer-avatar" />
          </div>
          <div className="dev-info">
            <h4 className="dev-name">Cao Van Duy Son</h4>
            <p className="dev-role">Frontend Developer</p>
          </div>
        </div>

        <div className="footer-section contact-list">
          <h4 className="section-title">Contact Us</h4>
          <p>📍 123 Pizza Street, Da Nang</p>
          <p>📞 0918713848</p>
          <p>📧 duyson270324@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Pizza Palace. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;