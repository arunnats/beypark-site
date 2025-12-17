export default function Home() {
  return (
    <section className="min-h-[100vh] flex flex-col  bg-transparent relative z-10 px-5 md:px-72 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-4 mt-8 md:mt-0">
        Fifth Asian Symposium on Cellular Automata Technology
      </h1>
      <div className="text-justify md:w-[55vw] mb-10">
        {" "}
        <p className="">
          This is the fourth edition of the Asian Symposium on Cellular Automata
          Technology (ASCAT 2025), to be held from March 06 to March 08, 2025.
          The Third edition of ASCAT (ASCAT 2024) was held in hybrid mode on
          February 29 – March 02, 2024 .
        </p>
        <br></br>
        <p className="">
          This time the event is organised in offline mode. The Department of
          Computer Science and Engineering, Birla Institute of Technology, Mesra
          (BIT Mesra) officially organizes the symposium on its main campus in
          Jharkhand (Mesra, Ranchi), India. The symposium aims two-fold: to
          nurture cellular automata theories and explore cellular automata as
          technology. So all the theoretical aspects of cellular automata and
          their applications in any domain are within the scope of this
          symposium.
        </p>
        <br></br>
        <h1 className="text-4xl font-bold mb-4">Topics</h1>
        <p className="mb-4">
          The conference will cover a broad range of topics in computer science
          and technology, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1 px-2">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Data Science and Big Data Analytics</li>
          <li>Cybersecurity and Privacy</li>
        </ul>
        <br></br>
        <h1 className="text-4xl font-bold mb-4">Publication</h1>
        <p className="mb-4">
          The conference will cover a broad range of topics in computer science
          and technology, including but not limited to:
        </p>
        <p className="mb-4">
          Extended versions of a selected number of papers presented at the
          conference is planned to be published in a special issue of Complex
          Systems.
        </p>
        <br></br>
        <h1 className="text-4xl font-bold mb-4">Sponsored by</h1>
      </div>
    </section>
  );
}
