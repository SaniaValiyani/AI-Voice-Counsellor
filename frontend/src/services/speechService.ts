export function speakText(
  text: string,
  language: string
) {
  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  if (language === "English")
    utterance.lang = "en-IN";

  if (language === "Hindi")
    utterance.lang = "hi-IN";

  if (language === "Gujarati")
    utterance.lang = "gu-IN";

  if (language === "Marathi")
    utterance.lang = "mr-IN";

  utterance.rate = 1;

  utterance.pitch = 1;

  utterance.onstart = () => {
    console.log(
      "Speaking..."
    );
  };

  utterance.onend = () => {
    console.log(
      "Finished speaking"
    );
  };

  speechSynthesis.speak(
    utterance
  );
}

export function stopSpeaking() {
  speechSynthesis.cancel();
}