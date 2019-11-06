var app = new Vue({
    el: '#app',
    data: {
        display: false,
        image: "",
        breeds: [],
        displayBreeds: false,
        breed: "",
    },
    methods: {
         hasDash(cut) {
             console.log("in hasDash");
            if(cut.indexOf("-") == -1) return cut;
            let words = cut.replace("-", " ");
            console.log(words);
            let array = words.split(" ");
            let first = array[0];
            let last = array[1];
            array[0] = last;
            array[1] = first;
            let breed = array.join(" ");
            return breed;
        },
        fetchRandom() {
            this.display = false;
            this.displayBreeds = false;
            var url = "dog?q=";
            console.log("URL " + url);
            fetch(url)
                .then((data) => {
                    return (data.json());
                })
                .then((dogList) => {
                    console.log(dogList);
                    this.image = dogList.message;
                    let http = this.image;
                    http = http.substring(30);
                    let cut = http.substring(0, http.indexOf("/"));
                    cut = this.hasDash(cut);
                    this.breed = cut;
                    console.log("Breed: " + this.breed);
                });
            this.display = true;
        },
      
        getBreeds() {
            var url = "breeds?q=";
            console.log("URL " + url);
            fetch(url)
                .then((data) => {
                    return (data.json());
                })
                .then((breedList) => {
                    console.log(breedList);
                    this.breeds = breedList.message;
                });
        },
        getPic(breed) {
            this.displayBreeds = false;
            console.log(breed);
            this.display = false;
            var url = "dogBreed?q=" + breed;
            console.log("URL " + url);
            fetch(url)
                .then((data) => {
                    return (data.json());
                })
                .then((dogList) => {
                    console.log(dogList);
                    this.image = dogList.message;
                    let http = this.image;
                    http = http.substring(30);
                    let cut = http.substring(0, http.indexOf("/"));
                    cut = this.hasDash(cut);
                    this.breed = cut;
                    console.log("Breed: " + this.breed);
                });
            this.display = true;
        }
    },
    beforeMount() {
        this.getBreeds();

    }
});
