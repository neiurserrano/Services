document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            const allItems = document.querySelectorAll('.accordion-item');

            // Close all other accordion items
            allItems.forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });

            // Toggle the clicked accordion item
            parent.classList.toggle('active');
        });
    });
});
