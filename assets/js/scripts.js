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

// Subscribe form

(() => {
  const subscribeSuccess = document.querySelector("#subscribe-success");
  const subscribePending = document.querySelector("#subscribe-pending");
  const subscribeForm = subscribePending?.querySelector("form");
  const subscribeButton = subscribePending?.querySelector('button[type="submit"]');

  subscribeForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      subscribeButton.disabled = true;
      subscribeButton.textContent = "Registering…";
      const data = new URLSearchParams(new FormData(subscribeForm));
      await fetch(subscribeForm.action, { method: subscribeForm.method, body: data });
    } finally {
      subscribeSuccess.classList.replace("hidden", "flex");
      subscribePending.classList.replace("flex", "hidden");
    }
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
