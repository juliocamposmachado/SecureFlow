import { Shield, MapPin, TrendingUp, Zap, Lock, Activity, BarChart3, Clock, CheckCircle2, AlertTriangle, Users, Smartphone, Mail, Phone, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LocationCard } from './components/LocationCard';
import { PixPaymentCard } from './components/PixPaymentCard';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-emerald-500/20 rounded-full animate-ping"></div>
            </div>
            <div className="relative">
              <Shield className="w-32 h-32 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mt-8 mb-2">SecureFlow</h1>
          <p className="text-emerald-400 text-lg">Sistema de Automação e Validação Avançada</p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">SecureFlow</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Funcionalidades</a>
            <a href="#benefits" className="hover:text-emerald-400 transition-colors">Benefícios</a>
            <a href="#technical" className="hover:text-emerald-400 transition-colors">Tecnologia</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contato</a>
          </div>
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105">
            Solicitar Demo
          </a>
        </nav>

        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Sistema Python de Alta Performance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Automação Inteligente com
              <span className="text-emerald-400"> Segurança Avançada</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Sistema inovador de validação automatizada baseada em geolocalização física, com múltiplas camadas de segurança contra fraudes. Totalmente customizável para diferentes tipos de negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center">
                Agendar Demonstração
              </a>
              <a href="#features" className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center">
                Conhecer Recursos
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-700">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-slate-400">Uptime Garantido</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">&lt;100ms</div>
                <div className="text-slate-400">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">10k+</div>
                <div className="text-slate-400">Validações/Minuto</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Funcionalidades Principais</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recursos avançados projetados para máxima segurança e eficiência operacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Validação por Geolocalização</h3>
              <p className="text-slate-600 leading-relaxed">
                Validação GPS precisa com análise de padrões suspeitos e detecção automática de anomalias em tempo real.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Segurança Multicamadas</h3>
              <p className="text-slate-600 leading-relaxed">
                Integração com APIs de segurança, rate limiting e detecção avançada de spoofing de GPS.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Histórico e Auditoria</h3>
              <p className="text-slate-600 leading-relaxed">
                Logs detalhados de todas as validações com rastreabilidade completa para auditoria e compliance.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Painel de Monitoramento</h3>
              <p className="text-slate-600 leading-relaxed">
                Dashboard web em tempo real com métricas, alertas e visualizações completas de performance.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Análise de Risco</h3>
              <p className="text-slate-600 leading-relaxed">
                Aprovação automática ou análise manual conforme o nível de risco detectado pelo sistema.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integração Móvel</h3>
              <p className="text-slate-600 leading-relaxed">
                Fácil integração com aplicativos móveis e sistemas legados através de APIs RESTful robustas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios Diretos</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Resultados mensuráveis que transformam sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Redução de Fraudes</h3>
                <p className="text-slate-400 leading-relaxed">
                  Diminuição significativa de riscos com validação geográfica precisa e detecção comportamental avançada.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Performance Otimizada</h3>
                <p className="text-slate-400 leading-relaxed">
                  Capacidade de processar milhares de validações simultâneas com tempo de resposta inferior a 100ms.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Escalabilidade Garantida</h3>
                <p className="text-slate-400 leading-relaxed">
                  Arquitetura preparada para crescimento, suportando desde pequenas operações até ambientes enterprise.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementação Rápida</h3>
                <p className="text-slate-400 leading-relaxed">
                  Instalação simplificada com suporte técnico especializado e documentação completa para integração ágil.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customização Total</h3>
                <p className="text-slate-400 leading-relaxed">
                  Configuração flexível de regras de negócio, critérios de validação e níveis de segurança personalizados.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Suporte Contínuo</h3>
                <p className="text-slate-400 leading-relaxed">
                  Equipe dedicada para suporte técnico, atualizações constantes e evolução contínua do produto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section id="technical" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Diferenciais Técnicos</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tecnologia de ponta desenvolvida em Python para máxima confiabilidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Segurança Robusta</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Rate limiting inteligente para prevenir abusos e ataques DDoS</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Detecção avançada de spoofing de GPS com múltiplos algoritmos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Critérios de segurança configuráveis e validação em múltiplas camadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Criptografia end-to-end para todas as comunicações</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance Superior</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Arquitetura assíncrona otimizada para alto volume de requisições</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Cache inteligente para reduzir latência e melhorar throughput</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Processamento paralelo de validações para máxima eficiência</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Monitoramento automático de recursos e auto-scaling</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Inteligência Artificial</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Machine learning para detecção de padrões anômalos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Aprendizado contínuo baseado em histórico de validações</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Score de risco dinâmico com ajuste automático de sensibilidade</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Predição de comportamentos suspeitos antes da ocorrência</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Integração e APIs</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">API RESTful completa com documentação interativa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SDKs disponíveis para principais linguagens e plataformas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Webhooks para notificações em tempo real de eventos críticos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Compatibilidade com sistemas legados via conectores personalizados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Experimente na Prática</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Veja como nossas tecnologias funcionam em tempo real com demonstrações interativas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
            <LocationCard />
            <PixPaymentCard />
          </div>
        </div>
      </section>

      {/* Testimonials / Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Resultados Comprovados</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dados agregados demonstram a eficácia do sistema em ambientes de produção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">87%</div>
              <div className="text-slate-600 font-medium">Redução em tentativas de fraude</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">3.5x</div>
              <div className="text-slate-600 font-medium">Aumento na velocidade de validação</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">99.7%</div>
              <div className="text-slate-600 font-medium">Taxa de precisão em detecção</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Monitoramento e suporte técnico</div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    "A implementação do sistema reduziu drasticamente nossos índices de fraude e melhorou significativamente a experiência do usuário final. A capacidade de processar milhares de validações simultâneas sem comprometer a performance foi crucial para nossa operação."
                  </p>
                  <div className="text-slate-900 font-semibold">Empresa do Setor Financeiro</div>
                  <div className="text-slate-500 text-sm">Operação com 50.000+ usuários ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Transformar sua Segurança?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Agende uma demonstração personalizada e veja na prática como nosso sistema pode proteger e otimizar sua operação.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-mail corporativo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Empresa"
                    className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <textarea
                  placeholder="Conte-nos sobre suas necessidades de segurança..."
                  rows={4}
                  className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all mb-6"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                >
                  {submitted ? 'Mensagem Enviada!' : 'Solicitar Demonstração Gratuita'}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-slate-400 text-sm mb-4">Ou entre em contato diretamente:</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <a href="mailto:contato@secureflow.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    contato@secureflow.com
                  </a>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <a href="tel:+5511999999999" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-bold text-white">SecureFlow</span>
              </div>
              <p className="text-sm leading-relaxed">Sistema de Automação e Validação Avançada</p>
              <p className="text-sm mt-2">Tecnologia Python de alta performance</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Desenvolvedor</h4>
              <p className="text-sm mb-2">Julio Campos Machado</p>
              <div className="space-y-2">
                <a href="mailto:juliocamposmachado@gmail.com" className="flex items-center space-x-2 text-sm hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>juliocamposmachado@gmail.com</span>
                </a>
                <a href="https://wa.me/5511970603441" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+55 11 97060-3441</span>
                </a>
                <a href="https://wa.me/5511992946628" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+55 11 99294-6628</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <p className="text-sm mb-3">Like Look Solutions</p>
              <a href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span>Visite nosso site</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>© 2025 SecureFlow by Like Look Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
