import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-white w-full min-h-[350px] flex flex-col justify-center items-center py-8 px-4 gap-4 border">
      {/* Accordion Section */}
      <div className="acordion-div flex flex-col gap-4 w-full max-w-[600px]">
        <div className="collapse collapse-arrow border-[2px]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-bold text-base sm:text-lg">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow border-[2px]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold text-base sm:text-lg">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-arrow border-[2px]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold text-base sm:text-lg">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm sm:text-base">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>

      {/* Socials Section */}
      <div className="socials mt-8 w-full max-w-[600px] flex flex-row justify-center gap-4 sm:gap-6 items-center">
        <h1 className="text-black font-bold text-base sm:text-lg">
          გამოგვყევი :
        </h1>

        <a
          href="https://www.facebook.com/profile.php?id=61573819328487"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image src="/facebook.png" alt="facebook" width={25} height={25} />
        </a>
        <a
          href="https://www.instagram.com/memorymagnets__/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image src="/instagram.png" alt="instagram" width={25} height={25} />
        </a>
        <a
          href="https://www.tiktok.com/@magnettoo_?_r=1&_d=egl1l5..."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image src="/tiktok.png" alt="tiktok" width={25} height={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
