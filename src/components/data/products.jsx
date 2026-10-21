import { Bot, Mic, FileSearch, Network, Cpu, Hammer, Code2, Briefcase, ClipboardCheck, BrainCircuit } from 'lucide-react';
import { EXTERNAL_LINKS, VIDEO_LINKS } from '@/config/links';

export const productsData = [
  {
    id: 'esds-ai',
    name: 'ESDS AI',
    description: 'A secure, private generative AI platform for ESDS. Interact with your enterprise data, generate code, summarize documents and automate workflows without data leaving your secure environment.',
    icon: Bot,
    badge: 'Generative AI',
    category: 'generative-ai',
    popularity: 100,
    releaseDate: '2024-01-01',
    tagline: 'Private Enterprise GenAI Platform',
    versionInfo: { current: 'Version 1.0 Completed', next: 'Version 2.0 Coming Soon' },
    color: '#003d7a', // Dark Blue
    highlights: [
      'Secure Enterprise Environment',
      'Advanced LLM Capabilities',
      'Code & Content Generation',
      'Internal Knowledge Base',
      'Context-Aware Responses'
    ],
    features: [
      { title: 'Conversational AI', desc: 'Human-like chat interface for queries and assistance' },
      { title: 'Code Generation', desc: 'Assist developers with code snippets and debugging' },
      { title: 'Document Summarization', desc: 'Upload and summarize long PDF/Word documents' },
      { title: 'Secure Environment', desc: 'Enterprise-grade security with no external data leakage' },
      { title: 'Knowledge Base', desc: 'Trained on internal ESDS documentation and processes' },
      { title: 'Multi-Model Support', desc: 'Switch between various LLM models as needed' }
    ],
    useCases: [
      'Internal Knowledge Search',
      'Coding Assistance',
      'HR & Policy Queries',
      'Content Creation',
      'Meeting Summaries'
    ],
    demoVideo: VIDEO_LINKS.esdsAiDemo,
    testimonials: [
      { quote: "ESDS AI has revolutionized how our dev team writes code. Productivity is up 40%.", author: "Rahul S., Tech Lead", role: "Engineering" },
      { quote: "The internal knowledge search is a game changer for onboarding new employees.", author: "Priya M., HR Director", role: "Human Resources" }
    ],
    caseStudies: [
      { title: "Automating Internal Support", desc: "How ESDS reduced internal ticket resolution time by 60% using ESDS AI." },
      { title: "Accelerating Development", desc: "A deep dive into AI-assisted coding at scale." }
    ],
    link: EXTERNAL_LINKS.esdsAiLogin
  },
  {
    id: 'presale-agentic-ai',
    name: 'Presale Agentic AI',
    description: 'An advanced agentic workflow for the presales team. Upload complex RFP/Tender documents and let the AI analyze requirements, flag risks and generate compliance matrices automatically.',
    icon: FileSearch,
    badge: 'RFP Analysis',
    category: 'agentic-ai',
    popularity: 95,
    releaseDate: '2024-02-20',
    tagline: 'Automated RFP & Tender Analysis',
    versionInfo: { current: 'Version 1.0 Completed', next: 'Version 2.0 Coming Soon' },
    color: '#654321', // Dark Brown
    highlights: [
      'Tender Document Parsing',
      'Automated Requirement Extraction',
      'Compliance & Risk Analysis',
      'Smart Summary Generation',
      'Q&A Automation'
    ],
    features: [
      { title: 'Document Parsing', desc: 'Ingest complex PDF/Word tender documents' },
      { title: 'Requirement Extraction', desc: 'Automatically list all technical and functional requirements' },
      { title: 'Risk Identification', desc: 'Flag clauses that are high-risk or non-compliant' },
      { title: 'Q&A Generation', desc: 'Auto-generate clarification questions for the buyer' },
      { title: 'Response Drafting', desc: 'Draft initial responses based on past proposals' },
      { title: 'Compliance Matrix', desc: 'Generate Excel-ready compliance sheets' }
    ],
    useCases: [
      'Government Tenders',
      'RFP Response Automation',
      'Contract Review',
      'Bid/No-Bid Analysis',
      'Competitor Analysis'
    ],
    demoVideo: VIDEO_LINKS.sharedDemo,
    testimonials: [
      { quote: "What used to take us 2 weeks now takes 2 days. The compliance matrix is spot on.", author: "Vikram R.", role: "VP Sales" },
      { quote: "We\'ve increased our bid submission rate by 3x since using this tool.", author: "Anjali S.", role: "Presales Head" }
    ],
    caseStudies: [
      { title: "Winning Government Tenders", desc: "How a leading IT firm improved their win rate by 25%." },
      { title: "Automating Compliance", desc: "Streamlining the RFP process for complex public sector projects." }
    ],
    link:'https://presales.esdsconnect.com/dashboard'
  },
  {
    id: 'llm-token-portal',
    name: 'LLM Powered\nOn-Prem Token Monitoring Portal',
    description: 'Real-time monitoring dashboard for your on-premise LLM infrastructure. Track inference speed, token usage, and system performance metrics.',
    icon: Cpu,
    badge: 'Infrastructure',
    status: 'Work Under Progress',
    category: 'infrastructure',
    popularity: 91,
    releaseDate: '2024-05-20',
    highlights: [
      'Real-time Performance Metrics',
      'Inference Speed Monitoring',
      'Token Usage Analytics',
      'Context Window Optimization',
      'Hardware Utilization Stats'
    ],
    link: EXTERNAL_LINKS.llmTokenPortal
  },
  {
    id: 'multi-agent-system',
    name: 'Single & Multi Agent System (MAS)',
    description: 'Deploy a squad of specialized AI agents that collaborate, brainstorm, and form dynamic task-forces to solve complex enterprise challenges in real-time. Watch as they negotiate, execute, and self-correct without human intervention.',
    icon: Network,
    badge: 'Agentic Workflow',
    category: 'agentic-ai',
    popularity: 88,
    releaseDate: '2024-06-01',
    tagline: 'Autonomous Enterprise Workforce',
    color: '#00897B', // Teal
    highlights: [
      'HR & Recruitment Agents',
      'Inventory Control Agents',
      'Vendor Management Bots',
      'Finance & Billing Agents',
      'Autonomous Orchestration'
    ],
    features: [
      { title: 'Dynamic Teams', desc: 'Agents autonomously form temporary task-forces based on problem complexity' },
      { title: 'Collaborative Brainstorming', desc: 'Multi-turn debate and solution refinement between agents' },
      { title: 'Live Interaction Map', desc: 'Visualize agent decision-making pathways and communication in real-time' },
      { title: 'Role Specialization', desc: 'Pre-trained personas for HR, Finance, Legal, and Operations' },
      { title: 'Self-Correction Loop', desc: 'Agents cross-verify outputs to ensure 99.9% accuracy' },
      { title: 'Human Handover', desc: 'Seamless escalation to human experts for critical decisions' }
    ],
    useCases: [
      'End-to-End Supply Chain',
      'Automated Audits',
      'Crisis Management',
      'Complex Project Planning',
      'Vendor Negotiations'
    ],
    demoVideo: VIDEO_LINKS.sharedDemo,
    testimonials: [
      { quote: "It\'s like having a 24/7 board of directors for every operational decision.", author: "Rajiv M.", role: "COO, Logistics Giant" },
      { quote: "The way the Finance and Legal agents debated the contract terms was indistinguishable from humans.", author: "Sarah L.", role: "Head of Procurement" }
    ],
    caseStudies: [
      { title: "Autonomous Logistics", desc: "Reducing delivery delays by 40% via real-time agent coordination." },
      { title: "Zero-Touch Auditing", desc: "Completing annual financial audits in hours instead of weeks." }
    ]
  },
  {
    id: 'esds-supermemory',
    name: 'ESDS Supermemory API & SDK',
    description: 'Supermemory gives your agents state-of-the-art memory, RAG, user profiles, connectors, and extractors - all built in. It is a persistent memory layer with extremely low latency that works with any model, enabling AI to maintain long-term context for more intelligent and personalized interactions.',
    icon: BrainCircuit,
    badge: 'AI Memory',
    category: 'infrastructure',
    popularity: 87,
    releaseDate: '2026-01-18',
    tagline: 'Context Engineering Infrastructure for your AI Agent',
    color: '#047857', // Emerald Green
    highlights: [
      'Share memory and learnings across different AI agents and apps.',
      'Model Agnostic Works with any LLM or AI model.',
      'Extremely low latency, works with any model'
    ],
    features: [
      { title: 'State-of-the-art Memory', desc: 'Persistent memory layer for long-term context.' },
      { title: 'Built-in RAG', desc: 'Retrieval-Augmented Generation out-of-the-box.' },
      { title: 'Cross-Application Memory', desc: 'Share memory and learnings across different AI agents and apps.' },
      { title: 'Connectors & Extractors', desc: 'Integrate with data sources and extract information effortlessly.' },
      { title: 'Extremely Low Latency', desc: 'Real-time memory access for responsive agents.' },
      { title: 'Model Agnostic', desc: 'Works with any LLM or AI model.' }
    ],
    useCases: [
      'AI Agent State Management',
      'Retrieval-Augmented Generation (RAG)',
      'Dynamic User Profiling',
      'Automated Data Extraction',
      'Multi-agent Collaboration'
    ],
    demoVideo: VIDEO_LINKS.sharedDemo,
    testimonials: [
      { quote: "Supermemory finally allows our agents to remember who our users are. It\'s a total game-changer.", author: "Jane D.", role: "AI Product Lead" },
      { quote: "The ability to maintain context across sessions has drastically reduced user frustration.", author: "John S.", role: "Lead Developer" }
    ],
    caseStudies: [
      { title: "Building a Truly Personal AI Tutor", desc: "How Supermemory helped an EdTech company create an adaptive learning experience." },
      { title: "Cross-Agent Collaboration", desc: "A look at how a team of AI agents uses a shared memory to solve complex problems." }
    ]
  },
  {
    id: 'esds-ai-voice',
    name: 'ESDS AI Voice',
    description: 'A comprehensive voice platform allowing seamless translation and speech synthesis. Select your source text language and target audio language to communicate effectively across regional boundaries.',
    icon: Mic,
    badge: 'Voice Intelligence',
    category: 'voice-intelligence',
    popularity: 85,
    releaseDate: '2024-03-15',
    tagline: 'Multilingual Text-to-Speech & Translation',
    color: '#2d5016', // Dark Green
    highlights: [
        'Multi-Language Text-to-Speech',
        'Regional Dialect Support',
        'Real-time Audio Synthesis',
        'Language Translation',
        'Natural Voice Output'
    ],
    features: [
      { title: 'Text-to-Speech', desc: 'Convert written text into natural-sounding audio' },
      { title: 'Language Translation', desc: 'Translate text between multiple Indian and Global languages' },
      { title: 'Cross-Language Audio', desc: 'Input English text, output Hindi/Marathi audio' },
      { title: 'Voice Customization', desc: 'Select from various male/female voice profiles' },
      { title: 'Audio Download', desc: 'Export generated audio for offline use' },
      { title: 'API Access', desc: 'Integrate voice capabilities into your apps' }
    ],
    useCases: [
      'Accessibility Features',
      'Localized Marketing Content',
      'IVR Systems',
      'Educational Content',
      'Regional Customer Support'
    ],
    demoVideo: VIDEO_LINKS.sharedDemo,
    testimonials: [
      { quote: "The regional dialects are incredibly accurate. It sounds just like a native speaker.", author: "Amit K.", role: "Product Manager" },
      { quote: "We expanded our reach to rural markets effortlessly with ESDS AI Voice.", author: "Sneha P.", role: "Marketing Head" }
    ],
    caseStudies: [
      { title: "Breaking Language Barriers", desc: "Enabling rural banking access through voice technology." },
      { title: "Localized Education", desc: "Delivering educational content in 12 regional languages." }
    ]
  },
  {
    id: 'bid-smart-ai',
    name: 'Bid Smart AI Agent',
    description: 'Intelligent PQ & TQ Analysis. Upload RFPs for instant Go/No-Go decisions based on Pre-Qualification and Technical Qualification criteria matching.',
    icon: Hammer,
    badge: 'Strategic Bidding',
    category: 'agentic-ai',
    popularity: 82,
    releaseDate: '2024-07-01',
    highlights: [
      'Automated PQ & TQ Checks',
      'Instant Go/No-Go Analysis',
      'Risk Assessment Scoring',
      'Requirement Matching',
      'Historical Win Probability'
    ]
  },
  {
    id: 'aipme',
    name: 'AI-Driven Project Management Engine (AIPME)',
    description: 'An intelligent automation engine that autonomously manages project activities—analyzing data, predicting risks, optimizing resources, and executing tasks.',
    icon: Briefcase,
    badge: 'Project Automation',
    category: 'agentic-ai',
    popularity: 75,
    releaseDate: '2024-10-01',
    highlights: [
      'Autonomous Project Execution',
      'Predictive Risk Analysis',
      'Intelligent Resource Allocation',
      'Automated Planning & Scheduling',
      'Continuous Learning Engine'
    ]
  },
  {
    id: 'etender-analyzer',
    name: 'E - Tender Analyzer',
    description: 'Analyze e-tender documents to extract key information, assess eligibility, and identify potential risks automatically.',
    icon: ClipboardCheck,
    badge: 'Tender Analysis',
    category: 'agentic-ai',
    popularity: 78,
    releaseDate: '2024-11-01',
    highlights: [
      'Automated Tender Parsing',
      'Eligibility Criteria Check',
      'Risk & Compliance Scoring',
      'Key Information Extraction',
      'Summary & Report Generation'
    ]
  },
  {
    id: 'codecraft-ai',
    name: 'CodeCraft Agentic AI',
    description: 'End-to-end software generation. Upload requirements to auto-generate user stories, frontend components, and backend. Select your preferred technology stack for a customized build.',
    icon: Code2,
    badge: 'Dev Acceleration',
    category: 'generative-ai',
    popularity: 80,
    releaseDate: '2024-08-15',
    highlights: [
      'Requirement to User Stories',
      'Full Stack Code Generation',
      'Custom Technology Stack',
      'Automated Unit Testing'
    ]
  },
];

export const products = productsData.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});