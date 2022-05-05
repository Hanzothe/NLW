import { CloseButton } from "../closeButton";
import bugImageUrl from "../../assets/bug.png";
import ideaImageUrl from "../../assets/idea.png";
import otherImageUrl from "../../assets/other.png";
import { useState } from "react";
import { Key } from "phosphor-react";
import { FeedBackTypeStep } from "./steps/feedbacktypestep";
import { FeedBackContentStep } from "./steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "imagem de uma nuvem",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vm-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedBackContentStep feedbackType={feedbackType} />
      )}
    </div>
  );
}
