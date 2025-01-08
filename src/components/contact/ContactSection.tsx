const ContactSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-2">
              <p>Email: ivonixlabs@gmail.com</p>
              <p>Phone: +91 9370566844</p>
              <p>Hours: Mon-Fri 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="space-y-2">
              <p>Pardi</p>
              <p>Nagpur</p>
              <p>Maharashtra</p>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;