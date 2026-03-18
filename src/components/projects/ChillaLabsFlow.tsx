"use client";
import { motion } from "framer-motion";
import {
  PiStorefront,
  PiShoppingCart,
  PiClipboardText,
  PiCreditCard,
  PiPackage,
  PiArrowRight,
  PiArrowDown,
  PiGitFork,
} from "react-icons/pi";

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

const lanes: Lane[] = [
  {
    id: "navegar", phase: "Navegar", icon: <PiStorefront size={16} />, color: "#9880BB",
    steps: [
      { num: "01", label: "Entra a ChillaLabs", type: "step" },
      { num: "02", label: "¿Qué quiere?", type: "decision", branch: [
        { num: "2a", label: "Stock disponible", type: "success" },
        { num: "2b", label: "Preventa a pedido", type: "warning" },
      ]},
      { num: "03", label: "Filtra categoría", type: "step", sub: "Anime · Videojuegos · Originales" },
      { num: "04", label: "Ver producto", type: "step", sub: "precio · talla · serie" },
    ],
  },
  {
    id: "carrito", phase: "Carrito", icon: <PiShoppingCart size={16} />, color: "#635081",
    steps: [
      { num: "05", label: "Agrega al carrito", type: "success", sub: "Stock: Agregar / Preventa: Reservar" },
      { num: "06", label: "¿Tiene descuento?", type: "decision", branch: [
        { num: "6a", label: "Código válido · 15% off", type: "success" },
        { num: "6b", label: "Sin código", type: "step" },
      ]},
      { num: "07", label: "Ver resumen del pedido", type: "step", sub: "subtotal + descuento" },
      { num: "08", label: "Ir al checkout", type: "step" },
    ],
  },
  {
    id: "checkout", phase: "Checkout", icon: <PiClipboardText size={16} />, color: "#7c5cbf",
    steps: [
      { num: "09", label: "¿Está logueado?", type: "decision", branch: [
        { num: "9a", label: "Datos precargados", type: "success" },
        { num: "9b", label: "Invitado o Login", type: "warning" },
      ]},
      { num: "10", label: "Datos del comprador", type: "step", sub: "nombre · email · dirección" },
      { num: "11", label: "Código postal", type: "step", sub: "calcula opciones de envío" },
      { num: "12", label: "Elige courier", type: "decision", branch: [
        { num: "12a", label: "Correo Argentino", type: "step", sub: "$5.99–8.99 · 5–10 días" },
        { num: "12b", label: "Andreani", type: "mp", sub: "$8.49–11.24 · 2–5 días" },
      ]},
      { num: "13", label: "Mensaje al vendedor", type: "step", sub: "opcional" },
    ],
  },
  {
    id: "pago", phase: "Pago", icon: <PiCreditCard size={16} />, color: "#3b6cb5",
    steps: [
      { num: "14", label: "Método de pago", type: "decision", branch: [
        { num: "14a", label: "MercadoPago", type: "mp", sub: "tarjeta · cuotas · saldo" },
        { num: "14b", label: "Transferencia bancaria", type: "warning", sub: "alias: chillalabs.mp" },
      ]},
      { num: "15", label: "Pago confirmado en MP", type: "success" },
      { num: "16", label: "Comprobante por WhatsApp", type: "warning" },
      { num: "17", label: "Orden generada", type: "final", sub: "#CHL-timestamp" },
    ],
  },
  {
    id: "estado", phase: "Estado", icon: <PiPackage size={16} />, color: "#2A8A50",
    steps: [
      { num: "18", label: "Estado: Pendiente", type: "warning" },
      { num: "19", label: "Admin confirma pago", type: "step", sub: "/admin/orders" },
      { num: "20", label: "Actualiza estado", type: "decision", branch: [
        { num: "20a", label: "Estado: Pagado", type: "success" },
        { num: "20b", label: "Estado: Enviado", type: "mp" },
      ]},
      { num: "21", label: "Cliente ve estado", type: "final", sub: "Mi cuenta · Mis pedidos" },
    ],
  },
];

const nodeStyle: Record<NodeType, { bg: string; text: string; border: string; num: string }> = {
  step:     { bg: "bg-white",         text: "text-[#3D2E5A]", border: "border-[#9880BB]/40", num: "bg-[#9880BB] text-white" },
  decision: { bg: "bg-[#f0ebfa]",     text: "text-[#635081]", border: "border-[#9880BB]",    num: "bg-[#9880BB] text-white" },
  success:  { bg: "bg-[#edfbf3]",     text: "text-[#1a5c35]", border: "border-[#2A8A50]/60", num: "bg-[#2A8A50] text-white" },
  warning:  { bg: "bg-[#fff8e6]",     text: "text-[#7a5200]", border: "border-[#8A6200]/60", num: "bg-[#8A6200] text-white" },
  mp:       { bg: "bg-[#e8f7fd]",     text: "text-[#005580]", border: "border-[#009ee3]/60", num: "bg-[#009ee3] text-white" },
  final:    { bg: "bg-[#ece8f7]",     text: "text-[#3D2E5A]", border: "border-[#635081]",    num: "bg-[#635081] text-white" },
};

