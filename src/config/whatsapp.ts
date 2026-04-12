const STORAGE_KEY = "whatsapp_numbers";

export interface WhatsAppEntry {
  id: string;
  label: string;
  number: string;
}

const defaultNumbers: WhatsAppEntry[] = [
  {
    id: "principal",
    label: "Número Principal (Checkout e Obrigado)",
    number: "5511977071469",
  },
];

export function getWhatsAppNumbers(): WhatsAppEntry[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultNumbers;
}

export function getWhatsAppNumber(id: string): string {
  const entries = getWhatsAppNumbers();
  return entries.find((e) => e.id === id)?.number || defaultNumbers[0].number;
}

export function saveWhatsAppNumbers(entries: WhatsAppEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
