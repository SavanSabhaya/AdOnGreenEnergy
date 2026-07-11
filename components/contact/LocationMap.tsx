"use client";

import Container from "@/components/ui/Container";

export default function LocationMap() {
  return (
    <section className="py-24 bg-steel-50 border-t border-steel-100">
      <Container>
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-sm border border-steel-200 relative bg-white">
          <iframe 
            src="https://maps.google.com/maps?q=B-608,%20Shalin%20Square,%20Near%20Hathijan%20Circle,%20Vatva,%20Ahmedabad%20-%20382445&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute top-4 left-4 right-4 md:left-auto md:w-96 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-elevated border border-steel-100">
            <h3 className="font-bold text-steel-900 mb-2">Our Corporate Office</h3>
            <p className="text-steel-600 text-sm leading-relaxed">
              B-608, Shalin Square,<br />
              Near Hathijan Circle, Vatva<br />
              Ahmedabad - 382445
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
