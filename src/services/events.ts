import { supabase } from './supabaseClient';

export interface EventoDB {
  cdevento: number;
  cdtipoevento: number | null;
  nmevento: string | null;
  descricao: string | null;
  dtevento: string | null; // ISO date
  horaevento: string | null;
  enderecoevento: string | null;
  cdsociedade: number | null;
  imagemevento: string | null;
  ativo: boolean;
  created_at?: string | null;
  updated_at?: string | null;
}

export async function getEventos(includeInactive = false): Promise<EventoDB[]> {
  let query = supabase
    .from('eventos')
    .select('*')
    .order('dtevento', { ascending: true });

  if (!includeInactive) {
    // somente ativos
    query = query.eq('ativo', true);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Erro ao buscar eventos no Supabase:', error);
    throw error;
  }

  return (data as EventoDB[]) ?? [];
}

export interface TipoEventoDB {
  cdtipoevento: number;
  nmtipoevento: string;
  created_at?: string | null;
  updated_at?: string | null;
}

export async function getTiposEventos(): Promise<TipoEventoDB[]> {
  const { data, error } = await supabase
    .from('tipoevento')
    .select('*')
    .order('cdtipoevento', { ascending: true });

  if (error) {
    console.error('Erro ao buscar tipos de evento no Supabase:', error);
    throw error;
  }

  return (data as TipoEventoDB[]) ?? [];
}
