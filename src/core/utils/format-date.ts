export default function formatDate(date: Date  ): string {
    return new Intl.DateTimeFormat('pt-BR', {
     dateStyle: "full"
    }).format(date)
  }