import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { getRandomModuleQuestions, MODULE_QUIZ_POOL } from "@/lib/moduleQuizzes";

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// Comprehensive factual campaign context for each module
const MODULE_CONTEXTS: Record<string, { title: string; topics: string; keyLessons: string }> = {
  m0: {
    title: "Module 0: Welcome & Preparation - The Human Firewall",
    topics: "First 30 seconds pause rule, Rafiq's Story (urgent fear trigger causing impulsive clicks), THINK Framework (True, Helpful, Inspiring, Necessary, Kind), Phone Flip habit (flipping screen down during critical tasks to prevent notification reflex), Zero Trust Mindset.",
    keyLessons: "Scammers manufacture artificial panic. Stopping for 30 seconds to breathe and analyze disrupts emotional manipulation. Technology is only 50% of security; conscious humans are the primary frontline defense."
  },
  m1: {
    title: "Module 1: Why You Are a Target - Digital Treasure Map",
    topics: "Nusrat's story ('I have no money, why hack me?'), the digital treasure map on every citizen's smartphone (SMS OTPs, contacts, WhatsApp chats, gallery photos, National ID scans), credential stuffing, botnet relay, 3 quick phone security tests (lock screen notification preview leak, unnecessary app permissions, persistent location sharing).",
    keyLessons: "Hackers harvest ordinary accounts for identity theft, extortion, and launching attacks on contacts. Visible lock-screen notifications allow unauthorized reading of OTPs even when the phone is locked."
  },
  m2: {
    title: "Module 2: Psychological Traps & The 6-Stage Fraud Cycle",
    topics: "6 Human Emotional Traps: Fear (account suspension threats), Urgency (countdown timers), Greed (unexpected lottery prizes), Authority (impersonating police officers or bank managers), Curiosity (secret scandal links), Sympathy (fake disaster relief appeals). The 6-Stage Fraud Cycle: Reconnaissance, Hook, Pressure, Execution, Exploitation, Disappearance. Shaon's story.",
    keyLessons: "Scammers attack the human emotional amygdala before the rational cortex can react. Genuine authority figures never demand confidential credentials or money over unsolicited phone calls."
  },
  m3a: {
    title: "Module 3A: Local Scam Hotspots in Bangladesh",
    topics: "6 Localized Scams: 1. bKash/Nagad accidental 3,000 BDT cash-in refund scam (fake SMS). 2. Facebook fake page courier delivery / advance personal bKash transfer scam. 3. Fake government scholarship / subsidy SMS claiming 10,000 BDT without official '.gov.bd'. 4. WhatsApp foreign numbers (+92, +44, +880 etc.) crypto / task scams. 5. Fake admission/job circulars harvesting NIDs. 6. Illegal e-commerce 90% discount flash sale traps.",
    keyLessons: "Always check official app statements rather than SMS text claims. Official Bangladesh government initiatives strictly use '.gov.bd' domains. Insist on Cash on Delivery with open-box verification for online goods."
  },
  m3: {
    title: "Module 3: Phishing & Fake Links",
    topics: "Zahid vs Masum case study (cloned Facebook login stealing credentials), 3-Question Decision Tree (Who sent it? Why the rush? Where does the URL actually lead?), Lookalike domains and typosquatting (e.g. bkash-reward.xyz vs bkash.com), VirusTotal multi-engine URL analysis (70+ security engines).",
    keyLessons: "Inspecting the actual domain in the address bar stops 99% of phishing. Entering passwords on unverified links results in instant identity theft. Free tools like VirusTotal allow safe verification of links."
  },
  m4: {
    title: "Module 4: Passwords & Two-Factor Authentication (2FA)",
    topics: "Najma's case study, Passphrase concept (combining 3-4 random memorable words with high entropy, e.g. 'Sundarban-Hilsha-Rocket-Sky#99') vs weak dictionary words, brute force cracking times (seconds vs trillions of years), MFA Priority Pyramid (securing primary email and financial accounts first), Authenticator apps (TOTP) vs SMS OTP (susceptible to SIM swap).",
    keyLessons: "Master email is the root key for password resets. 2FA prevents unauthorized account access even if the password is stolen. Authenticator apps remain resilient against cellular SIM swap attacks."
  },
  m5: {
    title: "Module 5: Social Media Privacy & Digital Footprint",
    topics: "Sadia's vacation story (burglary at empty home caused by real-time airport/resort check-ins), Digital Jigsaw Puzzle (attackers assembling pet names, schools, birthdays, geo-tags from disparate public posts to crack security questions), 4 pre-posting questions before publishing on social media.",
    keyLessons: "The internet never forgets. Posting live vacation updates broadcasts that your residence is empty. Wait until you return home before posting travel albums."
  },
  m6: {
    title: "Module 6: Malware, Rogue QR Codes & Device Safety",
    topics: "Rahat's loan app blackmail case study (unauthorized predatory lending apps harvesting contacts and gallery to extort relatives), Rogue QR code stickers (Quishing) on dining tables and counters redirecting payments or phishing, Permission Audit (why does a flashlight app demand contacts or microphone?), Sideloading unsolicited .apk files.",
    keyLessons: "Never install unauthorized .apk files or predatory loan apps outside official verified app stores. Inspect payment QR codes for sticker overlays before scanning."
  },
  m7: {
    title: "Module 7: OTP & Financial Fraud Defense",
    topics: "'OTP is your digital house key' metaphor, Anwar's 50,000 BDT fraud story (smooth-talking fraudster impersonating a bKash executive), 5 steps scammers execute to siphon mobile money, absolute prohibition on sharing OTP/PIN with anyone under any pretext.",
    keyLessons: "No bank, MFS operator (bKash/Nagad), police, or telecom agent will ever ask for your OTP or PIN. Disclosing an OTP is equivalent to handing over the key to your bank vault."
  },
  m8: {
    title: "Module 8: AI & Deepfakes",
    topics: "AI Voice Cloning using just 3-5 seconds of clear social media audio, urgent distress extortion calls ('Mother is in hospital, send 50,000 BDT immediately'), Family Secret Code-Word defense, Live video deepfake glitches (waving hand in front of face or turning head 90 degrees causes AI neural warping and occlusion artifacts).",
    keyLessons: "Pre-arranged family safety codewords immediately expose generative voice cloning. Occlusion tests expose real-time deepfake video face-swapping."
  },
  m9: {
    title: "Module 9: Cyberbullying & Online Blackmail",
    topics: "Priya's story (morphed photos and digital blackmail), 4-Step Shield (1. Do Not Panic, 2. Do Not Pay or Negotiate, 3. Preserve Forensic Evidence: uncropped screenshots with timestamps, URLs, payment requests, 4. Report to authorities), Circle of Support, Police Cyber Support for Women (PCSW) & 999 hotline.",
    keyLessons: "Paying extortionists never solves blackmail; it invites larger ransom demands. Preserving digital evidence and seeking specialized police support ensures justice and safety."
  },
  m9a: {
    title: "Module 9A: Digital Wellbeing & Mindful Technology",
    topics: "24-Hour Balance Bar (7-8h sleep, productive work/study, physical health, controlled screen time), Dopamine reinforcement loop and algorithmic infinite scrolling, 1 daily offline micro-habit (keeping screens away 30 minutes before sleep and a 20-minute phone-free morning buffer).",
    keyLessons: "Algorithmic variable rewards create compulsive checking habits. Establishing offline boundaries preserves executive mental function and reduces impulsive cyber mistakes."
  },
  m10: {
    title: "Module 10: Incident Response Playbook",
    topics: "Rayhan's SIM swap case study. 5-Minute Golden Window: Call bank/MFS to freeze accounts and payment cards. 30-Minute Window: Change master email password, force logout of all active sessions, verify 2FA devices. 24-Hour Window: File formal General Diary (GD) at nearest police station with digital evidence, report to BTRC/Cyber Police.",
    keyLessons: "Swift response within the first 5 minutes limits monetary losses. A police GD establishes legal liability defense and provides documentary standing for account restoration."
  },
  m11: {
    title: "Module 11: Personal Security Action Plan",
    topics: "Arif's story (empowering family, introducing safety codeword, reviewing village links), 3 tangible immediate commitments (primary email authenticator 2FA, switching to passphrases, hiding lock screen notifications), the STOP - THINK - VERIFY - PROTECT loop.",
    keyLessons: "Individual cyber hygiene scales into collective community defense. Ten minutes spent configuring fundamental safeguards protects against 90% of opportunistic cyber threats."
  },
  m12: {
    title: "Module 12: Quiz, Helplines & Digital Oath",
    topics: "National Emergency Helpline 999, BTRC Telecom & Cyber Fraud Helpline 100 / 13219, Police Cyber Support for Women, Digital Cyber Champion Citizenship Oath, the 5 Golden Words: Awareness, Verification, Pause, Defense, Community.",
    keyLessons: "A certified Cyber Champion exercises vigilance, rejects viral rumors, and acts as a human firewall protecting their community and nation."
  }
};

