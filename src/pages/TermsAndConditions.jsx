import React, { useState } from 'react';
import LegalPageHeader from '../components/LegalPageHeader';

/* ---------------------------------------------------------
   All 20 T&C Sections  -  content is trusted static HTML
   --------------------------------------------------------- */
const tcSections = [
  {
    number: '01',
    title: 'Introduction',
    content: `
      <h3>1.1 Agreement Overview</h3>
      <p>These Terms and Conditions ("Agreement") govern your access to and use of the MyToDoo website, mobile application and related services (together, the "Platform"). The Platform is operated by [Name of the Company] (ACN [..................]) ("MyToDoo", "we", "our" or "us").</p>
      <h3>1.2 Acceptance of Terms</h3>
      <p>By creating an account, posting a task, making or accepting an offer, or otherwise using the Platform, you agree to be bound by this Agreement, together with our Privacy Policy, Community Guidelines and any other policies published on the Platform (collectively, the "Policies"). If you do not agree, you must not use the Platform.</p>
      <h3>1.3 Nature of Platform</h3>
      <p>MyToDoo provides an online marketplace that allows registered users ("Users") to connect with one another for the purpose of offering and receiving services ("Tasks"). We are not a party to any contract for services between Users. Each contract for services is formed directly between the User who posts a task ("Poster") and the User who agrees to perform the task ("Tasker").</p>
      <h3>1.4 Policies Incorporated</h3>
      <p>All Policies referred to in this Agreement form part of this Agreement. We may update our Policies from time to time, and you agree to comply with them as updated.</p>
    `,
  },
  {
    number: '02',
    title: 'Scope of Services',
    content: `
      <h3>2.1 Marketplace Role</h3>
      <p>(a) MyToDoo provides the Platform as an online marketplace that enables Users to connect for the purpose of publishing, offering, and performing services ("Tasks").</p>
      <p>(b) MyToDoo does not itself perform Tasks and is not a party to any Task Contract between Users.</p>
      <p>(c) MyToDoo does not guarantee, endorse, or verify the quality, safety, legality, accuracy, or suitability of any Task, Posted Task, Offer, or Task Contract, nor the competence, qualifications, licences, insurance, or background of any User.</p>
      <p>(d) Each User is solely responsible for conducting their own due diligence before entering into a Task Contract.</p>
      <h3>2.2 Task Creation and Offers</h3>
      <p>(a) A User seeking services ("Poster") may create and publish a request for services on the Platform ("Posted Task"). Posters warrant that their Posted Tasks are accurate, complete, lawful, and do not breach any third-party rights.</p>
      <p>(b) Other Users ("Taskers") may respond by making an offer to perform the Task ("Offer"). Taskers warrant that they are competent, qualified, licensed, and insured (where required) to perform the Task safely and lawfully.</p>
      <p>(c) When a Poster accepts an Offer, a separate binding contract ("Task Contract") is formed directly between the Poster and Tasker. The Task Contract incorporates the terms of this Agreement and any additional terms expressly agreed between those Users through the Platform.</p>
      <p>(d) MyToDoo may, at its discretion and without liability, reject, suspend, or remove any Posted Task or Offer that it considers misleading, inappropriate, unlawful, or otherwise unsuitable for the Platform.</p>
      <h3>2.3 No Agency Relationship</h3>
      <p>Nothing in this Agreement creates any employment, agency, partnership, fiduciary, joint venture, or other relationship between MyToDoo and any User. Users act in their own capacity and as independent contractors. MyToDoo has no responsibility for, and disclaims all liability in relation to:</p>
      <ul>
        <li>wages, salaries, superannuation, leave, workers compensation, or other employment entitlements;</li>
        <li>tax obligations, GST, or other statutory charges;</li>
        <li>professional licences, permits, or approvals required to lawfully perform a Task; and</li>
        <li>work health and safety obligations relating to the conduct of the Task.</li>
      </ul>
      <h3>2.4 Permitted Tasks</h3>
      <p>Tasks may include a wide range of lawful services, such as home maintenance, cleaning, gardening, painting, plumbing, electrical work (by licensed providers), IT support, delivery and removalist services, and other personal or business services.</p>
      <h3>2.5 Prohibited Tasks</h3>
      <p>Users must not use the Platform to post, offer, or request:</p>
      <ul>
        <li>unlawful, fraudulent, or illegal activities;</li>
        <li>services requiring a licence, permit, or qualification that the Tasker does not hold;</li>
        <li>services involving hazardous materials or activities that pose a risk to health or safety, unless the Tasker holds all required licences and insurances;</li>
        <li>services in regulated industries (including child care, health care, financial services, or legal services) unless the Tasker is duly authorised;</li>
        <li>services that infringe intellectual property or other third-party rights;</li>
        <li>off-platform or cash payments, or any arrangement intended to circumvent the Platform's payment processes or fees; or</li>
        <li>any other service that MyToDoo, in its sole discretion, considers inappropriate for the Platform.</li>
      </ul>
      <p><strong>Rights of MyToDoo regarding prohibited tasks:</strong></p>
      <ol class="roman">
        <li>MyToDoo may, without notice, suspend, restrict, or permanently terminate the account of any User who breaches this clause.</li>
        <li>MyToDoo may cancel any Task Contract formed in breach of this clause and withhold or refund payments at its discretion.</li>
        <li>MyToDoo may recover from the breaching User any platform fees, transaction costs, or losses reasonably attributable to the breach.</li>
        <li>MyToDoo reserves the right to refer suspected unlawful activities to law enforcement, regulators, or other authorities.</li>
        <li>Breaching Users indemnify MyToDoo against any claims, damages, or expenses arising from prohibited Tasks.</li>
      </ol>
      <h3>2.6 Changes to Services</h3>
      <p>(a) MyToDoo may, from time to time, modify, suspend, or discontinue features of the Platform, including introducing or withdrawing services or functionalities, without liability.</p>
      <p>(b) Such changes will not materially affect existing Task Contracts already formed, unless required by law.</p>
      <p>(c) MyToDoo will not be liable for any loss or damage arising from modification, suspension, or discontinuation of Platform features, except to the extent required by the Australian Consumer Law.</p>
    `,
  },
  {
    number: '03',
    title: 'User Accounts & Eligibility',
    content: `
      <h3>3.1 Account Creation</h3>
      <p>(a) To access and use the Platform, you must register for an account and provide accurate, current and complete information.</p>
      <p>(b) You must keep your login credentials secure. You are responsible for all activity conducted under your account, whether authorised by you or not.</p>
      <p>(c) You must immediately notify MyToDoo of any unauthorised use of your account or suspected security breach.</p>
      <h3>3.2 Eligibility</h3>
      <p>(a) You must be at least 18 years of age and have the legal capacity to enter into binding contracts.</p>
      <p>(b) By creating an account, you warrant that you meet all eligibility requirements and that any information provided by you is true, complete, and not misleading.</p>
      <h3>3.3 Data Protection and Privacy</h3>
      <p>(a) Personal information provided to MyToDoo will be handled in accordance with our Privacy Policy. By using the Platform, you consent to our collection, use, storage, and disclosure of your personal information for the purposes of operating the Platform, complying with applicable laws, and facilitating Task Contracts.</p>
      <p>(b) You expressly consent to the transfer, storage, and processing of your personal information by third-party service providers (including payment processors, cloud hosting, and identity verification providers), which may be located outside Australia.</p>
      <p>(c) MyToDoo does not guarantee the security of transmissions over the internet or the Platform. You acknowledge that you provide information at your own risk, subject to your non-excludable rights under the Australian Consumer Law.</p>
      <p>(d) To the fullest extent permitted by law, MyToDoo disclaims liability for any unauthorised access, loss, misuse, disclosure, or alteration of your personal information arising from acts or omissions of third parties, provided that MyToDoo has taken reasonable steps to safeguard such information.</p>
      <h3>3.4 User Responsibility for Data</h3>
      <p>(a) You are responsible for ensuring the accuracy of information you submit, and for updating your details as necessary.</p>
      <p>(b) You must not upload or transmit any information that you do not have the right to use, or that infringes the rights of others.</p>
      <p>(c) You acknowledge that deletion of your account may not result in immediate deletion of all associated data where MyToDoo is required to retain such data for legal, regulatory, or legitimate business purposes.</p>
      <h3>3.5 Verification</h3>
      <p>(a) MyToDoo may require you to verify your identity using third-party providers (including RatifyID in accordance with its Terms and Conditions and other verification services).</p>
      <p>(b) Verification may include providing government-issued identification, proof of address, or other documentation.</p>
      <p>(c) MyToDoo may also offer optional checks at its sole discretion (such as police checks or working with children checks). These checks are provided by third-party providers and MyToDoo does not warrant their accuracy or completeness.</p>
      <p>(d) You are solely responsible for ensuring that you comply with all legal and licensing requirements before performing any Task.</p>
      <h3>3.6 No Subcontracting</h3>
      <p>(a) Taskers must personally perform the services agreed in a Task Contract.</p>
      <p>(b) You must not subcontract or delegate any Task to another person.</p>
      <p>(c) Any attempt to subcontract or delegate a Task will be a breach of this Agreement and may result in termination of your account.</p>
      <h3>3.7 Suspension or Cancellation of Accounts</h3>
      <p>MyToDoo may, in its sole discretion, suspend, cancel, or limit your account if it reasonably considers that you have:</p>
      <ul>
        <li>breached this Agreement, Consumer Guide or any Policy;</li>
        <li>engaged in unlawful, fraudulent, or harmful conduct; or</li>
        <li>otherwise acted in a way detrimental to the operation or reputation of the Platform.</li>
      </ul>
    `,
  },
  {
    number: '04',
    title: 'Posting and Accepting Tasks',
    content: `
      <h3>4.1 Creating a Posted Task</h3>
      <p>(a) A User seeking services ("Poster") may create and publish a request for services on the Platform ("Posted Task").</p>
      <p>(b) A Posted Task must include sufficient detail to allow Taskers to make an informed Offer, including a description of the services, timeframe, and any relevant requirements.</p>
      <p>(c) A Poster must not post any Task that is unlawful, misleading, or contrary to this Agreement or our Policies.</p>
      <h3>4.2 Offers by Taskers</h3>
      <p>(a) A User who wishes to perform a Task ("Tasker") may respond to a Posted Task by making an offer to perform the Task ("Offer").</p>
      <p>(b) Offers must represent the total price for completing the Task. Hourly rates, partial payments, or off-platform negotiations are not permitted.</p>
      <p>(c) A Tasker may withdraw or amend an Offer at any time before it is accepted by the Poster.</p>
      <h3>4.3 Acceptance and Task Contract</h3>
      <p>(a) When a Poster accepts a Tasker's Offer, a separate contract ("Task Contract") is formed directly between the Poster and the Tasker.</p>
      <p>(b) Each Task Contract incorporates the terms of this Agreement and any additional terms agreed between the Poster and Tasker through the Platform.</p>
      <p>(c) MyToDoo is not a party to any Task Contract and has no responsibility for the performance of services under a Task Contract.</p>
      <h3>4.4 Payment at Acceptance</h3>
      <p>(a) Upon acceptance of an Offer, the Poster must pay the Agreed Price and applicable fees (including the Connection Fee) into the Payment Account operated by the Payment Provider (Stripe).</p>
      <p>(b) Funds are held in escrow and will be released in accordance with clause 5.</p>
      <h3>4.5 Prohibited Conduct</h3>
      <p>When posting or accepting Tasks, you must not:</p>
      <ul>
        <li>attempt to negotiate payment or services outside the Platform;</li>
        <li>post or accept unlawful or unsafe Tasks;</li>
        <li>misrepresent your skills, licences, or ability to complete the Task; or</li>
        <li>engage in any activity that undermines the integrity of the Platform.</li>
      </ul>
      <p>Any such activity will make your account liable for suspension or termination at the sole discretion of MyToDoo.</p>
      <h3>4.6 Private Bookings and Other Features</h3>
      <p>(a) MyToDoo may from time to time introduce additional features such as subscription services or premium memberships.</p>
      <p>(b) At present, MyToDoo does not support private bookings. All Tasks must be created and accepted through the Platform.</p>
    `,
  },
  {
    number: '05',
    title: 'Payments and Escrow',
    content: `
      <h3>5.1 Payment Process</h3>
      <p>(a) When a Poster accepts a Tasker's Offer, the Poster must pay the agreed price for the Task ("Agreed Price") together with any applicable fees into the Payment Account operated by our payment provider, Stripe.</p>
      <p>(b) The Agreed Price is held in escrow by Stripe until the Task is completed and payment is released in accordance with this clause.</p>
      <h3>5.2 Release of Funds</h3>
      <p>(a) Once the Tasker has marked the Task as complete, the Poster will be notified and must confirm whether the Task has been completed satisfactorily.</p>
      <p>(b) If the Poster confirms completion, the Tasker Funds (Agreed Price less the Tasker Service Fee) will be released to the Tasker.</p>
      <p>(c) If the Poster does not confirm completion within 30 days of the Tasker marking the Task complete, the Task will be deemed completed and the Tasker Funds will be automatically released to the Tasker.</p>
      <h3>5.3 No Milestone Payments</h3>
      <p>MyToDoo does not currently support milestone or staged payments. All payments must be made in full at the time a Task Contract is formed.</p>
      <h3>5.4 No Off-Platform Payments</h3>
      <p>(a) All payments for Tasks must be made through the Platform.</p>
      <p>(b) Taskers must not request, and Posters must not make, payments outside the Platform.</p>
      <p>(c) Any attempt to circumvent the Platform's payment system is a breach of this Agreement and may result in suspension or termination of your account.</p>
      <h3>5.5 Stripe Terms</h3>
      <p>(a) Payments are held and processed by Stripe, a third-party payment provider.</p>
      <p>(b) By using the Platform, you agree to be bound by Stripe's Services Agreement, available at https://stripe.com/ssa.</p>
      <p>(c) To the extent of any inconsistency, Stripe's terms will prevail in relation to the operation of the Payment Account.</p>
      <h3>5.6 Accurate Banking Details</h3>
      <p>You are responsible for ensuring that the payment and banking details provided in your account settings are accurate and up to date. MyToDoo is not responsible for delays or failed payments caused by incorrect or incomplete information supplied by you.</p>
    `,
  },
  {
    number: '06',
    title: 'Fees and Charges',
    content: `
      <h3>6.1 Types of Fees</h3>
      <p>The following fees apply to use of the Platform:</p>
      <ul>
        <li><strong>Connection Fee</strong> - a fee payable by the Poster when accepting a Tasker's Offer. The Connection Fee is separate to the Agreed Price and is non-refundable.</li>
        <li><strong>Tasker Service Fee</strong> - a fee deducted from the Agreed Price before release of funds to the Tasker. The Tasker Service Fee is charged on a tiered basis, as set out in clause 6.3.</li>
        <li><strong>Transaction Fees</strong> - any additional fees required to process payments (e.g. card fees, Stripe charges) may be passed on to Users.</li>
      </ul>
      <h3>6.2 GST</h3>
      <p>(a) All fees payable by Australian Users are inclusive of GST.</p>
      <p>(b) Where services are provided outside Australia, GST does not apply to the relevant fees, but Users remain responsible for any applicable local taxes.</p>
      <h3>6.3 Tasker Service Fee - Tiered Structure</h3>
      <p>The Tasker Service Fee depends on the Tasker's total completed earnings in the previous 30 days:</p>
      <table class="fee-table">
        <thead>
          <tr><th>Tier</th><th>Earnings (30 days)</th><th>Fee</th></tr>
        </thead>
        <tbody>
         <tr><td>🌱 Grasshopper</td><td>Less than $799</td><td>15% + GST</td></tr>
          <tr><td>🚗 P-Plater</td><td>$800 - $2,499</td><td>13% + GST</td></tr>
          <tr><td>⭐ Expert</td><td>$2,500 - $4,999</td><td>11% + GST</td></tr>
          <tr><td>🏆 Grandmaster</td><td>$5,000 or more</td><td>9% + GST</td></tr>
        </tbody>
      </table>
      <h3>6.4 Timing of Charges</h3>
      <p>(a) The Connection Fee is charged at the time a Poster accepts a Tasker's Offer.</p>
      <p>(b) The Tasker Service Fee is deducted from the Tasker Funds at the time payment is released from escrow.</p>
      <p>(c) Transaction Fees, if any, are charged at the time of processing the relevant payment.</p>
      <h3>6.5 No Partial Payments</h3>
      <p>All Offers must reflect the full price for completing the Task. Hourly rates, partial payments, commission-based arrangements, or off-platform payments are not permitted.</p>
      <h3>6.6 Changes to Fees</h3>
      <p>MyToDoo may vary the amount or structure of fees from time to time. Any changes will be published on the Platform and will apply to new Tasks created after the change takes effect.</p>
    `,
  },
  {
    number: '07',
    title: 'Refunds, Cancellations and Credits',
    content: `
      <h3>7.1 Non-Refundable Fees</h3>
      <p>(a) The Connection Fee is non-refundable in all circumstances, except where required by the Australian Consumer Law.</p>
      <p>(b) Transaction Fees and Tasker Service Fees are also non-refundable, except as required by law.</p>
      <h3>7.2 Cancellations by Poster</h3>
      <p>(a) If a Poster cancels a Task after accepting an Offer, the Connection Fee will be retained by MyToDoo.</p>
      <p>(b) The Agreed Price may be refunded to the Poster as MyToDoo Credits, unless the Australian Consumer Law requires a refund to the original payment method.</p>
      <h3>7.3 Cancellations by Tasker</h3>
      <p>(a) If a Tasker cancels a Task after their Offer has been accepted, a cancellation fee equal to the Connection Fee will be charged to the Tasker.</p>
      <p>(b) The cancellation fee may be deducted from future payouts until paid in full.</p>
      <h3>7.4 Cancellations and Extensions after 30 Days</h3>
      <p>(a) If a Task remains unresolved at 30 days from the creation of the Task, the Poster may either cancel or extend such Task at their sole discretion.</p>
      <p>(b) If a Task is extended after the 30 days, the Task cycle recommences and remains open for a further 30 days.</p>
      <h3>7.5 Refunds</h3>
      <p>(a) Refunds of the Agreed Price will ordinarily be issued as MyToDoo Credits, unless the Australian Consumer Law requires a refund to the original payment method.</p>
      <p>(b) Posters may request a refund to their original payment method. MyToDoo may grant or refuse such a request at its discretion, subject always to the Australian Consumer Law.</p>
      <h3>7.6 MyToDoo Credits (Purchased/Refund Credits)</h3>
      <p>(a) MyToDoo Credits represent prepaid value that may be used to pay for future Tasks on the Platform.</p>
      <p>(b) Credits are not redeemable for cash, except where required by the Australian Consumer Law.</p>
      <p>(c) Credits will have a minimum expiry period of 3 years from the date of issue. The expiry date will be displayed at the time of issue.</p>
      <p>(d) No post-supply fees will apply to Credits, and the balance will not diminish except through redemption or lawful cancellation.</p>
      <p>(e) Credits are personal to the User and cannot be sold, transferred, or assigned.</p>
      <p>(f) MyToDoo is not responsible for lost, stolen, or unauthorised use of Credits, except as required by law.</p>
      <h3>7.7 MyToDoo Points (Loyalty/Engagement Points)</h3>
      <p>(a) MyToDoo Points may be issued to Users for engagement activities such as referrals, reviews, promotions, or other participation as determined by MyToDoo.</p>
      <p>(b) Points may be redeemed only on the Platform, in accordance with the rules published from time to time.</p>
      <p>(c) Points are not redeemable for cash and are not gift cards or vouchers for the purposes of the Australian Consumer Law.</p>
      <p>(d) Points may have a shorter expiry (for example, 6-12 months) as notified at the time of issue, and unused Points will be forfeited at expiry.</p>
      <p>(e) Points may be cancelled if obtained fraudulently, in breach of this Agreement, or if the loyalty program is suspended or terminated.</p>
      <h3>7.8 Consumer Guarantees</h3>
      <p>Nothing in this Agreement limits or excludes your rights under the Australian Consumer Law. If services are not provided with due care and skill, or are otherwise defective, you may be entitled to a refund, repair or replacement, and these rights cannot be excluded.</p>
      <h3>7.9 Repeated Cancellations</h3>
      <p>MyToDoo may suspend or terminate a User's account where repeated cancellations occur, whether by a Poster or Tasker.</p>
    `,
  },
  {
    number: '08',
    title: 'Insurance and Risk Allocation',
    content: `
      <h3>8.1 No Insurance Provided by MyToDoo</h3>
      <p>(a) MyToDoo does not provide any form of insurance to Users.</p>
      <p>(b) MyToDoo is not responsible for ensuring that any Tasker or Poster holds appropriate insurance in relation to a Task.</p>
      <h3>8.2 User Responsibility for Insurance</h3>
      <p>(a) Taskers are solely responsible for obtaining and maintaining all insurance necessary to perform Tasks, including public liability, workers' compensation (if applicable), and any other legally required or industry-standard insurance.</p>
      <p>(b) Posters are solely responsible for making their own enquiries as to whether a Tasker has appropriate insurance in place before engaging them.</p>
      <p>(c) MyToDoo may, in its discretion, require Taskers to provide evidence of insurance before accepting or performing certain categories of Tasks. Failure to provide evidence may result in suspension or cancellation of the Task or account.</p>
      <h3>8.3 Licences and Authorisations</h3>
      <p>(a) Taskers must hold and maintain all licences, permits, authorisations, or qualifications required to lawfully perform a Task.</p>
      <p>(b) Posters must not engage a Tasker for regulated work unless satisfied that the Tasker holds the necessary authorisations.</p>
      <p>(c) MyToDoo may, but is not obliged to, request evidence of licences or permits. Responsibility for compliance remains with Users.</p>
      <h3>8.4 Risk Assumed by Users</h3>
      <p>(a) Users acknowledge that participation in Tasks involves inherent risks, including the risk of property damage, personal injury, illness, or financial loss.</p>
      <p>(b) By using the Platform, Users assume all risks associated with Tasks and interactions with other Users, to the maximum extent permitted by law.</p>
      <p>(c) MyToDoo disclaims all liability for any loss, damage, injury, or claim arising out of or connected with a Task, except to the extent liability cannot lawfully be excluded.</p>
      <h3>8.5 Limitation of Liability</h3>
      <p>(a) Except for liability that cannot be excluded under the Australian Consumer Law or other applicable laws, MyToDoo disclaims all liability for any direct, indirect, incidental, consequential, or special loss or damage arising in connection with a Task, User conduct, or insurance failure.</p>
      <p>(b) MyToDoo's total liability to any User will not exceed the greater of: (i) the total fees paid by that User to MyToDoo in the 12 months prior to the incident; or (ii) AUD $500  -  whichever is lower.</p>
    `,
  },
  {
    number: '09',
    title: 'Verification, Badges and Trust',
    content: `
      <h3>9.1 Identity Verification</h3>
      <p>(a) MyToDoo may require Users to verify their identity through third-party providers, including RatifyID (in accordance with its Terms and Conditions) and other verification services.</p>
      <p>(b) Verification may include the submission of government-issued identification, proof of address, or other supporting documentation.</p>
      <p>(c) By using the Platform, you authorise MyToDoo and its verification providers to collect, store and process your information for the purpose of identity verification.</p>
      <h3>9.2 Optional Checks</h3>
      <p>(a) MyToDoo may offer additional verification options, such as police checks or Working With Children Checks (WWC), through third-party providers.</p>
      <p>(b) These checks are not mandatory and are provided at the User's discretion.</p>
      <p>(c) MyToDoo does not warrant the accuracy, completeness or currency of any check carried out by a third-party provider.</p>
      <h3>9.3 Badges</h3>
      <p>(a) MyToDoo may make available digital indicators such as "badges" or icons to reflect that a User has completed a form of verification.</p>
      <p>(b) Badges are based on information provided by Users or third-party providers at a point in time and may not remain accurate or current.</p>
      <p>(c) Badges are issued at MyToDoo's discretion and may be withdrawn at any time without notice.</p>
      <h3>9.4 No Certification of Skills</h3>
      <p>(a) MyToDoo does not certify, endorse, or guarantee any User's skills, qualifications or suitability to perform a Task.</p>
      <p>(b) Posters are responsible for conducting their own due diligence and assessment before engaging a Tasker.</p>
      <h3>9.5 User Responsibility</h3>
      <p>(a) Each User remains responsible for ensuring the information they provide during verification is true, accurate and up to date.</p>
      <p>(b) Misuse of verification tools, including providing false or misleading information, is a breach of this Agreement and may result in suspension or termination of your account.</p>
    `,
  },
  {
    number: '10',
    title: 'User Obligations and Conduct',
    content: `
      <h3>10.1 General Obligations</h3>
      <p>As a User of the Platform, you agree to:</p>
      <ul>
        <li>comply with this Agreement, all Policies, and applicable laws and regulations;</li>
        <li>use the Platform honestly, fairly and in good faith;</li>
        <li>provide accurate, current and complete information at all times; and</li>
        <li>cooperate with other Users and act with respect and integrity when engaging through the Platform.</li>
      </ul>
      <h3>10.2 Community Guidelines</h3>
      <p>You must comply with MyToDoo's Community Guidelines, as updated from time to time. Failure to comply may result in suspension or termination of your account.</p>
      <h3>10.3 Accuracy of Information</h3>
      <p>(a) Posters must ensure Posted Tasks are accurate, lawful and contain sufficient detail to allow Taskers to make informed Offers.</p>
      <p>(b) Taskers must ensure that all statements regarding their skills, licences and availability are true and not misleading.</p>
      <h3>10.4 Prohibited Conduct</h3>
      <p>You must not, when using the Platform:</p>
      <ul>
        <li>post or accept any unlawful or unsafe Task;</li>
        <li>provide false, misleading or deceptive information;</li>
        <li>infringe the intellectual property or privacy rights of others;</li>
        <li>harass, abuse, threaten or defame any person;</li>
        <li>upload or transmit harmful code, viruses, worms, trojans or similar;</li>
        <li>engage in fraudulent activity, including creating fake accounts or misrepresenting your identity;</li>
        <li>attempt to solicit or negotiate payment outside the Platform; or</li>
        <li>otherwise act in a way that is detrimental to the Platform or its Users.</li>
      </ul>
      <h3>10.5 Control of Accounts</h3>
      <p>(a) You are responsible for all activity under your account, whether authorised by you or not.</p>
      <p>(b) You must not share your account with any other person or permit unauthorised access.</p>
      <h3>10.6 Consequences of Breach</h3>
      <p>If MyToDoo determines that you have breached this Agreement or engaged in prohibited conduct, it may:</p>
      <ul>
        <li>remove or edit any content you have posted;</li>
        <li>cancel any active Task Contracts;</li>
        <li>suspend or terminate your account; and/or</li>
        <li>take any other action it considers necessary to protect the integrity of the Platform.</li>
      </ul>
    `,
  },
  {
    number: '11',
    title: 'Dispute Resolution and Cancellations',
    content: `
      <h3>11.1 Platform's Limited Role in Disputes</h3>
      <p>(a) MyToDoo is not a party to any Task Contract formed between Users. The rights and obligations arising under a Task Contract are solely between the relevant Poster and Tasker.</p>
      <p>(b) MyToDoo has no obligation to monitor, mediate, arbitrate, or resolve disputes between Users. To the maximum extent permitted by law, MyToDoo disclaims all liability for disputes, claims, or losses arising out of or in connection with a Task Contract, except as expressly required by the Australian Consumer Law.</p>
      <p>(c) At its discretion, MyToDoo may provide limited assistance to facilitate communication between Users and to encourage resolution. Any involvement by MyToDoo in a dispute is informal, advisory only, and not legally binding on any party.</p>
      <p>(d) Where MyToDoo provides such assistance, Users must cooperate in good faith, provide timely responses, and supply any evidence or information reasonably requested.</p>
      <p>(e) Any decision or determination made by MyToDoo in the course of a dispute review is final for the purposes of the Platform but does not prevent either party from seeking further remedies in accordance with clause 11.4 (External Escalation).</p>
      <p>(f) MyToDoo reserves the right to suspend or terminate a User's account where a dispute indicates serious breach of this Agreement, misconduct, fraud, or unlawful activity.</p>
      <h3>11.2 Raising Concerns</h3>
      <p>(a) If you have a concern or dispute in relation to a Task, you should first attempt to resolve it directly with the other User.</p>
      <p>(b) If the matter cannot be resolved, you may raise it with MyToDoo through the contact form or support channels on the Platform.</p>
      <h3>11.3 Platform Review</h3>
      <p>(a) If a dispute is raised with MyToDoo, we may request information from both parties and review the circumstances.</p>
      <p>(b) MyToDoo may, acting reasonably, make a determination about whether to release or return funds held in escrow.</p>
      <p>(c) MyToDoo's determination is not binding, and either party may pursue further remedies outside the Platform.</p>
      <h3>11.4 External Escalation</h3>
      <p>(a) If a dispute remains unresolved after the internal process, Users may escalate the matter to the relevant consumer protection authority, small claims tribunal, or court of competent jurisdiction.</p>
      <p>(b) Users agree that escalation may only occur once they have followed and completed MyToDoo's internal dispute resolution process.</p>
      <p>(c) Each User is responsible for their own costs of pursuing external remedies, unless otherwise determined by the external body.</p>
      <p>(d) Nothing in this clause limits a User's rights under the Australian Consumer Law to seek remedies in the appropriate forum.</p>
      <h3>11.5 Cancellations</h3>
      <p>(a) A Poster may cancel a Task at any time before commencement, subject to forfeiting the Connection Fee.</p>
      <p>(b) A Tasker may cancel a Task before commencement, subject to payment of a cancellation fee in accordance with clause 7.3.</p>
      <p>(c) MyToDoo may cancel a Task Contract if it reasonably believes there has been a breach of this Agreement, unlawful conduct, or risk to health or safety.</p>
      <h3>11.6 Effect of Cancellation</h3>
      <p>(a) Where a Task Contract is cancelled, the Agreed Price (less applicable fees) will be returned to the Poster as MyToDoo Credits, unless otherwise required under the Australian Consumer Law.</p>
      <p>(b) Cancellation does not affect any rights, obligations or liabilities that arose before the cancellation.</p>
    `,
  },
  {
    number: '12',
    title: 'Privacy and Data Protection',
    content: `
      <h3>12.1 Privacy Policy</h3>
      <p>(a) MyToDoo respects your privacy and is committed to handling personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
      <p>(b) Our Privacy Policy, available on the Platform, explains how we collect, use, store and disclose personal information. By using the Platform, you agree to the terms of our Privacy Policy.</p>
    `,
  },
  {
    number: '13',
    title: 'Termination and Suspension',
    content: `
      <h3>13.1 Termination by User</h3>
      <p>You may terminate your MyToDoo account at any time by following the account closure process available on the Platform. Termination of your account does not affect any existing Task Contracts or obligations that arose before the date of termination.</p>
      <h3>13.2 Suspension or Termination by MyToDoo</h3>
      <p>MyToDoo may suspend, restrict or terminate your account at any time, with or without notice, if it reasonably determines that you have:</p>
      <ul>
        <li>breached this Agreement or any Policy;</li>
        <li>engaged in unlawful, fraudulent or harmful conduct;</li>
        <li>provided false, misleading or inaccurate information;</li>
        <li>caused, or are likely to cause, harm to another User or to MyToDoo; or</li>
        <li>repeatedly cancelled or failed to complete Tasks.</li>
      </ul>
      <h3>13.3 Effect of Termination</h3>
      <p>(a) Upon termination, any Posted Tasks that have not been accepted will be removed from the Platform.</p>
      <p>(b) Any Agreed Price held in escrow at the time of termination will be dealt with in accordance with clause 7 (Refunds, Cancellations and Credits).</p>
      <p>(c) Any outstanding fees or charges owed to MyToDoo remain payable.</p>
      <h3>13.4 Survival of Obligations</h3>
      <p>The following clauses survive termination of this Agreement: clause 6 (Fees and Charges); clause 7 (Refunds, Cancellations and Credits); clause 8 (Insurance and Risk Allocation); clause 10 (User Obligations and Conduct); clause 12 (Privacy and Data Protection); clause 15 (Liability and Indemnity); and any other clause that by its nature should continue to apply.</p>
      <h3>13.5 Re-Registration</h3>
      <p>If your account is terminated or suspended by MyToDoo, you must not create another account without our prior written consent.</p>
    `,
  },
  {
    number: '14',
    title: 'Intellectual Property',
    content: `
      <h3>14.1 Ownership of Platform IP</h3>
      <p>(a) All intellectual property rights in the Platform, including its design, layout, software, databases, source code, features, functionality, text, graphics, images, trade marks, trade names, logos and any other materials ("Platform Content") are owned by or licensed to MyToDoo.</p>
      <p>(b) Except as expressly provided in this Agreement, nothing grants you any right, title or interest in the Platform Content.</p>
      <h3>14.2 Limited User Licence</h3>
      <p>(a) MyToDoo grants you a limited, non-exclusive, revocable, non-transferable licence to access and use the Platform solely for the purpose of posting, offering, or performing Tasks in accordance with this Agreement.</p>
      <p>(b) You must not, without prior written consent from MyToDoo: (i) reproduce, adapt, modify, create derivative works from, distribute, sell, publish or otherwise exploit any part of the Platform Content; (ii) attempt to reverse engineer, decompile or disassemble any part of the Platform software; or (iii) use MyToDoo's trade marks, trade names, branding or logos for advertising, marketing or any commercial purpose outside the Platform.</p>
      <h3>14.3 User Content</h3>
      <p>(a) You retain ownership of any content, materials, images, information, reviews or feedback that you upload, post or submit on the Platform ("User Content").</p>
      <p>(b) By providing User Content, you grant MyToDoo a worldwide, royalty-free, irrevocable, transferable and sub-licensable licence to use, reproduce, modify, adapt, publish, display and distribute such content for the purpose of operating, marketing, and improving the Platform.</p>
      <p>(c) You represent and warrant that: (i) you own or otherwise have the right to use the User Content you provide; (ii) your User Content does not infringe or violate any third-party intellectual property, confidentiality or privacy rights; and (iii) your User Content is lawful, accurate and not misleading.</p>
      <h3>14.4 Third-Party Content</h3>
      <p>(a) The Platform may include content or links provided by third parties. MyToDoo does not claim ownership of such content and is not responsible for its accuracy or legality.</p>
      <p>(b) Use of third-party content is subject to the terms and conditions of the relevant third-party provider.</p>
      <h3>14.5 Feedback and Suggestions</h3>
      <p>(a) If you provide MyToDoo with ideas, comments, or suggestions regarding the Platform ("Feedback"), you acknowledge that such Feedback is not confidential and you grant MyToDoo a perpetual, irrevocable, worldwide, royalty-free licence to use and exploit the Feedback without restriction.</p>
      <p>(b) MyToDoo has no obligation to implement or compensate you for Feedback.</p>
      <h3>14.6 Infringement and Remedies</h3>
      <p>(a) MyToDoo respects the intellectual property rights of others and expects Users to do the same.</p>
      <p>(b) If you believe that any content on the Platform infringes your intellectual property rights, you must notify MyToDoo in writing with sufficient detail to enable us to investigate the claim.</p>
      <p>(c) MyToDoo may remove or disable access to any allegedly infringing material and may suspend or terminate the accounts of repeat infringers.</p>
      <p>(d) Users agree to indemnify and hold harmless MyToDoo for any claims, losses or damages arising from User Content that infringes third-party rights.</p>
    `,
  },
  {
    number: '15',
    title: 'Liability and Indemnity',
    content: `
      <h3>15.1 No Responsibility for User Conduct</h3>
      <p>(a) MyToDoo provides the Platform as a marketplace only and does not control, supervise or direct the actions of Users.</p>
      <p>(b) MyToDoo is not responsible for, and makes no warranties or representations about: (i) the accuracy, completeness or reliability of information provided by Users; (ii) the ability, skill, licences or qualifications of Taskers; (iii) the quality, safety, legality or suitability of any Task; or (iv) whether a Task will be performed in a timely or satisfactory manner.</p>
      <h3>15.2 Platform Availability</h3>
      <p>MyToDoo does not guarantee that the Platform will be available, uninterrupted, secure or error-free at all times. Temporary interruptions may occur for maintenance, upgrades, system failures or reasons beyond our control.</p>
      <h3>15.3 Exclusion of Liability</h3>
      <p>(a) To the fullest extent permitted by law, MyToDoo excludes all liability for any direct, indirect, incidental, special or consequential loss, damage, costs, expenses or claims arising out of or in connection with: (i) your use of, or inability to use, the Platform; (ii) any Task Contract or interaction between Users; (iii) unauthorised access to or alteration of your transmissions or data; or (iv) any statements, conduct or content of any third party on the Platform.</p>
      <p>(b) This exclusion applies even if MyToDoo has been advised of the possibility of such loss or damage.</p>
      <h3>15.4 Non-Excludable Guarantees (ACL)</h3>
      <p>(a) Nothing in this Agreement excludes, restricts or modifies any consumer guarantee, right or remedy under the Australian Consumer Law or any other law that cannot be lawfully excluded.</p>
      <p>(b) To the extent that MyToDoo's liability for breach of such guarantees can be limited, our liability is limited (at our option) to: (i) the resupply of the services; or (ii) the payment of the cost of having the services supplied again.</p>
      <h3>15.5 Indemnity</h3>
      <p>You agree to indemnify, defend and hold harmless MyToDoo, its directors, officers, employees and agents from and against any claims, actions, demands, losses, liabilities, damages, costs or expenses (including legal fees on a full indemnity basis) arising out of or in connection with: (a) your use of the Platform; (b) any Task you post, accept or perform; (c) any breach of this Agreement or a Policy by you; (d) any User Content you provide; or (e) your infringement of the rights of any third party.</p>
      <h3>15.6 Cap on Liability</h3>
      <p>Except for liability that cannot be limited under clause 15.4, MyToDoo's total aggregate liability to any User in connection with this Agreement is limited to the greater of: (a) the total fees paid by that User to MyToDoo in the 12 months preceding the incident giving rise to the claim; or (b) AUD $50.</p>
      <h3>15.7 Assumption of Risk</h3>
      <p>By using the Platform, you acknowledge and agree that: (a) you assume all risks associated with dealing with other Users; (b) MyToDoo is not responsible for resolving disputes between Users beyond what is set out in clause 11; and (c) you are solely responsible for ensuring that any Task you post or accept is lawful, safe and appropriate.</p>
    `,
  },
  {
    number: '16',
    title: 'Amendments to Terms',
    content: `
      <h3>16.1 Right to Amend</h3>
      <p>(a) MyToDoo may amend, update or replace this Agreement or any Policy at any time to reflect: (i) changes in law, regulation, or government policy; (ii) changes in how the Platform operates, including new features or services; (iii) changes in technology, security practices, or industry standards; or (iv) business or operational needs.</p>
      <p>(b) Any amended version of this Agreement or a Policy will supersede the previous version.</p>
      <h3>16.2 Notification of Changes</h3>
      <p>(a) MyToDoo will provide Users with reasonable notice of material amendments by email, Platform notification, or other electronic means.</p>
      <p>(b) For minor or administrative amendments, MyToDoo may publish the updated version on the Platform without additional notice.</p>
      <h3>16.3 User Review</h3>
      <p>(a) It is your responsibility to review the current version of this Agreement and Policies available on the Platform.</p>
      <p>(b) The most recent version will be identified by the "Last Updated" date at the top of the document.</p>
      <h3>16.4 Acceptance of Amendments</h3>
      <p>(a) By continuing to access or use the Platform after an amendment takes effect, you will be deemed to have accepted the amended terms.</p>
      <p>(b) If you do not agree to an amendment, you must stop using the Platform and may terminate your account under clause 13.</p>
      <h3>16.5 Effective Date</h3>
      <p>Amendments take effect on the date specified in the notice provided to Users, or, if no date is specified, on the date the amended Agreement or Policy is published on the Platform.</p>
      <h3>16.6 Record of Amendments</h3>
      <p>MyToDoo may, at its discretion, maintain an archive of previous versions of this Agreement and Policies for reference.</p>
    `,
  },
  {
    number: '17',
    title: 'Notices',
    content: `
      <h3>17.1 Methods of Notice</h3>
      <p>Any notice, demand or other communication required or permitted to be given under this Agreement must be in writing and may be delivered by: (a) email; (b) electronic message or notification through the Platform; or (c) prepaid ordinary post.</p>
      <h3>17.2 Notices to Users</h3>
      <p>(a) Notices from MyToDoo to Users will be sent to the email address registered on the User's account, or delivered via the Platform.</p>
      <p>(b) It is your responsibility to ensure that your contact details are current and accurate.</p>
      <h3>17.3 Notices to MyToDoo</h3>
      <p>Notices to MyToDoo must be sent to:</p>
      <ul>
        <li>Email: [insert support email address]</li>
        <li>Post: [insert registered office address]</li>
      </ul>
      <h3>17.4 Time of Receipt</h3>
      <p>Unless proven otherwise, a notice will be taken to have been received: (a) if sent by email or Platform notification - at the time of transmission; (b) if delivered by hand - at the time of delivery; and (c) if sent by prepaid ordinary post - three (3) business days after posting within Australia, or seven (7) business days after posting internationally.</p>
      <h3>17.5 Electronic Communications</h3>
      <p>You consent to receive communications from MyToDoo electronically, and you agree that all agreements, notices and other communications provided electronically satisfy any legal requirement that such communications be in writing.</p>
    `,
  },
  {
    number: '18',
    title: 'General Provisions',
    content: `
      <h3>18.1 Relationship of Parties</h3>
      <p>Nothing in this Agreement creates any partnership, joint venture, employment, agency or fiduciary relationship between MyToDoo and any User.</p>
      <h3>18.2 Order of Precedence</h3>
      <p>(a) This Agreement and the Policies govern your use of the Platform. (b) As between a Poster and a Tasker, any Task-specific terms agreed through the Platform apply to that Task to the extent they do not conflict with this Agreement or the Policies. (c) In relation to payment processing, the Stripe Services Agreement prevails over any inconsistent term in this Agreement.</p>
      <h3>18.3 Force Majeure</h3>
      <p>MyToDoo is not liable for delay or failure to perform any obligation where the delay or failure is caused by an event beyond its reasonable control, including act of God, severe weather, natural disaster, epidemic or pandemic, labour disputes, utility or telecommunications outages, failure of hosting or cloud providers, acts of government, war, civil unrest, or malicious attacks (a Force Majeure Event).</p>
      <h3>18.4 Severability</h3>
      <p>If any provision of this Agreement is held to be invalid, illegal or unenforceable, that provision is severed and the remaining provisions continue in full force.</p>
      <h3>18.5 No Waiver</h3>
      <p>A failure or delay by MyToDoo to exercise a right or remedy under this Agreement does not operate as a waiver. A waiver must be in writing and is effective only for the specific instance and purpose given.</p>
      <h3>18.6 Assignment and Novation</h3>
      <p>(a) You must not assign, transfer or novate your rights or obligations under this Agreement without MyToDoo's prior written consent. (b) MyToDoo may assign, transfer or novate its rights or obligations to an affiliate or a successor in connection with a restructure, merger, sale or similar event by giving notice under clause 17.</p>
      <h3>18.7 Entire Agreement</h3>
      <p>This Agreement, together with the Policies and any notices given under it, constitutes the entire agreement between you and MyToDoo regarding the Platform and supersedes all prior or contemporaneous understandings relating to its subject matter.</p>
      <h3>18.8 Further Assurances</h3>
      <p>You must do all things reasonably required (including executing documents) to give full effect to this Agreement and the transactions it contemplates.</p>
      <h3>18.9 Set-off</h3>
      <p>MyToDoo may set off any amount you owe to MyToDoo against any amount MyToDoo owes to you, including against amounts otherwise due to be released from escrow.</p>
      <h3>18.10 Costs</h3>
      <p>Each party bears its own costs in connection with the negotiation, preparation and execution of this Agreement.</p>
      <h3>18.11 Electronic Acceptance</h3>
      <p>You agree that click-wrap acceptance, tick-box acknowledgement, and Platform notifications constitute written agreements and notices for all legal purposes.</p>
      <h3>18.12 Governing Law and Jurisdiction</h3>
      <p>(a) This Agreement is governed by the laws of the Australian Capital Territory, Australia. You and MyToDoo submit to the exclusive jurisdiction of the courts of the Australian Capital Territory.</p>
      <p>(b) In regards to statutory laws and consumer laws, the users have the right to be protected under the laws where the Task is performed in accordance with the laws of such jurisdiction.</p>
      <h3>18.13 Interpretation</h3>
      <p>Unless the context requires otherwise: (a) headings are for convenience and do not affect interpretation; (b) the singular includes the plural and vice versa; (c) "including", "for example" and similar expressions are not words of limitation; (d) references to currency are to AUD; (e) references to "Business Day" mean a day other than a Saturday, Sunday or public holiday in the Australian Capital Territory; and (f) references to laws include those laws as amended, re-enacted or replaced.</p>
      <h3>18.14 Survival</h3>
      <p>Clauses which by their nature are intended to survive termination (including clauses 6, 7, 8, 10, 12, 15, 16, 17 and this clause 18) continue in force after termination.</p>
    `,
  },
  {
    number: '19',
    title: 'Definitions',
    content: `
      <p><strong>"Agreed Price"</strong> means the total price agreed between a Poster and a Tasker for a Task, paid by the Poster into the Payment Account at the time of acceptance.</p>
      <p><strong>"Business Day"</strong> means a day on which banks are generally open for business in the Australian Capital Territory, excluding Saturdays, Sundays and public holidays.</p>
      <p><strong>"Connection Fee"</strong> means the fee payable by a Poster when accepting a Tasker's Offer, as described in clause 6.</p>
      <p><strong>"Credits" or "MyToDoo Credits"</strong> means the account credit issued to a User in accordance with clause 7.</p>
      <p><strong>"Force Majeure Event"</strong> has the meaning given in clause 18.3.</p>
      <p><strong>"Offer"</strong> means an offer by a Tasker to perform a Task in response to a Posted Task.</p>
      <p><strong>"Payment Account"</strong> means the escrow account operated by Stripe (or any replacement payment provider) for the purpose of holding payments made by Posters until release to Taskers.</p>
      <p><strong>"Platform"</strong> means the MyToDoo website, mobile application and related services operated by MyToDoo Pty Ltd.</p>
      <p><strong>"Policies"</strong> means the Privacy Policy, Community Guidelines and any other rules, standards or policies published on the Platform from time to time.</p>
      <p><strong>"Poster"</strong> means a User who posts a Task on the Platform.</p>
      <p><strong>"Posted Task"</strong> means a request for services published by a Poster on the Platform.</p>
      <p><strong>"Task"</strong> means a service requested by a Poster and accepted by a Tasker through the Platform.</p>
      <p><strong>"Task Contract"</strong> means the contract formed directly between a Poster and a Tasker when a Poster accepts a Tasker's Offer, incorporating the terms of this Agreement and any additional terms agreed between them through the Platform.</p>
      <p><strong>"Tasker"</strong> means a User who offers and performs services for Posters through the Platform.</p>
      <p><strong>"Tasker Funds"</strong> means the Agreed Price less the Tasker Service Fee, released to the Tasker upon completion of the Task.</p>
      <p><strong>"Tasker Service Fee"</strong> means the fee deducted by MyToDoo from the Agreed Price in accordance with clause 6.</p>
      <p><strong>"User"</strong> means any individual or business who registers for, accesses or uses the Platform.</p>
    `,
  },
  {
    number: '20',
    title: 'Community Guidelines and Closing',
    content: `
      <h3>20.1 Community Guidelines</h3>
      <p>(a) The Community Guidelines form part of this Agreement and are available on the Platform.</p>
      <p>(b) The Guidelines set out expectations for respectful behaviour, safe task practices, prohibited content, and fair dealings between Users.</p>
      <p>(c) Failure to comply with the Community Guidelines may result in suspension or termination of your account.</p>
      <h3>20.2 Entire Agreement</h3>
      <p>This Agreement, together with the Policies and Community Guidelines, constitutes the entire agreement between you and MyToDoo in relation to the Platform.</p>
      <h3>20.3 Acknowledgement</h3>
      <p>By creating an account, posting a Task, making or accepting an Offer, or otherwise using the Platform, you acknowledge that you:</p>
      <ul>
        <li>have read and understood this Agreement;</li>
        <li>agree to be bound by its terms; and</li>
        <li>consent to receiving notices and communications in electronic form in accordance with clause 17.</li>
      </ul>
    `,
  },
];

