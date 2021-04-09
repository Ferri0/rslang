import { WordsService } from '../service';
import { Word } from '../types';

const wordsService = new WordsService();

const ctx = new AudioContext();
let audio: AudioBuffer;

const audioBuffer = async (url: string): Promise<void> => {
  try {
    const data = await wordsService.getSound(url);
    const arrayBuffer = await data.arrayBuffer();
    const decodeAudio = await ctx.decodeAudioData(arrayBuffer);
    audio = decodeAudio;
  } catch (error) {
    throw Error(error);
  }
};

export const playback = async (url: Word['audio']): Promise<void> => {
  audioBuffer(url);
  const ps = ctx.createBufferSource();
  ps.buffer = audio;
  ps.connect(ctx.destination);
  ps.start(ctx.currentTime);
};

// window.addEventListener('click', () => playback('files/01_0009.mp3'));
