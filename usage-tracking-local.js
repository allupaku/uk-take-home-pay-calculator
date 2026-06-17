(function () {
  if (window.ukTakeHomeUsageTracking) return;

  const metrics = [];

  window.ukTakeHomeUsageTracking = {
    enabled: true,
    metrics,
    log(name, detail) {
      if (!this.enabled) return;
      metrics.push({
        name: String(name || "event"),
        detail: detail && typeof detail === "object" ? detail : {},
        at: new Date().toISOString()
      });
    },
    setEnabled(enabled) {
      this.enabled = !!enabled;
    },
    clear() {
      metrics.length = 0;
    }
  };
})();
