export function getVoices() {
  const showVoices = () => {
    const voices = speechSynthesis.getVoices();

    console.log("Available Voices:", voices);

    console.table(
      voices.map((voice) => ({
        name: voice.name,
        lang: voice.lang,
      }))
    );
  };

  showVoices();

  speechSynthesis.onvoiceschanged = () => {
    showVoices();
  };
}