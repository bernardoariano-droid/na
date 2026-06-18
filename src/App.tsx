import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Shield, PlayCircle, ChevronDown, Rocket, Target, Zap, LayoutDashboard } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">LaunchPRO</span>
            </div>
            <a 
              href="#oferta"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white transition-all bg-black rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95"
            >
              Garantir Minha Vaga
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400 blur-[120px] rounded-full opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide mb-6">
              NOVA TURMA ABERTA • VAGAS LIMITADAS
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8"
          >
            Escale suas vendas <br className="hidden md:block" />
            com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">metodologia validada</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Pare de perder dinheiro com estratégias que não funcionam. Aprenda o passo a passo exato para construir um negócio digital previsível, lucrativo e escalável em 30 dias.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#oferta" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group">
              Quero Escalar Meu Negócio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#metodo" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
              <PlayCircle className="w-5 h-5 text-gray-500" />
              Ver como funciona
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-4 text-sm text-gray-500 font-medium"
          >
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Aluno" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="ml-1 text-gray-900 font-bold">4.9/5</span> de +2.000 alunos
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="metodo" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Como funciona o Método LaunchPRO?</h2>
            <p className="text-gray-600 text-lg">Um sistema simples, dividido em 3 pilares fundamentais, desenhado para tirar você do zero até as suas primeiras vendas em tempo recorde.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "1. Atração",
                desc: "Aprenda a construir uma base de pessoas engajadas e famintas pelo seu produto, mesmo começando do absoluto zero."
              },
              {
                icon: Zap,
                title: "2. Conversão",
                desc: "Copys validadas, scripts de vendas e páginas de alta conversão. Transforme curiosos em clientes fiéis."
              },
              {
                icon: LayoutDashboard,
                title: "3. Escala",
                desc: "Sistemas e processos para multiplicar seus resultados sem precisar trabalhar mais horas por dia."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Quem aplicou, teve resultados.</h2>
            <p className="text-gray-600 text-lg">Veja o que dizem os alunos que já estão vivendo exclusivamente dos seus negócios digitais.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Eu estava travada nos R$2k por mês. No primeiro mês aplicando o método, bati R$15k. O conteúdo sobre conversão mudou meu jogo.",
                author: "Mariana Silva",
                role: "Mentora de Produtividade",
                img: "32"
              },
              {
                text: "A estrutura de anúncios ensinada aqui foi a primeira que realmente me deu ROI positivo. Não vivo mais sem esse método.",
                author: "Rafael Costa",
                role: "E-commerce Founder",
                img: "11"
              },
              {
                text: "Vale cada centavo. Só o módulo de Copybook já vale o triplo do valor do treinamento. Recomendo de olhos fechados.",
                author: "Ana Beatriz",
                role: "Consultora Financeira",
                img: "44"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/100?img=${testimonial.img}`} alt={testimonial.author} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="oferta" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 blur-[200px] rounded-full opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Sua jornada começa agora.</h2>
            <p className="text-gray-400 text-lg">Acesso imediato a todo o conteúdo, atualizações por 1 ano e suporte direto.</p>
          </div>

          <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 w-full">
                <h3 className="font-display text-2xl font-bold mb-2">Formação Completa</h3>
                <p className="text-gray-500 mb-6">O passaporte para a sua liberdade financeira e de tempo.</p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Acesso completo ao Método LaunchPRO",
                    "Templates de Copy Inéditos",
                    "Scripts de Vendas Validados",
                    "Comunidade Exclusiva de Alunos",
                    "Suporte tira-dúvidas diário",
                    "Atualizações gratuitas por 1 ano"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 w-full flex flex-col items-center bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <span className="text-gray-500 line-through text-lg mb-2">De R$ 1.997,00 por</span>
                <div className="flex items-baseline gap-2 mb-6 text-gray-900">
                  <span className="text-xl font-bold">12x de</span>
                  <span className="font-display text-6xl font-extrabold tracking-tight">R$97</span>
                  <span className="text-gray-500 font-medium">,14</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">ou R$ 997,00 à vista</p>
                
                <button className="w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 mb-4 animate-pulse hover:animate-none">
                  GARANTIR MINHA VAGA AGORA
                </button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-600">Tudo o que você precisa saber antes de entrar.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Por quanto tempo tenho acesso?",
                a: "Você tem acesso por 1 ano (12 meses) a todo o conteúdo, suporte e atualizações."
              },
              {
                q: "Serve para iniciantes?",
                a: "Sim! O método foi desenhado para te pegar pela mão do absoluto zero até a escala das suas vendas."
              },
              {
                q: "E se eu não gostar do treinamento?",
                a: "Você tem 7 dias de garantia incondicional. Se não gostar, basta apertar um botão e devolvemos 100% do seu dinheiro, sem perguntas."
              },
              {
                q: "Como recebo o acesso?",
                a: "Imediatamente após a confirmação do pagamento, você receberá um email com seus dados de login para a área de membros."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 p-6 rounded-xl border border-gray-100 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-lg text-gray-900">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-blue-600" />
            <span className="font-display font-bold text-lg">LaunchPRO</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Política de Privacidade</a>
          </div>
          
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} LaunchPRO. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
