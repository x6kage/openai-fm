import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { LibraryEntry } from "./types";
import {
  DEFAULT_VOICE,
  getLibrary,
} from "./library";

export type Language = "ja" | "en";

export const LANGUAGES: { id: Language; label: string }[] = [
  { id: "ja", label: "Japanese" },
  { id: "en", label: "English" },
];

export interface AppState {
  voice: string;
  language: Language;
  input: string;
  inputDirty: boolean;
  prompt: string;
  codeView: string;
  selectedEntry: LibraryEntry | null;
  latestAudioUrl: string | null;
}

const INITIAL_STATE: AppState = {
  voice: DEFAULT_VOICE,
  language: "ja",
  input: "",
  inputDirty: false,
  prompt: "",
  codeView: "py",
  selectedEntry: null,
  latestAudioUrl: null,
};

class AppStore {
  private store = create(immer(() => INITIAL_STATE));

  constructor() {
    this.store.setState((draft) => {
      const lib = getLibrary(draft.language);
      const first = Object.values(lib)[0];
      draft.selectedEntry = first;
      draft.input = first.input;
      draft.prompt = first.prompt;
    });
  }

  useState = this.store;
  setState = this.store.setState;
  getState = this.store.getState;
  subscribe = this.store.subscribe;
}

export const appStore = new AppStore() as Readonly<AppStore>;
