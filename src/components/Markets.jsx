import { useEffect, useRef } from "react";

export function Markets() {
  return (
    <section className="markets" aria-label="Cotações de mercado">
      <div className="container markets-track">
        <TradingViewTicker />
      </div>
    </section>
  );
}

function TradingViewTicker() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    containerRef.current.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BMFBOVESPA:IBOV", title: "IBOV" },
        { proName: "SP:SPX", title: "S&P 500" },
        { proName: "NASDAQ:NDX", title: "Nasdaq" },
        { proName: "FX_IDC:USDBRL", title: "Dólar" },
        { proName: "FX_IDC:EURBRL", title: "Euro" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "OANDA:XAUUSD", title: "Ouro" },
        { proName: "TVC:US10Y", title: "Treasury 10Y" },
      ],
      showSymbolLogo: false,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "br",
    });
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return <div className="tradingview-widget-container" ref={containerRef} aria-hidden="true" />;
}
