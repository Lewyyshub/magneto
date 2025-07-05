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
          <p className="text-black text-[14px] md:text-[15px] lg:text-[18px] leading-relaxed">
            მოგესალმებით! მე ვარ ნათია, მესამე კურსის სტუდენტი და სულ რაღაც
            რამდენიმე თვვის წინ შევქმენი ჩემი პატარა ბიზნესი — „მაგნეტო“ პატარა
            საქმე, რომელიც დიდ სითბოს და სიყვარულს ატარებს. ყველა მაგნიტი
            დამზადებულია გულით, იმ მიზნით, რომ თქვენი ძვირფასი მომენტები რეალურ,
            მაგნიტურ მოგონებად ვაქციო, რომელიც მუდამ თვალწინ გექნებათ. პირველი
            შეკვეთიდან დღემდე, თქვენი თითოეული ემოცია და შეტყობინება ჩემთვის
            უდიდესი მოტივაციაა — რომ გავიზარდო და კიდევ უფრო კარგი გავხადო ეს
            საქმე🌟. თუ შენც გინდა, შენი მოგონებები უნიკალურ მაგნიტებად აქციო —
            შეუკვეთე და ერთად შევქმნათ რაღაც ძალიან განსაკუთრებული💫.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
