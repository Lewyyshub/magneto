import Image from "next/image";

function About() {
  return (
    <>
      <div className="w-full min-h-screen p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Image section */}
        <div className="relative w-full sm:w-[80%] md:w-1/2 max-w-[500px] aspect-[5/6] rounded-[20px] overflow-hidden">
          <Image
            src="/nati.png"
            alt="magneto-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-[20px]"
            priority
          />
        </div>

        {/* Text section */}
        <div className="w-full sm:w-[80%] md:w-1/2 px-2 sm:px-4 md:px-6">
          <p className="text-white text-[14px] md:text-[15px] lg:text-[18px] leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            pariatur eius ratione fugit nostrum nulla rerum eveniet possimus
            perspiciatis ipsam. Itaque perspiciatis iste molestias fugiat odio
            quos vel sequi fuga! Tempora, dolore eum perferendis blanditiis
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
