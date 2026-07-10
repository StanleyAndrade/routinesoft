"use client";

import { useEffect } from "react";

/**
 * Efeitos client-side da landing page:
 * 1. Animação "fade-up" ao rolar a página (IntersectionObserver)
 * 2. Preenchimento automático dos campos ocultos do formulário (device + geolocalização)
 * 3. Injeção do widget de chat Tawk.to
 *
 * Este componente não renderiza nada visualmente (retorna null),
 * apenas executa os efeitos colaterais necessários no client.
 */
export default function LandingAnimations() {
  useEffect(() => {
    // 1. Animação de entrada dos elementos .fade-up
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));

    // 2. Device + Geolocalização (preenche os inputs hidden do formulário)
    const setFieldValue = (id: string, value: string) => {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (el) el.value = value;
    };

    setFieldValue("device", navigator.userAgent);

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("ip", data.ip || "");
        setFieldValue("country", data.country_name || "");
        setFieldValue("region", data.region || "");
        setFieldValue("city", data.city || "");
        setFieldValue("district", data.district || "");
        setFieldValue("postal", data.postal || "");
        setFieldValue("latitude", data.latitude || "");
        setFieldValue("longitude", data.longitude || "");
        setFieldValue("isp", data.org || "");
      })
      .catch((err) => console.error("Erro ao obter localização:", err));

    // 3. Widget de chat Tawk.to
    const tawkScript = document.createElement("script");
    tawkScript.async = true;
    tawkScript.src = "https://embed.tawk.to/68ad3a4e429f5919255f1e37/1j3ianh6d";
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");
    document.body.appendChild(tawkScript);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      // Evita duplicar o script do Tawk.to em navegações client-side
      if (tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript);
      }
    };
  }, []);

  return null;
}