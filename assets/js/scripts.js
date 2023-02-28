// Color scheme

(() => {
  const colorSchemeButton = document.querySelector("#color-scheme-button");
  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');

  colorSchemeButton.addEventListener("click", () => {
    const { classList: colorSchemeClass } = document.documentElement;
    const colorScheme = colorSchemeClass.toggle("dark") ? "dark" : "light";
    colorSchemeMeta.setAttribute("content", colorScheme);
    localStorage.setItem("color-scheme", colorScheme);
  });
})();

// Service Worker

/*
{{ $serviceWorker := resources.Get "js/service-worker.js" | resources.ExecuteAsTemplate "service-worker.js" . }}
*/

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("{{ $serviceWorker.RelPermalink }}", {
    scope: "{{ "" | relURL }}",
  });

  window.addEventListener("load", () => {
    navigator.serviceWorker.controller?.postMessage({ command: "trimCaches" });
  });
}
