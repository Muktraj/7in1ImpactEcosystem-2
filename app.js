const { createApp } = Vue;

createApp({
    data() {
        return {
            isScrolled: false,
            searchQuery: '',
            mapSrc: 'https://maps.google.com/maps?q=Ahmedabad,%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        // Trigger once on load in case the page is already scrolled
        this.handleScroll();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        searchLocation() {
            if (this.searchQuery.trim() !== '') {
                this.mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(this.searchQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
            }
        }
    }
}).mount('#app');
