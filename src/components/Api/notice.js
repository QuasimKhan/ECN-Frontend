export const getNotice = async () => {
    const response = await fetch('/json/notices.json', {
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
    }

    return await response.json();
}
