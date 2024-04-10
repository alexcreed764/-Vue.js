Vue.component("cHeader", {
    template: `
<header id="home" class="header center">
    <div class="header__logo">
        <svg width="177.000000" height="50.000000" viewBox="0 0 177 50" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Pixso.</desc>
            <defs/>
            <path id="Interno"
                  d="M44.88 39.02L44.88 38.62L45.68 38.3C46.2133 38.1133 46.56 37.86 46.72 37.54C46.9067 37.22 47 36.7933 47 36.26L47 15.38C47 14.8467 46.92 14.42 46.76 14.1C46.6 13.78 46.24 13.5267 45.68 13.34L44.88 13.02L44.88 12.62L55.16 12.62L55.16 13.02L54.36 13.34C53.8267 13.5267 53.4667 13.78 53.28 14.1C53.12 14.42 53.04 14.8467 53.04 15.38L53.04 36.26C53.04 36.7933 53.12 37.22 53.28 37.54C53.4667 37.8333 53.8267 38.0867 54.36 38.3L55.16 38.62L55.16 39.02L44.88 39.02ZM56.8312 39.02L56.8312 38.62L57.3913 38.46C58.3246 38.1933 58.7913 37.54 58.7913 36.5L58.7913 23.98C58.7913 23.3933 58.6979 22.9667 58.5112 22.7C58.3246 22.4067 57.9646 22.2067 57.4313 22.1L56.8312 21.94L56.8312 21.54L63.6712 19.22L64.0713 19.62L64.3913 22.02C65.3246 21.1933 66.3779 20.5133 67.5513 19.98C68.7246 19.4467 69.8846 19.18 71.0312 19.18C72.7913 19.18 74.1379 19.66 75.0713 20.62C76.0312 21.58 76.5113 23.0467 76.5113 25.02L76.5113 36.54C76.5113 37.58 77.0179 38.2333 78.0312 38.5L78.3913 38.62L78.3913 39.02L68.9512 39.02L68.9512 38.62L69.4713 38.46C70.4046 38.1667 70.8712 37.5133 70.8712 36.5L70.8712 23.74C70.8712 22.0333 70.0179 21.18 68.3112 21.18C67.1379 21.18 65.8579 21.7667 64.4713 22.94L64.4713 36.54C64.4713 37.58 64.9379 38.2333 65.8712 38.5L66.2312 38.62L66.2312 39.02L56.8312 39.02ZM87.3609 39.62C85.6543 39.62 84.3209 39.1933 83.3609 38.34C82.4276 37.4867 81.9609 36.1267 81.9609 34.26L81.9609 20.58L79.2009 20.58L79.2009 20.18L80.1609 20.02C80.9876 19.8333 81.6943 19.5667 82.2809 19.22C82.8943 18.8733 83.4943 18.4067 84.0809 17.82L87.3609 14.18L87.7609 14.18L87.6409 19.78L92.1209 19.78L92.1209 20.58L87.6009 20.58L87.6009 34.98C87.6009 35.9133 87.8009 36.62 88.2009 37.1C88.6276 37.58 89.1609 37.82 89.8009 37.82C90.3609 37.82 90.8543 37.6867 91.2809 37.42C91.7076 37.1267 92.1343 36.74 92.5609 36.26L92.9609 36.66C92.4276 37.5667 91.6943 38.2867 90.7609 38.82C89.8276 39.3533 88.6943 39.62 87.3609 39.62ZM104.137 19.18C105.87 19.18 107.35 19.54 108.577 20.26C109.804 20.9533 110.737 21.9133 111.377 23.14C112.044 24.34 112.377 25.7133 112.377 27.26C112.377 27.5533 112.364 27.86 112.337 28.18C112.31 28.4733 112.257 28.74 112.177 28.98L100.257 28.98C100.284 31.86 100.79 33.94 101.777 35.22C102.79 36.4733 104.284 37.1 106.257 37.1C107.59 37.1 108.67 36.8867 109.497 36.46C110.324 36.0333 111.097 35.4067 111.817 34.58L112.217 34.94C111.39 36.4067 110.284 37.5533 108.897 38.38C107.537 39.2067 105.897 39.62 103.977 39.62C102.084 39.62 100.404 39.22 98.9369 38.42C97.4702 37.5933 96.3235 36.42 95.4969 34.9C94.6702 33.38 94.2569 31.5667 94.2569 29.46C94.2569 27.2733 94.7369 25.42 95.6969 23.9C96.6569 22.3533 97.8835 21.18 99.3769 20.38C100.897 19.58 102.484 19.18 104.137 19.18ZM104.017 19.98C103.244 19.98 102.577 20.22 102.017 20.7C101.484 21.1533 101.057 21.98 100.737 23.18C100.444 24.3533 100.284 26.02 100.257 28.18L107.097 28.18C107.364 25.2733 107.257 23.18 106.777 21.9C106.297 20.62 105.377 19.98 104.017 19.98ZM114.37 39.02L114.37 38.62L114.97 38.46C115.504 38.3 115.864 38.06 116.05 37.74C116.264 37.42 116.37 37.0067 116.37 36.5L116.37 23.98C116.37 23.3933 116.264 22.9667 116.05 22.7C115.864 22.4067 115.504 22.2067 114.97 22.1L114.37 21.94L114.37 21.54L121.25 19.22L121.65 19.62L122.01 23.06L122.01 23.38C122.384 22.6333 122.864 21.9533 123.45 21.34C124.064 20.7 124.73 20.18 125.45 19.78C126.197 19.38 126.93 19.18 127.65 19.18C128.664 19.18 129.437 19.46 129.97 20.02C130.504 20.58 130.77 21.2867 130.77 22.14C130.77 23.0467 130.504 23.7533 129.97 24.26C129.464 24.74 128.85 24.98 128.13 24.98C127.01 24.98 126.024 24.42 125.17 23.3L125.09 23.22C124.824 22.8467 124.517 22.6467 124.17 22.62C123.824 22.5667 123.504 22.7267 123.21 23.1C122.944 23.34 122.717 23.6333 122.53 23.98C122.37 24.3 122.21 24.6733 122.05 25.1L122.05 36.26C122.05 37.3267 122.517 37.9933 123.45 38.26L124.73 38.62L124.73 39.02L114.37 39.02ZM132.027 39.02L132.027 38.62L132.587 38.46C133.52 38.1933 133.987 37.54 133.987 36.5L133.987 23.98C133.987 23.3933 133.893 22.9667 133.707 22.7C133.52 22.4067 133.16 22.2067 132.627 22.1L132.027 21.94L132.027 21.54L138.867 19.22L139.267 19.62L139.587 22.02C140.52 21.1933 141.573 20.5133 142.747 19.98C143.92 19.4467 145.08 19.18 146.227 19.18C147.987 19.18 149.333 19.66 150.267 20.62C151.227 21.58 151.707 23.0467 151.707 25.02L151.707 36.54C151.707 37.58 152.213 38.2333 153.227 38.5L153.587 38.62L153.587 39.02L144.147 39.02L144.147 38.62L144.667 38.46C145.6 38.1667 146.067 37.5133 146.067 36.5L146.067 23.74C146.067 22.0333 145.213 21.18 143.507 21.18C142.333 21.18 141.053 21.7667 139.667 22.94L139.667 36.54C139.667 37.58 140.133 38.2333 141.067 38.5L141.427 38.62L141.427 39.02L132.027 39.02ZM165.272 39.62C163.245 39.62 161.485 39.2067 159.992 38.38C158.498 37.5267 157.338 36.3267 156.512 34.78C155.712 33.2333 155.312 31.42 155.312 29.34C155.312 27.26 155.738 25.46 156.592 23.94C157.472 22.42 158.658 21.2467 160.152 20.42C161.672 19.5933 163.378 19.18 165.272 19.18C167.165 19.18 168.858 19.5933 170.352 20.42C171.845 21.22 173.018 22.38 173.872 23.9C174.752 25.42 175.192 27.2333 175.192 29.34C175.192 31.4467 174.778 33.2733 173.952 34.82C173.152 36.34 172.005 37.5267 170.512 38.38C169.045 39.2067 167.298 39.62 165.272 39.62ZM165.272 38.82C166.205 38.82 166.952 38.5533 167.512 38.02C168.072 37.4867 168.472 36.54 168.712 35.18C168.978 33.82 169.112 31.9 169.112 29.42C169.112 26.9133 168.978 24.98 168.712 23.62C168.472 22.26 168.072 21.3133 167.512 20.78C166.952 20.2467 166.205 19.98 165.272 19.98C164.338 19.98 163.578 20.2467 162.992 20.78C162.432 21.3133 162.018 22.26 161.752 23.62C161.512 24.98 161.392 26.9133 161.392 29.42C161.392 31.9 161.512 33.82 161.752 35.18C162.018 36.54 162.432 37.4867 162.992 38.02C163.578 38.5533 164.338 38.82 165.272 38.82Z"
                  fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd"/>
            <path id="Logo"
                  d="M0 42.0002L13.4588 42.0002L13.4588 32.499C13.4588 30.4854 15.0898 28.8542 17.1035 28.8542C19.1171 28.8542 20.7482 30.4854 20.7482 32.499L20.7482 42.0002L33.9976 42.0002L33.9976 8C15.2211 8 0 23.2212 0 42.0002Z"
                  fill="#CDA274" fill-opacity="1.000000" fill-rule="nonzero"/>
        </svg>
    </div>
    <nav class="header__menu">
        <a href="#" class="header__menu_link">Home</a>
        <a href="#project" class="header__menu_link">Project</a>
        <a href="#blog" class="header__menu_link">Blog</a>
    </nav>
</header>
    `,
    data() {
        return {};
    },
});

