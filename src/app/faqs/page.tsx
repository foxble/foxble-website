import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about Foxble IoT devices, including setup, battery replacement, firmware updates, and sensor measurements.',
}

export default function FAQs() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 mt-16">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Warranty</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>One year from date of purchase, unless device delivered dead on arrival.</li>
          <li>For best support, please describe the steps taken for the issue to happens, screenshots if possible and Device ID to support@foxble.com.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Device ID</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>The Device ID for the Fob device is found in Settings, scroll down list, click Device ID and reconnect.</li>
          <li>After reconnecting to the Fob, the Device ID will appear directly underneath Enviro as 16 digits.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Handling Fob device</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fob device is not waterproof.</li>
          <li>Keep Fob device protected from snow or rain.</li>
          <li>Do not cover pin hole on the top of Fob device.</li>
          <li>Hold device by key ring or carabiner.</li>
          <li>A gentle press of the button is all thats required to activate the device.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Connecting to Fob device</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Start Foxble app on mobile phone.</li>
          <li>Click Scan on app.</li>
          <li>Push button on Foxble Fob.</li>
          <li>On mobile app click device name, ex. &quot;Enviro&quot;.</li>
          <li>The app will continue with the connection to the Fob.</li>
          <li>The next screen displays Sensor Readout for the Fob.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Disconnecting from Fob device</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Click Disconnect at the bottom of the Sensor Readout screen.</li>
          <li>Or click the back button at the top of the Sensor Readout screen.</li>
          <li>Pushing the button on Foxble Fob also disconnects the Fob from the app.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Battery Replacement</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Using a quarter dollar coin, turn the battery lid counter clockwise.</li>
          <li>The lid should pop back a slight bit and fallout.</li>
          <li>If the lid is slightly stuck, turn the Fob on its side and give a slight tap against a hard surface.</li>
          <li>Use a CR2032 sized 3V battery for replacement.</li>
          <li>Place the battery into the battery well with the + symbol facing up.</li>
          <li>The side of the battery with all the writing should be visible.</li>
          <li>Place the battery lid back on top of the battery with the circle indent indicators aligned.</li>
          <li>With the quarter dollar coin, and slightly pressing the lid with the coin, turn the lid gently clockwise.</li>
          <li>The battery lid should now be firmly locked in place.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Battery Test</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>In Settings, change display to Battery.</li>
          <li>Reconnect to the Fob to display remaining battery percentage.</li>
          <li>It takes some battery to run the battery test which is why the percentage fluctuates.</li>
          <li>The battery percentage will return to a higher percentage after a current draw is removed.</li>
          <li>Battery should last about a year if on average ten readings are taken each day.</li>
          <li>If for some reason the battery drains rather quickly, please notify our staff of this occurrence.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Sensor Readout Display</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Environmental (Imperial):
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Temperature (ex. 70.8 F)</li>
              <li>Pressure (ex. 29.3 inHg)</li>
              <li>Humidity (ex. 60.1 %)</li>
              <li>Elevation (ex. 615.4 ft)</li>
            </ul>
          </li>
          <li>Altitude (Imperial):
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Altitude (ex. 413.1 ft)</li>
              <li>Temperature (ex. 71.1 F)</li>
              <li>Pressure (ex. 29.3 inHg)</li>
              <li>Humidity (ex. 60.1 %)</li>
              <li>Elevation (ex. 613.1 ft)</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Elevation Readings</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Elevation is determined by using atmospheric pressure, seal level pressure and temperature.</li>
          <li>A constant value of 1013.25 hPa (29.92 inHg or 1 atm or 1013.25 mbar) is used for sea level pressure.</li>
          <li>Temperature and atmospheric pressure is obtained from the sensor on the Fob.</li>
          <li>Sea level pressure is always changing and is why the elevation at your location by the Fob might be over or understated.</li>
          <li>Fluctuations in temperature will also effect the elevation calculation.</li>
          <li>For the way the Fob works right now, you want a sea level pressure to be as close to 1013.25 mbar (29.92 inHg), to get the most accurate elevation reading for where you are right now.</li>
          <li>Sea level pressure can be obtained from local airport broadcasts and from apps like &quot;NOAA Aviation Live Sky Weather&quot;.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Altitude Measurements</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Obtain an elevation reading in feet by connecting to the Fob.</li>
          <li>In Settings, enter that same elevation reading in Elevation Preset.</li>
          <li>Change the Display to Altitude and reconnect to the Fob.</li>
          <li>The Sensor Readout screen now displays the Altitude in large font.</li>
          <li>Raise the Fob higher from the same elevation used earlier to see a change in Altitude.</li>
          <li>Maximum altitude of around 100ft will vary because of humidity, metallic interferences and line of sight.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Firmware Update</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Apart from mobile app updates, the firmware for the Foxble Fob device is also updateable.</li>
          <li>After connecting to the Fob, and if a firmware update is available, an exclamation icon will appear on the top right.</li>
          <li>In Settings, change the Display to Firmware, and reconnect to the device.</li>
          <li>After clicking Start, the LED light on the Fob will change to light blue during the duration of the update.</li>
          <li>On the app itself, a progress bar will appear while updating.</li>
          <li>Once the update is complete, the Fob will disconnect returning the user back to the Scan screen.</li>
          <li>If the firmware update is interrupted midway, the dual bank memory will preserve the original firmware.</li>
          <li>Repeat the firmware update until the message displays Successful.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Mobile Apps</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Play
            <ul className="list-circle pl-6 mt-2">
              <li><a href="https://play.google.com/store/apps/details?id=com.foxble.androidfoxble" className="text-blue-600 hover:underline">https://play.google.com/store/apps/details?id=com.foxble.androidfoxble</a></li>
            </ul>
          </li>
          <li>Apple App Store
            <ul className="list-circle pl-6 mt-2">
              <li><a href="https://apps.apple.com/us/app/foxble/id1425487203" className="text-blue-600 hover:underline">https://apps.apple.com/us/app/foxble/id1425487203</a></li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Sensor Measurements</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Temperature is measured by the voltage change in a silicon diode.</li>
          <li>Pressure is measured by the resistance change due to the elongation of a thin membrane.</li>
          <li>Humidity is measured by the relative permittivity change of a polymer-based capacitor.</li>
          <li>Environmental sensor is a Microelectromechanical System (MEMS).</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Shipping Lithium Metal Cells by USPS</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>CR2032 is classified as a Very Small Lithium Metal Cell.</li>
          <li>CR2032 Specifications:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>Nominal Voltage: 3.0V</li>
              <li>Nominal Weight: 3.0 grams</li>
              <li>Dimensions: Width 20mm x Thickness 3.2mm</li>
            </ul>
          </li>
          <li>CR2032 is mailable by Surface & Air Transportation if properly installed in equipment or if packed with equipment.</li>
          <li><a href="https://pe.usps.com/text/pub52/pub52apxc_032.htm" className="text-blue-600 hover:underline">USPS Publication 52</a></li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Change Fob Firmware App (iOS Only)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>A choice of two firmware apps are available for the Fob:
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>10 Seconds to Sleep - Fob will not advertise after disconnecting.</li>
              <li>Continuous - Fob will continue to advertise after disconnecting.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Comparison of Temperature Measurements</h3>
        <p className="mb-4">A comparison test was performed by placing a temperature monitoring device in a refrigerator freezer, and then immediately into a 21C degree room.</p>
        <p className="mb-4">Temperature monitoring devices used:</p>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>Taylor Thermometer - Model:5316N</li>
          <li>Foxble - Model No. FXB102</li>
          <li>Bosch Sensortec - Shuttle board</li>
        </ul>
        <Image
          src="/temp_comparison-4.webp"
          alt="Temperature comparison chart"
          width={800}
          height={600}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  )
}
