document.querySelectorAll("[data-copy-button]").forEach((button) => {
    button.addEventListener("click", async () => {
        const container = button.closest(".relative");
        const source = container.querySelector("[data-copy-source]");
        const icon = button.querySelector("[data-copy-icon]");
        const status = button.querySelector("[data-copy-status]");

        try {
            await navigator.clipboard.writeText(source.textContent);

            icon.classList.remove("ri-file-copy-line");
            icon.classList.add("ri-check-line", "animate-bounce");
            button.classList.add("text-success");

            button.setAttribute("aria-label", "Citation copied");
            button.setAttribute("title", "Copied!");
            status.textContent = "Citation copied to clipboard";

            window.setTimeout(() => {
                icon.classList.remove("ri-check-line", "animate-bounce");
                icon.classList.add("ri-file-copy-line");
                button.classList.remove("text-success");

                button.setAttribute("aria-label", "Copy citation");
                button.setAttribute("title", "Copy citation");
                status.textContent = "";
            }, 1600);
        } catch (error) {
            button.setAttribute("title", "Unable to copy");
            status.textContent = "Unable to copy citation";
        }
    });
});