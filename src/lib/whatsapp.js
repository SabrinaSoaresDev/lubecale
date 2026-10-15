import { PRICE_PER_KG, WHATSAPP_RAW, PICKUP_INFO, brl, kgFmt } from '@/data/menu';

export function buildWhatsAppLink(items, { name = '', notes = '', date = '', time = '' } = {}) {
  const lines = ['Olá, Lubecale! Quero fazer um pedido:', ''];
  let total = 0;
  let totalKg = 0;

  items.forEach((it, i) => {
    total += it.price;
    totalKg += it.kg;
    lines.push(`${i + 1}) Bolo artesanal — ${kgFmt(it.kg)}`);
    lines.push(`   Recheio: ${it.recheio}`);
    lines.push(`   Cobertura: ${it.cobertura}`);
    lines.push(`   Valor: ${brl(it.price)}`);
    lines.push('');
  });

  lines.push(`Total: ${brl(total)} (${kgFmt(totalKg)} no total)`);
  lines.push('');
  lines.push(`📦 ${PICKUP_INFO.short}`);
  if (date) lines.push(`📅 Retirada: ${formatDate(date)}${time ? ` às ${time}` : ''}`);
  if (name.trim()) lines.push(`👤 Nome: ${name.trim()}`);
  if (notes.trim()) lines.push(`📝 Observações: ${notes.trim()}`);

  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export { PRICE_PER_KG };