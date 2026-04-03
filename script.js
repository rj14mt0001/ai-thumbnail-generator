function generateIdea() {
  const topic = document.getElementById("topic").value;

  const ideas = [
    `🔥 ${topic} - You Won't Believe This!`,
    `😱 ${topic} Gone Wrong!`,
    `🚀 ${topic} Pro Level Secrets`,
    `💀 ${topic} Biggest Mistake`,
  ];

  const random = ideas[Math.floor(Math.random() * ideas.length)];

  document.getElementById("output").innerHTML = `
    <h3>${random}</h3>
    <p>Colors: Red, Yellow, Black</p>
    <p>Hook: High contrast + Bold text</p>
  `;
}
