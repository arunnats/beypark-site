import { Link } from "react-router-dom";
import ParkingMap from "../components/ParkingMap";

export default function Home() {
  return (
    <section className="flex flex-col bg-transparent relative z-10 px-6 md:px-20 lg:px-32 mt-32 font-poppins text-black pb-8 md:pb-12">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight mb-1">
          Trying to park for the Beypore Water Fest? <br />
          We got you!
        </h1>

        <p className="text-base md:text-2sxl font-medium md:font-semibold mb-6 md:mb-12 leading-relaxed">
          Live parking availability and directions for official Beypore Water
          Car Festival parking lots.
        </p>

        <div className="w-full flex justify-center mb-8 md:mb-16">
          <a
            href="/beypark-android.apk"
            download="BeyPark_App.apk"
            className="text-xl md:text-3xl font-extrabold underline decoration-2 underline-offset-4 hover:text-gray-700 transition-colors cursor-pointer"
          >
            Get the BeyPark Android App!
          </a>
        </div>

        <p className="text-sm md:text-xl font-bold text-start md:text-center">
          All official Beypore Water Fest car parking locations are shown below
          with real-time occupancy updates.
        </p>
        <p className="text-sm md:text-xl font-extrabold text-start md:text-center">
          Note: Parking Available for Cars only.
        </p>
      </div>

      <ParkingMap />
    </section>
  );
}
