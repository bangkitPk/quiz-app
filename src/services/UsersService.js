export async function getUsers() {
  const response = await fetch("/users.json");

  if (!response.ok) {
    throw new Error(
      `Failed to fetch user data: ${response.status} ${response.statusText}`
    );
  }

  const userData = await response.json();
  return userData.users;
}
