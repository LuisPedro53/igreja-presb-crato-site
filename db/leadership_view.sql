-- View: public.leadership_view
-- Combines pessoa, tipopessoa, pessoasociedade, pessoatiposociedade and sociedades
-- Use this view to fetch the main fields required by the frontend LeadershipSection

CREATE OR REPLACE VIEW public.leadership_view AS
SELECT
  p.cdpessoa,
  p.nmpessoa,
  p.fotopessoa,
  p.cdtipopessoa,
  tp.nmtipopessoa AS nmtipopessoa,

  ps.cdpessoasociedade,
  ps.cdpessoa AS fk_cdpessoa,
  ps.cdsociedade AS fk_cdsociedade,
  ps.dataentrada AS pessoa_sociedade_dataentrada,
  ps.cargo AS pessoa_sociedade_cargo,
  ps.cdpessoatiposociedade AS fk_cdpessoatiposociedade,
  ps.ativo AS pessoa_sociedade_ativo,

  pts.cdpessoatiposociedade AS cdpessoatiposociedade,
  pts.nmcargo AS nmpessoatiposociedade,

  s.cdsociedade,
  s.nmsociedade,
  p.ativo AS pessoa_ativo
FROM public.pessoa p
LEFT JOIN public.tipopessoa tp ON tp.cdtipopessoa = p.cdtipopessoa
LEFT JOIN public.pessoassociedade ps ON ps.cdpessoa = p.cdpessoa
LEFT JOIN public.pessoatiposociedade pts ON pts.cdpessoatiposociedade = ps.cdpessoatiposociedade
LEFT JOIN public.sociedades s ON s.cdsociedade = ps.cdsociedade;

-- Índices/privilegios: certifique-se que a role anon/public do Supabase tem SELECT nessa view
-- Para aplicar: cole o conteúdo deste arquivo no SQL Editor do Supabase ou rode com psql no banco:
-- psql "postgresql://<user>:<pass>@<host>:5432/<db>" -f db/leadership_view.sql

-- Observação: ajuste nomes de tabelas se sua base usar nomes diferentes (ex.: 'sociedade' em vez de 'sociedades').
