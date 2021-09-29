import './style.css'
import Alpine from 'alpinejs'
import { scales } from './scales.js'
import { patterns } from './patterns.js'

window.Alpine = Alpine;

function getRandomElement(a) {
  return getRandomElements(a, 1)[0];
}

function getRandomElements(a, n) {
  const shuffled = [...a].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

Alpine.data('data', () => ({
  available_keys: Object.keys(scales),
  selected_key: 'C',
  number_of_chords: 4,
  song: "",

  get songUrl() {
    return `irealbook://Chord Changes=Me=Medium Swing=${this.selected_key}=n=${this.song.replaceAll('\n', '')}`;
  },

  randomize() {
    this.selected_key = getRandomElement(this.available_keys);
    this.number_of_chords = Math.ceil(Math.random() * 6);
    this.submit();
  },
  submit() {
    const chords = getRandomElements(scales[this.selected_key], this.number_of_chords);

    this.song = "";
    chords.forEach(chord => {
      this.song += `[${chord}   | x  | x  | x  ]\n`;
    });

    this.song += "YYY";

    let pattern = getRandomElement(patterns[this.number_of_chords]);
    chords.forEach(chord => {
      pattern = pattern.replace('C', chord);
    });
    this.song += pattern;
  }
}));

Alpine.start()
