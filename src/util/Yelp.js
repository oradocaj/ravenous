//import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = 'aX7GAc_9jplR5S9a1pDJ-BbI6OPpErnvhFSdoZIonOTz8h-0VQeKQIfvN2Pe2DNLwtGl-m0SVnrdT8wnhd8EKefBirEuOASXzZkIMOSsI7dm8YrQP74tmXdZUF8iYXYx'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,

                    };
                });
            };
        });
    },
};

export default Yelp;