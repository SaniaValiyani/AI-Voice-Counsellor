export function analyzeSentiment(
  text: string
) {
  const positiveWords = [
    "happy",
    "excited",
    "great",
    "good",
  ];

  const negativeWords = [
    "sad",
    "confused",
    "worried",
    "stressed",
  ];

  let score = 0;

  positiveWords.forEach((word) => {
    if (
      text
        .toLowerCase()
        .includes(word)
    )
      score++;
  });

  negativeWords.forEach((word) => {
    if (
      text
        .toLowerCase()
        .includes(word)
    )
      score--;
  });

  if (score > 0)
    return "Positive";

  if (score < 0)
    return "Negative";

  return "Neutral";
}