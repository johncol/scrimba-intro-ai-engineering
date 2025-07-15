const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const audio = document.querySelector("audio");
const errorSection = document.querySelector(".error-section");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  toggleButtonLoadingState(true);
  toggleErrorVisibleState(false);

  query(input.value)
    .then((response) => {
      audio.src = response.audio.url;
      toggleButtonLoadingState(false);
      toggleErrorVisibleState(false);
    })
    .catch((error) => {
      errorSection.querySelector("p").textContent = error.message;
      toggleButtonLoadingState(false);
      toggleErrorVisibleState(true);
    });
});

const HUGGING_FACE_ACCESS_TOKEN = "ADD_YOUR_TOKEN_HERE";

const query = async (text) => {
  const response = await fetch(
    "https://router.huggingface.co/fal-ai/fal-ai/chatterbox/text-to-speech",
    {
      headers: {
        Authorization: `Bearer ${HUGGING_FACE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }

  return await response.json();
};

const toggleButtonLoadingState = (isLoading) => {
  button.disabled = isLoading;
  button.classList.toggle("loading-audio", isLoading);
};

const toggleErrorVisibleState = (isVisible) => {
  errorSection.classList.toggle("visible", isVisible);
};
