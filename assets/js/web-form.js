(() => {
    const forms = document.querySelectorAll(
        "[data-request-form]"
    );

    forms.forEach((form) => {
        const container = form.closest(
            "[data-form-container]"
        );

        const successPanel = container?.querySelector(
            "[data-form-success]"
        );

        const errorMessage = form.querySelector(
            "[data-form-error]"
        );

        const submitButton = form.querySelector(
            "[data-submit-button]"
        );

        const buttonLabel = submitButton?.querySelector(
            "[data-button-label]"
        );

        const buttonSpinner = submitButton?.querySelector(
            "[data-button-spinner]"
        );

        if (
            !container ||
            !successPanel ||
            !submitButton ||
            !buttonLabel
        ) {
            return;
        }

        const setSubmitting = (isSubmitting) => {
            submitButton.disabled = isSubmitting;

            submitButton.setAttribute(
                "aria-busy",
                String(isSubmitting)
            );

            buttonLabel.textContent = isSubmitting
                ? submitButton.dataset.submittingLabel
                : submitButton.dataset.defaultLabel;

            buttonSpinner?.classList.toggle(
                "hidden",
                !isSubmitting
            );
        };

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            errorMessage?.classList.add("hidden");
            setSubmitting(true);

            try {
                const formData = new FormData(form);
                const body = new URLSearchParams(formData);

                await fetch(form.action, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },
                    body: body.toString()
                });

                form.reset();
                form.classList.add("hidden");
                successPanel.classList.remove("hidden");
                successPanel.focus();
            } catch (error) {
                console.error(
                    "Google Form submission failed:",
                    error
                );

                errorMessage?.classList.remove("hidden");
                setSubmitting(false);
            }
        });
    });
})();