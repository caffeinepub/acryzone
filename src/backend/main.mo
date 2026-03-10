import Map "mo:core/Map";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    productInterest : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  type Product = {
    name : Text;
    description : Text;
  };

  let inquiries = Map.empty<Time.Time, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, productInterest : Text, message : Text) : async () {
    let timestamp = Time.now();
    let inquiry : Inquiry = {
      name;
      email;
      phone;
      productInterest;
      message;
      timestamp;
    };
    inquiries.add(timestamp, inquiry);
  };

  public query ({ caller }) func listInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func listProducts() : async [Product] {
    [
      {
        name = "Premium Acrylic UV Print Frames";
        description = "High-quality, vibrant UV print on acrylic for a premium look.";
      },
      {
        name = "Islamic Wall Art Frames";
        description = "Elegant acrylic frames featuring beautiful Islamic art and calligraphy.";
      },
      {
        name = "Custom Photo Frames";
        description = "Personalized acrylic frames for your favorite photos and memories.";
      },
      {
        name = "3D Acrylic Frames";
        description = "Stunning 3D effect frames that add depth and dimension to your decor.";
      },
      {
        name = "Home Decor Acrylic Frames";
        description = "Stylish and modern acrylic frames to enhance your home interior.";
      },
    ];
  };
};
