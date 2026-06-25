import { CompetencyGroup, ExperienceItem, CertificationItem, AchievementItem, TestScenario } from "./types";

export const professionalSummary = {
  yearsOfExperience: "2.9+",
  totalProjects: "7+",
  headline: "Senior SDET & Automation Architect",
  bio: "Automation Engineer and SDET with 2.9+ years of experience designing and scaling high-efficiency test automation frameworks across Web, Mobile, API, Desktop, and iOS platforms. Expert in constructing Page Object Model code-generation platforms, dynamic auto-healing locator engines, and reusable cloud-integrated automation libraries.",
};

export const competencies: CompetencyGroup[] = [
  {
    category: "Automation Tools",
    icon: "Cpu",
    items: ["Selenium WebDriver 4", "Playwright", "Appium", "WinAppDriver", "TestNG", "JUnit", "Maven", "Selenium IDE"]
  },
  {
    category: "Languages",
    icon: "Code",
    items: ["TypeScript/JavaScript", "Java (Core + OOP)", "Python", "SQL", "Shell Scripting (Bash)"]
  },
  {
    category: "Frameworks & Design",
    icon: "Layers",
    items: ["Page Object Model (POM)", "Hybrid Web-to-Mobile", "Keyword-Driven", "BDD/Cucumber", "Code-Gen Engines"]
  },
  {
    category: "Platforms & OS",
    icon: "Monitor",
    items: ["Web Apps", "Mobile (Android & iOS Real/Sim)", "Windows Desktop", "REST API Services", "Safari, Chrome, Firefox"]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: ["AWS Secrets Manager", "Azure Key Vault", "BrowserStack", "Git & GitHub", "CI Integrated Engines"]
  },
  {
    category: "Specialized Capabilities",
    icon: "Wrench",
    items: ["Auto-Healing Locators", "OCR-based POS (Tesseract/OpenCV)", "OTP SMS/Email (Twilio)", "Shadow-DOM Elements", "JSON/Excel/PDF Parsers"]
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Engineer (SDET / Automation Engineer)",
    company: "Coforge",
    period: "Nov 2024 – Present",
    duration: "1 yr 8 mos",
    location: "Hyderabad, India",
    technologies: ["Playwright", "Python", "TypeScript", "Appium", "iOS Simulators", "AWS Secrets Manager", "Azure Key Vault", "Safari"],
    projects: ["Solstice (Playwright Python/TS)", "South West WorkTop (AWS Bedrock AI)", "M2A/Signet (OTP-less Auth)"],
    highlights: [
      "Architected custom Page Object Model code-generation frameworks in Python & TypeScript, reducing scripting effort by over 40% on enterprise client suites.",
      "Built a custom dynamic locator fallback and auto-healing engine that utilizes backup attributes to self-repair tests during runtime, preventing build failures due to minor DOM changes.",
      "Established end-to-end iOS automation pipelines supporting full session recording, simulator discovery, and parallel multi-device execution logs.",
      "Authored unified keyword libraries for SMS-OTP & Email-OTP retrieval via Twilio, simplifying multi-factor authentication tests across retail and hospitality projects.",
      "Engineered automated REST API code-gen pipelines linked to live Web recorder events for immediate hybrid coverage testing."
    ]
  },
  {
    role: "Associate Engineer",
    company: "Cigniti Technologies",
    period: "Feb 2024 – Nov 2024",
    duration: "10 mos",
    location: "Hyderabad, India",
    technologies: ["Java", "TestNG", "Selenium 4", "WinAppDriver", "C#", "Python", "OCR/Tesseract", "OpenCV"],
    projects: ["Pepco POS Validation", "Christies Hospitality", "Tosca Migrations"],
    highlights: [
      "Refactored the core automation engine using Factory patterns and a thread-safe InstaDriver wrapper, uniting Web, Mobile, and Windows execution in a single client interface.",
      "Constructed a multi-language test code-generator (Java, C#, Python) mapping keywords to robust executable scripts via an internal Feign client microservices engine.",
      "Designed and deployed a migration utility that parsed legacy Tricentis Tosca tests and compiled them directly into active platform scripts.",
      "Led Windows desktop automation and OCR POS verification utilizing Tesseract and OpenCV to parse receipts and verify text dynamically across multiple Eastern European languages.",
      "Solved complex element-access blockers including shadow-DOM access, programmatic scroll-until-visible, and custom iframe-switching routines."
    ]
  },
  {
    role: "Trainee → Intern",
    company: "Cigniti Technologies",
    period: "Jun 2023 – Feb 2024",
    duration: "10 mos",
    location: "Hyderabad, India",
    technologies: ["Cypress", "WebdriverIO", "Cucumber BDD", "Playwright", "Excel/PDF Automation Utilities"],
    projects: ["Nucor Utilities"],
    highlights: [
      "Gained comprehensive SDET and DevOps certifications, rotating across active projects utilizing Cypress, WebdriverIO, Cucumber, and Playwright.",
      "Created reusable helper files for Excel, JSON, and PDF text assertions, including custom JS-path routines to target hidden UI elements."
    ]
  }
];

export const certifications: CertificationItem[] = [
  { name: "SDET & DevOps Certification", issuer: "Cigniti Technologies Academy" },
  { name: "Core DevOps Skills: Moving Toward DevOps", issuer: "DevOps Alliance" },
  { name: "Mobile Interruption Testing and Charles Proxy", issuer: "Mobile Quality League" },
  { name: "Introducing Selenium & Locators", issuer: "Selenium Academy" },
  { name: "Mobile Testing Fundamentals", issuer: "Mobile Testing Association" }
];

