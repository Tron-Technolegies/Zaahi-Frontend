export const handleChatClick = () => {
  const phoneNumber = "+917736045120"; // Replace with the actual phone number
  const message = `Hello! I would like to make an enquiry`; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
