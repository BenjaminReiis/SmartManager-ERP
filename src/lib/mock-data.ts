export const revenueByHour = [
  { hora: "8h", valor: 850 },
  { hora: "10h", valor: 2100 },
  { hora: "12h", valor: 6400 },
  { hora: "14h", valor: 8900 },
  { hora: "16h", valor: 4200 },
  { hora: "18h", valor: 9800 },
  { hora: "20h", valor: 12850 },
];

export const customerFlow = [
  { hora: "8h", clientes: 12 },
  { hora: "10h", clientes: 34 },
  { hora: "12h", clientes: 168 },
  { hora: "14h", clientes: 142 },
  { hora: "16h", clientes: 58 },
  { hora: "18h", clientes: 176 },
  { hora: "20h", clientes: 195 },
];

export const topProducts = [
  { nome: "Pizza Margherita", vendas: 128 },
  { nome: "Hambúrguer Artesanal", vendas: 96 },
  { nome: "Refrigerante 350ml", vendas: 72 },
  { nome: "Batata Rústica", vendas: 54 },
  { nome: "Salada Caesar", vendas: 38 },
];

export const wasteByMonth = [
  { mes: "Jan", kg: 42 },
  { mes: "Fev", kg: 38 },
  { mes: "Mar", kg: 51 },
  { mes: "Abr", kg: 33 },
  { mes: "Mai", kg: 27 },
  { mes: "Jun", kg: 22 },
  { mes: "Jul", kg: 18 },
];

export type EmployeeStatus = "trabalhando" | "pausa" | "folga" | "ferias";

export const employees = [
  { id: 1, nome: "João Silva", cargo: "Chef de Cozinha", status: "trabalhando" as EmployeeStatus, entrada: "08:00", saida: "—", horas: "9h40", banco: "+12h20", saldo: "+1h40", ferias: "15 dias", folgas: 2, telefone: "(11) 98765-4321", cpf: "123.456.789-00", contratacao: "12/03/2022" },
  { id: 2, nome: "Maria Santos", cargo: "Garçonete", status: "trabalhando" as EmployeeStatus, entrada: "10:00", saida: "—", horas: "7h20", banco: "+3h10", saldo: "-40min", ferias: "30 dias", folgas: 1, telefone: "(11) 91234-5678", cpf: "234.567.890-11", contratacao: "05/08/2023" },
  { id: 3, nome: "Lucas Ferreira", cargo: "Auxiliar de Cozinha", status: "pausa" as EmployeeStatus, entrada: "09:00", saida: "—", horas: "6h00", banco: "+1h00", saldo: "0h", ferias: "10 dias", folgas: 0, telefone: "(11) 99876-1234", cpf: "345.678.901-22", contratacao: "20/01/2024" },
  { id: 4, nome: "Pedro Almeida", cargo: "Bartender", status: "trabalhando" as EmployeeStatus, entrada: "16:00", saida: "—", horas: "3h20", banco: "+8h30", saldo: "+20min", ferias: "22 dias", folgas: 3, telefone: "(11) 92345-6789", cpf: "456.789.012-33", contratacao: "10/06/2021" },
  { id: 5, nome: "Ana Costa", cargo: "Gerente de Salão", status: "folga" as EmployeeStatus, entrada: "—", saida: "—", horas: "—", banco: "+22h00", saldo: "—", ferias: "30 dias", folgas: 1, telefone: "(11) 93456-7890", cpf: "567.890.123-44", contratacao: "02/02/2020" },
  { id: 6, nome: "Rafael Souza", cargo: "Entregador", status: "trabalhando" as EmployeeStatus, entrada: "11:00", saida: "—", horas: "8h15", banco: "-2h30", saldo: "+15min", ferias: "8 dias", folgas: 0, telefone: "(11) 94567-8901", cpf: "678.901.234-55", contratacao: "15/09/2023" },
  { id: 7, nome: "Camila Rocha", cargo: "Caixa", status: "trabalhando" as EmployeeStatus, entrada: "07:30", saida: "—", horas: "9h50", banco: "+5h40", saldo: "+1h50", ferias: "18 dias", folgas: 2, telefone: "(11) 95678-9012", cpf: "789.012.345-66", contratacao: "22/11/2022" },
  { id: 8, nome: "Bruno Lima", cargo: "Pizzaiolo", status: "ferias" as EmployeeStatus, entrada: "—", saida: "—", horas: "—", banco: "+0h00", saldo: "—", ferias: "Em férias", folgas: 0, telefone: "(11) 96789-0123", cpf: "890.123.456-77", contratacao: "01/07/2019" },
];

