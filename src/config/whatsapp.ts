import { supabase } from "@/integrations/supabase/client";

export interface WhatsAppEntry {
  id: string;
  label: string;
  number: string;
}

const DEFAULT_NUMBER = "5511977071469";

// Cache in memory to avoid repeated queries on every render
let cachedNumber: string | null = null;

export async function fetchWhatsAppNumber(): Promise<string> {
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("value")
      .eq("id", "whatsapp_principal")
      .single();
    if (error) throw error;
    cachedNumber = data.value;
    return data.value;
  } catch {
    return cachedNumber || DEFAULT_NUMBER;
  }
}

/** Synchronous getter – returns cached value or default */
export function getWhatsAppNumber(_id?: string): string {
  return cachedNumber || DEFAULT_NUMBER;
}

export async function fetchAllWhatsAppEntries(): Promise<WhatsAppEntry[]> {
  const { data, error } = await supabase
    .from("site_settings")
    .select("id, label, value")
    .like("id", "whatsapp_%");
  if (error || !data) {
    return [{ id: "whatsapp_principal", label: "Número Principal (Checkout e Obrigado)", number: DEFAULT_NUMBER }];
  }
  return data.map((row) => ({ id: row.id, label: row.label, number: row.value }));
}

export async function saveWhatsAppEntries(entries: WhatsAppEntry[]): Promise<void> {
  for (const entry of entries) {
    await supabase
      .from("site_settings")
      .update({ value: entry.number, updated_at: new Date().toISOString() })
      .eq("id", entry.id);
  }
  // Update cache
  const principal = entries.find((e) => e.id === "whatsapp_principal");
  if (principal) cachedNumber = principal.number;
}
