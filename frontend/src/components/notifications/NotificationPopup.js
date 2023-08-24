import React from "react";
import "../styles/notificationPopup.css";
import { MobileAcceptMajor, MobileCancelMajor } from "@shopify/polaris-icons";
import { Icon, Thumbnail } from "@shopify/polaris";

const NotificationPopup = ({ id, productName, productImage, author }) => {
  return (
    <div className="Avada-SP__Wrapper">
      <div className="Avada-SP__Inner">
        <div className="Avada-SP__Container">
          <div style={{ marginRight: "20px" }}>
            <Thumbnail source={productImage} alt="" size="large" />
          </div>
          <div className="Avada-SP__Content">
            <div>Someone in New York, United States</div>
            <div style={{ fontWeight: "bold" }}>{productName}</div>
            <div className="Avada-SP__Footer">
              a day ago
              <div style={{ display: "flex" }}>
                <Icon source={MobileAcceptMajor} color="magic"></Icon>
                <span className="check" style={{ marginLeft: "6px" }}>
                  by {author}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          alert("test");
        }}
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          cursor: "pointer",
        }}
      >
        <Icon source={MobileCancelMajor} />
      </div>
    </div>
  );
};

export default NotificationPopup;
