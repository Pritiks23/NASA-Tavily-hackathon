const TAVILY_API_KEY = "your_tavily_api_key"; // Replace with your Tavily key

const topics = [
  "NASA Artemis Program",
  "James Webb Discoveries",
  "Mars Missions"
];

async function fetchTavilyNews(topic) {
  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TAVILY_API_KEY}`
    },
    body: JSON.stringify({
      query: topic,
      topic: "news",
      time_range: "day"
    })
  });

  const data = await response.json();
  return data.results.map(result => `
    <div class="news-item">
      <h3>${result.title}</h3>
      <p>${result.content}</p>
      <a href="${result.url}" target="_blank">Read more</a>
    </div>
  `).join("");
}

async function loadDigest() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (const topic of topics) {
    const newsHTML = await fetchTavilyNews(topic);
    output.innerHTML += `<h2>${topic}</h2>${newsHTML}`;
  }
}

loadDigest();
