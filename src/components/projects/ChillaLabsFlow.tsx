"use client";
import { motion } from "framer-motion";

/* ─── tipos ─── */
type NodeType = "step" | "decision" | "success" | "warning" | "mp" | "final";

interface Step {
  num: string;
  label: string;
  type: NodeType;
  sub?: string;
  branch?: Step[]; // nodos paralelos debajo
}

interface Lane {
  id: string;
  phase: string;
  icon: string;
  color: string;         // color del carril
  steps: Step[];
}

/* ─── datos ─── */
const lanes: Lane[] = [
  {
    id: "navegar",
    phase: "Navegar",
    icon: "🛍️",
    color: "#9880BB",
    steps: [
      { num: "01", label: "Entra a ChillaLabs", type: "step" },
      {
        num: "02",
        label: "¿Qué quiere?",
        type: "decision",
        branch: [
          { num: "2a", label: "Stock disponible", type: "success" },
          { num: "2b", label: "Preventa a pedido", type: "warning" },
        ],
      },
      { num: "03", label: "Filtra categoría", type: "step", sub: "Anime · Videojuegos · Originales" },
      { num: "04", label: "Ver producto", type: "step", sub: "precio · talla · serie" },
    ],
  },
  {
    id: "carrito",
    phase: "Carrito",
    icon: "🛒",
    color: "#635081",
    steps: [
      { num: "05", label: "Agrega al carrito", type: "success", sub: "Stock → Agregar\nPreventa → Reservar" },
      { num: "06", label: "¿Tiene descuento?", type: "decision",
        branch: [
          { num: "6a", label: "Código válido → 15% off", type: "success" },
          { num: "6b", label: "Sin código", type: "step" },
        ],
      },
      { num: "07", label: "Ver resumen del pedido", type: "step", sub: "subtotal + descuento" },
      { num: "08", label: "Ir al checkout", type: "step" },
    ],
  },
  {
    id: "checkout",
    phase: "Checkout",
    icon: "📋",
    color: "#4a3a70",
    steps: [
      { num: "09", label: "¿Está logueado?", type: "decision",
        branch: [
          { num: "9a", label: "Datos precargados", type: "success" },
          { num: "9b", label: "Continúa como invitado", type: "warning" },
        ],
      },
      { num: "10", label: "Paso 1: Datos del comprador", type: "step", sub: "nombre · email · teléfono · dirección" },
      { num: "11", label: "Paso 2: Código postal", type: "step", sub: "calcula opciones de envío" },
      {
        num: "12",
        label: "Elige courier",
        type: "decision",
        branch: [
          { num: "12a", label: "Correo Argentino", type: "step", sub: "$5.99–8.99 · 5–10 días" },
          { num: "12b", label: "Andreani", type: "mp", sub: "$8.49–11.24 · 2–5 días" },
        ],
      },
      { num: "13", label: "Paso 3: Mensaje al vendedor", type: "step", sub: "opcional · personalización" },
    ],
  },
  {
    id: "pago",
    phase: "Pago",
    icon: "💳",
    color: "#2d3a5a",
    steps: [
      { num: "14", label: "Paso 4: Método de pago", type: "decision",
        branch: [
          { num: "14a", label: "MercadoPago", type: "mp", sub: "tarjeta · cuotas · saldo MP" },
          { num: "14b", label: "Transferencia bancaria", type: "warning", sub: "alias: chillalabs.mp" },
        ],
      },
      { num: "15", label: "Pago en MP completado", type: "success" },
      { num: "16", label: "Comprobante por WhatsApp / Instagram", type: "warning" },
      { num: "17", label: "Orden generada", type: "final", sub: "#CHL-timestamp" },
    ],
  },
  {
    id: "estado",
    phase: "Estado del pedido",
    icon: "📦",
    color: "#1e1530",
    steps: [
      { num: "18", label: "Estado: Pendiente", type: "warning" },
      { num: "19", label: "Admin confirma en panel", type: "step", sub: "/admin/orders" },
      {
        num: "20",
        label: "Admin actualiza estado",
        type: "decision",
        branch: [
          { num: "20a", label: "Estado: Pagado", type: "success" },
          { num: "20b", label: "Estado: Enviado", type: "mp" },
        ],
      },
      { num: "21", label: "Cliente ve estado en Mi cuenta", type: "final", sub: "/cuenta → Mis pedidos" },
    ],
  },
];

