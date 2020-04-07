const API_URL = `${process.env.VUE_APP_API_URL}/people`;

export async function fetchPeople() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function updatePerson(id, patch) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
}
