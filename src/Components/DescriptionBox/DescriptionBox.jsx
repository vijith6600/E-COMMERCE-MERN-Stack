import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to SHOPPER your own destination for a seamless and enjoyable
          online shopping experience! Discover an extensive array of products,
          from the latest fashion trends for Everyone. With a user-friendly
          interface, our website makes shopping a breeze. Easily explore
          categories, find detailed product information, and enjoy a secure
          checkout process. We prioritize your safety with state-of-the-art
          encryption, ensuring that your personal information is always
          protected.
        </p>
        <p>
          At SHOPPER, we pride ourselves on fast and
          reliable delivery, getting your favorite items to your doorstep in no
          time. Our exceptional customer service team is ready to assist you,
          making your shopping journey smooth and enjoyable.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