/* ─── estilos por tipo ─── */
const nodeStyle: Record<NodeType, { card: string; num: string }> = {
  step:     { card: "bg-[#2a1f40] border-[#635081] text-[#CCB6EA]",       num: "bg-[#635081] text-white" },
  decision: { card: "bg-[#9880BB]/20 border-[#9880BB] text-[#CCB6EA]",    num: "bg-[#9880BB] text-white" },
  success:  { card: "bg-[#1a4a2e] border-[#2A8A50] text-[#4ade80]",       num: "bg-[#2A8A50] text-white" },
  warning:  { card: "bg-[#3a2800] border-[#8A6200] text-[#fbbf24]",       num: "bg-[#8A6200] text-white" },
  mp:       { card: "bg-[#003a55] border-[#009ee3] text-[#67e8f9]",       num: "bg-[#009ee3] text-white" },
  final:    { card: "bg-[#1a0f2e] border-[#9880BB] text-[#CCB6EA]",       num: "bg-[#3D2E5A] text-[#CCB6EA]" },
};

/* ─── componente nodo ─── */
function StepNode({ step, small = false }: { step: Step; small?: boolean }) {
  const s = nodeStyle[step.type];
  const isDiamond = step.type === "decision";
  return (
    <div className={`relative flex flex-col items-center flex-shrink-0 ${small ? "w-[100px]" : "w-[110px]"}`}>
      {/* Badge número */}
      <div className={`absolute -top-2.5 left-2 z-10 text-[8px] font-bold px-1.5 py-0.5 rounded-full ${s.num}`}>
        {step.num}
      </div>
      {/* Card */}
      <div className={`w-full rounded-xl border px-2 pt-3 pb-2 text-center ${s.card} ${isDiamond ? "ring-1 ring-white/10" : ""}`}>
        <p className={`font-semibold leading-tight ${small ? "text-[8px]" : "text-[9px]"}`}>{step.label}</p>
        {step.sub && (
          <p className="text-[7px] opacity-60 mt-0.5 leading-tight">{step.sub}</p>
        )}
      </div>
    </div>
  );
}

/* ─── flecha ─── */
function Arrow({ color = "#635081" }: { color?: string }) {
  return (
    <div className="flex-shrink-0 flex items-center px-1">
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
        <path d="M0 5H14M14 5L10 1.5M14 5L10 8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── componente principal ─── */
export default function ChillaLabsFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 py-6"
    >
      <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#0a0712] overflow-hidden">

        {/* Header tipo editor */}
        <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[10px] text-purple-300/50 font-mono tracking-wide">flujo-de-compra · ChillaLabs</span>
          </div>
          <span className="text-[9px] text-purple-300/30 font-mono">21 pasos</span>
        </div>

        {/* Swim lanes */}
        <div className="divide-y divide-white/5">
          {lanes.map((lane, li) => (
            <motion.div
              key={lane.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: li * 0.08 }}
              viewport={{ once: true }}
              className="flex items-stretch"
            >
              {/* Etiqueta del carril */}
              <div
                className="flex-shrink-0 w-[72px] flex flex-col items-center justify-center gap-1 py-4 px-1"
                style={{
                  background: lane.color + "18",
                  borderRight: `2px solid ${lane.color}50`,
                }}
              >
                <span className="text-base leading-none">{lane.icon}</span>
                <span
                  className="text-[8px] font-bold uppercase tracking-widest text-center leading-tight"
                  style={{ color: lane.color }}
                >
                  {lane.phase}
                </span>
              </div>

              {/* Pasos del carril */}
              <div className="flex items-center flex-wrap gap-y-3 px-4 py-4 flex-1 overflow-x-auto">
                {lane.steps.map((step, si) => (
                  <div key={si} className="flex items-center">
                    {si > 0 && <Arrow color={lane.color + "99"} />}

                    {step.branch ? (
                      /* Nodo con bifurcación */
                      <div className="flex flex-col items-center gap-1">
                        <StepNode step={step} />
                        <div className="flex gap-1 mt-1">
                          {step.branch.map((b, bi) => (
                            <div key={bi} className="flex flex-col items-center gap-0.5">
                              <div className="w-px h-3 bg-white/20" />
                              <StepNode step={b} small />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <StepNode step={step} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leyenda */}
        <div className="px-5 py-3 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-1.5">
          {([
            ["decision", "Decisión"],
            ["success",  "Éxito / confirmado"],
            ["warning",  "Pendiente / alternativo"],
            ["mp",       "MercadoPago · Andreani"],
            ["final",    "Estado final"],
          ] as [NodeType, string][]).map(([type, label]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-sm border flex-shrink-0 ${nodeStyle[type].card.split(" ").slice(0, 2).join(" ")}`} />
              <span className="text-[8px] text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
