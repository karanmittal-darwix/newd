import type { AudioSample } from "@/types";

// ── Sentiment stage presets ───────────────────────────────────────────────────

const STAGES_CONFUSED_RESOLVED = [
  { label: "CONFUSED", color: "bg-red-400" },
  { label: "", color: "bg-orange-400" },
  { label: "", color: "bg-yellow-300" },
  { label: "", color: "bg-green-400" },
  { label: "RESOLVED", color: "bg-green-500" },
];

const STAGES_HESITANT_RESOLVED = [
  { label: "HESITANT", color: "bg-red-400" },
  { label: "", color: "bg-orange-400" },
  { label: "", color: "bg-yellow-300" },
  { label: "", color: "bg-green-400" },
  { label: "RESOLVED", color: "bg-green-500" },
];

const STAGES_ANGRY_RESOLVED = [
  { label: "ANGRY", color: "bg-red-500" },
  { label: "", color: "bg-red-400" },
  { label: "", color: "bg-orange-400" },
  { label: "", color: "bg-yellow-300" },
  { label: "RESOLVED", color: "bg-green-500" },
];

const STAGES_DOUBTFUL_RESOLVED = [
  { label: "DOUBTFUL", color: "bg-orange-400" },
  { label: "", color: "bg-yellow-300" },
  { label: "", color: "bg-lime-300" },
  { label: "", color: "bg-green-400" },
  { label: "RESOLVED", color: "bg-green-500" },
];

// ── AUDIO_SAMPLES ─────────────────────────────────────────────────────────────

