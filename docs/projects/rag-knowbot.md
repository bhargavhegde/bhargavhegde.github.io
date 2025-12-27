# RAG-KnowBot: Personal RAG Chatbot

<div style="text-align: center; margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2);">
    Fully local, private knowledge chatbot using Retrieval-Augmented Generation for interacting with your documents
  </p>
</div>

## Overview

RAG-KnowBot is a privacy-first chatbot that allows you to query your own documents using Retrieval-Augmented Generation (RAG). The entire system runs offline, ensuring complete privacy and data security. It uses local LLMs and embeddings, making it perfect for sensitive documents and offline use cases.

## Key Features

- 🔒 **100% Local & Private** - All processing happens on your machine
- 📄 **Multi-format Support** - PDF, TXT, Markdown files
- 🔍 **Source Citations** - Every answer includes source document references
- 💾 **Persistent Vector Database** - Chroma DB for efficient document storage
- 🎨 **Customizable Prompts** - Tailor the AI's behavior to your needs
- 🛡️ **Hallucination Guardrails** - Built-in mechanisms to reduce false information
- 📤 **File Management** - Easy upload and deletion of documents

## Technologies

- **LLM**: Ollama with Llama 3.1 8B
- **Embeddings**: nomic-embed-text
- **Framework**: LangChain
- **Vector Database**: Chroma
- **UI**: Streamlit
- **Language**: Python

## How It Works

1. **Document Upload**: Upload your documents (PDF, TXT, Markdown)
2. **Embedding Generation**: Documents are processed and embedded using nomic-embed-text
3. **Vector Storage**: Embeddings are stored in Chroma vector database
4. **Query Processing**: When you ask a question:
   - Relevant document chunks are retrieved using semantic search
   - Context is passed to Llama 3.1 8B via Ollama
   - Response is generated with source citations
5. **Response Display**: Answer is shown with confidence scores and source references

## Use Cases

- 📚 **Research Papers**: Query academic papers and research documents
- 📝 **Personal Notes**: Search through your personal knowledge base
- 📖 **Documentation**: Navigate technical documentation quickly
- 🎓 **Study Assistant**: Ask questions about your study materials
- 💼 **Business Documents**: Query company documents privately

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/bhargavhegde/RAG-KnowBot.git
cd RAG-KnowBot

# Install dependencies
pip install -r requirements.txt

# Start Ollama and pull the model
ollama pull llama3.1:8b
ollama pull nomic-embed-text

# Run the application
streamlit run app.py
```

## Repository

🔗 **GitHub**: [RAG-KnowBot](https://github.com/bhargavhegde/RAG-KnowBot)

## Demo

🎥 **Demo Video**: [Watch 60-second silent walkthrough](https://github.com/bhargavhegde/RAG-KnowBot/raw/main/demo/knowbotDemo.webm)

## Screenshots

*Add your screenshots here showing the UI, document upload, query interface, and source citations*

---

## Related Projects

- [Low-Latency Sound Disambiguator](/projects/sound-disambiguator)
- [All Projects](/projects)

