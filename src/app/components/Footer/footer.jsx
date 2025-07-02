import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-red-500 w-full h-[350px] flex flex-col md:flex-col lg:flex-col justify-center items-center">
      <div className="acordion-div gap-2 flex flex-col pt-4 w-full items-center p-3">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 max-w-[500px]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300  max-w-[500px]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300  max-w-[500px]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
      <div className="socials w-full sm:w-auto flex justify-center flex-row items-center sm:justify-evenly px-4 py-6 gap-4 sm:gap-6">
        <h1 className="text-white font-bold mb-2 sm:mb-0">Follow Us :</h1>
        <a
          href="https://www.facebook.com/profile.php?id=61573819328487"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image src="/facebook.png" alt="facebook" width={25} height={25} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61573819328487"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image src="/instagram.png" alt="instagram" width={25} height={25} />
        </a>
        <a
          href="https://www.tiktok.com/@magnettoo_?_r=1&_d=egl1l5gja62dgd&sec_uid=MS4wLjABAAAAnRfkq72Valv_Zv4a3zHJeKFJoAGnm-oMVpr0CYS0_TLfY76Qk8CBWbreKXtzrBlY&share_author_id=7138866186264364038&sharer_language=en&source=h5_m&u_code=dm4blbmd5lj701&ug_btm=b7200,b5836&sec_user_id=MS4wLjABAAAAkiuJC34gL_aI6Rp3G8gr6aSYu1WUh57LHbWb5Ptok6r_NoROOuIF9DLG40zpAQNx&social_share_type=5&tt_from=copy&user_id=7038900135829177346&enable_checksum=1&share_link_id=42AC6292-8C1B-469F-9B5C-23FAFC82AC48&share_app_id=1233"
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
