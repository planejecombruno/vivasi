import { useState } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  Car,
  CalendarClock,
  ClipboardCheck,
  CreditCard,
  ChartNoAxesCombined,
  Crown,
  Database,
  FileText,
  GraduationCap,
  Handshake,
  HeartPulse,
  House,
  Globe2,
  KeyRound,
  Landmark,
  ListChecks,
  MonitorSmartphone,
  Percent,
  PiggyBank,
  Plane,
  ReceiptText,
  RefreshCcw,
  Scale,
  Send,
  Shield,
  Target,
  TrendingUp,
  Umbrella,
  WalletCards,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { Markets } from "../Markets";

const featureIcons = {
  creditCard: CreditCard,
  handshake: Handshake,
  landmark: Landmark,
  shield: Shield,
  walletCards: WalletCards,
};

const relatedIcons = {
  "Financiamento Imobiliário": House,
  "Financiamento de Veículos": Car,
  "Home Equity": KeyRound,
  "Auto Equity": BadgeDollarSign,
  "Empréstimo com Garantia": KeyRound,
  "Empréstimo Consignado": Banknote,
  "Consórcio de Imóveis": House,
  "Consórcio de Veículos": Car,
  "Consórcio de Serviços": ClipboardCheck,
  "Renda Fixa": Shield,
  "Fundos de Investimento": PiggyBank,
  "Renda Variável": TrendingUp,
  "Fundos Imobiliários": House,
  "Previdência Privada": WalletCards,
  "Investment Banking": ChartNoAxesCombined,
  "Seguro de Vida": HeartPulse,
  "Seguro Saúde": Shield,
  "Seguro Residencial": House,
  "Seguro Auto": Car,
  "Seguro Viagem": Plane,
  "Responsabilidade Civil": Umbrella,
  "Conta Internacional em Dólar": Globe2,
  "Cartão de Débito Internacional": CreditCard,
  "Transferências Internacionais": Send,
  "Câmbio para Viagens": Plane,
  "Remessas Internacionais": Send,
  "Câmbio para Investimentos": RefreshCcw,
  "Dados financeiros": Database,
  "Balanço patrimonial": WalletCards,
  "Objetivos e suitability": Target,
  "Orçamento ideal": Crown,
  "Análise de endividamento": ReceiptText,
  "Diagnóstico tributário": Landmark,
  "Fluxo futuro": TrendingUp,
  "Asset allocation": ChartNoAxesCombined,
  "Aposentadoria": Umbrella,
  "Expansão patrimonial": BarChart3,
  "Estudo de proteções": Shield,
  "Planejamento tributário": Percent,
  "Planejamento educacional": GraduationCap,
  "Grandes compras": House,
  "Milhas, cartões e benefícios": CreditCard,
  "Financial Life Plan": FileText,
  "Roadmap de ações": ListChecks,
  "Plataforma online": MonitorSmartphone,
  "Relatório mensal de progresso": BarChart3,
  "Revisão trimestral": RefreshCcw,
  "Revisão anual e alertas": CalendarClock,
  "Investimentos": TrendingUp,
  "Proteções": Shield,
  "Crédito": CreditCard,
  "Holdings": Landmark,
  "Sucessão patrimonial": Scale,
  "Consultoria empresarial": BriefcaseBusiness,
  "Consolidação patrimonial": Database,
  "Office familiar": Crown,
  "Governança familiar": Handshake,
  "Diversificação global": Globe2,
  "Estratégia independente": ChartNoAxesCombined,
  "Planejamento sucessório": Scale,
  "Dashboard executivo": MonitorSmartphone,
  "Estruturas patrimoniais": Landmark,
  "Alocação multi-asset": BarChart3,
  "Estrutura offshore": Globe2,
  "Eficiência fiscal": Percent,
  "Educação patrimonial": GraduationCap,
  "Crédito para Condomínio": House,
  "Empréstimo Parcelado": ReceiptText,
  "Crédito Daycoval Digital": MonitorSmartphone,
  "Empréstimo Parcelado Convencional": Banknote,
  "FGI/PEAC": Shield,
  "Garantia de Veículos e Imóveis": KeyRound,
  "Antecipação de Recebíveis": RefreshCcw,
  "CRI/CRA": Landmark,
  "Imóveis Empresariais": House,
  "Automóveis e Frotas": Car,
  "Veículos Pesados": Car,
  "Renda Fixa Corporativa": Shield,
  "Fundos DI e Crédito Privado": PiggyBank,
  "Debêntures Incentivadas": Landmark,
  "Previdência Privada Corporativa": WalletCards,
  "Operações de Tesouraria": BarChart3,
  "Seguro Empresarial": Shield,
  "Responsabilidade Civil Profissional": Umbrella,
  "Seguro de Vida em Grupo": HeartPulse,
  "Saúde e Odontológico Empresarial": HeartPulse,
  "Seguro Garantia de Contratos": FileText,
  "D&O": BriefcaseBusiness,
  "E&O": ClipboardCheck,
  "D&O - Diretores e Administradores": BriefcaseBusiness,
  "E&O - Erros e Omissões": ClipboardCheck,
  "Cyber Risks": MonitorSmartphone,
  "Seguro de Equipamentos": BriefcaseBusiness,
  "Câmbio Empresarial": Globe2,
};

