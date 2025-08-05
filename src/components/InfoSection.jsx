const InfoSection = () => {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto  mt-14">
      <p className="text-xl text-gray-700 mb-6 leading-relaxed font-serif text-center">
        Reading might seem boring to some, but it’s actually one of the fastest
        ways to improve your English, reduce stress, and even become more
        creative!
      </p>

      <h2 className="text-2xl font-extrabold text-[#0abab4] mb-6 text-center">
        7 Powerful Benefits of Reading Every Day
      </h2>
      <ul className="space-y-5">
        <li className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span className="text-lg text-gray-800">
            <span className="font-bold">1. Improves Vocabulary:</span> Reading
            introduces you to new words in context, which helps you remember and
            use them naturally.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span className="text-lg text-gray-800">
            <span className="font-bold">
              2. Boosts Focus and Concentration:
            </span>
            Reading a book trains your brain to focus on one thing at a time — a
            rare skill in today’s digital world.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span className="text-lg text-gray-800">
            <span className="font-bold">
              3. Enhances Imagination and Creativity:
            </span>{" "}
            Books transport you to other worlds and perspectives, sparking
            creative thinking.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span className="text-lg text-gray-800">
            <span className="font-bold">4. Reduces Stress:</span> Reading for
            just 10 minutes a day can lower stress levels and help you relax.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span className="text-lg text-gray-800">
            <span className="font-bold">5. Builds Better Writing Skills:</span>
            The more you read, the more you internalize sentence structure,
            grammar, and style.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span className="text-lg text-gray-800">
            <span className="font-bold">6. Strengthens Memory:</span> Following
            plots, characters, or learning concepts while reading improves
            memory and mental agility.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">✅</span>
          <span className="text-lg text-gray-800">
            <span className="font-bold">7. Makes You Smarter:</span> Books give
            you knowledge and insights that stay with you and help in everyday
            life.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default InfoSection;
