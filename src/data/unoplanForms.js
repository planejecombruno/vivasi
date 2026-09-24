export const unoplanForms = {
  "diagnostico-financeiro-360": {
    id: "c9714538-5d24-4d1e-8dbe-8e60220ec3c2",
    title: "Diagnóstico Financeiro 360",
    height: 640,
  },
  investimentos: {
    id: "25e02bfc-4f04-4d6c-8201-04ebc9ba67cc",
    title: "Investimentos",
    height: 640,
  },
  credito: {
    id: "eb8615dd-7d69-4ac3-a0c6-63b8c8dfeeed",
    title: "Crédito",
    height: 640,
  },
  seguros: {
    id: "62c2f06b-810e-46a5-8376-a27bd5172f52",
    title: "Seguros",
    height: 640,
  },
};

export function getUnoplanForm(key) {
  return key ? unoplanForms[key] || null : null;
}
