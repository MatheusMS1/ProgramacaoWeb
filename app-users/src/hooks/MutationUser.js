import { useMutation } from "@tanstack/react-query";

const createUser = async (user) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useCreateUser = () => {
    return useMutation(createUser)
}