export const contasPagar = [
  { fornecedor: "Ultragaz", vencimento: "Hoje", valor: 780, status: "pendente" },
  { fornecedor: "Enel Distribuição", vencimento: "10/07", valor: 2380, status: "pago" },
  { fornecedor: "Vivo Internet", vencimento: "05/07", valor: 180, status: "pago" },
  { fornecedor: "Sadia — carnes", vencimento: "Amanhã", valor: 4520, status: "pendente" },
  { fornecedor: "Coca-Cola FEMSA", vencimento: "15/07", valor: 1240, status: "pendente" },
  { fornecedor: "Aluguel do imóvel", vencimento: "20/07", valor: 8500, status: "pendente" },
];

export const estoque = [
  { produto: "Queijo Mussarela", quantidade: "8 kg", minimo: "10 kg", status: "critico" },
  { produto: "Tomate italiano", quantidade: "32 kg", minimo: "15 kg", status: "normal" },
  { produto: "Refrigerante 350ml", quantidade: "12 cx", minimo: "5 cx", status: "normal" },
  { produto: "Farinha 00", quantidade: "45 kg", minimo: "20 kg", status: "normal" },
  { produto: "Carne bovina", quantidade: "4 kg", minimo: "12 kg", status: "critico" },
  { produto: "Azeite extravirgem", quantidade: "18 L", minimo: "8 L", status: "normal" },
  { produto: "Batata inglesa", quantidade: "22 kg", minimo: "20 kg", status: "atencao" },
  { produto: "Cerveja artesanal", quantidade: "60 grf", minimo: "24 grf", status: "normal" },
];

export const desperdicio = [
  { produto: "Tomate", quantidade: "4 kg", motivo: "Estragou", data: "12/07" },
  { produto: "Carne bovina", quantidade: "2 kg", motivo: "Validade vencida", data: "11/07" },
  { produto: "Alface", quantidade: "1.5 kg", motivo: "Murchou", data: "10/07" },
  { produto: "Pão de hambúrguer", quantidade: "12 un", motivo: "Queimado", data: "09/07" },
  { produto: "Queijo prato", quantidade: "0.8 kg", motivo: "Contaminação", data: "08/07" },
];

export const cardapio = [
  { nome: "Pizza Margherita", categoria: "Pizzas", preco: 48.9, tempo: "25 min", disponivel: true, ingredientes: "Molho, mussarela, manjericão, tomate" },
  { nome: "Hambúrguer Artesanal", categoria: "Lanches", preco: 36.5, tempo: "15 min", disponivel: true, ingredientes: "Blend 180g, cheddar, bacon, brioche" },
  { nome: "Salada Caesar", categoria: "Saladas", preco: 28.0, tempo: "8 min", disponivel: true, ingredientes: "Alface, frango, croutons, parmesão" },
  { nome: "Risoto de Funghi", categoria: "Massas", preco: 54.0, tempo: "22 min", disponivel: false, ingredientes: "Arroz arbóreo, funghi porcini, parmesão" },
  { nome: "Batata Rústica", categoria: "Acompanhamentos", preco: 22.0, tempo: "12 min", disponivel: true, ingredientes: "Batata, alecrim, alho, azeite" },
  { nome: "Tiramisu", categoria: "Sobremesas", preco: 24.5, tempo: "5 min", disponivel: true, ingredientes: "Mascarpone, café, cacau, biscoito" },
];

