interface SpeechRecognition
  extends EventTarget {
  start(): void;
  stop(): void;

  onresult:
    | ((event: any) => void)
    | null;
}

interface Window {
  SpeechRecognition: any;

  webkitSpeechRecognition: any;
}