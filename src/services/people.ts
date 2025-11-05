import { supabase } from './supabaseClient';

export interface PessoaDB {
  cdpessoa: number;
  nmpessoa: string | null;
  fotopessoa: string | null;
  cdtipopessoa?: number | null;
  ativo: boolean;
  telefone?: string | null;
  email?: string | null;
}

export interface PessoaSociedadeDB {
  id?: number;
  cdpessoa?: number;
  cdsociedade?: number;
  cdpessoatiposociedade?: number;
  pessoa?: PessoaDB | null;
  sociedade?: {
    cdsociedade?: number;
    nmsociedade?: string;
    acronimo?: string;
  } | null;
  pessoatiposociedade?: {
    cdpessoatiposociedade?: number;
    nmcargo?: string;
  } | null;
}

/**
 * Busca relacionamentos pessoa <-> sociedade.
 * Retorna um array de registros com `pessoa` e `sociedade` aninhados quando a tabela existir.
 * Se as tabelas não existirem ou ocorrer erro, retorna array vazio.
 */
export async function getPessoasSociedades(): Promise<PessoaSociedadeDB[]> {
  try {
    // Use the database view 'leadership_view' which flattens joins across tables
    const { data, error } = await supabase.from('leadership_view').select('*');

    if (error) {
      console.warn(
        'getPessoasSociedades: erro ao buscar leadership_view:',
        error.message
      );
      return [];
    }

    const rows = (data as any[]) ?? [];
    if (rows.length === 0) return [];

    // Map rows into the previous structure expected by the UI
    const mapped: PessoaSociedadeDB[] = rows.map((r) => ({
      id: r.cdpessoasociedade ?? undefined,
      cdpessoa: r.cdpessoa ?? undefined,
      cdsociedade: r.cdsociedade ?? r.fk_cdsociedade ?? undefined,
      cdpessoatiposociedade:
        r.cdpessoatiposociedade ?? r.fk_cdpessoatiposociedade ?? undefined,
      pessoa: {
        cdpessoa: r.cdpessoa,
        nmpessoa: r.nmpessoa,
        fotopessoa: r.fotopessoa,
        cdtipopessoa: r.cdtipopessoa,
        ativo: r.pessoa_ativo ?? true,
        telefone: r.telefone ?? null,
        email: r.email ?? null,
      },
      sociedade: {
        cdsociedade: r.cdsociedade ?? r.fk_cdsociedade,
        nmsociedade: r.nmsociedade,
        acronimo: r.sociedade_acronimo ?? undefined,
      },
      pessoatiposociedade: r.nmpessoatiposociedade
        ? {
            cdpessoatiposociedade: r.cdpessoatiposociedade,
            nmcargo: r.nmpessoatiposociedade,
          }
        : null,
    }));

    return mapped;
  } catch (err) {
    console.error('getPessoasSociedades catch:', err);
    return [];
  }
}
