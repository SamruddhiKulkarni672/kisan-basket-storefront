import React from "react";

const MapSection = () => (
  <div className="mt-12">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7692999310097!2d73.91260007517213!3d18.51538238257785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14fa0b159e9%3A0x8f07a460c090adfc!2sKisanBasket!5e0!3m2!1sen!2sin!4v1718190000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kisan Basket Location"
        />
      </div>
      <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 flex justify-between items-center">
        <div className="flex gap-4">
          <span>Keyboard shortcuts</span>
          <span>Map data ©2025</span>
          <span>Terms</span>
          <span>Report a map error</span>
        </div>
        <div className="text-blue-600">Google</div>
      </div>
    </div>
  </div>
);

export default MapSection;