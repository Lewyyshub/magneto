import Image from "next/image";

function About() {
  return (
    <>
      <div className="w-full min-h-screen p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Image section */}
        <div className="relative w-full sm:w-[80%] md:w-1/2 max-w-[500px] aspect-[5/6] rounded-[20px] overflow-hidden bg-red-500">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            impedit, laboriosam, voluptatum atque totam cupiditate quo aliquid
            facere quibusdam molestiae, eveniet animi maxime laborum? Similique
            dolore natus harum necessitatibus tempore! Fuga totam consequuntur
            non velit voluptate dicta, veritatis quis possimus sapiente veniam
            perferendis hic cumque ex quasi ducimus molestias officia tempore
            maxime culpa accusamus? Neque. Nesciunt, doloremque eum vitae
            similique nihil dolores voluptatum recusandae placeat accusamus
            facere dolor tempore, itaque dignissimos cumque velit? Optio fugiat
            praesentium consequuntur nesciunt ullam corrupti dolor in suscipit
            omnis rerum. Dicta quaerat quidem eos voluptatem placeat et eaque...
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
