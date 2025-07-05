import React from "react";

const ContactInfo = () => (
	<div className="mb-12 text-center">
		<h1 className="mb-8 text-4xl font-bold text-gray-900">Contact Us</h1>
		<div className="mx-auto max-w-2xl space-y-4 text-gray-700">
			<div className="flex items-center justify-center gap-2">
				<span>📞</span>
				<span className="font-medium">
					Toll Free & WhatsApp: +919730752125 (Monday - Saturday from 10am - 6pm)
				</span>
			</div>
			<div className="flex items-center justify-center gap-2">
				<span>✉️</span>
				<span>
					Email -{" "}
					<a href="mailto:info@twobrothersindia.com" className="text-blue-600 hover:underline">
						info@kisanbasket.com
					</a>
				</span>
			</div>
		</div>
	</div>
);

export default ContactInfo;
