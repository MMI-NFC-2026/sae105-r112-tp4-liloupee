// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

if (accordeon) {
  accordeon.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const summary = event.target.closest("summary");
    const selectedDetails = summary?.closest("details");

    if (!selectedDetails || !accordeon.contains(summary)) {
      return;
    }

    accordeon.querySelectorAll("details").forEach((details) => {
      if (details !== selectedDetails) {
        details.open = false;
      }
    });
  });
}