export function ProductPage({ page, children }) {
  return (
    <>
      <ProductHero page={page} />
      <ProductOverview page={page} />
      <ProductFeatures page={page} />
      <ProductProcess page={page} />
      <ProductRelated page={page} />
      <ProductFaq page={page} />
      {children}
    </>
  );
}

function ProductHero({ page }) {
  return (
    <section className="hero product-hero">
      <div className="hero-backdrop product-hero-backdrop" aria-hidden="true" />
      <Markets />
      <div className="container hero-grid product-hero-grid">
        <Reveal className="hero-copy product-hero-copy">
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <div className="actions">
            <a className="button button-primary" href={page.ctaHref}>
              {page.cta} <ArrowRight size={17} />
            </a>
            <a className="button button-ghost" href="#como-funciona">
              Entender o processo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProductOverview({ page }) {
  return (
    <section className="section product-overview">
      <div className="container editorial-grid">
        <Reveal>
          <span className="eyebrow">Visão geral</span>
          <h2>{page.overviewTitle || "Liquidez com critério, não pressa."}</h2>
        </Reveal>
        <Reveal className="editorial-text">
          {page.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ProductFeatures({ page }) {
  return (
    <section className="section product-features">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">O que avaliamos</span>
          <h2>{page.featuresTitle || "Antes da proposta, entendemos a decisão por completo."}</h2>
        </Reveal>
        <Reveal className="product-feature-grid">
          {page.features.map(({ icon, title, text }) => {
            const Icon = featureIcons[icon] || ClipboardCheck;

            return (
              <article key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function ProductProcess({ page }) {
  return (
    <section className="product-process" id="como-funciona">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">Como funciona</span>
          <h2>{page.processTitle || "Do diagnóstico à contratação acompanhada."}</h2>
        </Reveal>
        <Reveal className="process-list">
          {page.process.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ProductRelated({ page }) {
  const renderCard = (item) => {
    const [fallbackTitle, fallbackText] = Array.isArray(item) ? item : [];
    const title = item.title || fallbackTitle;
    const text = item.text || fallbackText;
    const Icon = relatedIcons[title] || ClipboardCheck;

    return (
      <article key={title}>
        <Icon size={24} />
        <h3>{title}</h3>
        <p>{text}</p>
        {item.highlights && (
          <ul>
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </article>
    );
  };

  return (
    <section className="section related-products">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Produtos disponíveis</span>
          <h2>{page.related.title}</h2>
          <p>{page.related.description}</p>
        </Reveal>
        {page.related.groups ? (
          <div className="related-groups">
            {page.related.groups.map((group) => (
              <Reveal className="related-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="related-grid">{group.items.map(renderCard)}</div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="related-grid">{page.related.items.map(renderCard)}</Reveal>
        )}
      </div>
    </section>
  );
}

function ProductFaq({ page }) {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section className="section product-faq">
      <div className="container faq-grid">
        <Reveal className="faq-intro">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>{page.faqTitle || "Dúvidas comuns antes de contratar crédito."}</h2>
          <p>{page.faqIntro || "Crédito exige clareza antes da assinatura. Estas respostas ajudam a entender os pontos que mais pesam na decisão."}</p>
        </Reveal>
        <Reveal className="faq-list">
          {page.faq.map(([question, answer], index) => (
            <details key={question} open={openQuestion === index}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenQuestion((current) => (current === index ? null : index));
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{question}</strong>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
