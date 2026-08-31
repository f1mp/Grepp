declare module 'soundfont-player' {
  const Soundfont: {
    instrument: (context: AudioContext, name: string, options?: Record<string, unknown>) => Promise<{
      play: (note: number | string, when?: number, options?: Record<string, unknown>) => { stop: (when?: number) => void };
      stop: () => void;
    }>;
  };
  export default Soundfont;
}