Vue.component("articles", {
    template: `
<div class="articles center">
    <div class="articles__content">
        <div v-for="(item, index) in filterArticles" :key="index" class="articles__item">
            <h2 class="articles__item_title">{{ item.title }}</h2>
            <img :src="item.image" alt="rubbish">
            <div class="articles__item_info">
                <span>{{ item.date }}</span>
                <span>{{ item.breadCrumbs }}</span>
            </div>
            <p class="articles__item_text">{{ item.text }}</p>
            <div class="articles__item_quote">
                <span class="articles__item_quote-sign">
                    <svg width="72.800293" height="54.600098" viewBox="0 0 72.8003 54.6001" fill="none"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>Created with Pixso.</desc>
                        <defs/>
                        <path id="“"
                              d="M58.0001 -7.62939e-06C62.4001 0 66.0001 1.46667 68.8001 4.39999C71.4668 7.33334 72.8001 11.2667 72.8001 16.2C72.8001 24.8667 69.9334 32.4 64.2001 38.8C58.3334 45.2 51.3334 50.4667 43.2001 54.6L41.2001 51.2C44.5334 49.0667 47.6668 46.3333 50.6001 43C53.4001 39.6667 55.6001 36.0667 57.2001 32.2L51.6001 28C49.3334 26.5333 47.4668 24.5333 46.0001 22C44.5334 19.6 43.8001 17.2667 43.8001 15C43.8001 10.7333 45.1334 7.13333 47.8001 4.19999C50.3334 1.39999 53.7334 -7.62939e-06 58.0001 -7.62939e-06ZM16.8001 -7.62939e-06C21.2001 -7.62939e-06 24.8001 1.46666 27.6001 4.39999C30.2668 7.33333 31.6001 11.2667 31.6001 16.2C31.6001 24.8667 28.7334 32.4 23.0001 38.8C17.1334 45.2 10.1334 50.4667 2.00009 54.6L9.15527e-05 51.2C3.33343 49.0667 6.46676 46.3333 9.40009 43C12.2001 39.6666 14.4001 36.0667 16.0001 32.2L10.4001 28C8.13342 26.5333 6.26675 24.5333 4.80009 22C3.33343 19.6 2.6001 17.2667 2.6001 15C2.6001 10.7333 3.93343 7.13333 6.60009 4.19999C9.13342 1.39999 12.5334 -7.62939e-06 16.8001 -7.62939e-06Z"
                              fill="#CDA274" fill-opacity="1.000000" fill-rule="evenodd"/>
                    </svg>
                </span>
                <span class="articles__item_quote-text">{{ item.quote }}</span>
            </div>
        </div>
    </div>
    <div class="articles__tags">
        <h3 class="articles__tags_title">Tags</h3>
        <div class="articles__tags_btns">
            <button v-for="(item, index) in tags" :key="index" @click="filterText = item.name"
                    class="articles__tags_btns-item" :class="{'active-tag': item.active }">{{ item.name }}
            </button>
        </div>
    </div>
</div>
    `,
    data() {
        return {
            filterText: "",
            articles: [
                {
                    type: "Kitchen",
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "26 December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
                {
                    type: "Bedroom",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "22 December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
                {
                    type: "Building",
                    title: "Best For Any Office & Business Interior Solution",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "23 December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
                {
                    type: "Kitchen",
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "29 December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
                {
                    type: "Bedroom",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "21 December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
                {
                    type: "Architecture",
                    title: "Let’s Get Solution for Building Construction Work",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "26 December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
                {
                    type: "Kitchen Planning",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "27   December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
                {
                    type: "Architecture",
                    title: "Best For Any Office & Business Interior Solution",
                    image: "./images/art1.jpeg",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    date: "26 December, 2022",
                    breadCrumbs: "Interior / Home / Decore",
                },
            ],
        };
    },
    computed: {
        tags() {
            const tagsAll = Array.from(new Set(this.articles.map(e => e.type)));
            return tagsAll.map(e => ({
                name: e,
                active: e === this.filterText,
            }));
        },
        filterArticles() {
            const response = this.articles.slice();
            return this.filterText === ""
                ? response
                : response.filter((e) => e.type === this.filterText);
        },
    },
    methods: {},
    mounted() {},
});

Vue.component('cFooter', {
    template: `
<footer class="footer center">
    <div class="footer__left">
        <svg width="177.000000" height="50.000000" viewBox="0 0 177 50" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs/>
            <path id="Interno"
                  d="M44.88 39.02L44.88 38.62L45.68 38.3C46.2133 38.1133 46.56 37.86 46.72 37.54C46.9067 37.22 47 36.7933 47 36.26L47 15.38C47 14.8467 46.92 14.42 46.76 14.1C46.6 13.78 46.24 13.5267 45.68 13.34L44.88 13.02L44.88 12.62L55.16 12.62L55.16 13.02L54.36 13.34C53.8267 13.5267 53.4667 13.78 53.28 14.1C53.12 14.42 53.04 14.8467 53.04 15.38L53.04 36.26C53.04 36.7933 53.12 37.22 53.28 37.54C53.4667 37.8333 53.8267 38.0867 54.36 38.3L55.16 38.62L55.16 39.02L44.88 39.02ZM56.8312 39.02L56.8312 38.62L57.3913 38.46C58.3246 38.1933 58.7913 37.54 58.7913 36.5L58.7913 23.98C58.7913 23.3933 58.6979 22.9667 58.5112 22.7C58.3246 22.4067 57.9646 22.2067 57.4313 22.1L56.8312 21.94L56.8312 21.54L63.6712 19.22L64.0713 19.62L64.3913 22.02C65.3246 21.1933 66.3779 20.5133 67.5513 19.98C68.7246 19.4467 69.8846 19.18 71.0312 19.18C72.7913 19.18 74.1379 19.66 75.0713 20.62C76.0312 21.58 76.5113 23.0467 76.5113 25.02L76.5113 36.54C76.5113 37.58 77.0179 38.2333 78.0312 38.5L78.3913 38.62L78.3913 39.02L68.9512 39.02L68.9512 38.62L69.4713 38.46C70.4046 38.1667 70.8712 37.5133 70.8712 36.5L70.8712 23.74C70.8712 22.0333 70.0179 21.18 68.3112 21.18C67.1379 21.18 65.8579 21.7667 64.4713 22.94L64.4713 36.54C64.4713 37.58 64.9379 38.2333 65.8712 38.5L66.2312 38.62L66.2312 39.02L56.8312 39.02ZM87.3609 39.62C85.6543 39.62 84.3209 39.1933 83.3609 38.34C82.4276 37.4867 81.9609 36.1267 81.9609 34.26L81.9609 20.58L79.2009 20.58L79.2009 20.18L80.1609 20.02C80.9876 19.8333 81.6943 19.5667 82.2809 19.22C82.8943 18.8733 83.4943 18.4067 84.0809 17.82L87.3609 14.18L87.7609 14.18L87.6409 19.78L92.1209 19.78L92.1209 20.58L87.6009 20.58L87.6009 34.98C87.6009 35.9133 87.8009 36.62 88.2009 37.1C88.6276 37.58 89.1609 37.82 89.8009 37.82C90.3609 37.82 90.8543 37.6867 91.2809 37.42C91.7076 37.1267 92.1343 36.74 92.5609 36.26L92.9609 36.66C92.4276 37.5667 91.6943 38.2867 90.7609 38.82C89.8276 39.3533 88.6943 39.62 87.3609 39.62ZM104.137 19.18C105.87 19.18 107.35 19.54 108.577 20.26C109.804 20.9533 110.737 21.9133 111.377 23.14C112.044 24.34 112.377 25.7133 112.377 27.26C112.377 27.5533 112.364 27.86 112.337 28.18C112.31 28.4733 112.257 28.74 112.177 28.98L100.257 28.98C100.284 31.86 100.79 33.94 101.777 35.22C102.79 36.4733 104.284 37.1 106.257 37.1C107.59 37.1 108.67 36.8867 109.497 36.46C110.324 36.0333 111.097 35.4067 111.817 34.58L112.217 34.94C111.39 36.4067 110.284 37.5533 108.897 38.38C107.537 39.2067 105.897 39.62 103.977 39.62C102.084 39.62 100.404 39.22 98.9369 38.42C97.4702 37.5933 96.3235 36.42 95.4969 34.9C94.6702 33.38 94.2569 31.5667 94.2569 29.46C94.2569 27.2733 94.7369 25.42 95.6969 23.9C96.6569 22.3533 97.8835 21.18 99.3769 20.38C100.897 19.58 102.484 19.18 104.137 19.18ZM104.017 19.98C103.244 19.98 102.577 20.22 102.017 20.7C101.484 21.1533 101.057 21.98 100.737 23.18C100.444 24.3533 100.284 26.02 100.257 28.18L107.097 28.18C107.364 25.2733 107.257 23.18 106.777 21.9C106.297 20.62 105.377 19.98 104.017 19.98ZM114.37 39.02L114.37 38.62L114.97 38.46C115.504 38.3 115.864 38.06 116.05 37.74C116.264 37.42 116.37 37.0067 116.37 36.5L116.37 23.98C116.37 23.3933 116.264 22.9667 116.05 22.7C115.864 22.4067 115.504 22.2067 114.97 22.1L114.37 21.94L114.37 21.54L121.25 19.22L121.65 19.62L122.01 23.06L122.01 23.38C122.384 22.6333 122.864 21.9533 123.45 21.34C124.064 20.7 124.73 20.18 125.45 19.78C126.197 19.38 126.93 19.18 127.65 19.18C128.664 19.18 129.437 19.46 129.97 20.02C130.504 20.58 130.77 21.2867 130.77 22.14C130.77 23.0467 130.504 23.7533 129.97 24.26C129.464 24.74 128.85 24.98 128.13 24.98C127.01 24.98 126.024 24.42 125.17 23.3L125.09 23.22C124.824 22.8467 124.517 22.6467 124.17 22.62C123.824 22.5667 123.504 22.7267 123.21 23.1C122.944 23.34 122.717 23.6333 122.53 23.98C122.37 24.3 122.21 24.6733 122.05 25.1L122.05 36.26C122.05 37.3267 122.517 37.9933 123.45 38.26L124.73 38.62L124.73 39.02L114.37 39.02ZM132.027 39.02L132.027 38.62L132.587 38.46C133.52 38.1933 133.987 37.54 133.987 36.5L133.987 23.98C133.987 23.3933 133.893 22.9667 133.707 22.7C133.52 22.4067 133.16 22.2067 132.627 22.1L132.027 21.94L132.027 21.54L138.867 19.22L139.267 19.62L139.587 22.02C140.52 21.1933 141.573 20.5133 142.747 19.98C143.92 19.4467 145.08 19.18 146.227 19.18C147.987 19.18 149.333 19.66 150.267 20.62C151.227 21.58 151.707 23.0467 151.707 25.02L151.707 36.54C151.707 37.58 152.213 38.2333 153.227 38.5L153.587 38.62L153.587 39.02L144.147 39.02L144.147 38.62L144.667 38.46C145.6 38.1667 146.067 37.5133 146.067 36.5L146.067 23.74C146.067 22.0333 145.213 21.18 143.507 21.18C142.333 21.18 141.053 21.7667 139.667 22.94L139.667 36.54C139.667 37.58 140.133 38.2333 141.067 38.5L141.427 38.62L141.427 39.02L132.027 39.02ZM165.272 39.62C163.245 39.62 161.485 39.2067 159.992 38.38C158.498 37.5267 157.338 36.3267 156.512 34.78C155.712 33.2333 155.312 31.42 155.312 29.34C155.312 27.26 155.738 25.46 156.592 23.94C157.472 22.42 158.658 21.2467 160.152 20.42C161.672 19.5933 163.378 19.18 165.272 19.18C167.165 19.18 168.858 19.5933 170.352 20.42C171.845 21.22 173.018 22.38 173.872 23.9C174.752 25.42 175.192 27.2333 175.192 29.34C175.192 31.4467 174.778 33.2733 173.952 34.82C173.152 36.34 172.005 37.5267 170.512 38.38C169.045 39.2067 167.298 39.62 165.272 39.62ZM165.272 38.82C166.205 38.82 166.952 38.5533 167.512 38.02C168.072 37.4867 168.472 36.54 168.712 35.18C168.978 33.82 169.112 31.9 169.112 29.42C169.112 26.9133 168.978 24.98 168.712 23.62C168.472 22.26 168.072 21.3133 167.512 20.78C166.952 20.2467 166.205 19.98 165.272 19.98C164.338 19.98 163.578 20.2467 162.992 20.78C162.432 21.3133 162.018 22.26 161.752 23.62C161.512 24.98 161.392 26.9133 161.392 29.42C161.392 31.9 161.512 33.82 161.752 35.18C162.018 36.54 162.432 37.4867 162.992 38.02C163.578 38.5533 164.338 38.82 165.272 38.82Z"
                  fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd"/>
            <path id="Logo"
                  d="M0 42.0002L13.4588 42.0002L13.4588 32.499C13.4588 30.4854 15.0898 28.8542 17.1035 28.8542C19.1171 28.8542 20.7482 30.4854 20.7482 32.499L20.7482 42.0002L33.9976 42.0002L33.9976 8C15.2211 8 0 23.2212 0 42.0002Z"
                  fill="#CDA274" fill-opacity="1.000000" fill-rule="nonzero"/>
        </svg>
        <p>It is a long established fact that a reader will be distracted lookings.</p>
        <div class="footer__left_social">
            <svg width="17.964844" height="14.589844" viewBox="0 0 17.9648 14.5898" fill="none"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs/>
                <path id=""
                      d="M16.1367 3.62109C16.8398 3.09375 17.4727 2.46094 17.9648 1.72266C17.332 2.00391 16.5938 2.21484 15.8555 2.28516C16.6289 1.82812 17.1914 1.125 17.4727 0.246094C16.7695 0.667969 15.9609 0.984375 15.1523 1.16016C14.4492 0.421875 13.5 0 12.4453 0C10.4062 0 8.75391 1.65234 8.75391 3.69141C8.75391 3.97266 8.78906 4.25391 8.85938 4.53516C5.80078 4.35938 3.05859 2.88281 1.23047 0.667969C0.914062 1.19531 0.738281 1.82812 0.738281 2.53125C0.738281 3.79688 1.37109 4.92188 2.39062 5.58984C1.79297 5.55469 1.19531 5.41406 0.703125 5.13281L0.703125 5.16797C0.703125 6.96094 1.96875 8.4375 3.65625 8.78906C3.375 8.85938 3.02344 8.92969 2.70703 8.92969C2.46094 8.92969 2.25 8.89453 2.00391 8.85938C2.46094 10.3359 3.83203 11.3906 5.44922 11.4258C4.18359 12.4102 2.60156 13.0078 0.878906 13.0078C0.5625 13.0078 0.28125 12.9727 0 12.9375C1.61719 13.9922 3.55078 14.5898 5.66016 14.5898C12.4453 14.5898 16.1367 9 16.1367 4.11328C16.1367 3.9375 16.1367 3.79688 16.1367 3.62109Z"
                      fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd"/>
            </svg>
            <svg width="15.750000" height="15.714844" viewBox="0 0 15.75 15.7148" fill="none"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Created with Pixso.</desc>
                <defs/>
                <path id=""
                      d="M3.51562 15.7148L3.51562 5.20312L0.246094 5.20312L0.246094 15.7148L3.51562 15.7148ZM1.86328 3.79688C2.91797 3.79688 3.76172 2.91797 3.76172 1.86328C3.76172 0.84375 2.91797 0 1.86328 0C0.84375 0 0 0.84375 0 1.86328C0 2.91797 0.84375 3.79688 1.86328 3.79688ZM15.7148 15.7148L15.75 15.7148L15.75 9.94922C15.75 7.13672 15.1172 4.95703 11.8125 4.95703C10.2305 4.95703 9.17578 5.83594 8.71875 6.64453L8.68359 6.64453L8.68359 5.20312L5.55469 5.20312L5.55469 15.7148L8.82422 15.7148L8.82422 10.5117C8.82422 9.14062 9.07031 7.83984 10.7578 7.83984C12.4453 7.83984 12.4805 9.38672 12.4805 10.6172L12.4805 15.7148L15.7148 15.7148Z"
                      fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd"/>
            </svg>

        </div>
    </div>
    <div class="footer__center">
        <h5>Pages</h5>
        <a href="#home">Home</a>
        <a href="#project">Project</a>
        <a href="#blog">Blog</a>
    </div>
    <div class="footer__right">
        <h5>Contact</h5>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <a href="mailto:contact@interno.com">contact@interno.com</a>
        <a href="tel:(123) 456 - 7890">(123) 456 - 7890</a>
    </div>
</footer>
    `,
    data() {
        return {}
    },
});
