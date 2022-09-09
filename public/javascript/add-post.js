async function newPostHandler(event) {
  await event.preventDefault();

  console.log("CLICKED!");
  const postSection = document.querySelector(".post-section");
  const formEl = document.createElement("form");
  const divEl1 = document.createElement("div");
  const divEl2 = document.createElement("div");

  // Title Elements
  const titleLabelEl = document.createElement("label");
  const titleInputEl = document.createElement("input");

  // Body Elements
  const bodyLabelEl = document.createElement("label");
  const bodyInputEl = document.createElement("input");
  const buttonEl = document.createElement("button");

  formEl.className = "new-post-form";

  // Title Classes
  titleLabelEl.setAttribute("for", "post-title");
  titleInputEl.setAttribute("type", "text");
  titleInputEl.setAttribute("name", "post-title");
  titleInputEl.setAttribute("id", "post-title");
  titleLabelEl.innerText = "Title";

  // Body Classes
  bodyLabelEl.setAttribute("for", "post-url");
  bodyInputEl.setAttribute("type", "text-body");
  bodyInputEl.setAttribute("name", "text-body");
  bodyLabelEl.innerText = "Text";

  // Button Classes
  buttonEl.className = "btn";
  buttonEl.setAttribute("type", "submit");
  buttonEl.innerText = "Create";

  postSection.appendChild(formEl);

  formEl.appendChild(divEl1);
  formEl.appendChild(divEl2);
  formEl.appendChild(buttonEl);

  divEl1.appendChild(titleLabelEl);
  divEl1.appendChild(titleInputEl);
  divEl2.appendChild(bodyLabelEl);
  divEl2.appendChild(bodyInputEl);

  // Create Post Form handler
  async function newFormHandler(event) {
    event.preventDefault();

    console.log("CREATE CLICKED");

    const title = document.querySelector('input[name="post-title"]').value;
    const text_body = document.querySelector('input[name="text-body"]').value;

    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        text_body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
}

document.querySelector(".add-post").addEventListener("click", newPostHandler);
