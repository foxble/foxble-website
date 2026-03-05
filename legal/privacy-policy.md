# Privacy Policy

**Foxble LLC**
**Effective Date:** March 5, 2026
**Last Updated:** March 5, 2026

---

## 1. Introduction

Foxble LLC ("Foxble," "we," "us," or "our") is committed to protecting the privacy of its customers and the individuals whose data is processed through the Foxble platform. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our IoT location tracking and monitoring service, including the FXB Tracking dashboard, APIs, email and SMS notifications, and related services (collectively, the "Service").

This Policy applies to:
- Customers (businesses and organizations) that subscribe to the Service ("Tenants")
- Users of the Service (administrators, operators, viewers)
- Individuals whose location or device data is collected through connected Devices ("Tracked Individuals")

By using the Service, you agree to the collection and use of information as described in this Policy. If you do not agree, do not use the Service.

---

## 2. Information We Collect

### 2.1 Account and Registration Information
When you create an account or subscribe to the Service, we collect:
- Name and email address
- Organization name
- Username and encrypted password
- Payment information (processed by our payment processor; we do not store full payment card details)
- Account preferences and settings

### 2.2 Device and Location Data
The Service is designed to collect real-time and historical data from connected IoT devices (such as the Nordic Thingy:91 X), including:
- **GPS coordinates** (latitude, longitude, accuracy)
- **Location history** and trail data
- **Geofence events** (entry, exit, dwell time)
- **Journey data** (origin, destination, departure time, arrival time, duration)
- **In-transit events** and timestamps
- **Device identifiers** (device ID, device name, device label)

### 2.3 Sensor and Telemetry Data
Connected Devices may transmit sensor readings to the Service, including:
- Temperature
- Humidity
- Air pressure
- Battery level
- Signal strength (RSRP)
- Air quality index

### 2.4 Usage and Log Data
When you access or use the Service, we automatically collect:
- IP address and browser type
- Pages accessed and features used
- Login timestamps and session duration
- API request logs
- Error and diagnostic logs

### 2.5 Communications Data
If you contact us for support or other inquiries, we collect the content of those communications and any information you voluntarily provide.

### 2.6 Notification Data
The Service sends email and SMS notifications based on device events. We collect and store:
- Notification recipient email addresses and phone numbers
- Notification configuration settings (alert types, thresholds)
- Notification delivery status and timestamps

---

## 3. How We Use Your Information

We use the information we collect to:

- **Provide the Service**: Process and display location, sensor, and telemetry data; generate reports; trigger geofence alerts; send notifications.
- **Manage Accounts**: Create and maintain user accounts; authenticate users; manage subscription billing.
- **Send Notifications**: Deliver email and SMS alerts for location arrivals, departures, journey completions, battery alerts, and other configured events.
- **Generate Reports**: Produce daily, weekly, and historical reports on device location and activity.
- **Improve the Service**: Analyze usage patterns, diagnose technical issues, and develop new features.
- **Billing and Payments**: Process subscription fees and manage payment records.
- **Security and Fraud Prevention**: Monitor for unauthorized access, abuse, or fraudulent activity.
- **Legal Compliance**: Comply with applicable laws, regulations, and legal process.
- **Customer Support**: Respond to inquiries, troubleshoot issues, and provide technical assistance.

We do not sell your personal information or Customer Data to third parties. We do not use Customer Data — including location data of Tracked Individuals — for advertising purposes.

---

## 4. Location Data and Tracked Individuals

### 4.1 Tenant Responsibility
The Service is used by Tenants (businesses) to track their own assets and, in some cases, individuals such as employees or contractors. Foxble processes this location data on behalf of and at the direction of the Tenant.

**Tenants are solely responsible for:**
- Obtaining all legally required consent from Tracked Individuals before deploying Devices;
- Providing appropriate notice to Tracked Individuals about the nature, scope, and purpose of tracking;
- Complying with all applicable laws governing employee monitoring, vehicle tracking, and GPS surveillance in their jurisdiction.

### 4.2 Foxble's Role
With respect to data about Tracked Individuals, Foxble acts as a data processor on behalf of the Tenant. We process this data only as directed by the Tenant and as necessary to provide the Service.

### 4.3 Sensitivity of Location Data
We recognize that location data is inherently sensitive. We take the following steps to protect it:
- Location data is accessible only to authorized users within the Tenant's account
- Data is transmitted over encrypted connections (TLS)
- Access is controlled by role-based permissions
- We do not share location data of Tracked Individuals with third parties except as described in Section 6

---

## 5. Cookies and Tracking Technologies

The Service may use cookies and similar technologies (such as session tokens and local storage) to:
- Maintain your logged-in session
- Remember your preferences
- Analyze Service usage

You can control cookies through your browser settings. Disabling cookies may affect the functionality of the Service.

We do not currently use third-party advertising cookies or cross-site tracking technologies.

---

## 6. How We Share Information

We do not sell or rent your personal information. We may share information in the following limited circumstances:

