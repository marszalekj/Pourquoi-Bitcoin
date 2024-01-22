import Lehman from "../assets/images/lehman.jpeg";
import Protest from "../assets/images/protest.jpg";
import Borne from "../assets/images/tienda.jpeg";
import Gilet from "../assets/images/gilet.jpg";
import Nayib from "../assets/images/nayib.webp";
import France from "../assets/images/france.webp";

import Subprimes from "../assets/images/subprimes.webp";
import Crash from "../assets/images/crash.jpg";
import Bank from "../assets/images/bank.jpeg";
import Pizza from "../assets/images/pizza.jpeg";
import Salvador from "../assets/images/salvador.jpeg";
import Africa from "../assets/images/africa.webp";
import Snowden from "../assets/images/snowden.webp";
import Anon from "../assets/images/anonymous.jpg";
import Liban from "../assets/images/liban.jpeg";
import Argentine from "../assets/images/argentina.jpeg";
import Turquie from "../assets/images/turquie.jpeg";
import Print from "../assets/images/print.gif";
import Bull from "../assets/images/bull.jpeg";
import Elon from "../assets/images/elon.webp";
import Mining from "../assets/images/mining.jpeg";
import Billets from "../assets/images/Billets.jpeg";

import Footer from "../components/Footer";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  return (
    <>
            <Parallax  pages={6}>

        <main id="#up" className="flex flex-col justify-center mt-[500px]">

          <ParallaxLayer  offset={0.3} speed={0.1}>
            {/* Pourquoi Bitcoin */}
            <div className="flex flex-col items-center object-cover ">
              {/* Pourquoi */}
              <div className="flex items-center">
                <h1 className="text-9xl font-extrabold pr-12">Pourquoi</h1>
                <div className="flex h-44 w-96">
                  <img
                    className="h-44 w-96 rounded-md z-0 grayscale object-cover relative "
                    src={Print}
                    alt="Machine imprimant des billets de banque"
                  />
                  <img
                    className="h-44 w-96 rounded-md z-40 grayscale object-cover absolute down"
                    src={France}
                    alt="Sticker sur la porte d'une boutique indiquant que Bitcoin est accepté"
                  />
                </div>
              </div>

              {/* Bitcoin */}
              <div className="flex items-center mt-8">
                <div className="flex h-44 w-[464px]">
                  <img
                    className="h-44 w-[464px] rounded-md z-0 grayscale object-cover relative  "
                    src={Lehman}
                    alt="Deux hommes portant une plaque Lehman Brothers"
                  />
                  <img
                    className="h-44 w-[464px] rounded-md z-40 grayscale object-cover absolute down2"
                    src={Gilet}
                    alt="Un gilet jaune avec écrit Buy Bitcoin sur son dos"
                  />
                </div>
                <h1 className="text-9xl font-extrabold pl-16">Bitcoin</h1>
              </div>
            </div>
          </ParallaxLayer>

          {/* But du site */}
          <div className="flex flex-col items-center  mt-48">
            <div className="" />

            <ParallaxLayer offset={1.5} speed={0.3}>
              <div className="flex w-72 ml-[20%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, voluptates consequuntur. Iusto, dignissimos dicta.
                  Facere ea incidunt explicabo. Quasi et voluptatum animi
                  repellendus a modi iusto consequuntur vel illum minus.
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={0.7}>
              <img
                className=" h-64 w-[486px] rounded-md grayscale-[50%] z-100  object-cover ml-[40%] shadow-2xl"
                src={Crash}
                alt="Trader dépité en salle de marché à Wall Street"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={1.2} speed={0.1}>
              <img
                className=" h-72 w-[560px] rounded-md grayscale-[50%] z-0  object-cover ml-[55%] shadow-2xl"
                src={Subprimes}
                alt="Maisons abandonnées"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={1.7}>
              <img
                className=" h-48 w-[382px] rounded-md grayscale-[50%] z-50  object-cover ml-[60%] shadow-2xl"
                src={Bank}
                alt="Personne tenant une pancarte People Over Banks"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={2.1} speed={0.5}>
              <div className="flex w-72 ml-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, voluptates consequuntur. Iusto, dignissimos dicta.
                  Facere ea incidunt explicabo. Quasi et voluptatum animi
                  repellendus a modi iusto consequuntur vel illum minus.
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.1} speed={2.2}>
              <img
                className=" h-64 w-[486px] rounded-md grayscale-[50%] z-50  object-cover ml-[20%] shadow-2xl"
                src={Anon}
                alt="Manifestants portant le masque Anonymous"
              />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.8}>
              <img
                className=" h-72 w-[560px] rounded-md grayscale-[50%] z-100  object-cover ml-[25%] shadow-2xl "
                src={Snowden}
                alt="Photo de Edward Snowden"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={2.9} speed={0.3}>
              <div className="flex w-72 ml-[20%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, voluptates consequuntur. Iusto, dignissimos dicta.
                  Facere ea incidunt explicabo. Quasi et voluptatum animi
                  repellendus a modi iusto consequuntur vel illum minus.
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.9} speed={0.4}>
              <img
                className=" h-72 w-[560px] rounded-md grayscale-[50%] z-0  object-cover ml-[58%] shadow-2xl"
                src={Salvador}
                alt="Boutique acceptant le Bitcoin au Salvador"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={2.9} speed={0.7}>
              <img
                className=" h-64 w-[486px] rounded-md grayscale-[50%] z-100  object-cover ml-[40%] shadow-2xl"
                src={Pizza}
                alt="Un homme et ses enfant avec une pizza, le premier achat en Bitcoin"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={2.8} speed={1}>
              <img
                className=" h-48 w-[382px] rounded-md grayscale-[50%] z-50  object-cover ml-[60%] shadow-2xl"
                src={Africa}
                alt="Personnes en Afrique payant en Bitcoin"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={3.3} speed={0.5}>
              <div className="flex w-72 ml-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, voluptates consequuntur. Iusto, dignissimos dicta.
                  Facere ea incidunt explicabo. Quasi et voluptatum animi
                  repellendus a modi iusto consequuntur vel illum minus.
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3.2} speed={0.4}>
              <img
                className=" h-52 w-[464px] rounded-md grayscale-[50%] z-0  object-cover ml-[7%] shadow-2xl"
                src={Turquie}
                alt="Manifestation contre l'inflation en Turquie"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={3.4} speed={0.7}>
              <img
                className=" h-52 w-[464px] rounded-md grayscale-[50%] z-0  object-cover ml-[10%] shadow-2xl"
                src={Billets}
                alt="Planche à billets"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={3.1} speed={0.3}>
              <img
                className=" h-52 w-[464px] rounded-md grayscale-[50%] z-0  object-cover ml-[27%] shadow-2xl"
                src={Argentine}
                alt="Manifestation contre l'inflation en Argentine"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={3.3} speed={1.2}>
              <img
                className=" h-60 w-[500px] rounded-md grayscale-[50%] z-100  object-cover ml-[30%] shadow-2xl "
                src={Liban}
                alt="Manifestation contre l'inflation au Liban"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.3}>
              <div className="flex w-72 ml-[20%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, voluptates consequuntur. Iusto, dignissimos dicta.
                  Facere ea incidunt explicabo. Quasi et voluptatum animi
                  repellendus a modi iusto consequuntur vel illum minus.
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.1}>
              <img
                className=" h-72 w-[560px] rounded-md grayscale-[50%] z-0  object-cover ml-[58%] shadow-2xl"
                src={Elon}
                alt="Photo d'Elon Musk"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.7}>
              <img
                className=" h-64 w-[486px] rounded-md grayscale-[50%] z-100  object-cover ml-[40%] shadow-2xl"
                src={Mining}
                alt="Mine de Bitcoin"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={1.7}>
              <img
                className=" h-48 w-[382px] rounded-md grayscale-[50%] z-50  object-cover ml-[60%] shadow-2xl"
                src={Bull}
                alt="L'oeuvre de Banksy, une petite fille, faisant face au taureau de Wall Street"
              />
            </ParallaxLayer>

            <ParallaxLayer offset={5.3} speed={0.1}>
              <div className="flex w-72 ml-[30%]">
                <p >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum ducimus inventore distinctio dolores ipsum et, quisquam temporibus eligendi doloribus nisi, adipisci porro earum excepturi esse molestias obcaecati velit nulla!
                </p>
              </div>
            </ParallaxLayer>
          </div>
        </main>
        <Footer/>
        </Parallax>

    </>
  );
};

export default Home;
