import pt from "@/messages/pt.json";
import en from "@/messages/en.json";

const messages = {
  pt,
  en,
};

export function getDictionary(locale: string) {
  if (locale === "en") {
    return messages.en;
  }

  return messages.pt;
}