export const achievements: AchievementItem[] = [
  {
    title: "Star Contributor of the Quarter",
    description: "Awarded by Cigniti leadership for outstanding delivery speeds and cross-project framework enhancements."
  },
  {
    title: "IBM Watson Chat Bot Integration",
    description: "Designed and built an intelligent, context-aware chatbot assistant for the honors undergraduate program."
  },
  {
    title: "Double Campus Ambassador",
    description: "Proud representative for NIT Warangal Technozion and IIT Hyderabad Elan & Nvision festivals."
  }
];

export const testScenarios: TestScenario[] = [
  {
    id: "auto-healing",
    name: "Auto-Healing Locator",
    description: "Simulates runtime recovery when a primary element identifier fails due to dynamic DOM updates.",
    steps: [
      "Initializing Test Session on: 'https://cx-portal.co/checkout'",
      "Action: Attempting to click button with selector: [id='pay-now-btn-v1']",
      "⚠️ Warning: Target element [id='pay-now-btn-v1'] not found in active DOM! (Status: Stale/Removed)",
      "⚡ System: Invoking Dynamic Locator Fallback & Auto-Healing Engine...",
      "System: Retrieving historical metadata records for target element...",
      "System: Scanning current DOM for matching fallback markers (tag='button', type='submit', text='Pay and Complete Order', class='btn-glow btn-success')",
      "✅ Match Found! Element path validated. Confidence Score: 98.4%",
      "🔧 Healed Selector: '//button[@type='submit' and contains(text(), 'Pay and Complete')]",
      "Action: Automatically updating test pointer cache for future runs",
      "Action: Click executed successfully. Session continued.",
      "🎉 Assert Passed: Checkout submission complete. Status: SUCCESS"
    ],
    codeSample: {
      language: "typescript",
      code: `// Custom Playwright Auto-Healing Wrapper Implementation
async function clickWithHealing(page: Page, selector: string, backupAttributes: ElementMetadata) {
  try {
    await page.click(selector, { timeout: 3000 });
  } catch (error) {
    console.warn(\`Primary selector '\${selector}' failed. Activating Auto-Healing Engine...\`);
    const healedXPath = await runAutoHealingAlgorithm(page, backupAttributes);
    if (healedXPath) {
      console.log(\`✅ Element successfully healed! Using XPath: \${healedXPath}\`);
      await page.click(healedXPath);
      await reportHealingEventToPlatform(selector, healedXPath, backupAttributes);
    } else {
      throw new Error(\`Auto-healing failed. Selector '\${selector}' could not be recovered.\`);
    }
  }
}`
    }
  },
  {
    id: "otp-retrieval",
    name: "OTP SMS Retrieval",
    description: "Simulates direct integration with Twilio SMS webhook to extract single-use verification tokens.",
    steps: [
      "Initializing Test Session on: 'https://security-verify.co/mfa'",
      "Action: Inputting credentials & triggering OTP dispatch to +12015550199",
      "System: Waiting 1500ms for carrier network relay...",
      "📞 System: Fetching Twilio message history queue via REST API...",
      "System: Filtering latest SMS received within last 30 seconds for number ending in 0199...",
      "✅ Received payload: 'Your Coforge Auth passcode is [ 948203 ]. Valid for 5 minutes.'",
      "System: Applying regex pattern extract: /\\b\\d{6}\\b/",
      "Parsed Token: '948203'",
      "Action: Injecting OTP token '948203' into input field [name='otp-code']",
      "Action: Clicking verify credentials button",
      "🎉 Assert Passed: Dashboard redirect detected. Status: authenticated"
    ],
    codeSample: {
      language: "java",
      code: `// Twilio API Retrieval Helper for Multi-Factor Verification
public String fetchLatestOTP(String accountSid, String authToken, String targetPhoneNumber) {
    Twilio.init(accountSid, authToken);
    ResourceSet<Message> messages = Message.reader()
        .setTo(new com.twilio.type.PhoneNumber(targetPhoneNumber))
        .limit(1)
        .read();
        
    if (messages.iterator().hasNext()) {
        String body = messages.iterator().next().getBody();
        Pattern pattern = Pattern.compile("\\\\b\\\\d{6}\\\\b");
        Matcher matcher = pattern.matcher(body);
        if (matcher.find()) {
            return matcher.group(0); // Returns extracted 6-digit OTP code
        }
    }
    throw new RuntimeException("OTP SMS not received within threshold time.");
}`
    }
  },
  {
    id: "code-gen",
    name: "Hybrid POM Code Generator",
    description: "Simulates automated test script compilation based on live user clicks and DOM traversal.",
    steps: [
      "System: Starting recorder proxy on port 3000...",
      "User Action: Navigating to 'https://travel-book.com/search'",
      "Intercepted DOM: Click event detected on <input name='destination' value='Hyderabad'>",
      "Intercepted DOM: Text entry detected on <button id='search-flights-submit'>",
      "⚡ System: Generating clean Page Object Model...",
      "System: Compiling class references, adding robust elements mappings with fallback definitions...",
      "System: Formatting using pre-configured ESLint rules...",
      "✅ Saved POM block to workspace: 'pages/searchFlightPage.ts'",
      "🎉 Script created successfully! Compilation: 100% Passed"
    ],
    codeSample: {
      language: "python",
      code: `# Generated Playwright Python Page Object Model
from playwright.sync_api import Page

class SearchFlightPage:
    def __init__(self, page: Page):
        self.page = page
        self.destination_input = page.locator("[name='destination']")
        self.submit_btn = page.locator("#search-flights-submit")

    def search_destination(self, city: str):
        self.destination_input.fill(city)
        self.submit_btn.click()
        self.page.wait_for_load_state("networkidle")`
    }
  }
];
