
CREATE TABLE public.site_settings (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site settings"
ON public.site_settings FOR SELECT
USING (true);

CREATE POLICY "Anyone can update site settings"
ON public.site_settings FOR UPDATE
USING (true);

CREATE POLICY "Anyone can insert site settings"
ON public.site_settings FOR INSERT
WITH CHECK (true);

INSERT INTO public.site_settings (id, label, value) VALUES
  ('whatsapp_principal', 'Número Principal (Checkout e Obrigado)', '5511977071469');