export const AUDIO_SAMPLES: AudioSample[] = [

  // 1 ── Life Insurance CX ────────────────────────────────────────────────────
  {
    id: 1,
    header: {
      industry: "BFSI",
      product: "Life Insurance",
      useCase: "CX",
      title: "BFSI Life Insurance CX",
      subtitle: "Both proposer and nominee deceased",
      duration: "2:52",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v1.mp3",
    },
    
    sentiment: {
  from: "CONFUSED",
  to: "RESOLVED",
  resolved: true,
  stages: STAGES_CONFUSED_RESOLVED,

  sentimentJourney: [
    {
      label: "Confused",
      start: 1,
      end: 61,
      color: "red"
    },
    {
      label: "Resistant",
      start: 61,
      end: 75,
      color: "orange"
    },
    {
      label: "Converting",
      start: 75,
      end: 117,
      color: "yellow"
    },
    {
      label: "Resolved",
      start: 117,
      end: 172,
      color: "green"
    }
  ]
},

    

    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:01", text: "Hi, this is Ayesha from Edelweiss Life Insurance. How can I help you today?", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Customer", time: "00:06", text: "Hi Ayesha. I purchased a term insurance plan, but the major problem is my proposer and nominee both are demised — I'm unable to claim.", event: "Issue reported" },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:23", text: "I'm sorry for the trouble. Do you mean you cannot access policy documents, or you're concerned about claim eligibility?", tone: "Empathetic" },
      { id: 4, speaker: "customer", name: "Customer", time: "00:30", text: "Both actually. Documents bhi access nahi ho rahe and proposer nominee dono ki death ho chuki hai." },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:41", text: "Ye sunke mujhe afsos hua. If nominee is unavailable, claim can proceed through legal heir process.", tone: "Empathetic" },
      { id: 6, speaker: "customer", name: "Customer", time: "00:48", text: "To jo nominee ka paisa hai wo kisko milega?", event: "Product confusion" },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:51", text: "Normally nominee receives the amount, but if nominee is unavailable then legal heir process applies." },
      { id: 8, speaker: "customer", name: "Customer", time: "01:01", text: "To matlab paisa kisi ko nahi milega?", event: "Objection detected" },
      { id: 9, speaker: "agent", name: "Ayesha", time: "01:05", text: "Aisa nahi hai. Claim still possible through proper process.", tone: "Reassuring" },
      { id: 10, speaker: "customer", name: "Customer", time: "01:09", text: "Solution batao — kya documents chahiye aur process kya hai?" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "01:16", text: "Death certificate, policy details, nominee ID and claim form required.", trigger: "Documents guidance" },
      { id: 12, speaker: "customer", name: "Customer", time: "01:22", text: "Mere paas policy copy bhi nahi hai. Fir claim kaise karu?" },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:31", text: "Policy trace ki ja sakti hai through name, PAN, mobile and identity details." },
      { id: 14, speaker: "customer", name: "Customer", time: "01:39", text: "But unki death ho gayi na?" },
      { id: 15, speaker: "agent", name: "Ayesha", time: "01:41", text: "Even then claim can proceed with death certificate and identification." },
      { id: 16, speaker: "customer", name: "Customer", time: "01:49", text: "Okay, death certificate hai mere paas. Branch jaana padega ya mail kar sakta hu?", event: "Issue resolved" },
      { id: 17, speaker: "agent", name: "Ayesha", time: "01:57", text: "Aap email bhi kar sakte hain ya branch submit bhi." },
      { id: 18, speaker: "customer", name: "Customer", time: "02:00", text: "Details WhatsApp par share kar do.", event: "WhatsApp requested" },
      { id: 19, speaker: "agent", name: "Ayesha", time: "02:04", text: "Zaroor, WhatsApp par details bhej deti hoon.", trigger: "Post-call action" },
      { id: 20, speaker: "customer", name: "Customer", time: "02:08", text: "Original IDs chahiye ya photocopy chalegi?" },
      { id: 21, speaker: "agent", name: "Ayesha", time: "02:11", text: "Photocopy chalegi.", tone: "Neutral" },
      { id: 22, speaker: "customer", name: "Customer", time: "02:25", text: "Haan ji WhatsApp pe share kar do." },
      { id: 23, speaker: "agent", name: "Ayesha", time: "02:32", text: "Please registered number confirm kar dijiye." },
      { id: 24, speaker: "customer", name: "Customer", time: "02:40", text: "8085570361 — corrected." },
      { id: 25, speaker: "agent", name: "Ayesha", time: "02:47", text: "Confirmed. Details WhatsApp par bhej deti hoon.", tone: "Reconfirming" },
      { id: 26, speaker: "customer", name: "Customer", time: "02:49", text: "Thank you so much." },
      { id: 27, speaker: "agent", name: "Ayesha", time: "02:52", text: "Dhanyavaad.", tone: "Courteous" },
    ],
    intelligence: {
      intents: [
        { label: "Claim eligibility", confidence: 96 },
        { label: "Required claim process steps", confidence: 93 },
        { label: "Missing policy document help", confidence: 90 },
        { label: "WhatsApp details request", confidence: 95 },
      ],
      actions: [
        { icon: "whatsapp", text: "Claim details shared via WhatsApp" },
      ],
    },
    summary: {
      text: "Customer's proposer and nominee both deceased; agent explained legal heir claim process, required documents, and policy tracing. Customer confirmed death certificate availability and requested submission info via WhatsApp.",
      outcome: "Claim details shared via WhatsApp",
    },
  },

  // 2 ── Mutual Fund KYC & RM Callback ───────────────────────────────────────
  {
    id: 2,
    header: {
      industry: "BFSI",
      product: "Mutual Funds",
      useCase: "KYC & RM Callback",
      title: "BFSI Mutual Fund KYC & RM Callback",
      subtitle: "Video KYC alternative, RM callback",
      duration: "2:25",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v2.mp3",
    },
    sentiment: {
      from: "CONFUSED",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_CONFUSED_RESOLVED,
      sentimentJourney: [
 {label:"Confused",start:2,end:39,color:"red"},
 {label:"Resistant",start:39,end:52,color:"orange"},
 {label:"Converting",start:52,end:111,color:"yellow"},
 {label:"Resolved",start:111,end:145,color:"green"},
]
    },

    
    
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:02", text: "Hi Raj, this is Ayesha calling from LIC Mutual Funds about your KYC and RM connection.", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Raj", time: "00:07", text: "Hi Ayesha. Dekho main KYC kar raha tha — usme mujhe documents kya kya lagenge?", event: "KYC doubt" },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:14", text: "Ji zaroor, aapko Aadhaar, PAN aur address proof lagega. Aapki income range kitni hai?" },
      { id: 4, speaker: "customer", name: "Raj", time: "00:20", text: "Meri income abhi 50,000 hai. Aur video KYC mandatory hai kya?" },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:30", text: "Nahi, video KYC mandatory nahi hai, wo bas ek option hai. Agar chahein to main RM callback bhi arrange karwa sakti hoon.", tone: "Reassuring" },
      { id: 6, speaker: "customer", name: "Raj", time: "00:39", text: "Haan ji wo karwa do — main keypad phone use kar raha hoon, to video KYC possible nahi hai. Aur ye RM kya hota hai?", event: "RM follow-up required" },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:45", text: "Ji, ek RM aapko investment advice deta hai, portfolio planning aur ongoing support bhi karta hai." },
      { id: 8, speaker: "customer", name: "Raj", time: "00:52", text: "Okay, ek kaam karo aap jo RM unse mera appointment schedule kar do.", event: "Meeting scheduled" },
      { id: 9, speaker: "agent", name: "Ayesha", time: "01:03", text: "Ji bilkul, main aapka RM callback arrange kar rahi hoon. Next steps main WhatsApp ya email par bhej dun.", trigger: "RM callback" },
      { id: 10, speaker: "customer", name: "Raj", time: "01:07", text: "Aur jab main KYC manually kar raha tha to bank details maang raha tha — mere paas cheque nahi hai, kya main passbook upload kar sakta hoon?", event: "Documents pending" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "01:18", text: "Ji, kai cases mein passbook chal jaati hai, lekin final approval RM ya portal requirement par depend karega.", tone: "Reassuring" },
      { id: 12, speaker: "customer", name: "Raj", time: "01:25", text: "Agar maine KYC complete kar diya to confirmation kaise pata chalega?" },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:32", text: "Aapko confirmation SMS ya email se mil jayega. Agar chahein to main RM se follow-up bhi karwa deti hoon.", tone: "Friendly" },
      { id: 14, speaker: "customer", name: "Raj", time: "01:36", text: "Main keypad phone use karta hoon to SMS miss ho jata hai — kya RM mujhe call karke inform kare?" },
      { id: 15, speaker: "agent", name: "Ayesha", time: "01:51", text: "Ji bilkul, main RM ke liye callback request raise kar deti hoon. WhatsApp ya email par bhi details bhej sakti hoon.", tone: "Courteous" },
      { id: 16, speaker: "customer", name: "Raj", time: "01:56", text: "Aur KYC complete hone mein kitna time lagta hai aur approve hone mein?" },
      { id: 17, speaker: "agent", name: "Ayesha", time: "02:03", text: "Aam taur par KYC 24 se 48 hours mein complete ho jata hai aur approval bhi isi duration mein aa jata hai.", tone: "Professional" },
      { id: 18, speaker: "customer", name: "Raj", time: "02:10", text: "Theek hai, details WhatsApp par bhej do. Thank you.", event: "WhatsApp requested" },
      { id: 19, speaker: "agent", name: "Ayesha", time: "02:19", text: "Ji bilkul, WhatsApp par bhej rahi hoon. Aapke next steps wahi aa jayenge.", trigger: "Post-call action" },
    ],
    intelligence: {
      intents: [
        { label: "KYC documents and video query", confidence: 92 },
        { label: "Requested RM callback schedule", confidence: 95 },
        { label: "Bank proof, passbook accepted", confidence: 88 },
        { label: "KYC timeline and confirmation", confidence: 90 },
      ],
      actions: [
        { icon: "whatsapp", text: "KYC information shared via WhatsApp → Raj" },
        { icon: "calendar", text: "RM callback scheduled" },
      ],
    },
    summary: {
      text: "Customer on keypad phone unable to do video KYC. Agent explained KYC document requirements, offered passbook as bank proof alternative, arranged RM callback, and confirmed 24–48hr KYC turnaround.",
      outcome: "KYC info shared via WhatsApp; RM callback scheduled",
    },
  },

  // 3 ── Health Insurance Welcome Call ───────────────────────────────────────
  {
    id: 3,
    header: {
      industry: "BFSI",
      product: "Health Insurance",
      useCase: "Welcome Call",
      title: "BFSI Health Insurance Welcome Call",
      subtitle: "Coverage, waiting period, premium lapse",
      duration: "2:34",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v3.mp3",
    },
    sentiment: {
      from: "CONFUSED",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_CONFUSED_RESOLVED,
      sentimentJourney: [
 {label:"Confused",start:2,end:58,color:"red"},
 {label:"Resistant",start:58,end:67,color:"orange"},
 {label:"Converting",start:67,end:108,color:"yellow"},
 {label:"Resolved",start:108,end:154,color:"green"},
]
    },
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:02", text: "Hi, this is Ayesha from New India Assurance calling to welcome you. How's your day going so far?", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Customer", time: "00:07", text: "My day is going good. I just want to confirm — in this policy what diseases will be covered?", event: "Doubt regarding policy" },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:19", text: "Your policy covers hospitalization, pre and post hospital expenses and day care procedures. I can also explain what is excluded." },
      { id: 4, speaker: "customer", name: "Customer", time: "00:26", text: "To maan lo jaise mere ko agar chhoti moti sardi khaansi hoti hai, kya main claim kar sakta hoon?", event: "Product confusion" },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:38", text: "Haan, agar bimaari policy mein cover hai to aap claim kar sakte hain.", tone: "Confident" },
      { id: 6, speaker: "customer", name: "Customer", time: "00:46", text: "Waiting periods kya hai?" },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:50", text: "Waiting period policy ki sharton par depend karti hai. Kuch bimaariyon ke liye shuru mein lagu rehti hai, isliye claim us period ke baad hi sweekar ho sakti hai.", tone: "Interruption handling" },
      { id: 8, speaker: "customer", name: "Customer", time: "00:58", text: "Ye details kahaan check kar paoonga?" },
      { id: 9, speaker: "agent", name: "Ayesha", time: "01:04", text: "Main policy details aapko abhi WhatsApp ya email par bhej deti hoon. Sab kuch handy mil jaega.", trigger: "Policy details" },
      { id: 10, speaker: "customer", name: "Customer", time: "01:07", text: "Haan ji aap mujhe share kar do. Claim mein koi challenge aaya to main kisse connect karunga?", event: "WhatsApp requested" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "01:18", text: "Aap hamaare customer care se connect kar sakte hain.", tone: "Reassuring" },
      { id: 12, speaker: "customer", name: "Customer", time: "01:20", text: "Agar maine EMI pay nahi kiya to claim mein dikkat aayegi kya?", event: "Unable to pay" },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:28", text: "Haan, agar premium unpaid raha to policy lapse ho sakti hai aur tab claim mein dikkat aa sakti hai." },
      { id: 14, speaker: "customer", name: "Customer", time: "01:35", text: "So can I pay the EMI later?", event: "EMI date change request" },
      { id: 15, speaker: "agent", name: "Ayesha", time: "01:43", text: "Yes, you can pay the premium later if it is still within the grace period. After that claim issues can happen." },
      { id: 16, speaker: "customer", name: "Customer", time: "01:48", text: "If I miss one month then start paying regularly — is there any issue in my policy?" },
      { id: 17, speaker: "agent", name: "Ayesha", time: "02:07", text: "If you miss one month it may be treated as a late payment. If it's beyond the grace period, the policy can lapse and claim issues may happen.", tone: "Professional" },
      { id: 18, speaker: "customer", name: "Customer", time: "02:15", text: "Ok, share all the details on my WhatsApp. I will check and update you.", event: "WhatsApp requested" },
      { id: 19, speaker: "agent", name: "Ayesha", time: "02:26", text: "Of course, I will send all the policy details on WhatsApp now. Have a great day ahead.", trigger: "Post-call action" },
    ],
    intelligence: {
      intents: [
        { label: "Policy coverage, minor illness", confidence: 91 },
        { label: "Waiting period clarification", confidence: 89 },
        { label: "Premium non-payment impact", confidence: 93 },
        { label: "Policy details via WhatsApp", confidence: 97 },
      ],
      actions: [
        { icon: "whatsapp", text: "Policy details shared via WhatsApp → Raj" },
      ],
    },
    summary: {
      text: "Welcome call explaining coverage, waiting periods, and grace period for premium non-payment. Customer clarified lapse implications and requested all policy info on WhatsApp.",
      outcome: "Policy details shared via WhatsApp",
    },
  },

  // 4 ── Business Loan Lead Qualification ────────────────────────────────────
  {
    id: 4,
    header: {
      industry: "BFSI",
      product: "Business Loan",
      useCase: "Lead Qualification",
      title: "BFSI Business Loan Lead Qualification",
      subtitle: "50L loan, turnover & CIBIL check",
      duration: "2:38",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v4.mp3",
    },
    sentiment: {
      from: "DOUBTFUL",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_DOUBTFUL_RESOLVED,
      sentimentJourney: [
 {label:"Confused",start:3,end:111,color:"red"},
 {label:"Resistant",start:111,end:131,color:"orange"},
 {label:"Converting",start:131,end:143,color:"yellow"},
 {label:"Resolved",start:143,end:158,color:"green"},
]
    },
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:03", text: "Hi Raj, this is Ayesha from SBI Business Loans. Can we talk quickly about your business loan needs today?", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Raj", time: "00:09", text: "Haan ji bataiye, mere ko 50 lakh ka loan lena tha. Kya main le sakta hoon?", event: "Product interest shown" },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:14", text: "Haan ji, yeh aapki income, turnover aur business details par depend karta hai. Chaliye pehle profile dekhte hain." },
      { id: 4, speaker: "customer", name: "Raj", time: "00:18", text: "Mera kapde ka vyaapaar hai. Turnover saal ka ek crore ke aaspaas hai. Abhi ek 30 lakh ka loan chal raha hai jo do mahine baad complete ho jaayega. Kya main eligible hoon?" },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:41", text: "Yeh solid growth hai. Monthly income kitna hai Raj ji?", tone: "Interruption handling" },
      { id: 6, speaker: "customer", name: "Raj", time: "00:45", text: "Monthly income 10 lakhs se upar hai." },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:48", text: "Theek hai, bahut achha. Aap yeh business kitne saal se chala rahe hain?" },
      { id: 8, speaker: "customer", name: "Raj", time: "00:52", text: "Yeh 10 saal se chal raha hai." },
      { id: 9, speaker: "agent", name: "Ayesha", time: "00:56", text: "Bahut badhiya. 10 saal ka track record strong hai. Abhi koi existing loan chal raha hai kya?" },
      { id: 10, speaker: "customer", name: "Raj", time: "01:00", text: "Haan, maine aapko bataya — mera ek 30 lakh ka loan hai jo do mahine baad band ho jaayega." },
      { id: 11, speaker: "agent", name: "Ayesha", time: "01:06", text: "Theek hai. Main details share kar dungi — WhatsApp ya email, kya behtar rahega?" },
      { id: 12, speaker: "customer", name: "Raj", time: "01:14", text: "WhatsApp par share karo. But rate of interest kya rahega aur documents kya-kya lagenge?", event: "WhatsApp requested" },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:22", text: "Rate of interest aapki profile par depend karega. Basic KYC, PAN, income proof aur business proof lagenge. WhatsApp par details bhej dungi.", tone: "Professional" },
      { id: 14, speaker: "customer", name: "Raj", time: "01:33", text: "Maan lo kal business achha chale — kya main part payment kar sakta hoon?", event: "Partial payment intent" },
      { id: 15, speaker: "agent", name: "Ayesha", time: "01:42", text: "Ji, part payment options loan terms par depend karte hain — exact details WhatsApp par mil jaayengi.", tone: "Reassuring" },
      { id: 16, speaker: "customer", name: "Raj", time: "01:51", text: "Agar koi EMI miss ho gayi to kya hoga?", event: "Objection raised" },
      { id: 17, speaker: "agent", name: "Ayesha", time: "02:04", text: "If an EMI is missed, late fees or penal charges may apply. Please contact the loan team immediately." },
      { id: 18, speaker: "customer", name: "Raj", time: "02:11", text: "Will it impact my CIBIL score?" },
      { id: 19, speaker: "agent", name: "Ayesha", time: "02:18", text: "Yes, it can impact your CIBIL score and may affect future loan eligibility." },
      { id: 20, speaker: "customer", name: "Raj", time: "02:23", text: "Okay, share all details on my WhatsApp. I will go through and update you. Thank you." },
      { id: 21, speaker: "agent", name: "Ayesha", time: "02:35", text: "Absolutely. I'll share the details on your WhatsApp. Thank you Raj.", tone: "Warm" },
    ],
    intelligence: {
      intents: [
        { label: "Loan eligibility, financial profile", confidence: 94 },
        { label: "Interest rate and documentation", confidence: 91 },
        { label: "Prepayment and missed EMI", confidence: 88 },
        { label: "CIBIL score implications", confidence: 92 },
      ],
      actions: [
        { icon: "whatsapp", text: "Business loan details shared via WhatsApp → Raj" },
      ],
    },
    summary: {
      text: "Raj's garment business has ₹1Cr annual turnover, 10 years vintage, and ₹10L+ monthly income. Existing 30L loan closing in 2 months. Agent discussed eligibility, KYC docs, CIBIL impact, and shared details on WhatsApp.",
      outcome: "Loan details shared via WhatsApp",
    },
  },

  // 5 ── NPA Recovery ─────────────────────────────────────────────────────────
  {
    id: 5,
    header: {
      industry: "BFSI",
      product: "Recovery",
      useCase: "NPA",
      title: "BFSI NPA Soft Recovery Call",
      subtitle: "Repeated calls, financial distress, no payment",
      duration: "2:49",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v5.mp3",
    },
    sentiment: {
      from: "ANGRY",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_ANGRY_RESOLVED,
      sentimentJourney: [
 {label:"Angry",start:0,end:124,color:"red"},
 {label:"Converting",start:124,end:145,color:"yellow"},
 {label:"Resolved",start:145,end:169,color:"green"},
]
    },
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:00", text: "Good morning, I am calling on behalf of Edelweiss Asset Reconstruction Company Limited. My name is Ayesha. Am I speaking with Raj?", tone: "Professional" },
      { id: 2, speaker: "customer", name: "Raj", time: "00:08", text: "Yes, Raj speaking. Why you are calling me?" },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:11", text: "Thank you sir. For security purposes, could you please confirm the last four digits of your registered mobile number?", tone: "Professional" },
      { id: 4, speaker: "customer", name: "Raj", time: "00:17", text: "I said why are you calling me. This is the third time I am getting this call.", event: "Repeated question" },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:22", text: "I understand sir, and I am really sorry if the repeated calls have been frustrating. Once I complete a quick verification, I will explain the reason and check why you were contacted earlier.", tone: "Apologetic" },
      { id: 6, speaker: "customer", name: "Raj", time: "00:37", text: "I am not going to share anything. Why are you calling again and again? I already said I cannot make any payment — I am suffering from financial issues.", event: "Unable to pay" },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:50", text: "I hear you sir. If you are already dealing with financial stress, repeated calls can feel very overwhelming, and I am genuinely sorry for that. This call is regarding a financial account assigned to Edelweiss Asset Reconstruction Company Limited for resolution.", tone: "Empathetic" },
      { id: 8, speaker: "customer", name: "Raj", time: "01:14", text: "Main kaise maanun ki yeh aapko assign kiya gaya hai?", event: "Trust concern" },
      { id: 9, speaker: "agent", name: "Ayesha", time: "01:17", text: "Samajh sakti hoon sir. Aap chahein to main aapke registered number par Edelweiss ki taraf se ek official SMS bhej sakti hoon jismein reference number aur official helpline hoga. Aap independently verify kar sakte hain.", tone: "Reassuring" },
      { id: 10, speaker: "customer", name: "Raj", time: "01:49", text: "Ek kaam karo suno — mujhe koi call mat karo. Main abhi pay nahi kar paunga. Mera mental health bhi bahut kharab hai aur bahut calls aa rahe hain. Mere paas koi financial backup nahi hai.", event: "Unable to pay" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "02:05", text: "Mujhe sach mein afsos hai ki aap itna overwhelmed mehsus kar rahe hain sir. Baar-baar calls aur financial pressure ke saath mental health struggle karna bahut bhaari ho jata hai. Aap akele nahi hain.", tone: "Empathetic" },
      { id: 12, speaker: "customer", name: "Raj", time: "02:21", text: "Please phone rakh do. Mujhe baat nahi karni. Thank you so much.", event: "Callback requested" },
      { id: 13, speaker: "agent", name: "Ayesha", time: "02:25", text: "Theek hai sir, main aapki request respect karti hoon. Main system mein note kar rahi hoon ki aapko filhaal calls nahi chahiye. Apna dhyaan rakhiye. Jab bhi ready hon, hamare official number par contact kar sakte hain.", tone: "Courteous" },
      { id: 14, speaker: "customer", name: "Raj", time: "02:43", text: "Haan haan, main contact kar loonga." },
      { id: 15, speaker: "agent", name: "Ayesha", time: "02:44", text: "Thank you for your time, sir.", tone: "Courteous" },
    ],
    intelligence: {
      intents: [
        { label: "Call purpose, stop repeated calls", confidence: 97 },
        { label: "Refused identity verification", confidence: 94 },
        { label: "Payment inability, mental distress", confidence: 96 },
        { label: "Legitimacy and callback deferral", confidence: 91 },
      ],
      actions: [
        { icon: "calendar", text: "Future review date set — no immediate calling" },
      ],
    },
    summary: {
      text: "Customer expressed frustration over repeated NPA collection calls and financial/mental distress. Agent responded empathetically, offered SMS verification, and respected request to stop calls by noting it in the system.",
      outcome: "Future review date set; no immediate callbacks",
    },
  },

  // 6 ── Motor Insurance Renewal Reminder ────────────────────────────────────
  {
    id: 6,
    header: {
      industry: "BFSI",
      product: "Motor Insurance",
      useCase: "Renewal Reminder",
      title: "BFSI Motor Insurance Renewal Reminder",
      subtitle: "NCB transfer, add-ons, online renewal",
      duration: "2:28",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v6.mp3",
    },
    sentiment: {
      from: "HESITANT",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_HESITANT_RESOLVED,
      sentimentJourney: [
 {label:"Hesitant",start:0,end:85,color:"orange"},
 {label:"Resistant",start:85,end:91,color:"amber"},
 {label:"Converting",start:91,end:117,color:"yellow"},
 {label:"Resolved",start:117,end:148,color:"green"},
]
    },
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:00", text: "Good morning Raj, this is Ayesha from SBI Motor Insurance calling about your policy renewal. Does now work for a quick chat?", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Raj", time: "00:07", text: "Haan haan, bolo." },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:10", text: "Aapki vartamaan policy kab expire ho rahi hai?" },
      { id: 4, speaker: "customer", name: "Raj", time: "00:14", text: "Agle mahine, but mujhe ek nayi policy chahiye thi.", event: "Product interest shown" },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:21", text: "Theek hai, nayi policy ke liye bhi main madad karungi. Kya aapne pichhle year mein koi claim kiya hai?" },
      { id: 6, speaker: "customer", name: "Raj", time: "00:26", text: "Nahi. Aap bata sakte ho ki purani policy mein kya kya covered hai?" },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:32", text: "Coverage aapki policy type par depend karta hai — third party ya comprehensive. Agar aap chahein main exact details bata dungi." },
      { id: 8, speaker: "customer", name: "Raj", time: "00:43", text: "Main nayi policy mein zero depreciation cover aur add-ons chahta hoon." },
      { id: 9, speaker: "agent", name: "Ayesha", time: "00:51", text: "Haan, zero depreciation aur add-on covers ho sakte hain.", tone: "Confident" },
      { id: 10, speaker: "customer", name: "Raj", time: "00:54", text: "Add-ons mein kya-kya hota hai?" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "00:58", text: "Available options mein zero depreciation, engine protection aur roadside assistance ho sakte hain." },
      { id: 12, speaker: "customer", name: "Raj", time: "01:07", text: "Main apni purani NCB ko doosre insurer pe transfer kar sakta hoon kya?", event: "Issue reported" },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:15", text: "Haan, agar policy timely renew hui hai to NCB doosre insurer mein transfer ho sakti hai. No Claim Bonus certificate ya previous policy details lagenge.", tone: "Reassuring" },
      { id: 14, speaker: "customer", name: "Raj", time: "01:25", text: "Ye policy renewal process online ho sakta hai kya?" },
      { id: 15, speaker: "agent", name: "Ayesha", time: "01:31", text: "Haan, renewal online ho sakta hai. Main WhatsApp ya email par link bhej dungi aur aap kuch minutes mein complete kar sakte hain.", trigger: "Renewal link" },
      { id: 16, speaker: "customer", name: "Raj", time: "01:39", text: "Haan aap mujhe WhatsApp kar dijiye ye sab.", event: "WhatsApp requested" },
      { id: 17, speaker: "agent", name: "Ayesha", time: "01:45", text: "Bilkul, main WhatsApp par bhej dungi. Kripya apna WhatsApp number confirm kar dijiye." },
      { id: 18, speaker: "customer", name: "Raj", time: "01:49", text: "Mera WhatsApp number hai 8307241321." },
      { id: 19, speaker: "agent", name: "Ayesha", time: "01:57", text: "Dhanyavaad, aapka WhatsApp number 8307241321 hai, sahi? Ab aapki annual income kitni hai?", tone: "Re-confirmed" },
      { id: 20, speaker: "customer", name: "Raj", time: "02:07", text: "Annual income hai meri 12 lakh." },
      { id: 21, speaker: "agent", name: "Ayesha", time: "02:10", text: "Bahut achha, 12 lakh noted hai. Koi vehicle details mein badlaav hua hai?" },
      { id: 22, speaker: "customer", name: "Raj", time: "02:16", text: "Main abhi bahar hoon. Aap WhatsApp pe details share kar dijiye mere saath." },
      { id: 23, speaker: "agent", name: "Ayesha", time: "02:24", text: "Bilkul.", tone: "Courteous" },
    ],
    intelligence: {
      intents: [
        { label: "Renewal, new policy needs", confidence: 95 },
        { label: "Add-ons and NCB transfer", confidence: 92 },
        { label: "Online renewal process asked", confidence: 90 },
        { label: "Requested details via WhatsApp", confidence: 97 },
      ],
      actions: [
        { icon: "whatsapp", text: "Renewal link shared via WhatsApp → Raj" },
      ],
    },
    summary: {
      text: "Renewal reminder call where customer wanted new policy with zero dep and add-ons, asked about NCB transfer to another insurer, and opted for online renewal. WhatsApp number confirmed and link sent.",
      outcome: "Renewal link shared via WhatsApp",
    },
  },

  // 7 ── Business Loan Pre-Dues ───────────────────────────────────────────────
  {
    id: 7,
    header: {
      industry: "BFSI",
      product: "Business Loan",
      useCase: "Pre-Dues Reminder",
      title: "BFSI Business Loan Pre-Dues",
      subtitle: "EMI scheduled, auto-debit, date shift",
      duration: "2:32",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v7.mp3",
    },
    sentiment: {
      from: "ANGRY",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_ANGRY_RESOLVED,
      sentimentJourney: [
 {label:"Angry",start:0,end:59,color:"red"},
 {label:"Converting",start:59,end:99,color:"yellow"},
 {label:"Resolved",start:99,end:152,color:"green"},
]
    },
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:01", text: "Hi Raj, this is Ayesha calling from Siemens. How are you doing today?", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Raj", time: "00:07", text: "I am fine." },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:11", text: "Your business loan installment is due this coming Tuesday. Have you scheduled it already?" },
      { id: 4, speaker: "customer", name: "Raj", time: "00:15", text: "Haan, already scheduled hai aur funds bhi arrange kar rakhe hain, but mujhe multiple calls aa rahe hain. Maine ek baar bata diya ki pay kar dunga — baar baar call karke pareshaan kar rahe ho.", event: "Repeated calls complaint" },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:28", text: "Bilkul, aapki frustration valid hai. Main isse note kar rahi hoon taaki unnecessary reminders kam ho sakein. Kya main file mein update kar doon ki payment scheduled hai?", tone: "Empathetic" },
      { id: 6, speaker: "customer", name: "Raj", time: "00:35", text: "Haan, update kar do aur mujhe dobara call nahi aana chahiye." },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:40", text: "Bilkul, main update kar rahi hoon." },
      { id: 8, speaker: "customer", name: "Raj", time: "00:44", text: "Main office mein hota hoon aur aap logon ke back-to-back calls se office ka kaam chhodkar call attend karta hoon." },
      { id: 9, speaker: "agent", name: "Ayesha", time: "00:53", text: "Main samajh sakti hoon Raj, main aapka time waste nahi karna chahti. Kya aap chahenge ki main WhatsApp par payment update bhej doon?", tone: "Empathetic" },
      { id: 10, speaker: "customer", name: "Raj", time: "00:59", text: "Haan, WhatsApp par bhej do. Mere paas auto debit bhi laga hua hai — automatic payment ho jayega.", event: "WhatsApp requested" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "01:13", text: "Ji, main WhatsApp par update bhej rahi hoon. Auto debit achha hai. Registered number same hai?" },
      { id: 12, speaker: "customer", name: "Raj", time: "01:16", text: "Haan, registered number saare same hain." },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:19", text: "Perfect, main WhatsApp pe payment link bhej rahi hoon — Tuesday tak payment confirmed samjhe?", trigger: "Payment link" },
      { id: 14, speaker: "customer", name: "Raj", time: "01:23", text: "Ha. But mera due date 3 tareekh hai — kya main isko 1 tareekh ko kar sakta hoon? Salary 1 ko credit hoti hai, usi din payment ho jaye.", event: "Due date shift" },
      { id: 15, speaker: "agent", name: "Ayesha", time: "01:34", text: "Payment due date se pehle karna bilkul better hota hai. Main aapko pehle payment ka note bhej sakti hoon.", trigger: "Due date shift" },
      { id: 16, speaker: "customer", name: "Raj", time: "01:39", text: "Haan, yeh kar do. Aur dhyaan rakho ki baar baar calls na aayein.", event: "Settlement inquiry" },
      { id: 17, speaker: "agent", name: "Ayesha", time: "01:52", text: "Ji bilkul, main note kar rahi hoon aur WhatsApp par reminder bhi bhej rahi hoon taaki tension kam ho.", tone: "Honest" },
      { id: 18, speaker: "customer", name: "Raj", time: "02:01", text: "Theek hai, jo karna hai karo lekin mere ko call nahi aane chahiye. Mera auto debit laga hua hai — automatic deduct ho jaega." },
      { id: 19, speaker: "agent", name: "Ayesha", time: "02:15", text: "Ji, auto debit active noted. Update darj kar rahi hoon." },
      { id: 20, speaker: "customer", name: "Raj", time: "02:22", text: "Theek hai, Dhanyavaad." },
      { id: 21, speaker: "agent", name: "Ayesha", time: "02:25", text: "Dhanyavaad Raj, apna dhyaan rakhiye. Agar aur kuch chahiye toh bataiye.", tone: "Warm" },
    ],
    intelligence: {
      intents: [
        { label: "Confirmed payment, scheduled funds", confidence: 96 },
        { label: "Complaint, requested no calls", confidence: 98 },
        { label: "Early payment date shift", confidence: 93 },
        { label: "Requested WhatsApp payment link", confidence: 97 },
      ],
      actions: [
        { icon: "whatsapp", text: "Payment link shared via WhatsApp → Raj" },
        { icon: "calendar", text: "Payment date changed to 1st from 3rd" },
        { icon: "email", text: "No further calls flagged in system" },
      ],
    },
    summary: {
      text: "Customer had already arranged EMI funds and had auto-debit active but was frustrated by repeated calls. Agent updated file, shared payment link on WhatsApp, and accommodated due date shift from 3rd to 1st.",
      outcome: "Payment link sent; due date shifted; no-call flag set",
    },
  },

  // 8 ── Mutual Fund New Investor Onboarding ─────────────────────────────────
  {
    id: 8,
    header: {
      industry: "BFSI",
      product: "Mutual Funds",
      useCase: "New Investor Onboarding",
      title: "BFSI Mutual Fund New Investor Onboarding",
      subtitle: "SIP goals, low risk, KYC & RM",
      duration: "2:35",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v8.mp3",
    },
    sentiment: {
      from: "HESITANT",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_HESITANT_RESOLVED,
      sentimentJourney: [
 {label:"Hesitant",start:0,end:42,color:"orange"},
 {label:"Resistant",start:42,end:60,color:"amber"},
 {label:"Converting",start:60,end:122,color:"yellow"},
 {label:"Resolved",start:122,end:155,color:"green"},
]
    },
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:00", text: "Hi Raj, this is Ayesha from LIC Mutual Funds. Can I ask what's your main goal for investing?", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Raj", time: "00:06", text: "My name is Raj." },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:10", text: "Thanks Raj. What's your primary goal for investing?", tone: "Courteous" },
      { id: 4, speaker: "customer", name: "Raj", time: "00:13", text: "My primary goal is I am starting my SIP to buy one new home in next 10 years." },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:21", text: "Perfect, especially since it's a long-term goal. How comfortable are you with investment risk?", tone: "Professional" },
      { id: 6, speaker: "customer", name: "Raj", time: "00:27", text: "Main zyaada risk nahi le sakta. Mere do-teen doubts hain — agar maine SIP start kiya to kaun sa mutual fund mere liye zyaada achha rahega? Investment amount bahut kam hai — 5000 se bhi kam.", event: "Doubtful" },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:43", text: "Bilkul, low risk ke liye conservative options dekhenge. Aapki annual income kitni hai?", tone: "Clarification" },
      { id: 8, speaker: "customer", name: "Raj", time: "00:49", text: "Meri annual income abhi 6 LPA hai. Kya main isko application ke through kar sakta hoon ya bank jaana padega?" },
      { id: 9, speaker: "agent", name: "Ayesha", time: "01:02", text: "Bahut achha Raj. Haan, aap application se bhi start kar sakte hain — bank jaana zaroori nahi hota. KYC complete hona padega." },
      { id: 10, speaker: "customer", name: "Raj", time: "01:12", text: "Minimum amount kya rahega? Sabse kam kitne se start kar sakta hoon?" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "01:20", text: "Adhiktar SIP ke liye minimum amount ₹500 monthly se shuru hota hai." },
      { id: 12, speaker: "customer", name: "Raj", time: "01:30", text: "Mere ko koi guide kar sakta hai kya ki mere liye kaun sa best fund rahega jisse mere goals achieve ho sakein?", event: "RM follow-up required" },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:41", text: "Bilkul. Hamari team aur aapka RM aapko guide karega — low risk aur ghar ke goal ke hisaab se.", trigger: "RM guidance" },
      { id: 14, speaker: "customer", name: "Raj", time: "01:48", text: "Theek hai. Details WhatsApp pe share kar do. Main 2000 se start karne ka soch raha hoon. Agar income badhegi to amount badha sakta hoon kya?", event: "WhatsApp requested" },
      { id: 15, speaker: "agent", name: "Ayesha", time: "02:02", text: "Ji haan, bilkul. Aap SIP amount baad mein badha sakte hain. Main details WhatsApp par share kar dungi.", tone: "Confident" },
      { id: 16, speaker: "customer", name: "Raj", time: "02:11", text: "KYC kyun karna hai? Is investment mein start karne ke liye pehle KYC karna padega?" },
      { id: 17, speaker: "agent", name: "Ayesha", time: "02:20", text: "Haan, pehle KYC karna padega. Yeh mutual fund investment ke liye zaroori hai." },
      { id: 18, speaker: "customer", name: "Raj", time: "02:26", text: "Theek hai, KYC ka list bhej do — details main kar lunga. Thank you." },
      { id: 19, speaker: "agent", name: "Ayesha", time: "02:31", text: "Theek hai Raj, main details WhatsApp par bhej dungi. Dhanyavaad. Aapka din shubh ho.", trigger: "Post-call action" },
    ],
    intelligence: {
      intents: [
        { label: "Investment goal, low risk", confidence: 93 },
        { label: "Low budget SIP planning", confidence: 90 },
        { label: "RM guidance for best fund", confidence: 95 },
        { label: "KYC mandatory, flexibility allowed", confidence: 91 },
      ],
      actions: [
        { icon: "whatsapp", text: "KYC list shared via WhatsApp → Raj" },
        { icon: "email", text: "Summary sent to RM" },
      ],
    },
    summary: {
      text: "New investor with 10-year home-buying goal, 6 LPA income, and low risk appetite. Starting SIP at ₹2000/month. Agent explained ₹500 minimum, KYC requirement, and RM guidance availability. KYC list sent on WhatsApp.",
      outcome: "KYC list shared via WhatsApp; RM summary sent",
    },
  },

  // 9 ── Life Insurance Dormant Qualification ────────────────────────────────
  {
    id: 9,
    header: {
      industry: "BFSI",
      product: "Life Insurance",
      useCase: "Dormant Qualification",
      title: "BFSI Life Insurance Dormant Qualification",
      subtitle: "Existing term plan, tax benefit, advisor booking",
      duration: "3:33",
      languages: ["Hindi", "English"],
      voiceGender: "Female",
      audioSrc: "/audio/v9.mp3",
    },
    sentiment: {
      from: "CONFUSED",
      to: "RESOLVED",
      resolved: true,
      stages: STAGES_CONFUSED_RESOLVED,
      sentimentJourney: [
 {label:"Confused",start:0,end:22,color:"red"},
 {label:"Resistant",start:22,end:75,color:"orange"},
 {label:"Converting",start:75,end:139,color:"yellow"},
 {label:"Resolved",start:139,end:213,color:"green"},
]
    },
    transcript: [
      { id: 1, speaker: "agent", name: "Ayesha", time: "00:00", text: "Hi Raj, this is Ayesha from SBI. Just reaching out about your interest in life insurance. Do you have a minute to chat?", tone: "Friendly" },
      { id: 2, speaker: "customer", name: "Raj", time: "00:06", text: "Yes, we can. But may I know what this call is regarding?" },
      { id: 3, speaker: "agent", name: "Ayesha", time: "00:10", text: "This is a quick follow-up on your earlier interest in a life insurance plan. Are you currently covered under any life insurance policy?", tone: "Professional" },
      { id: 4, speaker: "customer", name: "Raj", time: "00:22", text: "Yes, I have already purchased, but I showed interest one month back and you're calling me now.", event: "Objection raised" },
      { id: 5, speaker: "agent", name: "Ayesha", time: "00:29", text: "I hear you and I respect that. Is your current cover a term plan or a savings plan?", tone: "Empathetic" },
      { id: 6, speaker: "customer", name: "Raj", time: "00:41", text: "Maine term insurance liya tha pehle." },
      { id: 7, speaker: "agent", name: "Ayesha", time: "00:44", text: "Bahut badhiya. Term plan achha choice hai. Kya haal mein aapki income, zimmedariyan ya financial goals mein koi badlav hua hai?", tone: "Friendly" },
      { id: 8, speaker: "customer", name: "Raj", time: "00:52", text: "Nahi, aisa koi change nahi hua hai." },
      { id: 9, speaker: "agent", name: "Ayesha", time: "00:57", text: "Theek hai. Coverage review karna useful rahega. Premium age ke saath badhta hai aur current plan compare karke better option dekha ja sakta hai. Kya main ek quick comparison bhej doon?", tone: "Professional" },
      { id: 10, speaker: "customer", name: "Raj", time: "01:11", text: "Theek hai bhej do, but maine already le rakha hai — main dobara insurance kyun loon?", event: "Objection raised" },
      { id: 11, speaker: "agent", name: "Ayesha", time: "01:19", text: "Bilkul, aapko dobara wahi plan lene ki zarurat nahi hai. Main sirf review ki baat kar rahi hoon. Kya aapka current cover aapke family goals ke liye enough hai?", tone: "Reassuring" },
      { id: 12, speaker: "customer", name: "Raj", time: "01:32", text: "Dekho maine 25 lakh ka insurance le rakha hai." },
      { id: 13, speaker: "agent", name: "Ayesha", time: "01:40", text: "Bahut achha. 25 lakh ka cover hona achhi baat hai. Kya ye pure term insurance hai ya ismein savings benefit bhi hai?", tone: "Friendly" },
      { id: 14, speaker: "customer", name: "Raj", time: "01:47", text: "Nahi, ye pure term insurance hai." },
      { id: 15, speaker: "agent", name: "Ayesha", time: "01:52", text: "Perfect, pure term plan hai. Ye strong protection deta hai. Kya aapko family protection ke saath tax benefit bhi important lagta hai?", tone: "Professional" },
      { id: 16, speaker: "customer", name: "Raj", time: "02:02", text: "Haan, tax benefit mujhe chahiye. Main abhi tax slab mein aa gaya hoon." },
      { id: 17, speaker: "agent", name: "Ayesha", time: "02:09", text: "Bahut badhiya. Tax saving ke liye term plan useful hota hai, especially jab protection bhi mile. Kya main ek quick comparison WhatsApp par bhej doon?", tone: "Professional" },
      { id: 18, speaker: "customer", name: "Raj", time: "02:19", text: "Theek hai, aap mujhe details WhatsApp par bhej do.", event: "WhatsApp requested" },
      { id: 19, speaker: "agent", name: "Ayesha", time: "02:26", text: "Ji bilkul, main abhi details WhatsApp par bhej rahi hoon. Bas aap apna WhatsApp number confirm kar dijiye.", trigger: "Comparison" },
      { id: 20, speaker: "customer", name: "Raj", time: "02:37", text: "8083570362." },
      { id: 21, speaker: "agent", name: "Ayesha", time: "02:42", text: "Dhanyavaad. Confirm kar rahi hoon — aapka WhatsApp number 8083570362 hai, sahi hai?", tone: "Professional" },
      { id: 22, speaker: "customer", name: "Raj", time: "02:50", text: "Haan, sahi hai." },
      { id: 23, speaker: "agent", name: "Ayesha", time: "02:52", text: "Bahut achha. Main details bhej rahi hoon. Agar chahein to main aapko advisor se bhi connect karwa sakti hoon." },
      { id: 24, speaker: "customer", name: "Raj", time: "02:59", text: "Haan, mera Sunday ka appointment fix kar do. Sunday ko main free rahunga.", event: "Meeting scheduled" },
      { id: 25, speaker: "agent", name: "Ayesha", time: "03:07", text: "Ji bilkul, main Sunday ke liye appointment set kar rahi hoon. Kis time aap free rahenge?", tone: "Professional" },
      { id: 26, speaker: "customer", name: "Raj", time: "03:17", text: "12 baje ke aas paas kar lena.", event: "preferred time shared" },
      { id: 27, speaker: "agent", name: "Ayesha", time: "03:21", text: "Theek hai, Sunday ko 12 baje ke aas paas appointment rakh rahi hoon. Main aapko details WhatsApp par bhej rahi hoon. Advisor usi time connect kar lenge.", trigger: "Advisor appointment" },
      { id: 28, speaker: "customer", name: "Raj", time: "03:33", text: "Theek hai. Thank you." },
    ],
    intelligence: {
      intents: [
        { label: "Existing policy, coverage review", confidence: 93 },
        { label: "Tax benefit and savings", confidence: 96 },
        { label: "Advisor appointment scheduled", confidence: 98 },
        { label: "Comparison sent via WhatsApp", confidence: 95 },
      ],
      actions: [
        { icon: "whatsapp", text: "Quick comparison shared via WhatsApp → Raj" },
        { icon: "calendar", text: "Advisor appointment: Sunday 12:00 PM" },
      ],
    },
    summary: {
      text: "Dormant lead follow-up for customer with existing ₹25L pure term plan. Customer entered new tax slab and interested in tax benefits. Agent offered coverage review comparison and booked Sunday advisor appointment.",
      outcome: "Comparison sent via WhatsApp; Advisor appointment Sunday 12 PM",
    },
  },
];

// ── Filter options ─────────────────────────────────────────────────────────────

export const INDUSTRY_OPTIONS = ["All", "BFSI"];

export const PRODUCT_OPTIONS = [
  "All",
  "Life Insurance",
  "Health Insurance",
  "Motor Insurance",
  "Mutual Funds",
  "Business Loan",
  "Recovery",
];

export const USE_CASE_OPTIONS = [
  "All",
  "CX",
  "KYC & RM Callback",
  "Welcome Call",
  "Lead Qualification",
  "NPA",
  "Renewal Reminder",
  "Pre-Dues Reminder",
  "New Investor Onboarding",
  "Dormant Qualification",
];

export const LANGUAGE_OPTIONS = ["All", "Hindi", "English"];

export const HERO_STATS = [
  { value: "22", label: "Indian & global\nlanguages" },
  { value: "1,200+", label: "Parallel dials /\nsecond" },
  { value: "< 400ms", label: "End-to-end\nvoice latency" },
  { value: "94%", label: "Objection handled\nfirst-try" },
  { value: "30+", label: "Post-call\naction triggers" },
  { value: "4hr", label: "Max call context\nretained" },
];