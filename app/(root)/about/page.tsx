import React from "react";

const AboutPage = () => {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-3xl font-bold leading-none tracking-wide sm:text-6xl">
        📱 Welcome to{" "}
        <span className="bg-blue-500 px-4 py-2 rounded-lg tracking-widest text-white">
          MPS
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground text-center">
        At MPS we’re passionate about connecting people with the latest in
        mobile technology. Our mission is to provide a seamless, secure, and
        satisfying shopping experience for everyone looking to upgrade their
        digital lifestyle. We specialize in high-quality smartphones, tablets,
        and accessories from trusted global brands. Whether you're a tech
        enthusiast chasing cutting-edge innovation or someone looking for a
        reliable device at the best value — we've got something just for you.
        Our commitment goes beyond products. We strive to deliver: ✅ Authentic
        Devices with full warranty 🚚 Fast & Reliable Shipping 💰 Transparent
        Prices — no hidden fees 💬 Excellent Customer Support We're not just a
        store — we're your partner in staying connected, productive, and ahead
        in the digital world. Thank you for choosing MPS.
      </p>
    </section>
  );
};

export default AboutPage;
