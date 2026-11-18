(function () {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).catch(function (error) {
      console.warn("007SaaS offline support could not be registered:", error);
    });
  });
  var deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredPrompt = event;
    if (document.getElementById("pwa-install-button")) return;
    var button = document.createElement("button");
    button.id = "pwa-install-button";
    button.type = "button";
    button.textContent = "Install 007SaaS";
    button.setAttribute("aria-label", "Install 007SaaS as an app");
    button.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:9999;padding:11px 16px;border:1px solid rgba(108,231,225,.65);border-radius:999px;background:#101d2b;color:#f3f6fc;font:600 14px system-ui;box-shadow:0 8px 28px rgba(0,0,0,.3);cursor:pointer";
    button.addEventListener("click", async function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      button.remove();
    });
    document.body.appendChild(button);
  });
  window.addEventListener("appinstalled", function () {
    var button = document.getElementById("pwa-install-button");
    if (button) button.remove();
    deferredPrompt = null;
  });
})();