const form = document.getElementById("feedbackForm");
const tableBody = document.querySelector("#submissionsTable tbody");
const status = document.getElementById("formStatus");
const clearBtn = document.getElementById("clearSubmissions");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

// safety check for required DOM elements
if (!form || !tableBody || !status || !clearBtn || !yearEl) {
  console.error('Required DOM elements not found, aborting script.');
}

function escapeHTML(str = "") {
  return String(str).replace(/[&<>"'`=\/]/g, function (s) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "`": "&#96;",
      "/": "&#47;",
      "=": "&#61;",
    }[s];
  });
}

function loadEntries() {
  try {
    return JSON.parse(localStorage.getItem("hopebridge_submissions")) || [];
  } catch (e) {
    console.error("phase error", e);
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem("hopebridge_submissions", JSON.stringify(entries));
}

function addRow(entry, id) {
  const tr = document.createElement("tr");
  tr.dataset.id = id;
  tr.innerHTML = `<td>${new Date(entry.createdAt).toLocaleString()}</td>
    <td>${escapeHTML(entry.name)}</td>
    <td><a href="mailto:${escapeHTML(entry.contact)}">${escapeHTML(entry.contact)}</td>
    <td>${escapeHTML(entry.category)}</td>
    <td>${escapeHTML(entry.message)}</td>
    <td><button class="delete-btn" data-id="${id}" aria-label="delete submission">Delete</button></td>`;
  tableBody.appendChild(tr);
}

function renderAll() {
  tableBody.innerHTML = "";
  const entries = loadEntries();
  entries.forEach((e, i) => addRow(e, i));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const contact = form.contact.value.trim();
  const ngo = form.ngo.value.trim();
  const category = form.category.value;
  const message = form.message.value.trim();

  if (!name || !contact || !category || !message) {
    status.textContent = "Please complete all required fields";
    return;
  }

  const entry = {
    name,
    contact,
    ngo,
    category,
    message,
    createdAt: new Date().toISOString(),
  };
  const entries = loadEntries();
  entries.unshift(entry);

  saveEntries(entries);
  renderAll();
  status.textContent = "Saved locally - demo only.";
  setTimeout(() => (status.textContent = ""), 2500);
  form.reset();
  form.name.focus();
});

tableBody.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    const id = Number(e.target.dataset.id);
    if (!confirm("Delete this submission?")) return;
    const entries = loadEntries();
    entries.splice(id, 1);
    saveEntries(entries);
    renderAll();
    status.textContent = "Deleted";
    setTimeout(() => (status.textContent = ""), 1800);
  }
});

clearBtn.addEventListener("click", (e) => {
  if (!confirm("Clear all submissions?")) return;

  localStorage.removeItem("hopebridge_submissions");
  renderAll();
  status.textContent = "All cleared";
  setTimeout(() => (status.textContent = ""), 1500);
});

window.addEventListener("DOMContentLoaded", renderAll);

function systemPrefersDark() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
function applyTheme(theme) {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");
  if (theme === "dark") {
    html.classList.add("theme-dark");
    btn?.setAttribute("aria-pressed", "true");
  } else {
    html.classList.remove("theme-dark");
    btn?.setAttribute("aria-pressed", "false");
  }
  localStorage.setItem("hopebridge_theme", theme);
}
(function initTheme() {
  const saved = localStorage.getItem("hopebridge_theme");
  if (saved) applyTheme(saved);
  else applyTheme(systemPrefersDark() ? "dark" : "light");

  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const savedNow = localStorage.getItem("hopebridge_theme");
        if (!savedNow) applyTheme(e.matches ? "dark" : "light");
      });
  }
})();
const themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const pressed = themeToggleBtn.getAttribute("aria-pressed") === "true";
    applyTheme(pressed ? "light" : "dark");
  });
}
