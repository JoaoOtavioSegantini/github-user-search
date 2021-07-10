export default function formatDate(date: Date): string {
  if (!date) return ''
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: "full"
  }).format(date)
}