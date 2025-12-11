# ChatWithPDF

An AI-powered PDF chatbot that allows you to have conversations with your PDF documents. Upload a PDF and ask questions about its content using natural language.

## Features

- 📄 Upload and process PDF documents
- 🤖 AI-powered chat interface
- 🔍 Intelligent document search and retrieval
- 💬 Natural language conversations about document content
- 🎨 Modern, responsive UI built with Next.js and Tailwind CSS
- ⚡ Fast and efficient document processing

## Tech Stack

### Backend
- **LangChain** - AI framework for document processing
- **LangGraph** - Workflow orchestration
- **TypeScript** - Type-safe development
- **ChromaDB** - Vector database for document embeddings
- **OpenAI** - Language model integration

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **React Hook Form** - Form handling

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ishanavasthi/ChatWithPDF.git
cd ChatWithPDF
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:

**Backend (.env):**
```bash
cp backend/.env.example backend/.env
```
Add your OpenAI API key and other required environment variables.

**Frontend (.env.local):**
```bash
cp frontend/.env.example frontend/.env.local
```

4. Start the development servers:
```bash
# Start both frontend and backend
yarn dev
```

Or start them separately:
```bash
# Backend (from backend directory)
cd backend && yarn dev

# Frontend (from frontend directory)  
cd frontend && yarn dev
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Upload a PDF document using the upload interface
3. Wait for the document to be processed and indexed
4. Start asking questions about your document in the chat interface
5. The AI will provide answers based on the content of your PDF

## Project Structure

```
ChatWithPDF/
├── backend/           # Backend API and AI processing
│   ├── src/
│   │   ├── ingestion_graph/   # Document processing workflows
│   │   ├── retrieval_graph/   # Question answering workflows
│   │   └── shared/            # Shared utilities
│   └── test_docs/     # Sample documents for testing
├── frontend/          # Next.js frontend application
│   ├── app/           # App router pages
│   ├── components/    # Reusable UI components
│   └── lib/           # Utility functions
└── scripts/           # Build and utility scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Ishan Avasthi** - [GitHub](https://github.com/ishanavasthi)

---

⭐ If you found this project helpful, please give it a star!