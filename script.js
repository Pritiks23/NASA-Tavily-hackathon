const topics = [
  "NASA Artemis Program",
  "James Webb Discoveries",
  "Mars Missions"
];

async function fetchTavilyNews(topic, apiKey) {
  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
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

async function loadDigest(apiKey) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (const topic of topics) {
    try {
      const newsHTML = await fetchTavilyNews(topic, apiKey);
      output.innerHTML += `<h2>${topic}</h2>${newsHTML}`;
    } catch (error) {
      output.innerHTML += `<h2>${topic}</h2><p>Error fetching news.</p>`;
    }
  }
}

const apiKey = prompt("Please enter your Tavily API key:");
if (apiKey) {
  loadDigest(apiKey);
} else {
  document.getElementById("output").innerText = "API key is required to fetch news.";
}

