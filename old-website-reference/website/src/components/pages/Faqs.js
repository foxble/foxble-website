import React from 'react'

const Faqs = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>FAQs</h2>
					  <p><b>Warranty</b></p>
						<ul>
						  <li>One year from date of purchase, unless device delivered dead on arrival.</li>
						  <li>For best support, please describe the steps taken for the issue to happens, screenshots if possible and Device ID to 				support@foxble.com.</li>
						</ul>
					  <p><b>Device ID</b></p>
						<ul>
						  <li>The Device ID for the Fob device is found in Settings, scroll down list, click Device ID and reconnect.</li>
						  <li>After reconnecting to the Fob, the Device ID will appear directly underneath Enviro as 16 digits.</li>
						</ul>
					  <p><b>Handling Fob device</b></p>
						<ul>
						  <li>Fob device is not waterproof.</li>
						  <li>Keep Fob device protected from snow or rain.</li>
						  <li>Do not cover pin hole on the top of Fob device.</li>
						  <li>Hold device by key ring or carabiner.</li>
						  <li>A gentle press of the button is all thats required to activate the device.</li>
						</ul>
					  <p><b>Connecting to Fob device</b></p>
						<ul>
						  <li>Start Foxble app on mobile phone.</li>
						  <li>Click Scan on app.</li>
						  <li>Push button on Foxble Fob.</li>
						  <li>On mobile app click device name, ex. "Enviro".</li>
						  <li>The app will continue with the connection to the Fob.</li>
						  <li>The next screen displays Sensor Readout for the Fob.</li>	  
						</ul>
					  <p><b>Disconnecting from Fob device</b></p>
						<ul>
						  <li>Click Disconnect at the bottom of the Sensor Readout screen.</li>
						  <li>Or click the back button at the top of the Sensor Readout screen.</li>
						  <li>Pushing the button on Foxble Fob also disconnects the Fob from the app.</li>
						</ul>	  	  
					  <p><b>Battery Replacement</b></p>
						<ul>
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
					  <p><b>Battery Test</b></p>
						<ul>
						  <li>In Settings, change display to Battery.</li>
						  <li>Reconnect to the Fob to display remaining battery percentage.</li>
						  <li>It takes some battery to run the battery test which is why the percentage fluctuates.</li>
						  <li>The battery percentage will return to a higher percentage after a current draw is removed.</li>
						  <li>Battery should last about a year if on average ten readings are taken each day.</li>
						  <li>If for some reason the battery drains rather quickly, please notify our staff of this occurrence.</li>
						</ul>	  
					  <p><b>Sensor Readout Display</b></p>
						<ul>
						  <li>Environmental (Imperial):</li>
							<ul>
							    <li>Temperature (ex. 70.8 F)</li>
							    <li>Pressure (ex. 29.3 inHg)</li>
							    <li>Humidity (ex. 60.1 %)</li>
							    <li>Elevation (ex. 615.4 ft)</li>
							</ul>	  
						  <li>Altitude (Imperial):</li>
							<ul>
							    <li>Altitude (ex. 413.1 ft)</li>
							    <li>Temperature (ex. 71.1 F)</li>
							    <li>Pressure (ex. 29.3 inHg)</li>
							    <li>Humidity (ex. 60.1 %)</li>
							    <li>Elevation (ex. 613.1 ft)</li>
							</ul>	 	  
						</ul>	  
					  <p><b>Elevation Readings</b></p>
						<ul>
						  <li>Elevation is determined by using atmospheric pressure, seal level pressure and temperature.</li>
						  <li>A constant value of 1013.25 hPa (29.92 inHg or 1 atm or 1013.25 mbar) is used for sea level pressure.</li>
						  <li>Temperature and atmospheric pressure is obtained from the sensor on the Fob.</li>
						  <li>Sea level pressure is always changing and is why the elevation at your location by the Fob might be over or understated.</li>
							<ul>
							    <li>Ex. If sea level pressure is 1024.5 mbar, then the elevation readout will be understated.</li>
									<ul>
									    <li>If you are at 220 ft, the readout will show 10 ft.</li>
									</ul>
							</ul>
							<ul>
							    <li>Ex. If sea level pressure is 1010.5 mbar, then the elevation readout will be overstated.</li>
									<ul>
									    <li>If you are at 220 ft, the readout will show 350 ft.</li>
									</ul>
							</ul>
						  <li>Fluctuations in temperature will also effect the elevation calculation.</li>
						  <li>For the way the Fob works right now, you want a sea level pressure to be as close to 1013.25 mbar (29.92 inHg), to get the most accurate elevation reading for where you are right now.</li>
						  <li>Sea level pressure can be obtained from local airport broadcasts and from apps like "NOAA Aviation Live Sky Weather".</li>
						</ul>	  
					  <p><b>Altitude Measurements</b></p>
						<ul>
						  <li>Obtain an elevation reading in feet by connecting to the Fob.</li>
						  <li>In Settings , enter that same elevation reading in Elevation Preset.</li>
						  <li>Change the Display to Altitude and reconnect to the Fob.</li>
						  <li>The Sensor Readout screen now displays the Altitude in large font.</li>
						  <li>Raise the Fob higher from the same elevation used earlier to see a change in Altitude.</li>
						  <li>Maximum altitude of around 100ft will vary because of humidity, metallic interferences and line of sight.</li>
						</ul>
					  <p><b>Firmware Update</b></p>
						<ul>
						  <li>Apart from mobile app updates, the firmware for the Foxble Fob device is also updateable.</li>
						  <li>After connecting to the Fob, and if a firmware update is available, an exclamation icon will appear on the top right.</li>
						  <li>In Settings, change the Display to Firmware, and reconnect to the device.</li>
						  <li>After clicking Start, the LED light on the Fob will change to light blue during the duration of the update.</li>
						  <li>On the app itself, a progress bar will appear while updating.</li>
						  <li>Once the update is complete, the Fob will disconnect returning the user back to the Scan screen.</li>
						  <li>If the firmware update is interrupted midway, the dual bank memory will preserve the original firmware.</li>
						  <li>Repeat the firmware update until the message displays Successful.</li>	  
						</ul>
					  <p><b>Device ID</b></p>
						<ul>
						  <li>Each Foxble Fob device has a unique alpha-numeric 16 digit ID.</li>
						  <li>The 3108 prefix is the Foxble LLC manufacturer id as assigned by the Bluetooth.org SIG.</li>
						  <li>In Settings, click Display Device ID, and reconnect to the Fob to display the Device ID on the Scan page.</li>
						  <li>Please reference the Device ID with a screenshot when contacting our support team.</li>
						</ul>	  
					  <p><b>Mobile Apps</b></p>
						<ul>
						  <li>Google Play</li>
							<ul>
								<li><a href="https://play.google.com/store/apps/details?id=com.foxble.androidfoxble">https://play.google.com/store/apps/details?id=com.foxble.androidfoxble</a></li>
							</ul>
						  <li>Apple App Store</li>
							<ul>
								<li><a href="https://apps.apple.com/us/app/foxble/id1425487203">https://apps.apple.com/us/app/foxble/id1425487203</a></li>
							</ul>
						</ul>	  
					  <p><b>Sensor Measurements</b></p>
						<ul>
						  <li>Temperature is measured by the voltage change in a silicon diode.</li>
						  <li>Pressure is measured by the resistance change due to the elongation of a thin membrane.</li>
						  <li>Humidity is measured by the relative permittivity change of a polymer-based capacitor.</li>
						  <li>Environmental sensor is a Microelectromechanical System (MEMS).</li>
						</ul>
					  <p><b>Shipping Lithium Metal Cells by USPS</b></p>
						<ul>
						  <li>CR2032 is classified as a Very Small Lithium Metal Cell.</li>
						  <li>CR2032 Specifications:</li>
							<ul>
							    <li>Nominal Voltage: 3.0V</li>
							    <li>Nominal Weight: 3.0 grams</li>
							    <li>Dimensions: Width 20mm x Thickness 3.2mm</li>
							</ul>					
						  <li>CR2032 is mailable by Surface & Air Transportation:</li>
							<ul>
							    <li>If properly installed in equipment or if packed with equipment.</li>
							    <li>If lithium content does not exceed 0.3 grams.</li>
									<ul>
									    <li>CR2032 contains 0.063 grams of lithium.</li>
									</ul>					
							    <li>If watt-hour rating does not exceed 2.7 Wh.</li>
									<ul>
									    <li>CR2032 has a watt-hour rating of 0.6 Wh.</li>
									</ul>	
							</ul>						
						  <li><a href="https://pe.usps.com/text/pub52/pub52apxc_032.htm">https://pe.usps.com/text/pub52/pub52apxc_032.htm</a></li>
			
						</ul>
					  <p><b>Change Fob Firmware App (iOS Only)</b></p>
						<ul>
						  <li>A choice of two firmware apps are available for the Fob:</li>
							<ul>
							    <li>10 Seconds to Sleep - Fob  will not advertise after disconnecting.</li>
							    <li>Continuous - Fob will continue to advertise after disconnecting.</li>
							</ul>					
						  <li>To change the firmware app:</li>
							<ul>
							    <li>In Settings, click Display, select Firmware, click Done.</li>
							    <li>Return to the main Scan screen, click Scan, and connect to the Fob.</li>
							    <li>If main firmware is up to date, a "Change Device App To" dropdown will be displayed.</li>
							    <li>Click dropdown, select Continuous and click Done.</li>
							    <li>Click Change (just below dropdown), and the screen will advance to the Firmware Update screen.</li>
							    <li>Click Start at the bottom of the screen, which will send the new firmware app to the Fob.</li>
							    <li>The LED on the Fob will start flashing light blue to indicate that the change is in progress.</li>
							    <li>A pop-up will appear saying Success, click OK.</li>
							    <li>Click Scan to connect to the Fob.</li>
							    <li>If by chance the firmware app change is interrupted, the Fob has dual bank memory and retains the original firmware app and will not make the change until a new firmware app is received successfully. </li>
							</ul>						
						</ul>					
					  <p><b>Comparison of Temperature Measurements</b></p>
						<ul>
						  <li>A comparison test was performed by placing a temperature monitoring device in a refrigerator freezer, and then immediately into a 21C degree room.</li>
						  <li>Temperature monitoring devices used:</li>
							<ul>
							    <li>Taylor Thermometer - Model:5316N</li>
							    <li>Foxble - Model No. FXB102</li>
							    <li>Bosch Sensortec - Shuttle board</li>
							</ul>					  
						</ul>
						<img src="temp_comparison-4.webp" alt="temp_comparison-4" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Faqs;