const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to Fetch");
    }

    return await response.json();
};

export const createPost = async (data) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export const updatePost = async (id, data) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export const patchPost = async (id, data) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export const deletePost = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    return true;
};