### 6.1 Service Providers
We share information with trusted third-party vendors who assist us in providing the Service, including:
- **Amazon Web Services (AWS)**: Cloud infrastructure hosting, email delivery (SES), and SMS delivery (Pinpoint)
- **nRF Cloud (Nordic Semiconductor)**: Device connectivity and location API services
- **OpenStreetMap**: Mapping and geocoding services
- **Payment Processors**: For subscription billing

These providers are contractually bound to use your information only as necessary to provide their services to us and in accordance with applicable law.

### 6.2 Within Your Organization
User and device data is shared among authorized Users within your Tenant account, subject to role-based access controls you configure.

### 6.3 Legal Requirements
We may disclose information if required to do so by law or in response to valid legal process (such as a court order, subpoena, or government request), or when we believe disclosure is necessary to protect the rights, property, or safety of Foxble, our customers, or the public.

### 6.4 Business Transfers
In the event of a merger, acquisition, reorganization, or sale of all or substantially all of Foxble's assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on our website of any such change and any choices you may have.

### 6.5 With Your Consent
We may share information for any other purpose with your explicit consent.

---

## 7. Data Retention

We retain Customer Data, account information, and associated records for the maximum period permitted by applicable law, or as otherwise agreed in writing. Factors that influence retention periods include:

- The nature of the data and its purpose
- Legal and regulatory obligations
- Contractual requirements
- Legitimate business needs (e.g., dispute resolution, audit trails)

Upon termination of your Subscription, we will retain your data for a reasonable transition period before deletion, during which you may request an export of your data by contacting legal@foxble.com.

Specific data types and their general retention guidelines:

| Data Type | Retention Period |
|-----------|-----------------|
| Location history | Duration of Subscription + applicable legal minimum |
| Sensor/telemetry data | Duration of Subscription + applicable legal minimum |
| Account information | Duration of Subscription + 7 years |
| Billing records | 7 years (tax and financial compliance) |
| System logs | Up to 2 years |
| Notification records | Up to 2 years |

---

## 8. Data Security

Foxble implements industry-standard technical and organizational security measures to protect your information, including:

- **Encryption in transit**: All data transmitted between Devices, the Service, and users is encrypted using TLS
- **Encrypted passwords**: User passwords are stored using one-way cryptographic hashing
- **Access controls**: Role-based access controls limit data access to authorized personnel
- **Cloud security**: Infrastructure hosted on AWS with security controls aligned to industry standards
- **Certificate-based device authentication**: IoT Devices authenticate to the cloud using X.509 certificates

No security system is completely impenetrable. In the event of a data breach that affects your rights and freedoms, we will notify you as required by applicable law.

---

## 9. Your Rights and Choices

Depending on your location and applicable law, you may have the following rights with respect to your personal information:

- **Access**: Request a copy of the personal information we hold about you
- **Correction**: Request correction of inaccurate or incomplete information
- **Deletion**: Request deletion of your personal information, subject to legal retention requirements
- **Portability**: Request an export of your data in a machine-readable format
- **Restriction**: Request that we restrict processing of your information in certain circumstances
- **Objection**: Object to certain types of processing

To exercise any of these rights, contact us at legal@foxble.com. We will respond within the timeframe required by applicable law. We may need to verify your identity before processing your request.

### 9.1 California Residents (CCPA/CPRA)
If you are a California resident, you have the following additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):

- **Right to Know**: The categories and specific pieces of personal information we collect, use, disclose, or sell
- **Right to Delete**: Deletion of personal information we have collected, subject to exceptions
- **Right to Correct**: Correction of inaccurate personal information
- **Right to Opt-Out of Sale**: We do not sell personal information
- **Right to Non-Discrimination**: We will not discriminate against you for exercising your privacy rights

To submit a CCPA/CPRA request, contact us at legal@foxble.com or visit foxble.com.

**Categories of personal information collected:**
- Identifiers (name, email, device ID, IP address)
- Geolocation data
- Commercial information (subscription records)
- Internet or network activity (usage logs)
- Sensor data from connected Devices

**We do not sell or share personal information for cross-context behavioral advertising.**

---

## 10. Children's Privacy

The Service is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information promptly. If you believe a child has provided us with personal information, please contact us at legal@foxble.com.

---

## 11. International Data Transfers

Foxble is based in the United States and processes data on servers located in the United States (AWS us-west-2, Oregon). If you access the Service from outside the United States, your information may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your country. By using the Service, you consent to this transfer. We take steps to ensure that international transfers comply with applicable data protection laws.

---

## 12. Third-Party Links and Integrations

The Service may contain links to or integrate with third-party websites and services (such as mapping providers). This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you access through or in connection with the Service.

---

## 13. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, the Service, or applicable law. We will notify you of material changes by:
- Sending an email to the address associated with your account, and/or
- Displaying a prominent notice within the Service

The updated Policy will indicate the revised effective date. Your continued use of the Service after the effective date constitutes acceptance of the updated Policy.

---

## 14. Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:

**Foxble LLC**
Privacy & Legal Inquiries
Email: legal@foxble.com
Website: foxble.com

We aim to respond to all inquiries within 30 days or within the timeframe required by applicable law, whichever is shorter.

---

*This Privacy Policy was last updated on March 5, 2026.*
