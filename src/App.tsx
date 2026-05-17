/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, CheckCircle2, Target, Clock, Zap } from "lucide-react";
import { useState } from "react";

// Triggers a subtle file change to allow GitHub sync
export default function App() {
  const checkoutUrl = "https://stfmdesafio21diascombr.hotmart.host/";
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setStep(2);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#050505] font-sans text-neutral-200 p-4 overflow-hidden">
      {/* Background Red Glow (Reference to the Jellyfish glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Container */}
      <div className="w-full max-w-[480px] relative z-10">
        {/* Sleek Dark Card */}
        <div className="relative rounded-[24px] overflow-hidden border border-neutral-800/80 p-8 sm:p-10 bg-[#0c0c0c]/90 backdrop-blur-xl min-h-[440px] flex flex-col justify-center">
          
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full"
              >
                <div className="flex justify-center mb-8">
                  <div className="bg-neutral-900 text-neutral-300 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-neutral-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    Análise Rápida
                  </div>
                </div>

                <div className="text-center space-y-4 mb-10">
                  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                    O problema nunca foi <span className="text-red-500 block mt-1">comida.</span>
                  </h1>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-[90%] mx-auto">
                    Existe um padrão invisível mantendo você no efeito sanfona. Antes de liberar o método de 21 dias, me diga a verdade:
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <p className="text-center text-sm font-medium text-neutral-500 mb-2">Qual o seu maior obstáculo para emagrecer hoje?</p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer("falta_foco")} 
                    className="w-full flex items-center gap-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800/80 p-5 transition-all duration-300 text-left group"
                  >
                    <div className="bg-neutral-950 p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                      <Target className="w-5 h-5 text-neutral-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">Desconto a ansiedade e o cansaço na comida</span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer("falta_tempo")} 
                    className="w-full flex items-center gap-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800/80 p-5 transition-all duration-300 text-left group"
                  >
                    <div className="bg-neutral-950 p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                      <Clock className="w-5 h-5 text-neutral-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">Faço dieta na semana e no final de semana estrago tudo</span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer("quero_resultado")} 
                    className="w-full flex items-center gap-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800/80 p-5 transition-all duration-300 text-left group"
                  >
                    <div className="bg-neutral-950 p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                      <Zap className="w-5 h-5 text-neutral-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">Odeio meu corpo hoje, me sinto frustrada e travada</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full"
              >
                <div className="flex justify-center mb-8">
                  <div className="bg-red-500/10 text-red-500 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-red-500/20 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    Acesso Liberado
                  </div>
                </div>

                <div className="text-center space-y-4 mb-8">
                  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2 leading-tight">
                    Tudo pronto para o <br/>
                    <span className="text-red-500 block mt-1">
                      Desafio 21 Dias
                    </span>
                  </h1>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-[90%] mx-auto">
                    Agora você finalmente entende por que nunca conseguiu manter resultados. O Desafio traz o protocolo exato para você emagrecer sem dietas impossíveis.
                  </p>
                </div>

                <div className="space-y-3 mb-8 bg-neutral-900/40 rounded-2xl p-5 border border-neutral-800/60">
                  {[
                    "Volte a gostar do seu corpo",
                    "Acesso imediato ao método completo",
                    "Garantia Blindada de 7 Dias"
                  ].map((benefit, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                      key={i} 
                      className="flex items-center gap-4 text-sm font-medium text-neutral-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, ease: "easeOut" }}
                  className="mb-8 relative p-5 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/20 blur-[50px] pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Desafio 21 Dias</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed mt-1">
                        O método validado para reprogramar sua mente, vencer a compulsão e voltar a caber nas suas roupas.
                      </p>
                    </div>
                    <div className="flex items-end justify-between mt-2 pt-4 border-t border-white/[0.08]">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-500 tracking-widest font-semibold uppercase mb-1">Acesso Exclusivo</span>
                        <div className="flex items-center gap-2.5">
                           <span className="text-sm font-medium text-neutral-500 line-through decoration-red-500/50">R$ 147,00</span>
                           <span className="text-2xl font-black tracking-tight text-white">
                             R$<span className="text-red-500 ml-1">97,00</span>
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-auto w-full flex flex-col items-center">
                  <div className="mb-4 text-center space-y-2 flex flex-col items-center">
                    <span className="bg-red-500/10 text-red-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1 rounded-full animate-pulse border border-red-500/20">
                      Acesso promocional liberado hoje
                    </span>
                    <span className="text-neutral-400 text-[11px] sm:text-xs font-medium">
                      O método já ajudou mais de <strong className="text-white">13.000 pessoas</strong>
                    </span>
                  </div>
                  <motion.a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden group flex w-full items-center justify-center gap-2 rounded-full bg-red-600 hover:bg-red-500 text-white px-6 py-4 font-semibold text-[15px] sm:text-[16px] transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                  >
                    <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      COMEÇAR MEUS 21 DIAS
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center gap-2 text-[10px] sm:text-xs text-neutral-500 text-center">
                  <p className="opacity-80 leading-relaxed max-w-[95%]">
                     *Aviso Legal: Os resultados podem variar de pessoa para pessoa. Cada organismo responde de forma única às mudanças de hábitos e rotina. Para garantir a eficácia do método, é indispensável seguir todas as etapas do protocolo, manter a consistência diária e se dedicar individualmente durante todo o período do desafio. O sucesso depende exclusivamente do seu comprometimento e aplicação prática do conteúdo.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
