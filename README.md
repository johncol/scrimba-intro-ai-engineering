# Scrimba Intro to AI Engineering

A collection of AI engineering experiments and a Next.js application demonstrating various AI/ML concepts and implementations.

## 🚀 Main Application

The repository includes a **Next.js 15** application with a stock prediction feature:

- **Stock Predictions App** (`/app/stock-predictions/`): An interactive web application that uses AI to predict stock prices
  - Allows users to select up to 3 stock tickers
  - Integrates with financial APIs for real-time data
  - Provides AI-powered predictions (with a humorous disclaimer about reliability)
  - Built with React Server Components and modern Next.js patterns

## 🧪 AI Experiments

This repository serves as a learning playground for various AI/ML technologies and concepts:

### 🤖 OpenAI Experiments (`/experiments-openai/`)
- **Designing Good Prompts**: Examples of structured prompts using markdown and XML formatting
- **Image Generation**: DALL-E integration for AI image creation
- **Moderations API**: Content filtering and safety checks
- **Chain of Thought**: Advanced reasoning with JSON schema output
- **Pre-defined Prompts**: Template-based prompt engineering

### 🤗 Hugging Face Experiments (`/experiments-hugging-face/`)
- **Text Classification**: Sentiment analysis and content categorization
- **Text Translation**: Multi-language translation capabilities
- **Text-to-Speech**: Audio generation from text input
- **Basic Chat Completion**: Simple conversational AI interactions

### 🔍 Embeddings & Vector Search (`/experiments-embeddings/`)
- **Content Embedding**: Converting text to vector representations
- **Similarity Search**: Finding semantically similar content
- **Natural Language Responses**: Generating contextual answers
- **Supabase Integration**: Vector database storage and retrieval

### 📚 RAG (Retrieval-Augmented Generation) (`/experiment-RAG/`)
- **Document Chunking**: Breaking large documents into searchable pieces
- **Semantic Search**: Finding relevant document sections
- **Contextual Responses**: Generating answers based on retrieved content
- **Express.js Server**: RESTful API for RAG operations

### 🦙 Ollama Experiments (`/experiments-ollama/`)
- **Local LLM Integration**: Running open-source models locally
- **Express.js Web Interface**: Simple web UI for querying local models
- **Mistral Model**: Using the Mistral language model for chat completions

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **AI/ML**: OpenAI API, Hugging Face Inference, Supabase Vector DB
- **Local AI**: Ollama for local model inference
- **Styling**: CSS Modules for component-specific styling
- **Development**: ESLint, TypeScript configuration

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd scrimba-intro-ai-engineering
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your API keys:
   ```
   OPENAI_API_KEY=your_openai_key
   HUGGINGFACE_API_KEY=your_huggingface_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Explore the experiments**
   - Main app: `http://localhost:3000`
   - Stock predictions: `http://localhost:3000/stock-predictions`
   - Ollama server: `http://localhost:3000` (in experiments-ollama directory)

## 📁 Project Structure

```
├── app/                          # Next.js main application
│   ├── stock-predictions/        # Stock prediction feature
│   └── page.tsx                  # Homepage
├── experiments-openai/           # OpenAI API experiments
├── experiments-hugging-face/     # Hugging Face experiments
├── experiments-embeddings/       # Vector embeddings & search
├── experiment-RAG/               # RAG implementation
├── experiments-ollama/           # Local LLM experiments
└── public/                       # Static assets
```

## 🎯 Learning Objectives

This repository demonstrates:
- **Prompt Engineering**: Best practices for AI model interactions
- **Vector Databases**: Semantic search and similarity matching
- **RAG Systems**: Building context-aware AI applications
- **Local AI**: Running models without cloud dependencies
- **API Integration**: Working with multiple AI service providers
- **Modern Web Development**: Next.js, React, and TypeScript

## 🤝 Contributing

Feel free to explore the experiments, modify the code, and add your own AI engineering experiments. Each directory is self-contained and can be run independently.

## 📝 License

This project is for educational purposes. Please ensure you comply with the terms of service for any AI APIs you use.