export const notificacoes = [
  { id: 1, tipo: "alerta", titulo: "Estoque crítico", mensagem: "Queijo mussarela abaixo do mínimo (8kg de 10kg).", tempo: "há 5 min" },
  { id: 2, tipo: "info", titulo: "Horas extras", mensagem: "João Silva atingiu 18h extras neste mês.", tempo: "há 22 min" },
  { id: 3, tipo: "alerta", titulo: "Conta vencendo", mensagem: "Conta de energia vence amanhã — R$ 2.380.", tempo: "há 1h" },
  { id: 4, tipo: "sucesso", titulo: "Meta diária", mensagem: "Você atingiu 95% da meta de faturamento.", tempo: "há 2h" },
  { id: 5, tipo: "alerta", titulo: "Desperdício", mensagem: "Desperdício aumentou 18% em relação a ontem.", tempo: "há 3h" },
  { id: 6, tipo: "info", titulo: "Fornecedor atrasado", mensagem: "Sadia atrasou entrega prevista para 08/07.", tempo: "há 5h" },
];

export const escala = [
  { dia: "Segunda", funcionarios: ["João Silva", "Maria Santos", "Lucas Ferreira", "Pedro Almeida", "Camila Rocha"] },
  { dia: "Terça", funcionarios: ["João Silva", "Ana Costa", "Rafael Souza", "Camila Rocha"] },
  { dia: "Quarta", funcionarios: ["Maria Santos", "Lucas Ferreira", "Pedro Almeida", "Ana Costa"] },
  { dia: "Quinta", funcionarios: ["João Silva", "Maria Santos", "Rafael Souza", "Camila Rocha"] },
  { dia: "Sexta", funcionarios: ["João Silva", "Maria Santos", "Lucas Ferreira", "Pedro Almeida", "Ana Costa", "Rafael Souza"] },
  { dia: "Sábado", funcionarios: ["João Silva", "Maria Santos", "Lucas Ferreira", "Pedro Almeida", "Ana Costa", "Rafael Souza", "Camila Rocha"] },
  { dia: "Domingo", funcionarios: ["Lucas Ferreira", "Pedro Almeida", "Ana Costa"] },
];

export const ferias = [
  { nome: "Bruno Lima", status: "Em férias", periodo: "01/07 — 30/07", diasRestantes: 22 },
  { nome: "Ana Costa", status: "Próxima", periodo: "05/08 — 03/09", diasRestantes: null },
  { nome: "João Silva", status: "Vence em 30 dias", periodo: "Aquisitivo 2024/2025", diasRestantes: null },
  { nome: "Rafael Souza", status: "Vencida", periodo: "Aquisitivo 2023/2024", diasRestantes: null },
];

export const fornecedores = [
  { nome: "Sadia — Carnes e frios", contato: "(11) 3000-1000", categoria: "Proteínas", status: "ativo" },
  { nome: "Coca-Cola FEMSA", contato: "(11) 3000-2000", categoria: "Bebidas", status: "ativo" },
  { nome: "Hortifruti do Vale", contato: "(11) 3000-3000", categoria: "Hortifruti", status: "ativo" },
  { nome: "Laticínios Serra", contato: "(11) 3000-4000", categoria: "Laticínios", status: "atencao" },
  { nome: "Farinhas Premium", contato: "(11) 3000-5000", categoria: "Secos", status: "ativo" },
];

export const clientes = [
  { nome: "Ricardo Melo", visitas: 42, ticket: 128.5, ultimaVisita: "Hoje" },
  { nome: "Fernanda Dias", visitas: 28, ticket: 92.3, ultimaVisita: "Ontem" },
  { nome: "Gabriel Nunes", visitas: 15, ticket: 210.8, ultimaVisita: "05/07" },
  { nome: "Patrícia Ramos", visitas: 61, ticket: 68.9, ultimaVisita: "Hoje" },
  { nome: "Eduardo Torres", visitas: 8, ticket: 340.0, ultimaVisita: "02/07" },
];
