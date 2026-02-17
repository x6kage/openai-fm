"use client";
import React, { useState } from "react";
import {
  getLibrary,
  getRandomVoice,
  VOICES,
} from "../lib/library";
import { Block } from "./ui/Block";
import { Footer } from "./ui/Footer";

import { Header } from "./ui/Header";
import { DevMode } from "./ui/DevMode";

import { Shuffle, Star } from "./ui/Icons";
import { useBodyScrollable } from "@/hooks/useBodyScrollable";
import { Button, ButtonLED } from "./ui/Button";
import { appStore, LANGUAGES } from "@/lib/store";
import BrowserNotSupported from "./ui/BrowserNotSupported";

const EXPRESSIVE_VOICES = ["ash", "ballad", "cedar", "coral", "marin", "sage", "verse"];

export default function TtsPage() {
  const [devMode, setDevMode] = useState(false);
  const isScrollable = useBodyScrollable();

  return (
    <div
      data-scrollable={isScrollable}
      className="flex flex-col gap-x-3 min-h-screen px-5 pt-6 pb-32 md:pb-24 selection:bg-primary/20"
    >
      <Header devMode={devMode} setDevMode={setDevMode} />
      <Board devMode={devMode} />
      <Footer devMode={devMode} />
    </div>
  );
}

const Board = ({ devMode }: { devMode: boolean }) => {
  const voice = appStore.useState((state) => state.voice);
  const language = appStore.useState((state) => state.language);
  const input = appStore.useState((state) => state.input);
  const inputDirty = appStore.useState((state) => state.inputDirty);
  const prompt = appStore.useState((state) => state.prompt);
  const selectedEntry = appStore.useState((state) => state.selectedEntry);
  const browserNotSupported = appStore.useState(
    () => !("serviceWorker" in navigator)
  );

  const allPresets = Object.values(getLibrary(language));

  const handlePresetSelect = (name: string) => {
    const lib = getLibrary(language);
    const entry = lib[name];
    if (!entry) return;

    appStore.setState((draft) => {
      if (!inputDirty) {
        draft.input = entry.input;
      }

      draft.prompt = entry.prompt;
      draft.selectedEntry = entry;
      draft.latestAudioUrl = null;
    });
  };

  return (
    <main className="flex-1 flex flex-col gap-x-3 min-h-0 w-full max-w-(--page-max-width) mx-auto">
      {browserNotSupported && (
        <BrowserNotSupported
          open={browserNotSupported}
          onOpenChange={() => {}}
        />
      )}
      <div className="flex flex-row shrink-0">
        <Block title="Voice">
          <div className="grid grid-cols-12 gap-3">
            {VOICES.map((newVoice) => (
              <div
                key={newVoice}
                className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1 relative"
              >
                <Button
                  block
                  color="default"
                  onClick={() => {
                    appStore.setState((draft) => {
                      draft.voice = newVoice;
                      draft.latestAudioUrl = null;
                    });
                  }}
                  selected={newVoice === voice}
                  className="aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 xl:aspect-square min-h-[60px] max-h-[100px] flex-col items-start justify-between relative"
                >
                  <span>
                    {newVoice[0].toUpperCase()}
                    {newVoice.substring(1)}
                  </span>
                  <div className="absolute left-[0.93rem] bottom-[0.93rem]">
                    <ButtonLED />
                  </div>
                  {EXPRESSIVE_VOICES.includes(newVoice) && (
                    <div className="absolute right-[13px] bottom-[10.5px]">
                      <Star className="w-[12px] h-[12px]" />
                    </div>
                  )}
                </Button>
              </div>
            ))}
            <div className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
              <Button
                block
                color="neutral"
                onClick={() => {
                  const randomVoice = getRandomVoice(voice);
                  appStore.setState((draft) => {
                    draft.voice = randomVoice;
                    draft.latestAudioUrl = null;
                  });
                }}
                className="aspect-4/3 sm:aspect-2/1 lg:aspect-2.5/1 xl:aspect-square max-h-[100px]"
                aria-label="Select random voice"
              >
                <Shuffle />
              </Button>
            </div>
          </div>
        </Block>
      </div>
      <div className="flex flex-row shrink-0">
        <Block title="Language">
          <div className="flex gap-3">
            {LANGUAGES.map((lang) => (
              <Button
                key={lang.id}
                color="default"
                onClick={() => {
                  if (lang.id === language) return;
                  const lib = getLibrary(lang.id);
                  const first = Object.values(lib)[0];
                  appStore.setState((draft) => {
                    draft.language = lang.id;
                    draft.selectedEntry = first;
                    draft.input = first.input;
                    draft.prompt = first.prompt;
                    draft.inputDirty = false;
                    draft.latestAudioUrl = null;
                  });
                }}
                selected={lang.id === language}
                className="min-h-[44px] px-6"
              >
                <span>{lang.label}</span>
              </Button>
            ))}
          </div>
        </Block>
      </div>
      <div className="flex flex-1 flex-col md:flex-row gap-3 min-h-0">
        <Block title="Vibe" className="min-h-0 mb-0">
          <div className="flex flex-col gap-3 flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto rounded-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 p-1">
                {allPresets.map((entry) => (
                  <Button
                    key={entry.name}
                    block
                    color="default"
                    onClick={() => handlePresetSelect(entry.name)}
                    selected={selectedEntry?.name === entry.name}
                    className="min-h-[44px] py-2 pl-3 pr-7 items-center justify-start relative"
                  >
                    <span className="break-words text-[13px]">{entry.name}</span>
                    <div className="absolute right-[0.6rem] top-1/2 -translate-y-1/2">
                      <ButtonLED />
                    </div>
                  </Button>
                ))}
              </div>
            </div>
            {devMode && (
              <textarea
                id="vibe-prompt"
                rows={8}
                maxLength={999}
                className="w-full resize-none outline-none focus:outline-none bg-screen p-4 rounded-lg shadow-textarea text-[16px] md:text-[14px]"
                value={prompt}
                onChange={({ target }) => {
                  appStore.setState((draft) => {
                    draft.selectedEntry = null;
                    draft.prompt = target.value;
                    draft.latestAudioUrl = null;
                  });
                }}
              />
            )}
          </div>
        </Block>
        <Block title="Script" className="min-h-0 mb-0">
          <div className="relative flex flex-1 flex-col min-h-0 w-full">
            <textarea
              id="prompt"
              rows={8}
              maxLength={999}
              className="w-full flex-1 min-h-0 resize-none outline-none focus:outline-none bg-screen p-4 rounded-lg shadow-textarea text-[16px] md:text-[14px]"
              value={input}
              onChange={({ target }) => {
                const nextValue = target.value;

                appStore.setState((draft) => {
                  draft.inputDirty =
                    !!nextValue && selectedEntry?.input !== nextValue;
                  draft.input = nextValue;
                  draft.latestAudioUrl = null;
                });
              }}
            />
            {inputDirty && (
              <span
                className="absolute bottom-[-27px] sm:bottom-3 left-4 z-10 cursor-pointer uppercase hover:text-current/70 transition-colors"
                onClick={() => {
                  appStore.setState((draft) => {
                    draft.inputDirty = false;
                    draft.input = selectedEntry?.input ?? input;
                    draft.latestAudioUrl = null;
                  });
                }}
              >
                Reset
              </span>
            )}
            <span className="absolute bottom-3 right-4 z-10 opacity-30 hidden sm:block">
              {input.length}
            </span>
          </div>
        </Block>
      </div>
      {devMode && <DevMode />}
    </main>
  );
};
