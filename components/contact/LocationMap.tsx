"use client";

import Container from "@/components/ui/Container";

export default function LocationMap() {
  return (
    <section className="py-24 bg-steel-50 border-t border-steel-100">
      <Container>
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-sm border border-steel-200 relative bg-white">
          {/* TODO: Replace with exact office coordinates once confirmed by client */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717590000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
          />
          <div className="absolute top-4 left-4 right-4 md:left-auto md:w-96 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-elevated border border-steel-100">
            <h3 className="font-bold text-steel-900 mb-2">Our Headquarters</h3>
            <p className="text-steel-600 text-sm mb-4">Ahmedabad, Gujarat</p>
            <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 p-2 rounded">
              <strong>TODO:</strong> Replace map iframe with exact office coordinates once confirmed by client.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
