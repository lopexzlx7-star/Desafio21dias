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


                <div className="text-center space-y-4 mb-10">
                  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                    O problema talvez nunca <br />tenha sido <span className="text-red-500 block mt-1">você.</span>
                  </h1>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-[90%] mx-auto">
                    Muitas mulheres vivem isso em silêncio: a exaustão das dietas frustradas e um ciclo que parece não ter fim. Existe uma forma diferente de buscar o seu bem-estar.
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <p className="text-center text-sm font-medium text-neutral-500 mb-2">Onde você sente que esse ciclo mais te afeta hoje?</p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer("falta_foco")} 
                    className="w-full flex items-center gap-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800/80 p-5 transition-all duration-300 text-left group"
                  >
                    <div className="bg-neutral-950 p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                      <Target className="w-5 h-5 text-neutral-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">Desconto minha ansiedade e o cansaço do dia na comida</span>
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
                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">A vontade impulsiva acaba vencendo minhas tentativas de rotina</span>
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
                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">Me sinto desconectada do meu próprio corpo e sem energia</span>
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
                    Sua Descoberta
                  </div>
                </div>

                <div className="text-center space-y-4 mb-8">
                  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2 leading-tight">
                    Tudo começou quando ela <br/>entendeu o que <span className="text-red-500 block mt-1">realmente estava errado.</span>
                  </h1>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-[90%] mx-auto">
                    A culpa que você carrega não deveria estar aí. O Método Viare foi desenhado para te acolher emocionalmente e apoiar sua jornada de forma gentil, sem cobranças irreais.
                  </p>
                </div>

                <div className="space-y-3 mb-8 bg-neutral-900/40 rounded-2xl p-5 border border-neutral-800/60">
                  {[
                    "Volte a gostar de ser você mesma",
                    "Acesso a uma jornada de reconexão",
                    "Faça isso no seu tempo, com segurança"
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

                <div className="mt-auto w-full flex flex-col items-center">
                  <div className="mb-4 text-center space-y-2 flex flex-col items-center">
                    <span className="bg-red-500/10 text-red-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1 rounded-full animate-pulse border border-red-500/20">
                      Um espaço para recomeçar
                    </span>
                    <span className="text-neutral-400 text-[11px] sm:text-xs font-medium">
                      Milhares de mulheres já <strong className="text-white">encontraram o próprio ritmo</strong>
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
                      DAR O PRIMEIRO PASSO
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
