import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Database, Webhook, Puzzle, AppWindow } from 'lucide-react';
import DetailPopup from './DetailPopup';

const details = {
  application: {
    title: 'Your Application',
    description: 'The starting point. This can be any AI-powered application you build, such as a customer service chatbot, an internal knowledge base agent, or a complex data analysis tool.',
    docs: 'Your application integrates with Supermemory via the SDK. The primary role is to collect contextual data from user interactions and pass it to the memory layer. When your application needs to recall information to provide a personalized or context-aware response, it queries the Supermemory API through the SDK.',
    code: `import { supermemory } from './sdk';\n\nasync function handleUserQuery(userId, query) {\n  // Store the user\'s query for future context\n  await supermemory.store(userId, { query });\n\n  // Retrieve past context to inform the response\n  const context = await supermemory.retrieve(userId, { last: 5 });\n\n  // Generate a response using the retrieved context\n  const response = generateResponse(query, context);\n  return response;\n}`
  },
  sdk: {
    title: 'Supermemory SDK',
    description: 'A lightweight, easy-to-use Software Development Kit that simplifies communication between your application and the Supermemory API.',
    docs: 'The SDK provides simple, high-level functions like store(), retrieve(), and delete(). It handles API authentication, request formatting, and error handling, allowing you to focus on your application logic instead of boilerplate API code. It is available in multiple languages.',
    code: `// Javascript SDK Example\nimport { SupermemoryClient } from '@esds/supermemory-sdk';\n\nconst supermemory = new SupermemoryClient({ apiKey: 'YOUR_API_KEY' });\n\n// Storing data is a simple function call\nawait supermemory.store('user_123', { preference: 'dark_mode' });\n\n// Retrieving it is just as easy\nconst memory = await supermemory.retrieve('user_123');\nconsole.log(memory); // { preference: 'dark_mode' }`
  },
  api: {
    title: 'Supermemory API',
    description: 'The core RESTful API that serves as the gateway to the memory database. It receives requests from the SDK and performs the necessary CRUD operations.',
    docs: 'The API is built on standard HTTP methods. It includes endpoints for storing data (POST /memory), retrieving data (GET /memory/{userId}), searching data (GET /memory/{userId}/search), and deleting data (DELETE /memory/{userId}). All endpoints are secured and require authentication.',
    code: `### API Endpoint: POST /v1/memory\n\n{\n  "userId": "user_abc",\n  "payload": {\n    "last_login": "2024-05-21T10:00:00Z",\n    "viewed_product": "prod_xyz"\n  },\n  "metadata": {\n    "source": "webapp"\n  }\n}`
  },
  database: {
    title: 'Memory Database',
    description: 'A high-performance, scalable, and secure database optimized for storing and retrieving contextual data for AI applications.',
    docs: 'The database uses a combination of document-based storage for flexibility and vector storage for advanced semantic search capabilities. It is designed for low-latency reads and writes, ensuring your AI can access memory in real-time. Data is encrypted at rest and in transit.',
    code: `// Schema for a Memory Record (Simplified)\n{\n  _id: ObjectId('...'),\n  userId: 'user_123',\n  createdAt: ISODate('...'),\n  payload: { \n    // Flexible JSON data \n  },\n  payload_vector: [0.12, 0.54, ...], // For semantic search\n  metadata: { ... }\n}`
  },
  shared_context: {
    title: 'Shared Context',
    description: 'The powerful outcome of a centralized memory layer, enabling multiple, distinct AI agents to share knowledge and maintain a consistent state.',
    docs: 'When Agent A stores a piece of information (e.g., a user\'s preference), Agent B can instantly access that same information without needing a direct connection to Agent A. This is because both agents are connected to the same underlying Memory Database via the Supermemory API. This prevents redundant questions and creates a seamless, intelligent user experience across different touchpoints.',
    code: `// Agent A (Sales Bot)\nawait supermemory.store('user_456', { interest: 'Product B' });\n\n// --- Later, in a different application ---\n\n// Agent B (Support Bot)\nconst userMemory = await supermemory.retrieve('user_456');\nif (userMemory.interest === 'Product B') {\n  console.log('User is interested in Product B. Offer relevant support.');\n}`
  },
};

const Box = ({ icon: Icon, title, description, color, className, onClick }) => (
  <motion.div 
    className={`p-6 rounded-xl border bg-white/50 backdrop-blur-sm shadow-lg flex flex-col items-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
  >
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4`} style={{ borderColor: color, backgroundColor: `${color}20` }}>
      <Icon className="w-8 h-8" style={{ color }} />
    </div>
    <h3 className="font-bold text-slate-800">{title}</h3>
    <p className="text-xs text-slate-500 mt-1">{description}</p>
  </motion.div>
);

const Arrow = ({ className, delay = 0.2 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`flex-1 flex items-center justify-center ${className}`}
    >
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 0.5
          }}
        >
            <ArrowRight className="w-8 h-8 text-slate-400" />
        </motion.div>
    </motion.div>
);

export default function SupermemoryArchitecture() {
  const themeColor = '#047857'; // Emerald Green from product card
  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">Architecture</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-4">
                    How ESDS Supermemory Works
                </h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                    A universal, persistent memory layer that integrates seamlessly with your AI applications.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">
                <Box icon={AppWindow} title="Your Application" description="Chatbot, Agent, etc." color="#4B5563" onClick={() => setSelectedDetail(details.application)} />
                <Arrow delay={0.3} />
                <Box icon={Puzzle} title="Supermemory SDK" description="Easy integration" color={themeColor} onClick={() => setSelectedDetail(details.sdk)} />
                <Arrow delay={0.6} />
                <Box icon={Webhook} title="Supermemory API" description="RESTful Endpoints" color={themeColor} onClick={() => setSelectedDetail(details.api)} />
                <Arrow delay={0.9} />
                <Box icon={Database} title="Memory Database" description="Scalable & Secure Storage" color={themeColor} onClick={() => setSelectedDetail(details.database)} />
            </div>

            <div className="mt-16 text-center">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-3 bg-white px-10 py-5 rounded-full shadow-md border relative cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => setSelectedDetail(details.shared_context)}>
                        <Box icon={AppWindow} title="AI Agent A" description="e.g. Sales Bot" color="#4B5563" className="p-3 shadow-none border-none bg-transparent" onClick={(e) => {e.stopPropagation(); setSelectedDetail(details.application)}}/>
                        
                        <motion.div
                            className="text-slate-400"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight />
                        </motion.div>

                        <div className="flex flex-col items-center px-4">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <BrainCircuit className="w-10 h-10 text-emerald-600 mb-2"/>
                            </motion.div>
                            <h3 className="font-bold text-slate-800">Shared Context</h3>
                        </div>

                        <motion.div
                            className="text-slate-400"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <ArrowRight />
                        </motion.div>

                        <Box icon={AppWindow} title="AI Agent B" description="e.g. Support Bot" color="#4B5563" className="p-3 shadow-none border-none bg-transparent" onClick={(e) => {e.stopPropagation(); setSelectedDetail(details.application)}}/>
                    </div>
                    <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
                       The centralized memory layer allows different applications or agents to share context, leading to more cohesive and intelligent user experiences.
                    </p>
                </motion.div>
            </div>
        </div>
        <DetailPopup detail={selectedDetail} onClose={() => setSelectedDetail(null)} />
    </section>
  );
}