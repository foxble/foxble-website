import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Policies',
  description: 'Foxble LLC privacy policy, terms and conditions, and legal disclaimers.',
}

export default function Policies() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 mt-16">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-8">Policies</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Privacy Policy</h3>

        <p className="mb-4">
          Foxble, LLC does not collect any personal data from our customers.
        </p>

        <p className="mb-4">
          Foxble, LLC has no provisions, nor servers and no method of collecting data by regular use of our app when checking device details external to the mobile like temperature. Also, our Android and Apple iOS apps do not collect any personal data in order to use the app.
        </p>

        <p className="mb-4">
          If you contact us by email, we will only use your email address to contact you to resolve your support request.
        </p>

        <p className="mb-4">
          We will never provide your email address to any other company or 3rd party.
        </p>

        <p className="mb-4">
          We utilize Amazon Web Services to collect IoT data from external device details if the user decides to activate the MQTT feature, and only data from the external device details like temperature, pressure, humidity, elevation and external device id, and do not collect the users name, email, location, mobile number, contacts, search, activity, history or any other piece of information related to the user, installed apps or from the mobile device itself.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Disclaimer of Warranties & Limitation of Liability (Terms & Conditions)</h3>

        <p className="mb-4">
          Foxble, LLC reserves the right to make changes without further notice to any of its products herein. Foxble, LLC makes no warranty, representation of guarantee regarding the suitability of its products for any particular purpose, nor does Foxble, LLC assume any liability arising out of the application or use of any product or circuit, and specifically disclaims any and all liability, including without limitation consequential or incidental damages. Typical parameters can and do vary in different applications. All operating parameters, including Typicals must be validated for each customer application by customers technical experts.
        </p>

        <p className="mb-4">
          Foxble, LLC does not convey any license under its patent rights nor the rights of others. Foxble, LLC products are not designed, intended, or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Foxble, LLC product could create a situation where personal injury or death may occur.
        </p>

        <p className="mb-4">
          Should Buyer purchase or use Foxlbe, LLC products for any such unintended or unauthorized application, Buyer shall indemnify and hold Foxble, LLC and its offices, employees, subsidiaries, affiliates, and distributors harmless against all claims, costs, damages, and expenses, and reasonable attorney fees arising out of, directly or indirectly, any claim of personal injury or death associated with such unintended or unauthorized use, even if such claim alleges that Foxble, LLC was negligent regarding the design or manufacture of the part.
        </p>

        <p className="mb-4">
          Foxble, LLC endeavors to ensure that the information in this document is correct and fairly stated but does not accept liability for any error or omission. The development of Foxble, LLC products and services is continuous and published information may not be up to date. It is important to check the current position with Foxble, LLC.
        </p>

        <p className="mb-4">
          Foxble, Enviro, Tempo, Alto, Airo are trademarks of Foxble, LLC. All other trademarks belong to their respective owners and are recognized and acknowledged.
        </p>
      </div>
    </section>
  )
}
