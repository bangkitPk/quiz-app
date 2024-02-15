export async function getUsers() {
  const response = await fetch("http://localhost:3000/users");

  if (!response.ok) {
    throw new Error(
      `Failed to fetch user data: ${response.status} ${response.statusText}`
    );
  }

  const userData = await response.json();
  return userData;
}

export async function postUsers(newUser) {
  const users = await getUsers();
  const isAlreadyRegistered = users.find(
    (user) => user.username === newUser.username
  );
  if (isAlreadyRegistered) {
    return { error: "Username already registered." };
  }
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to post user data: ${response.status} ${response.statusText}`
    );
  }

  return { success: true };
}
