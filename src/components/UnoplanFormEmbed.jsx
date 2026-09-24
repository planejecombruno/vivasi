import { useEffect, useRef, useState } from "react";

export function UnoplanFormEmbed({ form, className = "" }) {
  const frameRef = useRef(null);
  const [height, setHeight] = useState(form?.height || 720);

  useEffect(() => {
    const onMessage = (event) => {
      const frame = frameRef.current;
      if (!frame || event.source !== frame.contentWindow) return;
      if (!event.data || event.data.type !== "unoplan:embed:height") return;
      frame.style.height = `${Math.ceil(event.data.height)}px`;
      setHeight(Math.ceil(event.data.height));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [form]);

  if (!form) return null;

  return (
    <iframe
      ref={frameRef}
      className={className}
      id={`unoplan-${form.id}`}
      src={`https://unoplan.com.br/embed/${form.id}?theme=light`}
      title={form.title}
      width="100%"
      height={height}
      style={{ width: "100%", border: 0, display: "block", height }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
