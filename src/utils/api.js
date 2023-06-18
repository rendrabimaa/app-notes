const BASE_URL = "http://localhost:5000";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    // sweetAlertError(responseJson.message);

    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function signUp({ fullname, username, password }) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullname, username, password }),
  });

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    // sweetAlertError(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getCategories() {
  const response = await fetchWithToken(`${BASE_URL}/categories`);
  const responseJson = await response.json();

  return { data: responseJson.data.categories };
}

async function postCategories({ name }) {
  const response = await fetchWithToken(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, message: responseJson.message };
  }

  return { error: false, message: responseJson.message };
}

async function editCategories({ name }, id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, message: responseJson.message };
  }

  return { error: false, message: responseJson.message };
}

async function deleteCategories(id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  return { data: responseJson.data.notes };
}

async function postNotes({ title, main, cue, summary, categoryId }) {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, cue, main, summary, categoryId }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, message: responseJson.message };
  }

  return { error: false, message: responseJson.message };
}

async function editNotes({ title, main, cue, summary, categoryId }, id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, main, cue, summary, categoryId }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, message: responseJson.message };
  }

  return { error: false, message: responseJson.message };
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export { getAccessToken, putAccessToken, login, signUp, getUserLogged, getCategories, postCategories, editCategories, deleteCategories, getNotes, postNotes, editNotes, deleteNote };