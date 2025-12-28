import React from "react";

export default function Schedule() {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Beypore International Water Fest Season 5</h1>
            <p className="text-lg text-gray-700">
              <span className="font-bold">December 26-28</span> • Programme Schedule
            </p>
          </div>
          
          {/* Download Button */}
          <a 
            href="/BIWF_S5_SCHEDULE.docx"
            download="BIWF_S5_Schedule.docx"
            className="w-full md:w-auto text-center px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors duration-300"
          >
            Download Schedule 
          </a>
        </div>
      

        {/* Day 1 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2 border-gray-200">Day 1 - December 26, Friday</h2>
          
          {/* Stage 1 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 1 - BEYPORE MARINA</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 4 PM</td>
                    <td className="border border-gray-300 px-4 py-3">SAILING PRACTICE & DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE SEA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">COUNTRY BOAT RACE</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">FLY BOARD DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">4 PM - 6 PM</td>
                    <td className="border border-gray-300 px-4 py-3">SURFING DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE SEA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5:30 PM</td>
                    <td className="border border-gray-300 px-4 py-3">PARAMOTOR DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">04:30 PM</td>
                    <td className="border border-gray-300 px-4 py-3">GOSHAYATHRA</td>
                    <td className="border border-gray-300 px-4 py-3">COIR FACTORY -BEYPORE</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5:30 PM</td>
                    <td className="border border-gray-300 px-4 py-3">INTERNATIONAL KITE FEST</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">2.30 PM - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">NAVY & COAST GUARD SHIP VISIT</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE PORT</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">04:30 PM - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">COAST GUARD DORNIER FLY PAST</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">1 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">FOOD FEST-INAUGURATION - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE PARISON GROUND</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Kudumbashree Cultural Festival */}
            <div className="mt-6 p-4 border border-gray-300 bg-gray-50">
              <h4 className="font-bold text-lg mb-3">4 PM - 10 PM: Kudumbashree Cultural Festival</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>GROUP DANCE</li>
                <li>SANGHAGANAM</li>
                <li>OPPANA</li>
                <li>THIRUVATHIRAKALI</li>
                <li>FOLK SONG</li>
              </ul>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 2 - OCEANUS CHALIYAM</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">5 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">STUDENTS TALENT SHOW</td>
                    <td className="border border-gray-300 px-4 py-3">CHALIYAM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 3 - NALLUR MINI STADIUM</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 9 PM</td>
                    <td className="border border-gray-300 px-4 py-3">RESPONSIBLE TOURISM STALL EXHIBITION</td>
                    <td className="border border-gray-300 px-4 py-3">NALLUR MINI STADIUM</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 9 PM</td>
                    <td className="border border-gray-300 px-4 py-3">OLD IS GOLD - SENIOR CITIZENS CULTURAL PROGRAM</td>
                    <td className="border border-gray-300 px-4 py-3">NALLUR MINI STADIUM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 4 - MULLAVEETTIL ABDU RAHIMAN PARK, RAHMAN BAZAR</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">6 PM</td>
                    <td className="border border-gray-300 px-4 py-3">MUSICAL NIGHT</td>
                    <td className="border border-gray-300 px-4 py-3">RAHMAN PARK</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stage 5 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 5 - RAMANATTUKARA GUP SCHOOL</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">7 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">THEATRE FEST: GEMINI ROCKS, THAMPURAN</td>
                    <td className="border border-gray-300 px-4 py-3">RAMANATTUKARA GUP SCHOOL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stage 6 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 6 - CHERUVANNUR WE PARK</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">CHILDREN'S MAGIC SHOW</td>
                    <td className="border border-gray-300 px-4 py-3">CHERUVANNUR WE PARK</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stage 7 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 7 - NALLALAM WE PARK</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">HARITHA THALAM - CULTURAL PROGRAM</td>
                    <td className="border border-gray-300 px-4 py-3">NALLALAM WE PARK</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2 border-gray-200">Day 2 - December 27, Saturday</h2>
          
          {/* Stage 1 - Day 2 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 1 - BEYPORE MARINA</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 4 PM</td>
                    <td className="border border-gray-300 px-4 py-3">SAILING RIGATTA</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE SEA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">NAVY & COAST GUARD SHIP VISIT</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE PORT</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">11 AM - 1 PM</td>
                    <td className="border border-gray-300 px-4 py-3">BUMPER BOAT/BANANA BOAT DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">1 PM - 2 PM</td>
                    <td className="border border-gray-300 px-4 py-3">DINGHY BOAT RACE</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 3 PM</td>
                    <td className="border border-gray-300 px-4 py-3">NET THROWING</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">3 PM - 4 PM</td>
                    <td className="border border-gray-300 px-4 py-3">TRESSURE HUNT</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">4 PM - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">STAND UP PEDDLE DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5 PM</td>
                    <td className="border border-gray-300 px-4 py-3">FLY BOARD DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">4 PM - 6 PM</td>
                    <td className="border border-gray-300 px-4 py-3">SURFING DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE SEA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5:30 PM</td>
                    <td className="border border-gray-300 px-4 py-3">PARAMOTOR DEMO</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5:30 PM</td>
                    <td className="border border-gray-300 px-4 py-3">INTERNATIONAL KITE FEST</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">FOOD FEST</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE PARISON GROUND</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">7 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">MELODY CONNECT</td>
                    <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Stage 2 - Day 2 */}
        <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 2 - OCEANUS CHALIYAM</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">5 PM - 7 PM</td>
                    <td className="border border-gray-300 px-4 py-3">MARTIAL ARTS EXHIBITION & GYMNASTIC SHOW</td>
                    <td className="border border-gray-300 px-4 py-3">OCEANUS CHALIYAM</td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">7 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">MELODIUS NIGHT</td>
                    <td className="border border-gray-300 px-4 py-3">OCEANUS CHALIYAM</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        {/* Stage 3 - Day 2 */}
        <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 3 - NALLUR MINI STADIUM</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">SANGEETHA SANDHYA</td>
                    <td className="border border-gray-300 px-4 py-3">NALLUR MINI STADIUM</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        {/* Stage 4 - Day 2 */}
        <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 4 - MULLAVEETTIL ABDU RAHIMAN PARK, RAHMAN BAZAR</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">GAZAL NIGHT</td>
                    <td className="border border-gray-300 px-4 py-3">RAHMAN PARK</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        {/* Stage 5 - Day 2 */}
        <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 5 - RAMANATTUKARA GUP SCHOOL</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">7 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">THEATRE FEST - AKALE THAARAPATHANGALIL</td>
                    <td className="border border-gray-300 px-4 py-3">RAMANATTUKARA GUP SCHOOL</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        {/* Stage 6 - Day 2 */}
        <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 6 - CHERUVANNUR WE PARK</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">MAGIC AND MENTALISM PROGRAM</td>
                    <td className="border border-gray-300 px-4 py-3">CHERUVANNUR WE PARK</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        {/* Stage 7 - Day 2 */}
        <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 7 - NALLALAM WE PARK</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">7 PM - 10 PM</td>
                    <td className="border border-gray-300 px-4 py-3">RHYTM NIGHT</td>
                    <td className="border border-gray-300 px-4 py-3">NALLALAM WE PARK</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        
        </div>

        {/* Day 3 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-3 border-b-2 border-gray-200">Day 3 - December 28, Sunday</h2>
          
          {/* Marathon */}
          <div className="mb-6 p-4 border border-gray-300 bg-gray-50">
            <h3 className="font-bold text-lg mb-2">6 AM: MARATHON</h3>
            <p className="text-gray-700">CHALIYAM - BEYPORE</p>
          </div>

          {/* Stage 1 - Day 3 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 1 - BEYPORE MARINA</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">8 AM - 9 AM</td>
                    <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (MEN'S SINGLE)</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">9 AM - 10 AM</td>
                    <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (WOMEN'S SINGLE)</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 11 AM</td>
                    <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (MEN'S DOUBLE)</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">11 AM - 12 PM</td>
                    <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (WOMEN'S DOUBLE)</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">12 PM - 1 PM</td>
                    <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (MIXED DOUBLE)</td>
                    <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Residential Cultural Festival */}
            <div className="mt-6 p-4 border border-gray-300 bg-gray-50">
              <h4 className="font-bold text-lg mb-3">9 AM - 10 PM: RESIDENTIAL CULTURAL FESTIVAL</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>COMEDY SKIT</li>
                <li>NOSTALGIC DANCE</li>
                <li>NADAN PATTU</li>
                <li>THIRUVATHIRA</li>
                <li>KOLKALI</li>
              </ul>
            </div>
          </div>

           <div className="mb-10">
    <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 1 - BEYPORE MARINA</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">8 AM - 9 AM</td>
            <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (MEN'S SINGLE)</td>
            <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-medium">9 AM - 10 AM</td>
            <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (WOMEN'S SINGLE)</td>
            <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 11 AM</td>
            <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (MEN'S DOUBLE)</td>
            <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-medium">11 AM - 12 PM</td>
            <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (WOMEN'S DOUBLE)</td>
            <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">12 PM - 1 PM</td>
            <td className="border border-gray-300 px-4 py-3">SIT ON TOP KAYAK (MIXED DOUBLE)</td>
            <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 5 PM</td>
            <td className="border border-gray-300 px-4 py-3">NAVY & COAST GUARD SHIP VISIT</td>
            <td className="border border-gray-300 px-4 py-3">BEYPORE PORT</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 12 PM</td>
            <td className="border border-gray-300 px-4 py-3">ANGLING</td>
            <td className="border border-gray-300 px-4 py-3">PULIMUTT</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 5 PM</td>
            <td className="border border-gray-300 px-4 py-3">SAILING RIGATTA</td>
            <td className="border border-gray-300 px-4 py-3">BEYPORE SEA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5:30 PM</td>
            <td className="border border-gray-300 px-4 py-3">DRAGON BOAT RACE</td>
            <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5 PM</td>
            <td className="border border-gray-300 px-4 py-3">FLY BOARD DEMO</td>
            <td className="border border-gray-300 px-4 py-3">BREAK WATER</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">4 PM - 6 PM</td>
            <td className="border border-gray-300 px-4 py-3">SURFING DEMO</td>
            <td className="border border-gray-300 px-4 py-3">BEYPORE SEA</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5:30 PM</td>
            <td className="border border-gray-300 px-4 py-3">PARAMOTOR DEMO</td>
            <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-medium">2 PM - 5:30 PM</td>
            <td className="border border-gray-300 px-4 py-3">INTERNATIONAL KITE FEST</td>
            <td className="border border-gray-300 px-4 py-3">BEYPORE MARINA</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-medium">10 AM - 10 PM</td>
            <td className="border border-gray-300 px-4 py-3">FOOD FEST</td>
            <td className="border border-gray-300 px-4 py-3">BEYPORE PARISON GROUND</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    {/* Residential Cultural Festival - Already included ✓ */}
  </div>

    {/* Stage 2 - Day 3 */}
    <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 2 - OCEANUS CHALIYAM</h3>
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">3 PM - 6 PM</td>
                <td className="border border-gray-300 px-4 py-3">COASTAL CARNIVAL - CULTURAL PROGRAMS BY FISHERMAN</td>
                <td className="border border-gray-300 px-4 py-3">CHALIYAM BEACH</td>
            </tr>
            <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                <td className="border border-gray-300 px-4 py-3">VOICE OF COURAGE - DIFFERENTLY ABLED STUDENTS CULTURAL PROGRAMME</td>
                <td className="border border-gray-300 px-4 py-3">CHALIYAM BEACH</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div className="mt-4 p-4 border border-gray-300 bg-gray-50">
        <h4 className="font-bold mb-2">CHESS COMPETITION</h4>
        <p className="text-sm">2 PM - 6 PM at CHALIYAM High school</p>
        </div>
    </div>

    {/* Stage 3 - Day 3 */}
    <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 3 - NALLUR MINI STADIUM</h3>
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                <td className="border border-gray-300 px-4 py-3">KALA SANDHYA - ASHA WORKERS CULTURAL PROGRAM</td>
                <td className="border border-gray-300 px-4 py-3">NALLUR MINI STADIUM</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

    {/* Stage 4 - Day 3 */}
    <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 4 - MULLAVEETTIL ABDU RAHIMAN PARK, RAHMAN BAZAR</h3>
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">4 PM - 10 PM</td>
                <td className="border border-gray-300 px-4 py-3">FESTIVAL OF JOY - ANGANWADI CHILDREN & WORKERS CULTURAL PROGRAMME</td>
                <td className="border border-gray-300 px-4 py-3">RAHMAN PARK</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

    {/* Stage 5 - Day 3 */}
    <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 5 - RAMANATTUKARA GUP SCHOOL</h3>
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                <td className="border border-gray-300 px-4 py-3">ECHOES OF NIGHT</td>
                <td className="border border-gray-300 px-4 py-3">RAMANATTUKARA GUP SCHOOL</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

    {/* Stage 6 - Day 3 */}
    <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 6 - CHERUVANNUR WE PARK</h3>
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                <td className="border border-gray-300 px-4 py-3">MAGIC SHOW</td>
                <td className="border border-gray-300 px-4 py-3">CHERUVANNUR WE PARK</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

    {/* Stage 7 - Day 3 */}
    <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800">STAGE 7 - NALLALAM WE PARK</h3>
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Venue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">6 PM - 10 PM</td>
                <td className="border border-gray-300 px-4 py-3">NIGHT OF HARMONIES</td>
                <td className="border border-gray-300 px-4 py-3">NALLALAM WE PARK</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
        </div>
      </div>
    </section>
  );
}