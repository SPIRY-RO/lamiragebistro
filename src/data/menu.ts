export type Category = 'toate' | 'clasice' | 'carne' | 'pui' | 'peste' | 'vegetariene';

export interface Pizza {
  nr: number;
  name: string;
  desc: string;
  p32: number;
  p40: number;
  tags: Exclude<Category, 'toate'>[];
  popular?: boolean;
}

export const PIZZE: Pizza[] = [
  { nr: 1, name: 'Clasica', desc: 'Sos roșii, șuncă Praga, măsline, ciuperci, mozzarella', p32: 42, p40: 60, tags: ['clasice', 'carne'] },
  { nr: 2, name: 'Capriciossa', desc: 'Sos roșii, șuncă Praga, ciuperci, ardei gras, mozzarella', p32: 46, p40: 62, tags: ['clasice', 'carne'] },
  { nr: 3, name: 'Carnivora', desc: 'Sos roșii, șuncă Praga, salam chorizo, cârnați, bacon, mozzarella', p32: 50, p40: 65, tags: ['carne'], popular: true },
  { nr: 4, name: 'Quattro Stagioni', desc: 'Sos roșii, șuncă Praga, salam chorizo, măsline, ciuperci, mozzarella', p32: 48, p40: 64, tags: ['clasice', 'carne'] },
  { nr: 5, name: 'Quattro Formaggi', desc: 'Mozzarella, gorgonzola, gran cucina, parmezan', p32: 46, p40: 62, tags: ['vegetariene'] },
  { nr: 6, name: 'Margherita', desc: 'Sos roșii, mozzarella, roșii cherry', p32: 40, p40: 55, tags: ['clasice', 'vegetariene'] },
  { nr: 7, name: 'Pui', desc: 'Sos roșii, pastramă pui, ardei gras, porumb, mozzarella', p32: 48, p40: 62, tags: ['pui'] },
  { nr: 8, name: 'Tonno', desc: 'Sos roșii, ton mărunțit, porumb, ceapă roșie, lămâie, mozzarella', p32: 46, p40: 55, tags: ['peste'] },
  { nr: 9, name: 'Hawaiiana', desc: 'Sos roșii, șuncă Praga, ananas, porumb, mozzarella', p32: 48, p40: 64, tags: ['carne'] },
  { nr: 10, name: 'Țărănească', desc: 'Sos roșii, șuncă Praga, cârnați, ciuperci, ceapă roșie, ardei gras, mozzarella', p32: 50, p40: 65, tags: ['carne'] },
  { nr: 11, name: 'Mirage', desc: 'Sos roșii, șuncă Praga, bacon, salam chorizo, măsline, ciuperci, ardei gras, mozzarella', p32: 50, p40: 65, tags: ['carne'], popular: true },
  { nr: 12, name: 'La Bulgaru', desc: 'Șuncă Praga, bacon, salam chorizo, măsline, mozzarella, parmezan', p32: 50, p40: 65, tags: ['carne'] },
  { nr: 13, name: 'Fantezie', desc: 'Gorgonzola, mozzarella, gran cucina, roșii uscate, mozzarella de bivoliță, prosciutto crudo, rucola, oțet balsamic, parmezan', p32: 50, p40: 70, tags: ['carne'], popular: true },
  { nr: 14, name: 'Neamțească', desc: 'Sos roșii, șuncă de pui, pastramă de pui, ardei gras, ceapă roșie, porumb, mozzarella', p32: 48, p40: 64, tags: ['pui'] },
  { nr: 15, name: 'Vegetariană', desc: 'Sos roșii, măsline, ciuperci, ardei gras, ceapă roșie, porumb, dovlecel verde, mozzarella', p32: 46, p40: 60, tags: ['vegetariene'] },
  { nr: 16, name: 'ASE', desc: 'Sos roșii, șuncă Praga, cârnați, măsline, extra mozzarella', p32: 50, p40: 65, tags: ['carne'] },
  { nr: 17, name: 'Diavolla', desc: 'Sos roșii, salam chorizo, peperoncini, mozzarella', p32: 46, p40: 64, tags: ['carne'] },
  { nr: 18, name: 'Curcănească', desc: 'Sos roșii, șuncă curcan, pastramă curcan, ciuperci, ardei gras, roșii cherry, mozzarella', p32: 50, p40: 65, tags: ['pui'] },
  { nr: 19, name: 'Cu ceafă de porc', desc: 'Sos roșii, ceafă de porc feliată, ceapă roșie, ardei gras, ciuperci, mozzarella, oregano', p32: 50, p40: 65, tags: ['carne'] },
  { nr: 20, name: 'Prosciutto e Funghi', desc: 'Sos roșii, șuncă Praga, ciuperci, mozzarella', p32: 46, p40: 62, tags: ['clasice', 'carne'] },
  { nr: 21, name: 'Anghinare', desc: 'Sos roșii, șuncă Praga, anghinare, mozzarella', p32: 44, p40: 60, tags: ['carne'] },
  { nr: 22, name: 'Cu creveți', desc: 'Sos roșii, creveți, mozzarella, file de somon afumat, sos pesto', p32: 50, p40: 65, tags: ['peste'], popular: true },
];

export interface FocacciaItem {
  nr: number;
  name: string;
  desc: string;
  price: number;
}

export const FOCACCE: FocacciaItem[] = [
  { nr: 23, name: 'Focaccia simplă', desc: 'Ulei de măsline', price: 20 },
  { nr: 24, name: 'Focaccia cu usturoi', desc: 'Ulei de măsline, usturoi', price: 20 },
  { nr: 25, name: 'Focaccia cu parmezan', desc: 'Ulei de măsline, usturoi, parmezan', price: 20 },
];

export const SOSURI: FocacciaItem[] = [
  { nr: 26, name: 'Sos de roșii dulce', desc: 'Porție 50 g', price: 4 },
  { nr: 27, name: 'Sos de roșii picant', desc: 'Porție 50 g', price: 4 },
  { nr: 28, name: 'Ketchup dulce', desc: 'Porție 50 g', price: 4 },
  { nr: 29, name: 'Ketchup picant', desc: 'Porție 50 g', price: 4 },
];

export const CATEGORII: { id: Category; label: string }[] = [
  { id: 'toate', label: 'Toate' },
  { id: 'clasice', label: 'Clasice' },
  { id: 'carne', label: 'Cu carne' },
  { id: 'pui', label: 'Cu pui' },
  { id: 'peste', label: 'Cu pește' },
  { id: 'vegetariene', label: 'Vegetariene' },
];

export const TELEFON = '0793 093 014';
export const TELEFON_LINK = 'tel:+40793093014';
export const ADRESA = 'Bulevardul Timișoara nr. 44A, București';
export const GOOGLE_MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('La Mirage Bistro, Bulevardul Timișoara 44A, București');
