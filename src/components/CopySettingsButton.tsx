import { Copy, Check } from "./ui/Icons";
import { Button } from "./ui/Button";
import { copyText } from "../lib/copyText";
import { appStore } from "@/lib/store";
import { useCopiedDelay } from "@/hooks/useCopiedDelay";

export const CopySettingsButton = () => {
  const { copied, trigger } = useCopiedDelay();

  const handleCopy = () => {
    if (copied) return;

    const { voice, language, prompt, input } = appStore.getState();

    const langLabel = language === "ja" ? "Japanese" : "English";

    const text = [
      `Voice: ${voice}`,
      `Language: ${langLabel}`,
      ``,
      `Vibe:`,
      prompt,
    ].join("\n");

    copyText(text);
  };

  return (
    <Button
      color="secondary"
      onClick={() => {
        if (copied) return;
        trigger();
        handleCopy();
      }}
    >
      {copied ? (
        <span className="h-full flex gap-2 items-center justify-center">
          <Check />
          <span className="uppercase hidden md:inline pr-3">Copied</span>
        </span>
      ) : (
        <span className="flex gap-2 items-center justify-center">
          <Copy />
          <span className="uppercase hidden md:inline pr-3">Copy Settings</span>
        </span>
      )}
    </Button>
  );
};
