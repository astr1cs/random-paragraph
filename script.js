const paragraph = [
  "Regular exercise is essential for maintaining a healthy lifestyle. It helps improve cardiovascular health by strengthening the heart and increasing blood circulation. Engaging in activities like running, swimming, or cycling can significantly reduce the risk of heart disease, which is one of the leading causes of death worldwide. Additionally, regular physical activity helps in maintaining healthy blood pressure levels and reduces bad cholesterol.",

  "Beyond physical health, exercise has profound effects on mental well-being. When you exercise, your body releases endorphins, which are chemicals in the brain that act as natural painkillers and mood elevators. This is why regular physical activity is often recommended as a natural remedy for stress, anxiety, and depression. It helps clear the mind, improves sleep patterns, and boosts overall mood.",

  "Another crucial benefit of exercise is its role in weight management. Physical activity burns calories, which helps prevent excess weight gain and maintain a healthy body weight. Combining regular exercise with a balanced diet is one of the most effective strategies for achieving and maintaining a healthy weight. Whether through high-intensity workouts or moderate activities like walking, the key is consistency.",

  "Exercise also plays a vital role in building and maintaining strong muscles and bones. Weight-bearing exercises, such as lifting weights or doing bodyweight exercises, help in building muscle mass and increasing bone density. This is particularly important as we age because it helps prevent conditions like osteoporosis, reduces the risk of fractures, and improves overall strength and balance.",

  "In addition to physical and mental health benefits, regular exercise can also improve cognitive function. Studies have shown that physical activity enhances brain function, sharpens memory, and even reduces the risk of cognitive decline as we age. This is because exercise increases blood flow to the brain, promotes the growth of new brain cells, and improves the overall efficiency of brain networks.",

  "Moreover, regular exercise contributes to a longer lifespan. People who engage in consistent physical activity tend to live longer and have a lower risk of chronic diseases such as type 2 diabetes, cancer, and cardiovascular diseases. The cumulative benefits of regular exercise, from improved heart health to better mental well-being, make it a critical component of a healthy lifestyle.",

  "Finally, exercise fosters social connections and improves quality of life. Participating in group activities, such as sports or fitness classes, provides opportunities to meet new people and build a supportive community. This social aspect of exercise can enhance motivation, making it more likely for individuals to stick with their fitness routines and enjoy the process.",
];

const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(arr) {
  let index = arr.length;
  let randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  }
  return arr;
}
function generate() {
  if (item.value == 0) {
    alert("The value can not be zero");
  } else if (item.value > paragraph.length) {
    const randomIndex = Math.floor(Math.random() * paragraph.length);
    dataContainer.innerHTML = `${paragraph[randomIndex]}`;
  } else {
    const shuffleParagraph = paragraph;
    shuffle(paragraph);
    const selectedParagaraph = shuffleParagraph.slice(0, item.value);
    const paragraphHTML = selectedParagaraph
      .map((paragraph) => `<p>${paragraph} </p>`)
      .join("");
    dataContainer.innerHTML = paragraphHTML;
  }
}
