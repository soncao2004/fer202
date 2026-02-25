// api.js

export const fetchAllUsers = async () => {
    // Kiểm tra online ngay lập tức
    if (!navigator.onLine) {
        return null; 
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //
        if (!response.ok) throw new Error();
        return await response.json(); //
    } catch (error) {
        return null;
    }
};

export const fetchAllPosts = async () => {
    // Kiểm tra online ngay lập tức
    if (!navigator.onLine) {
        return null;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'); //
        if (!response.ok) throw new Error();
        return await response.json(); //
    } catch (error) {
        return null;
    }
};