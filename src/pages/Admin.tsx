import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getWhatsAppNumbers, saveWhatsAppNumbers, type WhatsAppEntry } from "@/config/whatsapp";
import { useToast } from "@/hooks/use-toast";

const AdminPage = () => {
  const [entries, setEntries] = useState<WhatsAppEntry[]>(getWhatsAppNumbers);
  const { toast } = useToast();

  const handleChange = (id: string, value: string) => {
    const digits = value.replace(/\D/g, "");
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, number: digits } : e))
    );
  };

  const handleSave = () => {
    saveWhatsAppNumbers(entries);
    toast({
      title: "Salvo!",
      description: "Os números de WhatsApp foram atualizados em todo o site.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-extrabold text-foreground">Administração</h1>
          <p className="text-sm text-muted-foreground">Gerencie os números de WhatsApp do site</p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
          {entries.map((entry) => (
            <div key={entry.id} className="space-y-2">
              <Label>{entry.label}</Label>
              <Input
                value={entry.number}
                onChange={(e) => handleChange(entry.id, e.target.value)}
                placeholder="5511999999999"
              />
              <p className="text-xs text-muted-foreground">
                Link: https://wa.me/{entry.number}
              </p>
            </div>
          ))}

          <Button
            onClick={handleSave}
            className="w-full gradient-yellow text-primary-foreground py-5 font-bold rounded-full hover:opacity-90"
          >
            SALVAR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