/* ---------------------------------------------------------
   Component
   --------------------------------------------------------- */
const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* -- Header -- */}
      <LegalPageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully. By using MyToDoo you agree to be bound by this Agreement."
        badge="Last Updated: February 2026"
      />

      <div className="px-4 py-5 space-y-3 pb-10">

        {/* -- Info banner -- */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3 flex gap-3">
          <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">info</span>
          <p className="text-xs text-blue-800 leading-relaxed">
            This document governs your access to and use of the MyToDoo Platform. Tap each section to expand the full details.
          </p>
        </div>

        {/* -- Sections Accordion -- */}
        {tcSections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-4 text-left active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-blue-50 text-primary text-[11px] font-bold flex items-center justify-center leading-none">
                  {section.number}
                </span>
                <span className="text-sm font-semibold text-gray-800 pr-1 leading-snug">{section.title}</span>
              </div>
              <span
                className={`material-symbols-outlined text-gray-400 flex-shrink-0 text-xl transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
              >
                expand_more
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-5 pt-2 border-t border-gray-50 accordion-content">
                <div
                  className="legal-content"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            )}
          </div>
        ))}

        {/* -- Footer acknowledgement -- */}
        <div className="bg-slate-50 rounded-2xl border border-slate-100 px-4 py-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 text-base">verified</span>
            <p className="text-xs font-semibold text-slate-700">Acknowledgement</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            By creating an account or using the Platform, you confirm that you have read, understood and agree to be bound by these Terms and Conditions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