export async function POST(req: NextRequest) {
  let moduleKey = 'm0';
  try {
    const body = await req.json().catch(() => ({}));
    const { moduleId } = body;
    console.log("API received moduleId:", moduleId, "type:", typeof moduleId);

    if (moduleId && (MODULE_CONTEXTS[moduleId] || MODULE_QUIZ_POOL[moduleId])) {
      moduleKey = String(moduleId).trim().toLowerCase();
    }
    const context = MODULE_CONTEXTS[moduleKey] || MODULE_CONTEXTS['m0'];

    const ai = getAiClient();
    if (!ai) {
      console.warn("GEMINI_API_KEY not configured, falling back to curated pool");
      const fallbackQuestions = getRandomModuleQuestions(moduleKey, 3).map(q => ({
        ...q,
        generatedByAI: false,
      }));
      return NextResponse.json({
        success: true,
        source: 'curated_fallback',
        questions: fallbackQuestions
      });
    }

    const prompt = `You are an elite cybersecurity educator creating an interactive knowledge-check quiz for the "Click Safe Bangladesh" national cyber awareness campaign.

MODULE BEING COMPLETED:
Title: ${context.title}
Key Topics: ${context.topics}
Core Cybersecurity Lessons: ${context.keyLessons}

TASK:
Dynamically generate exactly 3 unique, challenging, highly educational multiple-choice questions specifically based on the content of this module.

REQUIREMENTS:
1. Scenarios should be realistic, relatable to citizens and students in Bangladesh (e.g. bKash, Nagad, WhatsApp, Facebook, local banking, family emergency calls, student portals, college admission).
2. The questions MUST be intellectually challenging and test deep conceptual understanding, not just trivial definitions.
3. Each question must provide:
   - id: a unique identifier string (e.g. "gemini-q1", "gemini-q2", "gemini-q3")
   - conceptKey: short 2-4 word label of the specific security rule or scenario tested (e.g., "SIM Swap Response", "Rogue QR Sticking", "Family Secret Codeword")
   - questionBn: question text in fluent, natural, grammatically correct Bengali
   - questionEn: question text in clear, professional English
   - optionsBn: array of exactly 4 plausible choices in Bengali (one unambiguously correct, three realistic misconceptions/distractors)
   - optionsEn: array of exactly 4 corresponding choices in English
   - correctIndex: integer (0, 1, 2, or 3) pointing to the single correct option
   - explanationBn: concise, impactful educational defense takeaway in Bengali explaining WHY the answer is correct and what cyber protection principle applies
   - explanationEn: concise, impactful educational defense takeaway in English
4. Return pure JSON matching the specified schema.`;

    let response;
    let usedModel = "gemini-3.8-flash";

    const schemaConfig = {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        description: "Array of exactly 3 challenging, educational multiple-choice quiz questions based on the module cybersecurity content.",
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            conceptKey: { type: Type.STRING, description: "Short title of the cybersecurity concept tested" },
            questionBn: { type: Type.STRING, description: "Challenging scenario-based question in Bangla" },
            questionEn: { type: Type.STRING, description: "Challenging scenario-based question in English" },
            optionsBn: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exactly 4 multiple-choice options in Bangla"
            },
            optionsEn: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exactly 4 multiple-choice options in English"
            },
            correctIndex: { type: Type.INTEGER, description: "0-based index (0, 1, 2, or 3) of the correct option" },
            explanationBn: { type: Type.STRING, description: "Clear, educational cybersecurity defense rationale in Bangla explaining why this answer is correct" },
            explanationEn: { type: Type.STRING, description: "Clear, educational cybersecurity defense rationale in English explaining why this answer is correct" },
          },
          required: [
            "conceptKey", 
            "questionBn", 
            "questionEn", 
            "optionsBn", 
            "optionsEn", 
            "correctIndex", 
            "explanationBn", 
            "explanationEn"
          ]
        }
      }
    };

    try {
      response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: schemaConfig
      });
    } catch (primaryModelErr: any) {
      console.warn("gemini-3.8-flash busy or encountered error, attempting with gemini-3.1-flash-lite:", primaryModelErr?.message);
      usedModel = "gemini-3.1-flash-lite";
      response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
        config: schemaConfig
      });
    }

    const text = response?.text?.trim() || "";
    let parsedQuestions = [];
    try {
      parsedQuestions = JSON.parse(text);
    } catch (parseError) {
      console.error("Failed to parse Gemini JSON output:", parseError, text);
    }

    if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
      console.warn("Gemini output was empty or invalid format, using fallback");
      const fallbackQuestions = getRandomModuleQuestions(moduleKey, 3).map(q => ({
        ...q,
        generatedByAI: false,
      }));
      return NextResponse.json({
        success: true,
        source: 'curated_fallback',
        questions: fallbackQuestions
      });
    }

    // Format & validate questions
    const formattedQuestions = parsedQuestions.slice(0, 3).map((q, idx) => ({
      id: q.id || `ai-${moduleKey}-${idx}-${Date.now()}`,
      moduleId: moduleKey,
      conceptKey: q.conceptKey || `Module ${moduleKey.toUpperCase()}`,
      questionBn: q.questionBn,
      questionEn: q.questionEn,
      optionsBn: Array.isArray(q.optionsBn) && q.optionsBn.length === 4 ? q.optionsBn : ["বিকল্প ক", "বিকল্প খ", "বিকল্প গ", "বিকল্প ঘ"],
      optionsEn: Array.isArray(q.optionsEn) && q.optionsEn.length === 4 ? q.optionsEn : ["Option A", "Option B", "Option C", "Option D"],
      correctIndex: typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex < 4 ? q.correctIndex : 0,
      explanationBn: q.explanationBn,
      explanationEn: q.explanationEn,
      generatedByAI: true
    }));

    return NextResponse.json({
      success: true,
      source: 'gemini_api',
      model: usedModel,
      questions: formattedQuestions
    });

  } catch (error: any) {
    console.error("Error generating quiz with Gemini API:", error);
    // Graceful fallback to guaranteed curated questions from the specific module
    const fallback = getRandomModuleQuestions(moduleKey, 3).map(q => ({
      ...q,
      generatedByAI: false,
    }));

    return NextResponse.json({
      success: true,
      source: 'error_fallback',
      error: error.message || "Failed to generate dynamic questions",
      questions: fallback
    });
  }
}
