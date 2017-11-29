$(document).ready(function () {
    sessionStorage.setItem('categories', JSON.stringify({
        categories: [
            {
                id: 1,
                name: 'Food'
            },
            {
                id: 2,
                name: 'Entertainment'
            },
            {
                id: 3,
                name: 'Utilities'
            }
        ]
    }));
});