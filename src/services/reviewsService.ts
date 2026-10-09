import { supabase } from './supabase';
import type { ReviewEntry } from '@/data/reviews'

export const PAGE_SIZE = 20;

export async function fetchQuotes(lastId?: number): Promise<ReviewEntry[]> {
    let query = supabase
        .from('quotes')
        .select('*')
        .order('id', { ascending: false })
        .limit(PAGE_SIZE);

    if (lastId) {
        query = query.lt('id', lastId);
    }

    const { data, error } = await query;

    if (error) {
        throw error;
    }

    return data as ReviewEntry[];
}

export async function addQuote(review: ReviewEntry): Promise<ReviewEntry> {
    const { data, error } = await supabase
        .from('quotes')
        .insert({
            author: review.author.trim(),
            quote: review.quote.trim(),
            role: review.role.trim(),
            relationship: review.relationship.trim(),
            organization: review.organization.trim()
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data as ReviewEntry;
}