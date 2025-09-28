# 🛰️ NASA News Digest — Real-Time Space Intelligence via Tavily Search
<img width="1377" height="820" alt="Screen Shot 2025-09-28 at 10 45 31 AM" src="https://github.com/user-attachments/assets/b82ab092-1383-4213-b31f-c5f173d31094" />


## 🚀 Overview
 Try it out here: https://pritiks23.github.io/NASA-Tavily-hackathon/
Click below pink screen to watch video!
 [![Watch the video](https://img.youtube.com/vi/_R4YLjJNWec/0.jpg)](https://www.youtube.com/watch?v=_R4YLjJNWec)


NASA News Digest is a fully client-side, statically deployed web application that delivers real-time, topic-specific news summaries on NASA missions, discoveries, and technologies. Built using vanilla HTML, CSS, and JavaScript, and powered by the Tavily Search API, this project demonstrates how to construct a Retrieval-Augmented Generation (RAG)-inspired interface without relying on OpenAI, server infrastructure, or build tooling.

Designed for zero-backend deployment on GitHub Pages, the app prompts users for their Tavily API key at runtime, enabling secure credential handling without hardcoding secrets. It performs authenticated POST requests to Tavily’s `/search` endpoint with `topic="news"` and `time_range="day"` to retrieve fresh, relevant snippets for predefined queries such as “NASA Artemis Program”, “James Webb Discoveries”, and “Mars Missions”. These results are parsed, sanitized, and dynamically injected into the DOM using semantic HTML structure and responsive CSS layout.

This architecture showcases a zero-dependency, zero-server RAG interface that can be extended to support Tavily Extract for full-content retrieval, LangChain for structured output, or GPT-based summarization. It adheres to modern security principles by avoiding persistent secrets and leverages browser-native capabilities for UX and data flow.

---

## 🧠 Architecture

### System Design

```plaintext
User → Browser → Tavily API → NASA News → DOM Render
