const COURSE_DATA = {
  "title": "Goods & Services Tax (GST) Complete Course Handbook",
  "subtitle": "Aasan Hinglish Bhasha Me Pura GST Course & Practical Guide (Modules 1 - 4)",
  "institution": "G-TEC Nergy Vidya Certification Program",
  "modules": [
    {
      "num": 1,
      "title": "Module 1: Introduction to GST & its Applications",
      "chapters": [
        "ch1",
        "ch2"
      ]
    },
    {
      "num": 2,
      "title": "Module 2: Registration under GST",
      "chapters": [
        "ch3"
      ]
    },
    {
      "num": 3,
      "title": "Module 3: Invoices under GST & E-Way Bill",
      "chapters": [
        "ch4",
        "ch5"
      ]
    },
    {
      "num": 4,
      "title": "Module 4: Filings Under GST & Tax Payment",
      "chapters": [
        "ch6",
        "ch7",
        "ch8",
        "ch9",
        "ch10"
      ]
    }
  ],
  "chapters": [
    {
      "id": "ch1",
      "num": 1,
      "modNum": 1,
      "modTitle": "Module 1: Introduction to GST and its Applications",
      "badge": "Module 1",
      "icon": "fa-landmark",
      "title": "Chapter 1: Introduction of GST in India (GST Ka Parichay & Itihas)",
      "summary": "GST kya hai, pehle ke tax system me kya khamiyan thi, cascading effect kaise khatam hua, aur India ka Dual GST Model kaise kaam karta hai.",
      "pageRange": "PDF Pages 4 - 13 • 15 Mins Read",
      "visual": "visuals/cascading_tax_effect.svg",
      "visualCaption": "Infographic: Pre-GST vs Modern GST - Cascading Effect (Tax Par Tax) Ka Antar",
      "content": "\n### 1. GST Kya Hai? (What is GST?)\nGST ka poora naam **Goods and Services Tax** hai. Yeh ek **Comprehensive, Multi-Stage, Destination-Based Indirect Tax** hai jo pure desh me goods aur services ki supply par lagaya jata hai.\n\n> **💡 Ahem Point:** GST India me **1st July 2017** ko aadhi raat (Midnight Parliament Session) se laagu kiya gaya tha. Isko laane ke liye Indian Constitution me **101st Amendment Act, 2016** pass kiya gaya tha. Iska mukhya naara tha: *\"One Nation, One Tax, One Market\"*.\n\n---\n\n### 2. Pre-GST System Me Kya Kamiya Thi? (Why GST Was Introduced)\nGST aane se pehle India ka indirect tax structure bohot uljha hua aur bikhra hua tha:\n- **Kayi Tarah Ke Taxes:** Central Excise Duty (manufacturing par), State VAT (sales par), Service Tax (services par), CST (Central Sales Tax), Octroi, Entry Tax, Luxury Tax, Entertainment Tax wagairah.\n- **Cascading Effect (Tax Par Tax):** Pehle ek tax ke upar doosra tax lagta tha. For example, Central Excise Duty lagne ke baad us total amount par State VAT lagta tha. Isse saman faltu me mehenga ho jata tha.\n- **No Cross-Credit:** Central taxes (Excise/Service tax) ka credit State VAT ke against nahi milta tha, jisse business costing badh jati thi.\n- **Check-posts Par Lambi Lines:** Har state ke border par toll aur entry tax check-posts hote the jahan trucks ghanto khade rehte the.\n\n---\n\n### 3. Cascading Effect Khatam Karne Ka Example (Tax On Tax Elimination)\n\nNeeche diye gaye table me dekhein ki GST aane se consumer ko seedha kitna fayda hua:\n\n| Parameter | Purana System (Pre-GST) | Naya GST System (18%) |\n| :--- | :--- | :--- |\n| **Manufacturer Ki Cost** | ₹ 1,000 | ₹ 1,000 |\n| **Tax Rate** | Excise @ 12.5% = ₹ 125 | GST @ 18% = ₹ 180 |\n| **Wholesaler Ko Bika** | ₹ 1,125 | ₹ 1,180 (Govt ko mila ₹180) |\n| **Wholesaler Ka Profit Margin** | ₹ 200 (Total = ₹ 1,325) | ₹ 200 (Base Value = ₹ 1,200) |\n| **State Tax Lagaya** | VAT @ 14.5% on ₹ 1,325 = ₹ 192.12 | GST @ 18% on ₹ 1,200 = ₹ 216 |\n| **Input Tax Credit (ITC)** | ❌ No credit for Excise (₹ 125 wasted) | ✔ ₹ 180 ITC mil gaya (Pay only ₹ 36) |\n| **Final Consumer Price** | **₹ 1,517.12** | **₹ 1,416.00** |\n\n> **💰 Result:** Naye GST system se seedha **₹ 101.12 ki bachat** hui kyunki tax ke upar tax nahi laga!\n\n---\n\n### 4. India Ka Dual GST Model (Central + State Partnership)\nIndia ek federal country hai jahan Center aur States dono ke paas revenue collection ke adhikar hain. Isiliye India ne **Dual GST Model** (Canada aur Brazil ki tarah) apnaya:\n\n1. **CGST (Central GST):** Intra-state sale (same state ke andar) par Center collect karta hai.\n2. **SGST (State GST) / UTGST:** Intra-state sale par State government ya Union Territory collect karti hai.\n3. **IGST (Integrated GST):** Inter-state sale (ek state se doosre state, ya foreign import) par Center collect karta hai, aur baad me Destination State ke sath 50:50 share karta hai.\n\n> **📌 Example (Intra vs Inter-State):**  \n> • Agar Ramesh (Mumbai) ne Suresh (Pune) ko ₹ 1,00,000 ka laptop becha (GST Rate 18%):  \n> &nbsp;&nbsp;➔ **Intra-State:** CGST 9% (₹ 9,000) + SGST 9% (₹ 9,000).  \n> • Agar Ramesh (Mumbai) ne Amit (Delhi) ko ₹ 1,00,000 ka laptop becha:  \n> &nbsp;&nbsp;➔ **Inter-State:** Direct IGST 18% (₹ 18,000).\n\n---\n\n### 5. GST Council (Niti Nirdharak Sanstha)\nGST ke rules, rates, aur exemptions tay karne ke liye **Article 279A** ke tehat GST Council banayi gayi hai:\n- **Chairperson:** Union Finance Minister (Kendra Sarkar).\n- **Members:** Union Minister of State for Finance aur sabhi States/UTs ke Finance Ministers.\n- **Voting Power:** Center ke paas 1/3rd voting power hoti hai, aur sabhi States ke paas milkar 2/3rd voting power hoti hai. Koi bhi decision lene ke liye **75% majority** anivarya hai.\n"
    },
    {
      "id": "ch2",
      "num": 2,
      "modNum": 1,
      "modTitle": "Module 1: Introduction to GST and its Applications",
      "badge": "Module 1",
      "icon": "fa-scale-balanced",
      "title": "Chapter 2: Concepts & Application of GST (Supply aur Levy ke Niyam)",
      "summary": "Taxable event kya hai, Section 7 ke tehat Supply ka funda, Composite vs Mixed supply ka antar, aur tax rates ki category.",
      "pageRange": "PDF Pages 14 - 30 • 18 Mins Read",
      "visual": "visuals/dual_gst_model.svg",
      "visualCaption": "Infographic: Dual GST Structure - Intra-State (CGST + SGST) vs Inter-State (IGST)",
      "content": "\n### 1. Taxable Event Kya Hai? (The Concept of Supply)\nPehle ke tax laws me alag-alag events par tax lagta tha:\n- Manufacturing hua toh ➔ **Excise Duty**\n- Sale hui toh ➔ **VAT / CST**\n- Service di toh ➔ **Service Tax**\n\nGST me in sabhi ko hata kar sirf ek single taxable event banaya gaya: **SUPPLY (Section 7)**. Agar supply hui hai, toh hi GST lagega; agar supply nahi hui, toh GST nahi lag sakta.\n\n---\n\n### 2. Supply Ke Zaroori Elements (Section 7(1)(a))\nKisi transaction ko Supply manne ke liye 4 baatein zaroori hain:\n1. **Goods ya Services honi chahiye** (Money aur Securities GST se bahar hain).\n2. **Kissi form me transfer ho:** Sale, Transfer, Barter, Exchange, License, Rental, Lease ya Disposal.\n3. **Consideration hona chahiye:** Badle me paisa ya koi aur cheez mili ho.\n4. **In the course or furtherance of business:** Business activity se related hona chahiye (Personal purani gadi bechna generally supply nahi hota).\n\n> **⚠️ Exception (Schedule I):** Kuch cases me bina consideration ke bhi supply mana jata hai, jaise:\n> - Business assets par ITC claim kiya tha aur use bina paise ke permanently transfer kar diya.\n> - Related persons ya distinct persons (jaise ek hi company ki alag-alag states me branches) ke beech supply.\n\n---\n\n### 3. Composite Supply vs Mixed Supply (Section 8)\n\n| Feature | Composite Supply (Section 2(30)) | Mixed Supply (Section 2(74)) |\n| :--- | :--- | :--- |\n| **Matlab** | Do ya zyada supplies jo naturally bundled (kudrati taur par judi) hoti hain. | Do ya zyada supplies jo alag-alag bhi bechi ja sakti hain par single price par bundle karke bechi gayi hain. |\n| **Principal Supply** | Isme ek main (principal) supply hoti hai, baki uske sath ancillary (support) hoti hain. | Isme koi single principal supply nahi hoti. Sabhi items independent hote hain. |\n| **Example** | Laptop kharidne par sath me charger, power cord aur bag aana. (Main supply = Laptop). | Diwali Gift Box jisme Dry fruits (12%), Chocolates (18%), aur Cold drinks (28%) ek sath packed hain. |\n| **Tax Rate Ka Niyam** | **Principal supply** ka tax rate pooray bundle par lagega (e.g. Laptop ka 18% rate pure combo par). | Bundle me moujood items me se jo **HIGHEST TAX RATE** hoga, wo pooray packet par lagega (e.g. Cold drink ka 28% pure Diwali box par)! |\n\n---\n\n### 4. Bharat Me GST Ke Tax Slabs\nGST me aam taur par 4 mukhya slabs hain:\n- **0% (Exempted):** Roti, kapda (basic), milk, curd, fresh fruits, vegetables, salt, unbranded grains.\n- **5% (Mass Consumption):** Packed food items, medicines, tea, coffee, edible oil, railway tickets.\n- **12% & 18% (Standard Rates):** Most goods & services, software, mobile phones, capital goods, restaurants, financial services.\n- **28% (Luxury & Demerit Goods):** High-end cars, tobacco, aerated drinks, cement, luxury hotels + Compensation Cess.\n- **Special Rates:** Gold/Silver jewelry par **3%**, Precious stones/diamonds par **0.25%**.\n"
    },
    {
      "id": "ch3",
      "num": 3,
      "modNum": 2,
      "modTitle": "Module 2: Registration under GST",
      "badge": "Module 2",
      "icon": "fa-id-card",
      "title": "Chapter 3: GST Registration (Registration Ke Niyam & Online Procedure)",
      "summary": "Kisko registration lena zaroori hai (Thresholds), Section 24 ke compulsory cases, aur REG-01 se REG-06 tak ka online process.",
      "pageRange": "PDF Pages 4 - 28 • 22 Mins Read",
      "visual": "visuals/gst_registration_flow.svg",
      "visualCaption": "Infographic: GST Online Registration Step-by-Step Pipeline (Part A, TRN, Part B, ARN & Approval)",
      "content": "\n### 1. Kisko GST Registration Lena Anivarya Hai? (Threshold Limits)\nHar vyapari ko shuruat se hi registration lene ki zaroorat nahi hoti. Section 22 ke anusaar saalana turnover limit (Aggregate Turnover) tay ki gayi hai:\n\n| Category | Normal States (Maharashtra, Delhi, Gujarat, etc.) | Special Category States (Manipur, Mizoram, Nagaland, Tripura) |\n| :--- | :--- | :--- |\n| **Only Goods (Saman Bechne Wale)** | **₹ 40 Lakhs** | **₹ 20 Lakhs** |\n| **Services (Doctors, CA, Software, Freelancers)** | **₹ 20 Lakhs** | **₹ 10 Lakhs** |\n| **Mixed (Goods + Services Dono)** | **₹ 20 Lakhs** | **₹ 10 Lakhs** |\n\n---\n\n### 2. Compulsory Registration (Section 24 - Jahan Limit Ka Matlab Nahi!)\nNeeche diye gaye vyapariyo ko pehle din se hi registration lena padega chahe unka turnover ₹ 1 hi kyun na ho:\n1. **Inter-State Suppliers:** Ek state se doosre state me goods supply karne wale (Except services up to 20L).\n2. **Casual Taxable Persons (CTP):** Kisi mela, exhibition ya seasonal event me temporary business karne wale.\n3. **Reverse Charge Mechanism (RCM):** Jo vyakti RCM ke tehat tax pay karne ke liye liable hai.\n4. **E-Commerce Operators:** Amazon, Flipkart wagairah.\n5. **E-Commerce Sellers:** Jo Amazon/Flipkart par goods bechte hain.\n6. **Non-Resident Taxable Persons (NRTP):** Videshi vyakti jo India me business kar rahe hain.\n7. **Input Service Distributor (ISD)** aur TDS/TCS deductors.\n\n---\n\n### 3. Step-by-Step Online Registration Process (gst.gov.in)\n\n#### Step 1: Part-A of Form GST REG-01\n- GST Portal (`www.gst.gov.in`) par jayein ➔ Services ➔ Registration ➔ **New Registration**.\n- Select karein: \"I am a Taxpayer\".\n- Legal Name of Business, PAN Number, Email Address aur Mobile Number dalein.\n- Dono par alag-alag OTP aayega. OTP verify hote hi screen par **TRN (Temporary Reference Number)** generate ho jayega.\n\n#### Step 2: Part-B of Form GST REG-01 (15 Din Ke Andar Bharein)\n- TRN se login karein.\n- **Business Details:** Trade Name, Constitution of Business (Proprietorship, Partnership, Pvt Ltd).\n- **Promoters / Partners Details:** Photo, Aadhaar, PAN, Designation.\n- **Principal Place of Business:** Electricity bill, Rent Agreement, NOC upload karein.\n- **Goods / Services:** Apne top 5 HSN codes ya SAC codes select karein.\n- **Bank Account Details:** Cancelled cheque ya bank statement upload karein.\n\n#### Step 3: Aadhaar Authentication\n- Aadhaar authentication link par click karein.\n- Agar Aadhaar OTP verify ho gaya toh physically inspection nahi hoga.\n- Application submit karein via DSC (Companies/LLP) ya EVC/OTP (Proprietors).\n- Screen par **ARN (Application Reference Number)** generate ho jayega.\n\n---\n\n### 4. 15-Digit GSTIN Number Ko Samajhna\nRegistration pass hone ke baad **Form GST REG-06** certificate milta hai jisme 15-digit ka GSTIN hota hai:\n\n```\nExample GSTIN: 27 AAAAA 0000 A 1 Z 5\n├── 27         ➔ State Code (Maharashtra = 27, Delhi = 07, Gujarat = 24)\n├── AAAAA0000A ➔ Taxpayer ka 10-Digit PAN Number\n├── 1          ➔ Entity Code (State me us PAN par kitne registration hain)\n├── Z          ➔ Default alphabet (By default 'Z' rehta hai)\n└── 5          ➔ Checksum Digit (System generated verification code)\n```\n\n> **📌 Notice:** Business ke board aur signboards par GSTIN number display karna kanoonan anivarya hai (Penalty up to ₹ 10,000 for violation).\n"
    },
    {
      "id": "ch4",
      "num": 4,
      "modNum": 3,
      "modTitle": "Module 3: Invoices under GST",
      "badge": "Module 3",
      "icon": "fa-file-invoice-dollar",
      "title": "Chapter 4: Tax Invoice, Credit & Debit Notes (Bills aur Vouchers)",
      "summary": "Tax Invoice kab aur kaise issue karein, mandatory fields, Bill of Supply, Credit Note aur Debit Note ka accounting funda.",
      "pageRange": "PDF Pages 4 - 12 • 15 Mins Read",
      "visual": "visuals/tax_invoice_layout.svg",
      "visualCaption": "Infographic: Blueprint of a Valid GST Tax Invoice with all 16 Mandatory Particulars",
      "content": "\n### 1. Tax Invoice Kya Hai Aur Yeh Kyun Zaroori Hai?\nTax Invoice sirf ek payment slip nahi hai; yeh ek **Legal Proof** hai jiske dum par buyer government se **Input Tax Credit (ITC)** claim karta hai. Agar invoice me koi galti ho, toh buyer ka lakho rupaye ka credit block ho sakta hai!\n\n---\n\n### 2. Invoice Issue Karne Ki Time Limit (Section 31)\n\n- **Goods Ke Mamle Me:**\n  - *Normal Case:* Saman dispatch/removal hone ke waqt ya usse pehle bill banna chahiye.\n  - *Continuous Supply of Goods:* Statement of account issue hone se pehle ya payment milne par.\n  - *Sale on Approval:* Approval milne par ya dispatch ke 6 mahine ke andar (jo bhi pehle ho).\n\n- **Services Ke Mamle Me:**\n  - Service provide karne ke **30 din** ke andar tax invoice issue hona chahiye.\n  - Banking Companies aur NBFCs ke liye yeh limit **45 din** hoti hai.\n\n---\n\n### 3. Tax Invoice Ke 16 Mandatory Fields (Rule 46)\nEk valid tax invoice me yeh baatein zaroor honi chahiye:\n1. Supplier ka Name, Address aur **GSTIN**.\n2. Consecutive Serial Number (Maximum 16 digits, special characters `-` aur `/` allowed, har Financial Year me unique).\n3. Date of Issue.\n4. Recipient (Buyer) ka Name, Address aur GSTIN (B2B cases me).\n5. HSN Code (Goods ke liye) ya SAC Code (Services ke liye).\n6. Description of Goods/Services, Quantity aur Unit (UQC).\n7. Total Value aur Taxable Value (Discount minus karne ke baad).\n8. Applicable Tax Rates (CGST, SGST, IGST, Cess).\n9. Tax Amount (Breakup me likha hona chahiye).\n10. Place of Supply (POS) aur State Name.\n11. Reverse Charge applicable hai ya nahi (Yes/No).\n12. Supplier ya uske authorized signatory ke Signature ya Digital Signature (DSC).\n\n---\n\n### 4. Bill of Supply (Bina Tax Wala Bill)\nKuch vyapari tax invoice issue nahi kar sakte, unhe **Bill of Supply** issue karna padta hai:\n- **Composition Taxpayers:** Kyunki wo customer se tax charge nahi kar sakte.\n- **Exempted Goods/Services:** Jo saman GST-free hai (jaise taazi sabziya, milk).\n\n---\n\n### 5. Credit Note vs Debit Note (Galti Sudharne Ka Tarika)\n\n| Feature | Credit Note (Section 34(1)) | Debit Note (Section 34(3)) |\n| :--- | :--- | :--- |\n| **Kab Issue Hota Hai?** | Jab supplier ne original invoice me **zyada tax ya value** charge kar di ho, ya customer ne saman **return** kar diya ho. | Jab supplier ne galti se invoice me **kam value ya kam tax rate** laga diya ho, ya customer se additional paisa lena ho. |\n| **Impact on Tax** | Supplier ki tax liability **kam (reduce)** ho jati hai. | Supplier ki tax liability **badh (increase)** jati hai. |\n| **Common Name** | Sales Return Voucher / Discount Note. | Supplementary Invoice / Additional Charge Note. |\n| **Time Limit** | Next FY ke 30th November tak ya Annual Return filing tak (jo bhi pehle ho). | Koi strict outer deadline nahi, par jaise hi galti pakad aaye turant issue karein. |\n"
    },
    {
      "id": "ch5",
      "num": 5,
      "modNum": 3,
      "modTitle": "Module 3: Invoices under GST",
      "badge": "Module 3",
      "icon": "fa-truck-fast",
      "title": "Chapter 5: E-Way Bill System (Transportation Rules & Part A/B)",
      "summary": "E-Way Bill kab banana padta hai (Rule 138), Part A vs Part B, distance validity calculation, aur inspection rules.",
      "pageRange": "PDF Pages 13 - 20 • 15 Mins Read",
      "visual": "visuals/eway_bill_workflow.svg",
      "visualCaption": "Infographic: E-Way Bill Consignment Rules, Part A & Part B Components, and Distance Validity",
      "content": "\n### 1. E-Way Bill Kya Hai? (Electronic Way Bill)\nE-Way Bill ek electronic document hai jo **ewaybillgst.gov.in** portal par generate hota hai. Yeh is baat ka saboot hota hai ki road, rail, air ya ship ke zariye transport ho rahe goods par GST tax compliance follow kiya gaya hai.\n\n> **Threshold Value:** Jab kisi single consignment me goods ki total value (including taxes) **₹ 50,000 se zyada** ho, tab E-Way Bill banana kanoonan compulsory hai. (Kuch states me intra-state limit ₹ 1 Lakh bhi hai).\n\n---\n\n### 2. Part A Aur Part B Ka Khel\nEk E-Way Bill do hisso me banta hai:\n\n#### PART A (Consignment Information):\n- Supplier & Recipient ka GSTIN.\n- Place of Dispatch aur Place of Delivery (PIN codes).\n- Invoice / Challan Number aur Date.\n- Value of Goods aur HSN Code.\n- Reason for Transportation (Supply, Job Work, Sales Return, Export, Exhibition).\n\n#### PART B (Vehicle Details):\n- Gaadi ka number (e.g. MH 04 AB 1234) ya Transporter Document Number (Railway Receipt - RR, Airway Bill, B/L).\n- **⚠️ Golden Rule:** Jab tak Part B update nahi hota, tab tak E-Way Bill complete nahi mana jata! Agar road par checking officer ne pakda aur Part B khali hai, toh bhari penalty lagti hai.\n\n---\n\n### 3. E-Way Bill Ki Validity (Kitne Din Chalega?)\n\nE-Way Bill ki validity consignment ke source se destination tak ke distance (doori) par nirbhar karti hai:\n\n| Cargo Category | Pehla Din (First Day) | Har Agle Din Ke Liye (+1 Day) |\n| :--- | :--- | :--- |\n| **Normal Cargo (Aam Trucks, Tempos)** | Pehle **200 km** tak = 1 Din | Har additional **200 km** ya uske part par +1 Din |\n| **Over Dimensional Cargo (ODC / Badi Heavy Trailers)** | Pehle **20 km** tak = 1 Din | Har additional **20 km** ya uske part par +1 Din |\n\n> **🔢 Calculation Example:**  \n> Agar goods Mumbai se Delhi ja rahe hain aur total distance **1,420 km** hai:  \n> ➔ 1,420 km ÷ 200 km = 7.1  \n> ➔ Round up to next whole number = **8 Din ki validity** milegi.  \n> Validity us din ki aadhi raat (12:00 AM) par expire hoti hai.\n\n---\n\n### 4. E-Way Bill Kab Nahi Banana Padta? (Exemptions)\n1. Consignment value ₹ 50,000 se kam ho.\n2. Non-motorized transport (Cycle rickshaw, haath-gadi, bail-gadi) se delivery.\n3. Exempted goods (Kachha doodh, taazi sabzi, fruits, LPG cylinder, kerosine).\n4. Custom port/airport se Inland Container Depot (ICD) tak customs bond me movement.\n"
    },
    {
      "id": "ch6",
      "num": 6,
      "modNum": 4,
      "modTitle": "Module 4: Filings Under GST",
      "badge": "Module 4",
      "icon": "fa-file-lines",
      "title": "Chapter 6: E-filing of GSTR-1 (Outward Supplies / Sales Return)",
      "summary": "Sales ka return GSTR-1 kaise file karein, Table 4, 5, 7, 9, 12 aur 13 ka poora breakup, aur practical online filing steps.",
      "pageRange": "PDF Pages 4 - 38 • 25 Mins Read",
      "visual": "visuals/gstr1_tables_summary.svg",
      "visualCaption": "Infographic: Complete GSTR-1 Table Mapping - B2B, B2C Large, B2C Small & HSN Breakdown",
      "content": "\n### 1. GSTR-1 Kya Hai? (Sales Ka Master Return)\nGSTR-1 har registered vyapari ka **Sales Return (Outward Supplies)** hota hai. Is return me business apne mahine ya quarter me ki gayi sabhi sales ka hisab government ko deta hai.\n- **Due Date (Monthly Filers):** Agle mahine ki **11th tarikh** (e.g. October ki sale ka return 11 November tak).\n- **Due Date (Quarterly / QRMP Filers):** Quarter khatam hone ke agle mahine ki **13th tarikh** (IFF facility mahine 1 aur 2 me 13th tak).\n\n> **💡 Yaad Rakhein:** GSTR-1 me koi tax ka payment nahi hota! Yeh sirf sales ki reporting hai. Jo data aap GSTR-1 me bharte hain, wahi aapke buyer ke **GSTR-2B** me reflect hota hai jisse wo ITC claim kar pata hai.\n\n---\n\n### 2. GSTR-1 Ki Sabhi Tables Ka Complete Guide\n\n#### 🟦 Table 4: B2B Invoices (Business to Business)\n- Agar aapne kisi registered taxpayer (jiske paas GSTIN hai) ko sale kiya hai, toh wo yahan aayega.\n- Isme **Invoice-by-Invoice** details daalni hoti hain: Buyer ka GSTIN, Invoice Number, Date, Value, POS, Rate aur Tax Amount.\n\n#### 🟨 Table 5: B2C (Large) Invoices\n- Agar buyer **unregistered** hai (end customer jiske paas GST nahi hai), aur:\n  1. Transaction **Inter-State** (doosre state me) ho, AUR\n  2. Invoice value **₹ 2.5 Lakhs se zyada** ho.\n- Isme bhi invoice-wise entry karni hoti hai.\n\n#### 🟩 Table 7: B2C (Others / Small) Invoices\n- Retail dukandaro ki sabse ahem table!\n- Sabhi local sales (unregistered ko same state me) chahe kitni bhi badi value ho.\n- Inter-state sales unregistered ko agar ₹ 2.5 Lakhs se kam ho.\n- Isme single-single bill nahi daalna padta; State-wise aur Rate-wise consolidated total daalna hota hai.\n\n#### 🟪 Table 9B: Credit / Debit Notes (Registered)\n- B2B parties ko issue kiye gaye sabhi credit notes aur debit notes yahan enter hote hain. Isse tax adjust hota hai.\n\n#### 🟥 Table 12: HSN-Wise Summary of Outward Supplies\n- Turnover ₹ 5 Crore tak hai toh **4-Digit HSN**, aur ₹ 5 Crore se zyada hai toh **6-Digit HSN** mandatory hai.\n- Total quantity, taxable value, CGST, SGST, IGST ka total yahan Table 4, 5 aur 7 ke total se match hona anivarya hai.\n\n#### ⬜ Table 13: Documents Issued During the Tax Period\n- Mahine me kitne serial number ke invoices generate hue (From Serial No. to Serial No.), kitne cancel hue, aur kitne net issue hue.\n\n---\n\n### 3. Step-by-Step Portal Filing Procedure\n1. GST Portal par Login karein ➔ **Returns Dashboard** ➔ Year aur Month select karein.\n2. **GSTR-1** tile par click karein (Prepare Online choose karein).\n3. Table 4A me B2B invoices add karein (Add Record par click karke GSTIN dalein, name auto-populat hoga).\n4. Table 7 me local retail sales ki summary dalein.\n5. Table 12 me HSN summary verify karein.\n6. Scroll down karke **Generate Summary** button dabayein (1 minute wait karein).\n7. Summary refresh karke numbers cross-check karein.\n8. **File Return** par click karein aur EVC (OTP) ya DSC se submit karein!\n"
    },
    {
      "id": "ch7",
      "num": 7,
      "modNum": 4,
      "modTitle": "Module 4: Filings Under GST",
      "badge": "Module 4",
      "icon": "fa-arrows-rotate",
      "title": "Chapter 7: E-filing & Reconciliation of GSTR-2A & 2B (Input Tax Credit)",
      "summary": "GSTR-2A aur 2B me kya antar hai, ITC claim karne ke 4 kanooni niyam, aur Section 17(5) ke Blocked Credits ki list.",
      "pageRange": "PDF Pages 39 - 52 • 18 Mins Read",
      "visual": "visuals/gst_returns_cycle.svg",
      "visualCaption": "Infographic: GSTR-1 to GSTR-2B Auto-Drafting & Reconciliation Cycle",
      "content": "\n### 1. GSTR-2A vs GSTR-2B Ka Sabse Bada Antar\nBohot se accountants 2A aur 2B ke beech confuse rehte hain. Aasan bhasha me samjhein:\n\n| Parameter | GSTR-2A (Dynamic Form) | GSTR-2B (Static Benchmark) |\n| :--- | :--- | :--- |\n| **Kaisa Statement Hai?** | Yeh ek **Real-Time Dynamic** view hai jo continuous badalta rehta hai. | Yeh ek **Static (Freeze)** statement hai jo har mahine ki 14th date ko lock ho jata hai. |\n| **Kab Generate Hota Hai?** | Jaise hi supplier apna GSTR-1 save ya file karega, 2A me turant dikhne lagta hai. | 11th tarikh ko suppliers ke GSTR-1 file hone ke baad **14th tarikh ko system generate karta hai**. |\n| **ITC Claim Karne Ka Base** | Pehle 2A use hota tha, par ab government ne ise sirf reference bana diya hai. | **GSTR-3B me ITC lene ka kanooni aadhar sirf aur sirf GSTR-2B hai!** |\n\n---\n\n### 2. ITC (Input Tax Credit) Claim Karne Ki 4 Shartein (Section 16)\nAgar inme se ek bhi shart poori nahi hui, toh department ITC cancel kar dega aur penalty maangega:\n1. **Tax Invoice:** Aapke paas supplier ka original GST Tax Invoice ya Debit Note hona chahiye.\n2. **Goods / Services Received:** Maal ya service actual me aapko physically mil chuki ho.\n3. **Tax Paid to Government:** Supplier ne aapse tax collect karke sarkari khazane me deposit kar diya ho (GSTR-1 file kiya ho).\n4. **Valid Return Filed:** Aapne apna GSTR-3B return time par file kiya ho.\n\n> **⏰ 180 Days Rule:** Agar aapne purchase invoice ki date se **180 din** ke andar supplier ko uska payment (including tax) nahi kiya, toh aapko liya hua ITC government ko interest ke sath wapas lautana padega!\n\n---\n\n### 3. Blocked Credits (Section 17(5) - In Par ITC Kabhi Nahi Milega!)\nYeh wo kharche hain jinke bill par GST laga hone ke bawajood aap credit nahi le sakte:\n- **Motor Vehicles:** 13 seating capacity se kam wali aam business cars (Except agar aap driving school chalate hain ya gadiya bechte/rent karte hain).\n- **Food & Beverages:** Khana-peena, staff canteen, outdoor catering, restaurant bills.\n- **Beauty & Health:** Beauty treatment, cosmetic surgery, health club ya gym membership.\n- **Personal Consumption:** Office ke paise se ghar ke liye saman kharidna.\n- **Stolen / Destroyed Goods:** Maal chori ho gaya, jal gaya ya free gift/sample me baant diya gaya.\n"
    },
    {
      "id": "ch8",
      "num": 8,
      "modNum": 4,
      "modTitle": "Module 4: Filings Under GST",
      "badge": "Module 4",
      "icon": "fa-calculator",
      "title": "Chapter 8: E-filing of GSTR-3B (Summary Return & Tax Payment)",
      "summary": "Monthly summary return GSTR-3B, Table 3.1 liability, Table 4 ITC, aur Section 49 ke anusaar ITC set-off ka golden rule.",
      "pageRange": "PDF Pages 53 - 72 • 22 Mins Read",
      "visual": "visuals/itc_setoff_hierarchy.svg",
      "visualCaption": "Infographic: Rule of Input Tax Credit Set-Off (IGST ➔ CGST ➔ SGST Order of Adjustment)",
      "content": "\n### 1. GSTR-3B Kya Hai? (The Final Payment Return)\nGSTR-3B har mahine ka ek **Self-Assessed Summary Return** hai. Is return me vyapari do baatein declare karta hai:\n1. *Total Output Tax Liability* (Kitna tax banta hai - GSTR-1 se auto-flow hota hai).\n2. *Total Input Tax Credit* (Kitna tax discount/credit mil raha hai - GSTR-2B se auto-flow hota hai).\n3. Bacha hua balance cash ledger se deposit karke tax zero kiya jata hai.\n- **Due Date:** Har agle mahine ki **20th tarikh** (e.g. October ka 20 November tak).\n\n---\n\n### 2. GSTR-3B Ki Mukhya Tables\n\n- **Table 3.1: Details of Outward Supplies & Reverse Charge:**\n  - (a) Outward taxable supplies (Local & Inter-state total sales).\n  - (b) Outward taxable supplies (Zero rated / Exports).\n  - (c) Other outward supplies (Nil rated, Exempted).\n  - (d) Inward supplies liable to reverse charge (RCM).\n\n- **Table 4: Eligible Input Tax Credit (ITC):**\n  - **Table 4(A):** ITC Available (Imports, RCM, All Other ITC - yeh GSTR-2B se auto-aata hai).\n  - **Table 4(B):** ITC Reversed (Rule 42/43 ke tehat exempt supplies ka reversal ya 180-day non-payment reversal).\n  - **Table 4(C): Net ITC Available = 4(A) - 4(B).** (Yeh aapki liability se minus hoga).\n  - **Table 4(D):** Ineligible ITC (Section 17(5) blocked credits).\n\n- **Table 6.1: Payment of Tax (Offset Table):**\n  - Yahan system auto-calculate karta hai ki ITC se kitna tax kata aur kitna cash me dena padega.\n\n---\n\n### 3. Sunehra Kanooni Niyam: ITC Set-Off Hierarchy (Section 49 & 49A/B)\nITC adjust karne ka strict kanooni order hai jisko follow karna mandatory hai:\n\n1. **Rule 1 (IGST Credit First):** Sabse pehle apne **IGST Credit** ko 100% khatam karein.\n   - Pehle use IGST output ke khilaf adjust karein.\n   - Bacha hua IGST credit CGST aur SGST output ke khilaf kisi bhi proportion me use kar sakte hain.\n2. **Rule 2 (CGST Credit):** Jab IGST credit 100% khatam ho jaye, tab CGST credit use karein.\n   - Pehle CGST output ke khilaf.\n   - Bacha toh IGST output ke khilaf.\n   - ❌ **CGST Credit se SGST kabhi pay nahi ho sakta!**\n3. **Rule 3 (SGST Credit):**\n   - Pehle SGST output ke khilaf.\n   - Bacha toh IGST output ke khilaf.\n   - ❌ **SGST Credit se CGST kabhi pay nahi ho sakta!**\n"
    },
    {
      "id": "ch9",
      "num": 9,
      "modNum": 4,
      "modTitle": "Module 4: Filings Under GST",
      "badge": "Module 4",
      "icon": "fa-store",
      "title": "Chapter 9: E-filing of GSTR CMP-08 (Composition Scheme)",
      "summary": "Chhote vyapariyo ke liye Composition Scheme, turnover limit ₹1.5 Cr, sasti tax daren (1%), aur CMP-08 quarterly filing.",
      "pageRange": "PDF Pages 73 - 84 • 15 Mins Read",
      "visual": "visuals/composition_vs_regular.svg",
      "visualCaption": "Infographic: Composition Scheme vs Regular Scheme Comparison Matrix",
      "content": "\n### 1. Composition Scheme Kya Hai? (Section 10)\nChhote vyapariyo (jaise kiraana dukan, chhote halwai, local traders) ko mahine-mahine ke heavy compliance aur accounting se bachane ke liye government ne **Composition Scheme** banayi hai.\n\n- **Turnover Eligibility:** Pichhle financial year me aggregate turnover **₹ 1.5 Crore** tak ho (Special category states jaise North-East ke liye ₹ 75 Lakhs).\n- **Service Providers:** Section 10(2A) ke tehat service providers jinka turnover ₹ 50 Lakhs tak ho, wo bhi composition opt kar sakte hain.\n\n---\n\n### 2. Composition Scheme Ke Saste Tax Rates\n\n| Vyapari Ka Type | Total Tax Rate | CGST | SGST |\n| :--- | :--- | :--- | :--- |\n| **Manufacturers (Utpadak)** | **1%** of Turnover | 0.5% | 0.5% |\n| **Traders (Dukandar / Retailers)** | **1%** of Taxable Turnover | 0.5% | 0.5% |\n| **Restaurants (Bina Alcohol Wale)** | **5%** of Turnover | 2.5% | 2.5% |\n| **Service Providers (Sec 10(2A))** | **6%** of Turnover | 3.0% | 3.0% |\n\n---\n\n### 3. Composition Taxpayer Ke Niyam Aur Pabandiya (Restrictions)\n- ❌ **Customer Se Tax Nahi Le Sakte:** Bill par GST tax alag se nahi jod sakte. Apni jeb se flat 1% ya 5% bharna hota hai.\n- ❌ **Input Tax Credit (ITC) Nahi Milta:** Jo saman kharida hai uspar lage GST ka koi refund ya credit nahi milta.\n- ❌ **Inter-State Sale Mana Hai:** Apne state ke bahar saman nahi bech sakte (Purchases inter-state kar sakte hain).\n- ❌ **Tax Invoice Nahi Issue Kar Sakte:** Inhe **Bill of Supply** dena hota hai jisme upar likha hota hai: *\"Composition Taxable Person, not eligible to collect tax on supplies\"*.\n\n---\n\n### 4. CMP-08 Filing Procedure\nComposition dealers ko mahine-mahine GSTR-1 aur 3B nahi bharna hota!\n- Inhe har quarter (teemahi) me sirf ek chhota form **CMP-08** bharna hota hai.\n- **Due Date:** Quarter khatam hone ke agle mahine ki **18th tarikh** (e.g. Q1 April-June ka return 18 July tak).\n- Saalaana ek baar annual return **GSTR-4** file karna hota hai (by 30th April of next FY).\n"
    },
    {
      "id": "ch10",
      "num": 10,
      "modNum": 4,
      "modTitle": "Module 4: Filings Under GST",
      "badge": "Module 4",
      "icon": "fa-building-columns",
      "title": "Chapter 10: Payment of Tax & Challan Generation (GST Tax Kaise Bharein)",
      "summary": "Portal ke 3 electronic ledgers (Cash, Credit, Liability), Challan PMT-06 generation, CPIN vs CIN, aur online tax payment.",
      "pageRange": "PDF Pages 85 - 97 • 18 Mins Read",
      "visual": "visuals/three_electronic_ledgers.svg",
      "visualCaption": "Infographic: The 3 Electronic Ledgers (Liability, Credit & Cash) and Tax Discharge Flow",
      "content": "\n### 1. GST Portal Ke 3 Electronic Ledgers (Online Khate)\nGST portal par login karte hi dashboard par 3 mukhya ledgers dikhte hain:\n\n1. **Electronic Liability Register (Form GST PMT-01):**\n   - Yeh aapka udhar khata hai. Isme dikhta hai ki aapko sarkaar ko kitna tax, interest, penalty ya late fee dena baki hai.\n2. **Electronic Credit Ledger (Form GST PMT-02):**\n   - Yeh aapka ITC wallet hai. Jo saman aapne kharida tha uspar jo GST aapne pay kiya tha, wo yahan balance banke jama rehta hai.\n   - *Pabandi:* Is credit se aap sirf Output Tax pay kar sakte hain. Late fee ya penalty cash se hi deni padti hai!\n3. **Electronic Cash Ledger (Form GST PMT-05):**\n   - Yeh aapka prepaid bank wallet hai. Jab aap Net Banking, UPI ya NEFT se challan banakar paisa jama karte hain, wo yahan reflect hota hai.\n\n---\n\n### 2. Challan Kaise Banayein? (Form GST PMT-06)\nJab Electronic Credit Ledger (ITC) se saara tax cover nahi hota, toh baaki bacha hua tax jama karne ke liye challan banaya jata hai:\n\n- **Step 1:** GST Portal ➔ Services ➔ Payments ➔ **Create Challan**.\n- **Step 2:** Tax Heads select karein:\n  - **Major Heads:** CGST, SGST, IGST, Cess.\n  - **Minor Heads:** Tax, Interest, Penalty, Fees, Others.\n- **Step 3 (CPIN Generation):** Jaise hi generate par click karenge, **14-Digit CPIN (Common Portal Identification Number)** generate hoga jo **15 din** tak valid rehta hai.\n\n---\n\n### 3. Payment Ke Options\n- **E-Payment (Instant):** Net Banking, Debit/Credit Card, UPI. Paisa turant Electronic Cash Ledger me add ho jata hai.\n- **Over the Counter (OTC):** Bank branch me jakar Cheque/Cash/DD se deposit karna (Limit: Maximum ₹ 10,000 per challan per tax period).\n- **NEFT / RTGS:** Bank mandate download karke kisi bhi bank se RTGS/NEFT karein.\n\n> **💡 CIN (Challan Identification Number):** Jab bank ko payment mil jata hai, toh bank 17-digit ka CIN generate karta hai aur aapka Electronic Cash Ledger update ho jata hai. Iske baad GSTR-3B me jaakar **Offset Liability** button dabate hi aapka tax zero ho jata hai aur return successfully file ho jata hai!\n"
    }
  ]
};
