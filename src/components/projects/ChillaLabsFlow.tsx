"use client";
import { motion } from "framer-motion";
import {
  PiStorefront,
  PiShoppingCart,
  PiClipboardText,
  PiCreditCard,
  PiPackage,
} from "react-icons/pi";

/* ─── tipos ─── */
type NodeType = "step" | "decision" | "success" | "warning" | "mp" | "final";

interface Step {
  num: string;
  label: string;
  type: NodeType;
  sub?: string;
  branch?: Step[];
}

interface Lane {
  id: string;
  phase: string;
  icon: React.ReactNode;
  color: string;
  steps: Step[];
}

/* ─── datos ─── */
const lanes: Lane[] = [
  {
    id: "navegar",
    phase: "Navegar",
    icon: <PiStorefront size={18} />,
    color: "#9880BB",
    steps: [
      { num: "01", label: "Entra a ChillaLabs", type: "step" },
      {
        num: "02", label: "¿Qué quiere?", type: "decision",
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
    icon: <PiShoppingCart size={18} />,
    color: "#635081",
    steps: [
      {
        num: "05", label: "Agrega al carrito", type: "success",
        sub: "Stock → Agregar / Preventa → Reservar",
      },
      {
        num: "06", label: "¿Tiene descuento?", type: "decision",
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
    icon: <PiClipboardText size={18} />,
    color: "#7c5cbf",
    steps: [
      {
        num: "09", label: "¿Está logueado?", type: "decision",
        branch: [
          { num: "9a", label: "Datos precargados", type: "success" },
          { num: "9b", label: "Continúa como invitado", type: "warning" },
        ],
      },
      { num: "10", label: "Datos del comprador", type: "step", sub: "nombre · email · dirección" },
      { num: "11", label: "Código postal", type: "step", sub: "calcula opciones de envío" },
      {
        num: "12", label: "Elige courier", type: "decision",
        branch: [
          { num: "12a", label: "Correo Argentino", type: "step", sub: "$5.99–8.99 · 5–10 días" },
          { num: "12b", label: "Andreani", type: "mp", sub: "$8.49–11.24 · 2–5 días" },
        ],
      },
      { num: "13", label: "Mensaje al vendedor", type: "step", sub: "opcional" },
    ],
  },
  {
    id: "pago",
    phase: "Pago",
    icon: <PiCreditCard size={18} />,
    color: "#3b6cb5",
    steps: [
      {
        num: "14", label: "Método de pago", type: "decision",
        branch: [
          { num: "14a", label: "MercadoPago", type: "mp", sub: "tarjeta · cuotas · saldo MP" },
          { num: "14b", label: "Transferencia bancaria", type: "warning", sub: "alias: chillalabs.mp" },
        ],
      },
      { num: "15", label: "Pago confirmado en MP", type: "success" },
      { num: "16", label: "Comprobante por WhatsApp / Instagram", type: "warning" },
      { num: "17", label: "Orden generada", type: "final", sub: "#CHL-timestamp" },
    ],
  },
  {
    id: "estado",
    phase: "Estado",
    icon: <PiPackage size={18} />,
    color: "#2A8A50",
    steps: [
      { num: "18", label: "Estado: Pendiente", type: "warning" },
      { num: "19", label: "Admin confirma en panel", type: "step", sub: "/admin/orders" },
      {
        num: "20", label: "Actualiza estado", type: "decision",
        branch: [
          { num: "20a", label: "Estado: Pagado", type: "success" },
          { num: "20b", label: "Estado: Enviado", type: "mp" },
        ],
      },
      { num: "21", label: "Cliente ve estado en Mi cuenta", type: "final", sub: "/cuenta → Mis pedidos" },
    ],
  },
];

/* ─── estilos por tipo (fondo claro) ─── */
const nodeStyle: Record<NodeType, { card: string; num: string; border: string }> = {
  step:     { card: "bg-white text-[#3D2E5A]",      num: "bg-[#9880BB] text-white",  border: "border-[#9880BB]/40" },
  decision: { card: "bg-[#f0ebfa] text-[#635081]",  num: "bg-[#9880BB] text-white",  border: "border-[#9880BB]" },
  success:  { card: "bg-[#edfbf3] text-[#1a5c35]",  num: "bg-[#2A8A50] text-white",  border: "border-[#2A8A50]/60" },
  warning:  { card: "bg-[#fff8e6] text-[#7a5200]",  num: "bg-[#8A6200] text-white",  border: "border-[#8A6200]/60" },
  mp:       { card: "bg-[#e8f7fd] text-[#005580]",  num: "bg-[#009ee3] text-white",  border: "border-[#009ee3]/60" },
  final:    { card: "bg-[#ece8f7] text-[#3D2E5A]",  num: "bg-[#635081] text-white",  border: "border-[#635081]" },
};

/* ─── nodo ─── */
function StepNode({ step, small = false }: { step: Step; small?: boolean }) {
  const s = nodeStyle[step.type];
  return (
    <div className={`relative flex flex-col flex-shrink-0 ${small ? "w-[96px]" : "w-[108px]"}`}>
      <div className={`absolute -top-2.5 left-2 z-10 text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-sm ${s.num}`}>
        {step.num}
      </div>
      <div className={`w-full rounded-xl border-2 shadow-sm px-2 pt-4 pb-2 text-center ${s.card} ${s.border}`}>
        <p className={`font-semibold leading-tight ${small ? "text-[8px]" : "text-[9px]"}`}>{step.label}</p>
        {step.sub && (
          <p className="text-[7px] opacity-60 mt-0.5 leading-tight">{step.sub}</p>
        )}
      </div>
    </div>
  );
}

/* ─── flecha ─── */
function Arrow({ color }: { color: string }) {
  return (
    <div className="flex-shrink-0 flex items-center px-1">
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
        <path d="M0 6H16M16 6L11 1.5M16 6L11 10.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── principal ─── */
export default function ChillaLabsFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 py-6"
    >
      <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-[#f9f7fc] overflow-hidden shadow-lg">

        {/* Swim lanes */}
        <div className="divide-y divide-slate-200">
          {lanes.map((lane, li) => (
            <motion.div
              key={lane.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: li * 0.07 }}
              viewport={{ once: true }}
              className="flex items-stretch"
            >
              {/* Etiqueta del carril */}
              <div
                className="flex-shrink-0 w-[76px] flex flex-col items-center justify-center gap-1.5 py-5 px-2"
                style={{
                  background: lane.color + "18",
                  borderRight: `2px solid ${lane.color}40`,
                }}
              >
                <span style={{ color: lane.color }}>{lane.icon}</span>
                <span
                  className="text-[8px] font-bold uppercase tracking-widest text-center leading-tight"
                  style={{ color: lane.color }}
                >
                  {lane.phase}
                </span>
              </div>

              {/* Pasos */}
              <div className="flex items-center flex-wrap gap-y-4 px-4 py-5 flex-1">
                {lane.steps.map((step, si) => (
                  <div key={si} className="flex items-center">
                    {si > 0 && <Arrow color={lane.color} />}
                    {step.branch ? (
                      <div className="flex flex-col items-center gap-1">
                        <StepNode step={step} />
                        <div className="flex gap-1.5 mt-1">
                          {step.branch.map((b, bi) => (
                            <div key={bi} className="flex flex-col items-center gap-0.5">
                              <div className="w-px h-3" style={{ background: lane.color + "60" }} />
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
        <div className="px-5 py-3 bg-white border-t border-slate-200 flex flex-wrap gap-x-5 gap-y-1.5">
          {([
            ["decision", "Decisión"],
            ["success",  "Éxito / confirmado"],
            ["warning",  "Pendiente / alternativo"],
            ["mp",       "MercadoPago · Andreani"],
            ["final",    "Estado final"],
          ] as [NodeType, string][]).map(([type, label]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded border-2 flex-shrink-0 ${nodeStyle[type].card} ${nodeStyle[type].border}`} />
              <span className="text-[9px] text-slate-500 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
