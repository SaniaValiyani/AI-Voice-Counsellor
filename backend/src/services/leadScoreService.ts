export function calculateLeadScore(
  text: string
) {
  let score = 50;

  const hotKeywords = [
    "admission",
    "fees",
    "course",
    "college",
    "enroll",
  ];

  hotKeywords.forEach(
    (keyword) => {
      if (
        text
          .toLowerCase()
          .includes(keyword)
      ) {
        score += 10;
      }
    }
  );

  return Math.min(
    score,
    100
  );
}