/* ── Nodo desktop ── */
function DesktopNode({ step, small = false }: { step: Step; small?: boolean }) {
  const s = nodeStyle[step.type];
  return (
    <div className={`relative flex-shrink-0 ${small ? "w-[96px]" : "w-[106px]"}`}>
      <span className={`absolute -top-2.5 left-2 z-10 text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-sm ${s.num}`}>
        {step.num}
      </span>
      <div className={`w-full min-h-[56px] flex flex-col items-center justify-center rounded-xl border-2 shadow-sm px-2 py-4 ${s.bg} ${s.text} ${s.border}`}>
        <p className={`font-semibold leading-tight text-center w-full ${small ? "text-[7.5px]" : "text-[8.5px]"}`}>{step.label}</p>
        {step.sub && <p className="text-[7px] opacity-55 mt-0.5 leading-tight text-center w-full">{step.sub}</p>}
      </div>
    </div>
  );
}

/* ── Nodo mobile ── */
function MobileNode({ step }: { step: Step }) {
  const s = nodeStyle[step.type];
  return (
    <div className={`flex items-start gap-2.5 rounded-xl border-2 shadow-sm px-3 py-2.5 ${s.bg} ${s.text} ${s.border}`}>
      <span className={`flex-shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-full mt-0.5 ${s.num}`}>{step.num}</span>
      <div className="min-w-0">
        <p className="text-xs font-semibold leading-tight">{step.label}</p>
        {step.sub && <p className="text-[10px] opacity-60 mt-0.5 leading-tight">{step.sub}</p>}
      </div>
    </div>
  );
}

/* ── Leyenda ── */
const legend: [NodeType, string][] = [
  ["decision", "Decisión"],
  ["success",  "Éxito / confirmado"],
  ["warning",  "Pendiente / alternativo"],
  ["mp",       "MercadoPago · Andreani"],
  ["final",    "Estado final"],
];

/* ── Principal ── */
export default function ChillaLabsFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 py-6"
    >
      {/* ═══════════════ DESKTOP ═══════════════ */}
      <div className="hidden md:block max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-[#f9f7fc] overflow-hidden shadow-lg">
        <div className="divide-y divide-slate-200">
          {lanes.map((lane, li) => (
            <motion.div
              key={lane.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: li * 0.06 }}
              viewport={{ once: true }}
              className="flex items-stretch"
            >
              {/* Etiqueta carril */}
              <div
                className="flex-shrink-0 w-[72px] flex flex-col items-center justify-center gap-1.5 py-4 px-2"
                style={{ background: lane.color + "18", borderRight: `2px solid ${lane.color}40` }}
              >
                <span style={{ color: lane.color }}>{lane.icon}</span>
                <span className="text-[7.5px] font-bold uppercase tracking-widest text-center leading-tight" style={{ color: lane.color }}>
                  {lane.phase}
                </span>
              </div>

              {/* Pasos */}
              <div className="flex items-center flex-wrap gap-y-4 px-4 py-4 flex-1">
                {lane.steps.map((step, si) => (
                  <div key={si} className="flex items-center">
                    {si > 0 && (
                      <div className="flex-shrink-0 flex items-center px-1">
                        <PiArrowRight size={16} style={{ color: lane.color }} />
                      </div>
                    )}
                    {step.branch ? (
                      <div className="flex flex-col items-center gap-1">
                        <DesktopNode step={step} />
                        <div className="flex gap-1.5 mt-0.5">
                          {step.branch.map((b, bi) => (
                            <div key={bi} className="flex flex-col items-center gap-0.5">
                              <div className="w-px h-2.5" style={{ background: lane.color + "60" }} />
                              <DesktopNode step={b} small />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <DesktopNode step={step} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leyenda desktop */}
        <div className="px-5 py-3 bg-white border-t border-slate-200 flex flex-wrap gap-x-5 gap-y-1.5">
          {legend.map(([type, label]) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded border-2 flex-shrink-0 ${nodeStyle[type].bg} ${nodeStyle[type].border}`} />
              <span className="text-[9px] text-slate-500 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ MOBILE ═══════════════ */}
      <div className="md:hidden max-w-lg mx-auto flex flex-col gap-4">
        {lanes.map((lane, li) => (
          <motion.div
            key={lane.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: li * 0.07 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-[#f9f7fc] overflow-hidden shadow-sm"
          >
            {/* Cabecera del carril */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ background: lane.color + "20", borderBottom: `2px solid ${lane.color}40` }}
            >
              <span style={{ color: lane.color }}>{lane.icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: lane.color }}>
                {lane.phase}
              </span>
            </div>

            {/* Pasos verticales */}
            <div className="flex flex-col px-3 py-3 gap-1.5">
              {lane.steps.map((step, si) => (
                <div key={si} className="flex flex-col gap-1">
                  {/* Conector */}
                  {si > 0 && (
                    <div className="flex justify-center py-0.5">
                      <PiArrowDown size={14} style={{ color: lane.color + "80" }} />
                    </div>
                  )}

                  {step.branch ? (
                    <div className="flex flex-col gap-1.5">
                      <MobileNode step={step} />
                      {/* Bifurcación */}
                      <div className="flex items-center gap-1 pl-2">
                        <PiGitFork size={12} className="text-slate-400 flex-shrink-0 rotate-180" />
                        <div className="flex flex-col gap-1 flex-1">
                          {step.branch.map((b, bi) => (
                            <MobileNode key={bi} step={b} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <MobileNode step={step} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Leyenda mobile */}
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">Referencias</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {legend.map(([type, label]) => (
              <div key={type} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded border-2 flex-shrink-0 ${nodeStyle[type].bg} ${nodeStyle[type].border}`} />
                <span className="text-[9px] text-slate-500 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
