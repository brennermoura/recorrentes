import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Globe,
  Mail,
  HeadphonesIcon,
  DollarSign,
  Star,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                WebCraft Pro
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Começar Agora
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Benefícios
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Planos
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  FAQ
                </button>
                <Button
                  onClick={() => scrollToSection("cta")}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              ✨ Websites profissionais com preço justo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Seu Site Profissional
              <span className="block text-blue-600">a partir de R$19/mês</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Criamos seu site profissional com hospedagem gratuita, email
              profissional incluso e suporte dedicado. Tudo que você precisa
              para ter presença online de qualidade.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a WebCraft Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos tudo que você precisa para ter um site profissional
              online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <DollarSign className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Preço Acessível</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Sites profissionais a partir de apenas R$19/mês. Sem custos
                  ocultos ou surpresas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Globe className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Hospedagem Gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Hospedagem moderna e escalável inclusa. Seu site sempre online
                  e rápido.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Mail className="w-8 h-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Email Profissional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  1 conta de email profissional gratuita inclusa para dar
                  credibilidade ao seu negócio.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                  <HeadphonesIcon className="w-8 h-8 text-orange-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Suporte Dedicado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Entrega rápida e suporte dedicado sempre que você precisar.
                  Estamos aqui para ajudar.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio. Todos incluem hospedagem
              e email gratuitos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$9,49
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <CardDescription className="mt-2">
                  Perfeito para começar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>2 templates pra escolher</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Hospedagem com SSL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>1 email profissional</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>1 atualização mensal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Suporte técnico</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative group hover:shadow-xl transition-all duration-300 border-2 border-blue-600">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$19,49
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <CardDescription className="mt-2">
                  Para negócios em crescimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>3 templates para escolher</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Hospedagem com SSL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>3 emails profissionais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>3 atualizações mensais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Suporte extra</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Empresarial</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$49,49
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <CardDescription className="mt-2">
                  Para empresas estabelecidas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Até 5 templates para escolher</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Hospedagem com SSL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>5 emails profissionais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>5 atualizações mensais </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Alterações de design sob demanda</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Suporte prioritário</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de 1.000 empresas confiam na WebCraft Pro para sua presença
              online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "A WebCraft Pro transformou completamente nossa presença
                  online. O site ficou incrível e o suporte é excepcional!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    MC
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Maria Clara</p>
                    <p className="text-sm text-gray-500">
                      CEO, Boutique Elegance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excelente custo-benefício! Nosso restaurante agora tem um
                  site profissional que atrai muitos clientes."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    RS
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Roberto Silva</p>
                    <p className="text-sm text-gray-500">
                      Proprietário, Sabor & Arte
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Processo super rápido e fácil. Em poucos dias tínhamos nosso
                  site no ar com email profissional funcionando."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    AF
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Ana Ferreira</p>
                    <p className="text-sm text-gray-500">
                      Diretora, Tech Solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Como funciona o processo de criação do site?
              </AccordionTrigger>
              <AccordionContent>
                Após a contratação, nossa equipe entrará em contato em até 24h
                para entender suas necessidades. Criamos o site em até 7 dias
                úteis e você pode solicitar ajustes durante o processo. Após
                aprovação, seu site fica online imediatamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                O que está incluído no plano básico de R$19/mês?
              </AccordionTrigger>
              <AccordionContent>
                O plano básico inclui: 1 site profissional responsivo,
                hospedagem gratuita, 1 conta de email profissional, SSL
                gratuito, suporte básico e todas as atualizações de segurança. O
                domínio é pago separadamente pelo cliente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Posso cancelar meu plano a qualquer momento?
              </AccordionTrigger>
              <AccordionContent>
                Nossos contratos têm duração mínima de 1 ano. Após este período,
                você pode cancelar a qualquer momento com 30 dias de
                antecedência. Durante o período de contrato, oferecemos garantia
                de satisfação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Como funciona o email profissional?
              </AccordionTrigger>
              <AccordionContent>
                Configuramos seu email profissional (ex:
                seu-nome@seudominio.com.br) que pode ser acessado via webmail,
                Outlook, Gmail ou qualquer cliente de email. Inclui 1GB de
                armazenamento no plano básico, com opções de upgrade
                disponíveis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Preciso comprar o domínio separadamente?
              </AccordionTrigger>
              <AccordionContent>
                Sim, o domínio é pago separadamente pelo cliente. Podemos ajudar
                na escolha e registro do domínio, que custa em média R$40/ano
                para .com.br. Isso garante que o domínio seja de sua propriedade
                total.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 bg-blue-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para ter seu site profissional?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 1.000 empresas que já transformaram sua presença
            online conosco. Comece hoje mesmo e veja a diferença!
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("pricing")}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Quero Meu Site Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">WebCraft Pro</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Criamos sites profissionais com hospedagem gratuita, email
                profissional e suporte dedicado. Sua presença online de
                qualidade começa aqui.
              </p>
              <div className="text-gray-400">
                <p>📧 contato@webcraftpro.com.br</p>
                <p>📱 (11) 99999-9999</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="hover:text-white transition-colors"
                  >
                    Benefícios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="hover:text-white transition-colors"
                  >
                    Planos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-white transition-colors"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Criação de Sites</li>
                <li>Hospedagem Web</li>
                <li>Email Profissional</li>
                <li>Suporte Técnico</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WebCraft Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
