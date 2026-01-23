import React from "react";
import "./BookTable.css";

function BookTable() {
  return (
    <section className="book">
      <h2 className="book-title">Book Your Table</h2>

      <form className="book-form">
        <div className="book-row">
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Your Email *" required />
          <select required>
            <option value="">Select Service</option>
            <option>Dine In</option>
            <option>Take Away</option>
            <option>Delivery</option>
          </select>
        </div>

        <textarea placeholder="Please write your comment"></textarea>

        <button type="submit" className="book-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default BookTable;