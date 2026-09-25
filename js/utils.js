const Utils = {
    randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    
    randomColor: () => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(\${hue}, 70%, 60%)`;
    },

    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};
