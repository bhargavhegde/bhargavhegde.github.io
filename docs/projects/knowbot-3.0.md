# KnowBot 3.0: Neural Knowledge Assistant

<div style="text-align: center; margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2);">
    High-fidelity, private RAG application with hybrid search, OCR, and autonomous web capabilities
  </p>
</div>

## Overview

KnowBot 3.0 is the evolution of the RAG-KnowBot, rebuilt for scalability and performance. It features a decoupled architecture with a Next.js frontend and a Django backend. It goes beyond simple RAG by incorporating hybrid search, autonomous web search, and OCR capabilities to provide a robust knowledge assistant.

## Key Features

- 🧠 **Advanced RAG Engine** - Combines Keyword Search (BM25) with Semantic Vector Search (ChromaDB) for superior accuracy. Includes intelligent context window management and auto-citations.
- 👁️ **Built-in OCR** - Automatically extracts text from scanned documents and images (PDF, PNG, JPG, TIFF) using Tesseract.
- 🌐 **Autonomous Web Search** - Integrated Tavily API for high-speed web search when local documents are insufficient, with smart fallback and query reformulation.
- 🎭 **Custom System Personas** - Define custom "System Prompts" to mold the AI's personality (e.g., Code Reviewer, Legal Analyst) and save them for reuse.
- 🖼️ **Modern UI** - Cinematic, 3D-styled interface with glassmorphism, gold accents, and smooth animations powered by Framer Motion.

## Technologies

### Frontend (Vercel)
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + Framer Motion
- **State**: React Context API

### Backend (Railway)
- **Framework**: Django REST Framework
- **Database**: PostgreSQL
- **Vector Store**: ChromaDB
- **Async Tasks**: Celery + Redis
- **LLM Engine**: LangChain + Ollama (Llama 3.1)

## Repository

🔗 **GitHub**: [KnowBot 3.0](https://github.com/bhargavhegde/KnowBot3.0)

---

## Related Projects

- [RAG-KnowBot](/projects/rag-knowbot)
- [All Projects](/projects)
