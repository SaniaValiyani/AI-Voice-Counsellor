function getVoice(language: string) {
  const voices =
    speechSynthesis.getVoices();

  if (language === "Hindi") {
    return voices.find(
      (voice) =>
        voice.name.includes(
          "Google हिन्दी"
        )
    );
  }

  if (language === "English") {
    return voices.find(
      (voice) =>
        voice.name.includes(
          "Google UK English Female"
        )
    );
  }

  return null;
}

export function speakText(
  text: string,
  language: string
) {
  speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  const voice =
    getVoice(language);

  if (voice) {
    utterance.voice = voice;
  }

  if (language === "English")
    utterance.lang = "en-IN";

  if (language === "Hindi")
    utterance.lang = "hi-IN";

  if (language === "Gujarati")
    utterance.lang = "gu-IN";

  if (language === "Marathi")
    utterance.lang = "mr-IN";

  utterance.rate = 0.95;
  utterance.pitch = 1;

  speechSynthesis.speak(
    utterance
  );
}


export function stopSpeaking() {
  speechSynthesis.cancel();
}